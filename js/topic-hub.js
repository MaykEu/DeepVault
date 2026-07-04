const TopicHub = {
  activeTab: {},
  collapsed: {},

  render: function(container, folder) {
    var notes = (NOTES[folder.id] || []).slice();
    var stats = Storage.getFolderStats(folder.id);
    var quizNotes = QUIZ_NOTES[folder.id] || [];
    var pct = stats.totalNotes > 0 ? Math.round((stats.completedNotes / stats.totalNotes) * 100) : 0;

    // Split notes
    var studyList = []; var guideList = [];
    for (var i = 0; i < notes.length; i++) {
      var n = notes[i];
      if (quizNotes.indexOf(n) !== -1) studyList.push(n);
      else guideList.push(n);
    }

    var tab = this.activeTab[folder.id] || 'quizzes';
    var activeSet = {};
    for (var s = 0; s < (tab === 'quizzes' ? studyList : guideList).length; s++) {
      activeSet[tab === 'quizzes' ? studyList[s] : guideList[s]] = true;
    }

    var html = '<a href="#" class="back-link" onclick="router.navigate(\'#/\')">\u2190 Dashboard</a>';

    // Folder header
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

    // Tabs
    html += '<div class="tabs">' +
      '<button class="tab-btn' + (tab === 'quizzes' ? ' active' : '') + '" onclick="TopicHub.switchTab(\'' + folder.id + '\',\'quizzes\')">\u{1F4DA} Study <span class="tab-count">' + studyList.length + '</span></button>' +
      '<button class="tab-btn' + (tab === 'reference' ? ' active' : '') + '" onclick="TopicHub.switchTab(\'' + folder.id + '\',\'reference\')">\u{1F9ED} Guides <span class="tab-count">' + guideList.length + '</span></button>' +
    '</div>';

    // Build grouped content
    var groups = FOLDER_GROUPS && FOLDER_GROUPS[folder.id] ? FOLDER_GROUPS[folder.id] : {};

    if (Object.keys(groups).length === 0) {
      // No groups — flat list
      html += '<div class="topic-hub">';
      if (studyList.length === 0 && tab === 'quizzes') {
        html += '<div class="tab-empty">No study notes yet.</div>';
      } else if (guideList.length === 0 && tab === 'reference') {
        html += '<div class="tab-empty">No guides available.</div>';
      } else {
        var lst = tab === 'quizzes' ? studyList : guideList;
        for (var j = 0; j < lst.length; j++) {
          html += this.noteCard(lst[j], folder, quizNotes);
        }
      }
      html += '</div>';
    } else {
      // Grouped view
      html += '<div class="topic-hub">';
      var rootNotes = groups[''] || [];
      var subGroups = {};
      for (var gk in groups) {
        if (gk === '') continue;
        subGroups[gk] = groups[gk];
      }

      // Root notes
      for (var ri = 0; ri < rootNotes.length; ri++) {
        if (activeSet[rootNotes[ri]]) {
          html += this.noteCard(rootNotes[ri], folder, quizNotes);
        }
      }

      // Sub groups
      for (var sg in subGroups) {
        var visibleNotes = subGroups[sg].filter(function(x) { return activeSet[x]; });
        if (visibleNotes.length === 0) continue;
        var isCollapsed = this.collapsed[folder.id + '|' + sg];
      if (isCollapsed === undefined) isCollapsed = true;  // collapsed by default
        html += '<div class="folder-group">' +
          '<div class="folder-group-header" onclick="TopicHub.toggleGroup(\'' + folder.id + '\',\'' + sg + '\')">' +
            '<span class="folder-group-caret">' + (isCollapsed ? '\u25B6' : '\u25BC') + '</span>' +
            '<span class="folder-group-icon">\u{1F4C1}</span>' +
            '<span class="folder-group-name">' + sg.replace(/\//g, ' / ') + '</span>' +
            '<span class="folder-group-count">' + visibleNotes.length + ' notes</span>' +
          '</div>';
        if (!isCollapsed) {
          html += '<div class="folder-group-body">';
          for (var gi = 0; gi < subGroups[sg].length; gi++) {
            if (activeSet[subGroups[sg][gi]]) {
              html += this.noteCard(subGroups[sg][gi], folder, quizNotes);
            }
          }
          html += '</div>';
        }
        html += '</div>';
      }
      html += '</div>';
    }

    // Learning Path link at bottom
    html += '<div class="topic-footer">' +
      '<a href="javascript:void(0)" onclick="router.navigate(\'#/reference/Learning%20Path%20—%20' + encodeURIComponent(folder.name) + '\')">🧭 ' + folder.name + ' Learning Path →</a>' +
    '</div>';

    container.innerHTML = html;
  },

  noteCard: function(note, folder, quizNotes) {
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

    var noteIdx = NOTES[folder.id] ? NOTES[folder.id].indexOf(note) : -1;
    var prefix = noteIdx >= 0 ? String(noteIdx + 1).padStart(2, '0') + '. ' : '';

    var card = '<div class="note-card">' +
      '<span class="note-dot" style="background:' + dotColor + '"></span>' +
      '<div class="note-info">' +
        '<div class="note-name">' + prefix + note + '</div>' +
        (statsHtml ? '<div class="note-stats">' + statsHtml + '</div>' : '') +
        '<span class="note-badge ' + statusClass + '">' + status + '</span>' +
      '</div>';

    if (hasLearn) {
      var isRead = localStorage.getItem('dv_read_' + folder.id + '_' + note);
      var readIcon = isRead ? '\u2705 ' : '';
      card += '<a class="btn btn-learn btn-sm" href="javascript:void(0)" onclick="router.navigate(\'#/folder/' + encodeURIComponent(folder.id) + '/note/' + encodeURIComponent(note) + '/learn\')">' + readIcon + '\u{1F4D6} Learn</a>';
    }
    if (hasQuiz) {
      card += '<a class="btn btn-quiz btn-sm" style="margin-left:4px;" href="javascript:void(0)" onclick="router.navigate(\'#/folder/' + encodeURIComponent(folder.id) + '/note/' + encodeURIComponent(note) + '/quiz\')">\u{1F3C6} Quiz</a>';
    }
    if (!hasLearn && !hasQuiz) {
      card += '<span class="badge-coming">Coming soon</span>';
    }

    card += '</div>';
    return card;
  },

  switchTab: function(folderId, tab) {
    this.activeTab[folderId] = tab;
    var folder = FOLDERS.find(function(f) { return f.id === folderId; });
    if (folder) this.render(document.getElementById('app-main'), folder);
  },

  toggleGroup: function(folderId, groupName) {
    var key = folderId + '|' + groupName;
    // If undefined, it's currently collapsed (default) — expand it
    if (this.collapsed[key] === undefined || this.collapsed[key] === true) {
      this.collapsed[key] = false;
    } else {
      this.collapsed[key] = true;
    }
    var folder = FOLDERS.find(function(f) { return f.id === folderId; });
    if (folder) this.render(document.getElementById('app-main'), folder);
  },
};
