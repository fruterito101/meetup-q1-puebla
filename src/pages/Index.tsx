import { useState, useEffect, useCallback } from "react";
import HeroSection from "@/components/HeroSection";
import StickyNav from "@/components/StickyNav";
import ExecutiveSummary from "@/components/ExecutiveSummary";
import EventOverview from "@/components/EventOverview";
import MetricsSection from "@/components/MetricsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ImpactSection from "@/components/ImpactSection";
import ResultsSection from "@/components/ResultsSection";
import FinancialSection from "@/components/FinancialSection";
import GallerySection from "@/components/GallerySection";
import PhotoGallery from "@/components/PhotoGallery";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeSection, setActiveSection] = useState("");

  const handleNavigate = useCallback((sectionId: string) => {
    if (sectionId === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["metricas", "experiencia", "impacto", "media", "photo-gallery"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <StickyNav onNavigate={handleNavigate} activeSection={activeSection} />
      <HeroSection onNavigate={handleNavigate} />
      <ExecutiveSummary />
      <EventOverview />
      <MetricsSection />
      <ExperienceSection />
      <ImpactSection />
      <FinancialSection />
      <GallerySection />
      <PhotoGallery />
      <Footer />
    </div>
  );
};

export default Index;
