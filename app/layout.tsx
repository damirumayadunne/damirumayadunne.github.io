import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

// Primary sans-serif font — clean, modern, and highly readable
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

// Display font — elegant serif for headings, gives a premium feel
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MindGarden — Damiru Mayadunne | Software Engineering Portfolio",
  description:
    "Personal portfolio of Damiru Mayadunne, a Software Engineering student who builds calm, human-focused digital experiences inspired by psychology, nature, and meaningful technology.",
  keywords: [
    "Damiru Mayadunne",
    "Software Engineering",
    "Portfolio",
    "Frontend Developer",
    "Human-Centered Design",
    "Psychology",
    "UI/UX",
  ],
  authors: [{ name: "Damiru Mayadunne" }],
  openGraph: {
    title: "MindGarden — Damiru Mayadunne",
    description:
      "A calm digital garden showcasing software engineering skills, projects, and values.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
