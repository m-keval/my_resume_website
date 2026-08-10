"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { SectionHeading } from "./SectionHeading";

export function Education() {
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
    <section id="education" className="flex flex-col justify-center py-14 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-14"
      >
        <div className="space-y-8">
          <motion.div variants={itemVariants}>
            <SectionHeading index="05" label="Background" title="Education" />
          </motion.div>
          <div>
            {resumeData.education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="border-t border-border py-6 first:border-t-0 first:pt-0"
              >
                <h3 className="text-xl font-semibold tracking-tight text-foreground">{edu.degree}</h3>
                <div className="text-muted-foreground mt-1.5">{edu.institution}</div>
                <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mt-2">
                  {edu.period}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <motion.div variants={itemVariants}>
            <SectionHeading index="06" label="Beyond code" title="Interests" />
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-wrap gap-2.5">
            {resumeData.interests.map((interest, index) => (
              <span
                key={index}
                className="border border-border bg-background px-4 py-2 text-sm text-foreground/80 rounded-full"
              >
                {interest}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}