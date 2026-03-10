import { Button } from "@/components/ui/button";
import { Bot, Database, BrainCircuit, Workflow, Shield, Zap } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Automation",
    description:
      "Automate routine tasks like lead handling and customer replies to let your team focus on what matters most.",
  },
  {
    icon: Database,
    title: "Data Insights",
    description:
      "Discover trends, predict user behavior, and segment your audience with precision to make smarter, data-backed decisions.",
  },
  {
    icon: BrainCircuit,
    title: "Adaptive AI",
    description:
      "We build AI systems that grow with your business, adapt to your data, and keep you ahead in a changing market.",
  },
  {
    icon: Workflow,
    title: "Agentic Workflows",
    description:
      "Design self-executing workflows that think, decide, and act — turning complex processes into autonomous pipelines.",
  },
  {
    icon: Shield,
    title: "AI Governance",
    description:
      "Ensure compliance, transparency, and control across all AI operations with built-in governance frameworks.",
  },
  {
    icon: Zap,
    title: "Rapid Integration",
    description:
      "Connect your existing tools and platforms in days, not months — with seamless API-first AI integration.",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-background py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-center text-foreground mb-16">
          The core of smarter innovation
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-border rounded-2xl overflow-hidden">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`flex flex-col justify-between p-8 md:p-10 border-border
                ${index < 3 ? "border-b" : ""}
                ${index % 3 !== 2 ? "lg:border-r" : ""}
                ${index % 2 === 0 && index < 4 ? "md:border-r lg:border-r-0" : ""}
                ${index < 4 ? "md:border-b lg:border-b-0" : ""}
                ${index < 3 ? "lg:border-b" : ""}
              `}
            >
              <div>
                <service.icon
                  className="h-14 w-14 text-foreground mb-8 stroke-[1]"
                />
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>
              <div>
                <Button variant="heroDark" size="sm" className="px-5">
                  Get started
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
