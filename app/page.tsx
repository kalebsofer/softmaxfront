import Navbar from "@/components/Navbar";
import Hero, { CapabilityStrip } from "@/components/Hero";
import CaseStudies from "@/components/CaseStudies";
import Studio from "@/components/Studio";
import HowItWorks from "@/components/HowItWorks";
import TractionFeatures from "@/components/TractionFeatures";
import Team from "@/components/Team";
import Principles from "@/components/Principles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";

export default function Home() {
  return (
    <div className="min-h-screen bg-paper">
      <Navbar />
      <Hero />
      <CapabilityStrip />
      <CaseStudies />
      <SectionReveal><Studio /></SectionReveal>
      <SectionReveal><HowItWorks /></SectionReveal>
      <TractionFeatures />
      <SectionReveal><Team /></SectionReveal>
      <SectionReveal><Principles /></SectionReveal>
      <Contact />
      <Footer />
    </div>
  );
}
