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
          '<span class="folder-header-stats">' + notes.length + ' modules \u00b7 ' + stats.completedNotes + ' with attempts' + '</span>' +
        '</div>' +
      '</div>' +
      '<div class="folder-header-progress">' +
        '<div class="folder-header-progress-fill" style="width:' + pct + '%"></div>' +
      '</div>' +
      '<span class="folder-header-pct">' + pct + '% complete</span>' +
    '</div>';

    // Group notes by section headers (detect subfolder patterns or logical groups)
    var groups = [];
    var sectionNames = {
      'Core Language': 'Core Language',
      'Memory & Ownership': 'Memory & Ownership',
      'Types & Data': 'Types & Data',
      'OOP & Polymorphism': 'OOP & Polymorphism',
      'Advanced': 'Advanced Math',
      'UE Math': 'Unreal Engine Math',
      'Cross-Cutting': 'Cross-Cutting',
    };

    // Try to detect groups from note prefix patterns
    for (var name in sectionNames) {
      // Not applicable, skip grouping for now — all notes in one flat list
    }

    // Build note cards
    html += '<div class="topic-hub">';

    // Track if we need to show a section header
    var lastPrefix = '';

    for (var i = 0; i < notes.length; i++) {
      var note = notes[i];
      var best = Storage.getBestScore(folder.id, note);
      var count = Storage.getAttemptCount(folder.id, note);
      var hasQuiz = quizNotes.indexOf(note) !== -1;
      var hasLearn = NOTES_CONTENT && NOTES_CONTENT[note];

      // Determine status
      var status = 'NOT STARTED';
      var statusClass = 'status-new';
      if (best !== null) {
        status = best >= 80 ? 'COMPLETED' : 'IN PROGRESS';
        statusClass = best >= 80 ? 'status-done' : 'status-progress';
      }

      // Status dot
      var dotColor = best === null ? 'var(--text-muted)' : (best >= 80 ? 'var(--success)' : 'var(--warning)');

      var statsHtml = best !== null
        ? 'Best: <strong style="color:' + (best >= 80 ? 'var(--success)' : best >= 50 ? 'var(--warning)' : 'var(--danger)') + '">' + best + '%</strong> \u00b7 ' + count + ' attempt' + (count !== 1 ? 's' : '')
        : '';

      html += '<div class="note-card">' +
        '<span class="note-status-dot" style="background:' + dotColor + '"></span>' +
        '<div class="note-info">' +
          '<div class="note-name">' + note + '</div>' +
          (statsHtml ? '<div class="note-stats">' + statsHtml + '</div>' : '') +
          '<span class="note-status-badge ' + statusClass + '">' + status + '</span>' +
        '</div>' +
        (hasLearn ? '<button class="btn btn-learn btn-sm" onclick="router.navigate(\'#/folder/' + encodeURIComponent(folder.id) + '/note/' + encodeURIComponent(note) + '/learn\')">\u{1F4D6} Learn</button>' : '') +
        (hasQuiz
          ? '<button class="btn btn-quiz btn-sm" style="margin-left:4px;" onclick="router.navigate(\'#/folder/' + encodeURIComponent(folder.id) + '/note/' + encodeURIComponent(note) + '/quiz\')">\u{1F3C6} Quiz</button>'
          : !hasLearn ? '<span class="badge-coming">Coming soon</span>' : '') +
      '</div>';
    }

    html += '</div>';
    container.innerHTML = html;
  },
};
