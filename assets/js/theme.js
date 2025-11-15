/**
 * File: /assets/js/theme.js
 * Handles the light/dark mode theme toggling for the documentation site.
 */
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;
    const currentTheme = localStorage.getItem('theme') || 'light';

    // Function to apply the theme
    const applyTheme = (theme) => {
        // The CSS is designed to work with a class on the <html> element
        const htmlElement = document.documentElement;
        htmlElement.classList.remove('light-mode', 'dark-mode');
        htmlElement.classList.add(theme + '-mode');
        if (themeIcon) {
            themeIcon.className = `fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`;
        }
        localStorage.setItem('theme', theme);
    };

    // Apply the saved theme on initial load
    applyTheme(currentTheme);

    // Add click event listener to the toggle button
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            let newTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
            applyTheme(newTheme);
        });
    }
});

// Ensure theme is re-applied after content loads via router
document.addEventListener('contentLoaded', () => {
    const theme = localStorage.getItem('theme') || 'light';
    const htmlElement = document.documentElement;
    htmlElement.classList.remove('light-mode', 'dark-mode');
    htmlElement.classList.add(theme + '-mode');
});