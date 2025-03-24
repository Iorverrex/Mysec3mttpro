// Select DOM elements
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const menuLinks = menu.querySelectorAll('a');

// Toggle 'open' class for the menu
menuToggle.addEventListener('click', () => {
  menu.classList.toggle('open');
});

// Close the menu when clicking outside of it
document.addEventListener('click', (event) => {
  // Check if the click is outside the menu and toggle button
  if (!menu.contains(event.target) && event.target !== menuToggle) {
    menu.classList.remove('open');
  }
});

// Close the menu when a link is clicked
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
  });
});

// Smooth scrolling for anchor links
menuLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    const targetId = link.getAttribute('href').substring(1); // Get the target ID
    const targetElement = document.getElementById(targetId);

    // Scroll to the target element smoothly
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});
