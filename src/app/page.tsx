import Image from "next/image";
import HeroSection from "./components/home/HeroSection";
import AboutSection from "./components/home/AboutSection";
import ValuePropositionSection from "./components/home/ValuePropositionSection";
import StatsSection from "./components/home/StatsSection";
import ServiceSection from "./components/home/ServiceSection";
import SocialsSection from "./components/home/SocialsSection";
import ContactSection from "./components/home/ContactSection";
import ContactMap from "./components/home/ContactMap"

export default function Home() {
  return (
    <main>
     <HeroSection />
     <AboutSection />
     <ValuePropositionSection />
     <StatsSection />
     <ServiceSection />
     <SocialsSection />
     <ContactSection />
     <ContactMap />
    </main>
  );
}
