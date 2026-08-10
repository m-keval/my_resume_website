"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { resumeData } from "@/data/resume";
import { MicroLabel } from "./SectionHeading";
import { LinkedInIcon, WhatsAppIcon } from "@/components/BrandIcons";

export function Hero() {
  return (
    <section id="hero" className="relative w-full border-b border-border overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      <div className="relative min-h-[85vh] flex flex-col justify-end pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-12 lg:items-end">
          <div className="space-y-6 sm:space-y-8">

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex justify-center lg:hidden"
          >
            <img
              src={resumeData.developerImage}
              alt="Developer"
              className="h-52 w-52 sm:h-72 sm:w-72 object-contain object-bottom"
              style={{
                WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 60%, rgba(0,0,0,0.9) 75%, rgba(0,0,0,0.65) 85%, rgba(0,0,0,0.3) 93%, transparent 100%)",
                maskImage: "linear-gradient(to bottom, black 0%, black 60%, rgba(0,0,0,0.9) 75%, rgba(0,0,0,0.65) 85%, rgba(0,0,0,0.3) 93%, transparent 100%)",
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3 text-center sm:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight leading-[0.95] text-foreground max-w-4xl">
              {resumeData.name}
            </h1>
            <MicroLabel>
              {resumeData.title}, {resumeData.location}
            </MicroLabel>
            <p className="text-base text-muted-foreground max-w-2xl leading-relaxed mx-auto sm:mx-0">
              I&apos;m a {resumeData.title} with 6+ years shipping high-quality,
              scalable mobile products for global clients.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row sm:flex-wrap gap-3"
          >

            <a
              href={`tel:${resumeData.contact.mobile}`}
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "gap-2 w-full sm:w-auto justify-center")}
            >
              <Phone className="w-4 h-4" />
              {resumeData.contact.mobile}
            </a>
            <a
              href={`https://wa.me/${resumeData.contact.mobile.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "gap-2 w-full sm:w-auto justify-center")}
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp
            </a>
            <a
              href={resumeData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "gap-2 w-full sm:w-auto justify-center")}
            >
              <LinkedInIcon className="w-4 h-4" />
              LinkedIn
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="hidden lg:flex justify-center mt-8 lg:mt-0"
        >
          <img
            src={resumeData.developerImage}
            alt="Developer"
            className="h-[460px] max-w-full object-contain object-bottom"
            style={{
              WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 60%, rgba(0,0,0,0.9) 75%, rgba(0,0,0,0.65) 85%, rgba(0,0,0,0.3) 93%, transparent 100%)",
              maskImage: "linear-gradient(to bottom, black 0%, black 60%, rgba(0,0,0,0.9) 75%, rgba(0,0,0,0.65) 85%, rgba(0,0,0,0.3) 93%, transparent 100%)",
            }}
          />
        </motion.div>
      </div>
      </div>
    </section>
  );
}