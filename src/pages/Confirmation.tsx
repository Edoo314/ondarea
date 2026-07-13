import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { type ContactFormData, buildMailtoBody } from "../lib/contact";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";


export default function ConfirmationPage() {
  const [data, setData] = useState<ContactFormData | null>(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("egoligo-contact");
      if (!raw) {
        window.location.href = "/contact";
        return;
      }
      setData(JSON.parse(raw) as ContactFormData);
    } catch {
      window.location.href = "/contact";
    }
  }, []);

  if (!data) return null;

  const mailtoSubject = `Confier un récit — ${data.name}`;
  const mailtoBody = buildMailtoBody(data);
  const mailtoHref = `mailto:bonjour@egoligo.fr?subject=${encodeURIComponent(mailtoSubject)}&body=${encodeURIComponent(mailtoBody)}`;

  function sendMail() {
    window.location.href = mailtoHref;
    setSent(true);
    try {
      sessionStorage.removeItem("egoligo-contact");
    } catch {
      // ignore
    }
  }

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />

      <main className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <p className="mb-6 text-xs uppercase tracking-[0.25em] text-ember">
          <span className="rule mr-3" />
          Récapitulatif
        </p>
        <h1 className="font-serif text-4xl leading-tight md:text-5xl">
          Merci, <em className="text-ember">{data.name}.</em>
        </h1>
        <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed">
          Vérifiez les informations ci-dessous. Cliquez sur le bouton pour les
          envoyer à egoligo. Votre client e-mail s'ouvrira avec le message
          pré-rempli.
        </p>

        <div className="mt-14 border border-ink/15 bg-cream p-8 md:p-12">
          <h2 className="font-serif text-2xl">Votre demande</h2>

          <dl className="mt-8 space-y-6">
            <div className="border-t border-ink/10 pt-5">
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Vous êtes</dt>
              <dd className="mt-1 text-ink">
                {data.type === "particulier" ? "Un particulier / une famille" : "Un établissement (EHPAD, résidence)"}
              </dd>
            </div>
            <div className="border-t border-ink/10 pt-5">
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Vos coordonnées</dt>
              <dd className="mt-1 text-ink">
                {data.name}<br />
                {data.email}
                {data.phone && <><br />{data.phone}</>}
                {(data.city || data.department) && (
                  <>
                    <br />
                    {[data.city, data.department].filter(Boolean).join(" — ")}
                  </>
                )}
              </dd>
            </div>
            <div className="border-t border-ink/10 pt-5">
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Aîné à rencontrer</dt>
              <dd className="mt-1 font-serif text-xl text-ink">{data.elder}</dd>
            </div>
            <div className="border-t border-ink/10 pt-5">
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Personnage à raconter</dt>
              <dd className="mt-1 font-serif text-xl text-ink">{data.character}</dd>
            </div>
            {data.message && (
              <div className="border-t border-ink/10 pt-5">
                <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Votre message</dt>
                <dd className="mt-1 whitespace-pre-line leading-relaxed text-ink">{data.message}</dd>
              </div>
            )}
          </dl>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          {sent ? (
            <div className="rounded-sm border border-ink/15 bg-paper px-6 py-4 text-sm text-muted-foreground">
              Votre client e-mail s'est ouvert. Si ce n'est pas le cas, écrivez-nous directement à{" "}
              <a href="mailto:bonjour@egoligo.fr" className="text-ink underline">bonjour@egoligo.fr</a>.
            </div>
          ) : (
            <>
              <button
                onClick={sendMail}
                className="rounded-sm bg-ink px-6 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-90"
              >
                Envoyer la demande à egoligo
              </button>
              <Link
                to="/contact"
                className="text-sm text-muted-foreground underline-offset-4 hover:text-ink hover:underline"
              >
                Modifier les informations
              </Link>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
