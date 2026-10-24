import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { Skills } from "@/components/sections/Skills";
import { About } from "@/components/sections/About";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { CardActions } from "@/components/CardActions";
import { LinkedInIcon, WhatsAppIcon } from "@/components/BrandIcons";
import { resumeData } from "@/data/resume";

export default function Home() {
  return (
    <main className="digital-card-page min-h-screen px-3 py-6 text-foreground selection:bg-primary/20 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-xl">
        <p className="mb-4 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">A little introduction. A direct connection.</p>
        <article aria-label="Keval Mangroliya digital business card" className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl shadow-black/10">
          <div className="flex items-center justify-between gap-3 border-b border-border px-5 py-3 sm:px-8"><div className="flex items-center gap-3"><span aria-hidden="true" className="font-mono text-sm font-semibold text-primary">KM.</span><span className="text-[11px] text-muted-foreground">Design. Build. Ship.</span></div><CardActions /></div>
          <div className="relative px-5 pb-6 pt-6 sm:px-8 sm:pb-8 sm:pt-8">
            <div className="grid items-center gap-5 min-[420px]:grid-cols-[0.85fr_1fr] sm:gap-7">
              <div className="relative mx-auto w-full max-w-[220px] min-[420px]:max-w-none">
                <Image src={resumeData.developerImage} alt="Portrait of Keval Mangroliya" width={1024} height={1536} sizes="(max-width: 419px) 220px, 210px" preload className="aspect-[4/5] w-full rounded-2xl border border-border object-cover object-top" />
                <div aria-hidden="true" className="absolute bottom-3 left-3 rounded-full border border-white/20 bg-black/45 px-2.5 py-1 font-mono text-[9px] tracking-wide text-white backdrop-blur-md">Keval / Surat, IN</div>
              </div>
              <div className="min-w-0">
                <p className="mb-3 flex items-center gap-2 text-xs font-medium text-primary"><span className="size-1.5 shrink-0 rounded-full bg-primary" />Independent developer</p>
                <h1 className="text-[1.8rem] font-semibold leading-[1.15] tracking-[-0.04em] sm:text-[2rem]">Keval<br className="hidden min-[420px]:block" /> Mangroliya<span className="text-primary">.</span></h1>
                <p className="mt-3 text-sm font-medium leading-6">Flutter developer<br />Mobile & web</p>
                <p className="mt-3 flex items-center gap-1.5 text-xs leading-5 text-muted-foreground"><MapPin className="size-3.5 shrink-0" />Surat, Gujarat, India</p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">I turn ideas into thoughtful apps and websites. From the first screen to launch, I care about the details that make a product feel right.</p>
            <div className="mt-5 flex flex-wrap gap-2 text-xs"><span className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1.5">6+ years of experience</span><span className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1.5">20+ apps delivered</span></div>
            <nav aria-label="Contact links" className="mt-6 flex items-center justify-center gap-3">
              <a href={`mailto:${resumeData.contact.email}`} aria-label="Email Keval" title="Email" className="contact-orb contact-orb-email"><Mail aria-hidden="true" className="size-5" /></a>
              <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Connect on LinkedIn" title="LinkedIn" className="contact-orb contact-orb-linkedin"><LinkedInIcon aria-hidden="true" className="size-5" /></a>
              <a href={`https://wa.me/${resumeData.contact.mobile.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" aria-label="Message on WhatsApp" title="WhatsApp" className="contact-orb contact-orb-whatsapp"><WhatsAppIcon aria-hidden="true" className="size-5" /></a>
              <a href={`tel:${resumeData.contact.mobile.replace(/\s/g, "")}`} aria-label="Call Keval" title="Call" className="contact-orb contact-orb-phone"><Phone aria-hidden="true" className="size-5" /></a>
            </nav>
          </div>
          <div className="card-content divide-y divide-border border-t border-border">
            <CaseStudies />
            <About />
            <Skills />
          </div>
        </article>
        <footer className="pb-[env(safe-area-inset-bottom)] pt-5 text-center text-xs leading-6 text-muted-foreground">Made with care by Keval.<br />© {new Date().getFullYear()} · Let’s make something useful.</footer>
      </div>
    </main>
  );
}
