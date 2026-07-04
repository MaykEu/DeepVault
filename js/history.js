const HistoryView = {
  render(container, folderId, noteName) {
    const attempts = Storage.getAttempts(folderId, noteName);
    const folder = FOLDERS.find(f => f.id === folderId);

    var html = '<a href="#" class="back-link" onclick="router.navigate(\'#/folder/' + encodeURIComponent(folderId) + '/note/' + encodeURIComponent(noteName) + '/quiz\')">\u2190 Back</a>';
    html += '<h2 class="page-title">\u{1F4CA} Score History</h2>';
    html += '<p style="color:var(--text-secondary);margin-bottom:1.5rem;">' + noteName + '</p>';

    if (attempts.length === 0) {
      html += '<p>No attempts yet. <a href="#" onclick="router.navigate(\'#/folder/' + encodeURIComponent(folderId) + '/note/' + encodeURIComponent(noteName) + '/quiz\')">Take the quiz</a></p>';
    } else {
      html += '<div class="history-list">';
      for (var i = 0; i < attempts.slice().reverse().length; i++) {
        var a = attempts.slice().reverse()[i];
        var d = new Date(a.date);
        var color = a.percentage >= 80 ? 'var(--success)' : a.percentage >= 50 ? 'var(--warning)' : 'var(--danger)';
        html +=
          '<div class="history-entry">' +
            '<span style="flex:1;">' + d.toLocaleDateString() + ' ' + d.toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'}) + '</span>' +
            '<span class="history-time">' + Storage.formatTime(a.elapsed) + '</span>' +
            '<span style="color:' + color + ';font-weight:600;">' + a.score + '/' + a.total + '</span>' +
            '<span style="color:' + color + ';">' + a.percentage + '%</span>' +
          '</div>';
      }
      html += '</div>';
      html += '<p style="margin-top:1rem;color:var(--text-secondary);font-size:0.85rem;">' + attempts.length + ' total attempt' + (attempts.length !== 1 ? 's' : '') + '</p>';
    }

    html +=
      '<div style="margin-top:1.5rem;">' +
        '<button class="btn btn-primary" onclick="router.navigate(\'#/folder/' + encodeURIComponent(folderId) + '/note/' + encodeURIComponent(noteName) + '/quiz\')">Take Quiz</button>' +
        '<button class="btn btn-outline btn-sm" style="margin-left:0.5rem;" onclick="router.navigate(\'#/folder/' + encodeURIComponent(folderId) + '\')">\u2190 Back to ' + (folder ? folder.name : 'Folder') + '</button>' +
      '</div>';

    container.innerHTML = html;
  },
};
