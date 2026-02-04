import { DocNavigation } from "../components/DocNavigation";

export function PlaceholderPage({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="w-full space-y-12">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-8">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
          {title}
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
          {description || `Documentation for ${title}.`}
        </p>
      </div>

      <div className="p-12 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl bg-slate-50 dark:bg-slate-900/50 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center mb-4">
          <svg
            className="w-8 h-8 text-slate-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
          Content Coming Soon
        </h3>
        <p className="text-slate-500 max-w-md">
          The technical specifications and API usage for{" "}
          <strong>{title}</strong> are being written.
        </p>
      </div>

      <DocNavigation />
    </div>
  );
}
