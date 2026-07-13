import { Header } from "../components/Header";
import { Footer } from "../components/Footer";


type Formula = {
  name: string;
  tagline: string;
  price: string;
  priceNote?: string;
  residents: string;
  workshops: string;
  items: string[];
  featured?: boolean;
};

const formulas: Formula[] = [
  {
    name: "Découverte",
    tagline: "Pour faire connaissance.",
    price: "Gratuit",
    residents: "1 résident",
    workshops: "2 ateliers (2 × 1h30)",
    items: [
      "5 exemplaires du fascicule illustré, version papier par biographie",
      "Une version PDF à partager",
      "Un espace numérique dédié aux personnalités transmises, qui alimente un arbre généalogique vivant. Les enregistrements de vos parents sont conservés dans cet espace dédié.",
      "Déplacements inclus",
    ],
  },
  {
    name: "Mémoires partagées",
    tagline: "Pour ouvrir la démarche à une première résidence.",
    price: "2 900 €",
    priceNote: "forfait",
    residents: "10 résidents",
    workshops: "20 ateliers",
    items: [
      "5 exemplaires du fascicule illustré, version papier par biographie",
      "Une version PDF à partager",
      "Un espace numérique dédié aux personnalités transmises, qui alimente un arbre généalogique vivant. Les enregistrements de vos parents sont conservés dans cet espace dédié.",
      "Déplacements inclus",
          ],
    featured: true,
  },
  {
    name: "Héritage Premium",
    tagline: "Un partenariat durable, pensé pour s'inscrire dans le temps.",
    price: "4 900 €",
    priceNote: "forfait",
    residents: "20 résidents",
    workshops: "40 ateliers",
    items: [
      "5 exemplaires du fascicule illustré, version papier par biographie",
      "Une version PDF à partager",
      "Un espace numérique dédié aux personnalités transmises, qui alimente un arbre généalogique vivant. Les enregistrements de vos parents sont conservés dans cet espace dédié.",
      "Déplacements inclus",
          ],
  },
];

export default function OffrePro() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />
      <main>
        <section className="border-b border-border/60">
          <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
            <p className="mb-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="rule mr-3" />
              Pour les maisons de retraite & EHPAD
            </p>
            <h1 className="font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl">
              Donner aux résidents
              <em className="text-ember"> le temps de raconter.</em>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
               Egoligo propose aux établissements une démarche personnalisée avec leurs résidents :
              des ateliers mémoriels sont conduits auprès des résidents, et les biographies sont
              remises directement à leurs familles. Nous pouvons mutualiser les ateliers dans les
              établissements, réduisant les frais pour chaque famille.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="grid gap-6 md:grid-cols-3">
            {formulas.map((f) => (
              <article key={f.name} className={`flex flex-col border p-8 ${f.featured ? "border-ink" : "border-ink/15"}`}>
                <header>
                  <h2 className="font-serif text-2xl text-ink">{f.name}</h2>
                  <p className="mt-2 text-sm italic text-muted-foreground">{f.tagline}</p>
                </header>
                <div className="mt-6 border-t border-ink/10 pt-6">
                  <p className="font-serif text-5xl text-ink">{f.price}</p>
                  {f.priceNote && (
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{f.priceNote}</p>
                  )}
                </div>
                <div className="mt-4 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  {f.residents} — {f.workshops}
                </div>
                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-ink flex-1">
                  {f.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-ember shrink-0">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:bonjour@ Egoligo.fr?subject=Formule%20${encodeURIComponent(f.name)}`}
                  className={`mt-8 inline-block w-full rounded-sm px-6 py-3 text-center text-sm font-medium transition-opacity ${f.featured ? "bg-ink text-paper hover:opacity-90" : "border border-ink/30 hover:border-ink"}`}
                >
                  Demander un devis
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-border/60 bg-cream">
          <div className="mx-auto max-w-4xl px-6 py-20 md:py-24">
            <h2 className="font-serif text-3xl md:text-4xl">
              Vous dirigez une résidence ou un EHPAD ?
            </h2>
            <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">
              Nous construisons avec vous un parcours adapté à vos résidents et à leurs familles. Échangeons sur votre établissement.
            </p>
            <a
              href="mailto:bonjour@ Egoligo.fr?subject=Partenariat%20—%20Maison%20de%20retraite"
              className="mt-10 inline-block rounded-sm bg-ink px-8 py-4 text-sm font-medium text-paper transition-opacity hover:opacity-90"
            >
              bonjour@ Egoligo.fr
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
