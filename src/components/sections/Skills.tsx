import Image from "next/image";
import type { CSSProperties } from "react";
import { Braces, Workflow, Rocket, Database, PlugZap, GitBranch, ShieldCheck, Sparkles, Layers3, Blocks, Share2, Waves, Zap, KeyRound, Hexagon, Link2, Fingerprint, Bell, Code2, ScanLine, TestTube2, LayoutGrid, Workflow as Pipeline, type LucideIcon } from "lucide-react";
import { resumeData } from "@/data/resume";
import { SectionHeading } from "./SectionHeading";

const icons = [Braces, Workflow, Rocket, Database, PlugZap, GitBranch, ShieldCheck, Sparkles];

const brandLogos: Record<string, string> = {
  Flutter: "flutter", Dart: "dart", Firebase: "firebase", "Next.js": "nextdotjs", React: "react",
  PostgreSQL: "postgresql", "REST APIs": "postman", GraphQL: "graphql",
  "Play Console": "googleplay", "App Store Connect": "appstore", "Firebase Firestore": "firebase",
  Sqflite: "sqlite", Stripe: "stripe", Razorpay: "razorpay", Git: "git", GitHub: "github",
  Bitbucket: "bitbucket", Codemagic: "codemagic", "GitHub Actions": "githubactions",
  Lottie: "lottiefiles", Rive: "rive",
};
const brandAccents: Record<string, string> = {
  Flutter: "#38bdf8", Dart: "#22d3ee", Firebase: "#fbbf24", "Next.js": "#94a3b8", React: "#22d3ee",
  PostgreSQL: "#60a5fa", "REST APIs": "#fb923c", GraphQL: "#f472b6", Stripe: "#a78bfa",
  Git: "#fb923c", GitHub: "#94a3b8", "Play Console": "#34d399", "App Store Connect": "#60a5fa",
  "Firebase Firestore": "#fbbf24", Sqflite: "#60a5fa", Razorpay: "#818cf8", Bitbucket: "#60a5fa",
  Codemagic: "#f472b6", "GitHub Actions": "#60a5fa", Lottie: "#2dd4bf", Rive: "#fbbf24",
};
const conceptIcons: Record<string, LucideIcon> = {
  "Clean Architecture": Layers3, BLoC: Blocks, Provider: Share2, Riverpod: Waves, GetX: Zap,
  "Build Signing": KeyRound, "CI/CD": Pipeline, Hive: Hexagon, "Branch.io": Link2,
  "Google/Apple Sign-In": Fingerprint, "Push Notifications": Bell, "Dynamic Links": Link2,
  "Unit Testing": TestTube2, "Widget Testing": ScanLine, "Integration Testing": ShieldCheck,
  "Custom Animations": Sparkles, "Responsive UI": LayoutGrid,
};

function ToolIcon({ name }: { name: string }) {
  const logo = brandLogos[name];
  const Icon = conceptIcons[name] ?? Code2;
  return (
    <span className={`toolkit-chip-icon flex size-6 shrink-0 items-center justify-center rounded-full ${logo ? "border border-black/10 bg-white" : "border border-primary/15 bg-primary/10 text-primary"}`}>
      {logo ? <Image src={`/logos/${logo}.svg`} alt="" aria-hidden="true" width={14} height={14} /> : <Icon aria-hidden="true" className="size-3.5" />}
    </span>
  );
}

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-5 py-10 sm:px-6 sm:py-14 lg:px-8">
      <SectionHeading label="How I build" title="My everyday toolkit" />
      <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">A focused set of tools for mobile and web apps, thoughtful interfaces, and reliable data.</p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {resumeData.skills.map((group, index) => {
          const Icon = icons[index];
          return (
            <article key={group.category} className="min-w-0 rounded-2xl border border-border bg-card/60 p-4 sm:p-5">
              <h3 className="mb-4 flex items-center gap-2.5 text-sm font-semibold"><Icon aria-hidden="true" className="size-4 shrink-0 text-primary" />{group.category}</h3>
              <ul aria-label={group.category} className="flex flex-wrap gap-2.5">
                {group.items.map((tool) => (
                  <li key={tool} style={{ "--chip-accent": brandAccents[tool] ?? "var(--primary)" } as CSSProperties} className="toolkit-chip flex min-h-9 min-w-0 max-w-full items-center gap-2 rounded-full border py-1.5 pl-1.5 pr-3.5 text-xs font-medium leading-5 text-foreground/90">
                    <ToolIcon name={tool} /><span className="min-w-0 break-words">{tool}</span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
