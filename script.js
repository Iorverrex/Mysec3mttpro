const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const menuLinks = menu.querySelectorAll('a');

menuToggle.addEventListener('click', () => {
  if (menu.style.display === 'flex') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'flex';
    menu.style.flexDirection = 'column';
  }
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.style.display = 'none';
  });
});
