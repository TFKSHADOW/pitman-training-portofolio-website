// Select the dark mode toggle button
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Check local storage for saved mode preference
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    darkModeToggle.textContent = '☀️ Light Mode';
} else {
    document.body.classList.remove('dark-mode');
    darkModeToggle.textContent = '🌙 Dark Mode';
}

// Event listener to toggle dark mode
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Check if dark mode is applied and update local storage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        darkModeToggle.textContent = '☀️ Light Mode';
    } else {
        localStorage.setItem('theme', 'light');
        darkModeToggle.textContent = '🌙 Dark Mode';
    }
});

// Ensure icons and other elements adjust correctly
const icons = document.querySelectorAll('.icon');

function updateIcons() {
    if (document.body.classList.contains('dark-mode')) {
        icons.forEach(icon => {
            icon.style.filter = 'invert(1)';
        });
    } else {
        icons.forEach(icon => {
            icon.style.filter = 'invert(0)';
        });
    }
}

// Run updateIcons initially and on toggle
updateIcons();
darkModeToggle.addEventListener('click', updateIcons);



const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
