const QuizEngine = {
  state: null,
  questionsPerQuiz: 7,  // draw N from shuffled pool; if pool < N, show all

  render(container, folderId, noteName) {
    const data = QUIZ_DATA[noteName];
    if (!data) {
      container.innerHTML = `<div class="page-title">${noteName}</div><p>No quiz available yet. <a href="javascript:void(0)" onclick="router.navigate('#/folder/${encodeURIComponent(folderId)}')">← Back</a></p>`;
      return;
    }
    const best = Storage.getBestScore(folderId, noteName);
    const count = Storage.getAttemptCount(folderId, noteName);
    const poolSize = data.questions.length;
    const perQuiz = Math.min(this.questionsPerQuiz, poolSize);
    container.innerHTML = `
      <h2 class="page-title">📄 ${noteName}</h2>
      <p style="color:var(--text-secondary);margin-bottom:1.5rem;">${poolSize} questions in pool · ${perQuiz} per quiz · ${count} previous attempt${count!==1?'s':''}${best!==null?` · Best: ${best}%`:''}</p>
      <button class="btn btn-primary" onclick="router.navigate('#/folder/${encodeURIComponent(folderId)}/note/${encodeURIComponent(noteName)}/quiz')">Start Quiz</button>
      ${count > 0 ? `<button class="btn btn-outline btn-sm" style="margin-left:0.5rem;" onclick="router.navigate('#/folder/${encodeURIComponent(folderId)}/note/${encodeURIComponent(noteName)}/history')">📊 History</button>` : ''}
    `;
  },

  isMC(q) { return q.options && q.options.length > 0; },
  isMulti(q) { return Array.isArray(q.correctAnswer); },

  findCorrectIndex(q) {
    // Robust match: try exact first, then normalized fallback
    let idx = q.options.indexOf(q.correctAnswer);
    if (idx >= 0) return idx;
    const norm = s => (s || '').trim().toLowerCase();
    const target = norm(q.correctAnswer);
    return q.options.findIndex(o => norm(o) === target);
  },

  findCorrectIndices(q) {
    // For multi-correct: find indices of all correctAnswer entries
    const norm = s => (s || '').trim().toLowerCase();
    const targets = q.correctAnswer.map(a => norm(a));
    const indices = [];
    for (let i = 0; i < q.options.length; i++) {
      if (targets.indexOf(norm(q.options[i])) >= 0) indices.push(i);
    }
    // If not found by text, try back: correctAnswer strings may be different from options
    // In that case try literal match
    if (indices.length === 0) {
      for (let i = 0; i < q.options.length; i++) {
        if (q.correctAnswer.indexOf(q.options[i]) >= 0) indices.push(i);
      }
    }
    return indices;
  },

  start(container, folderId, noteName, reviewQuestions) {
    const data = QUIZ_DATA[noteName];
    if (!data) { router.navigate('#/'); return; }

    let questions;
    if (reviewQuestions && reviewQuestions.length > 0) {
      questions = reviewQuestions;
    } else {
      const drawCount = Math.min(this.questionsPerQuiz, data.questions.length);
      questions = this.shuffle([...data.questions]).slice(0, drawCount);
    // Shuffle options for each MC question to avoid length bias
    for (var qi = 0; qi < questions.length; qi++) {
      if (questions[qi].options) questions[qi].options = this.shuffle([...questions[qi].options]);
    }
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
    const answered = s.answers[s.currentIndex] !== undefined || (document.getElementById('text-answer') && document.getElementById('text-answer').value.trim());
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
      const isMulti = this.isMulti(q);
      html += '<div class="options-group' + (isMulti ? ' multi-select' : '') + '">';
      const selected = s.answers[s.currentIndex];
      // For multi: selected is an array of indices, for single: just an index
      const correctIdx = this.findCorrectIndex(q);
      const correctIndices = isMulti ? this.findCorrectIndices(q) : null;
      for (let i = 0; i < q.options.length; i++) {
        let cls = 'option-label';
        const isSelected = isMulti ? (Array.isArray(selected) && selected.indexOf(i) >= 0) : (i === selected);
        if (s.submitted) {
          if (isMulti) {
            if (correctIndices.indexOf(i) >= 0) cls += ' option-correct';
            else if (isSelected) cls += ' option-incorrect';
          } else {
            if (i === correctIdx) cls += ' option-correct';
            else if (i === selected && !s.answers[s.currentIndex + '_correct']) cls += ' option-incorrect';
          }
        } else if (isSelected) {
          cls += ' selected';
        }
        const inputType = isMulti ? 'checkbox' : 'radio';
        const inputName = isMulti ? 'quiz-chk' : 'quiz-opt';
        html += `
          <label class="${cls}" onclick="${!s.submitted ? `QuizEngine.selectOption(${i})` : ''}">
            <input type="${inputType}" name="${inputName}" class="option-radio" ${isSelected?'checked':''} ${s.submitted?'disabled':''}>
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
      const correctAns = this.isMC(q) ? q.options[this.findCorrectIndex(q)] : (q.correctAnswer || '');
      html += `
        <div class="feedback ${isCorrect ? 'feedback-correct' : 'feedback-incorrect'}">
          ${isCorrect ? '✅ Correct!' : '❌ Incorrect'}
        </div>
        ${q.explanation ? `<p class="quiz-explanation">${q.explanation}</p>` : ''}
        ${!isCorrect && correctAns ? `<p class="quiz-correct-answer"><strong>Correct answer:</strong> ${correctAns}</p>` : ''}
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
    const s = this.state;
    const q = s.questions[s.currentIndex];
    if (this.isMulti(q)) {
      // Toggle in/out of selection array
      let sel = s.answers[s.currentIndex];
      if (!Array.isArray(sel)) sel = [];
      const pos = sel.indexOf(index);
      if (pos >= 0) sel.splice(pos, 1);
      else sel.push(index);
      s.answers[s.currentIndex] = sel;
    } else {
      s.answers[s.currentIndex] = index;
    }
    this.showQuestion(document.getElementById('app-main'));
  },

  submitAnswer() {
    const s = this.state;
    const q = s.questions[s.currentIndex];
    
    if (this.isMC(q)) {
      if (this.isMulti(q)) {
        var sel = s.answers[s.currentIndex];
        if (!Array.isArray(sel) || sel.length === 0) return;
        const correctIndices = this.findCorrectIndices(q);
        // Correct if same length and all selected match correct set
        const correct = sel.length === correctIndices.length && sel.every(v => correctIndices.indexOf(v) >= 0);
        s.answers[s.currentIndex + '_correct'] = correct;
        s.answers[s.currentIndex + '_given'] = sel.map(i => q.options[i]).join('; ');
      } else {
        if (s.answers[s.currentIndex] === undefined) return;
        // Use robust matching after option shuffle
        const correctIdx = this.findCorrectIndex(q);
        const correct = s.answers[s.currentIndex] === correctIdx;
        s.answers[s.currentIndex + '_correct'] = correct;
        s.answers[s.currentIndex + '_given'] = q.options[s.answers[s.currentIndex]];
      }
    } else {
      const el = document.getElementById('text-answer');
      if (!el || !el.value.trim()) return;
      const answer = el.value.trim();
      s.answers[s.currentIndex] = answer;
      const ansLower = answer.replace(/\s/g,'').toLowerCase();
      const corrLower = String(q.correctAnswer || '').replace(/\s/g,'').toLowerCase();
      // Exact match or acceptable answers
      var correct = ansLower === corrLower
        || (q.acceptableAnswers && q.acceptableAnswers.some(function(a) { return a.replace(/\s/g,'').toLowerCase() === ansLower; }));
      // Keyword match: user input contains most key words from correct answer
      if (!correct && corrLower.length > 10) {
        var keywords = corrLower.split(/[\s,;—\-]+/).filter(function(w) { return w.length > 2; });
        var matched = keywords.filter(function(w) { return ansLower.indexOf(w) >= 0; });
        correct = matched.length >= Math.ceil(keywords.length * 0.6);
      }
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
    const correctCount = s.answers.filter((_, i) => s.answers[i + '_correct'] === true).length;
    const answerLog = [];
    for (let i = 0; i < s.questions.length; i++) {
      const q = s.questions[i];
      const isMC = !!q.options;
      answerLog.push({
        questionText: q.question,
        userAnswer: isMC ? (q.options[s.answers[i]] || '') : (s.answers[i] || ''),
        correct: s.answers[i + '_correct'] || false,
        correctAnswer: isMC ? q.options[this.findCorrectIndex(q)] : (q.correctAnswer || ''),
      });
    }

    if (!s.isReview) {
      Storage.addAttempt(s.folderId, s.noteName, correctCount, s.questions.length, answerLog, s.elapsed);
      if (Storage.getGistToken()) Storage.syncToGist();
    }
    // Store result so history back-button can return to summary
    sessionStorage.setItem('dv_last_result_' + s.folderId + '_' + s.noteName, JSON.stringify({
      folderId: s.folderId, noteName: s.noteName,
      correctCount: correctCount, total: s.questions.length,
      pct: Math.round((correctCount / s.questions.length) * 100),
      elapsed: s.elapsed, noteName: s.noteName, isReview: s.isReview
    }));
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
          const qText = last.answers[i].questionText || last.answers[i].question;
          const found = data.questions.find(dq => (dq.question || dq.q) === qText);
          if (found) wrongQuestions.push(found);
        }
      }
    }

    if (wrongQuestions.length === 0) {
      container.innerHTML = `
        <div class="summary-card">
          <h2>🎉 Perfect Score!</h2>
          <p style="color:var(--text-secondary);">No questions to review — you got them all right!</p>
          <button class="btn btn-outline" style="margin-top:1rem;" href="javascript:void(0)" onclick="router.navigate('#/folder/${encodeURIComponent(folderId)}/note/${encodeURIComponent(noteName)}/quiz')">Take Full Quiz</button>
        </div>`;
      return;
    }

    this.start(container, folderId, noteName, wrongQuestions);
  },
};
