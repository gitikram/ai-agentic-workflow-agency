import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

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
  {
    quote:
      "We went from manual reporting to fully autonomous insights in a week. The ROI was immediate and measurable.",
    name: "David Park",
    role: "CEO, Momentum Labs",
    stars: 5,
  },
  {
    quote:
      "The adaptive AI learns our patterns and gets smarter every day. It's like having a brilliant analyst on call 24/7.",
    name: "Lisa Fernandez",
    role: "Director of Strategy, Uplift Co.",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  // Show 3 cards at a time on md+, 1 on mobile
  const visibleCount = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleIndices = () => {
    return Array.from({ length: visibleCount }, (_, i) => (current + i) % testimonials.length);
  };

  const visibleIndices = getVisibleIndices();

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

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {visibleIndices.map((idx) => {
                const t = testimonials[idx];
                return (
                  <motion.div
                    key={`${idx}-${current}`}
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -80 }}
                    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                    className="rounded-2xl border border-border bg-card p-8 flex flex-col justify-between min-h-[260px]"
                  >
                    <div>
                      <div className="flex gap-1 mb-6">
                        {Array.from({ length: t.stars }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
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
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? "w-6 bg-accent" : "w-2 bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
