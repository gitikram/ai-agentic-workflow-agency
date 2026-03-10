import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Agency AI transformed our customer support pipeline. What took a team of 10 now runs autonomously with better results.",
    name: "Sarah Chen",
    role: "VP of Operations, TechScale",
    stars: 5,
  },
  {
    quote:
      "The agentic workflows are a game-changer. We reduced our data processing time by 80% in the first month.",
    name: "Marcus Rivera",
    role: "CTO, DataFlow Inc.",
    stars: 5,
  },
  {
    quote:
      "Integration was seamless — connected all our tools in under a day. The AI adapts to our processes, not the other way around.",
    name: "Emily Nakamura",
    role: "Head of Engineering, Nextera",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-background py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4">
            Trusted by innovators
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See how teams are using Agency AI to automate complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-border bg-card p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="text-foreground text-sm leading-relaxed mb-8">
                  "{t.quote}"
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
