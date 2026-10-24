"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 80, damping: 15 } },
  };

  return (
    <section id="projects" className="flex flex-col justify-center py-14 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="space-y-12"
      >
        <motion.div variants={itemVariants}>
          <SectionHeading index="04" label="Selected work" title="Key Projects" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
          {resumeData.projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="creative-card group min-w-0 rounded-3xl border border-border bg-card p-5 sm:p-8 hover:bg-accent/50 transition-colors"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-sm text-muted-foreground tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-semibold tracking-tight text-foreground">
                  {project.title}
                </h3>
              </div>
              <p className="mt-3 text-muted-foreground leading-relaxed">{project.description}</p>
              <ul className="mt-5 space-y-2">
                {project.points.map((point, ptIdx) => (
                  <li key={ptIdx} className="flex items-baseline gap-3 text-sm text-muted-foreground leading-relaxed">
                    <span className="w-1.5 h-px shrink-0 bg-border translate-y-[-4px]" />
                    <span className="text-foreground/80">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}