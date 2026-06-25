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
        <Manifesto />
        <Objectives />
        <Method />
        <Features />
        <Deliverable />
        <Pricing />
        <ProTeaser />
        <Transgenerational />
        <FAQ />
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
            <a
              href="#demarche"
              className="rounded-sm border border-ink/20 px-6 py-3 text-sm font-medium transition-colors hover:border-ink"
            >
              Découvrir la démarche
            </a>
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

function Manifesto() {
  return (
    <section id="demarche" className="border-y border-border/60 bg-cream">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-24">
        <p className="mb-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span className="rule mr-3" />
          Notre mission
        </p>
        <p className="font-serif text-3xl leading-[1.3] md:text-4xl">
          Collecter, organiser et archiver les histoires familiales{" "}
          <span className="text-ember">pour les transmettre</span> aux nouvelles générations.
        </p>
        <p className="mt-10 max-w-2xl italic text-muted-foreground leading-relaxed">
          « L'essentiel de notre histoire nous est inconnu, et le restera à
          tout jamais. Sauvegardons la mémoire avant qu'il ne soit trop tard. »
        </p>
      </div>
    </section>
  );
}

function Objectives() {
  const items = [
    {
      n: "Sauvegarder",
      title: "Les mémoires individuelles",
      text: "Recueillir les biographies des personnalités qui ont marqué nos vies — un parent, un grand-parent, un proche — ou raconter sa propre histoire.",
    },
    {
      n: "Valoriser",
      title: "Les archives familiales",
      text: "Photos, lettres, vidéos, documents : autant de fragments qui retrouvent leur sens lorsqu'ils sont rassemblés autour d'un récit.",
    },
    {
      n: "Honorer",
      title: "Les récits qui nous inspirent",
      text: "Faire de l'arbre généalogique un lieu vivant, où chaque nom porte une voix, des anecdotes, un visage.",
    },
  ];
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <div className="mb-16 max-w-3xl">
        <p className="mb-4 text-xs uppercase tracking-[0.25em] text-ember">
          <span className="rule mr-3" />
          Nos objectifs
        </p>
        <h2 className="font-serif text-4xl leading-tight md:text-5xl">
          Un patrimoine mémoriel familial,<br />
          <em className="text-ember">privé et durable.</em>
        </h2>
      </div>
      <div className="grid gap-10 md:grid-cols-3">
        {items.map((it) => (
          <div key={it.n} className="border-t border-ink/20 pt-6">
            <p className="text-xs uppercase tracking-[0.2em] text-ember">{it.n}</p>
            <h3 className="mt-3 font-serif text-2xl">{it.title}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{it.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Features() {
  const features = [
    { title: "Rédaction des biographies", text: "Synthèse des grands moments de vie, mise en forme avec soin." },
    { title: "Enregistrement", text: "Transmission orale des récits, conservée telle qu'elle a été dite." },
    { title: "Archivage", text: "Photos, vidéos, lettres, témoignages, archives personnelles." },
    { title: "Arbres généalogiques simplifiés", text: "Une vue d'ensemble qui relie les récits entre eux." },
    { title: "Gestion collaborative", text: "Chaque famille contribue, enrichit, complète à plusieurs voix." },
    { title: "Droits par famille", text: "Propriétaire, contributeur, lecteur invité — chacun à sa place." },
    { title: "Statut public ou privé", text: "Vous décidez de ce qui se partage, et de ce qui reste intime." },
    { title: "Tirage papier", text: "Les biographies peuvent être imprimées et transmises en mains propres." },
  ];
  return (
    <section id="fonctionnalites" className="border-y border-border/60 bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-ember">
            <span className="rule mr-3" />
            La plateforme
          </p>
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">
            Un espace numérique<br />
            <em className="text-ember">pour faire vivre les mémoires.</em>
          </h2>
          <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">
            Au-delà du fascicule, Ondarea propose un espace en ligne dédié à
            votre famille, conçu pour rassembler, conserver et transmettre.
          </p>
        </div>
        <ul className="grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <li key={f.title} className="border-t border-ink/15 pt-4">
              <h3 className="font-serif text-lg text-ink">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProTeaser() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 md:py-24">
      <div className="grid gap-10 border border-ink/15 bg-paper p-10 md:grid-cols-[2fr_1fr] md:items-center md:p-14">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-ember">
            <span className="rule mr-3" />
            Pour les établissements
          </p>
          <h2 className="font-serif text-3xl leading-tight md:text-4xl">
            Une offre dédiée aux maisons de retraite et aux EHPAD.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Ateliers mémoriels conduits auprès des résidents, livrets remis
            aux familles : trois formules pour s'adapter à chaque
            établissement.
          </p>
        </div>
        <Link
          to="/offre-pro"
          className="inline-block rounded-sm border border-ink px-6 py-3 text-center text-sm font-medium transition-colors hover:bg-ink hover:text-paper md:justify-self-end"
        >
          Découvrir l'offre Pro →
        </Link>
      </div>
    </section>
  );
}

function Method() {
  const steps = [
    {
      n: "01",
      title: "Une rencontre est confiée",
      text: "Vous nous présentez l'ancien dont vous souhaitez recueillir la mémoire, et le proche dont il portera le récit — un personnage à faire revivre.",
    },
    {
      n: "02",
      title: "Un accompagnant est désigné",
      text: "Nous adressons à l'aîné un accompagnant. Trois heures ensemble, pour écouter, questionner, prendre des notes — et tisser un lien entre les générations.",
    },
    {
      n: "03",
      title: "La restitution est composée",
      text: "Le même accompagnant se charge de la restitution : un fascicule illustré, une version papier, un PDF, et une page web familiale dédiée au personnage raconté.",
    },
  ];

  return (
    <section id="methode" className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <div className="grid gap-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="mb-4 text-xs uppercase tracking-[0.25em] text-ember">
            <span className="rule mr-3" />
            La méthode
          </p>
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">
            Trois heures.<br />
            Deux générations.<br />
            <em className="text-ember">Une mémoire sauvée.</em>
          </h2>
          <img
            src={encounterImg}
            alt="Accompagnant et homme âgé en conversation autour d'une table de cuisine"
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
    { label: "Un fascicule imprimé", text: "Illustré des photographies qui existent, façonné comme un petit livre à offrir et à transmettre." },
    { label: "Une version PDF", text: "À partager librement avec l'ensemble de la famille, où qu'elle se trouve." },
    { label: "Une page web familiale", text: "Un lieu numérique dédié au personnage raconté, qui rejoindra l'arbre généalogique des vôtres." },
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

function Pricing() {
  return (
    <section id="tarif" className="mx-auto max-w-4xl px-6 py-20 md:py-24">
      <p className="mb-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
        <span className="rule mr-3" />
        Tarif
      </p>
      <h2 className="font-serif text-4xl md:text-5xl">Un personnage, un récit complet.</h2>

      <div className="mt-12 max-w-md border border-ink/15 bg-cream p-10">
        <p className="font-serif text-6xl text-ink">290 €</p>
        <p className="mt-2 text-sm uppercase tracking-[0.2em] text-muted-foreground">
          par personnage raconté
        </p>
        <ul className="mt-8 space-y-3 text-left text-sm leading-relaxed text-ink">
          <li className="flex gap-3"><span className="text-ember">—</span> Une rencontre de 3 heures, avec un accompagnant</li>
          <li className="flex gap-3"><span className="text-ember">—</span> Un fascicule illustré, version papier</li>
          <li className="flex gap-3"><span className="text-ember">—</span> Une version PDF à partager</li>
          <li className="flex gap-3"><span className="text-ember">—</span> Une page web familiale dédiée</li>
        </ul>
        <Link
          to="/contact"
          className="mt-10 inline-block w-full rounded-sm bg-ink px-6 py-3 text-center text-sm font-medium text-paper transition-opacity hover:opacity-90"
        >
          Confier un personnage
        </Link>
      </div>
    </section>
  );
}

function Transgenerational() {
  return (
    <section className="border-y border-border/60 bg-cream">
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center md:py-24">
        <h2 className="font-serif text-4xl leading-tight md:text-5xl">
          Au-delà du récit,<br /><em className="text-ember">un lien.</em>
        </h2>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Faire raconter un ancien à un accompagnant, c'est plus qu'une collecte : c'est
          une rencontre. Deux générations qui se parlent, s'écoutent, se reconnaissent.
          Le récit reste, mais le moment partagé compte tout autant.
        </p>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "Qui vient à la rencontre de l'aîné ?", a: "Un accompagnant sélectionné par Ondarea, sensibilisé à l'écoute et à la collecte de récits. Le même accompagnant accompagne la rencontre et compose la restitution." },
    { q: "Que se passe-t-il s'il n'y a pas de photographies ?", a: "Le fascicule reste illustré par les éléments disponibles — documents, lieux, manuscrits — et reste pleinement habité par le récit lui-même." },
    { q: "Peut-on raconter plusieurs personnages ?", a: "Oui. Chaque personnage donne lieu à une rencontre et à une restitution dédiée, au tarif de 290 € par personnage." },
    { q: "Où se déroule la rencontre ?", a: "Chez l'aîné, dans le lieu où il se sent le plus à l'aise pour se souvenir et raconter." },
  ];
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 md:py-24">
      <p className="mb-4 text-xs uppercase tracking-[0.25em] text-ember">
        <span className="rule mr-3" />
        Questions
      </p>
      <h2 className="mb-12 font-serif text-4xl md:text-5xl">Pour aller plus loin</h2>
      <dl className="divide-y divide-border">
        {faqs.map((f) => (
          <div key={f.q} className="py-6">
            <dt className="font-serif text-xl text-ink">{f.q}</dt>
            <dd className="mt-2 leading-relaxed text-muted-foreground">{f.a}</dd>
          </div>
        ))}
      </dl>
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
          Quel est le premier personnage<br />dont vous souhaitez conserver le souvenir ?
        </h2>
        <p className="mt-6 max-w-xl text-paper/70">
          Écrivez-nous le nom de l'aîné que nous rencontrerons, et celui du proche
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

