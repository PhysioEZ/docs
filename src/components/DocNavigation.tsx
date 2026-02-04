import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface NavLink {
  label: string;
  href: string;
}

interface DocNavigationProps {
  prev?: NavLink;
  next?: NavLink;
}

export function DocNavigation({ prev, next }: DocNavigationProps) {
  return (
    <div className="flex items-center justify-between pt-8 mt-12 border-t border-slate-200 dark:border-slate-800">
      {prev ? (
        <Link
          to={prev.href}
          className="text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium flex items-center gap-2 transition-colors group no-underline"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          {prev.label}
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          to={next.href}
          className="text-indigo-600 dark:text-indigo-400 font-bold flex items-center gap-2 group no-underline"
        >
          {next.label}
          <ArrowRight
            size={16}
            className="group-hover:translate-x-1 transition-transform"
          />
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
