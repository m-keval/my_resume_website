"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 80, damping: 15 } },
  };

  return (
    <section id="experience" className="flex flex-col justify-center py-14 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="space-y-12"
      >
        <motion.div variants={itemVariants}>
          <SectionHeading index="03" label="Career" title="Professional Experience" />
        </motion.div>

        <div>
          {resumeData.experience.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="border-t border-border py-8 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-3 md:gap-10"
            >
              <div className="md:pt-1">
                <div className="text-sm text-muted-foreground">{exp.period}</div>
                <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mt-1">
                  {exp.location}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-foreground">{exp.role}</h3>
                <div className="text-muted-foreground font-medium mt-1">{exp.company}</div>
                <ul className="mt-5 space-y-2.5">
                  {exp.responsibilities.map((task, taskIdx) => (
                    <li
                      key={taskIdx}
                      className="flex items-baseline gap-3 text-muted-foreground leading-relaxed"
                    >
                      <span className="w-1.5 h-px shrink-0 bg-border translate-y-[-4px]" />
                      <span className="text-foreground/80">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}