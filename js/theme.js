// js/theme.js

function initTheme() {
  document.documentElement.setAttribute('data-theme', 'light');
  localStorage.setItem('theme', 'light');
}

window.initTheme = initTheme;
