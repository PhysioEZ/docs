import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Monitor,
  Server,
  BookOpen,
  Settings,
  Database,
  Code,
  ChevronRight,
  Puzzle,
  FileCode,
  Box,
  Layout,
  Users,
  Terminal,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

type NavItem = {
  title: string;
  path?: string;
  icon?: React.ElementType;
  children?: NavItem[];
  defaultOpen?: boolean;
};

type NavGroup = {
  title: string;
  items: NavItem[];
};

const DESKTOP_NAV: NavGroup[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", path: "/desktop/introduction", icon: BookOpen },
      { title: "Installation", path: "/desktop/installation", icon: Terminal },
      { title: "Architecture", path: "/desktop/architecture", icon: Server },
    ],
  },
  {
    title: "Panels",
    items: [
      {
        title: "Reception",
        icon: Users,
        defaultOpen: true,
        children: [
          {
            title: "Pages",
            icon: Layout,
            defaultOpen: true,
            children: [
              { title: "Introduction", path: "/desktop/modules/reception" },
              {
                title: "Dashboard",
                path: "/desktop/modules/reception/dashboard",
              },
              {
                title: "Schedule",
                path: "/desktop/modules/reception/schedule",
              },
              {
                title: "Inquiries",
                path: "/desktop/modules/reception/inquiries",
              },
              {
                title: "Registration",
                path: "/desktop/modules/reception/registration",
              },
              {
                title: "Patients",
                path: "/desktop/modules/reception/patients",
              },
              { title: "Billing", path: "/desktop/modules/reception/billing" },
            ],
          },
          {
            title: "Components",
            icon: Puzzle,
            children: [
              { title: "Chat System", path: "/desktop/components/chat" },
              { title: "File Viewer", path: "/desktop/components/file-viewer" },
              {
                title: "Billing Drawer",
                path: "/desktop/components/billing-drawer",
              },
            ],
          },
          {
            title: "Modals",
            icon: Box,
            children: [
              {
                title: "Add Test",
                path: "/desktop/components/modals/add-test",
              },
              {
                title: "Attendance",
                path: "/desktop/components/modals/attendance",
              },
              {
                title: "Change Plan",
                path: "/desktop/components/modals/change-plan",
              },
              {
                title: "Edit Plan",
                path: "/desktop/components/modals/edit-plan",
              },
              {
                title: "Pay Dues",
                path: "/desktop/components/modals/pay-dues",
              },
              {
                title: "Status Change",
                path: "/desktop/components/modals/status-change",
              },
              {
                title: "Token Preview",
                path: "/desktop/components/modals/token-preview",
              },
              {
                title: "Patient Details",
                path: "/desktop/components/modals/patient-details",
              },
            ],
          },
          {
            title: "UI Components",
            icon: Box,
            children: [
              {
                title: "Daily Intelligence",
                path: "/desktop/ui/daily-intelligence",
              },
              { title: "Global Search", path: "/desktop/ui/global-search" },
              {
                title: "Keyboard Shortcuts",
                path: "/desktop/ui/keyboard-shortcuts",
              },
              {
                title: "Logout Confirmation",
                path: "/desktop/ui/logout-confirmation",
              },
              { title: "Shared Pickers", path: "/desktop/ui/shared-pickers" },
              { title: "Splash Screen", path: "/desktop/ui/splash-screen" },
              {
                title: "System Status Manager",
                path: "/desktop/ui/system-status-manager",
              },
            ],
          },
        ],
      },
      {
        title: "Admin",
        path: "/desktop/modules/admin",
        icon: Settings,
      },
    ],
  },
  {
    title: "Core / Shared",
    items: [
      { title: "Store (Zustand)", path: "/desktop/core/store", icon: Database },
      { title: "Types", path: "/desktop/core/types", icon: Code },
      { title: "Utils", path: "/desktop/core/utils", icon: FileCode },
      {
        title: "Global Components",
        path: "/desktop/core/components",
        icon: Puzzle,
      },
      { title: "Screens", path: "/desktop/core/screens", icon: Monitor },
    ],
  },
];

function SidebarItem({ item, level = 0 }: { item: NavItem; level?: number }) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(item.defaultOpen || false);
  const hasChildren = item.children && item.children.length > 0;
  const isActive = item.path ? location.pathname === item.path : false;

  // Auto-open parent if children are active
  useEffect(() => {
    if (
      hasChildren &&
      item.children?.some((child) => {
        if (child.path === location.pathname) return true;
        if (child.children?.some((sc) => sc.path === location.pathname))
          return true;
        return false;
      })
    ) {
      setIsOpen(true);
    }
  }, [location.pathname, hasChildren, item.children]);

  const toggleOpen = (e: React.MouseEvent) => {
    if (hasChildren) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="mb-0.5">
      <motion.div
        className={clsx(
          "group relative flex items-center gap-3 px-4 py-2.5 transition-all duration-300 cursor-pointer select-none rounded-xl",
          isActive
            ? "text-blue-600 bg-blue-50/50 dark:bg-blue-500/10 dark:text-blue-400 font-bold"
            : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/50",
          level === 0 ? "text-[16px]" : "text-[15px]",
        )}
        style={{ paddingLeft: `${level * 1.5 + 1}rem` }}
        onClick={toggleOpen}
      >
        {item.path && !hasChildren && (
          <NavLink to={item.path} className="absolute inset-0 z-10" />
        )}

        {item.icon && (
          <motion.div
            initial={false}
            animate={{ scale: isActive ? 1.1 : 1 }}
            className={clsx(
              "shrink-0 transition-colors duration-300",
              isActive
                ? "text-blue-600 dark:text-blue-400"
                : "opacity-40 group-hover:opacity-100",
            )}
          >
            <item.icon size={level === 0 ? 20 : 18} />
          </motion.div>
        )}

        <span className="flex-1 truncate tracking-tight py-0.5">
          {item.title}
        </span>

        {hasChildren && (
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="opacity-20 group-hover:opacity-70"
          >
            <ChevronRight size={16} strokeWidth={2.5} />
          </motion.div>
        )}

        {isActive && (
          <motion.div
            layoutId="active-pill"
            className="absolute left-0 top-2 bottom-2 w-1.5 bg-blue-600 dark:bg-blue-500 rounded-r-full"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
      </motion.div>

      <AnimatePresence initial={false}>
        {hasChildren && isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="mt-1">
              {item.children!.map((child, idx) => (
                <SidebarItem
                  key={child.title + idx}
                  item={child}
                  level={level + 1}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Sidebar() {
  return (
    <aside className="w-80 shrink-0 border-r border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-950/70 h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto backdrop-blur-xl z-20">
      <div className="p-6 space-y-10">
        {DESKTOP_NAV.map((group) => (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            key={group.title}
          >
            <div className="px-5 mb-4 text-[11px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-[0.2em] select-none">
              {group.title}
            </div>
            <div className="space-y-1 px-1">
              {group.items.map((item, idx) => (
                <SidebarItem key={item.title + idx} item={item} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Decorative gradient for fluid look */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-blue-500/5 via-transparent to-indigo-500/5 opacity-50" />
    </aside>
  );
}
