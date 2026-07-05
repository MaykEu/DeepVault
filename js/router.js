const router = {
  navigate: function(hash) { if (hash === window.location.hash) { this.route(); return; } window.location.hash = hash; },
  init: function() {
    var self = this;
    window.addEventListener('hashchange', function() { self.route(); });
    if (!window.location.hash) this.navigate('#/'); else this.route();
  },
  route: function() {
    var hash = window.location.hash.slice(1) || '/';
    var parts = hash.split('?')[0].split('/').filter(Boolean);
    var main = document.getElementById('app-main');

    if (parts.length === 0) {
      Dashboard.render(main);
    } else if (parts.length === 2 && parts[0] === 'reference') {
      LearnView.renderRef(main, decodeURIComponent(parts[1]));
    } else if (parts.length === 2 && parts[0] === 'folder') {
      var folder = FOLDERS.find(function(f) { return f.id === decodeURIComponent(parts[1]); });
      if (!folder) { this.navigate('#/'); return; }
      TopicHub.render(main, folder);
    } else if (parts.length === 4 && parts[0] === 'folder' && parts[2] === 'note') {
      QuizEngine.render(main, decodeURIComponent(parts[1]), decodeURIComponent(parts[3]));
    } else if (parts.length === 5 && parts[4] === 'summary') {
      var r = JSON.parse(sessionStorage.getItem('dv_last_result_' + decodeURIComponent(parts[1]) + '_' + decodeURIComponent(parts[3])) || '{}');
      Summary.render(main, {folderId: decodeURIComponent(parts[1]), noteName: decodeURIComponent(parts[3]),
        answers: [], questions: [], total: r.total || 0, correctCount: r.correctCount || 0,
        wrongCount: (r.total||0) - (r.correctCount||0), elapsed: r.elapsed || 0, isReview: false});
    } else if (parts.length === 5 && parts[4] === 'quiz') {
      QuizEngine.start(main, decodeURIComponent(parts[1]), decodeURIComponent(parts[3]));
    } else if (parts.length === 5 && parts[4] === 'learn') {
      LearnView.render(main, decodeURIComponent(parts[1]), decodeURIComponent(parts[3]));
    } else if (parts.length === 5 && parts[4] === 'history') {
      HistoryView.render(main, decodeURIComponent(parts[1]), decodeURIComponent(parts[3]));
    } else {
      this.navigate('#/');
    }
  },
};
