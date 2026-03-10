import { Button } from "@/components/ui/button";

const navLinks = ["About", "Workflows", "Pricing", "Contact"];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-full border-2 border-foreground flex items-center justify-center">
          <div className="h-3 w-3 rounded-full bg-foreground" />
        </div>
        <span className="text-lg font-semibold tracking-tight text-foreground">AGENCY AI</span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {link}
          </a>
        ))}
      </div>

      <Button variant="nav" size="sm" className="px-5">
        Get started
      </Button>
    </nav>
  );
};

export default Navbar;
