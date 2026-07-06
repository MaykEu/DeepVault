const Dashboard = {
  render(container) {
    var html = '';

    // Welcome hero — first-time visitors only (dynamic counts)
    if (!localStorage.getItem('dv_onboarded')) {
      var totalNotes = 0;
      for (var fi = 0; fi < FOLDERS.length; fi++) {
        totalNotes += (NOTES[FOLDERS[fi].id] || []).length;
      }
      var totalQuizzes = 0;
      for (var qk in QUIZ_DATA) { if (QUIZ_DATA.hasOwnProperty(qk)) totalQuizzes++; }
      html += '<div class="welcome-hero">' +
        '<div class="welcome-hero-icon">🎓</div>' +
        '<div class="welcome-hero-body">' +
          '<h2>Welcome to DeepVault</h2>' +
          '<p>' + totalNotes + ' interactive notes with ' + totalQuizzes + ' quizzes across ' + FOLDERS.length + ' categories — from transistors to Unreal Engine networking.</p>' +
          '<p><strong>Start with Computer Systems →</strong> Everything builds on understanding the hardware.</p>' +
        '</div>' +
        '<button class="welcome-hero-close" onclick="this.parentElement.remove();localStorage.setItem(\'dv_onboarded\',\'1\')">✕</button>' +
      '</div>';
    }

    html += '<div class="dashboard">';
    for (var i = 0; i < FOLDERS.length; i++) {
      var folder = FOLDERS[i];
      var stats = Storage.getFolderStats(folder.id);
      var pct = stats.totalNotes > 0 ? Math.round((stats.completedNotes / stats.totalNotes) * 100) : 0;
      var pctClass = pct > 0 ? (pct < 50 ? ' progress-amber' : ' progress-green') : '';
      var isFirst = !localStorage.getItem('dv_onboarded') && i === 0;

      html += '<div class="folder-card' + (isFirst ? ' folder-card-first' : '') + '" style="--card-accent:' + folder.color + '" onclick="router.navigate(\'#/folder/' + encodeURIComponent(folder.id) + '\')">' +
        (isFirst ? '<div class="folder-card-badge">Start here</div>' : '') +
        '<div class="folder-icon">' + (FOLDER_ICONS[folder.id] || folder.icon) + '</div>' +
        '<div class="folder-name">' + folder.name + '</div>' +
        '<div class="folder-meta">' +
            stats.totalNotes + ' notes' +
            ' · ' + stats.totalQuizzes + ' attempts' +
            (stats.completedNotes > 0 ? ' · ' + stats.completedNotes + ' completed' : '') +
        '</div>' +
        '<div class="folder-progress"><div class="folder-progress-fill' + pctClass + '" style="width:' + pct + '%"></div></div>' +
        (pct > 0 ? '<div class="folder-progress-label">' + pct + '% complete</div>' : '') +
      '</div>';
    }
    html += '</div>';

    var recent = Storage.getRecent();
    if (recent.length > 0) {
      html += '<div style="display:flex;align-items:center;gap:0.5rem;margin-top:2rem;margin-bottom:0.75rem;">' +
        '<h3 style="color:var(--text-secondary);font-size:0.85rem;text-transform:uppercase;letter-spacing:0.05em;margin:0;">\u{1F4C5} Recently Viewed</h3>' +
        '<button class="btn btn-outline btn-sm" style="font-size:0.7rem;padding:0.15em 0.5em;" onclick="Storage.clearRecent();Dashboard.render(document.getElementById(\'app-main\'))">Clear all</button>' +
      '</div>';
      html += '<div class="history-list">';
      for (var r = 0; r < recent.length; r++) {
        var item = recent[r];
        html += '<div class="history-entry">' +
          '<span style="flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">' + item.note + '</span>' +
          '<button class="btn btn-outline btn-sm" style="font-size:0.65rem;padding:0.15em 0.4em;margin-right:0.3rem;" onclick="event.stopPropagation();Storage.removeRecent(' + r + ');Dashboard.render(document.getElementById(\'app-main\'))">\u2715</button>' +
          '<button class="btn btn-primary btn-sm" style="font-size:0.7rem;padding:0.2em 0.6em;" onclick="event.stopPropagation();router.navigate(\'#/folder/' + encodeURIComponent(item.folder) + '/note/' + encodeURIComponent(item.note) + '/learn\')">Open</button>' +
        '</div>';
      }
      html += '</div>';
    }

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

    // Sync at bottom
    html += '<div class="toolbar" style="margin-top:2rem;padding-top:1rem;border-top:1px solid var(--border);">' +
      '<span style="font-size:0.75rem;color:var(--text-muted);margin-right:auto;">Progress saved to this browser. Sync across devices: </span>' +
      '<button class="btn btn-outline btn-sm" onclick="Dashboard.showSync()">☁️ Sync</button>' +
    '</div>';

    container.innerHTML = html;
  },

  // Gist sync UI
  showSync: function() {
    var token = Storage.getGistToken();
    var connected = !!token;
    var status = '<div style="margin-top:1rem;padding:1rem;background:var(--bg-secondary);border:1px solid var(--border);border-radius:var(--radius);">';
    if (connected) {
      status += '<p style="margin:0 0 0.75rem;">☁️ Connected — <span style="color:var(--success)">🟢</span> progress auto-saves to GitHub Gist.</p>' +
        '<button class="btn btn-outline btn-sm" onclick="Storage.setGistToken(\'\');Storage.setGistId(\'\');Dashboard.render(document.getElementById(\'app-main\'))">Disconnect</button>' + '<button class="btn btn-outline btn-sm" style="margin-left:4px;color:var(--danger);" onclick="if(confirm(\'Delete ALL progress?\')){localStorage.clear();sessionStorage.clear();location.reload()}">Reset Data</button>';
    } else {
      status += '<p style="margin:0 0 0.5rem;font-size:0.85rem;">Sync progress across devices with a GitHub token.</p>' +
        '<p style="margin:0 0 0.75rem;font-size:0.75rem;color:var(--text-muted);">Create a <strong>classic token</strong> at github.com/settings/tokens — check ONLY the <strong>gist</strong> scope. Paste it below:</p>' +
        '<input id="gist-token-input" class="text-input" placeholder="ghp_..." style="width:100%;margin-bottom:0.5rem;">' +
        '<button class="btn btn-primary btn-sm" onclick="Dashboard.connectGist()">Connect</button> ' +
        '<button class="btn btn-outline btn-sm" style="margin-left:4px;" onclick="Dashboard.render(document.getElementById(\'app-main\'))">Cancel</button>';
    }
    status += '<div id="sync-status" style="margin-top:0.5rem;font-size:0.8rem;"></div>';
    status += '</div>';
    var old = document.getElementById('sync-panel'); if (old) old.remove();
    status = status.replace('<div style="', '<div id="sync-panel" style="');
    var tb = document.querySelector('.toolbar');
    if (tb) tb.insertAdjacentHTML('afterend', status);
  },

  connectGist: function() {
    var inp = document.getElementById('gist-token-input');
    if (!inp || !inp.value) return;
    Storage.setGistToken(inp.value.trim());
    Dashboard.doSync();
  },

  doSync: async function() {
    var st = document.getElementById('sync-status');
    if (st) st.innerHTML = '<span style="color:var(--warning)">🟡 Syncing...</span>';
    var r = await Storage.syncToGist();
    if (r === 'ok') {
      if (st) st.innerHTML = '<span style="color:var(--success)">🟢 Synced!</span>';
      Dashboard.render(document.getElementById('app-main'));
    } else {
      if (st) st.innerHTML = '<span style="color:var(--danger)">🔴 Sync failed. Check your token.</span>';
    }
  },

};
