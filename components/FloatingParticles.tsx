"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * FloatingParticles — calm ambient particles in soft pastel colors.
 * Purely decorative, accessible-hidden, GPU-accelerated via CSS transforms.
 */

interface Particle {
  top: string;
  left?: string;
  right?: string;
  size: number;
  opacity: number;
  color: string;
  shape: "leaf" | "circle" | "dot";
}

const particles: Particle[] = [
  { top: "8%", left: "6%", size: 18, opacity: 0.10, color: "text-sage", shape: "leaf" },
  { top: "22%", right: "12%", size: 14, opacity: 0.07, color: "text-lavender", shape: "circle" },
  { top: "50%", left: "3%", size: 20, opacity: 0.06, color: "text-sky", shape: "leaf" },
  { top: "68%", right: "8%", size: 16, opacity: 0.08, color: "text-peach", shape: "circle" },
  { top: "85%", left: "15%", size: 12, opacity: 0.07, color: "text-gold-soft", shape: "dot" },
  { top: "35%", right: "4%", size: 10, opacity: 0.06, color: "text-sage-light", shape: "leaf" },
  { top: "75%", left: "45%", size: 8, opacity: 0.05, color: "text-lavender-muted", shape: "dot" },
  { top: "15%", left: "60%", size: 6, opacity: 0.06, color: "text-sky-muted", shape: "dot" },
  { top: "92%", right: "25%", size: 10, opacity: 0.05, color: "text-rose", shape: "circle" },
];

export default function FloatingParticles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const elements = containerRef.current.querySelectorAll(".leaf-particle");

    const tweens = Array.from(elements).map((p, i) => {
      return gsap.to(p, {
        y: `random(-80, 80)`,
        x: `random(-40, 40)`,
        rotation: `random(-25, 25)`,
        duration: `random(8, 16)`,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 1.5,
      });
    });

    return () => {
      tweens.forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[1]"
      aria-hidden="true"
    >
      {particles.map((particle, i) => (
        <div
          key={i}
          className={`leaf-particle absolute ${particle.color}`}
          style={{
            top: particle.top,
            left: particle.left,
            right: particle.right,
            opacity: particle.opacity,
          }}
        >
          {particle.shape === "leaf" ? (
            <svg
              width={particle.size}
              height={particle.size}
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              <path d="M50 5C50 5 90 35 90 65C90 85 72 95 50 95C28 95 10 85 10 65C10 35 50 5 50 5Z" />
              <line
                x1="50" y1="95" x2="50" y2="45"
                stroke="currentColor" strokeWidth="3" fill="none"
              />
            </svg>
          ) : particle.shape === "circle" ? (
            <div
              className="rounded-full bg-current"
              style={{ width: particle.size, height: particle.size }}
            />
          ) : (
            <div
              className="rounded-full bg-current"
              style={{ width: particle.size * 0.6, height: particle.size * 0.6 }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
