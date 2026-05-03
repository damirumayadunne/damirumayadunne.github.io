"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { mindsetSteps } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

// Icon components for each thinking step
function EyeIcon() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-1.341 4.024A2.25 2.25 0 0115.5 20.25H8.5a2.25 2.25 0 01-2.159-1.726L5 14.5m14 0H5" />
    </svg>
  );
}

function HammerIcon() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
    </svg>
  );
}

function RefreshIcon() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182M21.015 4.356v4.992" />
    </svg>
  );
}

const iconMap: Record<string, React.FC> = {
  eye: EyeIcon,
  brain: BrainIcon,
  hammer: HammerIcon,
  refresh: RefreshIcon,
};

// Emotional color map for each step
const stepColors: Record<string, { iconBg: string; iconHover: string; glow: string; border: string; badge: string; accent: string }> = {
  sky: {
    iconBg: "from-sky/[0.10] to-sky/[0.18]",
    iconHover: "group-hover:from-sky/[0.15] group-hover:to-sky/[0.25]",
    glow: "bg-sky/[0.04]",
    border: "hover:border-sky/25",
    badge: "bg-sky/[0.08] text-text-secondary border-sky/[0.15]",
    accent: "group-hover:bg-sky/20",
  },
  lavender: {
    iconBg: "from-lavender/[0.10] to-lavender/[0.18]",
    iconHover: "group-hover:from-lavender/[0.15] group-hover:to-lavender/[0.25]",
    glow: "bg-lavender/[0.04]",
    border: "hover:border-lavender/25",
    badge: "bg-lavender/[0.08] text-text-secondary border-lavender/[0.15]",
    accent: "group-hover:bg-lavender/20",
  },
  sage: {
    iconBg: "from-sage/[0.10] to-sage/[0.18]",
    iconHover: "group-hover:from-sage/[0.15] group-hover:to-sage/[0.25]",
    glow: "bg-sage/[0.04]",
    border: "hover:border-sage/25",
    badge: "bg-sage/[0.08] text-sage-dark border-sage/[0.15]",
    accent: "group-hover:bg-sage/20",
  },
  gold: {
    iconBg: "from-gold-soft/[0.12] to-gold-light/[0.20]",
    iconHover: "group-hover:from-gold-soft/[0.18] group-hover:to-gold-light/[0.28]",
    glow: "bg-gold-soft/[0.04]",
    border: "hover:border-gold-soft/25",
    badge: "bg-gold-soft/[0.08] text-brown border-gold-soft/[0.15]",
    accent: "group-hover:bg-gold-soft/20",
  },
};

export default function Mindset() {
  const sectionRef = useRef<HTMLElement>(null);
  const connectorRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        ".mindset-header",
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

      // Sequential card reveal — Observe → Reflect → Build → Improve
      const cards = sectionRef.current!.querySelectorAll(".mindset-card");
      gsap.fromTo(
        cards,
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.25,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cards[0],
            start: "top 85%",
          },
        }
      );

      // Animate the connector line drawing
      if (connectorRef.current) {
        const path = connectorRef.current.querySelector(".connector-path");
        if (path) {
          const length = (path as SVGPathElement).getTotalLength();
          gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
          gsap.to(path, {
            strokeDashoffset: 0,
            duration: 2,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: connectorRef.current,
              start: "top 80%",
            },
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="mindset"
      className="section-padding relative overflow-hidden"
    >
      {/* Breathing background with emotional colors */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="breathing-circle absolute top-[10%] right-[5%] w-[300px] h-[300px] rounded-full bg-sky/[0.04] blur-3xl" />
        <div className="breathing-circle-slow absolute bottom-[15%] left-[8%] w-[250px] h-[250px] rounded-full bg-lavender/[0.04] blur-3xl" />
        <div className="breathing-circle absolute top-[50%] left-[40%] w-[200px] h-[200px] rounded-full bg-gold-soft/[0.03] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="mindset-header inline-block text-sm font-medium tracking-widest uppercase text-sage-dark mb-3">
            How I Think
          </span>
          <h2 className="mindset-header font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            My Mindset
          </h2>
          <p className="mindset-header text-lg text-text-secondary max-w-2xl mx-auto">
            A calm, reflective approach to building software that truly serves people.
          </p>
        </div>

        {/* Connector line (desktop only) — emotional gradient */}
        <svg
          ref={connectorRef}
          className="hidden lg:block absolute top-[55%] left-[12%] right-[12%] w-[76%] h-4 pointer-events-none"
          viewBox="0 0 800 10"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="connectorGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--color-sky)" stopOpacity="0.3" />
              <stop offset="33%" stopColor="var(--color-lavender)" stopOpacity="0.3" />
              <stop offset="66%" stopColor="var(--color-sage)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="var(--color-gold-soft)" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path
            className="connector-path"
            d="M0 5 H800"
            stroke="url(#connectorGrad)"
            strokeWidth="2"
          />
        </svg>

        {/* Mindset Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {mindsetSteps.map((step) => {
            const IconComponent = iconMap[step.icon] || EyeIcon;
            const colors = stepColors[step.color] || stepColors.sage;
            return (
              <div
                key={step.title}
                className={`mindset-card group relative p-8 rounded-2xl bg-surface border border-border/50 shadow-[0_2px_24px_rgba(0,0,0,0.03)] card-lift gradient-border-hover ${colors.border}`}
              >
                {/* Soft colorful glow behind card */}
                <div className={`absolute -inset-1 rounded-2xl ${colors.glow} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />

                {/* Step number */}
                <span className="absolute top-5 right-5 text-xs font-mono text-text-muted/30 font-bold">
                  {step.number}
                </span>

                {/* Emotional badge */}
                <span className={`absolute top-5 left-5 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-full border ${colors.badge}`}>
                  {step.badge}
                </span>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colors.iconBg} flex items-center justify-center text-sage-dark mb-5 mt-4 transition-all duration-400 group-hover:scale-110 ${colors.iconHover}`}>
                  <IconComponent />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-sage-dark transition-colors duration-300">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-text-secondary leading-relaxed">
                  {step.description}
                </p>

                {/* Bottom accent line — color-coded */}
                <div className={`absolute bottom-0 left-6 right-6 h-[2px] rounded-full bg-transparent ${colors.accent} transition-all duration-500`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
