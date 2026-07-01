const STORAGE_KEY = 'deepvault_history';

const Storage = {
  getAll() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { attempts: [] };
    } catch {
      return { attempts: [] };
    }
  },

  save(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  },

  addAttempt(folderId, noteName, score, total, answers) {
    const data = this.getAll();
    data.attempts.push({
      id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36),
      date: new Date().toISOString(),
      folder: folderId,
      note: noteName,
      score,
      total,
      percentage: Math.round((score / total) * 100),
      answers,
    });
    this.save(data);
    return data.attempts[data.attempts.length - 1];
  },

  getAttempts(folderId, noteName) {
    return this.getAll().attempts.filter(
      a => a.folder === folderId && a.note === noteName
    );
  },

  getFolderStats(folderId) {
    const notes = NOTES[folderId] || [];
    let totalQuizzes = 0;
    let completedNotes = 0;
    for (const note of notes) {
      const attempts = this.getAttempts(folderId, note);
      if (attempts.length > 0) {
        completedNotes++;
        totalQuizzes += attempts.length;
      }
    }
    return { totalQuizzes, completedNotes, totalNotes: notes.length };
  },

  getBestScore(folderId, noteName) {
    const attempts = this.getAttempts(folderId, noteName);
    if (attempts.length === 0) return null;
    return Math.max(...attempts.map(a => a.percentage));
  },

  getAttemptCount(folderId, noteName) {
    return this.getAttempts(folderId, noteName).length;
  },
};
