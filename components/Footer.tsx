export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 bg-surface-warm border-t border-border/20">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sage/15 to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-5">
          {/* Logo */}
          <span className="font-[var(--font-display)] text-lg font-semibold tracking-tight text-text-primary">
            Mind<span className="text-sage">Garden</span>
          </span>

          {/* Decorative leaf with glow */}
          <div className="relative">
            <svg
              className="w-6 h-6 text-sage/25"
              viewBox="0 0 100 100"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M50 15C50 15 80 38 80 58C80 74 67 85 50 85C33 85 20 74 20 58C20 38 50 15 50 15Z" />
              <line x1="50" y1="85" x2="50" y2="48" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>
            <div className="absolute inset-0 rounded-full bg-sage/[0.06] blur-lg -z-10" />
          </div>

          {/* Tagline */}
          <p className="text-sm text-text-secondary text-center leading-relaxed italic">
            Where code meets calm thinking.
          </p>

          {/* Footer message */}
          <p className="text-sm text-text-muted text-center leading-relaxed">
            Designed and built with calm energy by Damiru Mayadunne.
          </p>

          {/* Copyright */}
          <p className="text-xs text-text-muted/50">
            &copy; {currentYear} MindGarden. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
