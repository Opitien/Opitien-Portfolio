document.addEventListener('DOMContentLoaded', (event) => {
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    document.getElementById('darkModeIcon').src = 'https://img.icons8.com/ios-filled/24/000000/moon-symbol.png';
  }
});

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const icon = document.getElementById('darkModeIcon');
  if (document.body.classList.contains('dark-mode')) {
    icon.src = 'https://img.icons8.com/ios-filled/24/000000/moon-symbol.png';
    localStorage.setItem('darkMode', 'enabled');
  } else {
    icon.src = 'https://img.icons8.com/ios-filled/24/000000/sun.png';
    localStorage.setItem('darkMode', 'disabled');
  }
}
