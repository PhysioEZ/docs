import { useNavigate } from "react-router-dom";
import {
  Code,
  Server,
  Smartphone,
  Monitor,
  ChevronRight,
  Zap,
  Book,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";

export function LandingPage() {
  const navigate = useNavigate();
  // Check session storage to see if we've shown the splash screen this session
  const [loading, setLoading] = useState(() => {
    return !sessionStorage.getItem("hasSeenSplash");
  });

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("hasSeenSplash", "true");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  const sections = [
    {
      title: "Desktop Application",
      description: "React & Tauri-powered Native Client for Reception and Admin",
      icon: Monitor,
      path: "/desktop/introduction",
      color: "bg-indigo-500",
      delay: 0.1,
    },
    {
      title: "Backend API",
      description: "Node.js + Express + MySQL Architecture",
      icon: Server,
      path: "/backend/architecture",
      color: "bg-emerald-500",
      delay: 0.2,
    },
    {
      title: "Mobile App",
      description: "React & Rust-powered iOS & Android Client using Capacitor",
      icon: Smartphone,
      path: "/mobile/setup",
      color: "bg-orange-500",
      delay: 0.3,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 selection:bg-indigo-100 selection:text-indigo-900 dark:selection:bg-indigo-900 dark:selection:text-white transition-colors duration-300">
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-900 dark:bg-black"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.8, ease: "easeInOut" },
            }}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "backOut" }}
              className="relative"
            >
              <div className="w-24 h-24 rounded-3xl bg-indigo-500 flex items-center justify-center shadow-2xl shadow-indigo-500/50 relative z-10">
                <Book size={48} className="text-white" strokeWidth={1.5} />
              </div>
              <div className="absolute inset-0 bg-indigo-500 blur-2xl opacity-50 animate-pulse" />
            </motion.div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-8 text-2xl font-black text-white tracking-[0.2em] uppercase"
            >
              PhysioEZ
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-slate-500 text-xs mt-2 uppercase tracking-widest"
            >
              Documentation Hub
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-slate-900 dark:bg-black px-6 pt-24 pb-48 sm:px-12 lg:px-24">
        {/* Background Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 left-0 -translate-x-[20%] -translate-y-[20%] w-[800px] h-[800px] rounded-full bg-indigo-600/20 blur-[120px] pointer-events-none mix-blend-screen"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute bottom-0 right-0 translate-x-[20%] translate-y-[20%] w-[600px] h-[600px] rounded-full bg-purple-600/20 blur-[100px] pointer-events-none mix-blend-screen"
        />

        <div className="relative max-w-7xl mx-auto z-10 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={!loading ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-medium text-xs tracking-wider uppercase mb-8 backdrop-blur-sm"
          >
            <Zap size={14} className="text-indigo-400 fill-indigo-400" />
            <span>PhysioEZ Documentation 2.0</span>
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={!loading ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tight mb-8 leading-[1.1]"
          >
            Build better with <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 animate-gradient bg-[length:200%_auto]">
              PhysioEZ
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={!loading ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light"
          >
            The comprehensive developer resource for the PhysioEZ ecosystem.
            Deep dive into the architecture, APIs, and components that power our
            platform.
          </motion.p>
        </div>
      </div>

      {/* Main Content Area - Cards overlapping Hero */}
      <div className="relative z-20 px-6 sm:px-12 lg:px-24 -mt-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section) => (
            <motion.div
              key={section.title}
              initial={{ y: 50, opacity: 0 }}
              animate={!loading ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.8 + section.delay, duration: 0.6 }}
              onClick={() => navigate(section.path)}
              className="bg-white/95 dark:bg-slate-900/80 backdrop-blur-xl p-8 rounded-[32px] shadow-2xl shadow-indigo-900/10 dark:shadow-black/50 hover:shadow-indigo-900/20 hover:-translate-y-2 transition-all duration-300 cursor-pointer group border border-white dark:border-slate-800 ring-1 ring-black/5 dark:ring-white/5"
            >
              <div
                className={`w-16 h-16 rounded-2xl ${section.color} flex items-center justify-center text-white mb-6 shadow-lg shadow-indigo-500/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
              >
                <section.icon size={32} strokeWidth={1.5} />
              </div>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {section.title}
              </h2>

              <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed font-medium">
                {section.description}
              </p>

              <span className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase group-hover:gap-3 transition-all">
                Access Docs <ChevronRight size={16} strokeWidth={3} />
              </span>
            </motion.div>
          ))}
        </div>

        {/* Quick Links Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={!loading ? { opacity: 1 } : {}}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-24 pb-24"
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300">
              <Code size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Quick Reference
              </h3>
              <p className="text-slate-500 dark:text-slate-400">
                Jump straight into the code
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Environment Setup", href: "/guides/setup" },
              { label: "Database Schema", href: "/guides/database" },
              { label: "API Reference", href: "/guides/api" },
              { label: "Component Library", href: "/guides/components" },
            ].map((link, i) => (
              <motion.a
                key={link.label}
                initial={{ opacity: 0, x: -10 }}
                animate={!loading ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1.6 + i * 0.1 }}
                href={link.href}
                className="px-6 py-4 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-indigo-500/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.1)] hover:text-indigo-600 dark:hover:text-indigo-400 transition-all font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between group"
              >
                {link.label}
                <ChevronRight
                  size={16}
                  className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-indigo-500 dark:text-indigo-400"
                />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
