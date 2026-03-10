import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-background/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-secondary/60 backdrop-blur-sm mb-10">
          <Sparkles className="h-4 w-4 text-muted-foreground" />
          <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
            Introducing Agentic Workflows
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] tracking-tight text-foreground mb-8">
          The AI agency that
          <br />
          brings <em className="text-accent font-normal italic">autonomy</em> to
          <br />
          complexity.
        </h1>

        {/* Subheading */}
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mb-12 leading-relaxed">
          Our platform integrates seamlessly into your business to deliver intelligent,
          self-executing workflows, not just basic automations.
        </p>

        {/* CTAs */}
        <div className="flex items-center gap-4">
          <Button variant="heroLight" size="lg" className="px-8 py-6 text-base">
            Start building
          </Button>
          <Button variant="heroDark" size="lg" className="px-8 py-6 text-base">
            Book a demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
