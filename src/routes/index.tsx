import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
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

function Method() {
  const steps = [
    {
      n: "01",
      title: "Une rencontre est confiée",
      text: "Vous nous présentez l'aîné dont vous souhaitez recueillir la mémoire, et le proche dont il portera le récit — un personnage à faire revivre.",
    },
    {
      n: "02",
      title: "Un transmetteur est désigné",
      text: "Nous adressons à l'aîné un transmetteur de notre réseau — le plus souvent un jeune étudiant de la même région. Un temps d'échange approfondi, pour écouter, questionner, tisser un lien entre les générations. La rencontre a lieu chez l'aîné, là où il se sent le plus à l'aise pour se souvenir.",
    },
    {
      n: "03",
      title: "La restitution est composée",
      text: "Le même transmetteur se charge de la restitution : un fascicule illustré, une version papier, un PDF, et une page web familiale dédiée au personnage raconté. L'ensemble est remis dans les quatre semaines suivant la rencontre.",
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
            Deux générations.<br />
            <em className="text-ember">Une mémoire sauvée.</em>
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
          <li className="flex gap-3"><span className="text-ember">—</span> Un temps d'échange approfondi avec un transmetteur</li>
          <li className="flex gap-3"><span className="text-ember">—</span> Un fascicule illustré, version papier</li>
          <li className="flex gap-3"><span className="text-ember">—</span> Une version PDF à partager</li>
          <li className="flex gap-3"><span className="text-ember">—</span> Une page web familiale dédiée</li>
          <li className="flex gap-3"><span className="text-ember">—</span> Déplacement inclus</li>
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
          Faire raconter un aîné à un transmetteur, c'est plus qu'une collecte : c'est
          une rencontre. Deux générations qui se parlent, s'écoutent, se reconnaissent.
          Le récit reste, mais le moment partagé compte tout autant.
        </p>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "Qu'est-ce qu'Ondarea exactement ?",
      a: "Ondarea propose d'aller à la rencontre de vos aînés pour interroger leur mémoire et collecter les souvenirs d'une vie. Notre format est orienté exclusivement vers la transmission : lors de chaque rencontre, nous évoquons une ou deux personnes de l'entourage de votre parent — ses propres parents, un oncle, une tante, un grand-parent. Nous avons la conviction qu'on parle mieux de ceux qui nous ont précédés que de soi-même. Et qu'en parlant de ces personnes disparues, on révèle toujours une part de soi.",
    },
    {
      q: "Pourquoi recueillir la mémoire des aînés maintenant ?",
      a: "Quand une personne disparaît, tout ce qui a constitué sa vie s'efface avec elle — la transmission n'est plus possible. Nous proposons de préserver cette mémoire pour la transmettre aux descendants, tant que cela est encore possible.",
    },
    {
      q: "En quoi est-ce différent d'un album photo ou d'un arbre généalogique ?",
      a: "Notre démarche est complémentaire de l'album photo. Nous rendons les arbres généalogiques vivants en racontant les vies de ceux qui nous ont précédés. Nous pensons aussi qu'un transmetteur extérieur, avec un regard neutre et bienveillant, est particulièrement bien placé pour collecter cette mémoire — là où un proche pourrait hésiter, ou orienter involontairement le récit.",
    },
    {
      q: "Comment se passe la rencontre avec l'aîné ?",
      a: "La rencontre a lieu sur le lieu de vie de votre parent, là où il se sent le plus à l'aise pour se souvenir. Confier ses souvenirs et évoquer ses proches n'est pas anodin — cela exige une confiance et une capacité d'écoute réelle. Nous croyons fermement que l'échange entre générations est bénéfique pour celui qui transmet comme pour celui qui reçoit.",
    },
    {
      q: "Qui conduit l'entretien ?",
      a: "Le plus souvent, nos transmetteurs sont de jeunes étudiants en master, vivant dans la même région que votre parent. La proximité géographique permet de créer une relation naturelle — et de limiter les frais de déplacement, inclus dans le forfait.",
    },
    {
      q: "Que se passe-t-il si l'aîné a du mal à se souvenir ?",
      a: "Nous ne cherchons pas à mettre l'aîné en difficulté. Il y a toujours des choses qui reviennent — parfois des événements qui paraissent anodins aujourd'hui, mais qui révèlent des parcours de vie très différents des nôtres. Nous guidons votre parent avec des questions ouvertes, puis plus précises au fil de l'entretien, comme le ferait un journaliste. Nous respectons les émotions qui peuvent ressortir, et nous prenons tout le temps nécessaire.",
    },
    {
      q: "Que contient exactement le fascicule ?",
      a: "Le fascicule contient une retranscription structurée de l'entretien, orientée vers la personne évoquée. Nous reprenons les formulations de l'aîné (en italique) et restituons les étapes de vie sur un ton sobre et journalistique. Nous collectons également tous les documents liés aux personnages évoqués. Le soin apporté à l'écriture et à la mise en page est au cœur de notre travail.",
    },
    {
      q: "Combien de temps après la rencontre le fascicule est-il remis ?",
      a: "Tous les éléments sont remis dans les quatre semaines suivant la rencontre : le fascicule papier, la transmission intégrale de l'entretien (audio ou vidéo selon votre souhait), et un lien vers une page web privée qui rassemble l'ensemble.",
    },
    {
      q: "Peut-on commander plusieurs récits pour une même famille ?",
      a: "Bien sûr. Nous pouvons intervenir pour rassembler plusieurs récits, chacun donnant lieu à une rencontre et une restitution dédiée, au tarif de 290 € par personnage.",
    },
    {
      q: "Pourquoi 290 € ?",
      a: "Ce forfait inclut la rencontre avec votre parent, le travail de restitution, de rédaction, de mise en page et d'édition, ainsi que le déplacement du transmetteur. C'est le prix d'un récit complet, soigné, transmissible.",
    },
  ];

  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-4xl px-6 py-20 md:py-24">
      <p className="mb-4 text-xs uppercase tracking-[0.25em] text-ember">
        <span className="rule mr-3" />
        Questions fréquentes
      </p>
      <h2 className="mb-12 font-serif text-4xl md:text-5xl">Pour aller plus loin</h2>
      <dl className="divide-y divide-border">
        {faqs.map((f, i) => (
          <div key={f.q}>
            <button
              className="flex w-full items-start justify-between gap-6 py-6 text-left"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <dt className="font-serif text-xl text-ink">{f.q}</dt>
              <span className="mt-1 shrink-0 font-serif text-xl text-ember">
                {open === i ? "−" : "+"}
              </span>
            </button>
            {open === i && (
              <dd className="pb-6 leading-relaxed text-muted-foreground max-w-2xl">
                {f.a}
              </dd>
            )}
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
