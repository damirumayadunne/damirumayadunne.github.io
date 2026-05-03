"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { journeySteps } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function Journey() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        ".journey-header",
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

      // Timeline items stagger — appear one by one
      const items = sectionRef.current!.querySelectorAll(".timeline-item");
      gsap.fromTo(
        items,
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.25,
          ease: "power2.out",
          scrollTrigger: {
            trigger: items[0],
            start: "top 85%",
          },
        }
      );

      // Vine-like timeline line grows smoothly
      gsap.fromTo(
        ".timeline-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".timeline-line",
            start: "top 85%",
          },
        }
      );

      // Timeline dots pulse in
      const dots = sectionRef.current!.querySelectorAll(".timeline-dot");
      gsap.fromTo(
        dots,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.25,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: items[0],
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Emotional color for each timeline step
  const stepEmotions = ["sage", "sky", "lavender", "gold", "peach"];
  const dotColors: Record<string, string> = {
    sage: "bg-sage/[0.12] border-sage/30",
    sky: "bg-sky/[0.12] border-sky/30",
    lavender: "bg-lavender/[0.12] border-lavender/30",
    gold: "bg-gold-soft/[0.12] border-gold-soft/30",
    peach: "bg-peach/[0.12] border-peach/30",
  };

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="section-padding relative bg-surface-warm overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lavender/15 to-transparent" />

      {/* Background — emotional glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="breathing-circle absolute top-[10%] right-[10%] w-[220px] h-[220px] rounded-full bg-sky/[0.03] blur-3xl" />
        <div className="breathing-circle-slow absolute bottom-[15%] left-[8%] w-[180px] h-[180px] rounded-full bg-lavender/[0.03] blur-3xl" />
        <div className="breathing-circle absolute top-[50%] left-[40%] w-[160px] h-[160px] rounded-full bg-gold-soft/[0.03] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="journey-header inline-block text-sm font-medium tracking-widest uppercase text-sage-dark mb-3">
            Growth Path
          </span>
          <h2 className="journey-header font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            My Journey
          </h2>
          <p className="journey-header text-text-secondary max-w-xl mx-auto">
            Every step is a new branch in my growth — from foundations to future aspirations.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-2xl mx-auto">
          {/* Vine-like vertical line — emotional gradient */}
          <div
            className="timeline-line absolute left-6 md:left-8 top-0 bottom-0 w-[2px] origin-top"
            style={{
              background: "linear-gradient(to bottom, var(--color-sky) 0%, var(--color-lavender) 30%, var(--color-sage) 50%, var(--color-gold-soft) 70%, var(--color-peach) 100%)",
              opacity: 0.25,
            }}
          />

          {/* Small decorative leaves along the vine */}
          <div className="absolute left-[19px] md:left-[27px] top-[15%] pointer-events-none" aria-hidden="true">
            <svg className="w-4 h-4 text-sage/20 -rotate-45" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 10C50 10 85 35 85 60C85 78 70 85 50 85C30 85 15 78 15 60C15 35 50 10 50 10Z" />
            </svg>
          </div>
          <div className="absolute left-[19px] md:left-[27px] top-[55%] pointer-events-none" aria-hidden="true">
            <svg className="w-3 h-3 text-lavender/20 rotate-30" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 10C50 10 85 35 85 60C85 78 70 85 50 85C30 85 15 78 15 60C15 35 50 10 50 10Z" />
            </svg>
          </div>

          <div className="space-y-10">
            {journeySteps.map((step, index) => {
              const emotion = stepEmotions[index % stepEmotions.length];
              const dotColor = dotColors[emotion];
              return (
                <div key={step.label} className="timeline-item relative flex gap-6 md:gap-8">
                  {/* Timeline dot — emotionally colored */}
                  <div className="relative z-10 flex-shrink-0 mt-1">
                    <div
                      className={`timeline-dot w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center border-2 transition-all ${
                        step.status === "completed"
                          ? dotColor
                          : step.status === "current"
                          ? `${dotColor} shadow-[0_0_24px_rgba(143,169,139,0.18)]`
                          : "bg-cream border-border/40"
                      }`}
                      style={step.status === "current" ? { animation: "glow-pulse 3s ease-in-out infinite" } : undefined}
                    >
                      {step.status === "completed" ? (
                        <svg className="w-5 h-5 text-sage-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      ) : step.status === "current" ? (
                        <div className="w-3 h-3 rounded-full bg-sage animate-pulse" />
                      ) : (
                        <svg className="w-5 h-5 text-text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
                        </svg>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow pt-2 md:pt-4">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-base md:text-lg font-semibold text-text-primary">
                        {step.label}
                      </h3>
                      {step.status === "current" && (
                        <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-sage/[0.1] text-sage-dark border border-sage/[0.15]">
                          Now
                        </span>
                      )}
                    </div>
                    <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                      {step.description}
                    </p>
                    {/* Supporting text for Direction step */}
                    {step.supportingText && (
                      <p className="text-xs md:text-sm text-text-muted leading-relaxed mt-2 italic">
                        {step.supportingText}
                      </p>
                    )}
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
