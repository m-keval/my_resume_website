"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { SectionHeading } from "./SectionHeading";
import { 
  Layers, Blocks, Share2, Waves, Zap, Key, Hexagon, 
  CreditCard, Link, Fingerprint, Bell, Code2, Film, 
  Sparkles, Layout, Terminal
} from "lucide-react";

export function Skills() {
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
    <section id="skills" className="flex flex-col justify-center py-14 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="space-y-12"
      >
        <motion.div variants={itemVariants}>
          <SectionHeading index="02" label="Capabilities" title="Core Skills" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {resumeData.skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group rounded-xl border border-border bg-background p-6 hover:bg-accent hover:border-foreground/20 transition-all duration-300"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-base font-semibold tracking-tight text-foreground">
                  {skillGroup.category}
                </h3>
                <span className="font-mono text-xs text-muted-foreground tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIdx) => {
                  const skillIconMap: Record<string, string> = {
                    "Flutter": "flutter",
                    "Dart": "dart",
                    "Firebase": "firebase",
                    "GraphQL": "graphql",
                    "Firebase Firestore": "firebase",
                    "Sqflite": "sqlite",
                    "Git": "git",
                    "GitHub": "github",
                    "Bitbucket": "bitbucket",
                    "GitHub Actions": "githubactions",
                    "Figma": "figma",
                    "Photoshop": "photoshop",
                    "Illustrator": "illustrator",
                    "Play Console": "android",
                    "App Store Connect": "apple",
                    "REST APIs": "postman",
                    "CI/CD": "docker", 
                  };
                  
                  const iconName = skillIconMap[skill];
                  
                  const getLucideIcon = (skillName: string) => {
                    const iconClass = "w-4 h-4 text-foreground/70";
                    switch (skillName) {
                      case "Clean Architecture": return <Layers className={iconClass} />;
                      case "BLoC": return <Blocks className={iconClass} />;
                      case "Provider": return <Share2 className={iconClass} />;
                      case "Riverpod": return <Waves className={iconClass} />;
                      case "GetX": return <Zap className={iconClass} />;
                      case "Build Signing": return <Key className={iconClass} />;
                      case "Hive": return <Hexagon className={iconClass} />;
                      case "Stripe": 
                      case "Razorpay": return <CreditCard className={iconClass} />;
                      case "Branch.io": return <Link className={iconClass} />;
                      case "Google/Apple Sign-In": return <Fingerprint className={iconClass} />;
                      case "Push Notifications": return <Bell className={iconClass} />;
                      case "Dynamic Links": return <Link className={iconClass} />;
                      case "Unit Testing": 
                      case "Widget Testing": 
                      case "Integration Testing": return <Code2 className={iconClass} />;
                      case "Lottie": 
                      case "Rive": return <Film className={iconClass} />;
                      case "Custom Animations": return <Sparkles className={iconClass} />;
                      case "Responsive UI": return <Layout className={iconClass} />;
                      default: return <Terminal className={iconClass} />;
                    }
                  };
                  
                  return (
                    <span
                      key={skillIdx}
                      className="flex items-center gap-2 rounded-full border border-border bg-background py-1.5 pl-2 pr-3.5 text-sm text-foreground/80 group-hover:border-foreground/20 transition-colors"
                    >
                      {iconName ? (
                        <img
                          src={`https://skillicons.dev/icons?i=${iconName}`}
                          alt={`${skill} logo`}
                          className="w-4 h-4 rounded-sm"
                        />
                      ) : (
                        getLucideIcon(skill)
                      )}
                      <span>{skill}</span>
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}