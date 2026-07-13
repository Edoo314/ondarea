import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Logo() {
  return (
    <Link to="/" aria-label="Egoligo, accueil" className="flex flex-col items-center">
      <span className="font-serif tracking-tight" style={{ fontStyle: "normal", fontSize: "2.2rem" }}>
        <span style={{ color: "var(--ink)" }}>e</span>
        <span style={{ color: "#3C3489" }}>g</span>
        <span style={{ color: "#993C1D", fontStyle: "italic" }}>o</span>
        <span style={{ color: "var(--ink)" }}>l</span>
        <span style={{ color: "#0F6E56" }}>i</span>
        <span style={{ color: "#3C3489" }}>g</span>
        <span style={{ color: "#993C1D" }}>o</span>
      </span>
      <span className="font-serif" style={{ color: "var(--muted-foreground)", fontSize: "11px", fontStyle: "italic", letterSpacing: "0.04em", marginTop: "-2px" }}>
        ceux qui nous relient
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Accueil" },
    { to: "/methode", label: "Notre méthode" },
    { to: "/offre-pro", label: "Offre Pro" },
    { to: "/faq", label: "Questions fréquentes" },
    { to: "/a-propos", label: "À propos" },
  ];

  const isActive = (to: string) => {
    if (to === "/") return location.pathname === "/";
    return location.pathname.startsWith(to);
  };

  return (
    <header className="border-b border-border/60 relative z-50">
      <div className="mx-auto flex max-w-6xl items-center gap-10 px-6 py-5">
        <Logo />

        <nav className="hidden items-center gap-8 text-sm md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className={`transition-colors ${isActive(l.to) ? "text-ink font-medium" : "text-muted-foreground hover:text-ink"}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex-1" />

        <Link to="/contact" className="hidden md:inline-block rounded-sm bg-ink px-4 py-2 text-sm font-medium text-paper transition-opacity hover:opacity-90">
          Nous contacter
        </Link>

        <button
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`block h-px w-6 bg-ink transition-transform duration-200 ${open ? "translate-y-[6px] rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-ink transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-ink transition-transform duration-200 ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-paper px-6 py-6 flex flex-col gap-5">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className={`text-sm transition-colors ${isActive(l.to) ? "text-ink font-medium" : "text-muted-foreground hover:text-ink"}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="mt-2 inline-block rounded-sm bg-ink px-4 py-3 text-center text-sm font-medium text-paper transition-opacity hover:opacity-90" onClick={() => setOpen(false)}>
            Nous contacter
          </Link>
        </div>
      )}
    </header>
  );
}
