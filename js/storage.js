var STORAGE_KEY = 'deepvault_history';
var RECENT_KEY = 'deepvault_recent';

var Storage = {
  getAll: function() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { attempts: [], bookmarks: [], recent: [] }; }
    catch(e) { return { attempts: [], bookmarks: [], recent: [] }; }
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
      if (recent.length > 6) recent = recent.slice(0, 6);
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
    if (data.recent.length > 6) data.recent = data.recent.slice(0, 6);
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
    if (this.getGistToken()) this.syncToGist();
  },
  isBookmarked: function(fid, nn) {
    return (this.getAll().bookmarks || []).some(function(b) { return b[0] === fid && b[1] === nn; });
  },
  getBookmarks: function() {
    return this.getAll().bookmarks || [];
  },

  // GitHub Gist sync
  getGistToken: function() { return localStorage.getItem('dv_gist_token'); },
  setGistToken: function(t) { localStorage.setItem('dv_gist_token', t); },
  getGistId: function() { return localStorage.getItem('dv_gist_id'); },
  setGistId: function(id) { localStorage.setItem('dv_gist_id', id); },

  syncToGist: async function() {
    var token = this.getGistToken();
    if (!token) return 'no_token';
    var gistId = this.getGistId();
    var content = JSON.stringify({
      attempts: this.getAll().attempts || [],
      bookmarks: this.getAll().bookmarks || [],
      recent: this.getRecent(),
      theme: localStorage.getItem('deepvault_theme') || 'midnight',
      readStatus: (function(){
        var result = {};
        for (var i = 0; i < localStorage.length; i++) {
          var key = localStorage.key(i);
          if (key && key.indexOf('dv_read_') === 0) result[key] = localStorage.getItem(key);
        }
        return result;
      })()
    });
    try {
      if (gistId) {
        var resp = await fetch('https://api.github.com/gists/' + gistId, {
          method: 'PATCH',
          headers: { 'Authorization': 'token ' + token, 'Content-Type': 'application/json' },
          body: JSON.stringify({ files: { 'deepvault-progress.json': { content: content } } })
        });
        return resp.ok ? 'ok' : 'error';
      } else {
        var resp = await fetch('https://api.github.com/gists', {
          method: 'POST',
          headers: { 'Authorization': 'token ' + token, 'Content-Type': 'application/json' },
          body: JSON.stringify({ description: 'DeepVault progress', public: false, files: { 'deepvault-progress.json': { content: content } } })
        });
        if (resp.ok) {
          var data = await resp.json();
          this.setGistId(data.id);
          return 'ok';
        }
        return 'error';
      }
    } catch(e) { return 'error'; }
  },

  loadFromGist: async function() {
    var token = this.getGistToken();
    if (!token) return 'no_token';
    try {
      var resp = await fetch('https://api.github.com/gists', {
        headers: { 'Authorization': 'token ' + token }
      });
      if (!resp.ok) return 'error';
      var gists = await resp.json();
      var dv = gists.find(function(g) { return g.files && g.files['deepvault-progress.json']; });
      if (dv) {
        this.setGistId(dv.id);
        var raw = dv.files['deepvault-progress.json'].content;
        var remote = JSON.parse(raw);
        var local = this.getAll();
        // Merge: union attempts, max score per attempt, union bookmarks
        var exist = {};
        (local.attempts || []).forEach(function(a) { exist[a.id] = a; });
        (remote.attempts || []).forEach(function(a) {
          if (!exist[a.id] || (a.score || 0) > (exist[a.id].score || 0)) exist[a.id] = a;
        });
        var merged = Object.values(exist);
        var bm = local.bookmarks || [];
        (remote.bookmarks || []).forEach(function(b) { if (!bm.some(function(x){return x[0]===b[0]&&x[1]===b[1]})) bm.push(b); });
        this.save({ attempts: merged, bookmarks: bm, recent: remote.recent || local.recent || [] });
        // Restore theme
        if (remote.theme) localStorage.setItem('deepvault_theme', remote.theme);
        // Restore read status
        if (remote.readStatus) {
          for (var rk in remote.readStatus) {
            localStorage.setItem(rk, remote.readStatus[rk]);
          }
        }
        return 'ok';
      }
      return 'no_gist';
    } catch(e) { return 'error'; }
  },

};
