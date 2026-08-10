"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Home,
  Briefcase,
  Code2,
  FolderOpen,
  GraduationCap,
} from "lucide-react";

const navItems = [
  { id: "hero", icon: Home, label: "Home" },
  { id: "services", icon: Briefcase, label: "Services" },
  { id: "skills", icon: Code2, label: "Skills" },
  { id: "experience", icon: FolderOpen, label: "Work" },
  { id: "projects", icon: GraduationCap, label: "Projects" },
];

export function MobileBottomNav() {
  const [active, setActive] = useState("hero");

  const getSectionOffsets = useCallback(() => {
    return navItems
      .map((item) => {
        const el = document.getElementById(item.id);
        if (!el) return null;
        const rect = el.getBoundingClientRect();
        return { id: item.id, top: rect.top + window.scrollY, height: rect.height };
      })
      .filter(Boolean) as { id: string; top: number; height: number }[];
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const triggerPoint = scrollY + viewportHeight * 0.35;

      const offsets = getSectionOffsets();
      let currentSection = "hero";

      for (let i = offsets.length - 1; i >= 0; i--) {
        const section = offsets[i];
        if (triggerPoint >= section.top) {
          currentSection = section.id;
          break;
        }
      }

      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [getSectionOffsets]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 16;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6, type: "spring", stiffness: 100, damping: 15 }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background border-t border-border safe-area-bottom"
    >
      <div className="flex items-center px-1.5 py-1.5">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="relative flex-1 min-w-0 flex flex-col items-center justify-center gap-1 py-1.5 group"
            >
              {isActive && (
                <motion.div
                  layoutId="activeNavBg"
                  className="absolute inset-x-1 inset-y-0 bg-primary/10 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <div className="relative z-10 flex flex-col items-center gap-1">
                <motion.div
                  animate={isActive ? { scale: 1.15, y: -1 } : { scale: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 22 }}
                >
                  <Icon
                    className={`w-5 h-5 transition-colors duration-200 ${
                      isActive ? "text-primary" : "text-muted-foreground group-active:text-foreground"
                    }`}
                    strokeWidth={isActive ? 2.2 : 1.8}
                  />
                </motion.div>
                <motion.span
                  animate={isActive ? { opacity: 1 } : { opacity: 0.65 }}
                  transition={{ duration: 0.2 }}
                  className={`relative z-10 text-[10px] font-semibold leading-none transition-colors duration-200 ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </motion.span>
              </div>
            </button>
          );
        })}
      </div>
    </motion.nav>
  );
}
