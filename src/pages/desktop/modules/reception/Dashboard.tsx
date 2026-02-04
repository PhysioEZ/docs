import {
  BarChart3,
  MousePointer2,
  Code2,
  Zap,
  Keyboard,
  Camera,
  Search,
  Box,
  Layers,
  MessageSquare,
  Globe,
  Database,
  Terminal,
  LayoutGrid,
  ExternalLink,
  Info,
  Calendar,
  Clock,
} from "lucide-react";
import { DocNavigation } from "../../../../components/DocNavigation";
import { Bold, Code } from "../../../../components/Typography";

export function ReceptionDashboardPage() {
  return (
    <div className="w-full px-12 space-y-24">
      {/* Header Section */}
      <section className="border-b border-slate-200 dark:border-slate-800 pb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-blue-500/10 rounded-2xl">
            <BarChart3 className="text-blue-500" size={32} />
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">
            Reception Dashboard
          </h1>
        </div>
        <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
          The central Command & Control hub for branch operations. This module
          orchestrates real-time clinical data, financial throughput, and
          patient engagement workflows through a highly reactive React-based
          infrastructure.
        </p>
      </section>

      {/* 1. Dashboard State Management */}
      <section className="space-y-12">
        <h2 className="text-3xl font-black dark:text-white flex items-center gap-3">
          <Database className="text-indigo-500" />
          Technical State & Use Cases
        </h2>

        <p className="text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          The dashboard state is the single source of truth for the entire
          branch's daily operations. Developers working on this page should
          understand how these states interact to prevent side-effects during
          re-renders.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Dashboard Statistics (data)",
              type: "DashboardData | null",
              sample: `{
  "registration": { "today_total": 12, "pending": 4 },
  "schedule": [
    { "id": 1, "patient_name": "John Doe", "appointment_time": "10:30 AM", "status": "Scheduled" }
  ],
  "collections": { "today_total": 45000 },
  "weekly": [{ "day": "Mon", "total": 12000 }]
}`,
              desc: "The primary operational data object. Aggregates census, real-time schedule, and financial trends.",
              usecase:
                "Drives the main metrics grid and the 'Today's Schedule' list view.",
            },
            {
              title: "Approvals Queue (pendingList)",
              type: "Array<ApprovalRecord>",
              sample: `[{ "id": 101, "item_name": "Rehab Package", "request_by": "Dr. Smith", "status": "Pending" }]`,
              desc: "List of transactions or records requiring administrative validation before processing.",
              usecase:
                "Populates the Approvals modal. Devs should trigger fetchApprovals() after every submission that requires clearance.",
            },

            {
              title: "Test Config (selectedTests)",
              type: "Record<string, {checked: boolean, amount: string}>",
              sample: `{
  "EEG": { "checked": true, "amount": "1200.00" },
  "NCV": { "checked": false, "amount": "2500.00" }
}`,
              desc: "A complex reactive map of test codes to their selection status and dynamically edited costs.",
              usecase:
                "Used in the 'Book Test' modal. Devs must ensure that updating this state triggers a recalculation of the total payable amount.",
            },
            {
              title: "Active UI State (activeModal)",
              type: "ModalType",
              sample: `"registration" | "test" | null`,
              desc: "Controlled by the FAB and header actions. It determines which form or overlay is currently visible.",
              usecase:
                "Developers should use this to toggle between different operational modes without reloading the page context.",
            },
            {
              title: "Financial Splits (regPaymentSplits)",
              type: "Record<string, number>",
              sample: `{ "CASH": 500, "UPI": 700 }`,
              desc: "Maps payment method codes (Cash, Online, Card) to specific amounts.",
              usecase:
                "Crucial for complex billing. These states are validated against total payable amounts during handleSubmit.",
            },
            {
              title: "Scheduling Context (selectedDate / timeSlots)",
              type: "string / Array<Slot>",
              sample: `{
  "selectedDate": "2024-05-20",
  "timeSlots": [
    { "time": "10:00:00", "label": "10:00 AM", "disabled": false },
    { "time": "10:30:00", "label": "10:30 AM", "disabled": true }
  ]
}`,
              desc: "Coordinates appointment windows. timeSlots are re-fetched from /reception/get_slots whenever selectedDate updates.",
              usecase:
                "Used by the TimePicker component to render valid booking windows. Disabled slots indicate existing bookings or past time.",
            },
            {
              title: "Branch Configuration (formOptions)",
              type: "FormOptions | null",
              sample: `{
  "paymentMethods": [
    { "method_code": "CASH", "method_name": "Cash" },
    { "method_code": "UPI", "method_name": "Online Transfer" }
  ],
  "referrers": ["Self", "Dr. Sharma"]
}`,
              desc: "Global branch settings including payment methods, referrers, and service types. Fetched once on mount.",
              usecase:
                "Standardizes inputs across all dashboard modals. Use this to populate Select components and drive payment split logic.",
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
                    <Database size={12} /> Data Sample / Server Mock
                  </div>
                  <div className="p-4 bg-[#1a1c1e] rounded-2xl border border-white/5">
                    <pre className="text-[10px] font-mono text-emerald-400 overflow-x-auto">
                      {state.sample}
                    </pre>
                  </div>
                </div>

                <div className="p-4 bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700">
                  <div className="text-[10px] font-black uppercase text-indigo-500 mb-1 flex items-center gap-1">
                    <Info size={12} /> Dev Usecase
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium italic">
                    {state.usecase}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Component Inventory: Global & Internal */}
      <section className="space-y-12">
        <h2 className="text-3xl font-black dark:text-white flex items-center gap-3">
          <Box className="text-blue-500" />
          Component Architecture
        </h2>

        <div className="space-y-12">
          {/* Global Components */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold dark:text-white flex items-center gap-2">
              <Globe className="text-emerald-500" size={20} />
              Shared Global Components
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              These are imported from <Code>src/components</Code> and used
              across multiple modules. Click the links to visit their
              specialized documentation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  name: "GlobalSearch",
                  path: "/desktop/components/global-search",
                  icon: Search,
                  desc: "A complex overlay using fuzzy-matching to find patients across the entire branch DB.",
                },
                {
                  name: "DailyIntelligence",
                  path: "/desktop/components/daily-intelligence",
                  icon: Zap,
                  desc: "Analyzes today's census and financial data to provide actionable insights for staff.",
                },
                {
                  name: "KeyboardShortcuts",
                  path: "/desktop/components/shortcuts",
                  icon: Keyboard,
                  desc: "The brain for Alt-based hotkeys. Registers listeners for all operational modals.",
                },
                {
                  name: "ChatModal",
                  path: "/desktop/components/chat",
                  icon: MessageSquare,
                  desc: "WebSocket-enabled communication hub for real-time internal branch coordination.",
                },
                {
                  name: "CustomSelect",
                  path: "/desktop/components/ui/select",
                  icon: LayoutGrid,
                  desc: "MD3 compliant dropdown with search and portal-rendering support.",
                },
                {
                  name: "DatePicker",
                  path: "/desktop/components/ui/date-picker",
                  icon: Calendar,
                  desc: "Material Design 3 date selector with range and availability highlighting.",
                },
              ].map((comp) => (
                <div
                  key={comp.name}
                  className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800 group hover:border-emerald-500/50 transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-emerald-500/10 rounded-xl text-emerald-500">
                      <comp.icon size={20} />
                    </div>
                    <button className="text-[10px] font-black uppercase text-emerald-500 flex items-center gap-1 opacity-100 transition-opacity">
                      Documentation <ExternalLink size={10} />
                    </button>
                  </div>
                  <h4 className="font-bold dark:text-white mb-1">
                    {comp.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {comp.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Internal Components */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold dark:text-white flex items-center gap-2">
              <Layers className="text-orange-500" size={20} />
              Internal Dashboard Components
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Defined within <Code>Dashboard.tsx</Code> because they are tightly
              coupled to the dashboard's operational logic.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800">
                <div className="p-2 bg-orange-500/10 rounded-xl text-orange-500 w-fit mb-4">
                  <Clock size={20} />
                </div>
                <h4 className="font-bold dark:text-white mb-1">TimePicker</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  A high-performance selection grid that renders available time
                  slots. It prevents selection of historical or already-booked
                  slots by monitoring the <Code>booked</Code> flag in the API
                  response.
                </p>
              </div>
              <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800">
                <div className="p-2 bg-blue-500/10 rounded-xl text-blue-500 w-fit mb-4">
                  <MousePointer2 size={20} />
                </div>
                <h4 className="font-bold dark:text-white mb-1">
                  Floating Action Hub (FAB)
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  A multi-action FAB that opens the 4 main operational modals
                  (Registration, Test, Inquiry, Test Inquiry). Uses{" "}
                  <Bold>Framer Motion</Bold> for the radial popup animation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Exhaustive API Reference */}
      <section className="space-y-12">
        <h2 className="text-3xl font-black dark:text-white flex items-center gap-3">
          <Code2 className="text-rose-500" />
          Complete API Dictionary
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Every endpoint consumed by the <Code>ReceptionDashboard</Code> module.
          Auth headers are automatically injected by the <Code>authFetch</Code>{" "}
          utility.
        </p>

        <div className="overflow-hidden border border-slate-200 dark:border-slate-800 rounded-[32px]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50">
                <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-slate-500 border-b border-slate-200 dark:border-slate-800">
                  Endpoint
                </th>
                <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-slate-500 border-b border-slate-200 dark:border-slate-800">
                  Method
                </th>
                <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-slate-500 border-b border-slate-200 dark:border-slate-800">
                  Payload Sample
                </th>
                <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-slate-500 border-b border-slate-200 dark:border-slate-800">
                  Operation Use Case
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {[
                {
                  path: "/system/status",
                  method: "GET",
                  payload: "N/A",
                  use: "Standard heartbeat system check to ensure build synchronization.",
                },
                {
                  path: "/reception/dashboard",
                  method: "GET",
                  payload: "?branch_id",
                  use: "Hydrates all statistical cards (Census, Flux, Finance).",
                },
                {
                  path: "/reception/form_options",
                  method: "GET",
                  payload: "?branch_id&date",
                  use: "Fetches referrers, test types, and MD3 select options.",
                },
                {
                  path: "/reception/get_pending_approvals",
                  method: "GET",
                  payload: "?branch_id",
                  use: "Populates the Approvals modal for admin tasks.",
                },
                {
                  path: "/reception/notifications",
                  method: "GET",
                  payload: "?employee_id",
                  use: "Drives the top-nav ticker with unread count support.",
                },
                {
                  path: "/reception/search_patients",
                  method: "GET",
                  payload: "?branch_id&q",
                  use: "Unified lookup across 4 logical database tables.",
                },
                {
                  path: "/reception/get_slots",
                  method: "GET",
                  payload: "?date",
                  use: "Determines available appointment windows for the current date.",
                },
                {
                  path: "/reception/registration_submit",
                  method: "POST",
                  payload: "{ patient_info, payments }",
                  use: "Persists new patient records with financial splits.",
                },
                {
                  path: "/reception/test_submit",
                  method: "POST",
                  payload: "{ tests[], payments }",
                  use: "Initializes lab workflows and processes advance collections.",
                },
                {
                  path: "/reception/inquiry_submit",
                  method: "POST",
                  payload: "{ lead_info, source }",
                  use: "Captures patient leads for branch follow-ups.",
                },
                {
                  path: "/reception/test_inquiry_submit",
                  method: "POST",
                  payload: "{ test_name, contact }",
                  use: "Specialized lead capture for lab interests.",
                },
              ].map((api, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors"
                >
                  <td className="px-6 py-4 font-mono text-xs text-blue-500">
                    {api.path}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 rounded text-[10px] font-black ${api.method === "GET" ? "bg-blue-100 text-blue-600" : "bg-rose-100 text-rose-600"}`}
                    >
                      {api.method}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <Code>{api.payload}</Code>
                  </td>
                  <td className="px-6 py-4 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {api.use}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. Logic Deep Dive: Payment Orchestration */}
      <section className="space-y-12">
        <h2 className="text-3xl font-black dark:text-white flex items-center gap-3">
          <Terminal className="text-emerald-500" />
          Internal Functional Workflows
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-xl font-bold dark:text-white">
              The Payment Split Engine
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              Billing logic is the most critical part of this dashboard.
              Developers must ensure the <Bold>Splits Validation</Bold> never
              fails silently.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-4 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800">
                <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-500 h-fit">
                  <Info size={16} />
                </div>
                <div>
                  <h5 className="text-sm font-bold dark:text-white">
                    Optimistic Split Assignment
                  </h5>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    If a user selects only 1 payment method, the logic
                    automatically assigns the full 100% value to that method in
                    the POST payload.
                  </p>
                </div>
              </li>
              <li className="flex gap-4 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800">
                <div className="p-2 bg-rose-500/10 rounded-lg text-rose-500 h-fit">
                  <Info size={16} />
                </div>
                <div>
                  <h5 className="text-sm font-bold dark:text-white">
                    Strict Sum Equality
                  </h5>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    The submission function will block if the sum of all
                    individual splits (Cash + UPI + Card) does not match the
                    total required amount to the cent.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-[34px] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-[#1a1c1e] p-8 rounded-[32px] border border-white/5 opacity-90 h-full flex flex-col justify-center">
              <Terminal className="text-emerald-500 mb-6" />
              <div className="space-y-2">
                <p className="text-emerald-400 font-mono text-[10px]">
                  // 1. assignment logic
                </p>
                <p className="text-emerald-50/70 font-mono text-xs">
                  const finalSplits = {`{ ...testPaymentSplits }`};
                </p>
                <p className="text-emerald-50/70 font-mono text-xs">
                  if (keys === 1) finalSplits[m] = total;
                </p>
                <p className="text-emerald-400 font-mono text-[10px] mt-4">
                  // 2. summation check
                </p>
                <p className="text-emerald-50/70 font-mono text-xs">
                  if (currentSum !== totalReq) show_error();
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Hardware Integration Hub */}
      <section className="p-12 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-[40px] border border-indigo-500/20">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-3 text-indigo-500">
              <Camera size={28} />
              <h2 className="text-3xl font-bold">
                Hardware: Media Identification
              </h2>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
              The dashboard interfaces directly with the host's{" "}
              <Bold>Webcam</Bold> via
              <Code>navigator.mediaDevices.getUserMedia</Code>. This provides
              zero-friction patient identification during onboarding by
              capturing high-resolution portrait frames and serializing them as
              Base64 JPEG strings.
            </p>
          </div>
          <div className="w-full lg:w-[400px] h-48 bg-slate-900/10 dark:bg-white/5 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-center">
            <div className="text-center">
              <Globe className="text-slate-400 mx-auto mb-2" />
              <span className="text-[10px] font-mono text-slate-500">
                CanvasRenderingContext2D.drawImage()
              </span>
            </div>
          </div>
        </div>
      </section>

      <DocNavigation
        prev={{
          label: "Introduction",
          href: "/desktop/modules/reception",
        }}
        next={{
          label: "Schedule Management",
          href: "/desktop/modules/reception/schedule",
        }}
      />
    </div>
  );
}
