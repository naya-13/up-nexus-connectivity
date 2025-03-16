
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/sections/HeroSection";
import AnnouncementsSection from "../components/sections/AnnouncementsSection";
import EcosystemSection from "../components/sections/EcosystemSection";
import NewsSection from "../components/sections/NewsSection";
import AboutSection from "../components/sections/AboutSection";
import FeaturesSection from "../components/sections/FeaturesSection";
import HowItWorksSection from "../components/sections/HowItWorksSection";
import PricingSection from "../components/sections/PricingSection";
import PartnersSection from "../components/sections/PartnersSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-nexus-dark overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AnnouncementsSection />
      <EcosystemSection />
      <NewsSection />
      <AboutSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default Index;
