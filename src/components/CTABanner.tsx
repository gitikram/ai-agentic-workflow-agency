import { Button } from "@/components/ui/button";

const CTABanner = () => {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source src={`${import.meta.env.BASE_URL}videos/hero-bg.mp4`} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-background/50" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground mb-6 leading-[1.1]">
          Ready to automate
          <br />
          your <em className="text-accent font-normal italic">future</em>?
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Join thousands of businesses leveraging AI-powered agentic workflows
          to scale operations and eliminate bottlenecks.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button variant="heroLight" size="lg" className="px-10 py-6 text-base">
            Get started free
          </Button>
          <Button variant="heroDark" size="lg" className="px-10 py-6 text-base">
            Talk to sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
