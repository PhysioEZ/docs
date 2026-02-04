import {
  Database,
  Code2,
  Terminal,
  Info,
  UserPlus,
  Keyboard,
  ShieldCheck,
  Box,
  Layers,
  Globe,
  Lock,
} from "lucide-react";
import { DocNavigation } from "../../../../components/DocNavigation";
import { Code } from "../../../../components/Typography";

export function ReceptionRegistration() {
  return (
    <div className="w-full px-12 space-y-24">
      {/* Header Section */}
      <section className="border-b border-slate-200 dark:border-slate-800 pb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-indigo-500/10 rounded-2xl">
            <UserPlus className="text-indigo-500" size={32} />
          </div>
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">
              Patient Registration
            </h1>
            <Code>src/reception/Registration.tsx</Code>
          </div>
        </div>
        <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
          The central hub for managing patient intake, clinical conversion, and
          financial auditing. This module handles the transition from raw lead
          (Inquiry) to active treatment tracks while enforcing strict financial
          approval locks.
        </p>
      </section>

      {/* 1. Technical State & Audit Locks */}
      <section className="space-y-12">
        <h2 className="text-3xl font-black dark:text-white flex items-center gap-3">
          <Database className="text-indigo-500" />
          State & Integrity Controls
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Registry Window (registrations)",
              type: "Array<RegistrationRecord>",
              sample: `[
  { "registration_id": 501, "patient_name": "Rahul", "approval_status": "pending", "status": "pending" }
]`,
              desc: "The paginated active registry. Contains identity, clinical metadata, and specific audit flags.",
              usecase:
                "Items with approval_status === 'pending' trigger a visual 'slashed-bg' Lock overlay, disabling treatment conversion.",
            },
            {
              title: "Operational Cache (options)",
              type: "Object",
              sample: `{ "referred_by": ["Social", "Direct"], "types": ["Consultation", "Review"] }`,
              desc: "Hydrates all filter dropdowns and detail-modal edit fields with branch-authorized values.",
              usecase:
                "Prevents free-text entry errors during registration editing by enforcing preset labels.",
            },
            {
              title: "Financial Override (selectedForPaymentFix)",
              type: "RegistrationRecord | null",
              sample: `{ "registration_id": 501, "consultation_amount": "500" }`,
              desc: "A temporary pointer to a record that was rejected by the manager due to incorrect payment methodology.",
              usecase:
                "Hydrates the UpdatePaymentModal to allow corrections that trigger auto-re-approval.",
            },
            {
              title: "Service Track Bridge (serviceTracks)",
              type: "Array<TrackDefinition>",
              sample: `[{ "name": "Physiotherapy", "themeColor": "#006a6a", "icon": "Zap" }]`,
              desc: "The list of clinical departments active for the branch.",
              usecase:
                "Generates the department-specific conversion buttons within the Registration detail view.",
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

      {/* 2. Component Portfolio */}
      <section className="space-y-12">
        <h2 className="text-3xl font-black dark:text-white flex items-center gap-3">
          <Box className="text-blue-500" />
          Component Registry
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Sub-Modals */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold dark:text-white flex items-center gap-2">
              <Layers className="text-orange-500" size={20} />
              Functional Sub-Modals
            </h3>
            {[
              {
                name: "DynamicServiceModal",
                desc: "A recursive form engine that maps registration data to specific clinical service fields (e.g. Rehab protocols).",
              },
              {
                name: "UpdatePaymentModal",
                desc: "Specialized audit-fix interface. Updates transaction methods and clears rejection flags.",
              },
              {
                name: "BillPreview",
                desc: "A shadow-DOM printable component using font-serif and tailwind-print utilities for A4 receipt generation.",
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

          {/* Global UI */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold dark:text-white flex items-center gap-2">
              <Globe className="text-emerald-500" size={20} />
              Shared Global UI
            </h3>
            {[
              {
                name: "GlobalSearch",
                path: "/desktop/components/global-search",
                desc: "Provides Ctrl+S fuzzy search for existing patients.",
              },
              {
                name: "KeyboardShortcuts",
                path: "/desktop/components/shortcuts",
                desc: "Maps Alt+Q/E/Z to instant filter switches.",
              },
              {
                name: "StatusDropdown",
                desc: "A Portal-based menu that prevents overflow cropping in high-density grid rows.",
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
        </div>
      </section>

      {/* 3. API Dictionary */}
      <section className="space-y-12">
        <h2 className="text-3xl font-black dark:text-white flex items-center gap-3">
          <Code2 className="text-rose-500" />
          API Interaction Reference
        </h2>
        <div className="overflow-hidden border border-slate-200 dark:border-slate-800 rounded-[32px]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50">
                <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-slate-500 border-b border-slate-200 dark:border-slate-800">
                  Action Path
                </th>
                <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-slate-500 border-b border-slate-200 dark:border-slate-800">
                  Payload Sample
                </th>
                <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-slate-500 border-b border-slate-200 dark:border-slate-800">
                  Operational Result
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {[
                {
                  action: "fetch",
                  payload: "{ branch_id, page, status }",
                  result: "Hydrates main card grid with paginated data.",
                },
                {
                  action: "update_status",
                  payload: "{ id, status }",
                  result:
                    "Transitions patient flow (e.g., Pending -> Consulted).",
                },
                {
                  action: "details",
                  payload: "{ id }",
                  result:
                    "Fetches exhaustive metadata for the 6xl detail modal.",
                },
                {
                  action: "update_details",
                  payload: "{ registration_id, ...edits }",
                  result: "Persists PII and clinical modifications.",
                },
              ].map((api, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors"
                >
                  <td className="px-6 py-4 font-mono text-xs text-blue-500">
                    POST /reception/registration?action={api.action}
                  </td>
                  <td className="px-6 py-4">
                    <Code>{api.payload}</Code>
                  </td>
                  <td className="px-6 py-4 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {api.result}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. Critical Logic: Conversion Bridging */}
      <section className="space-y-12">
        <h2 className="text-3xl font-black dark:text-white flex items-center gap-3">
          <ShieldCheck className="text-emerald-500" />
          Clinical Conversion Logic
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold dark:text-white">
              Bureau Quick Converter
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              This is the most sensitive workflow in the module. It handles the
              official "Check-In" where a registration is converted into a
              specific treatment department (Physio/Neuro/etc).
            </p>
            <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800">
              <div className="text-xs font-bold text-slate-400 mb-4 uppercase tracking-widest flex items-center gap-2">
                <Lock size={14} className="text-rose-500" /> Mandatory Security
                Checks
              </div>
              <ul className="space-y-4 text-xs font-medium text-slate-500">
                <li className="flex gap-3">
                  <span className="text-indigo-500 font-black">IF</span>{" "}
                  <Code>approval_status === 'pending'</Code>{" "}
                  <span className="text-indigo-500 font-black">THEN</span>{" "}
                  disable all conversion buttons and show "Waiting Approval"
                  lock.
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-500 font-black">IF</span>{" "}
                  <Code>existing_services.length &gt; 0</Code>{" "}
                  <span className="text-indigo-500 font-black">THEN</span> show
                  "Patient Registry Bonded" badge instead of "New Patient"
                  warning.
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[#1a1c1e] p-8 rounded-[32px] border border-white/5 opacity-90 h-full flex flex-col justify-center">
            <Terminal className="text-emerald-500 mb-6" />
            <div className="space-y-2 font-mono text-xs">
              <p className="text-emerald-400">
                // Conversion Safety Shield in JSX
              </p>
              <p className="text-emerald-50/70">{`{ (status === 'pending' || status === 'rejected') && (`}</p>
              <p className="ml-4 text-emerald-50/70">{`<div className="absolute inset-0 z-10 backdrop-blur-[2px]">`}</p>
              <p className="ml-8 text-emerald-400">Locked: Actions Disabled</p>
              <p className="ml-4 text-emerald-50/70">{`</div>`}</p>
              <p className="text-emerald-50/70">{`) }`}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Shortcuts */}
      <section className="space-y-8">
        <h2 className="text-3xl font-black dark:text-white flex items-center gap-3">
          <Keyboard className="text-slate-500" />
          Hotkeys & Power Actions
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { key: "Alt + Q", label: "Filter: Pending" },
            { key: "Alt + E", label: "Filter: Consulted" },
            { key: "Alt + Z", label: "Clear Filters" },
            { key: "Alt + F", label: "Focus Search" },
            { key: "Alt + R", label: "Hard Refresh List" },
            { key: "Alt + Arrows", label: "Paginate (Prev/Next)" },
          ].map((s, i) => (
            <div
              key={i}
              className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex flex-col gap-1"
            >
              <span className="font-black text-indigo-500 text-xs">
                {s.key}
              </span>
              <span className="text-[10px] text-slate-400 font-bold uppercase">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <DocNavigation
        prev={{
          label: "Inquiry CRM",
          href: "/desktop/modules/reception/inquiries",
        }}
        next={{
          label: "Patient Directory",
          href: "/desktop/modules/reception/patients",
        }}
      />
    </div>
  );
}
