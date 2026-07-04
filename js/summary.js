const Summary = {
  render(container, state) {
    const correctCount = state.answers.filter((_, i) => i % 2 === 0 && state.answers[i + '_correct'] === true).length;
    const total = state.questions.length;
    const pct = Math.round((correctCount / total) * 100);
    const color = pct >= 80 ? 'var(--success)' : pct >= 50 ? 'var(--warning)' : 'var(--danger)';
    const elapsed = state.elapsed || 0;

    const circumference = 2 * Math.PI * 54;
    const offset = circumference - (pct / 100) * circumference;

    const attempts = Storage.getAttempts(state.folderId, state.noteName);
    const incorrectCount = total - correctCount;
    const historyHtml = attempts.length > 1 ? attempts.slice().reverse().slice(0, 8).map(a => {
      const d = new Date(a.date);
      const aColor = a.percentage >= 80 ? 'var(--success)' : a.percentage >= 50 ? 'var(--warning)' : 'var(--danger)';
      return `<div class="history-entry">
        <span style="flex:1;">${d.toLocaleDateString()} ${d.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})}</span>
        <span class="history-time">${Storage.formatTime(a.elapsed)}</span>
        <span style="color:${aColor};font-weight:600;">${a.score}/${a.total} (${a.percentage}%)</span>
      </div>`;
    }).join('') : '';

    const heading = state.isReview ? 'Review Complete!' : 'Quiz Complete!';
    const reviewBtn = !state.isReview && incorrectCount > 0
      ? `<button class="btn btn-outline" onclick="QuizEngine.startReview(document.getElementById('app-main'),'${state.folderId.replace(/'/g,"\\'")}','${state.noteName.replace(/'/g,"\\'")}')">🔁 Review ${incorrectCount} Incorrect</button>`
      : '';

    container.innerHTML = `
      <div class="summary-card">
        <h2 style="margin-bottom:1.5rem;">${heading}</h2>
        <div class="score-ring-container">
          <svg class="score-ring-svg" width="140" height="140" viewBox="0 0 140 140">
            <circle class="score-ring-bg" cx="70" cy="70" r="54"/>
            <circle class="score-ring-fill" cx="70" cy="70" r="54"
                    stroke="${color}" stroke-dasharray="${circumference}" stroke-dashoffset="${offset}"/>
          </svg>
          <div class="score-text" style="color:${color}">${pct}%</div>
        </div>
        <p style="font-size:1.1rem;margin-bottom:0.25rem;">${correctCount} / ${total} correct</p>
        <p style="color:var(--text-secondary);font-size:0.85rem;margin-bottom:0.25rem;">${state.noteName}</p>
        <p class="summary-elapsed">⏱ ${Storage.formatTime(elapsed)}</p>
        <div class="summary-actions">
          <button class="btn btn-outline" onclick="router.navigate('#/folder/${encodeURIComponent(state.folderId)}/note/${encodeURIComponent(state.noteName)}/quiz')">🔄 Try Again</button>
          ${reviewBtn}
          <button class="btn btn-outline" onclick="router.navigate('#/folder/${encodeURIComponent(state.folderId)}/note/${encodeURIComponent(state.noteName)}/history')">📊 View History</button>
          <button class="btn btn-outline btn-sm" onclick="router.navigate('#/folder/${encodeURIComponent(state.folderId)}')">← Back</button>
        </div>
      </div>
      ${historyHtml ? `<h3 style="margin-top:2rem;">Previous Attempts</h3><div class="history-list">${historyHtml}</div>` : ''}
    `;
  },
};
