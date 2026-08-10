import { Navbar } from "@/components/Navbar";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { resumeData } from "@/data/resume";

export default function Home() {
  return (
    <main className="relative bg-background text-foreground selection:bg-primary/30 min-h-screen pb-20 md:pb-0">
      <Navbar />
      <MobileBottomNav />
      <Hero />
      <Services />
      <Skills />
      <Experience />
      <Projects />
      <Education />

      <footer className="border-t border-border py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <div className="text-foreground font-semibold tracking-tight">
            {resumeData.name}
          </div>
          <p className="text-muted-foreground text-center sm:text-right">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
