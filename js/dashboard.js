const Dashboard = {
  render(container) {
    var html = '<div class="dashboard">';
    for (var i = 0; i < FOLDERS.length; i++) {
      var folder = FOLDERS[i];
      var stats = Storage.getFolderStats(folder.id);
      var pct = stats.totalNotes > 0 ? Math.round((stats.completedNotes / stats.totalNotes) * 100) : 0;
      html += '<div class="folder-card" onclick="router.navigate(\'#/folder/' + encodeURIComponent(folder.id) + '\')">' +
        '<div class="folder-icon">' + folder.icon + '</div>' +
        '<div class="folder-name">' + folder.name + '</div>' +
        '<div class="folder-meta">' + stats.totalNotes + ' notes \u00b7 ' + stats.completedNotes + ' with attempts</div>' +
        '<div class="folder-progress"><div class="folder-progress-fill" style="width:' + pct + '%"></div></div>' +
      '</div>';
    }
    html += '</div>';

    // Recently Viewed
    var recent = Storage.getRecent();
    if (recent.length > 0) {
      html += '<div style="display:flex;align-items:center;gap:0.5rem;margin-top:2rem;margin-bottom:0.75rem;">' +
        '<h3 style="color:var(--text-secondary);font-size:0.85rem;text-transform:uppercase;letter-spacing:0.05em;margin:0;">\u{1F4C5} Recently Viewed</h3>' +
        '<button class="btn btn-outline btn-sm" style="font-size:0.7rem;padding:0.15em 0.5em;" onclick="Storage.clearRecent();Dashboard.render(document.getElementById(\'app-main\'))">Clear all</button>' +
      '</div>';
      html += '<div class="history-list">';
      for (var r = 0; r < recent.length; r++) {
        var item = recent[r];
        var folder = FOLDERS.find(function(f) { return f.id === item.folder; });
        var folderName = folder ? folder.name : item.folder;
        html += '<div class="history-entry">' +
          '<span style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">' + folder.icon + ' ' + item.note + '</span>' +
          '<button class="btn btn-outline btn-sm" style="font-size:0.65rem;padding:0.15em 0.4em;margin-right:0.3rem;" onclick="event.stopPropagation();Storage.removeRecent(' + r + ');Dashboard.render(document.getElementById(\'app-main\'))">\u2715</button>' +
          '<button class="btn btn-primary btn-sm" style="font-size:0.7rem;padding:0.2em 0.6em;" onclick="event.stopPropagation();router.navigate(\'#/folder/' + encodeURIComponent(item.folder) + '/note/' + encodeURIComponent(item.note) + '/learn\')">Open</button>' +
        '</div>';
      }
      html += '</div>';
    }

    // Reference
    html += '<h3 style="margin-top:2rem;margin-bottom:0.75rem;color:var(--text-secondary);font-size:0.85rem;text-transform:uppercase;letter-spacing:0.05em;">\u{1F4DA} Reference</h3>';
    html += '<div class="dashboard">';
    var refs = [
      { id: 'Glossary', name: 'Glossary', icon: '\u{1F4D6}', desc: 'Quick definitions for every acronym' },
      { id: 'Learning Path', name: 'Learning Path', icon: '\u{1F9ED}', desc: 'Recommended reading order' },
    ];
    for (var rr = 0; rr < refs.length; rr++) {
      var ref = refs[rr];
      html += '<div class="folder-card folder-card-ref" onclick="router.navigate(\'#/reference/' + encodeURIComponent(ref.id) + '\')">' +
        '<div class="folder-icon">' + ref.icon + '</div>' +
        '<div class="folder-name">' + ref.name + '</div>' +
        '<div class="folder-meta">' + ref.desc + '</div>' +
      '</div>';
    }
    html += '</div>';

    container.innerHTML = html;
  },
};
