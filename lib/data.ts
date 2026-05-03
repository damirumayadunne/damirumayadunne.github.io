// Portfolio data - all content in one place for easy updates

export const siteConfig = {
  name: "MindGarden",
  tagline: "Where code meets calm thinking.",
  title: "Damiru Mayadunne — Software Engineering Student",
  description:
    "I build calm, human-focused digital experiences inspired by psychology, nature, and meaningful technology.",
};

export const aboutHighlights = [
  {
    icon: "heart",
    title: "Human-Focused Thinking",
    description:
      "Designing with empathy and understanding of how people interact with technology.",
    badge: "Empathetic",
    color: "peach",
  },
  {
    icon: "leaf",
    title: "Calm Problem Solving",
    description:
      "Taking a thoughtful approach to break down complex challenges into simple, elegant solutions.",
    badge: "Reflective",
    color: "lavender",
  },
  {
    icon: "lightbulb",
    title: "Meaningful Digital Design",
    description:
      "Creating interfaces that feel peaceful, purposeful, and genuinely helpful for people.",
    badge: "Creative",
    color: "sky",
  },
];

export const mindsetSteps = [
  {
    number: "01",
    title: "Observe",
    description:
      "I try to understand the user, the context, and the real problem before choosing a solution.",
    icon: "eye",
    badge: "Curious",
    color: "sky",
  },
  {
    number: "02",
    title: "Reflect",
    description:
      "I think about how people may feel while using the product and how to make the experience clear and calm.",
    icon: "brain",
    badge: "Reflective",
    color: "lavender",
  },
  {
    number: "03",
    title: "Build",
    description:
      "I turn ideas into simple, useful, and well-structured digital solutions.",
    icon: "hammer",
    badge: "Focused",
    color: "sage",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "I use feedback, testing, and reflection to make the product better step by step.",
    icon: "refresh",
    badge: "Growth",
    color: "gold",
  },
];

export const innerCompassValues = [
  {
    title: "Empathy in Design",
    description: "Understanding how people feel and building technology that respects their emotions and needs.",
    icon: "people",
    color: "peach",
  },
  {
    title: "Calm Problem Solving",
    description: "Approaching challenges with patience, clarity, and a thoughtful mindset.",
    icon: "peace",
    color: "lavender",
  },
  {
    title: "Continuous Growth",
    description: "Embracing learning, feedback, and self-improvement every day.",
    icon: "growth",
    color: "gold",
  },
  {
    title: "Meaningful Technology",
    description: "Building digital tools that genuinely make lives simpler and better.",
    icon: "spark",
    color: "sky",
  },
];

export const skillCategories = [
  {
    title: "Programming",
    icon: "code",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "HTML", "CSS"],
    color: "sage",
  },
  {
    title: "Frontend",
    icon: "layout",
    skills: ["React", "Next.js", "Tailwind CSS", "Responsive Design"],
    color: "sky",
  },
  {
    title: "Database",
    icon: "database",
    skills: ["MySQL", "SQL"],
    color: "lavender",
  },
  {
    title: "Tools",
    icon: "tool",
    skills: ["GitHub", "VS Code", "Figma", "Draw.io"],
    color: "gold",
  },
  {
    title: "Soft Skills",
    icon: "users",
    skills: [
      "Problem Solving",
      "Critical Thinking",
      "Teamwork",
      "Communication",
      "Time Management",
      "Clear Communication",
    ],
    color: "peach",
  },
  {
    title: "Planning & Coordination",
    icon: "clipboard",
    skills: [
      "Task Planning",
      "Team Coordination",
      "Requirement Understanding",
      "Project Documentation",
      "Task Prioritisation",
      "User-Focused Decision Making",
    ],
    color: "lavender",
  },
  {
    title: "Interest Areas",
    icon: "compass",
    skills: [
      "Psychology-Based Apps",
      "Calm UI/UX",
      "Community Platforms",
      "Human-Centered Technology",
    ],
    color: "rose",
  },
];

export const projects = [
  {
    title: "Emotion Reflection App",
    description:
      "A self-reflection app where users answer scenario-based questions and receive a simple emotional reflection such as calm, stressed, motivated, tired, or confused. The goal is to support personal awareness, not diagnosis or therapy.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "MySQL"],
    color: "lavender",
    emoji: "🌱",
    badge: "Reflective",
  },
  {
    title: "Mindful Community Finder",
    description:
      "A community-matching platform that helps people find groups based on lifestyle, mindset, hobbies, values, and interests such as nature lovers, calm study groups, creative circles, meditation clubs, and fitness groups.",
    techStack: ["React", "Node.js", "MySQL", "Figma"],
    color: "peach",
    emoji: "🌿",
    badge: "Empathetic",
  },
  {
    title: "Peaceful Task Planner",
    description:
      "A task planning app that organizes tasks based on energy level, mood, and priority, helping users plan their day in a calmer and more balanced way.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    color: "sky",
    emoji: "🍃",
    badge: "Balanced",
  },
];

export const journeySteps = [
  {
    label: "Foundation",
    description: "Learning programming fundamentals",
    status: "completed" as const,
  },
  {
    label: "Present",
    description: "Second-year Software Engineering student",
    status: "current" as const,
  },
  {
    label: "Focus",
    description: "Building human-centered digital products",
    status: "current" as const,
  },
  {
    label: "Direction",
    description:
      "Software engineering, project coordination, UI/UX-focused development, and product thinking",
    supportingText:
      "I am interested in roles where I can combine technical understanding, teamwork, planning, and human-centered problem solving.",
    status: "upcoming" as const,
  },
  {
    label: "Goal",
    description:
      "Internship opportunity where I can learn, contribute, and grow",
    status: "upcoming" as const,
  },
];

export const contactLinks = [
  {
    label: "Email",
    href: "mailto:damiru@example.com",
    value: "damiru@example.com",
    icon: "mail",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/damiru",
    value: "linkedin.com/in/damiru",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/damiru",
    value: "github.com/damiru",
    icon: "github",
  },
];
