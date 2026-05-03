"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

// Organic floating shapes — enhanced with emotional pastel accents
function FloatingShapes() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const shapes = containerRef.current.querySelectorAll(".floating-shape");

    const tweens = Array.from(shapes).map((shape, i) =>
      gsap.to(shape, {
        y: `random(-35, 35)`,
        x: `random(-20, 20)`,
        rotation: `random(-10, 10)`,
        duration: `random(5, 9)`,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.5,
      })
    );

    return () => {
      tweens.forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Large breathing sage orb */}
      <div className="floating-shape breathing-circle absolute top-[8%] right-[8%] w-80 h-80 rounded-full bg-sage/[0.06] blur-2xl" />
      {/* Warm glow */}
      <div className="floating-shape breathing-circle-slow absolute bottom-[15%] left-[3%] w-56 h-56 rounded-full bg-beige/[0.10] blur-xl" />
      {/* Soft gold sun element */}
      <div className="floating-shape absolute top-[12%] left-[35%] w-24 h-24 rounded-full bg-gradient-to-br from-gold-soft/[0.08] to-gold-light/[0.04] blur-lg" />
      {/* Soft lavender glow — reflection */}
      <div className="floating-shape breathing-circle absolute top-[30%] right-[25%] w-40 h-40 rounded-full bg-lavender/[0.04] blur-2xl" />
      {/* Soft sky glow — clarity */}
      <div className="floating-shape breathing-circle-slow absolute bottom-[25%] left-[20%] w-32 h-32 rounded-full bg-sky/[0.04] blur-xl" />
      {/* Leaf shapes */}
      <svg
        className="floating-shape absolute top-[28%] left-[12%] w-16 h-16 text-sage/[0.15]"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d="M50 5C50 5 90 35 90 65C90 85 72 95 50 95C28 95 10 85 10 65C10 35 50 5 50 5Z" />
        <line x1="50" y1="95" x2="50" y2="40" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
      <svg
        className="floating-shape absolute bottom-[25%] right-[18%] w-12 h-12 text-sage-light/[0.18] rotate-45"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d="M50 5C50 5 90 35 90 65C90 85 72 95 50 95C28 95 10 85 10 65C10 35 50 5 50 5Z" />
      </svg>
      {/* Muted blue orb */}
      <div className="floating-shape absolute top-[55%] right-[30%] w-36 h-36 rounded-full bg-blue-muted/[0.05] blur-xl" />
      {/* Soft peach warmth */}
      <div className="floating-shape absolute bottom-[35%] right-[50%] w-28 h-28 rounded-full bg-peach/[0.04] blur-xl" />
      {/* Small accent dots */}
      <div className="floating-shape absolute top-[15%] left-[50%] w-5 h-5 rounded-full bg-sage/[0.20]" />
      <div className="floating-shape absolute top-[45%] right-[6%] w-3 h-3 rounded-full bg-gold-soft/[0.25]" />
      <div className="floating-shape absolute top-[60%] left-[8%] w-4 h-4 rounded-full bg-lavender/[0.15]" />
      {/* Warm circle */}
      <div className="floating-shape absolute bottom-[8%] right-[6%] w-20 h-20 rounded-full bg-brown-light/[0.06] blur-md" />
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Sunrise-inspired timeline: elements reveal slowly from bottom like the sun rising
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      badgeRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.6 }
    )
      .fromTo(
        headingRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.0 },
        "-=0.4"
      )
      .fromTo(
        subtitleRef.current,
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.5"
      )
      .fromTo(
        taglineRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        "-=0.4"
      )
      .fromTo(
        ctaRef.current,
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        "-=0.3"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <FloatingShapes />

      {/* Layered gradient overlays for depth — with soft emotional tints */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-transparent to-cream/60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-tr from-lavender/[0.02] via-transparent to-sky/[0.02] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-bl from-peach/[0.01] via-transparent to-sage/[0.02] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center py-32">
        {/* Badge */}
        <div ref={badgeRef} className="opacity-0 mb-8">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sage/[0.08] border border-sage/[0.15] text-sage-dark text-sm font-medium shadow-[0_2px_12px_rgba(143,169,139,0.08)]">
            <span className="w-2 h-2 rounded-full bg-sage animate-pulse" />
            MindGarden
          </span>
        </div>

        {/* Main Heading */}
        <h1
          ref={headingRef}
          className="opacity-0 font-[var(--font-display)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-text-primary mb-6"
        >
          Hi, I&apos;m{" "}
          <span className="text-sage-dark">Damiru Mayadunne</span>
          <br />
          <span className="text-3xl sm:text-4xl md:text-5xl font-medium text-text-secondary">
            — a Software Engineering Student
          </span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="opacity-0 text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-4"
        >
          I build calm, human-focused digital experiences inspired by
          psychology, nature, and meaningful technology.
        </p>

        {/* Tagline */}
        <p
          ref={taglineRef}
          className="opacity-0 text-sm md:text-base text-sage-dark/70 font-medium italic mb-10"
        >
          Where code meets calm thinking.
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="opacity-0 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-8 py-3.5 bg-sage-dark text-white rounded-full font-medium transition-all duration-300 hover:bg-sage hover:shadow-lg hover:shadow-sage/20 hover:-translate-y-0.5 hover-glow"
          >
            View My Work
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-transparent border-2 border-sage/30 text-text-primary rounded-full font-medium transition-all duration-300 hover:border-sage hover:bg-sage/[0.05] hover:-translate-y-0.5"
          >
            Let&apos;s Connect
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="scroll-indicator w-[1px] h-8 bg-gradient-to-b from-text-muted/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
