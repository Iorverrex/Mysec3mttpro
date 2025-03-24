const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const menuLinks = menu.querySelectorAll('a');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('open'); // Toggle class for menu open/close
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('open'); // Close menu when a link is clicked
  });
});
