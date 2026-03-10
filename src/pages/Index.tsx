import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import IntegrationsSection from "@/components/IntegrationsSection";

const Index = () => {
  return (
    <div className="bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <IntegrationsSection />
    </div>
  );
};

export default Index;
