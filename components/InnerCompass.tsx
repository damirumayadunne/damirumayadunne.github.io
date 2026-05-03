"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { innerCompassValues } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

// Icon components
function PeaceIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0-18a9 9 0 019 9 9 9 0 01-9 9m0-18a9 9 0 00-9 9 9 9 0 009 9m0-9l6.364 6.364M12 12L5.636 18.364" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  );
}

function GrowthIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c0 0-8-4-8-12C4 5 8 3 12 3c4 0 8 2 8 6 0 8-8 12-8 12z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V9" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
    </svg>
  );
}

const iconMap: Record<string, React.FC> = {
  peace: PeaceIcon,
  people: PeopleIcon,
  growth: GrowthIcon,
  spark: SparkIcon,
};

// Emotional colors per compass value
const compassColors: Record<string, { iconBg: string; iconHover: string; glow: string; border: string }> = {
  peach: {
    iconBg: "from-peach/[0.10] to-peach/[0.18]",
    iconHover: "group-hover:from-peach/[0.15] group-hover:to-peach/[0.25]",
    glow: "bg-peach/[0.04]",
    border: "hover:border-peach/20",
  },
  lavender: {
    iconBg: "from-lavender/[0.10] to-lavender/[0.18]",
    iconHover: "group-hover:from-lavender/[0.15] group-hover:to-lavender/[0.25]",
    glow: "bg-lavender/[0.04]",
    border: "hover:border-lavender/20",
  },
  gold: {
    iconBg: "from-gold-soft/[0.12] to-gold-light/[0.20]",
    iconHover: "group-hover:from-gold-soft/[0.18] group-hover:to-gold-light/[0.28]",
    glow: "bg-gold-soft/[0.04]",
    border: "hover:border-gold-soft/20",
  },
  sky: {
    iconBg: "from-sky/[0.10] to-sky/[0.18]",
    iconHover: "group-hover:from-sky/[0.15] group-hover:to-sky/[0.25]",
    glow: "bg-sky/[0.04]",
    border: "hover:border-sky/20",
  },
};

export default function InnerCompass() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        ".compass-header",
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

      // Cards with stagger
      const cards = sectionRef.current!.querySelectorAll(".compass-card");
      gsap.fromTo(
        cards,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cards[0],
            start: "top 85%",
          },
        }
      );

      // Center compass animation
      gsap.fromTo(
        ".compass-center",
        { scale: 0, opacity: 0, rotation: -90 },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 1.2,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: ".compass-center",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="compass"
      className="section-padding relative bg-surface-warm overflow-hidden"
    >
      {/* Top gradient line — emotional */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lavender/15 to-transparent" />

      {/* Background breathing shapes — emotional colors */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="breathing-circle absolute top-[20%] left-[10%] w-[200px] h-[200px] rounded-full bg-peach/[0.04] blur-3xl" />
        <div className="breathing-circle-slow absolute bottom-[20%] right-[10%] w-[250px] h-[250px] rounded-full bg-sky/[0.04] blur-3xl" />
        <div className="breathing-circle absolute top-[60%] left-[50%] w-[180px] h-[180px] rounded-full bg-lavender/[0.03] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="compass-header inline-block text-sm font-medium tracking-widest uppercase text-sage-dark mb-3">
            Inner Compass
          </span>
          <h2 className="compass-header font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            What Guides Me
          </h2>
          <p className="compass-header text-lg text-text-secondary max-w-2xl mx-auto">
            The values that shape every line of code I write and every experience I create.
          </p>
        </div>

        {/* Compass layout: center icon + cards around it */}
        <div className="relative">
          {/* Center compass symbol — emotional gradient */}
          <div className="compass-center hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-20 h-20 rounded-full bg-gradient-to-br from-lavender/[0.08] via-sage/[0.08] to-sky/[0.08] border border-sage/20 items-center justify-center">
            <svg className="w-8 h-8 text-sage-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <circle cx="12" cy="12" r="9" />
              <path d="M12 3v4m0 10v4M3 12h4m10 0h4" />
              <circle cx="12" cy="12" r="2" fill="currentColor" />
            </svg>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-x-32 lg:gap-y-8">
            {innerCompassValues.map((value) => {
              const IconComponent = iconMap[value.icon] || SparkIcon;
              const colors = compassColors[value.color] || compassColors.peach;
              return (
                <div
                  key={value.title}
                  className={`compass-card group relative flex items-start gap-4 p-6 rounded-2xl bg-surface/80 border border-border/40 shadow-[0_2px_20px_rgba(0,0,0,0.02)] card-lift gradient-border-hover ${colors.border}`}
                >
                  {/* Soft colorful glow behind card */}
                  <div className={`absolute -inset-1 rounded-2xl ${colors.glow} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />

                  {/* Icon — emotionally colored */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${colors.iconBg} flex items-center justify-center text-sage-dark transition-all duration-400 group-hover:scale-110 ${colors.iconHover}`}>
                    <IconComponent />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-base font-semibold text-text-primary mb-1 group-hover:text-sage-dark transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
