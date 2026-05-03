"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

// Color accent mapping for project cards — emotional palette
const colorAccents: Record<string, { border: string; badge: string; accent: string; glow: string; emotionBadge: string }> = {
  lavender: {
    border: "hover:border-lavender/25",
    badge: "bg-lavender/[0.08] text-text-secondary border border-lavender/[0.12]",
    accent: "bg-gradient-to-r from-lavender/40 to-lavender-light/30",
    glow: "bg-lavender/[0.04]",
    emotionBadge: "bg-lavender/[0.08] text-text-secondary border-lavender/[0.15]",
  },
  peach: {
    border: "hover:border-peach/25",
    badge: "bg-peach/[0.08] text-brown border border-peach/[0.12]",
    accent: "bg-gradient-to-r from-peach/40 to-peach-light/30",
    glow: "bg-peach/[0.04]",
    emotionBadge: "bg-peach/[0.08] text-brown border-peach/[0.15]",
  },
  sky: {
    border: "hover:border-sky/25",
    badge: "bg-sky/[0.08] text-text-secondary border border-sky/[0.12]",
    accent: "bg-gradient-to-r from-sky/40 to-sky-light/30",
    glow: "bg-sky/[0.04]",
    emotionBadge: "bg-sky/[0.08] text-text-secondary border-sky/[0.15]",
  },
};

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Section header
      gsap.fromTo(
        ".projects-header",
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

      // Project cards — each grows in like a plant
      const cards = sectionRef.current!.querySelectorAll(".project-card");
      gsap.fromTo(
        cards,
        { y: 70, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cards[0],
            start: "top 85%",
          },
        }
      );

      // Decorative top lines grow
      const accents = sectionRef.current!.querySelectorAll(".card-accent-line");
      gsap.fromTo(
        accents,
        { width: 0 },
        {
          width: 48,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cards[0],
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="section-padding relative overflow-hidden"
    >
      {/* Background — emotional glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="breathing-circle absolute top-[20%] right-[5%] w-[250px] h-[250px] rounded-full bg-lavender/[0.03] blur-3xl" />
        <div className="breathing-circle-slow absolute bottom-[15%] left-[10%] w-[200px] h-[200px] rounded-full bg-peach/[0.03] blur-3xl" />
        <div className="breathing-circle absolute top-[60%] left-[50%] w-[180px] h-[180px] rounded-full bg-sky/[0.03] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="projects-header inline-block text-sm font-medium tracking-widest uppercase text-sage-dark mb-3">
            The Garden
          </span>
          <h2 className="projects-header font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Projects
          </h2>
          <p className="projects-header text-text-secondary max-w-xl mx-auto">
            Each project is a seed planted with care — growing from an idea into something meaningful.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const accent = colorAccents[project.color] || colorAccents.lavender;
            return (
              <div
                key={project.title}
                className={`project-card group relative flex flex-col p-8 rounded-2xl bg-surface border border-border/50 shadow-[0_2px_24px_rgba(0,0,0,0.03)] card-lift gradient-border-hover ${accent.border}`}
              >
                {/* Soft colorful glow behind card */}
                <div className={`absolute -inset-1 rounded-2xl ${accent.glow} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />

                {/* Project emoji + number + badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{project.emoji}</span>
                    <span className={`px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-full border ${accent.emotionBadge}`}>
                      {project.badge}
                    </span>
                  </div>
                  <span className="text-sm font-mono text-text-muted/30 font-medium">
                    0{index + 1}
                  </span>
                </div>

                {/* Decorative top accent line — gradient */}
                <div className={`card-accent-line h-[2px] rounded-full mb-6 ${accent.accent}`} />

                {/* Title */}
                <h3 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-sage-dark transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 hover:scale-105 ${accent.badge}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <button className="self-start inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-sage-dark transition-all duration-300 group/btn">
                  View Project
                  <svg
                    className="w-4 h-4 transition-transform group-hover/btn:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
