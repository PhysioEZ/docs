import { motion, type Variants } from "framer-motion";
import {
  Users,
  Calendar,
  UserPlus,
  CreditCard,
  Search,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Zap,
  Clock,
  Workflow,
  Database,
  RefreshCw,
  Layout,
  FileCode,
  GitMerge,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DocNavigation } from "../../../../components/DocNavigation";
import { Bold } from "../../../../components/Typography";

const RECEPTION_PAGES = [
  {
    title: "Dashboard",
    path: "/desktop/modules/reception/dashboard",
    description:
      "Real-time command hub for monitoring clinical census, lab operations, and daily financial performance.",
    icon: Layout,
    color: "blue",
    features: ["Live Metrics", "Activity Stream", "Financial Stats"],
  },
  {
    title: "Schedule",
    path: "/desktop/modules/reception/schedule",
    description:
      "Manage appointments, doctor availability, and the interactive calendar.",
    icon: Calendar,
    color: "indigo",
    features: ["Drag & Drop", "Sync Status", "Doctor Filters"],
  },
  {
    title: "Inquiries",
    path: "/desktop/modules/reception/inquiries",
    description: "Handle walk-ins, phone leads, and initial patient queries.",
    icon: MessageSquare,
    color: "amber",
    features: ["Conversion Tracking", "Quick Entry", "Lead Status"],
  },
  {
    title: "Registration",
    path: "/desktop/modules/reception/registration",
    description: "Digital onboarding for new patients with full profile setup.",
    icon: UserPlus,
    color: "emerald",
    features: ["KYC Integration", "Consent Forms", "ID Scanning"],
  },
  {
    title: "Patients",
    path: "/desktop/modules/reception/patients",
    description:
      "The global patient database with advanced search and history.",
    icon: Users,
    color: "blue",
    features: ["Global Search", "History Log", "EHR Link"],
  },
  {
    title: "Billing",
    path: "/desktop/modules/reception/billing",
    description: "Process invoices, settlement, and daily financial records.",
    icon: CreditCard,
    color: "rose",
    features: ["Insurance Billing", "Payment Gateways", "Discounts"],
  },
];

export function ReceptionIntroduction() {
  const [hasVisited] = useState(() => {
    return sessionStorage.getItem("reception_intro_animated") === "true";
  });

  useEffect(() => {
    if (!hasVisited) {
      sessionStorage.setItem("reception_intro_animated", "true");
    }
  }, [hasVisited]);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const item: Variants = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const heroItem: Variants = {
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      variants={container}
      initial={hasVisited ? "show" : "hidden"}
      animate="show"
      className="w-full max-w-6xl mx-auto space-y-24 pb-24"
    >
      {/* Hero Section */}
      <motion.section
        variants={item}
        className="relative overflow-hidden rounded-[40px] bg-slate-900 px-12 py-20 dark:bg-slate-950 shadow-2xl"
      >
        <div className="relative z-10 max-w-4xl space-y-8">
          <motion.div
            variants={heroItem}
            className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-semibold text-blue-400 border border-blue-500/20"
          >
            <ShieldCheck size={16} />
            Front-line Command Center
          </motion.div>
          <motion.h1
            variants={heroItem}
            className="text-6xl font-black tracking-tight text-white leading-[1.1]"
          >
            Reception Panel{" "}
            <span className="text-blue-500 font-light block mt-4 text-5xl">
              Architectural Overview
            </span>
          </motion.h1>
          <motion.p
            variants={heroItem}
            className="text-xl text-slate-300/90 leading-relaxed max-w-2xl"
          >
            The Reception Panel (
            <code className="text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded">
              src/reception
            </code>
            ) is the heartbeat of administrative operations. Designed as a
            high-availability engine, it synchronizes the entire patient
            lifecycle from initial inquiry to final settlement.
          </motion.p>
        </div>

        {/* Background Decor */}
        <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-blue-600/20 via-blue-600/5 to-transparent pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
        <Users className="absolute -bottom-10 -right-10 w-80 h-80 text-white/5 pointer-events-none" />
      </motion.section>

      {/* Feature Highlighting Grid */}
      <motion.section
        variants={container}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {[
          {
            icon: Zap,
            color: "orange",
            title: "High Efficiency",
            desc: (
              <>
                Optimized for rapid patient intake via the{" "}
                <Bold>Floating Action Hub (FAB)</Bold> and optimized form
                states.
              </>
            ),
          },
          {
            icon: Clock,
            color: "purple",
            title: "Real-time Sync",
            desc: (
              <>
                Utilizes <Bold>Parallel State Hydration</Bold> to keep Census,
                Lab Ops, and Schedule metrics perpetually live.
              </>
            ),
          },
          {
            icon: Search,
            color: "blue",
            title: "Unified Search",
            desc: (
              <>
                Advanced search layer over the global patient database with{" "}
                <Bold>optimistic filtering</Bold> and keyboard triggers.
              </>
            ),
          },
        ].map((feat, i) => {
          const Icon = feat.icon;
          return (
            <motion.div
              key={i}
              variants={item}
              className="group p-8 rounded-[32px] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 hover:border-blue-500/30 hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-500">
                <Icon size={32} />
              </div>
              <h3 className="text-2xl font-bold dark:text-white mb-3">
                {feat.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                {feat.desc}
              </p>
            </motion.div>
          );
        })}
      </motion.section>

      {/* Philosophy Section */}
      <motion.section
        variants={container}
        initial={hasVisited ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-20 pt-8"
      >
        <motion.div variants={item} className="space-y-6">
          <div className="flex items-center gap-3 text-blue-500 font-bold uppercase tracking-widest text-xs">
            <RefreshCw size={14} className="animate-spin-slow" />
            Technical Architecture
          </div>
          <h2 className="text-4xl font-black dark:text-white tracking-tight">
            Data Orchestration
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            The module leverages a sophisticated{" "}
            <code className="text-blue-500 px-2 py-0.5 bg-blue-500/10 rounded font-mono text-sm">
              fetchAll
            </code>{" "}
            mechanism using
            <code className="text-blue-500 px-2 py-0.5 bg-blue-500/10 rounded mx-2 font-mono text-sm">
              Promise.all
            </code>{" "}
            to saturate the local state in a single network round-trip. This
            ensures that the
            <Bold>Census</Bold>, <Bold>Lab Ops</Bold>, and <Bold>Finance</Bold>{" "}
            metrics are in-sync without serial blocking.
          </p>
        </motion.div>

        <motion.div variants={item} className="space-y-6">
          <div className="flex items-center gap-3 text-emerald-500 font-bold uppercase tracking-widest text-xs">
            <Zap size={14} />
            Performance Focus
          </div>
          <h2 className="text-4xl font-black dark:text-white tracking-tight">
            Atomic Interactions
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Operations are atomic. Whether it's a <Bold>Drag & Drop</Bold>{" "}
            reschedule in the calendar or a <Bold>Split Payment</Bold> in
            billing, actions are handled through optimistic UI updates and
            robust error boundaries, ensuring zero downtime in high-traffic
            clinic environments.
          </p>
        </motion.div>
      </motion.section>

      {/* Operational Pipeline */}
      <motion.section
        variants={container}
        initial={hasVisited ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-16"
      >
        <motion.div
          variants={item}
          className="flex items-center gap-3 text-indigo-500 font-bold uppercase tracking-widest text-xs"
        >
          <Workflow size={14} />
          Workflow Pipeline
        </motion.div>

        <div className="relative space-y-20">
          <div className="absolute left-[31px] top-4 bottom-4 w-px bg-slate-200 dark:bg-slate-800" />

          {[
            {
              step: "01",
              title: "Lead Intake (Inquiry)",
              desc: (
                <>
                  Prospects enter the system via <Bold>Quick Inquiries</Bold> or{" "}
                  <Bold>Test Inquiries</Bold>. These are lead-stage objects
                  designed for minimal data footprint, tracking service
                  interests and referral sources before full registration.
                </>
              ),
            },
            {
              step: "02",
              title: "Patient Hybridization (Registration)",
              desc: (
                <>
                  Inquiries are converted into <Bold>Registrations</Bold>. This
                  phase captures full KYC, webcam profile photos, and assigns a
                  unique <Bold>UID</Bold>. Payment for consultation or initial
                  tests is processed here with full audit trails.
                </>
              ),
            },
            {
              step: "03",
              title: "Scheduling & Presence",
              desc: (
                <>
                  The Schedule module manages the time-grid. Using a
                  drag-and-drop interface, receptionists coordinate with doctor
                  availability and patient slots. Status changes (
                  <Bold>
                    Pending {"->"} Attended {"->"} Consulted
                  </Bold>
                  ) drive the clinic's live census.
                </>
              ),
            },
            {
              step: "04",
              title: "Settlement (Billing)",
              desc: (
                <>
                  The final stage in the pipeline. It handles complex billing
                  scenarios: multi-modal split payments,{" "}
                  <Bold>insurance dues</Bold>, and discount approvals. Data
                  flows into the <Bold>Financial Summary</Bold> store for
                  real-time reporting.
                </>
              ),
            },
          ].map((item_data, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="flex gap-12 group relative"
            >
              <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 flex items-center justify-center shrink-0 z-10 group-hover:border-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
                <span className="text-2xl font-black text-slate-300 dark:text-slate-700 group-hover:text-white">
                  {item_data.step}
                </span>
              </div>
              <div className="pt-2">
                <h3 className="text-2xl font-black dark:text-white mb-4 group-hover:text-blue-500 transition-colors">
                  {item_data.title}
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
                  {item_data.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Technical Mapping */}
      <motion.section
        variants={container}
        initial={hasVisited ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="bg-slate-50 dark:bg-white/5 rounded-[48px] p-16 border border-slate-200 dark:border-slate-800 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[100px] pointer-events-none" />
        <div className="relative z-10">
          <motion.div
            variants={item}
            className="flex items-center gap-3 text-emerald-500 font-bold uppercase tracking-widest text-xs mb-4"
          >
            <Layout size={14} />
            Module Mapping
          </motion.div>
          <motion.h2
            variants={item}
            className="text-4xl font-black dark:text-white mb-12"
          >
            Core Technical Assets
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: Database,
                color: "blue",
                title: "DashboardData Context",
                desc: (
                  <>
                    Drives the high-level metrics grid (Census, Lab,
                    Collections) and weekly analytics via{" "}
                    <Bold>optimized hooks</Bold> and global state.
                  </>
                ),
              },
              {
                icon: GitMerge,
                color: "emerald",
                title: "Media Integrations",
                desc: (
                  <>
                    Native webcam orchestration and{" "}
                    <Bold>binary photo encoding</Bold> for patient profile
                    saturation and verification.
                  </>
                ),
              },
              {
                icon: FileCode,
                color: "indigo",
                title: "Slot-Based UI Engine",
                desc: (
                  <>
                    Leverages{" "}
                    <code className="text-blue-500 bg-blue-500/5 px-1 rounded">
                      date-fns
                    </code>{" "}
                    and{" "}
                    <code className="text-blue-500 bg-blue-500/5 px-1 rounded mx-2">
                      dnd-kit
                    </code>{" "}
                    for fluid <Bold>cross-day rescheduling</Bold> logic.
                  </>
                ),
              },
            ].map((asset, i) => {
              const Icon = asset.icon;
              return (
                <motion.div
                  key={i}
                  variants={item}
                  className="p-8 bg-white dark:bg-slate-950 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group"
                >
                  <Icon
                    className="text-blue-500 mb-6 group-hover:scale-110 transition-transform"
                    size={40}
                  />
                  <h4 className="text-xl font-bold dark:text-white mb-3">
                    {asset.title}
                  </h4>
                  <p className="text-slate-500 leading-relaxed">{asset.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Navigation Portal */}
      <motion.section
        variants={container}
        initial={hasVisited ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-16"
      >
        <motion.div
          variants={item}
          className="flex items-end justify-between border-b border-slate-200 dark:border-slate-800 pb-8"
        >
          <div className="space-y-2">
            <h2 className="text-5xl font-black dark:text-white tracking-tight">
              Quick Navigation
            </h2>
            <p className="text-slate-500 text-xl font-medium">
              Explore the detailed documentation for each sub-module.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RECEPTION_PAGES.map((page) => {
            const Icon = page.icon;
            return (
              <motion.div variants={item} key={page.title}>
                <Link
                  to={page.path}
                  className="group relative flex flex-col h-full p-10 rounded-[40px] bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-900 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/5 no-underline hover:no-underline"
                >
                  <div className="w-16 h-16 rounded-[20px] mb-8 flex items-center justify-center transition-all group-hover:scale-110 duration-500 bg-blue-500/10 text-blue-500">
                    <Icon size={32} />
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 flex items-center gap-2 group-hover:text-blue-500 transition-colors">
                    {page.title}
                    <ArrowRight
                      size={24}
                      className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-blue-500"
                    />
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-10 flex-grow text-[17px]">
                    {page.description}
                  </p>

                  <div className="flex flex-wrap gap-2.5">
                    {page.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-[11px] font-black uppercase tracking-[0.1em] px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-400 dark:text-slate-500 group-hover:bg-blue-500/10 group-hover:text-blue-500 transition-all duration-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      <DocNavigation
        next={{
          label: "Dashboard Page",
          href: "/desktop/modules/reception/dashboard",
        }}
      />
    </motion.div>
  );
}
