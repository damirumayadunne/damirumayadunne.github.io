import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Mindset from "@/components/Mindset";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Values from "@/components/Values";
import InnerCompass from "@/components/InnerCompass";
import Journey from "@/components/Journey";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingParticles from "@/components/FloatingParticles";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <>
      <Navbar />
      <FloatingParticles />
      <main className="flex-grow">
        <Hero />
        <SectionDivider color="var(--color-cream)" />
        <About />
        <SectionDivider color="var(--color-surface-warm)" />
        <Mindset />
        <SectionDivider color="var(--color-surface-warm)" />
        <Skills />
        <SectionDivider color="var(--color-cream)" />
        <Projects />
        <SectionDivider color="var(--color-cream)" />
        <Values />
        <SectionDivider color="var(--color-surface-warm)" />
        <InnerCompass />
        <SectionDivider color="var(--color-surface-warm)" />
        <Journey />
        <SectionDivider color="var(--color-cream)" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
