import { Link } from "react-router-dom";
import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";


export default function FAQ() {
  const faqs = [
    {
      q: "Qu'est-ce qu'Egoligo exactement ?",
      a: "Egoligo propose d'aller à la rencontre de vos aînés pour interroger leur mémoire et collecter les souvenirs d'une vie. Notre format est orienté exclusivement vers la transmission : lors de chaque rencontre, nous évoquons une ou deux personnalités de l'entourage de votre parent — ses propres parents, un oncle, une tante, un grand-parent. Nous avons la conviction qu'on parle mieux de ceux qui nous ont précédés que de soi-même. Et qu'en parlant de ces personnalités disparues, on révèle toujours une part de soi. Egoligo signifie « je lie » ou « je relie » en latin. Notre ambition est de relier les générations grâce au fil de la parole et du témoignage.",
    },
    {
      q: "Pourquoi recueillir la mémoire des aînés maintenant ?",
      a: "Quand une personne disparaît, tout ce qui a constitué sa vie s'efface avec elle — la transmission n'est plus possible. Nous proposons de préserver cette mémoire pour la transmettre aux descendants, tant que cela est encore possible.",
    },
    {
      q: "En quoi est-ce différent d'un album photo ou d'un arbre généalogique ?",
      a: "Notre démarche est complémentaire de l'album photo. Nous rendons les arbres généalogiques vivants en racontant les vies de ceux qui nous ont précédés. Nous pensons aussi qu'un transmetteur de mémoire extérieur, avec un regard neutre et bienveillant, est particulièrement bien placé pour collecter cette mémoire — là où un proche pourrait hésiter, ou orienter involontairement le récit.",
    },
    {
      q: "Comment se passe la rencontre avec l'aîné ?",
      a: "La rencontre a lieu chez votre parent, là où il sera le plus confortable pour cet échange. Confier ses souvenirs et évoquer ses proches n'est pas anodin — cela exige une confiance et une capacité d'écoute réelle. Nous croyons fermement que l'échange entre générations est bénéfique pour celui qui transmet comme pour celui qui reçoit.",
    },
    {
      q: "Qui conduit l'entretien ?",
      a: "Une personne de notre réseau va jouer le rôle de transmetteur de mémoire. Les déplacements sont inclus dans le forfait. Ce sont nos transmetteurs de mémoire.",
    },
    {
      q: "Que se passe-t-il si l'aîné a du mal à se souvenir ?",
      a: "Nous ne cherchons pas à mettre l'aîné en difficulté. Il y a toujours des choses qui reviennent — parfois des événements qui paraissent anodins aujourd'hui, mais qui révèlent des parcours de vie très différents des nôtres. Nous guidons votre parent avec des questions ouvertes, puis plus précises au fil de l'entretien, comme le ferait un journaliste. Nous respectons les émotions qui peuvent ressortir, et nous prenons tout le temps nécessaire.",
    },
    {
      q: "Que contient exactement le fascicule ?",
      a: "Le fascicule contient une retranscription structurée de l'entretien, orientée vers la personnalité évoquée. Nous reprenons les formulations de l'aîné (en italique) et restituons les étapes de vie sur un ton sobre et journalistique. Nous collectons également tous les documents liés aux personnalités évoquées. Le soin apporté à l'écriture et à la mise en page est au cœur de notre travail.",
    },
    {
      q: "Combien de temps après la rencontre le fascicule est-il remis ?",
      a: "Tous les éléments sont remis dans les quatre semaines suivant la rencontre : le fascicule papier, la transmission intégrale de l'entretien (audio ou vidéo selon votre souhait), et un lien vers un espace numérique privé qui rassemble l'ensemble.",
    },
    {
      q: "Peut-on commander plusieurs récits pour une même famille ?",
      a: "Bien sûr. Nous proposons des forfaits pour 2 personnalités (680 €) ou 5 personnalités (1 590 €), chacun donnant lieu à une rencontre et une restitution dédiée.",
    },
    {
      q: "Pourquoi 390 € ?",
      a: "Ce forfait inclut la rencontre avec votre parent, le travail de restitution, de rédaction, de mise en page et d'édition, ainsi que les déplacements du transmetteur de mémoire. C'est le prix d'un récit complet, soigné, transmissible.",
    },
  ];

  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />
      <main className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <p className="mb-6 text-xs uppercase tracking-[0.25em] text-ember">
          <span className="rule mr-3" />
          Questions fréquentes
        </p>
        <h1 className="mb-14 font-serif text-5xl leading-tight md:text-6xl">
          Pour aller <em className="text-ember">plus loin.</em>
        </h1>
        <dl className="divide-y divide-border">
          {faqs.map((f, i) => (
            <div key={f.q}>
              <button
                className="flex w-full items-start justify-between gap-6 py-6 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <dt className="font-serif text-xl text-ink">{f.q}</dt>
                <span className="mt-1 shrink-0 font-serif text-xl text-ember">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && (
                <dd className="pb-6 leading-relaxed text-muted-foreground max-w-2xl">{f.a}</dd>
              )}
            </div>
          ))}
        </dl>
        <div className="mt-16 border-t border-border/60 pt-10">
          <p className="text-muted-foreground">Une question non listée ?</p>
          <Link to="/contact" className="mt-4 inline-block rounded-sm bg-ink px-6 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-90">
            Nous écrire →
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
