var Theme = {
  names: { midnight: '\uD83C\uDF19 Midnight', dark: '\uD83C\uDF11 Dark', light: '\u2600\uFE0F Light', amoled: '\uD83C\uDF1A AMOLED' },
  icons: { midnight: '\uD83C\uDF19', dark: '\uD83C\uDF11', light: '\u2600\uFE0F', amoled: '\uD83C\uDF1A' },
  order: ['midnight', 'dark', 'light', 'amoled'],

  init: function() {
    var saved = localStorage.getItem('deepvault_theme') || 'midnight';
    this.set(saved);
  },

  set: function(name) {
    document.documentElement.setAttribute('data-theme', name);
    localStorage.setItem('deepvault_theme', name);
    var btn = document.querySelector('.theme-btn');
    if (btn) btn.innerHTML = this.icons[name];
    this.close();
  },

  icon: function() {
    var current = document.documentElement.getAttribute('data-theme') || 'midnight';
    return this.icons[current];
  },

  toggle: function() {
    var dd = document.getElementById('theme-dropdown');
    if (dd.classList.contains('open')) { this.close(); return; }
    var current = document.documentElement.getAttribute('data-theme') || 'midnight';
    var html = '';
    for (var i = 0; i < this.order.length; i++) {
      var t = this.order[i];
      var active = t === current ? ' active' : '';
      html += '<div class="theme-option' + active + '" onclick="Theme.set(\'' + t + '\')">' + this.names[t] + '</div>';
    }
    dd.innerHTML = html;
    dd.classList.add('open');
  },

  close: function() {
    var dd = document.getElementById('theme-dropdown');
    if (dd) dd.classList.remove('open');
  },
};

document.addEventListener('click', function(e) {
  var dd = document.getElementById('theme-dropdown');
  var btn = document.querySelector('.theme-btn');
  if (dd && btn && !dd.contains(e.target) && e.target !== btn && !btn.contains(e.target)) {
    dd.classList.remove('open');
  }
});
