import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop component ensures that every time the route changes,
 * the window is scrolled back to the top (0, 0).
 * This is essential for Single Page Applications (SPA) to maintain
 * expected browser navigation behavior.
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll window to top
    window.scrollTo(0, 0);

    // Find the main content scroll container in DocsLayout and reset it
    // Using a microtask to ensure the DOM has updated
    setTimeout(() => {
      const mainContainer = document.querySelector("main.overflow-y-auto");
      if (mainContainer) {
        mainContainer.scrollTop = 0;
      }
    }, 0);
  }, [pathname]);

  return null;
}
