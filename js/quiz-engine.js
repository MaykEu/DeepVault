const QuizEngine = {
  state: null,

  render(container, folderId, noteName) {
    const data = QUIZ_DATA[noteName];
    if (!data) {
      container.innerHTML = `<div class="page-title">${noteName}</div><p>No quiz available yet. <a href="#" onclick="router.navigate('#/folder/${encodeURIComponent(folderId)}')">← Back</a></p>`;
      return;
    }
    const best = Storage.getBestScore(folderId, noteName);
    const count = Storage.getAttemptCount(folderId, noteName);
    container.innerHTML = `
      <h2 class="page-title">📄 ${noteName}</h2>
      <p style="color:var(--text-secondary);margin-bottom:1.5rem;">${data.questions.length} questions · ${count} previous attempt${count!==1?'s':''}${best!==null?` · Best: ${best}%`:''}</p>
      <button class="btn btn-primary" onclick="router.navigate('#/folder/${encodeURIComponent(folderId)}/note/${encodeURIComponent(noteName)}/quiz')">Start Quiz</button>
      ${count > 0 ? `<button class="btn btn-outline btn-sm" style="margin-left:0.5rem;" onclick="router.navigate('#/folder/${encodeURIComponent(folderId)}/note/${encodeURIComponent(noteName)}/history')">📊 History</button>` : ''}
    `;
  },

  isMC(q) { return q.options && q.options.length > 0; },

  start(container, folderId, noteName, reviewQuestions) {
    const data = QUIZ_DATA[noteName];
    if (!data) { router.navigate('#/'); return; }

    let questions;
    if (reviewQuestions && reviewQuestions.length > 0) {
      questions = reviewQuestions;
    } else {
      questions = this.shuffle([...data.questions]).slice(0, 8);
    }

    this.state = {
      folderId,
      noteName,
      questions,
      currentIndex: 0,
      answers: [],
      submitted: false,
      startTime: Date.now(),
      isReview: !!reviewQuestions,
    };
    this.showQuestion(container);
  },

  shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  },

  showQuestion(container) {
    const s = this.state;
    if (s.currentIndex >= s.questions.length) {
      s.elapsed = Math.round((Date.now() - s.startTime) / 1000);
      Summary.render(container, s);
      return;
    }

    const q = s.questions[s.currentIndex];
    const answered = s.answers[s.currentIndex] !== undefined;
    const complete = (s.currentIndex) / s.questions.length * 100;
    const progressTitle = s.isReview ? 'Review' : 'Quiz';

    let html = `
      <div class="quiz-container">
        <div class="quiz-progress-header">
          <span class="quiz-progress-label">${progressTitle} — Question ${s.currentIndex + 1} of ${s.questions.length}</span>
          <span class="quiz-progress-status">${answered ? '✓ answered' : '—'}</span>
        </div>
        <div class="quiz-progress-bar">
          <div class="quiz-progress-fill" style="width:${complete}%"></div>
        </div>

        <div class="quiz-question">
          <p class="quiz-question-text">${q.question}</p>
    `;

    if (this.isMC(q)) {
      html += '<div class="options-group">';
      const selected = s.answers[s.currentIndex];
      for (let i = 0; i < q.options.length; i++) {
        let cls = 'option-label';
        if (s.submitted) {
          if (i === q.correctIndex) cls += ' option-correct';
          else if (i === selected && !s.answers[s.currentIndex + '_correct']) cls += ' option-incorrect';
        } else if (i === selected) {
          cls += ' selected';
        }
        html += `
          <label class="${cls}" onclick="${!s.submitted ? `QuizEngine.selectOption(${i})` : ''}">
            <input type="radio" name="quiz-opt" class="option-radio" ${i===selected?'checked':''} ${s.submitted?'disabled':''}>
            <span>${q.options[i]}</span>
          </label>`;
      }
      html += '</div>';
    } else {
      const entered = s.answers[s.currentIndex] || '';
      const cls = s.submitted
        ? (s.answers[s.currentIndex + '_correct'] ? 'text-input correct' : 'text-input incorrect')
        : 'text-input';
      html += `
        <input type="text" class="${cls}"
               id="text-answer" value="${entered.replace(/"/g,'&quot;')}" placeholder="Type your answer..."
               ${s.submitted ? 'disabled' : ''}>
      `;
    }

    if (s.submitted) {
      const isCorrect = s.answers[s.currentIndex + '_correct'];
      html += `
        <div class="feedback ${isCorrect ? 'feedback-correct' : 'feedback-incorrect'}">
          ${isCorrect ? '✅ Correct!' : '❌ Incorrect'}
        </div>
        ${q.explanation ? `<p class="quiz-explanation">${q.explanation}</p>` : ''}
      `;
      if (s.currentIndex < s.questions.length - 1) {
        html += `<button class="btn btn-primary" style="margin-top:1rem;" onclick="QuizEngine.nextQuestion()">Next →</button>`;
      } else {
        const btnLabel = s.isReview ? 'Finish Review' : 'See Results';
        html += `<button class="btn btn-success" style="margin-top:1rem;" onclick="QuizEngine.finish()">${btnLabel}</button>`;
      }
    } else {
      html += `<button class="btn btn-primary" style="margin-top:1rem;" onclick="QuizEngine.submitAnswer()">Submit Answer</button>`;
    }

    html += '</div></div>';
    container.innerHTML = html;
  },

  selectOption(index) {
    this.state.answers[this.state.currentIndex] = index;
    this.showQuestion(document.getElementById('app-main'));
  },

  submitAnswer() {
    const s = this.state;
    const q = s.questions[s.currentIndex];
    
    if (this.isMC(q)) {
      if (s.answers[s.currentIndex] === undefined) return;
      const correct = s.answers[s.currentIndex] === q.correctIndex;
      s.answers[s.currentIndex + '_correct'] = correct;
      s.answers[s.currentIndex + '_given'] = q.options[s.answers[s.currentIndex]];
    } else {
      const el = document.getElementById('text-answer');
      if (!el || !el.value.trim()) return;
      const answer = el.value.trim();
      s.answers[s.currentIndex] = answer;
      const correct = answer.toLowerCase() === q.correctAnswer.toLowerCase()
                       || (q.acceptableAnswers && q.acceptableAnswers.some(a => a.toLowerCase() === answer.toLowerCase()));
      s.answers[s.currentIndex + '_correct'] = correct;
      s.answers[s.currentIndex + '_given'] = answer;
    }
    s.submitted = true;
    this.showQuestion(document.getElementById('app-main'));
  },

  nextQuestion() {
    this.state.currentIndex++;
    this.state.submitted = false;
    this.showQuestion(document.getElementById('app-main'));
  },

  finish() {
    const s = this.state;
    if (!s.elapsed) s.elapsed = Math.round((Date.now() - s.startTime) / 1000);
    const correctCount = s.answers.filter((_, i) => i % 2 === 0 && s.answers[i + '_correct'] === true).length;
    const answerLog = [];
    for (let i = 0; i < s.questions.length; i++) {
      answerLog.push({
        question: s.questions[i].question,
        given: s.answers[i + '_given'] || s.answers[i] || '',
        correct: s.answers[i + '_correct'] || false,
      });
    }

    if (!s.isReview) {
      Storage.addAttempt(s.folderId, s.noteName, correctCount, s.questions.length, answerLog, s.elapsed);
    }
    Summary.render(document.getElementById('app-main'), s);
  },

  startReview(container, folderId, noteName) {
    const attempts = Storage.getAttempts(folderId, noteName);
    if (attempts.length === 0) return;

    const last = attempts[attempts.length - 1];
    const data = QUIZ_DATA[noteName];
    if (!data) return;

    // Find questions that were answered incorrectly in the last attempt
    const wrongQuestions = [];
    if (last.answers) {
      for (let i = 0; i < last.answers.length; i++) {
        if (!last.answers[i].correct) {
          // Find the original question data
          const qText = last.answers[i].question;
          const found = data.questions.find(dq => dq.question === qText);
          if (found) wrongQuestions.push(found);
        }
      }
    }

    if (wrongQuestions.length === 0) {
      container.innerHTML = `
        <div class="summary-card">
          <h2>🎉 Perfect Score!</h2>
          <p style="color:var(--text-secondary);">No questions to review — you got them all right!</p>
          <button class="btn btn-outline" style="margin-top:1rem;" onclick="router.navigate('#/folder/${encodeURIComponent(folderId)}/note/${encodeURIComponent(noteName)}/quiz')">Take Full Quiz</button>
        </div>`;
      return;
    }

    this.start(container, folderId, noteName, wrongQuestions);
  },
};
