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
    var btn = document.querySelector('.theme-btn');
    if (btn) btn.innerHTML = this.icon();
  },
  cycle: function() {
    var current = document.documentElement.getAttribute('data-theme') || 'dark';
    var next = current === 'dark' ? 'light' : (current === 'light' ? 'amoled' : 'dark');
    this.set(next);
  },
  icon: function() {
    var current = document.documentElement.getAttribute('data-theme') || 'dark';
    return current === 'dark' ? '\uD83C\uDF19' : (current === 'light' ? '\u2600\uFE0F' : '\uD83C\uDF1A');
  },
};
