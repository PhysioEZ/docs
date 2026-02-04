import {
  Puzzle,
  Globe,
  Database,
  Layers,
  Folder,
  File,
  FileCode,
} from "lucide-react";
import { DocNavigation } from "../../components/DocNavigation";
import { Bold } from "../../components/Typography";

const repoStructure = [
  { name: "desktop", type: "root", depth: 0, comment: "Workspace Root" },
  {
    name: "frontend",
    type: "folder",
    depth: 1,
    comment: "React + Vite Application",
  },
  { name: "src", type: "folder", depth: 2, comment: "" },
  { name: "admin", type: "folder", depth: 3, comment: "Admin Dashboard Views" },
  {
    name: "reception",
    type: "folder",
    depth: 3,
    comment: "Receptionist Workflows",
  },
  {
    name: "components",
    type: "folder",
    depth: 3,
    comment: "Shared UI (Modals, Forms)",
  },
  {
    name: "screens",
    type: "folder",
    depth: 3,
    comment: "Page-level Components",
  },
  { name: "store", type: "folder", depth: 3, comment: "Zustand State Stores" },
  { name: "constants", type: "folder", depth: 3, comment: "Global Constants" },
  {
    name: "types",
    type: "folder",
    depth: 3,
    comment: "TypeScript Definitions",
  },
  { name: "utils", type: "folder", depth: 3, comment: "Helper Functions" },
  { name: "App.tsx", type: "file", depth: 3, comment: "Main App Component" },
  { name: "main.tsx", type: "file", depth: 3, comment: "Entry Point" },
  { name: "public", type: "folder", depth: 2, comment: "Static Assets" },
  {
    name: "vite.config.ts",
    type: "config",
    depth: 2,
    comment: "Build Configuration",
  },

  { name: "server", type: "folder", depth: 1, comment: "Node.js API" },
  { name: "api", type: "folder", depth: 2, comment: "Endpoint Handlers" },
  { name: "admin", type: "folder", depth: 3, comment: "Admin Logic" },
  { name: "auth", type: "folder", depth: 3, comment: "Auth Logic" },
  { name: "common", type: "folder", depth: 3, comment: "Shared Logic" },
  { name: "reception", type: "folder", depth: 3, comment: "Reception Logic" },
  { name: "src", type: "folder", depth: 2, comment: "Core Infrastructure" },
  { name: "config", type: "folder", depth: 3, comment: "DB & Env Config" },
  {
    name: "middleware",
    type: "folder",
    depth: 3,
    comment: "Auth & Error Handling",
  },
  { name: "scripts", type: "folder", depth: 3, comment: "Maintenance Scripts" },
  { name: "uploads", type: "folder", depth: 2, comment: "File Storage" },
  { name: "chat_uploads", type: "folder", depth: 3, comment: "" },
  { name: "patient_photos", type: "folder", depth: 3, comment: "" },
  { name: ".env", type: "config", depth: 2, comment: "Environment Variables" },
  { name: "server.js", type: "file", depth: 2, comment: "Server Entry Point" },

  {
    name: "src-tauri",
    type: "folder",
    depth: 1,
    comment: "Native Rust Interop",
  },
  { name: "src", type: "folder", depth: 2, comment: "Rust System Hooks" },
  {
    name: "capabilities",
    type: "folder",
    depth: 2,
    comment: "Security Scopes",
  },
  {
    name: "tauri.conf.json",
    type: "config",
    depth: 2,
    comment: "App Configuration",
  },
];

export function Architecture() {
  return (
    <div className="w-full px-18 space-y-16">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-8">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
          System Architecture
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
          Overview of the Secure Hybrid Architecture, featuring{" "}
          <Bold>Smart Client-Side Throttling</Bold> (Lazy Loading) to maximize
          performance and minimize server costs.
        </p>
      </div>

      {/* High Level Overview: The Data Pipeline */}
      <section>
        <h2
          id="overview"
          className="text-2xl font-bold text-slate-900 dark:text-white mb-10 flex items-center gap-3 scroll-mt-24"
        >
          <Layers className="text-indigo-500" />
          High-Level Architecture: The Data Pipeline
        </h2>

        {/* Vertical Timeline Container */}
        <div className="max-w-3xl mx-auto relative pl-8 md:pl-0">
          {/* Central Line (Desktop) */}
          <div className="hidden md:block absolute top-0 left-1/2 w-0.5 h-full bg-slate-200 dark:bg-slate-800 -translate-x-1/2 rounded-full" />
          {/* Left Line (Mobile) */}
          <div className="md:hidden absolute top-0 left-4 w-0.5 h-full bg-slate-200 dark:bg-slate-800 rounded-full" />

          <div className="space-y-12">
            {/* Step 1: Client Action */}
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 group">
              {/* Icon/Marker */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white dark:bg-slate-900 border-4 border-cyan-500 z-10 flex items-center justify-center shadow-sm">
                <span className="text-xs font-bold text-cyan-700 dark:text-cyan-400">
                  1
                </span>
              </div>

              {/* Left Side (Empty or Content depending on stagger) */}
              <div className="hidden md:block w-5/12 text-right pr-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  User Interaction
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  User clicks a button or navigates to a page.
                  <Bold> React 19</Bold> handles the event, and{" "}
                  <Bold>Zustand</Bold> updates the local optimistic state
                  instantly.
                </p>
              </div>

              {/* Right Side (Content or Empty) */}
              <div className="w-full pl-12 md:pl-0 md:w-5/12 md:hidden">
                <div className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  User Interaction
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  User clicks a button or navigates to a page. React handles the
                  event, and Zustand updates local state instantly.
                </p>
              </div>
              {/* Spacer for desktop alignment logic */}
              <div className="hidden md:block md:w-5/12"></div>
            </div>

            {/* Step 2: Smart Throttle (The Core Logic) */}
            <div className="relative flex flex-col md:flex-row-reverse items-center justify-between gap-8">
              {/* Icon/Marker */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-amber-50 dark:bg-slate-900 border-4 border-amber-500 z-10 flex items-center justify-center shadow-md animate-pulse">
                <Puzzle
                  size={18}
                  className="text-amber-600 dark:text-amber-400"
                />
              </div>

              {/* Content Side */}
              <div className="w-full pl-12 md:pl-0 md:w-5/12 md:text-left md:pl-8">
                <div className="bg-amber-50 dark:bg-amber-900/10 p-5 rounded-2xl border border-amber-100 dark:border-amber-500/20">
                  <h3 className="text-lg font-bold text-amber-900 dark:text-amber-100 mb-2">
                    Smart Throttling Layer
                  </h3>
                  <p className="text-sm text-amber-800 dark:text-amber-300 leading-relaxed mb-3">
                    <Bold>The 15s Rule:</Bold> The app checks if data was
                    fetched recently.
                  </p>
                  <ul className="text-xs space-y-2 text-amber-800 dark:text-amber-400 font-mono">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                      <span>If &lt; 15s: STOP. Use Cache.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                      <span>If &gt; 15s: PROCEED to Fetch.</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="hidden md:block md:w-5/12"></div>
            </div>

            {/* Step 3: Secure Transport */}
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Icon/Marker */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white dark:bg-slate-900 border-4 border-slate-300 dark:border-slate-600 z-10 flex items-center justify-center">
                <Globe size={16} className="text-slate-500" />
              </div>

              {/* Content Left */}
              <div className="hidden md:block w-5/12 text-right pr-8">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Secure Transport
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  All requests are encrypted using standard{" "}
                  <Bold>HTTPS (TLS 1.3)</Bold> to ensure data integrity over the
                  public internet.
                </p>
              </div>

              {/* Mobile Content */}
              <div className="w-full pl-12 md:pl-0 md:w-5/12 md:hidden">
                <div className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Secure Transport
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  All requests are encrypted using standard HTTPS (TLS 1.3).
                </p>
              </div>
              <div className="hidden md:block md:w-5/12"></div>
            </div>

            {/* Step 4: Cloud Processing */}
            <div className="relative flex flex-col md:flex-row-reverse items-center justify-between gap-8">
              {/* Icon/Marker */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white dark:bg-slate-900 border-4 border-purple-500 z-10 flex items-center justify-center">
                <Database size={16} className="text-purple-600" />
              </div>

              {/* Content Right */}
              <div className="w-full pl-12 md:pl-0 md:w-5/12 md:text-left md:pl-8">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Cloud Processing
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                  <Bold>Node.js</Bold> receives the request, validates the
                  session, and executes queries against <Bold>MySQL</Bold>.
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-900/20 text-xs font-bold text-purple-700 dark:text-purple-300">
                  Single Source of Truth
                </div>
              </div>
              <div className="hidden md:block md:w-5/12"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Components: Deep Dive */}
      <section className="space-y-8">
        <h2
          id="core-components"
          className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3"
        >
          <Layers className="text-blue-600" />
          Core Components: Technical Deep Dive
        </h2>

        {/* Frontend Architecture Detail */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
            1. Frontend Layer (Tauri + React 19)
          </h3>

          <div className="space-y-8">
            <div>
              <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm uppercase tracking-wide mb-3">
                Architecture Philosophy
              </h4>
              <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-4xl">
                The frontend acts as a <Bold>Smart Client</Bold> rather than a
                passive view. It maintains a localized subset of the database in
                memory to mask network latency. While the server is the source
                of truth, the client is the <em>source of interaction</em>,
                prioritizing responsiveness over immediate consistency.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm uppercase tracking-wide mb-3">
                Component Structure
              </h4>
              <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-2 ml-2">
                <li>
                  <strong>Entry Point:</strong> <code>src/main.tsx</code>{" "}
                  initializes the React Root and Global Providers (Theme, Auth).
                </li>
                <li>
                  <strong>Router:</strong> <code>React Router v6</code> manages
                  views. Routes are strictly typed in <code>navigation.ts</code>
                  .
                </li>
                <li>
                  <strong>Layouts:</strong> <code>DesktopLayout.tsx</code>{" "}
                  provides the persistent Sidebar and Topbar shell.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm uppercase tracking-wide mb-3">
                State Management (Zustand)
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                We avoid prop-drilling by using atomic Zustand stores. Each
                domain entity (Patients, Appointments) has its own store.
              </p>
              <div className="mt-4 rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden bg-[#1e1e1e] shadow-sm">
                <div className="flex items-center justify-between px-4 py-2 bg-[#252526] border-b border-[#1e1e1e]">
                  <div className="flex items-center gap-2">
                    <FileCode className="w-4 h-4 text-blue-400" />
                    <span className="text-xs text-slate-400 font-medium">
                      src/store/usePatientStore.ts
                    </span>
                  </div>
                </div>
                <div className="p-4 overflow-x-auto">
                  <pre className="text-sm font-mono leading-relaxed text-[#d4d4d4]">
                    <span className="text-[#6a9955]">{`// Atomic State Example`}</span>
                    {`
export const usePatientStore = create((set, get) => ({
  patients: [],
  lastFetched: 0,

  fetch: async () => {
    `}
                    <span className="text-[#6a9955]">{`// 1. Check Cache (15s throttle)`}</span>
                    {`
    if (Date.now() - get().lastFetched < 15000) return;

    `}
                    <span className="text-[#6a9955]">{`// 2. Fetch & Update`}</span>
                    {`
    const data = await api.get('/patients');
    set({ patients: data, lastFetched: Date.now() });
  }
}))`}
                  </pre>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-100 dark:border-slate-800">
              <div className="bg-blue-50 dark:bg-blue-900/10 p-5 rounded-lg border border-blue-100 dark:border-blue-800">
                <h4 className="font-bold text-blue-900 dark:text-blue-200 text-xs uppercase tracking-wide mb-3">
                  Key Libraries
                </h4>
                <div className="flex flex-wrap gap-4 text-xs text-blue-800 dark:text-blue-300 font-medium">
                  <span className="px-2 py-1 bg-white/50 rounded">
                    React 19 + TypeScript
                  </span>
                  <span className="px-2 py-1 bg-white/50 rounded">Vite 6</span>
                  <span className="px-2 py-1 bg-white/50 rounded">
                    TailwindCSS v4
                  </span>
                  <span className="px-2 py-1 bg-white/50 rounded">Zustand</span>
                </div>
              </div>

              <div className="p-5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                <h4 className="font-bold text-slate-700 dark:text-slate-300 text-xs uppercase tracking-wide mb-3">
                  Native Bridge
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  <code>window.__TAURI__.invoke</code> handles OS-level File
                  System & Printing tasks.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Backend Architecture Detail */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
            2. Backend Layer (Node.js API)
          </h3>
          <div className="space-y-8">
            <div>
              <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm uppercase tracking-wide mb-3">
                Design Pattern
              </h4>
              <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-4xl">
                The backend follows a standard{" "}
                <Bold>Controller-Service-Repository</Bold> pattern to separate
                concerns. This ensures interactions are testable and business
                logic is isolated from HTTP transport details.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm uppercase tracking-wide mb-3">
                Request Lifecycle
              </h4>
              <ol className="list-decimal list-inside text-sm text-slate-600 dark:text-slate-400 space-y-2 ml-2">
                <li>
                  <strong>Entry:</strong> Request hits Nginx Reverse Proxy →
                  Node.js Server.
                </li>
                <li>
                  <strong>Middleware:</strong> <code>authMiddleware</code>{" "}
                  verifies the JWT Bearer token.
                </li>
                <li>
                  <strong>Validation:</strong> Input body is validated against a
                  Schema (checking types, required fields).
                </li>
                <li>
                  <strong>Service:</strong> Business logic runs (e.g., "Check if
                  patient exists", "Calculate discount").
                </li>
                <li>
                  <strong>Database:</strong> SQL query executes via Connection
                  Pool.
                </li>
                <li>
                  <strong>Response:</strong> JSON payload returned with standard
                  HTTP status codes.
                </li>
              </ol>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/10 p-5 rounded-lg border border-purple-100 dark:border-purple-800 mt-6">
              <h4 className="font-bold text-purple-900 dark:text-purple-200 text-xs uppercase tracking-wide mb-3">
                Tech Context
              </h4>
              <div className="flex flex-wrap gap-4 text-xs text-purple-800 dark:text-purple-300 font-medium">
                <span className="px-2 py-1 bg-white/50 rounded">
                  Node.js 20 LTS
                </span>
                <span className="px-2 py-1 bg-white/50 rounded">MySQL 8.0</span>
                <span className="px-2 py-1 bg-white/50 rounded">
                  Knex / Raw SQL
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Flow & Connectivity Strategy */}
      <section className="space-y-8">
        <h2
          id="state-management"
          className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3"
        >
          <Database className="text-blue-600" />
          Data Synchronization Strategy
        </h2>

        {/* Read Strategy: Smart Throttling */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
            3. Read Strategy: "Fetch-Then-Cache"
          </h3>

          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm uppercase tracking-wide mb-3">
                  The Problem
                </h4>
                <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                  In a cloud-hosted environment, bandwidth and database
                  connections are the primary cost drivers. Naive
                  implementations that fetch data on every component mount
                  (using <code>useEffect</code>) cause "fetch waterfalls" and
                  server overload.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm uppercase tracking-wide mb-3">
                  The Solution: 15s Throttle
                </h4>
                <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                  We implement a strict <strong>Stale-While-Revalidate</strong>{" "}
                  pattern with a 15-second window. This ensures that navigating
                  between "Patients" → "Dashboard" → "Patients" within 15
                  seconds costs <strong>zero</strong> network requests.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-950 p-6 rounded-lg border border-slate-200 dark:border-slate-800">
              <h4 className="font-bold text-slate-700 dark:text-slate-300 text-xs uppercase tracking-wide mb-4">
                Logic Flow
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex flex-col gap-3 p-4 bg-white dark:bg-slate-900 rounded border border-slate-100 dark:border-slate-800 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-sm font-bold shrink-0">
                    1
                  </div>
                  <span>
                    Component mounts and calls <code>fetchPatients()</code>.
                  </span>
                </li>
                <li className="flex flex-col gap-3 p-4 bg-white dark:bg-slate-900 rounded border border-slate-100 dark:border-slate-800 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-sm font-bold shrink-0">
                    2
                  </div>
                  <span>
                    Store checks <code>if (now - lastFetched &lt; 15000)</code>.
                  </span>
                </li>
                <li className="flex flex-col gap-3 p-4 bg-green-50 dark:bg-green-900/10 rounded border border-green-100 dark:border-green-900/20 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 flex items-center justify-center text-sm font-bold shrink-0">
                    3A
                  </div>
                  <span className="text-green-900 dark:text-green-300">
                    <Bold>Fresh:</Bold> Return cached array immediately. No
                    network call.
                  </span>
                </li>
                <li className="flex flex-col gap-3 p-4 bg-blue-50 dark:bg-blue-900/10 rounded border border-blue-100 dark:border-blue-900/20 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 flex items-center justify-center text-sm font-bold shrink-0">
                    3B
                  </div>
                  <span className="text-blue-900 dark:text-blue-300">
                    <Bold>Stale:</Bold> Fire async API call. UI shows loading
                    skeleton.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Write Strategy: Optimistic */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
            4. Write Strategy: Optimistic Propagation
          </h3>

          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div>
                <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm uppercase tracking-wide mb-3">
                  User Experience Priority
                </h4>
                <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  Users should never wait for a server round-trip (200ms+) to
                  see simple updates. We assume success and handle failure as an
                  exception.
                </p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/10 p-5 rounded-lg border-l-4 border-blue-500">
                <p className="text-sm text-blue-800 dark:text-blue-300 italic font-medium">
                  "The interface must feel like it's running locally, even when
                  it's talking to the cloud."
                </p>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-950 p-6 rounded-lg border border-slate-200 dark:border-slate-800">
              <h4 className="font-bold text-slate-700 dark:text-slate-300 text-xs uppercase tracking-wide mb-4">
                Mutation Lifecycle
              </h4>
              <div className="relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 z-0" />

                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm relative z-10">
                  <li className="flex flex-col gap-3 p-4 bg-white dark:bg-slate-900 rounded border border-slate-100 dark:border-slate-800 shadow-sm text-center items-center">
                    <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-sm font-bold shrink-0">
                      1
                    </div>
                    <span>User submits Form (e.g., "Add Patient").</span>
                  </li>
                  <li className="flex flex-col gap-3 p-4 bg-white dark:bg-slate-900 rounded border border-slate-100 dark:border-slate-800 shadow-sm text-center items-center">
                    <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-sm font-bold shrink-0">
                      2
                    </div>
                    <span>
                      <Bold>Optimistic Update:</Bold> Zustand store appends item{" "}
                      <em>immediately</em>.
                    </span>
                  </li>
                  <li className="flex flex-col gap-3 p-4 bg-white dark:bg-slate-900 rounded border border-slate-100 dark:border-slate-800 shadow-sm text-center items-center">
                    <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-sm font-bold shrink-0">
                      3
                    </div>
                    <span>
                      <Bold>Network Sync:</Bold> <code>api.post()</code> is sent
                      in background.
                    </span>
                  </li>
                  <li className="flex flex-col gap-3 p-4 bg-red-50 dark:bg-red-900/10 rounded border border-red-100 dark:border-red-900/20 shadow-sm text-center items-center">
                    <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 flex items-center justify-center text-sm font-bold shrink-0">
                      4
                    </div>
                    <span className="text-red-900 dark:text-red-300">
                      <Bold>Failure:</Bold> If API errors, optimistic item is
                      removed (Rollback).
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directory Structure */}
      <section>
        <h2
          id="file-structure"
          className="text-2xl font-bold text-slate-900 dark:text-white mb-6 scroll-mt-24"
        >
          Repository Structure
        </h2>
        <div className="bg-[#1e1e1e] rounded-xl border border-[#333] overflow-hidden shadow-2xl">
          {/* Mock Window Header */}
          <div className="bg-[#252526] px-4 py-2 flex items-center gap-2 border-b border-[#1e1e1e]">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="ml-4 text-xs text-slate-400 font-medium">
              physioez-desktop — VS Code
            </div>
          </div>

          {/* File Tree Content */}
          <div className="p-4 font-mono text-sm overflow-x-auto">
            {repoStructure.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 hover:bg-[#2a2d2e] py-[2px] rounded cursor-default group"
                style={{ paddingLeft: `${item.depth * 1.5}rem` }}
              >
                {/* Icon Logic */}
                <span className="shrink-0 opacity-80">
                  {item.type === "root" || item.type === "folder" ? (
                    <Folder
                      className={`w-4 h-4 ${item.name === "src" ? "text-green-500" : item.depth === 1 ? "text-blue-400" : "text-blue-300/80"}`}
                      fill="currentColor"
                      fillOpacity={0.2}
                    />
                  ) : item.type === "config" ? (
                    <FileCode className="w-4 h-4 text-yellow-400" />
                  ) : (
                    <File className="w-4 h-4 text-slate-400" />
                  )}
                </span>

                {/* Filename */}
                <span
                  className={`${item.type === "folder" ? "text-slate-200 font-medium" : "text-slate-300"}`}
                >
                  {item.name}
                </span>

                {/* Comment (Right Aligned or Inline) */}
                {item.comment && (
                  <span className="ml-auto text-xs text-[#6a9955] italic hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity pr-4">
                    // {item.comment}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <DocNavigation
        prev={{ label: "Installation Guide", href: "/desktop/installation" }}
      />
    </div>
  );
}
