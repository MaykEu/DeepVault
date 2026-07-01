const TopicHub = {
  render: function(container, folder) {
    var notes = (NOTES[folder.id] || []).slice();
    var stats = Storage.getFolderStats(folder.id);
    var quizNotes = QUIZ_NOTES[folder.id] || [];
    var pct = stats.totalNotes > 0 ? Math.round((stats.completedNotes / stats.totalNotes) * 100) : 0;

    var html = '<a href="#" class="back-link" onclick="router.navigate(\'#/\')">\u2190 Dashboard</a>';

    // Folder header panel
    html += '<div class="folder-header">' +
      '<div class="folder-header-top">' +
        '<span class="folder-header-icon">' + folder.icon + '</span>' +
        '<div class="folder-header-meta">' +
          '<h2 class="folder-header-title">' + folder.name + '</h2>' +
          '<span class="folder-header-stats">' + notes.length + ' modules \u00b7 ' + stats.completedNotes + ' with attempts</span>' +
        '</div>' +
      '</div>' +
      '<div class="folder-header-progress">' +
        '<div class="folder-header-progress-fill" style="width:' + pct + '%"></div>' +
      '</div>' +
      '<span class="folder-header-pct">' + pct + '% complete</span>' +
    '</div>';

    html += '<div class="topic-hub">';

    for (var i = 0; i < notes.length; i++) {
      var note = notes[i];
      var best = Storage.getBestScore(folder.id, note);
      var count = Storage.getAttemptCount(folder.id, note);
      var hasQuiz = quizNotes.indexOf(note) !== -1;
      var hasLearn = NOTES_CONTENT && NOTES_CONTENT[note];

      var status = 'NOT STARTED';
      var statusClass = 'badge-new';
      if (best !== null) {
        status = best >= 80 ? 'COMPLETED' : 'IN PROGRESS';
        statusClass = best >= 80 ? 'badge-done' : 'badge-progress';
      }

      var dotColor = best === null ? 'var(--text-muted)' : (best >= 80 ? 'var(--success)' : 'var(--warning)');

      var statsHtml = best !== null
        ? 'Best: <strong style="color:' + (best >= 80 ? 'var(--success)' : best >= 50 ? 'var(--warning)' : 'var(--danger)') + '">' + best + '%</strong> \u00b7 ' + count + ' attempt' + (count !== 1 ? 's' : '')
        : '';

      html += '<div class="note-card">' +
        '<span class="note-dot" style="background:' + dotColor + '"></span>' +
        '<div class="note-info">' +
          '<div class="note-name">' + note + '</div>' +
          (statsHtml ? '<div class="note-stats">' + statsHtml + '</div>' : '') +
          '<span class="note-badge ' + statusClass + '">' + status + '</span>' +
        '</div>';

      if (hasLearn) {
        html += '<a class="btn btn-learn btn-sm" href="javascript:void(0)" onclick="router.navigate(\'#/folder/' + encodeURIComponent(folder.id) + '/note/' + encodeURIComponent(note) + '/learn\')">\u{1F4D6} Learn</a>';
      }
      if (hasQuiz) {
        html += '<a class="btn btn-quiz btn-sm" style="margin-left:4px;" href="javascript:void(0)" onclick="router.navigate(\'#/folder/' + encodeURIComponent(folder.id) + '/note/' + encodeURIComponent(note) + '/quiz\')">\u{1F3C6} Quiz</a>';
      }
      if (!hasLearn && !hasQuiz) {
        html += '<span class="badge-coming">Coming soon</span>';
      }

      html += '</div>';
    }

    html += '</div>';
    container.innerHTML = html;
  },
};
