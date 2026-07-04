const Summary = {
  render(container, state) {
    const correctCount = state.answers.filter((_, i) => i % 2 === 0 && state.answers[i + '_correct'] === true).length;
    const total = state.questions.length;
    const pct = Math.round((correctCount / total) * 100);
    const color = pct >= 80 ? 'var(--success)' : pct >= 50 ? 'var(--warning)' : 'var(--danger)';
    const emoji = pct >= 80 ? '\u{1F3C6}' : pct >= 50 ? '\u{1F4AA}' : '\u{1F4DA}';
    const elapsed = state.elapsed || 0;

    const attempts = Storage.getAttempts(state.folderId, state.noteName);
    const incorrectCount = total - correctCount;
    const historyHtml = attempts.length > 1 ? attempts.slice().reverse().slice(0, 8).map(a => {
      const d = new Date(a.date);
      const aColor = a.percentage >= 80 ? 'var(--success)' : a.percentage >= 50 ? 'var(--warning)' : 'var(--danger)';
      return '<div class="history-entry">\n' +
        '<span style="flex:1;">' + d.toLocaleDateString() + ' ' + d.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'}) + '</span>\n' +
        '<span class="history-time">' + Storage.formatTime(a.elapsed) + '</span>\n' +
        '<span style="color:' + aColor + ';font-weight:600;">' + a.score + '/' + a.total + ' (' + a.percentage + '%)</span>\n' +
      '</div>';
    }).join('') : '';

    const heading = state.isReview ? 'Review Complete!' : 'Quiz Complete!';
    const reviewBtn = !state.isReview && incorrectCount > 0
      ? '<button class="btn btn-outline" onclick="QuizEngine.startReview(document.getElementById(\'app-main\'),\'' + state.folderId.replace(/'/g,"\\'") + '\',\'' + state.noteName.replace(/'/g,"\\'") + '\')">\u{1F501} Review ' + incorrectCount + ' Incorrect</button>'
      : '';

    container.innerHTML =
      '<a href="#" class="back-link" onclick="router.navigate(\'#/folder/' + encodeURIComponent(state.folderId) + '\')">\u2190 Back</a>' +
      '<div class="summary-card">' +
        '<div class="summary-score">' +
          '<div class="summary-score-icon">' + emoji + '</div>' +
          '<div class="summary-score-text" style="color:' + color + '">' + pct + '%</div>' +
          '<div class="summary-score-sub">' + correctCount + ' / ' + total + ' correct</div>' +
          '<div class="summary-score-time">\u23F1 ' + Storage.formatTime(elapsed) + '</div>' +
        '</div>' +
        '<p style="color:var(--text-secondary);font-size:0.85rem;margin-bottom:1rem;">' + state.noteName + '</p>' +
        '<div class="summary-actions">' +
          '<button class="btn btn-outline" onclick="router.navigate(\'#/folder/' + encodeURIComponent(state.folderId) + '/note/' + encodeURIComponent(state.noteName) + '/quiz\')">\u{1F504} Try Again</button>' +
          reviewBtn +
          '<button class="btn btn-outline" onclick="router.navigate(\'#/folder/' + encodeURIComponent(state.folderId) + '/note/' + encodeURIComponent(state.noteName) + '/history\')">\u{1F4CA} View History</button>' +
        '</div>' +
      '</div>' +
      (historyHtml ? '<h3 style="margin-top:2rem;">Previous Attempts</h3><div class="history-list">' + historyHtml + '</div>' : '');
  },
};
