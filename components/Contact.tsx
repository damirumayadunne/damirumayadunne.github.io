"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { contactLinks } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

// Icon components for contact links
function MailIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

const iconMap: Record<string, React.FC> = {
  mail: MailIcon,
  linkedin: LinkedinIcon,
  github: GithubIcon,
};

// Emotional color per contact card
const linkColors = [
  { iconBg: "from-peach/[0.10] to-peach/[0.18]", glow: "bg-peach/[0.04]", border: "hover:border-peach/20" },
  { iconBg: "from-sky/[0.10] to-sky/[0.18]", glow: "bg-sky/[0.04]", border: "hover:border-sky/20" },
  { iconBg: "from-lavender/[0.10] to-lavender/[0.18]", glow: "bg-lavender/[0.04]", border: "hover:border-lavender/20" },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-header",
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

      gsap.fromTo(
        ".contact-content",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".contact-content",
            start: "top 85%",
          },
        }
      );

      const links = sectionRef.current!.querySelectorAll(".contact-link");
      gsap.fromTo(
        links,
        { y: 30, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: links[0],
            start: "top 90%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section-padding relative overflow-hidden"
    >
      {/* Background — emotional glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="breathing-circle absolute top-[15%] left-[8%] w-[200px] h-[200px] rounded-full bg-peach/[0.03] blur-3xl" />
        <div className="breathing-circle-slow absolute bottom-[10%] right-[10%] w-[180px] h-[180px] rounded-full bg-sky/[0.03] blur-3xl" />
        <div className="breathing-circle absolute top-[50%] right-[30%] w-[150px] h-[150px] rounded-full bg-lavender/[0.03] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="contact-header inline-block text-sm font-medium tracking-widest uppercase text-sage-dark mb-3">
            Let&apos;s Grow
          </span>
          <h2 className="contact-header font-[var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Get in Touch
          </h2>
          <p className="contact-content text-lg text-text-secondary max-w-xl mx-auto">
            Let&apos;s build something meaningful, calm, and useful together.
          </p>
        </div>

        {/* Contact Links */}
        <div className="contact-content flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          {contactLinks.map((link, index) => {
            const IconComponent = iconMap[link.icon] || MailIcon;
            const colors = linkColors[index % linkColors.length];
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className={`contact-link group relative flex items-center gap-3 px-6 py-4 rounded-2xl bg-surface border border-border/50 shadow-[0_2px_16px_rgba(0,0,0,0.03)] card-lift gradient-border-hover w-full sm:w-auto ${colors.border}`}
              >
                {/* Soft colorful glow */}
                <div className={`absolute -inset-1 rounded-2xl ${colors.glow} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />

                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colors.iconBg} flex items-center justify-center text-sage-dark transition-all duration-300 group-hover:scale-110`}>
                  <IconComponent />
                </div>
                <div>
                  <span className="block text-xs text-text-muted font-medium uppercase tracking-wider">
                    {link.label}
                  </span>
                  <span className="text-sm text-text-primary font-medium">
                    {link.value}
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Location */}
        <div className="text-center mt-10">
          <p className="text-sm text-text-muted flex items-center justify-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            Sri Lanka
          </p>
        </div>
      </div>
    </section>
  );
}
