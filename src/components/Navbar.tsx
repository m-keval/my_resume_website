"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLenis } from "lenis/react";

const subscribeToHydration = () => () => {};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const mounted = useSyncExternalStore(subscribeToHydration, () => true, () => false);
  const { resolvedTheme, setTheme } = useTheme();
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useLenis((instance) => {
    setScrolled(instance.scroll > 50);
  });

  const scrollTo = (id: string) => {
    if (lenis) {
      lenis.scrollTo(`#${id}`, { offset: -88, duration: 1.2 });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border/50 py-3" : "bg-background/85 backdrop-blur-md py-5"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <button onClick={scrollToTop} aria-label="Back to home" className="flex min-h-11 min-w-11 items-center font-mono font-bold text-xl tracking-tighter">
          KM<span className="text-primary">.</span>
        </button>
        <nav aria-label="Main navigation" className="hidden md:flex gap-4 items-center rounded-full border border-border bg-card/70 px-5 py-3">
          {[{ id: "case-studies", label: "Work" }, { id: "about", label: "About" }, { id: "skills", label: "Toolkit" }].map((item) => <button key={item.id} onClick={() => scrollTo(item.id)} className="min-h-8 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">{item.label}</button>)}
        </nav>
        
        <div className="flex items-center gap-2">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="rounded-full min-h-11 min-w-11"
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              ) : (
                <Moon className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              )}
            </Button>
          )}
          <Button variant="default" size="sm" onClick={() => scrollTo("contact")} className="min-h-11">
            Let’s talk
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
