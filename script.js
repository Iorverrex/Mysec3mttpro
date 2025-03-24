const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const menuLinks = menu.querySelectorAll('a');

menuToggle.addEventListener('click', () => {
  // Toggle the 'open' class to control visibility
  menu.classList.toggle('open');
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Close the menu when a link is clicked
    menu.classList.remove('open');
  });
});

// Close the menu if a user clicks outside it
document.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && event.target !== menuToggle) {
    menu.classList.remove('open');
  }
});
