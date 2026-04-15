import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Programa", href: "#programa" },
  { label: "Inversión", href: "#inversion" },
  { label: "Instructor", href: "#instructor" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="text-foreground font-bold text-lg tracking-tight">
          TAETT
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#inversion"
            className="text-sm font-semibold bg-accent text-accent-foreground px-5 py-2.5 rounded hover:opacity-90 transition-opacity"
          >
            Reservar cupo
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 pb-6 pt-4 space-y-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-muted-foreground hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#inversion"
            onClick={() => setOpen(false)}
            className="block text-center text-sm font-semibold bg-accent text-accent-foreground px-5 py-3 rounded"
          >
            Reservar cupo
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
