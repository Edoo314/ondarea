import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";


export default function APropos() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />

      <main className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <p className="mb-6 text-xs uppercase tracking-[0.25em] text-ember">
          <span className="rule mr-3" />
          À propos
        </p>

        <h1 className="font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl">
          Edouard de Dreuzy.
        </h1>

        <div className="mt-16 grid gap-16 md:grid-cols-[1fr_2fr]">
          {/* Placeholder photo */}
          <div className="aspect-[3/4] w-full bg-cream border border-ink/10 flex items-end p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Fondateur, egoligo
            </p>
          </div>

          <div className="space-y-8">
            <p className="font-serif text-2xl leading-relaxed text-ink">
              « Les petites histoires qui fondent les familles méritent d'être
              sauvegardées autant que les grandes. »
            </p>

            <div className="space-y-5 leading-relaxed text-muted-foreground">
              <p>
                Entrepreneur passionné par l'Histoire, j'ai fondé egoligo avec
                une conviction simple : les récits que portent nos aînés sur
                ceux qu'ils ont aimés sont un patrimoine irremplaçable — et
                ils disparaissent avec eux.
              </p>
              <p>
                egoligo est né de ce constat. Aller collecter ces mémoires,
                les mettre en forme avec soin, les transmettre aux générations
                suivantes — c'est ce que nous faisons, rencontre après
                rencontre.
              </p>
              <p>
                Chaque famille a ses personnages, ses anecdotes, ses silences.
                Notre rôle est de les écouter, de les raconter, et de les
                rendre vivants pour ceux qui n'ont pas eu la chance de les
                connaître.
              </p>
            </div>

            <div className="border-t border-ink/15 pt-8">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Contact
              </p>
              <a
                href="mailto:bonjour@egoligo.fr"
                className="text-ink underline-offset-4 hover:underline"
              >
                bonjour@egoligo.fr
              </a>
            </div>

            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-block rounded-sm bg-ink px-6 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-90"
              >
                Confier un récit →
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
