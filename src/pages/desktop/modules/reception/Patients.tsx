import {
  Users,
  Database,
  Code2,
  Terminal,
  Info,
  Activity,
  UserCheck,
  Keyboard,
  ShieldCheck,
} from "lucide-react";
import { DocNavigation } from "../../../../components/DocNavigation";
import { Bold, Code } from "../../../../components/Typography";

export function ReceptionPatients() {
  return (
    <div className="w-full px-12 space-y-24">
      {/* Header Section */}
      <section className="border-b border-slate-200 dark:border-slate-800 pb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-blue-500/10 rounded-2xl">
            <Users className="text-blue-500" size={32} />
          </div>
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">
              Patient Registry
            </h1>
            <Code>src/reception/Patients.tsx</Code>
          </div>
        </div>
        <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
          The definitive archive for branch-specific patient data. Beyond simple
          listing, it manages the <Bold>Daily Attendance Lifecycle</Bold> and
          provides deep-linking into longitudinal records and consultation
          histories.
        </p>
      </section>

      {/* 1. Technical State & Filtering */}
      <section className="space-y-12">
        <h2 className="text-3xl font-black dark:text-white flex items-center gap-3">
          <Database className="text-blue-500" />
          Data States & Search Engine
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Global Dataset (patients)",
              type: "Array<Patient>",
              sample: `[
  { "patient_id": 1001, "patient_name": "Kumar", "attendance_status": "present", "last_visit": "2024-05-18" }
]`,
              desc: "The hydrated collection of all patients ever registered at the branch.",
              usecase:
                "Stored in memory for ultra-fast local filtering but synchronized via manual pull hooks.",
            },
            {
              title: "Search Term (searchQuery)",
              type: "string",
              sample: `"9876..."`,
              desc: "A reactive string that matches against patient_name, uid, and phone_number in real-time.",
              usecase:
                "Triggers a high-priority filter logic that supports partial name strings and exact phone matches.",
            },
            {
              title: "Attendance Log",
              type: "History Object",
              sample: `[{ "date": "2024-05-12", "marked_by": "Receptionist", "status": "present" }]`,
              desc: "Timeline record of when the patient physically visited the clinic.",
              usecase:
                "Used to populate the 'Recent Activity' spark-lines in the patient cards.",
            },
            {
              title: "Operational Cache",
              type: "Object",
              sample: `{ "doctor_list": [...], "status_codes": [...] }`,
              desc: "Static labels and metadata for mapping ID values to human-readable text in the grid.",
              usecase:
                "Ensures the 'Last Handled By' field displays a Doctor Name instead of just a numeric ID.",
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
                  <div className="text-[10px] font-black uppercase text-blue-500 mb-1 flex items-center gap-1">
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

      {/* 2. Core Operational Workflow */}
      <section className="space-y-12">
        <h2 className="text-3xl font-black dark:text-white flex items-center gap-3">
          <Activity className="text-emerald-500" />
          The Attendance Bridge
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold dark:text-white flex items-center gap-2">
              <UserCheck className="text-emerald-500" size={24} />
              Marking Presence
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              The primary daily action for the receptionist. This workflow
              switches a patient's status for the <Bold>Live Daily Census</Bold>
              , notifying clinicians of their arrival.
            </p>
            <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800">
              <div className="text-xs font-bold text-slate-400 mb-4 uppercase tracking-widest flex items-center gap-2">
                <Terminal size={14} className="text-emerald-500" /> Action
                Sequence
              </div>
              <ul className="space-y-4 text-xs font-medium text-slate-500 list-disc pl-4">
                <li>Scan or Search for patient ID.</li>
                <li>Click 'Mark Attendance' button on patient card.</li>
                <li>
                  <Code>POST /reception/attendance</Code> executes with{" "}
                  <Code>patient_id</Code> and <Code>timestamp</Code>.
                </li>
                <li>
                  Local state updates optimistically to show green checkmark.
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[#1a1c1e] p-8 rounded-[32px] border border-white/5 opacity-90">
            <div className="flex items-center gap-2 text-rose-400 font-mono text-xs mb-4">
              <ShieldCheck size={14} />
              <span>Safety Hook: Duplicate Check</span>
            </div>
            <div className="space-y-2 font-mono text-xs">
              <p className="text-slate-500">
                // Prevent double attendance in same shift
              </p>
              <p className="text-rose-200">{`if (patient.last_attendance === today) {`}</p>
              <p className="ml-4 text-rose-200">{`showToast("Attendance already marked", "info");`}</p>
              <p className="ml-4 text-rose-200">{`return;`}</p>
              <p className="text-rose-200">{`}`}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. API Dictionary */}
      <section className="space-y-12">
        <h2 className="text-3xl font-black dark:text-white flex items-center gap-3">
          <Code2 className="text-blue-500" />
          API Interaction Reference
        </h2>
        <div className="overflow-hidden border border-slate-200 dark:border-slate-800 rounded-[32px]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50">
                <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-slate-500 border-b border-slate-200 dark:border-slate-800">
                  Endpoint
                </th>
                <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-slate-500 border-b border-slate-200 dark:border-slate-800">
                  Parameters
                </th>
                <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-slate-500 border-b border-slate-200 dark:border-slate-800">
                  Purpose
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {[
                {
                  endpoint: "GET /reception/patients",
                  params: "?branch_id",
                  purpose: "Fetches the full patient list for the branch.",
                },
                {
                  endpoint: "POST /reception/attendance",
                  params: "{ patient_id, status }",
                  purpose: "Updates visit status for today.",
                },
                {
                  endpoint: "GET /reception/patient/details",
                  params: "?id",
                  purpose: "Fetches deep history for the patient drawer.",
                },
                {
                  endpoint: "POST /reception/patient/update",
                  params: "{ id, ...edits }",
                  purpose: "Persists Demographic/PII changes.",
                },
              ].map((api, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors"
                >
                  <td className="px-6 py-4 font-mono text-xs text-blue-500">
                    {api.endpoint}
                  </td>
                  <td className="px-6 py-4">
                    <Code>{api.params}</Code>
                  </td>
                  <td className="px-6 py-4 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {api.purpose}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. Shortcuts */}
      <section className="space-y-8">
        <h2 className="text-3xl font-black dark:text-white flex items-center gap-3">
          <Keyboard className="text-slate-500" />
          Registry Hotkeys
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { key: "Alt + F", label: "Focus Search" },
            { key: "Alt + R", label: "Sync Registry" },
            { key: "Alt + A", label: "Add Patient" },
            { key: "Ctrl + S", label: "Open Global Search" },
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
          label: "Registration.tsx",
          href: "/desktop/modules/reception/registration",
        }}
        next={{
          label: "Schedule.tsx",
          href: "/desktop/modules/reception/schedule",
        }}
      />
    </div>
  );
}
