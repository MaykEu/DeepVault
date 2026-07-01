var Theme = {
  init: function() {
    var saved = localStorage.getItem('deepvault_theme') || 'dark';
    this.set(saved);
  },
  set: function(name) {
    document.documentElement.setAttribute('data-theme', name);
    localStorage.setItem('deepvault_theme', name);
  },
  cycle: function() {
    var current = document.documentElement.getAttribute('data-theme') || 'dark';
    var next = current === 'dark' ? 'light' : (current === 'light' ? 'amoled' : 'dark');
    this.set(next);
  },
  label: function() {
    var current = document.documentElement.getAttribute('data-theme') || 'dark';
    return current === 'dark' ? '\u263E Dark' : (current === 'light' ? '\u2600\uFE0F Light' : '\u25CF AMOLED');
  },
};
