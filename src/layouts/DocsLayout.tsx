import { useRef, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { TableOfContents } from "../components/TableOfContents";

export function DocsLayout() {
  const { pathname } = useLocation();
  const contentRef = useRef<HTMLDivElement>(null);

  // Force scroll to top on every route change
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans transition-colors duration-300">
      <Navbar />

      <div className="flex w-full">
        {/* Left Sidebar - Fixed Width, Sticky */}
        <div className="hidden lg:block shrink-0">
          <Sidebar />
        </div>

        {/* Main Content Area */}
        <main
          ref={contentRef}
          className="flex-1 min-w-0 h-[calc(100vh-4rem)] overflow-y-auto relative"
        >
          <div className="w-full max-w-[1800px] mx-auto px-4 lg:px-6 py-8">
            <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-indigo-600 dark:prose-a:text-indigo-400 hover:prose-a:text-indigo-500 mr-auto">
              <Outlet />
            </div>

            {/* Footer safe area */}
            <div className="h-24"></div>
          </div>
        </main>

        <TableOfContents />
      </div>
    </div>
  );
}
