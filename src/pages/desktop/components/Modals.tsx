import { DocNavigation } from "../../../components/DocNavigation";

export function ComponentModals() {
  return (
    <div className="w-full space-y-12">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-8">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
          Patient Modals
          <span className="block text-lg font-mono font-normal text-slate-500 mt-2">
            src/components/patients/modals/*.tsx
          </span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
          A collection of specific modals for patient interactions, including
          `PatientDetailsModal`, `AddTestModal`, and `PayDuesModal`.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-lg">
          <div className="font-mono font-bold">PatientDetailsModal.tsx</div>
          <div className="text-sm text-slate-500">
            Full profile view and history.
          </div>
        </div>
        <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-lg">
          <div className="font-mono font-bold">AddTestModal.tsx</div>
          <div className="text-sm text-slate-500">Prescribe new lab tests.</div>
        </div>
        <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-lg">
          <div className="font-mono font-bold">PayDuesModal.tsx</div>
          <div className="text-sm text-slate-500">
            Settle outstanding balances.
          </div>
        </div>
      </div>

      <DocNavigation
        next={{ label: "Chat System", href: "/desktop/components/chat" }}
      />
    </div>
  );
}
