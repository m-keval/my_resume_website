"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { resumeData } from "@/data/resume";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
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
    <section id="contact" className="flex flex-col justify-center py-14 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="space-y-12"
      >
        <motion.div variants={itemVariants}>
          <SectionHeading index="07" label="Let's talk" title="Get In Touch" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border border border-border rounded-xl overflow-hidden">
          <div className="bg-background p-8">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              Have a project in mind?
            </h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Tell me about your idea or the product you&apos;re building. I&apos;ll get back to you
              directly — no gatekeepers, no automatic commitments.
            </p>

            <div className="mt-8 border-t border-border">
              {[
                { label: "Email", value: resumeData.contact.email, href: `mailto:${resumeData.contact.email}` },
                { label: "Phone", value: resumeData.contact.mobile, href: `tel:${resumeData.contact.mobile}` },
                { label: "LinkedIn", value: "in/kevalmangroliya", href: resumeData.contact.linkedin },
                { label: "Location", value: resumeData.location },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href?.startsWith("http") ? "_blank" : undefined}
                  rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`flex items-center justify-between gap-4 border-b border-border py-4 last:border-b-0 ${
                    item.href ? "" : "cursor-default"
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                      {item.label}
                    </div>
                    <div className="text-sm text-foreground/90 break-all">{item.value}</div>
                  </div>
                  {item.href && (
                    <ArrowRight className="w-4 h-4 text-muted-foreground shrink-0" />
                  )}
                </a>
              ))}
            </div>
          </div>

          <div className="bg-background p-8">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    Name
                  </label>
                  <input
                    id="name"
                    placeholder="John Doe"
                    className="w-full border border-input bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40 transition-colors rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full border border-input bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 transition-colors rounded-lg"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Subject
                </label>
                <input
                  id="subject"
                  placeholder="Project inquiry"
                  className="w-full border border-input bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 transition-colors rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full min-h-[120px] border border-input bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 transition-colors resize-none rounded-lg"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <Button type="submit" size="lg" className="w-full">
                Send Message
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}