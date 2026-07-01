var Theme = {
  init: function() {
    var saved = localStorage.getItem('deepvault_theme') || 'midnight';
    this.set(saved);
  },
  set: function(name) {
    document.documentElement.setAttribute('data-theme', name);
    localStorage.setItem('deepvault_theme', name);
    var btn = document.querySelector('.theme-btn');
    if (btn) btn.innerHTML = this.icon();
  },
  cycle: function() {
    var current = document.documentElement.getAttribute('data-theme') || 'midnight';
    var next = current === 'midnight' ? 'light' : (current === 'light' ? 'amoled' : 'midnight');
    this.set(next);
  },
  icon: function() {
    var current = document.documentElement.getAttribute('data-theme') || 'midnight';
    return current === 'midnight' ? '\uD83C\uDF19' : (current === 'light' ? '\u2600\uFE0F' : '\uD83C\uDF1A');
  },
};
