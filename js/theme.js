// Theme initialization and toggle functionality

// Initialize theme on page load
(function() {
  if (localStorage.getItem('theme') === 'dark' || 
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  
  // Set initial toggle button icon
  const btn = document.querySelector('.theme-toggle');
  if (btn && document.documentElement.getAttribute('data-theme') === 'dark') {
    btn.textContent = '▼';
  }
})();

// Theme toggle function
function toggleTheme() {
  const html = document.documentElement;
  const btn = document.querySelector('.theme-toggle');
  if (html.getAttribute('data-theme') === 'dark') {
    html.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
    btn.textContent = '▲';
  } else {
    html.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    btn.textContent = '▼';
  }
}

