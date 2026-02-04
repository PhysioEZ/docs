import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Bold component for consistent typography across documentation.
 * Ensures the text is properly weighted and colored for both light and dark modes.
 */
export function Bold({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <strong
      className={cn("font-bold text-slate-900 dark:text-slate-100", className)}
    >
      {children}
    </strong>
  );
}

/**
 * Code component for inline code snippets.
 */
export function Code({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <code
      className={cn(
        "px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 font-mono text-[0.9em]",
        className,
      )}
    >
      {children}
    </code>
  );
}
