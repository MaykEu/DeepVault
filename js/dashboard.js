const Dashboard = {
  render(container) {
    let html = '<h2 class="page-title">Your Vault</h2><div class="dashboard">';
    
    for (const folder of FOLDERS) {
      const stats = Storage.getFolderStats(folder.id);
      const pct = stats.totalNotes > 0 ? Math.round((stats.completedNotes / stats.totalNotes) * 100) : 0;
      html += `
        <div class="folder-card" onclick="router.navigate('#/folder/${encodeURIComponent(folder.id)}')">
          <div class="folder-icon">${folder.icon}</div>
          <div class="folder-name">${folder.name}</div>
          <div class="folder-meta">${stats.totalNotes} notes · ${stats.completedNotes} with attempts</div>
          <div class="folder-progress">
            <div class="folder-progress-fill" style="width:${pct}%"></div>
          </div>
        </div>`;
    }
    
    html += '</div>';
    container.innerHTML = html;
  },
};
