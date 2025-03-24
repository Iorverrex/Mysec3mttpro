// Select the menu toggle button and the menu
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Add a click event listener to toggle the menu's visibility
menuToggle.addEventListener('click', () => {
  // Check the current display state and toggle it
  if (menu.style.display === 'flex' || menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block'; // Display menu vertically on small screens
  }
});
