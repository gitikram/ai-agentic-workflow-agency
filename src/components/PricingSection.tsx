import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "Perfect for small teams getting started with AI workflows.",
    features: [
      "Up to 5 agentic workflows",
      "1,000 AI task executions/mo",
      "Basic integrations",
      "Email support",
      "Analytics dashboard",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$149",
    period: "/month",
    description: "For growing businesses that need advanced automation at scale.",
    features: [
      "Unlimited workflows",
      "25,000 AI task executions/mo",
      "All 5000+ integrations",
      "Priority support",
      "Advanced analytics & reporting",
      "Custom AI model tuning",
      "Team collaboration tools",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large organizations with complex needs.",
    features: [
      "Everything in Professional",
      "Unlimited executions",
      "Dedicated account manager",
      "Custom SLA & uptime guarantee",
      "On-premise deployment option",
      "AI governance & compliance",
      "SSO & advanced security",
    ],
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <section className="bg-background py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the plan that fits your workflow. Scale as you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-8 flex flex-col justify-between transition-colors ${
                plan.highlighted
                  ? "border-accent bg-accent/5"
                  : "border-border bg-card"
              }`}
            >
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground text-sm">{plan.period}</span>
                  )}
                </div>
                <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-10">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-foreground">
                      <Check className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                variant={plan.highlighted ? "heroLight" : "heroDark"}
                size="lg"
                className="w-full"
              >
                {plan.name === "Enterprise" ? "Contact sales" : "Get started"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
