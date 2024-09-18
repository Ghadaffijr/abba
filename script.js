// Dropdown functionality
const dropdownIcon = document.querySelector('.dropdown-icon');
const dropdownMenu = document.querySelector('.dropdown-menu');

dropdownIcon.addEventListener('click', function() {
    dropdownMenu.classList.toggle('show');
});

// Close dropdown if clicked outside
window.addEventListener('click', function(e) {
    if (!dropdownIcon.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.remove('show');
    }
});

// Dark mode functionality
const darkModeToggle = document.getElementById('dark-mode-toggle');

darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
