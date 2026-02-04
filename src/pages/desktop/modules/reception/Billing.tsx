import {
  CreditCard,
  Database,
  Code2,
  Terminal,
  Info,
  Calendar,
  ShieldCheck,
  TrendingUp,
  Banknote,
  LayoutGrid,
  Zap,
  Filter,
} from "lucide-react";
import { DocNavigation } from "../../../../components/DocNavigation";
import { Bold, Code } from "../../../../components/Typography";

export function ReceptionBilling() {
  return (
    <div className="w-full px-12 space-y-24">
      {/* Header Section */}
      <section className="border-b border-slate-200 dark:border-slate-800 pb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-rose-500/10 rounded-2xl">
            <CreditCard className="text-rose-500" size={32} />
          </div>
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">
              Billing & Financials
            </h1>
            <Code>src/reception/Billing.tsx</Code>
          </div>
        </div>
        <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
          The revenue engine of the clinic. This module synchronizes{" "}
          <Bold>Patient Ledgers</Bold>
          with real-time collections, tracking billed amounts, relative dues,
          and multi-modal settlement histories with automated currency
          formatting.
        </p>
      </section>

      {/* 1. Technical State & Metrics */}
      <section className="space-y-12">
        <h2 className="text-3xl font-black dark:text-white flex items-center gap-3">
          <Database className="text-rose-500" />
          Financial State & Aggregations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Performance Stats (stats)",
              type: "Object",
              sample: `{ "today_collection": 4500, "range_billed": 12000, "range_due": 3000 }`,
              desc: "Aggregated financial data for the currently selected month and today's live session.",
              usecase:
                "Drives the large metric cards in the Left Panel for immediate financial situational awareness.",
            },
            {
              title: "Billing Registry (records)",
              type: "Array<BillingRecord>",
              sample: `[{ "patient_id": 5, "total_amount": "5000", "total_paid": "4000", "status": "active" }]`,
              desc: "The core dataset of patient accounts. Records are calculated server-side based on month filters.",
              usecase:
                "Mapped to the main data grid where row clicks trigger the BillingDrawer for payment processing.",
            },
            {
              title: "Month Anchor (currentMonth)",
              type: "Date",
              sample: `new Date("2024-05-01")`,
              desc: "State variable used to calculate startOfMonth and endOfMonth for the fetch_overview action.",
              usecase:
                "Navigational dependency for the useEffect that re-hydrates financial data when the user months-swaps.",
            },
            {
              title: "Visibility Toggles",
              type: "Boolean Flags",
              sample: `{ "showBilled": true, "showCollected": false }`,
              desc: "UI privacy controls that mask/unmask sensitive figures in the Left Panel.",
              usecase:
                "Allows receptionists to work in public areas without exposing total clinic revenue to walk-in patients.",
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
                  <div className="text-[10px] font-black uppercase text-rose-500 mb-1 flex items-center gap-1">
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

      {/* 2. Billing Drawer Integration */}
      <section className="space-y-12">
        <h2 className="text-3xl font-black dark:text-white flex items-center gap-3">
          <LayoutGrid className="text-indigo-500" />
          The Billing Interface
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold dark:text-white flex items-center gap-2">
              <Banknote className="text-emerald-500" size={24} />
              BillingDrawer logic
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              The Billing page doesn't handle payments directly; it orchestrates
              the <Bold>BillingDrawer</Bold>. This component is a global
              singleton controlled via the <Code>usePatientStore</Code>.
            </p>
            <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-800">
              <div className="text-xs font-bold text-slate-400 mb-4 uppercase tracking-widest flex items-center gap-2">
                <Terminal size={14} className="text-rose-500" /> Interaction
                Flow
              </div>
              <ul className="space-y-4 text-xs font-medium text-slate-500 list-disc pl-4">
                <li>Receptionist clicks a row in the Billing table.</li>
                <li>
                  <Code>openPatientDetails(row)</Code> is invoked from the
                  store.
                </li>
                <li>
                  The <Bold>BillingDrawer</Bold> slides out, fetching specific
                  itemized bills for that patient ID.
                </li>
                <li>
                  Payment confirmation in the drawer triggers a{" "}
                  <Code>fetchData()</Code> refresh in the parent Billing
                  component.
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[#1a1c1e] p-8 rounded-[32px] border border-white/5 opacity-90 h-full flex flex-col justify-center">
            <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs mb-6">
              <ShieldCheck size={14} />
              <span>Ledger Integrity Pattern</span>
            </div>
            <div className="space-y-2 font-mono text-xs">
              <p className="text-slate-500">// Client-side due calculation</p>
              <p className="text-indigo-200">{`const bill = parseFloat(row.total_amount);`}</p>
              <p className="text-indigo-200">{`const paid = parseFloat(row.total_paid);`}</p>
              <p className="text-indigo-200">{`const due = bill - paid;`}</p>
              <p className="text-slate-500 mt-4">
                // Status badges based on dues
              </p>
              <p className="text-indigo-200">{`{ row.has_payment_today > 0 && (`}</p>
              <p className="ml-4 text-emerald-400">
                Paid Today: Reflect Live Session
              </p>
              <p className="text-indigo-200">{`) }`}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. API dictionary */}
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
                  action: "fetch_overview",
                  payload: "{ startDate, endDate, search, status }",
                  result:
                    "Hydrates both the Left Panel metrics and the main registry grid.",
                },
                {
                  action: "fetch_patient_ledger",
                  payload: "{ patient_id }",
                  result:
                    "Used by the secondary BillingDrawer to show granular transaction history.",
                },
                {
                  action: "record_payment",
                  payload: "{ patient_id, amount, method, items[] }",
                  result:
                    "Updates the patient's balance and emits a financial notification to the manager.",
                },
              ].map((api, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors"
                >
                  <td className="px-6 py-4 font-mono text-xs text-blue-500">
                    POST /reception/billing?action={api.action}
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

      {/* 4. Filtering Logic */}
      <section className="space-y-12">
        <h2 className="text-3xl font-black dark:text-white flex items-center gap-3">
          <Filter className="text-emerald-500" />
          Financial Search Tiers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Temporal Filter",
              desc: "Filters by Month/Year. Essential for auditing previous financial cycles.",
              icon: Calendar,
            },
            {
              title: "Status Filter",
              desc: "Isolates 'Active' accounts with pending dues from 'Completed' full-settlement records.",
              icon: TrendingUp,
            },
            {
              title: "Session Filter",
              desc: "The 'Zap' (Today) filter isolates patients who made transactions in the current working shift.",
              icon: Zap,
            },
          ].map((f, i) => (
            <div
              key={i}
              className="p-8 bg-slate-50 dark:bg-slate-900/50 rounded-[32px] border border-slate-200 dark:border-slate-800"
            >
              <f.icon className="text-rose-500 mb-4" size={24} />
              <h4 className="text-lg font-bold dark:text-white mb-2">
                {f.title}
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {f.desc}
              </p>
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
          label: "Patient Registry",
          href: "/desktop/modules/reception/patients",
        }}
      />
    </div>
  );
}
