import { Terminal, Database, Monitor } from "lucide-react";
import { DocNavigation } from "../../components/DocNavigation";
import { Code } from "../../components/Typography";

export function InstallationGuide() {
  return (
    <div className="w-full px-12 space-y-16">
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-8">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
          Installation Guide
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
          Follow these steps to set up the complete developer environment for
          PhysioEZ Desktop on your machine.
        </p>
      </div>

      {/* Prerequisites */}
      <section>
        <h2
          id="prerequisites"
          className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3 scroll-mt-24"
        >
          <Terminal className="text-indigo-500" />
          Prerequisites
        </h2>
        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
          <ul className="space-y-4">
            <li className="flex items-center justify-between">
              <span className="font-medium text-slate-700 dark:text-slate-300">
                Node.js
              </span>
              <span className="text-sm px-2 py-1 bg-slate-200 dark:bg-slate-800 rounded font-mono text-slate-600 dark:text-slate-400">
                v18.0.0+
              </span>
            </li>
            <li className="flex items-center justify-between">
              <span className="font-medium text-slate-700 dark:text-slate-300">
                Rust & Cargo
              </span>
              <span className="text-sm px-2 py-1 bg-slate-200 dark:bg-slate-800 rounded font-mono text-slate-600 dark:text-slate-400">
                Latest Stable
              </span>
            </li>
            <li className="flex items-center justify-between">
              <span className="font-medium text-slate-700 dark:text-slate-300">
                MySQL Server
              </span>
              <span className="text-sm px-2 py-1 bg-slate-200 dark:bg-slate-800 rounded font-mono text-slate-600 dark:text-slate-400">
                v8.0+
              </span>
            </li>
            <li className="flex items-center justify-between">
              <span className="font-medium text-slate-700 dark:text-slate-300">
                Pnpm or Npm
              </span>
              <span className="text-sm px-2 py-1 bg-slate-200 dark:bg-slate-800 rounded font-mono text-slate-600 dark:text-slate-400">
                Latest
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Step 1: Database Setup */}
      <section>
        <h2
          id="database-setup"
          className="text-2xl font-bold text-slate-900 dark:text-white mb-6 scroll-mt-24"
        >
          1. Database Setup
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          The application requires a local MySQL database named{" "}
          <Code>prospine</Code>.
        </p>
        <div className="bg-slate-900 rounded-xl p-4 overflow-x-auto border border-slate-800">
          <pre className="text-sm text-slate-300 font-mono">
            {`CREATE DATABASE prospine;
CREATE USER 'prospine'@'localhost' IDENTIFIED BY '1234';
GRANT ALL PRIVILEGES ON prospine.* TO 'prospine'@'localhost';
FLUSH PRIVILEGES;`}
          </pre>
        </div>
      </section>

      {/* Step 2: Backend Setup */}
      <section>
        <h2
          id="backend-setup"
          className="text-2xl font-bold text-slate-900 dark:text-white mb-6 scroll-mt-24"
        >
          2. Backend Configuration
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          The backend handles API requests and database connections. Navigate to
          the server directory and install dependencies.
        </p>

        <div className="space-y-4">
          <div className="bg-slate-900 rounded-xl p-4 overflow-x-auto border border-slate-800 group relative">
            <div className="absolute top-3 right-3 text-xs font-mono text-slate-500">
              Terminal
            </div>
            <pre className="text-sm text-slate-300 font-mono">
              {`cd server
npm install`}
            </pre>
          </div>

          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Create a <Code>.env</Code> file in the <Code>server</Code>{" "}
            directory:
          </p>

          <div className="bg-slate-900 rounded-xl p-4 overflow-x-auto border border-slate-800 relative">
            <div className="absolute top-3 right-3 text-xs font-mono text-slate-500">
              .env
            </div>
            <pre className="text-sm text-slate-300 font-mono">
              {`PORT=3000
DB_HOST=127.0.0.1
DB_USER=prospine
DB_PASS=1234
DB_NAME=prospine
NODE_ENV=development
# Encryption Key (Keep Secret)
CHAT_ENCRYPTION_KEY=2L92k78hExeiUiS1xQTBP8VQciGyLcAQkNPNWilGgC0`}
            </pre>
          </div>

          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Start the backend server:
          </p>
          <div className="bg-slate-900 rounded-xl p-4 overflow-x-auto border border-slate-800">
            <pre className="text-sm text-slate-300 font-mono">
              {`npm run dev`}
            </pre>
          </div>
          <div className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-3 py-2 rounded-lg border border-emerald-100 dark:border-emerald-900/30">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            Server running at http://localhost:3000
          </div>
        </div>
      </section>

      {/* Step 3: Frontend Setup */}
      <section>
        <h2
          id="frontend-setup"
          className="text-2xl font-bold text-slate-900 dark:text-white mb-6 scroll-mt-24"
        >
          3. Frontend Launch
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          Open a new terminal window for the frontend application.
        </p>

        <div className="bg-slate-900 rounded-xl p-4 overflow-x-auto border border-slate-800 mb-4">
          <pre className="text-sm text-slate-300 font-mono">
            {`cd frontend
npm install
npm run dev`}
          </pre>
        </div>
        <div className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-3 py-2 rounded-lg border border-emerald-100 dark:border-emerald-900/30">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
          Vite running at http://localhost:5173
        </div>
      </section>

      {/* Step 4: Desktop App */}
      <section>
        <h2
          id="desktop-launch"
          className="text-2xl font-bold text-slate-900 dark:text-white mb-6 scroll-mt-24"
        >
          4. Launching Desktop App
        </h2>
        <div className="bg-indigo-50 dark:bg-indigo-900/10 p-6 rounded-2xl border border-indigo-100 dark:border-indigo-500/20">
          <h3 className="font-bold text-indigo-900 dark:text-indigo-200 mb-2 flex items-center gap-2">
            <Monitor size={18} />
            Tauri Development
          </h3>
          <p className="text-indigo-700 dark:text-indigo-400 text-sm mb-4">
            To run the application as a native window, you need to use the Tauri
            CLI from the root directory.
          </p>
          <div className="bg-slate-900 rounded-xl p-4 overflow-x-auto border border-slate-800">
            <pre className="text-sm text-slate-300 font-mono">
              {`# From root directory
npm install
npm run tauri dev`}
            </pre>
          </div>
        </div>
      </section>

      {/* Additional Notes */}
      <section>
        <h2
          id="important-notes"
          className="text-2xl font-bold text-slate-900 dark:text-white mb-6 scroll-mt-24"
        >
          Important Notes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-orange-500"></div>
              Rate Limiting
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              The server implements strict rate limiting to prevent abuse:
            </p>
            <ul className="mt-2 space-y-1 text-sm text-slate-500 dark:text-slate-500 font-mono">
              <li>• 100 req/min (Global)</li>
              <li>• 10 req/min (Auth endpoints)</li>
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              Legacy Migration
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">
              All PHP logic has been fully ported to Node.js. You can review the
              core database implementation here:
            </p>
            <a
              href="https://github.com/physioez/desktop/blob/main/server/src/config/db.js"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              <Database size={12} />
              server/src/config/db.js
            </a>
          </div>
        </div>
      </section>
      <DocNavigation
        prev={{ label: "Introduction", href: "/desktop/introduction" }}
        next={{ label: "System Architecture", href: "/desktop/architecture" }}
      />
    </div>
  );
}
