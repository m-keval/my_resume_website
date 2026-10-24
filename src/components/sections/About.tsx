import { ArrowUpRight } from "lucide-react";
import { resumeData } from "@/data/resume";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="mx-auto grid max-w-5xl gap-6 px-5 py-10 sm:px-6 sm:py-14 md:grid-cols-[0.7fr_1.3fr] md:gap-12 lg:px-8">
      <SectionHeading label="A little about me" title="A person behind the pixels." />
      <div className="space-y-4 text-base leading-7 text-muted-foreground">
        <p>I’m Keval, an independent developer who enjoys making useful things feel simple. I work with founders and teams to bring mobile products to life, handling everything from interface development to launch.</p>
        <p>My work combines Flutter, thoughtful UI, and maintainable code. Beyond development, I’m interested in mobile app design, Figma, and visual design.</p>
        <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary">More about my journey on LinkedIn <ArrowUpRight className="size-4" /></a>
      </div>
    </section>
  );
}
