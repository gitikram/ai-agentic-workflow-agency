import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import ScrollFadeIn from "@/components/ScrollFadeIn";

const Index = () => {
  return (
    <div className="bg-background">
      <Navbar />
      <HeroSection />
      <ScrollFadeIn>
        <ServicesSection />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <IntegrationsSection />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <TestimonialsSection />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <PricingSection />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <CTABanner />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <Footer />
      </ScrollFadeIn>
    </div>
  );
};

export default Index;
