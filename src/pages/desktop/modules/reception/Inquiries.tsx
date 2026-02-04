import {
  MessageSquare,
  Box,
  Layers,
  Database,
  Code2,
  Terminal,
  Info,
  Activity,
  UserPlus,
  BarChart,
  Keyboard,
  Globe,
} from "lucide-react";
import { DocNavigation } from "../../../../components/DocNavigation";
import { Bold, Code } from "../../../../components/Typography";

export function ReceptionInquiries() {
  return (
    <div className="w-full px-12 space-y-24">
      {/* Header Section */}
      <section className="border-b border-slate-200 dark:border-slate-800 pb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-blue-500/10 rounded-2xl">
            <MessageSquare className="text-blue-500" size={32} />
          </div>
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">
              Inquiry Management
            </h1>
            <Code>src/reception/Inquiry.tsx</Code>
          </div>
        </div>
        <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
          The branch's CRM engine for lead generation and conversion tracking.
          It manages both clinical consultations and diagnostic test inquiries
          through a unified timeline-based follow-up system.
        </p>
      </section>

      {/* 1. Technical State & Use Cases */}
      <section className="space-y-12">
        <h2 className="text-3xl font-black dark:text-white flex items-center gap-3">
          <Database className="text-indigo-500" />
          Reactive CRM State
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Operational Mode (activeTab)",
              type: "'consultation' | 'test'",
              sample: `"consultation"`,
              desc: "Switches the entire page context between doctor visits and lab test inquiries.",
              usecase:
                "Used to determine which API payload to structure and which table headers to render.",
            },
            {
              title: "Lead Inventory (inquiries)",
              type: "Array<Inquiry>",
              sample: `[
  { "inquiry_id": 402, "name": "Abhishek", "status": "pending", "expected_visit_date": "2024-06-12" }
]`,
              desc: "The primary collection of leads fetched for the active branch and tab.",
              usecase:
                "Filtered locally via searchQuery and statusFilter to provide instant UI updates.",
            },
            {
              title: "Follow-up Timeline (followUpLogs)",
              type: "Array<LogRecord>",
              sample: `[{ "note": "Patient confirmed for Monday", "staff_name": "Syam", "next_date": "2024-06-10" }]`,
              desc: "A historical record of all interactions (calls/walk-ins) for a specific lead.",
              usecase:
                "Drives the vertical timeline component in the Follow-up Modal.",
            },
            {
              title: "Branch Configuration (options)",
              type: "Object (complaints, sources, etc.)",
              sample: `{ "complaints": [{ "label": "Back Pain", "value": "BP" }], "sources": [...] }`,
              desc: "Holds shared labels and values for select menus like 'Referral Source' and 'Staff List'.",
              usecase:
                "Ensures data consistency by mapping internal values to human-readable labels in the table.",
            },
          ].map((state, idx) => (
            <div
              key={idx}
              className="p-8 bg-slate-50 dark:bg-slate-900/50 rounded-[32px] border border-slate-200 dark:border-slate-800 flex flex-col"
            >
              <div className="flex flex-col gap-4 mb-4">
                <h4 className="text-xl font-bold dark:text-white">
                  {state.title}
                </h4>
                <div className="w-fit">
                  <Code>{state.type}</Code>
                </div>
              </div>
              <div className="space-y-4 flex-1">
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {state.desc}
                </p>
                <div className="space-y-2">
                  <div className="text-[10px] font-black uppercase text-slate-400 flex items-center gap-1">
                    <Database size={12} /> Data Sample
                  </div>
                  <div className="p-4 bg-[#1a1c1e] rounded-2xl border border-white/5">
                    <pre className="text-[10px] font-mono text-emerald-400 overflow-x-auto">
                      {state.sample}
                    </pre>
                  </div>
                </div>
                <div className="p-4 bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700">
                  <div className="text-[10px] font-black uppercase text-indigo-500 mb-1 flex items-center gap-1">
                    <Info size={12} /> Dev Use Case
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                    {state.usecase}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Component Inventory */}
      <section className="space-y-12">
        <h2 className="text-3xl font-black dark:text-white flex items-center gap-3">
          <Box className="text-blue-500" />
          Core Components
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Shared Assets */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold dark:text-white flex items-center gap-2">
              <Globe className="text-emerald-500" size={20} />
              Shared Global Assets
            </h3>
            {[
              {
                name: "ReceptionLayout",
                path: "/desktop/components/layout",
                desc: "Provides the standardized sidebar, top navigation, and shortcut provider context.",
              },
              {
                name: "GlobalSearch",
                path: "/desktop/components/global-search",
                desc: "Cross-module search for finding existing patient IDs to relate new inquiries.",
              },
            ].map((comp) => (
              <div
                key={comp.name}
                className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800 transition-all"
              >
                <h4 className="font-bold dark:text-white mb-2">{comp.name}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {comp.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Logic-Specific Assets */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold dark:text-white flex items-center gap-2">
              <Layers className="text-orange-500" size={20} />
              Module Internal Components
            </h3>
            {[
              {
                name: "FollowUpModal",
                desc: "Timeline-centric view for recording lead interactions and scheduling future calls.",
              },
              {
                name: "DatePicker (Internal)",
                desc: "Material Design 3 custom calendar for selecting 'Next Follow-up' dates.",
              },
              {
                name: "Menu (Status Menu)",
                desc: "Dynamic fixed-position overlay for high-speed lead status updates (Visited, Cancelled, Pending).",
              },
            ].map((comp) => (
              <div
                key={comp.name}
                className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800 transition-all"
              >
                <h4 className="font-bold dark:text-white mb-2 font-mono text-sm">
                  {comp.name}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {comp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. API Dictionary */}
      <section className="space-y-12">
        <h2 className="text-3xl font-black dark:text-white flex items-center gap-3">
          <Code2 className="text-rose-500" />
          API Interaction Map
        </h2>
        <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-[40px] border border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 mb-6 text-sm font-bold text-slate-400 px-4">
            <Activity size={16} /> All actions route through{" "}
            <Code>/reception/inquiry</Code> [POST]
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                action: "fetch",
                payload: "{ branch_id, type }",
                desc: "Loads all leads for the current active tab.",
              },
              {
                action: "update_status",
                payload: "{ id, status }",
                desc: "Triggers status transition (e.g., to 'Visited').",
              },
              {
                action: "add_followup",
                payload: "{ inquiry_id, note, next_date }",
                desc: "Persists a new interaction log entry.",
              },
              {
                action: "fetch_followups",
                payload: "{ inquiry_id }",
                desc: "Hydrates the interaction timeline.",
              },
              {
                action: "options",
                payload: "{ branch_id }",
                desc: "Fetches label mappings for complaints & sources.",
              },
              {
                action: "delete",
                payload: "{ id }",
                desc: "Permanently removes an inquiry from the database.",
              },
            ].map((api, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-100 dark:border-slate-700"
              >
                <div className="text-[10px] font-black uppercase text-rose-500 mb-1">
                  Action: {api.action}
                </div>
                <Code className="text-[10px] mb-2 block">{api.payload}</Code>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                  {api.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Functional Workflow: Conversion */}
      <section className="space-y-12">
        <h2 className="text-3xl font-black dark:text-white flex items-center gap-3">
          <Activity className="text-emerald-500" />
          Operational Workflows
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-500">
                <UserPlus size={24} />
              </div>
              <h3 className="text-2xl font-bold dark:text-white">
                Lead-to-Patient Conversion
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              The <Code>handleRegister</Code> logic is the most critical
              conversion bridge in the module. It doesn't just navigate; it{" "}
              <Bold>pre-fills the global application state</Bold> to eliminate
              manual double-entry.
            </p>
            <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800">
              <div className="text-xs font-bold text-slate-400 mb-4 uppercase tracking-widest flex items-center gap-2">
                <BarChart size={14} /> Propagation Sequence
              </div>
              <ul className="space-y-4 text-xs font-medium text-slate-500">
                <li className="flex gap-3">
                  <span className="text-emerald-500">01.</span> Map Inquiry
                  object properties (phone, age) to PrefillData payload.
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-500">02.</span> Use React Router{" "}
                  <Code>navigate()</Code> state to pass payload.
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-500">03.</span> Dashboard
                  catches state and triggers <Code>activeModal</Code>{" "}
                  programmatically.
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[#1a1c1e] p-8 rounded-[32px] border border-white/5 opacity-90 h-full flex flex-col justify-center">
            <Terminal className="text-emerald-500 mb-6" />
            <div className="space-y-2 font-mono text-xs">
              <p className="text-emerald-400">// Conversion bridging logic</p>
              <p className="text-emerald-50/70">
                const prefillData ={" "}
                {`{ patient_name: inquiry.name, phone: inquiry.phone_number }`};
              </p>
              <p className="text-emerald-400 mt-4">
                // State-driven navigation
              </p>
              <p className="text-emerald-50/70">
                navigate('/reception/dashboard',{" "}
                {`{ state: { activeModal: 'registration', prefillData } }`});
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Shortcuts */}
      <section className="space-y-8">
        <h2 className="text-3xl font-black dark:text-white flex items-center gap-3">
          <Keyboard className="text-slate-500" />
          Module Hotkeys
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { key: "Alt + C", label: "Consultation Tab" },
            { key: "Alt + T", label: "Diagnostic Tab" },
            { key: "Alt + F", label: "Focus Filtering" },
            { key: "Alt + R", label: "Force Refresh" },
          ].map((s, i) => (
            <div
              key={i}
              className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex flex-col gap-1"
            >
              <span className="font-black text-blue-500 text-xs">{s.key}</span>
              <span className="text-[10px] text-slate-400 font-bold uppercase">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <DocNavigation
        prev={{
          label: "Schedule Management",
          href: "/desktop/modules/reception/schedule",
        }}
        next={{
          label: "Patient Registration",
          href: "/desktop/modules/reception/registration",
        }}
      />
    </div>
  );
}
