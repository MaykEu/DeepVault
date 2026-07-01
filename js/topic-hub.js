const TopicHub = {
  render(container, folder) {
    const notes = NOTES[folder.id] || [];
    let html = `<h2 class="page-title">${folder.icon} ${folder.name}</h2>`;
    html += '<div class="topic-hub">';

    for (const note of notes) {
      const best = Storage.getBestScore(folder.id, note);
      const count = Storage.getAttemptCount(folder.id, note);
      const hasQuiz = (QUIZ_NOTES[folder.id] || []).includes(note);
      const statsHtml = best !== null
        ? `Best: <strong style="color:${best>=80?'var(--success)':best>=50?'var(--warning)':'var(--danger)'}">${best}%</strong> · ${count} attempt${count!==1?'s':''}`
        : 'No attempts yet';

      html += `
        <div class="note-card">
          <div class="note-icon">📄</div>
          <div class="note-info">
            <div class="note-name">${note}</div>
            <div class="note-stats">${statsHtml}</div>
          </div>
          ${hasQuiz
            ? `<button class="btn btn-primary btn-sm" onclick="router.navigate('#/folder/${encodeURIComponent(folder.id)}/note/${encodeURIComponent(note)}/quiz')">Start Quiz →</button>`
            : `<span class="badge-coming">Coming soon</span>`
          }
        </div>`;
    }

    html += '</div>';
    container.innerHTML = html;
  },
};
