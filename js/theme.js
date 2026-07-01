var Theme = {
  init: function() {
    var saved = localStorage.getItem('deepvault_theme') || 'dark';
    this.set(saved);
  },
  set: function(name) {
    document.documentElement.setAttribute('data-theme', name);
    localStorage.setItem('deepvault_theme', name);
    var sel = document.getElementById('theme-select');
    if (sel) sel.value = name;
  },
  label: function(name) {
    return name === 'dark' ? '\u263E Dark' : (name === 'light' ? '\u2600\uFE0F Light' : '\u25CF AMOLED');
  },
};
