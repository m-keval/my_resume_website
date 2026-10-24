"use client";

import { Smartphone, Layers3, Rocket, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { SectionHeading } from "./SectionHeading";

const icons = [Smartphone, Layers3, Rocket];

export function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 80, damping: 15 } },
  };

  return (
    <section id="services" className="flex flex-col justify-center py-14 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="space-y-12"
      >
        <motion.div variants={itemVariants}>
          <SectionHeading index="01" label="What I offer" title="Services" />
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {resumeData.services.map((service, index) => (
            <div
              key={index}
              className="creative-card group min-w-0 rounded-3xl border border-border bg-card p-5 sm:p-8 hover:bg-accent/50 transition-colors"
            >
              <div className="font-mono text-sm text-muted-foreground tabular-nums">
                <span className="flex items-center justify-between"><span className="flex size-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">{(() => { const Icon = icons[index] ?? Smartphone; return <Icon className="size-5" />; })()}</span><ArrowUpRight className="size-5 text-primary/50" /></span>
              </div>
              <h3 className="mt-8 text-xl font-semibold tracking-tight text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}