const TopicHub = {
  render: function(container, folder) {
    var notes = NOTES[folder.id] || [];
    var html = '<a href="#" class="back-link" onclick="router.navigate(\'#/\')">\u2190 Dashboard</a>';
    html += '<h2 class="page-title">' + folder.icon + ' ' + folder.name + '</h2>';
    html += '<div class="topic-hub">';

    for (var i = 0; i < notes.length; i++) {
      var note = notes[i];
      var best = Storage.getBestScore(folder.id, note);
      var count = Storage.getAttemptCount(folder.id, note);
      var hasQuiz = (QUIZ_NOTES[folder.id] || []).indexOf(note) !== -1;
      var hasLearn = NOTES_CONTENT && NOTES_CONTENT[note];
      var statsHtml = best !== null
        ? 'Best: <strong style="color:' + (best >= 80 ? 'var(--success)' : best >= 50 ? 'var(--warning)' : 'var(--danger)') + '">' + best + '%</strong> \u00b7 ' + count + ' attempt' + (count !== 1 ? 's' : '')
        : 'No attempts yet';

      html += '<div class="note-card">' +
        '<div class="note-icon">\u{1F4C4}</div>' +
        '<div class="note-info">' +
          '<div class="note-name">' + note + '</div>' +
          '<div class="note-stats">' + statsHtml + '</div>' +
        '</div>' +
        (hasLearn ? '<button class="btn btn-outline btn-sm" onclick="router.navigate(\'#/folder/' + encodeURIComponent(folder.id) + '/note/' + encodeURIComponent(note) + '/learn\')">\u{1F4D6} Learn</button>' : '') +
        (hasQuiz
          ? '<button class="btn btn-primary btn-sm" style="margin-left:4px;" onclick="router.navigate(\'#/folder/' + encodeURIComponent(folder.id) + '/note/' + encodeURIComponent(note) + '/quiz\')">\u270F\uFE0F Quiz</button>'
          : !hasLearn ? '<span class="badge-coming">Coming soon</span>' : '') +
      '</div>';
    }

    html += '</div>';
    container.innerHTML = html;
  },
};
