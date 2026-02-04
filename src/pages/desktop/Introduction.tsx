import { Zap, Database, Shield, Layout, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { DocNavigation } from "../../components/DocNavigation";
import { Bold } from "../../components/Typography";

export function DesktopIntro() {
  return (
    <div className="w-full px-12">
      <div className="mb-12 border-b border-slate-200 dark:border-slate-800 pb-8">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
          PhysioEZ Desktop
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
          A high-performance native application built for modern clinics. It
          features dedicated panels tailored for different roles from
          receptionists to administrators ensuring the right tools are always at
          hand.
        </p>
      </div>

      <div className="space-y-16">
        <section>
          <h2
            id="what-is-physioez"
            className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3 scroll-mt-24"
          >
            <Layout className="text-indigo-500" />
            What is it?
          </h2>
          <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-8 border border-slate-200 dark:border-slate-800">
            <p className="text-slate-700 dark:text-slate-300 leading-7 mb-6">
              PhysioEZ Desktop is the primary interface for daily clinic
              operations. Unlike a web browser, it runs as a standalone window
              on your operating system (Windows, macOS, or Linux). This ensures:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Zap size={14} strokeWidth={3} />
                </div>
                <div>
                  <Bold>Instant Response - </Bold>
                  <span className="text-slate-600 dark:text-slate-400 text-sm">
                    Keyboard shortcuts and local caching make navigating patient
                    records faster than any website.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Database size={14} strokeWidth={3} />
                </div>
                <div>
                  <Bold>Direct Hardware Access - </Bold>
                  <span className="text-slate-600 dark:text-slate-400 text-sm">
                    Communicates directly with receipt printers, label makers,
                    and biometric scanners.
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Shield size={14} strokeWidth={3} />
                </div>
                <div>
                  <Bold>Enhanced Security - </Bold>
                  <span className="text-slate-600 dark:text-slate-400 text-sm">
                    Patient data is encrypted at rest and isolated from general
                    web browsing risks.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* ... (existing Tech Stack section) ... */}
        <section>
          <h2
            id="tech-stack"
            className="text-2xl font-bold text-slate-900 dark:text-white mb-6 scroll-mt-24"
          >
            Technology Stack
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            We use a modern "Hybrid" approach. The interface is built with web
            technologies you know, but it runs inside a secure, native shell.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-colors group">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-slate-900 dark:text-white">
                  Tauri v2
                </span>
                <span className="px-2 py-1 rounded text-[10px] uppercase font-bold bg-slate-100 dark:bg-slate-800 text-slate-500">
                  The Shell
                </span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                A lightweight Rust-based framework that wraps the application.
                It provides the native window and system access.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-colors group">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-slate-900 dark:text-white">
                  React 19
                </span>
                <span className="px-2 py-1 rounded text-[10px] uppercase font-bold bg-slate-100 dark:bg-slate-800 text-slate-500">
                  The UI
                </span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Handles all the visuals, buttons, and user interactions. Built
                with components for consistency.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-colors group">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-slate-900 dark:text-white">
                  Node.js (Express)
                </span>
                <span className="px-2 py-1 rounded text-[10px] uppercase font-bold bg-slate-100 dark:bg-slate-800 text-slate-500">
                  The Brain
                </span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Runs locally on the machine to handle data processing,
                calculations, and API logic.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-colors group">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-slate-900 dark:text-white">
                  MySQL
                </span>
                <span className="px-2 py-1 rounded text-[10px] uppercase font-bold bg-slate-100 dark:bg-slate-800 text-slate-500">
                  The Vault
                </span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Stores all clinic data safely. The application connects directly
                to this database.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-indigo-50 dark:bg-indigo-900/10 rounded-2xl p-8 border border-indigo-100 dark:border-indigo-500/20 not-prose">
          <h3 className="font-bold text-indigo-900 dark:text-indigo-200 mb-2">
            Ready to explore?
          </h3>
          <p className="text-indigo-700 dark:text-indigo-400 text-sm mb-6">
            Dive deeper into the specific modules or learn how to set up your
            development environment.
          </p>
          <div className="flex gap-4">
            <Link
              to="/desktop/modules/reception"
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-bold hover:bg-indigo-700 transition-colors"
            >
              View Reception Module <ArrowRight size={16} />
            </Link>
            <Link
              to="/desktop/installation"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            >
              Installation Guide
            </Link>
          </div>
        </section>
      </div>
      <DocNavigation
        next={{ label: "Installation Guide", href: "/desktop/installation" }}
      />
    </div>
  );
}
