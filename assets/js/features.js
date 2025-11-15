// File: /assets/js/features.js

/**
 * This global function is called by app.js EVERY time new content is loaded.
 * It's responsible for "booting up" all dynamic features
 * on the newly injected HTML.
 */
function initializeFeatures() {

    // --- ✅ 1. "DRAWER" (ACCORDION) LOGIC ---
    const headers = document.querySelectorAll('.collapsible-header');
    headers.forEach(header => {
        // Check if we've already added the listener to avoid duplicates
        if (!header.classList.contains('js-initialized')) {
            header.classList.add('js-initialized');
            header.addEventListener('click', () => {
                const parentLi = header.parentElement;
                parentLi.classList.toggle('active');

                const body = header.nextElementSibling;
                if (body.style.maxHeight) {
                    body.style.maxHeight = null;
                } else {
                    body.style.maxHeight = body.scrollHeight + 'px';
                }
            });
        }
    });

    // --- ✅ 2. "AUTO-TOC" LOGIC ---
    // (This code finds all h2/h3 tags in the new content)
    const tocList = document.getElementById('autoToc');
    tocList.innerHTML = ''; // Clear the old Table of Contents

    const headings = document.querySelectorAll('#content-wrapper h2, #content-wrapper h3');
    headings.forEach(heading => {
        const id = heading.id;
        if (!id) return; // Skip if no ID

        const text = heading.textContent;
        const li = document.createElement('li');
        const a = document.createElement('a');

        a.href = `#${id}`;
        a.textContent = text;
        a.style.paddingLeft = (heading.tagName === 'H3') ? '32px' : '16px';

        // Add smooth scrolling for on-page links
        a.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        });

        li.appendChild(a);
        tocList.appendChild(li);
    });

    // --- ✅ 3. "JSON VIEWER" LOGIC ---
    // (Add your JSON viewer, scrollspy, etc. initialization here)
    // e.g., syntaxHighlight(document.querySelectorAll('.json-viewer'));

}

// Run this once on the initial page load.
// After this, app.js will call it for us.
document.addEventListener('DOMContentLoaded', () => {
    // We only call the *feature* part here, not the main app logic
    // (which is already in its own DOMContentLoaded in app.js)
    if (window.initializeFeatures) {
        window.initializeFeatures();
    }
});