import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import clsx from "clsx";

export function TableOfContents() {
  const location = useLocation();
  const [headings, setHeadings] = useState<
    { id: string; text: string; level: number }[]
  >([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Reset headings on route change
    setHeadings([]);

    // We use a small timeout to ensure the new page content is rendered
    // In a real MDX layout, this data would come from the MDX provider context
    const timer = setTimeout(() => {
      // Find all H2 and H3 elements in the main content area
      const elements = Array.from(
        document.querySelectorAll("main h2, main h3"),
      );

      const data = elements.map((elem) => {
        // Use existing ID or generate one from text
        const id =
          elem.id ||
          elem.textContent
            ?.toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]/g, "") ||
          "";

        // Ensure the element has the ID so links work
        if (!elem.id && id) elem.id = id;

        return {
          id,
          text: elem.textContent || "",
          level: Number(elem.tagName.charAt(1)),
        };
      });

      setHeadings(data);
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Scroll spy to highlight active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -66% 0px" },
    );

    headings.forEach((heading) => {
      const elem = document.getElementById(heading.id);
      if (elem) observer.observe(elem);
    });

    return () => observer.disconnect();
  }, [headings]);

  return (
    <div className="hidden xl:block w-64 shrink-0 h-[calc(100vh-4rem)] sticky top-16 border-l border-slate-200 dark:border-slate-800">
      {headings.length > 0 && (
        <div className="p-6">
          <h5 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-4 uppercase tracking-wider">
            On this page
          </h5>
          <ul className="space-y-3 text-sm">
            {headings.map((heading) => (
              <li
                key={heading.id}
                className={clsx(
                  "transition-colors duration-200",
                  heading.level === 3 && "pl-4",
                )}
              >
                <a
                  href={`#${heading.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById(heading.id)
                      ?.scrollIntoView({ behavior: "smooth" });
                    setActiveId(heading.id);
                  }}
                  className={clsx(
                    "block hover:text-indigo-600 dark:hover:text-indigo-400",
                    activeId === heading.id
                      ? "text-indigo-600 dark:text-indigo-400 font-medium"
                      : "text-slate-500 dark:text-slate-400",
                  )}
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
