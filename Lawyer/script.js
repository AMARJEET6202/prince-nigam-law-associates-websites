// Toggle mobile menu visibility
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menubtn');
    const navbar = document.querySelector('.navbar');

    // Initially hide the navbar for mobile view
    navbar.style.display = 'none';

    menuButton.addEventListener('click', function() {
        // Toggle the display of the navbar
        if (navbar.style.display === 'none' || navbar.style.display === '') {
            navbar.style.display = 'flex';
            navbar.style.flexDirection = 'column'; // Stack links vertically
        } else {
            navbar.style.display = 'none';
        }
    });

    // Close the menu when a link is clicked (for mobile view)
    navbar.addEventListener('click', function() {
        navbar.style.display = 'none';
    });
});
