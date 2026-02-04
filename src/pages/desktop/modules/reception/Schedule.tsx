import {
  Calendar,
  MousePointer2,
  Database,
  Code2,
  Terminal,
  Zap,
  Info,
  GripVertical,
  Activity,
  ShieldCheck,
  AlertCircle,
  RefreshCw,
  Keyboard,
} from "lucide-react";
import { DocNavigation } from "../../../../components/DocNavigation";
import { Bold, Code } from "../../../../components/Typography";

export function ReceptionSchedule() {
  return (
    <div className="w-full px-12 space-y-24">
      {/* Header Section */}
      <section className="border-b border-slate-200 dark:border-slate-800 pb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-emerald-500/10 rounded-2xl">
            <Calendar className="text-emerald-500" size={32} />
          </div>
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">
              Schedule / Appointments
            </h1>
            <Code>src/reception/Schedule.tsx</Code>
          </div>
        </div>
        <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
          A high-performance calendar interface powered by <Bold>@dnd-kit</Bold>{" "}
          for real-time rescheduling and appointment management. Implements a
          safety-first "Safety-First Rescheduling" pattern with optimistic state
          handling.
        </p>
      </section>

      {/* 1. Technical State & Grid Configuration */}
      <section className="space-y-12">
        <h2 className="text-3xl font-black dark:text-white flex items-center gap-3">
          <Database className="text-emerald-500" />
          Reactive State & Time-Grid
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Temporal Context (currentDate)",
              type: "Date",
              sample: `new Date("2024-05-20")`,
              desc: "The anchor date for calculating the current week's starting point (Sunday) via date-fns.",
              usecase:
                "Triggers a re-fetch of all appointments whenever the week changes via navigation chips.",
            },
            {
              title: "Appointment Registry",
              type: "Array<Appointment>",
              sample: `[{ "registration_id": "101", "patient_name": "John", "appointment_time": "09:30:00" }]`,
              desc: "The raw dataset for the current week. Filtered in JSX to populate specific DroppableSlots.",
              usecase:
                "Passed to DraggableAppointment as data attributes for DND identification.",
            },
            {
              title: "Time-Slot Matrix",
              type: "Configured Array",
              sample: `[{ "time": "09:00", "label": "09:00 AM" }, ...]`,
              desc: "A generated array of 20 time slots (30-min intervals) starting from 09:00 AM.",
              usecase:
                "Defines the Y-axis of the calendar grid and the IDs for DroppableSlot components.",
            },
            {
              title: "Update Lock (isUpdating)",
              type: "boolean",
              sample: `true | false`,
              desc: "A blocking state used during API calls to prevent concurrent drag operations.",
              usecase:
                "Shows a high-priority backdrop-blur overlay to ensure data integrity during reschedule.",
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
                  <div className="text-[10px] font-black uppercase text-emerald-500 mb-1 flex items-center gap-1">
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

      {/* 2. Drag & Drop Architecture */}
      <section className="space-y-12">
        <h2 className="text-3xl font-black dark:text-white flex items-center gap-3">
          <MousePointer2 className="text-blue-500" />
          DND Pattern: @dnd-kit
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Draggable */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold dark:text-white flex items-center gap-2">
              <GripVertical className="text-emerald-500" size={24} />
              DraggableAppointment
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Implemented with <Code>useDraggable</Code>. Stores the entire
              appointment object in the <Code>data</Code> property to prevent
              redundant lookups on drag end.
            </p>
            <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800">
              <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">
                Integrity Flags
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-amber-500/20 rounded">
                    <AlertCircle size={14} className="text-amber-500" />
                  </div>
                  <div>
                    <span className="text-sm font-bold dark:text-white text-slate-900 block">
                      Approval Lock
                    </span>
                    <span className="text-xs text-slate-500">
                      If <Code>approval_status === 'pending'</Code>, displays a
                      dashed yellow border.
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-emerald-500/20 rounded">
                    <Activity size={14} className="text-emerald-500" />
                  </div>
                  <div>
                    <span className="text-sm font-bold dark:text-white text-slate-900 block">
                      Live Transform
                    </span>
                    <span className="text-xs text-slate-500">
                      Uses <Code>CSS.Translate.toString(transform)</Code> for
                      GPU-accelerated movement.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Droppable */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold dark:text-white flex items-center gap-2">
              <Zap className="text-blue-500" size={24} />
              DroppableSlot
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              A portal-like container tagged with <Code>day</Code> and{" "}
              <Code>time</Code> payloads. Automatically highlights on{" "}
              <Bold>isOver</Bold> events during drag operations.
            </p>
            <div className="p-6 bg-[#1a1c1e] rounded-3xl border border-white/5 space-y-4">
              <div className="flex items-center gap-2 text-blue-400 font-mono text-xs">
                <Terminal size={14} />
                <span>Slot Logic Overview</span>
              </div>
              <div className="space-y-2 font-mono text-[11px] text-blue-50/50">
                <p className="text-blue-200">// Payload identification</p>
                <p>ID: `{"${dayStr}-${time}"}`</p>
                <p>DATA: {"{ day, time }"}</p>
                <p className="pt-2 text-blue-200">// Visual Feedback</p>
                <p>CLASS: `{"${isOver ? 'bg-[#ccebc4]/30' : ''}"}`</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. API & Communication */}
      <section className="space-y-12">
        <h2 className="text-3xl font-black dark:text-white flex items-center gap-3">
          <Code2 className="text-rose-500" />
          API Dictionary
        </h2>
        <div className="overflow-hidden border border-slate-200 dark:border-slate-800 rounded-[32px]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50">
                <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-slate-500 border-b border-slate-200 dark:border-slate-800">
                  Endpoint
                </th>
                <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-slate-500 border-b border-slate-200 dark:border-slate-800">
                  Payload
                </th>
                <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-slate-500 border-b border-slate-200 dark:border-slate-800">
                  Purpose
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {[
                {
                  endpoint: "GET /reception/schedule",
                  payload: "?week_start&branch_id",
                  purpose: "Fetches full weekly patient appointments.",
                },
                {
                  endpoint: "GET /reception/schedule/slots",
                  payload: "?date&branch_id",
                  purpose: "Fetches availability for the Reschedule Modal.",
                },
                {
                  endpoint: "POST /reception/schedule/reschedule",
                  payload: "{ registration_id, new_date, new_time }",
                  purpose: "Commits appointment movements to database.",
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
                    <Code>{api.payload}</Code>
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

      {/* 4. Reschedule Modal Logic */}
      <section className="space-y-12">
        <h2 className="text-3xl font-black dark:text-white flex items-center gap-3">
          <ShieldCheck className="text-indigo-500" />
          Safety-First Rescheduling
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold dark:text-white">
              Validation Flow
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              While DND allows free-form movement, the{" "}
              <Bold>RescheduleModal</Bold> enforces clinical constraints. It
              ensures patients aren't double-booked beyond branch-allowed
              limits.
            </p>
            <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800">
              <div className="text-xs font-bold text-slate-400 mb-4 uppercase tracking-widest flex items-center gap-2">
                <RefreshCw size={14} className="text-indigo-500" /> Modal
                Sequence
              </div>
              <ol className="space-y-4 text-xs font-medium text-slate-500 list-decimal pl-4">
                <li>Active appointment is selected and modal triggered.</li>
                <li>
                  <Code>InlineDatePicker</Code> updates{" "}
                  <Code>selectedDate</Code>.
                </li>
                <li>
                  Effect hook triggers <Code>fetchSlots</Code> for the specific
                  date.
                </li>
                <li>
                  User selects valid slot from grid; <Code>handleSave</Code>{" "}
                  executes POST.
                </li>
              </ol>
            </div>
          </div>

          <div className="bg-[#1a1c1e] p-8 rounded-[32px] border border-white/5 opacity-90">
            <Terminal className="text-blue-400 mb-6" />
            <div className="space-y-2 font-mono text-xs">
              <p className="text-blue-400">// Dynamic Slot Filtering</p>
              <p className="text-blue-50/70">{`{ slots.map(slot => (`}</p>
              <p className="ml-4 text-blue-50/70">{`<button`}</p>
              <p className="ml-8 text-blue-200">{`disabled={slot.isBooked && (selectedDate !== originalDate)}`}</p>
              <p className="ml-8 text-blue-200">{`onClick={() => setSelectedSlot(slot.time)}`}</p>
              <p className="ml-4 text-blue-50/70">{`>`}</p>
              <p className="ml-8 text-blue-200">{`{slot.label}`}</p>
              <p className="ml-4 text-blue-50/70">{`</button>`}</p>
              <p className="text-blue-50/70">{`)) }`}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Shortcuts */}
      <section className="space-y-8">
        <h2 className="text-3xl font-black dark:text-white flex items-center gap-3">
          <Keyboard className="text-slate-500" />
          Schedule Hotkeys
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { key: "Alt + Left", label: "Prev Week" },
            { key: "Alt + Right", label: "Next Week" },
            { key: "Alt + T", label: "Go to Today" },
            { key: "Ctrl + R", label: "Manual Sync" },
          ].map((s, i) => (
            <div
              key={i}
              className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex flex-col gap-1"
            >
              <span className="font-black text-emerald-500 text-xs">
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
          label: "Registration",
          href: "/desktop/modules/reception/registration",
        }}
      />
    </div>
  );
}
