"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border/50 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="font-bold text-xl tracking-tighter">
          KM<span className="text-primary">.</span>
        </div>
        <nav className="hidden md:flex gap-6 items-center">
          <button onClick={() => scrollTo("services")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Services
          </button>
          <button onClick={() => scrollTo("skills")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Skills
          </button>
          <button onClick={() => scrollTo("experience")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Experience
          </button>
          <button onClick={() => scrollTo("projects")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Projects
          </button>
          <button onClick={() => scrollTo("education")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Education
          </button>
        </nav>
        
        <div className="flex items-center gap-2">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              ) : (
                <Moon className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              )}
            </Button>
          )}
          <Button variant="default" size="sm" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hidden sm:inline-flex">
            Home
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
