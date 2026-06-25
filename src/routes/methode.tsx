import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/methode")({
  head: () => ({
    meta: [
      { title: "Notre méthode — Ondarea" },
      { name: "description", content: "Comment Ondarea recueille et retranscrit les mémoires familiales. Une démarche rigoureuse, bienveillante, au service de la transmission." },
    ],
  }),
  component: Methode,
});

function Methode() {
  const etapes = [
    {
      n: "01",
      title: "Une rencontre préparée",
      text: "Avant chaque entretien, le transmetteur de mémoire prend connaissance du contexte familial transmis par la famille. Il prépare un fil conducteur souple, organisé autour des grandes périodes de vie de la personnalité évoquée — sans chercher à imposer un récit, mais pour ne pas se perdre.",
    },
    {
      n: "02",
      title: "Un entretien en plusieurs temps",
      text: "L'échange s'organise naturellement autour des grandes étapes d'une vie : l'enfance et les lieux, la personnalité et le caractère, les goûts et les passions, la famille et les proches, la vie professionnelle, et les anecdotes qui révèlent une façon d'être au monde. Le transmetteur alterne questions ouvertes et relances plus précises, à l'écoute de ce qui émerge.",
    },
    {
      n: "03",
      title: "Une retranscription soignée",
      text: "L'entretien est enregistré (audio) et retranscrit avec soin. Le transmetteur rédige ensuite une biographie structurée, dans un ton sobre et journalistique, en restituant la voix et les formulations de l'aîné. La mise en page du fascicule fait l'objet d'un travail éditorial attentif.",
    },
    {
      n: "04",
      title: "Une relecture et une validation",
      text: "Avant remise, chaque fascicule est relu et validé par l'équipe Ondarea. La famille peut signaler des corrections ou des compléments. Le livrable final — fascicule papier, PDF et espace numérique — est remis dans les quatre semaines suivant la rencontre. L'enregistrement audio sera également disponible sur la plateforme, dans votre espace privé.",
    },
  ];

  const valeurs = [
    { titre: "Bienveillance", texte: "L'aîné n'est jamais mis en difficulté. Le rythme de l'échange s'adapte à lui, pas l'inverse." },
    { titre: "Neutralité", texte: "Le transmetteur n'oriente pas le récit. Il recueille, il écoute, il restitue fidèlement." },
    { titre: "Rigueur", texte: "Chaque biographie suit une structure claire et fait l'objet d'une relecture éditoriale." },
    { titre: "Discrétion", texte: "Les souvenirs confiés restent la propriété exclusive de la famille. Rien n'est partagé sans accord explicite." },
  ];

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />

      <main>
        <section className="border-b border-border/60">
          <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
            <p className="mb-6 text-xs uppercase tracking-[0.25em] text-ember">
              <span className="rule mr-3" />
              Voici comment nous travaillons
            </p>
            <h1 className="font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl">
              Une démarche rigoureuse,<br />
              <em className="text-ember">au service de la mémoire.</em>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Recueillir les souvenirs d'un aîné est un exercice délicat. Il exige de l'écoute, de la méthode, et un vrai soin dans la restitution. Voici comment nos transmetteurs de mémoire conduisent chaque mission.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="mb-4 text-xs uppercase tracking-[0.25em] text-ember">
                <span className="rule mr-3" />
                Les étapes
              </p>
              <h2 className="font-serif text-4xl leading-tight md:text-5xl">
                Du premier échange<br />
                <em className="text-ember">au fascicule remis.</em>
              </h2>
            </div>
            <ol className="md:col-span-8 md:pl-12">
              {etapes.map((s, i) => (
                <li key={s.n} className={`grid grid-cols-[auto_1fr] gap-8 py-10 ${i !== etapes.length - 1 ? "border-b border-border" : ""}`}>
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

        <section className="border-y border-border/60 bg-cream">
          <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="rule mr-3" />
              Nos engagements
            </p>
            <h2 className="mb-12 font-serif text-4xl md:text-5xl">Ce qui guide chaque mission.</h2>
            <div className="grid gap-10 md:grid-cols-2">
              {valeurs.map((v) => (
                <div key={v.titre} className="border-t border-ink/20 pt-6">
                  <h3 className="font-serif text-2xl text-ink">{v.titre}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{v.texte}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ink text-paper">
          <div className="mx-auto max-w-3xl px-6 py-20 md:py-24">
            <p className="mb-4 text-xs uppercase tracking-[0.25em]" style={{ color: "var(--ember-soft)" }}>
              <span className="rule mr-3" style={{ backgroundColor: "var(--ember-soft)" }} />
              Commencer
            </p>
            <h2 className="font-serif text-4xl text-paper md:text-5xl">
              Confier un parent à<br />un transmetteur de mémoire.
            </h2>
            <p className="mt-6 max-w-xl text-paper/70">
              Nous revenons vers vous sous 48 heures pour organiser la rencontre.
            </p>
            <Link to="/contact" className="mt-10 inline-block rounded-sm bg-paper px-8 py-4 text-sm font-medium text-ink transition-opacity hover:opacity-90">
              Nous contacter →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
