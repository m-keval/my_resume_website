"use client";

import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Mail, MapPin } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { resumeData } from "@/data/resume";
import { LinkedInIcon, WhatsAppIcon } from "@/components/BrandIcons";

export function Hero() {
  return (
    <section id="hero" className="hero-tech relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 hero-grid" />
      <div className="relative mx-auto max-w-5xl px-5 pb-9 pt-28 sm:px-6 sm:pb-12 sm:pt-32 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-[1.5fr_0.8fr] md:gap-12">
          <div className="min-w-0">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-primary sm:text-xs"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Independent Flutter Developer</p>
            <p className="mb-3 font-mono text-xs text-muted-foreground">Hello, I’m Keval Mangroliya</p>
            <h1 className="text-[clamp(2.5rem,5.5vw,4rem)] font-semibold leading-[1.1] tracking-[-0.045em]">I build apps that<br /><span className="gradient-text">feel right.</span></h1>
            <p className="mt-4 max-w-lg text-base leading-7 text-muted-foreground">I’m a Flutter developer in Surat, India. I help people turn ideas into thoughtful mobile apps — from the first sketch to the app store.</p>
            <div className="mt-7 grid grid-cols-1 gap-3 min-[380px]:grid-cols-2 sm:flex sm:flex-wrap">
              <a href="#case-studies" className={cn(buttonVariants({ size: "lg" }), "min-h-12 gap-2 rounded-full")}>View selected work <ArrowDownRight className="size-4" /></a>
              <a href={`mailto:${resumeData.contact.email}`} className={cn(buttonVariants({ variant: "outline", size: "lg" }), "min-h-12 gap-2 rounded-full bg-background")}>Let’s talk <Mail className="size-4" /></a>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5"><MapPin className="size-3.5" /> Surat, India</span>
              <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex min-h-8 items-center gap-1.5 hover:text-primary"><LinkedInIcon className="size-3.5" /> LinkedIn <ArrowUpRight className="size-3" /></a>
              <a href={`https://wa.me/${resumeData.contact.mobile.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" className="flex min-h-8 items-center gap-1.5 hover:text-primary"><WhatsAppIcon className="size-3.5" /> WhatsApp <ArrowUpRight className="size-3" /></a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[260px] md:max-w-[280px]">
            <div className="absolute -inset-3 rounded-[2rem] border border-primary/15 rotate-3" aria-hidden="true" />
            <Image src={resumeData.developerImage} alt={`${resumeData.name}, ${resumeData.title}`} width={1024} height={1536} sizes="(max-width: 767px) 260px, 280px" preload className="relative aspect-[4/5] w-full rounded-3xl border border-border object-cover object-top" />
            <p className="relative mt-3 text-center text-xs text-muted-foreground">Keval Mangroliya · Flutter developer</p>
          </div>
        </div>
        <p className="mt-8 border-t border-border pt-5 text-sm text-muted-foreground">6+ years building mobile products <span className="mx-2 text-primary">·</span> 20+ apps delivered <span className="mx-2 text-primary">·</span> Android & iOS</p>
      </div>
    </section>
  );
}
