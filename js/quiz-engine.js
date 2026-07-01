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

  start(container, folderId, noteName) {
    const data = QUIZ_DATA[noteName];
    if (!data) { router.navigate('#/'); return; }

    this.state = {
      folderId,
      noteName,
      questions: this.shuffle([...data.questions]).slice(0, 8),
      currentIndex: 0,
      answers: [],
      submitted: false,
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
      Summary.render(container, s);
      return;
    }

    const q = s.questions[s.currentIndex];
    const progress = ((s.currentIndex) / s.questions.length) * 100;
    const answered = s.answers[s.currentIndex] !== undefined;

    let html = `
      <div class="quiz-container">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.3rem;">
          <span style="color:var(--text-secondary);font-size:0.85rem;">Question ${s.currentIndex + 1} of ${s.questions.length}</span>
          <span style="color:var(--text-muted);font-size:0.8rem;">${answered ? '✓' : '—'}</span>
        </div>
        <div class="progress-bar"><div class="progress-fill" style="width:${progress}%"></div></div>

        <div class="quiz-question">
          <p style="font-size:1.1rem;margin-bottom:1rem;font-weight:500;">${q.question}</p>
    `;

    if (q.type === 'multiple_choice') {
      html += '<div class="options-group">';
      const selected = s.answers[s.currentIndex];
      for (let i = 0; i < q.options.length; i++) {
        let cls = 'option-label';
        if (s.submitted) {
          if (i === q.correctIndex) cls += ' correct';
          else if (i === selected) cls += ' incorrect';
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
      html += `
        <input type="text" class="text-input ${s.submitted ? (entered === q.correctAnswer ? 'correct' : 'incorrect') : ''}"
               id="text-answer" value="${entered}" placeholder="Type your answer..."
               ${s.submitted ? 'disabled' : ''}>
      `;
    }

    if (s.submitted) {
      const isCorrect = s.answers[s.currentIndex + '_correct'];
      html += `
        <div class="feedback ${isCorrect ? 'feedback-correct' : 'feedback-incorrect'}">
          ${isCorrect ? '✅ Correct!' : '❌ Incorrect'}
        </div>
        <p style="color:var(--text-secondary);margin-top:0.8rem;font-size:0.9rem;">${q.explanation}</p>
      `;
      if (s.currentIndex < s.questions.length - 1) {
        html += `<button class="btn btn-primary" style="margin-top:1rem;" onclick="QuizEngine.nextQuestion()">Next →</button>`;
      } else {
        html += `<button class="btn btn-success" style="margin-top:1rem;" onclick="QuizEngine.finish()">See Results</button>`;
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
    
    if (q.type === 'multiple_choice') {
      if (s.answers[s.currentIndex] === undefined) return;
      const correct = s.answers[s.currentIndex] === q.correctIndex;
      s.answers[s.currentIndex + '_correct'] = correct;
      s.answers[s.currentIndex + '_given'] = q.options[s.answers[s.currentIndex]];
    } else {
      const el = document.getElementById('text-answer');
      if (!el || !el.value.trim()) return;
      const answer = el.value.trim();
      s.answers[s.currentIndex] = answer;
      const correct = answer.toLowerCase() === q.correctAnswer.toLowerCase();
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
    const score = s.answers.filter((_, i) => i % 2 === 0 && s.answers[i + '_correct'] === true).length;
    const answerLog = [];
    for (let i = 0; i < s.questions.length; i++) {
      answerLog.push({
        questionIndex: i,
        given: s.answers[i + '_given'] || s.answers[i] || '',
        correct: s.answers[i + '_correct'] || false,
      });
    }
    Storage.addAttempt(s.folderId, s.noteName, score, s.questions.length, answerLog);
    Summary.render(document.getElementById('app-main'), s);
  },
};
