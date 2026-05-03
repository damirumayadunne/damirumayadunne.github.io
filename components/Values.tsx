"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Values() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Content fades in softly
      gsap.fromTo(
        ".values-content",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      // Breathing decorative elements
      gsap.fromTo(
        ".values-deco",
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          stagger: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      // Quote text reveal
      gsap.fromTo(
        ".values-quote",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".values-quote",
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
      id="values"
      className="relative py-28 md:py-36 overflow-hidden"
    >
      {/* Multi-layer breathing space background — emotional gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-surface-warm to-cream" />
      <div className="absolute inset-0 bg-gradient-to-tr from-lavender/[0.02] via-transparent to-sky/[0.02]" />
      <div className="absolute inset-0 bg-gradient-to-bl from-peach/[0.01] via-transparent to-gold-soft/[0.01]" />

      {/* Decorative organic shapes — emotional colors */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="values-deco breathing-circle absolute top-8 left-[8%] w-44 h-44 rounded-full bg-lavender/[0.04] blur-2xl" />
        <div className="values-deco breathing-circle-slow absolute bottom-8 right-[8%] w-60 h-60 rounded-full bg-sky/[0.04] blur-2xl" />
        <div className="values-deco absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-sage/[0.02] blur-3xl" />
        {/* Small accent circles — emotional */}
        <div className="values-deco absolute top-[25%] right-[20%] w-3 h-3 rounded-full bg-gold-soft/[0.20]" />
        <div className="values-deco absolute bottom-[30%] left-[15%] w-4 h-4 rounded-full bg-peach/[0.15]" />
        <div className="values-deco absolute top-[45%] left-[25%] w-3 h-3 rounded-full bg-lavender/[0.12]" />
      </div>

      {/* Top & bottom decorative lines — emotional gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lavender/15 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky/15 to-transparent" />

      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <div className="values-content text-center">
          {/* Section Label */}
          <span className="inline-block text-sm font-medium tracking-widest uppercase text-sage-dark mb-6">
            The Calm Space
          </span>

          {/* Decorative leaf with soft emotional glow */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <svg
                className="w-10 h-10 text-sage/30"
                viewBox="0 0 100 100"
                fill="currentColor"
              >
                <path d="M50 10C50 10 85 35 85 60C85 78 70 90 50 90C30 90 15 78 15 60C15 35 50 10 50 10Z" />
                <line x1="50" y1="90" x2="50" y2="45" stroke="currentColor" strokeWidth="2.5" fill="none" />
              </svg>
              {/* Subtle emotional glow behind leaf */}
              <div className="absolute inset-0 w-10 h-10 rounded-full bg-gradient-to-br from-sage/[0.06] to-lavender/[0.06] blur-xl -z-10" />
            </div>
          </div>

          {/* Quote */}
          <blockquote className="values-quote font-[var(--font-display)] text-2xl md:text-3xl lg:text-4xl font-medium text-text-primary leading-snug italic">
            &ldquo;I believe good software should make people&apos;s lives
            easier, not more stressful. My goal is to build digital products
            that are simple, useful, peaceful, and human-centered.&rdquo;
          </blockquote>

          {/* Attribution */}
          <div className="mt-10 flex items-center justify-center gap-3">
            <div className="w-10 h-px bg-gradient-to-r from-transparent to-lavender/40" />
            <span className="text-sm text-text-muted font-medium tracking-wide">
              Damiru Mayadunne
            </span>
            <div className="w-10 h-px bg-gradient-to-l from-transparent to-sky/40" />
          </div>

          {/* Subtle emotional qualities row */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {["Empathy", "Clarity", "Balance", "Growth", "Creativity"].map((quality) => (
              <span
                key={quality}
                className="px-3 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-full border bg-surface/60 text-text-muted border-border/30 backdrop-blur-sm"
              >
                {quality}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
