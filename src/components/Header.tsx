import { Link } from "@tanstack/react-router";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { to: "/", hash: "demarche", label: "La démarche" },
    { to: "/", hash: "tarif", label: "Tarif" },
    { to: "/offre-pro", label: "Offre Pro" },
    { to: "/a-propos", label: "À propos" },
  ];

  return (
    <header className="border-b border-border/60 relative z-50">
      <div className="mx-auto flex max-w-6xl items-center gap-10 px-6 py-5">
        <Link
          to="/"
          className="font-serif text-2xl tracking-tight text-ink"
          aria-label="Ondarea, accueil"
          onClick={() => setOpen(false)}
        >
          ond<span className="text-ember">area</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.to as any}
              hash={l.hash}
              className="hover:text-ink transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex-1" />

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="hidden md:inline-block rounded-sm bg-ink px-4 py-2 text-sm font-medium text-paper transition-opacity hover:opacity-90"
        >
          Nous contacter
        </Link>

        {/* Burger button — mobile only */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span
            className={`block h-px w-6 bg-ink transition-transform duration-200 ${open ? "translate-y-[6px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-ink transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-ink transition-transform duration-200 ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border/60 bg-paper px-6 py-6 flex flex-col gap-5">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.to as any}
              hash={l.hash}
              className="text-sm text-muted-foreground hover:text-ink transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-2 inline-block rounded-sm bg-ink px-4 py-3 text-center text-sm font-medium text-paper transition-opacity hover:opacity-90"
            onClick={() => setOpen(false)}
          >
            Nous contacter
          </Link>
        </div>
      )}
    </header>
  );
}
