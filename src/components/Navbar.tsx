import { Search, Github, Book } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
      <div className="w-full px-6 h-16 flex items-center justify-between">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform">
            <Book size={18} strokeWidth={2.5} />
          </div>
          <span className="font-bold text-lg text-slate-900 dark:text-white tracking-tight">
            PhysioEZ
          </span>
          <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
            v2.0
          </span>
        </Link>

        {/* Center: Search Bar */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search
                size={16}
                className="text-slate-400 group-focus-within:text-indigo-500 transition-colors"
              />
            </div>
            <input
              type="text"
              placeholder="Search documentation..."
              className="block w-full pl-10 pr-3 py-2 border border-slate-200 dark:border-slate-700 rounded-xl leading-5 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-500 focus:outline-none focus:bg-white dark:focus:bg-slate-900 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all sm:text-sm"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-xs text-slate-400 font-medium border border-slate-200 dark:border-slate-600 rounded px-1.5 py-0.5 bg-white dark:bg-slate-700">
                ⌘K
              </span>
            </div>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/physioez/desktop"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors"
            title="View on GitHub"
          >
            <Github size={20} />
          </a>

          <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-2" />

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
