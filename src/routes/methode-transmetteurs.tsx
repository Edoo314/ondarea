import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/methode-transmetteurs")({
  head: () => ({
    meta: [
      { title: "Guide des transmetteurs — Ondarea" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: MethotdeTransmetteurs,
});

function MethotdeTransmetteurs() {
  const phases = [
    {
      titre: "Avant la rencontre",
      items: [
        "Lire attentivement le contexte transmis par la famille : qui est l'aîné, quelle personnalité va-t-il évoquer, quel lien les unit.",
        "Préparer un fil conducteur souple organisé autour des grandes périodes de vie. Ne pas chercher à tout couvrir — mieux vaut approfondir que survoler.",
        "Prévoir l'enregistrement audio (smartphone suffisant). Tester l'appareil avant. S'assurer que la batterie est chargée.",
        "Choisir un lieu calme, chez l'aîné, là où il sera le plus à l'aise.",
      ],
    },
    {
      titre: "L'entretien — structure et posture",
      items: [
        "Commencer par se présenter chaleureusement, expliquer la démarche, rassurer sur le caractère informel de l'échange. L'aîné n'a pas à \"performer\".",
        "Démarrer avec des questions très ouvertes : \"Parlez-moi de [prénom]…\", \"Comment le décrieriez-vous en quelques mots ?\"",
        "Laisser l'aîné aller où il veut dans un premier temps. Ne pas interrompre. Écouter vraiment.",
        "Relancer avec des questions plus précises au fil de l'échange : \"Vous dites qu'il était drôle — vous avez un souvenir précis ?\", \"C'était quand exactement ?\"",
        "Ne pas hésiter à marquer des silences. Les silences invitent souvent à compléter.",
        "Prendre des notes courtes en parallèle : noms, dates, lieux, mots-clés à creuser.",
      ],
    },
    {
      titre: "Les grands thèmes à couvrir",
      items: [
        "L'enfance et les lieux de vie : ville, maison, souvenirs d'atmosphère. Les odeurs, les sons, les images.",
        "La personnalité et le caractère : ce qui le rendait unique, son humour, ses silences, ses colères, ses tendresses.",
        "Les goûts et les passions : ce qu'il aimait faire, lire, cuisiner, construire, collectionner.",
        "Ses talents et originalités : ce en quoi il était remarquable, même de façon anodine.",
        "La famille proche : ses parents, sa fratrie, ses enfants. Les relations, les tensions, les affections.",
        "La vie professionnelle : métiers, ambitions, réussites, reconversions.",
        "Les anecdotes marquantes : les histoires qu'on répète, les moments de bascule, les coups de chance ou de malchance.",
        "Ce qu'il transmettait, consciemment ou non : une façon d'être, des valeurs, un rapport au monde.",
      ],
    },
    {
      titre: "La retranscription",
      items: [
        "Utiliser un outil de speech-to-text pour obtenir une première transcription brute : Whisper (gratuit, open source, très précis), ou Otter.ai, ou la transcription automatique de l'application Notes sur iPhone.",
        "Relire et corriger la transcription brute : noms propres, liaisons manquantes, erreurs de sens.",
        "Identifier les passages forts : les formulations de l'aîné à reprendre en italique dans le fascicule.",
        "Structurer le récit en grandes parties correspondant aux thèmes abordés. Chaque partie a un titre sobre.",
        "Rédiger dans un ton journalistique : phrases courtes, faits précis, pas d'enjolivement. La vérité du récit suffit.",
        "Citer l'aîné en italique dès que ses mots sont plus justes que les vôtres.",
        "Relire à voix haute avant de livrer : ce qui sonne faux s'entend.",
      ],
    },
    {
      titre: "La qualité d'écriture",
      items: [
        "Éviter les généralités : \"il était très gentil\" ne dit rien. \"Il portait toujours le café de ses voisins\" dit tout.",
        "Préférer le concret à l'abstrait. Les lieux, les objets, les gestes révèlent un caractère mieux que les adjectifs.",
        "Respecter la chronologie quand elle aide à comprendre. La briser quand une anecdote éclaire mieux placée ailleurs.",
        "Ne pas chercher à être exhaustif. Mieux vaut un récit de 8 pages dense et vivant qu'un inventaire de 20 pages.",
        "Soigner les transitions entre les parties. Le lecteur doit sentir qu'il progresse dans une vie, pas qu'il consulte une fiche.",
        "Faire relire par un tiers avant de livrer à l'équipe Ondarea.",
      ],
    },
    {
      titre: "Outils recommandés",
      items: [
        "Enregistrement audio : application Dictaphone (iPhone) ou Voice Recorder (Android). Qualité suffisante, simple d'usage.",
        "Transcription automatique : Whisper (via whisper.ai ou une interface locale) — le plus précis en français. Alternative : Otter.ai ou la transcription intégrée à Google Docs.",
        "Rédaction : Google Docs ou Word, avec le suivi des modifications activé pour faciliter la relecture Ondarea.",
        "Mise en page du fascicule : gabarit fourni par Ondarea (à venir).",
        "Prise de notes pendant l'entretien : carnet papier recommandé — moins distrayant qu'un écran pour l'aîné.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />

      <main className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <p className="mb-6 text-xs uppercase tracking-[0.25em] text-ember">
          <span className="rule mr-3" />
          Usage interne — transmetteurs de mémoire
        </p>
        <h1 className="font-serif text-5xl leading-tight md:text-6xl mb-4">
          Guide du transmetteur<br />
          <em className="text-ember">de mémoire.</em>
        </h1>
        <p className="text-muted-foreground leading-relaxed max-w-2xl mb-16">
          Ce guide est destiné aux transmetteurs de mémoire du réseau Ondarea. Il détaille la méthode, les thèmes à couvrir, les outils à utiliser et les exigences de qualité attendues pour chaque mission.
        </p>

        <div className="space-y-16">
          {phases.map((phase, pi) => (
            <section key={phase.titre}>
              <div className="flex items-baseline gap-6 mb-8 border-b border-ink/15 pb-4">
                <span className="font-serif text-2xl text-ember">{String(pi + 1).padStart(2, "0")}</span>
                <h2 className="font-serif text-3xl text-ink">{phase.titre}</h2>
              </div>
              <ul className="space-y-4">
                {phase.items.map((item, ii) => (
                  <li key={ii} className="flex gap-4 leading-relaxed text-muted-foreground">
                    <span className="text-ember shrink-0 mt-1">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-20 border-t border-border/60 pt-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Document interne Ondarea — non destiné à la publication.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
