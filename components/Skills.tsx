"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skillCategories } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

// Category icon components
function CodeIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  );
}

function LayoutIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z" />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>
  );
}

function ToolIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  );
}

function CompassIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 8.25l-3.778 3.778a.75.75 0 01-.444.222l-3.778.528.528-3.778a.75.75 0 01.222-.444L12.278 4.778" />
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  );
}

const iconMap: Record<string, React.FC> = {
  code: CodeIcon,
  layout: LayoutIcon,
  database: DatabaseIcon,
  tool: ToolIcon,
  users: UsersIcon,
  compass: CompassIcon,
  clipboard: ClipboardIcon,
};

// Emotional color map per skill card
const skillColors: Record<string, { iconBg: string; iconHover: string; glow: string; border: string; badgeHover: string }> = {
  sage: {
    iconBg: "from-sage/[0.08] to-sage/[0.14]",
    iconHover: "group-hover:from-sage/[0.12] group-hover:to-sage/[0.20]",
    glow: "bg-sage/[0.04]",
    border: "hover:border-sage/20",
    badgeHover: "hover:bg-sage/[0.08] hover:text-sage-dark hover:border-sage/20",
  },
  sky: {
    iconBg: "from-sky/[0.08] to-sky/[0.14]",
    iconHover: "group-hover:from-sky/[0.12] group-hover:to-sky/[0.20]",
    glow: "bg-sky/[0.04]",
    border: "hover:border-sky/20",
    badgeHover: "hover:bg-sky/[0.08] hover:text-text-primary hover:border-sky/20",
  },
  lavender: {
    iconBg: "from-lavender/[0.08] to-lavender/[0.14]",
    iconHover: "group-hover:from-lavender/[0.12] group-hover:to-lavender/[0.20]",
    glow: "bg-lavender/[0.04]",
    border: "hover:border-lavender/20",
    badgeHover: "hover:bg-lavender/[0.08] hover:text-text-primary hover:border-lavender/20",
  },
  gold: {
    iconBg: "from-gold-soft/[0.10] to-gold-light/[0.16]",
    iconHover: "group-hover:from-gold-soft/[0.14] group-hover:to-gold-light/[0.22]",
    glow: "bg-gold-soft/[0.04]",
    border: "hover:border-gold-soft/20",
    badgeHover: "hover:bg-gold-soft/[0.08] hover:text-brown hover:border-gold-soft/20",
  },
  peach: {
    iconBg: "from-peach/[0.08] to-peach/[0.14]",
    iconHover: "group-hover:from-peach/[0.12] group-hover:to-peach/[0.20]",
    glow: "bg-peach/[0.04]",
    border: "hover:border-peach/20",
    badgeHover: "hover:bg-peach/[0.08] hover:text-brown hover:border-peach/20",
  },
  rose: {
    iconBg: "from-rose/[0.08] to-rose/[0.14]",
    iconHover: "group-hover:from-rose/[0.12] group-hover:to-rose/[0.20]",
    glow: "bg-rose/[0.04]",
    border: "hover:border-rose/20",
    badgeHover: "hover:bg-rose/[0.08] hover:text-text-primary hover:border-rose/20",
  },
};

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Section header
      gsap.fromTo(
        ".skills-header",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Cards stagger in like branches growing
      const cards = sectionRef.current!.querySelectorAll(".skill-card");
      gsap.fromTo(
        cards,
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cards[0],
            start: "top 85%",
          },
        }
      );

      // Skill badges animate individually within each card
      const badges = sectionRef.current!.querySelectorAll(".skill-badge");
      gsap.fromTo(
        badges,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          stagger: 0.03,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: cards[0],
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="section-padding relative bg-surface-warm overflow-hidden"
    >
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sage/20 to-transparent" />

      {/* Background decorations — emotional colors */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="breathing-circle absolute top-[15%] left-[5%] w-[200px] h-[200px] rounded-full bg-sky/[0.03] blur-3xl" />
        <div className="breathing-circle-slow absolute bottom-[10%] right-[8%] w-[180px] h-[180px] rounded-full bg-lavender/[0.03] blur-3xl" />
        <div className="breathing-circle absolute top-[50%] right-[30%] w-[150px] h-[150px] rounded-full bg-peach/[0.03] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="skills-header inline-block text-sm font-medium tracking-widest uppercase text-sage-dark mb-3">
            The Branches
          </span>
          <h2 className="skills-header font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Skills &amp; Interests
          </h2>
          <p className="skills-header text-text-secondary max-w-xl mx-auto">
            Technical abilities, human qualities, and planning skills that shape my work.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const IconComponent = iconMap[category.icon] || CodeIcon;
            const colors = skillColors[category.color] || skillColors.sage;
            return (
              <div
                key={category.title}
                className={`skill-card group relative p-7 rounded-2xl bg-surface border border-border/50 shadow-[0_2px_24px_rgba(0,0,0,0.03)] card-lift gradient-border-hover ${colors.border}`}
              >
                {/* Soft colorful glow behind card */}
                <div className={`absolute -inset-1 rounded-2xl ${colors.glow} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />

                {/* Card Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${colors.iconBg} flex items-center justify-center text-sage-dark transition-all duration-300 group-hover:scale-110 ${colors.iconHover}`}>
                    <IconComponent />
                  </div>
                  <h3 className="text-base font-semibold text-text-primary group-hover:text-sage-dark transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Tags — with emotional hover color */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`skill-badge px-3 py-1.5 text-xs font-medium rounded-full bg-cream text-text-secondary border border-border/40 transition-all duration-300 ${colors.badgeHover} hover:scale-105 cursor-default`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
