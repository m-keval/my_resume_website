import Image from "next/image";
import type { CSSProperties } from "react";
import { Check, UsersRound, Images, Sparkles, Layers3 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const caseStudies = [
  {
    title: "Connecting a business community",
    accent: "#8bd8c0", Icon: UsersRound,
    highlights: ["Business discovery", "Event registration", "Real-time updates"],
    image: "/case-studies/community.svg",
    category: "Community & networking",
    stack: ["Flutter", "Firebase Auth", "Cloud Messaging"],
    challenge: "Bring business discovery, community events, and member updates into one mobile experience.",
    approach: "Built an industry-based business directory alongside event registration and attendance tracking. Firebase Authentication handles member sign-in, while Cloud Messaging delivers event updates.",
    delivery: "A business networking platform with real-time event sync and a responsive interface designed for large directories.",
    decisions: ["Categorized directory listings by industry and business type.", "Connected registration and attendance through real-time sync.", "Optimized the interface for large datasets and different screen sizes."],
  },
  {
    title: "A simpler photo selection workflow",
    accent: "#c5b5ee", Icon: Images,
    highlights: ["Client galleries", "Photo selection", "Offline caching"],
    image: "/case-studies/gallery.svg",
    category: "Photography & client experience",
    stack: ["Flutter", "Offline caching", "Lazy loading"],
    challenge: "Give studios a structured way to share event galleries and let clients review and select their photos.",
    approach: "Created studio logins, event-specific galleries, and client access. Added selection, rejection, and favourites so clients can communicate their choices directly in the app.",
    delivery: "A photo management app published on Google Play, with ongoing feature updates and interface improvements.",
    decisions: ["Organized galleries around individual events and client access.", "Made photo selection, rejection, and favourites part of the review flow.", "Used offline caching and lazy loading to support gallery browsing."],
  },
  {
    title: "From AI conversation to useful content",
    accent: "#9fc9f3", Icon: Sparkles,
    highlights: ["AI chat & writing", "Audio generation", "Subscriptions"],
    image: "/case-studies/assistant.svg",
    category: "AI & productivity",
    stack: ["Flutter", "OpenAI API", "Stripe"],
    challenge: "Combine AI chat, document writing, and audio generation in a focused mobile productivity app.",
    approach: "Integrated the ChatGPT API for content generation, Google and Apple sign-in for onboarding, and Stripe for subscription payments.",
    delivery: "An AI assistance app bringing chat, writing, and audio tools together with account access and subscription-based usage.",
    decisions: ["Grouped chat, document writing, and audio generation in one product.", "Supported Google and Apple sign-in for account onboarding.", "Integrated subscription payments using Stripe."],
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="mx-auto max-w-5xl px-5 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div>
        <SectionHeading label="Selected work" title="Ideas brought to life." />
        <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">A closer look at what I’ve built, the problems behind it, and the decisions that shaped it.</p>
      </div>
      <div className="mt-7 space-y-7">
        {caseStudies.map((study, index) => {
          const Icon = study.Icon;
          return (
            <article key={study.title} style={{ "--case-accent": study.accent } as CSSProperties} className="case-story overflow-hidden rounded-3xl border border-border bg-card">
              <figure className="relative overflow-hidden bg-[#141c28]">
                {/* Replace this local concept SVG with final project photography when ready. */}
                <Image src={study.image} alt={`Concept placeholder for ${study.category.toLowerCase()}, not an actual app screenshot`} width={800} height={480} sizes="(max-width: 600px) 90vw, 500px" className="case-story-image aspect-[5/3] w-full object-cover" />
                <div aria-hidden="true" className="absolute inset-x-4 top-4 flex items-center justify-between"><span className="rounded-full border border-white/15 bg-black/35 px-3 py-1.5 font-mono text-[10px] tracking-widest text-white/85 backdrop-blur-md">PROJECT / 0{index + 1}</span><span className="flex size-9 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white/85 backdrop-blur-md"><Icon className="size-4" /></span></div>
                <figcaption className="border-t border-white/10 px-4 py-2 text-[11px] text-white/60">Concept artwork · Final project visuals coming soon</figcaption>
              </figure>
              <div className="p-5 sm:p-6">
                <p className="case-story-category text-xs font-medium">{study.category}</p>
                <h3 className="mt-2 text-[1.4rem] font-semibold leading-snug tracking-[-0.035em] sm:text-2xl">{study.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{study.delivery}</p>
                <ul aria-label="Key features" className="mt-4 flex flex-wrap gap-2">{study.highlights.map((feature) => <li key={feature} className="case-feature inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] leading-5"><Check aria-hidden="true" className="size-3 shrink-0" />{feature}</li>)}</ul>
                <div className="mt-6 space-y-5 border-t border-border pt-5">
                  {[["01", "The challenge", study.challenge], ["02", "My approach", study.approach]].map(([number, label, text]) => <div key={label} className="grid grid-cols-[24px_minmax(0,1fr)] gap-3"><span aria-hidden="true" className="case-story-category pt-0.5 font-mono text-[10px]">{number}</span><div><h4 className="text-xs font-semibold">{label}</h4><p className="mt-1.5 text-sm leading-7 text-muted-foreground">{text}</p></div></div>)}
                </div>
                <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-border pt-4"><span className="mr-1 inline-flex items-center gap-1.5 text-[11px] text-muted-foreground"><Layers3 aria-hidden="true" className="size-3.5" />Built with</span>{study.stack.map((item) => <span key={item} className="rounded-md border border-border bg-muted/40 px-2 py-1 text-[11px] text-foreground/80">{item}</span>)}</div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
