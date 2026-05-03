"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { aboutHighlights } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

// Icon components
function HeartIcon() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c0 0-8-4-8-12C4 5 8 3 12 3c4 0 8 2 8 6 0 8-8 12-8 12z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 13l4-4 4 4" />
    </svg>
  );
}

function LightbulbIcon() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>
  );
}

const iconMap: Record<string, React.FC> = {
  heart: HeartIcon,
  leaf: LeafIcon,
  lightbulb: LightbulbIcon,
};

// Emotional color schemes per card
const cardColors: Record<string, { iconBg: string; iconHover: string; glow: string; border: string; badge: string }> = {
  peach: {
    iconBg: "from-peach/[0.10] to-peach/[0.18]",
    iconHover: "group-hover:from-peach/[0.15] group-hover:to-peach/[0.25]",
    glow: "bg-peach/[0.04]",
    border: "hover:border-peach/25",
    badge: "bg-peach/[0.08] text-brown border-peach/[0.15]",
  },
  lavender: {
    iconBg: "from-lavender/[0.10] to-lavender/[0.18]",
    iconHover: "group-hover:from-lavender/[0.15] group-hover:to-lavender/[0.25]",
    glow: "bg-lavender/[0.04]",
    border: "hover:border-lavender/25",
    badge: "bg-lavender/[0.08] text-text-secondary border-lavender/[0.15]",
  },
  sky: {
    iconBg: "from-sky/[0.10] to-sky/[0.18]",
    iconHover: "group-hover:from-sky/[0.15] group-hover:to-sky/[0.25]",
    glow: "bg-sky/[0.04]",
    border: "hover:border-sky/25",
    badge: "bg-sky/[0.08] text-text-secondary border-sky/[0.15]",
  },
};

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Section title animation
      gsap.fromTo(
        ".about-title",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Paragraph animation
      gsap.fromTo(
        ".about-text",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-text",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Card stagger animation with slight scale
      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".highlight-card");
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0, scale: 0.96 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-padding relative overflow-hidden"
    >
      {/* Background breathing shapes with emotional accents */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="breathing-circle absolute top-[5%] right-[8%] w-[280px] h-[280px] rounded-full bg-sage/[0.03] blur-3xl" />
        <div className="breathing-circle-slow absolute bottom-[10%] left-[5%] w-[200px] h-[200px] rounded-full bg-lavender/[0.03] blur-3xl" />
        <div className="breathing-circle absolute top-[40%] left-[50%] w-[160px] h-[160px] rounded-full bg-peach/[0.03] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="about-title inline-block text-sm font-medium tracking-widest uppercase text-sage-dark mb-3">
            The Roots
          </span>
          <h2 className="about-title font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary">
            About Me
          </h2>
        </div>

        {/* About Text */}
        <div className="max-w-3xl mx-auto mb-16">
          <p className="about-text text-lg text-text-secondary leading-relaxed text-center">
            I am a second-year Software Engineering student who enjoys building
            digital experiences that are simple, meaningful, and easy for people
            to use. My interests in psychology, nature, and peaceful design help
            me think beyond code and focus on how technology can support real
            human needs.
          </p>
        </div>

        {/* Highlight Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aboutHighlights.map((item) => {
            const IconComponent = iconMap[item.icon] || HeartIcon;
            const colors = cardColors[item.color] || cardColors.peach;
            return (
              <div
                key={item.title}
                className={`highlight-card group relative p-8 rounded-2xl bg-surface border border-border/50 shadow-[0_2px_24px_rgba(0,0,0,0.03)] card-lift gradient-border-hover ${colors.border}`}
              >
                {/* Soft colorful glow behind card */}
                <div className={`absolute -inset-1 rounded-2xl ${colors.glow} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />

                {/* Badge */}
                <span className={`absolute top-5 right-5 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-full border ${colors.badge}`}>
                  {item.badge}
                </span>

                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colors.iconBg} flex items-center justify-center text-sage-dark mb-5 transition-all duration-300 group-hover:scale-110 ${colors.iconHover}`}>
                  <IconComponent />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-sage-dark transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
