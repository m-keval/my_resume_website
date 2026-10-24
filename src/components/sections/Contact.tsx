import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { resumeData } from "@/data/resume";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-5 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="contact-glow relative overflow-hidden rounded-[2rem] border border-primary/15 bg-accent/50 p-5 sm:p-7">
        <SectionHeading label="Let’s collaborate" title="Let’s build something useful." />
        <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">Whether you’re launching a new app or improving an existing product, I’d love to hear what you’re building.</p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href={`mailto:${resumeData.contact.email}`} className={cn(buttonVariants({ size: "lg" }), "h-auto min-h-12 whitespace-normal py-3")}><Mail className="size-4 shrink-0" /><span className="break-all">{resumeData.contact.email}</span><ArrowUpRight className="size-4 shrink-0" /></a>
          <a href={`tel:${resumeData.contact.mobile.replace(/\s/g, "")}`} className={cn(buttonVariants({ variant: "outline", size: "lg" }), "min-h-12")}><Phone className="size-4" />{resumeData.contact.mobile}</a>
        </div>
      </div>
    </section>
  );
}
