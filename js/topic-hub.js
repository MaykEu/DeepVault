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

    // Bookmark filter
    var bmList = Storage.getBookmarks().filter(function(b) { return b[0] === folder.id; }).map(function(b) { return b[1]; });

    var tab = this.activeTab[folder.id] || 'quizzes';
    var activeSet = {};
    var displayList = tab === 'quizzes' ? studyList : tab === 'bookmarks' ? bmList : guideList;
    for (var s = 0; s < displayList.length; s++) {
      activeSet[displayList[s]] = true;
    }

    var html = '<a href=\"#\" class=\"back-link\" onclick=\"router.navigate(\'#/\')\">\u2190 Dashboard</a>';

    // Folder header
    html += '<div class=\"folder-header\">' +
      '<div class=\"folder-header-top\">' +
        '<span class=\"folder-header-icon\">' + folder.icon + '</span>' +
        '<div class=\"folder-header-meta\">' +
          '<h2 class=\"folder-header-title\">' + folder.name + '</h2>' +
          '<span class=\"folder-header-stats\">' + notes.length + ' modules \u00b7 ' + stats.completedNotes + ' with attempts</span>' +
        '</div>' +
      '</div>' +
      '<div class=\"folder-header-progress\">' +
        '<div class=\"folder-header-progress-fill\" style=\"width:' + pct + '%\"></div>' +
      '</div>' +
      '<span class=\"folder-header-pct\">' + pct + '% complete</span>' +
    '</div>';

    // Tabs — three: Study, Bookmarks, Guides
    html += '<div class=\"tabs\">' +
      '<button class=\"tab-btn' + (tab === 'quizzes' ? ' active' : '') + '\" onclick=\"TopicHub.switchTab(\'' + folder.id + '\',\'quizzes\')\">\u{1F4DA} Study <span class=\"tab-count\">' + studyList.length + '</span></button>' +
      '<button class=\"tab-btn' + (tab === 'bookmarks' ? ' active' : '') + '\" onclick=\"TopicHub.switchTab(\'' + folder.id + '\',\'bookmarks\')\">\u2B50 Bookmarks <span class=\"tab-count\">' + bmList.length + '</span></button>' +
      '<button class=\"tab-btn' + (tab === 'reference' ? ' active' : '') + '\" onclick=\"TopicHub.switchTab(\'' + folder.id + '\',\'reference\')\">\u{1F9ED} Guides <span class=\"tab-count\">' + guideList.length + '</span></button>' +
    '</div>';

    // Bookmarks tab: flat list
    if (tab === 'bookmarks') {
      html += '<div class=\"topic-hub\">';
      if (bmList.length === 0) {
        html += '<div class=\"tab-empty\">No bookmarks yet. Click \u2B50 on any note to bookmark it.</div>';
      } else {
        for (var bi = 0; bi < bmList.length; bi++) {
          html += this.noteCard(bmList[bi], folder, quizNotes);
        }
      }
      html += '</div>';
    } else {
      // Build grouped content
      var groups = FOLDER_GROUPS && FOLDER_GROUPS[folder.id] ? FOLDER_GROUPS[folder.id] : {};

      if (Object.keys(groups).length === 0) {
        html += '<div class=\"topic-hub\">';
        if (studyList.length === 0 && tab === 'quizzes') {
          html += '<div class=\"tab-empty\">No study notes yet.</div>';
        } else if (guideList.length === 0 && tab === 'reference') {
          html += '<div class=\"tab-empty\">No guides available.</div>';
        } else {
          var lst = tab === 'quizzes' ? studyList : guideList;
          for (var j = 0; j < lst.length; j++) {
            html += this.noteCard(lst[j], folder, quizNotes);
          }
        }
        html += '</div>';
      } else {
        html += '<div class=\"topic-hub\">';
        var rootNotes = groups[''] || [];
        var subGroups = {};
        for (var gk in groups) {
          if (gk === '') continue;
          subGroups[gk] = groups[gk];
        }

        for (var ri = 0; ri < rootNotes.length; ri++) {
          if (activeSet[rootNotes[ri]]) {
            html += this.noteCard(rootNotes[ri], folder, quizNotes);
          }
        }

        // Build nested groups (support Physics/Collision Detection → Physics > Collision Detection)
        var nestedGroups = {};
        var flatGroups = {};
        for (var sg in subGroups) {
          var slashIdx = sg.indexOf('/');
          if (slashIdx > 0) {
            var parent = sg.substring(0, slashIdx);
            var child = sg.substring(slashIdx + 1);
            if (!nestedGroups[parent]) nestedGroups[parent] = {};
            nestedGroups[parent][child] = subGroups[sg];
          } else {
            flatGroups[sg] = subGroups[sg];
          }
        }

        // Render nested groups first
        for (var ng in nestedGroups) {
          var children = nestedGroups[ng];
          var totalVisible = 0;
          for (var cg in children) {
            totalVisible += children[cg].filter(function(x) { return activeSet[x]; }).length;
          }
          if (totalVisible === 0) continue;
          
          var ngKey = folder.id + '|nest|' + ng;
          var isCollapsed = this.collapsed[ngKey];
          if (isCollapsed === undefined) isCollapsed = true;
          
          html += '<div class=\"folder-group\">' +
            '<div class=\"folder-group-header\" onclick=\"TopicHub.toggleGroup(\'' + folder.id + '\',\'nest|' + ng + '\')\">' +
              '<span class=\"folder-group-caret\">' + (isCollapsed ? '\u25B6' : '\u25BC') + '</span>' +
              '<span class=\"folder-group-icon\">\u{1F4C1}</span>' +
              '<span class=\"folder-group-name\">' + ng + '</span>' +
              '<span class=\"folder-group-count\">' + totalVisible + ' notes</span>' +
            '</div>';
          
          if (!isCollapsed) {
            html += '<div class=\"folder-group-body\">';
            for (var cg in children) {
              var visibleNotes = children[cg].filter(function(x) { return activeSet[x]; });
              if (visibleNotes.length === 0) continue;
              var cgKey = folder.id + '|nest|' + ng + '|' + cg;
              var cgCollapsed = this.collapsed[cgKey];
              if (cgCollapsed === undefined) cgCollapsed = true;
              
              html += '<div class=\"folder-group folder-group-child\">' +
                '<div class=\"folder-group-header folder-group-subheader\" onclick=\"event.stopPropagation(); TopicHub.toggleGroup(\'' + folder.id + '\',\'nest|' + ng + '|' + cg + '\')\">' +
                  '<span class=\"folder-group-caret\">' + (cgCollapsed ? '\u25B6' : '\u25BC') + '</span>' +
                  '<span class=\"folder-group-icon\">\u{1F4C4}</span>' +
                  '<span class=\"folder-group-name\">' + cg + '</span>' +
                  '<span class=\"folder-group-count\">' + visibleNotes.length + ' notes</span>' +
                '</div>';
              
              if (!cgCollapsed) {
                html += '<div class=\"folder-group-body\">';
                for (var ci = 0; ci < children[cg].length; ci++) {
                  if (activeSet[children[cg][ci]]) {
                    html += TopicHub.noteCard(children[cg][ci], folder, quizNotes);
                  }
                }
                html += '</div>';
              }
              html += '</div>';
            }
            html += '</div>';
          }
          html += '</div>';
        }

        // Then render flat groups (original behavior)
        for (var sg in flatGroups) {
          var visibleNotes = subGroups[sg].filter(function(x) { return activeSet[x]; });
          if (visibleNotes.length === 0) continue;
          var isCollapsed = this.collapsed[folder.id + '|' + sg];
          if (isCollapsed === undefined) isCollapsed = true;
          html += '<div class=\"folder-group\">' +
            '<div class=\"folder-group-header\" onclick=\"TopicHub.toggleGroup(\'' + folder.id + '\',\'' + sg + '\')\">' +
              '<span class=\"folder-group-caret\">' + (isCollapsed ? '\u25B6' : '\u25BC') + '</span>' +
              '<span class=\"folder-group-icon\">\u{1F4C1}</span>' +
              '<span class=\"folder-group-name\">' + sg.replace(/\//g, ' / ') + '</span>' +
              '<span class=\"folder-group-count\">' + visibleNotes.length + ' notes</span>' +
            '</div>';
          if (!isCollapsed) {
            html += '<div class=\"folder-group-body\">';
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
    }

    // Learning Path link at bottom
    html += '<div class=\"topic-footer\">' +
      '<a href=\"javascript:void(0)\" onclick=\"router.navigate(\'#/reference/Learning%20Path%20\u2014%20' + encodeURIComponent(folder.name) + '\')\">\u{1F9ED} ' + folder.name + ' Learning Path \u2192</a>' +
    '</div>';

    container.innerHTML = html;
  },

  noteCard: function(note, folder, quizNotes) {
    var best = Storage.getBestScore(folder.id, note);
    var count = Storage.getAttemptCount(folder.id, note);
    var hasQuiz = quizNotes.indexOf(note) !== -1;
    var hasLearn = NOTES_CONTENT && NOTES_CONTENT[note];
    var isBookmarked = Storage.isBookmarked(folder.id, note);

    var status = 'NOT STARTED';
    var statusClass = 'badge-new';
    if (best !== null) {
      status = best >= 100 ? 'COMPLETED' : 'IN PROGRESS';
      statusClass = best >= 100 ? 'badge-done' : 'badge-progress';
    }
    var dotColor = best === null ? 'var(--text-muted)' : (best >= 100 ? 'var(--success)' : 'var(--warning)');

    var statsHtml = best !== null
      ? 'Best: <strong style=\"color:' + (best >= 100 ? 'var(--success)' : best >= 50 ? 'var(--warning)' : 'var(--danger)') + '\">' + best + '%</strong> \u00b7 ' + count + ' attempt' + (count !== 1 ? 's' : '')
      : '';

    var isGuide = quizNotes.indexOf(note) === -1;
    var noteIdx = !isGuide && NOTES[folder.id] ? NOTES[folder.id].indexOf(note) : -1;
    var prefix = !isGuide && noteIdx >= 0 ? String(noteIdx + 1).padStart(2, '0') + '. ' : '';

    var card = '<div class=\"note-card\">' +
      '<span class=\"note-dot\" style=\"background:' + dotColor + '\"></span>' +
      '<div class=\"note-info\">' +
        '<div class=\"note-name\">' + prefix + note.replace(/^\d+ \u2014 /,'') + '</div>' +
        (statsHtml ? '<div class=\"note-stats\">' + statsHtml + '</div>' : '') +
        '<span class=\"note-badge ' + statusClass + '\">' + status + '</span>' +
      '</div>' +
      // Bookmark star
      '<span class=\"bookmark-star' + (isBookmarked ? ' active' : '') + '\" onclick=\"event.stopPropagation();Storage.toggleBookmark(\'' + folder.id + '\',\'' + note + '\');TopicHub.render(document.getElementById(\'app-main\'),FOLDERS.find(function(f){return f.id===\'' + folder.id + '\'}))\" title=\"' + (isBookmarked ? 'Remove bookmark' : 'Bookmark') + '\">' + (isBookmarked ? '\u2B50' : '\u2606') + '</span>';

    if (hasLearn) {
      var isRead = localStorage.getItem('dv_read_' + folder.id + '_' + note);
      var readIcon = isRead ? '\u2705 ' : '';
      card += '<a class=\"btn btn-learn btn-sm\" href=\"javascript:void(0)\" onclick=\"router.navigate(\'#/folder/' + encodeURIComponent(folder.id) + '/note/' + encodeURIComponent(note) + '/learn\')\">' + readIcon + '\u{1F4D6} Learn</a>';
    }
    if (hasQuiz) {
      card += '<a class=\"btn btn-quiz btn-sm\" style=\"margin-left:4px;\" href=\"javascript:void(0)\" onclick=\"router.navigate(\'#/folder/' + encodeURIComponent(folder.id) + '/note/' + encodeURIComponent(note) + '/quiz\')\">\u{1F3C6} Quiz</a>';
    }
    if (!hasLearn && !hasQuiz) {
      card += '<span class=\"badge-coming\">Coming soon</span>';
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
    if (this.collapsed[key] === undefined || this.collapsed[key] === true) {
      this.collapsed[key] = false;
    } else {
      this.collapsed[key] = true;
    }
    var folder = FOLDERS.find(function(f) { return f.id === folderId; });
    if (folder) this.render(document.getElementById('app-main'), folder);
  },
};
