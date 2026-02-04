import { DocNavigation } from "../../../../components/DocNavigation";

export function ReceptionAppointments() {
  return (
    <div className="w-full space-y-12">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-8">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
          Appointment Scheduling
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
          Manage the clinic's calendar, schedule treatments, and handle
          cancellations using the drag-and-drop scheduler.
        </p>
      </div>

      <div className="p-8 border border-dashed border-slate-300 dark:border-slate-700 rounded-2xl bg-slate-50 dark:bg-slate-900/50 text-center text-slate-500">
        Detailed documentation for Scheduling (Drag & Drop, Resource Views) will
        be populated here.
      </div>

      <DocNavigation
        prev={{
          label: "Registration",
          href: "/desktop/modules/reception/registration",
        }}
        next={{
          label: "Billing & Invoices",
          href: "/desktop/modules/reception/billing",
        }}
      />
    </div>
  );
}
