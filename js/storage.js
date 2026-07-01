var STORAGE_KEY = 'deepvault_history';
var RECENT_KEY = 'deepvault_recent';

var Storage = {
  getAll: function() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { attempts: [] }; }
    catch(e) { return { attempts: [] }; }
  },

  save: function(data) { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); },

  addAttempt: function(folderId, noteName, score, total, answers) {
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
    // Count notes in this folder from NOTES_CONTENT
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

  // Recently viewed notes
  addRecentView: function(folderId, noteName) {
    try {
      var recent = JSON.parse(localStorage.getItem(RECENT_KEY)) || [];
      // Remove duplicate
      recent = recent.filter(function(r) { return !(r.folder === folderId && r.note === noteName); });
      // Add to front
      recent.unshift({ folder: folderId, note: noteName, date: new Date().toISOString() });
      // Keep last 20
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
    // Remove if already exists
    data.recent = data.recent.filter(function(r) { return !(r.folder === folderId && r.note === noteName); });
    // Add to front
    data.recent.unshift({ folder: folderId, note: noteName, date: new Date().toISOString() });
    // Keep max 10
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
        // Merge: add imported attempts that don't already exist
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
        alert('Imported ' + added + ' new attempts. Refreshing...');
        router.navigate('#/');
      } catch(err) {
        alert('Failed to parse file: ' + err.message);
      }
    };
    reader.readAsText(file);
  },

};
