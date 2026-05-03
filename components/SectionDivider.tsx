/**
 * SectionDivider — an organic wavy SVG separator between sections.
 * Creates a smooth, nature-inspired transition.
 */
export default function SectionDivider({
  flip = false,
  color = "var(--color-surface-warm)",
}: {
  flip?: boolean;
  color?: string;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <svg
        className="relative block w-full h-[60px] md:h-[80px]"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        fill={color}
      >
        <path d="M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z" />
      </svg>
    </div>
  );
}
