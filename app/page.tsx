import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TractionFeatures from "@/components/TractionFeatures";
import HowItWorks from "@/components/HowItWorks";
import Studio from "@/components/Studio";
import CaseStudies from "@/components/CaseStudies";
import Team from "@/components/Team";
import Principles from "@/components/Principles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import SectionReveal from "@/components/SectionReveal";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ScrollProgress />
      <Hero />
      <SectionReveal><TractionFeatures /></SectionReveal>
      <HowItWorks />
      <SectionReveal><Studio /></SectionReveal>
      <SectionReveal><CaseStudies /></SectionReveal>
      <SectionReveal><Team /></SectionReveal>
      <SectionReveal><Principles /></SectionReveal>
      <SectionReveal><Contact /></SectionReveal>
      <Footer />
    </div>
  );
}
