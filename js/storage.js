var STORAGE_KEY = 'deepvault_history';
var RECENT_KEY = 'deepvault_recent';

var Storage = {
  getAll: function() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { attempts: [] }; }
    catch(e) { return { attempts: [] }; }
  },

  save: function(data) { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); },

  addAttempt: function(folderId, noteName, score, total, answers, elapsed) {
    var data = this.getAll();
    data.attempts.push({
      id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36),
      date: new Date().toISOString(),
      folder: folderId,
      note: noteName,
      score: score,
      total: total,
      percentage: Math.round((score / total) * 100),
      answers: answers,
      elapsed: elapsed || 0,
    });
    this.save(data);
    return data.attempts[data.attempts.length - 1];
  },

  getAttempts: function(folderId, noteName) {
    return this.getAll().attempts.filter(function(a) {
      return a.folder === folderId && a.note === noteName;
    });
  },

  getFolderStats: function(folderId) {
    var all = this.getAll().attempts;
    var seen = {};
    var totalQuizzes = 0;
    for (var i = 0; i < all.length; i++) {
      if (all[i].folder === folderId) {
        totalQuizzes++;
        seen[all[i].note] = true;
      }
    }
    var totalNotes = 0;
    for (var k in NOTES_CONTENT) {
      if (NOTES_CONTENT[k].folder === folderId) totalNotes++;
    }
    return { totalQuizzes: totalQuizzes, completedNotes: Object.keys(seen).length, totalNotes: totalNotes };
  },

  getBestScore: function(folderId, noteName) {
    var attempts = this.getAttempts(folderId, noteName);
    if (attempts.length === 0) return null;
    var best = 0;
    for (var i = 0; i < attempts.length; i++) {
      if (attempts[i].percentage > best) best = attempts[i].percentage;
    }
    return best;
  },

  getAttemptCount: function(folderId, noteName) {
    return this.getAttempts(folderId, noteName).length;
  },

  addRecentView: function(folderId, noteName) {
    try {
      var recent = JSON.parse(localStorage.getItem(RECENT_KEY)) || [];
      recent = recent.filter(function(r) { return !(r.folder === folderId && r.note === noteName); });
      recent.unshift({ folder: folderId, note: noteName, date: new Date().toISOString() });
      if (recent.length > 20) recent = recent.slice(0, 20);
      localStorage.setItem(RECENT_KEY, JSON.stringify(recent));
    } catch(e) {}
  },

  getRecent: function() {
    try { return JSON.parse(localStorage.getItem(RECENT_KEY)) || []; }
    catch(e) { return []; }
  },
  addRecent(folderId, noteName) {
    var data = this.getAll();
    if (!data.recent) data.recent = [];
    data.recent = data.recent.filter(function(r) { return !(r.folder === folderId && r.note === noteName); });
    data.recent.unshift({ folder: folderId, note: noteName, date: new Date().toISOString() });
    if (data.recent.length > 10) data.recent = data.recent.slice(0, 10);
    this.save(data);
  },

  getRecent() {
    return this.getAll().recent || [];
  },

  removeRecent(index) {
    var data = this.getAll();
    if (data.recent) {
      data.recent.splice(index, 1);
      this.save(data);
    }
  },

  clearRecent() {
    var data = this.getAll();
    data.recent = [];
    this.save(data);
  },

  formatTime: function(seconds) {
    if (!seconds || seconds < 0) return '—';
    if (seconds < 60) return seconds + 's';
    var m = Math.floor(seconds / 60);
    var s = seconds % 60;
    return m + 'm ' + s + 's';
  },

  exportData() {
    var blob = new Blob([JSON.stringify(this.getAll(), null, 2)], {type: 'application/json'});
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'deepvault_progress_' + new Date().toISOString().slice(0,10) + '.json';
    a.click();
    URL.revokeObjectURL(url);
  },

  importData(file) {
    var self = this;
    var reader = new FileReader();
    reader.onload = function(e) {
      try {
        var imported = JSON.parse(e.target.result);
        if (!imported.attempts || !Array.isArray(imported.attempts)) {
          alert('Invalid progress file.');
          return;
        }
        var current = self.getAll();
        var existingIds = {};
        for (var i = 0; i < current.attempts.length; i++) {
          existingIds[current.attempts[i].id] = true;
        }
        var added = 0;
        for (var j = 0; j < imported.attempts.length; j++) {
          if (!existingIds[imported.attempts[j].id]) {
            current.attempts.push(imported.attempts[j]);
            existingIds[imported.attempts[j].id] = true;
            added++;
          }
        }
        self.save(current);
        alert('Imported ' + added + ' new attempts.');
        Dashboard.render(document.getElementById('app-main'));
      } catch(err) {
        alert('Failed to parse file: ' + err.message);
      }
    };
    reader.readAsText(file);
  },

  // Bookmarks
  toggleBookmark: function(fid, nn) {
    var bm = this.getAll().bookmarks || [];
    var idx = bm.findIndex(function(b) { return b[0] === fid && b[1] === nn; });
    if (idx >= 0) bm.splice(idx, 1);
    else bm.push([fid, nn]);
    var d = this.getAll(); d.bookmarks = bm; this.save(d);
    return idx < 0; // true = now bookmarked
  },
  isBookmarked: function(fid, nn) {
    return (this.getAll().bookmarks || []).some(function(b) { return b[0] === fid && b[1] === nn; });
  },
  getBookmarks: function() {
    return this.getAll().bookmarks || [];
  },

};
