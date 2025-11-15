// File: /assets/js/app.js

/**
 * We wrap everything in a "DOMContentLoaded" to make sure the page is ready.
 * We also define an initializeApp function to set everything up.
 */
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

/**
 * The main application brain.
 */
function initializeApp() {
    const contentWrapper = document.getElementById('content-wrapper');
    const sidebarNav = document.getElementById('sidebarNav');
    const defaultPage = '/pages/01-introduction.html'; // Set your default homepage

    /**
     * This is the heart of the router. It fetches HTML content from a URL
     * and injects it into the content wrapper.
     */
    async function loadContent(url) {
        try {
            // The <base> tag in index.php ensures this fetch is relative to the /docs/ directory.
            // We remove any leading slash to prevent it from going to the domain root.
            const fetchUrl = url.startsWith('/') ? url.substring(1) : url;

            const response = await fetch(fetchUrl);

            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            const html = await response.text();

            // 1. Inject the new HTML
            contentWrapper.innerHTML = html;

            // 2. Re-run your features!
            // This is CRITICAL. It re-builds the Table of Contents,
            // re-attaches scrollspy, and finds any new JSON viewers.
            if (window.initializeFeatures) {
                window.initializeFeatures();
            }

            // 3. Update the active link in the sidebar
            updateActiveLink(url);

        } catch (error) {
            console.error('Failed to fetch page:', error);
            contentWrapper.innerHTML = '<h1>Error</h1><p>Could not load content.</p>';
        }
    }

    /**
     * Handles all clicks on the sidebar.
     */
    sidebarNav.addEventListener('click', (e) => {
        // Find the link that was clicked
        const link = e.target.closest('a.nav-link');

        if (link) {
            e.preventDefault(); // Stop the browser from navigating
            let url = link.getAttribute('href');

            // If the link is to the root, navigate to the default page
            if (url === '/') url = defaultPage;

            // Update browser history (so the URL bar changes)
            // The URL in the browser bar should also be relative to the <base> href.
            const browserUrl = url.startsWith('/') ? url.substring(1) : url;
            history.pushState({ path: url }, '', browserUrl);

            // Load the new content
            loadContent(url);
        }
    });

    /**
     * Listens for the browser's Back/Forward buttons.
     */
    window.addEventListener('popstate', (e) => {
        // If the state has a path, load it.
        // Otherwise, load the default page.
        const url = e.state ? e.state.path : defaultPage;
        loadContent(url);
    });

    /**
     * Helper to update the "active" class on the sidebar links.
     */
    function updateActiveLink(url) {
        // Normalize the URL to match the href attribute exactly
        const normalizedUrl = url.startsWith('/') ? url.substring(1) : url;
        const links = sidebarNav.querySelectorAll('a.nav-link');
        links.forEach(link => {
            if (link.getAttribute('href') === normalizedUrl) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    
    // --- INITIAL PAGE LOAD ---
    // Determine the initial page to load based on the URL path.
    // We strip the base path '/OS/docs/' to get the relative file path.
    const baseDir = '/OS/docs/';
    let path = window.location.pathname;
    if (path.startsWith(baseDir)) {
        path = path.substring(baseDir.length);
    }
    const initialUrl = (path === '' || path === 'index.php') ? defaultPage : path;

    // This is the key fix. We remove the leading slash from the URL
    // before passing it to `replaceState`. This makes it a relative path,
    // which correctly combines with the <base> tag.
    const browserUrl = initialUrl.startsWith('/') ? initialUrl.substring(1) : initialUrl;

    // We need to "replace" the state on first load
    // so the back button doesn't go to an "empty" state.
    history.replaceState({ path: initialUrl }, '', initialUrl);
    history.replaceState({ path: initialUrl }, '', browserUrl);
    loadContent(initialUrl);
}