import { Button } from "@/components/ui/button";
import {
  Slack, Github, Trello, Figma, Chrome, Mail, Calendar, Cloud,
  Database, FileText, MessageSquare, Video, Music, Camera, Globe, Cpu,
  Smartphone, Monitor, Headphones, Wifi, Lock, Key, Bell, Search,
} from "lucide-react";

const icons = [
  Slack, Github, Trello, Figma, Chrome, Mail, Calendar, Cloud,
  Database, FileText, MessageSquare, Video, Music, Camera, Globe, Cpu,
  Smartphone, Monitor, Headphones, Wifi, Lock, Key, Bell, Search,
];

const IntegrationsSection = () => {
  return (
    <section className="bg-background py-24 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
        {/* Left content */}
        <div className="flex-1 max-w-lg">
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-6">
            Seamless integrations with your essential 5000+ tools
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed mb-10">
            Connect our AI with the apps you already use, including calendars,
            docs, messaging platforms, CRMs, and more.
          </p>
          <Button variant="heroDark" size="lg" className="px-8">
            Get started
          </Button>
        </div>

        {/* Right icon grid */}
        <div className="flex-1 grid grid-cols-4 gap-6 md:gap-8 max-w-md">
          {icons.map((Icon, i) => {
            const opacity = [0.9, 0.7, 0.5, 0.35][Math.floor(i / 8)] ?? 0.5;
            return (
              <div
                key={i}
                className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl border border-border bg-secondary/30 transition-colors hover:bg-secondary/60"
                style={{ opacity }}
              >
                <Icon className="h-7 w-7 text-foreground stroke-[1.2]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
