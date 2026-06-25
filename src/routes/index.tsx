import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-hands.jpg";
import encounterImg from "@/assets/encounter.jpg";
import fasciculeImg from "@/assets/fascicule.jpg";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ondarea — Capter la mémoire des anciens avant qu'elle ne disparaisse" },
      { name: "description", content: "Ondarea recueille les histoires que les aînés portent sur leurs proches. Un fascicule illustré, une page web familiale, et du lien entre les générations." },
      { property: "og:title", content: "Ondarea — Un patrimoine immatériel unique" },
      { property: "og:description", content: "Recueillir, transmettre, faire vivre la mémoire familiale." },
      { property: "og:image", content: heroImg },
      { property: "twitter:image", content: heroImg },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />
      <main>
        <Hero />
        <Method />
        <Deliverable />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-7">
          <p className="mb-6 text-xs uppercase tracking-[0.25em] text-ember">
            <span className="rule mr-3" />
            Un patrimoine immatériel unique
          </p>
          <h1 className="font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl">
            Préservons<br />
            <span className="relative inline-block">
              ce qui nous <em className="text-ember">lie.</em>
              <svg
                aria-hidden="true"
                viewBox="0 0 320 18"
                preserveAspectRatio="none"
                className="absolute -bottom-3 left-0 h-3 w-full"
              >
                <path
                  d="M2 10 C 80 4, 180 4, 260 8 S 310 16, 318 14"
                  fill="none"
                  stroke="var(--ink)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
          <p className="mt-10 max-w-xl font-serif text-xl italic leading-snug text-ink">
            Chaque vie recèle une histoire qui mérite d'être entendue.
          </p>
          <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
            Ondarea recueille auprès des aînés les récits des êtres qu'ils ont aimés —
            un parent, un frère, un grand-parent, un oncle, une tante. Pour que les
            arbres généalogiques cessent d'être des listes de noms, et redeviennent
            des mémoires vivantes.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="rounded-sm bg-ink px-6 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-90"
            >
              Confier un récit
            </Link>
          </div>
        </div>
        <div className="md:col-span-5">
          <figure className="relative">
            <img
              src={heroImg}
              alt="Mains d'une personne âgée tenant d'anciennes photographies de famille"
              width={1024}
              height={1024}
              className="aspect-[4/5] w-full object-cover shadow-[0_30px_60px_-30px_rgba(60,30,10,0.35)]"
            />
            <figcaption className="absolute -bottom-4 -left-4 max-w-[14rem] bg-paper px-4 py-3 font-serif italic text-sm leading-snug text-ink shadow-sm">
              « Ce que les anciens emportent, personne ne pourra plus le raconter. »
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function Method() {
  const steps = [
    {
      n: "01",
      title: "Vous nous confiez un parent.",
      text: "Vous nous mettez en relation avec votre parent dont vous souhaitez recueillir la mémoire. Vous décidez ensemble la personnalité dont il souhaite porter le récit. Il peut s'agir d'une personnalité disparue de votre famille que vous souhaitez mieux faire connaître aux futures générations.",
    },
    {
      n: "02",
      title: "Un transmetteur est désigné.",
      text: "Nous adressons à l'aîné un transmetteur de notre réseau — le plus souvent un jeune étudiant de la même région. Un temps d'échange approfondi, pour écouter, questionner, tisser un lien entre les générations. La rencontre a lieu chez l'aîné, là où il se sent le plus à l'aise pour se souvenir.",
    },
    {
      n: "03",
      title: "La restitution est rédigée et publiée.",
      text: "Le même transmetteur se charge de la restitution : un fascicule illustré, une version papier, un PDF, et un espace numérique dédié aux personnalités transmises, qui alimente un arbre généalogique vivant. L'ensemble est remis dans les quatre semaines suivant la rencontre.",
    },
  ];

  return (
    <section id="demarche" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <div className="grid gap-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-ember">
            <span className="rule mr-3" />
            La démarche
          </p>
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">
            Trois générations.<br />
            <em className="text-ember"> Une mémoire sauvée.</em>
          </h2>
          <img
            src={encounterImg}
            alt="Transmetteur et homme âgé en conversation autour d'une table de cuisine"
            width={1024}
            height={1024}
            loading="lazy"
            className="mt-10 aspect-square w-full object-cover"
          />
        </div>
        <ol className="md:col-span-8 md:pl-12">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className={`grid grid-cols-[auto_1fr] gap-8 py-10 ${i !== steps.length - 1 ? "border-b border-border" : ""}`}
            >
              <span className="font-serif text-3xl text-ember">{s.n}</span>
              <div>
                <h3 className="font-serif text-2xl">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Deliverable() {
  const items = [
    { label: "Un fascicule imprimé", text: "Illustré des photographies qui existent, façonné comme un petit livre à offrir et à transmettre. Le texte reprend les formulations de l'aîné, rédigées sur un ton sobre et journalistique." },
    { label: "Une version PDF", text: "À partager librement avec l'ensemble de la famille, où qu'elle se trouve." },
    { label: "Un espace numérique dédié", text: "Un espace dédié aux personnalités transmises, qui alimente un arbre généalogique vivant." },
  ];
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-20 md:grid-cols-2 md:py-24 md:items-center">
        <img
          src={fasciculeImg}
          alt="Fascicule de mémoire ouvert montrant typographie et photographie ancienne"
          width={1024}
          height={1024}
          loading="lazy"
          className="aspect-square w-full object-cover"
        />
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-ember-soft" style={{ color: "var(--ember-soft)" }}>
            <span className="rule mr-3" style={{ backgroundColor: "var(--ember-soft)" }} />
            La restitution
          </p>
          <h2 className="font-serif text-4xl text-paper md:text-5xl">
            Un objet qui se garde,<br />une page qui se partage.
          </h2>
          <ul className="mt-10 space-y-6">
            {items.map((it) => (
              <li key={it.label} className="border-t border-paper/15 pt-5">
                <h3 className="font-serif text-xl text-paper">{it.label}</h3>
                <p className="mt-2 text-paper/70 leading-relaxed">{it.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const offerItems = [
  "Un temps d'échange approfondi avec un transmetteur",
  "Un fascicule illustré, version papier",
  "Une version PDF à partager",
  "Un espace numérique dédié aux personnalités transmises",
  "Déplacements inclus",
];

function Pricing() {
  const offers = [
    {
      price: "290 €",
      label: "1 personnalité",
      badge: null,
      featured: false,
      extra: [],
      cta: "Confier une personnalité",
    },
    {
      price: "490 €",
      label: "2 personnalités",
      badge: "économisez 90 €",
      featured: true,
      extra: ["2 fascicules, 2 espaces numériques dédiés"],
      cta: "Confier deux personnalités",
    },
    {
      price: "990 €",
      label: "5 personnalités",
      badge: "économisez 460 €",
      featured: false,
      extra: ["5 fascicules, 5 espaces numériques dédiés"],
      cta: "Confier cinq personnalités",
    },
  ];

  return (
    <section id="tarif" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <p className="mb-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
        <span className="rule mr-3" />
        Tarif
      </p>
      <h2 className="font-serif text-4xl md:text-5xl">Pour chaque personnalité, un récit complet.</h2>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {offers.map((o) => (
          <div
            key={o.price}
            className={`flex flex-col p-8 relative ${o.featured ? "border border-ink bg-cream" : "border border-ink/15 bg-cream"}`}
          >
            {o.badge && (
              <span className="absolute top-4 right-4 text-xs uppercase tracking-[0.15em] text-ember">
                {o.badge}
              </span>
            )}
            <p className="font-serif text-5xl text-ink">{o.price}</p>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-muted-foreground">
              {o.label}
            </p>
            <ul className="mt-8 space-y-3 text-left text-sm leading-relaxed text-ink flex-1">
              {offerItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-ember shrink-0">—</span> {item}
                </li>
              ))}
              {o.extra.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-ember shrink-0">—</span> {item}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className={`mt-10 inline-block w-full rounded-sm px-6 py-3 text-center text-sm font-medium transition-opacity ${
                o.featured
                  ? "bg-ink text-paper hover:opacity-90"
                  : "border border-ink/30 hover:border-ink"
              }`}
            >
              {o.cta}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="bg-ink text-paper">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-24">
        <p className="mb-4 text-xs uppercase tracking-[0.25em]" style={{ color: "var(--ember-soft)" }}>
          <span className="rule mr-3" style={{ backgroundColor: "var(--ember-soft)" }} />
          Commencer
        </p>
        <h2 className="font-serif text-4xl text-paper md:text-5xl">
          Quelle est la première personnalité<br />dont vous souhaitez conserver le souvenir ?
        </h2>
        <p className="mt-6 max-w-xl text-paper/70">
          Écrivez-nous le nom de l'aîné que nous rencontrerons, et celui de la personnalité
          dont il portera la mémoire. Nous revenons vers vous sous quelques jours.
        </p>
        <Link
          to="/contact"
          className="mt-10 inline-block rounded-sm bg-paper px-8 py-4 text-sm font-medium text-ink transition-opacity hover:opacity-90"
        >
          Confier un récit →
        </Link>
      </div>
    </section>
  );
}
