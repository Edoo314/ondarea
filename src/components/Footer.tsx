import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-muted-foreground">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2">
            <span className="font-serif text-xl text-ink">
              ond<span className="text-ember">area</span>
            </span>
            <p className="text-xs uppercase tracking-[0.2em]">mémoires vivantes</p>
            <p className="mt-3">
              <a href="mailto:bonjour@ondarea.fr" className="hover:text-ink transition-colors">
                bonjour@ondarea.fr
              </a>
            </p>
            <p>1 rue Gentil Ader — 64100 Bayonne</p>
          </div>

          <nav className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.2em] text-ink mb-1">Navigation</p>
            <Link to="/" hash="demarche" className="hover:text-ink transition-colors">La démarche</Link>
            <Link to="/" hash="tarif" className="hover:text-ink transition-colors">Tarif</Link>
            <Link to="/offre-pro" className="hover:text-ink transition-colors">Offre Pro</Link>
            <Link to="/a-propos" className="hover:text-ink transition-colors">À propos</Link>
            <Link to="/contact" className="hover:text-ink transition-colors">Contact</Link>
          </nav>

          <nav className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-[0.2em] text-ink mb-1">Légal</p>
            <Link to="/mentions-legales" className="hover:text-ink transition-colors">Mentions légales</Link>
          </nav>
        </div>

        <div className="mt-10 border-t border-border/60 pt-6">
          <p>© {new Date().getFullYear()} Ondarea — Un patrimoine immatériel unique.</p>
        </div>
      </div>
    </footer>
  );
}
