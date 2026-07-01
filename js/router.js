const router = {
  currentView: null,
  currentFolder: null,
  currentNote: null,

  navigate(hash) {
    window.location.hash = hash;
  },

  init() {
    window.addEventListener('hashchange', () => this.route());
    if (!window.location.hash) {
      this.navigate('#/');
    } else {
      this.route();
    }
  },

  route() {
    const hash = window.location.hash.slice(1) || '/';
    const parts = hash.split('/').filter(Boolean);
    const main = document.getElementById('app-main');
    const breadcrumb = document.getElementById('breadcrumb');

    if (parts.length === 0) {
      // Dashboard
      this.currentFolder = null;
      this.currentNote = null;
      breadcrumb.innerHTML = '';
      Dashboard.render(main);
    } else if (parts.length === 2 && parts[0] === 'folder') {
      // Topic Hub: #/folder/computer-systems
      const folderId = decodeURIComponent(parts[1]);
      const folder = FOLDERS.find(f => f.id === folderId);
      if (!folder) { this.navigate('#/'); return; }
      this.currentFolder = folder;
      this.currentNote = null;
      breadcrumb.innerHTML = `<a href="#" onclick="router.navigate('#/')">Dashboard</a> <span>›</span> <span class="current">${folder.name}</span>`;
      TopicHub.render(main, folder);
    } else if (parts.length === 4 && parts[0] === 'folder' && parts[2] === 'note') {
      // Note view: #/folder/computer-systems/note/Bits%20Bytes/quiz or /history
      const folderId = decodeURIComponent(parts[1]);
      const noteName = decodeURIComponent(parts[3]);
      const folder = FOLDERS.find(f => f.id === folderId);
      if (!folder) { this.navigate('#/'); return; }
      this.currentFolder = folder;
      this.currentNote = noteName;
      breadcrumb.innerHTML = `<a href="#" onclick="router.navigate('#/')">Dashboard</a> <span>›</span> <a href="#" onclick="router.navigate('#/folder/${encodeURIComponent(folderId)}')">${folder.name}</a> <span>›</span> <span class="current">${noteName}</span>`;
      
      // Check if there's a sub-action
      const sub = parts.length > 4 ? parts[4] : null;
      if (!sub) {
        // Show quiz launch or history
        QuizEngine.render(main, folderId, noteName);
      }
    } else if (parts.length === 5 && parts[0] === 'folder' && parts[2] === 'note' && parts[4] === 'quiz') {
      const folderId = decodeURIComponent(parts[1]);
      const noteName = decodeURIComponent(parts[3]);
      const folder = FOLDERS.find(f => f.id === folderId);
      if (!folder) { this.navigate('#/'); return; }
      this.currentFolder = folder;
      this.currentNote = noteName;
      breadcrumb.innerHTML = `<a href="#" onclick="router.navigate('#/')">Dashboard</a> <span>›</span> <a href="#" onclick="router.navigate('#/folder/${encodeURIComponent(folderId)}')">${folder.name}</a> <span>›</span> <span class="current">${noteName} — Quiz</span>`;
      QuizEngine.start(main, folderId, noteName);
    } else if (parts.length === 5 && parts[0] === 'folder' && parts[2] === 'note' && parts[4] === 'history') {
      const folderId = decodeURIComponent(parts[1]);
      const noteName = decodeURIComponent(parts[3]);
      const folder = FOLDERS.find(f => f.id === folderId);
      if (!folder) { this.navigate('#/'); return; }
      breadcrumb.innerHTML = `<a href="#" onclick="router.navigate('#/')">Dashboard</a> <span>›</span> <a href="#" onclick="router.navigate('#/folder/${encodeURIComponent(folderId)}')">${folder.name}</a> <span>›</span> <span class="current">${noteName} — History</span>`;
      HistoryView.render(main, folderId, noteName);
    } else {
      this.navigate('#/');
    }
  },
};
