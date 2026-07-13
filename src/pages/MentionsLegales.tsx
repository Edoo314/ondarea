import { Header } from "../components/Header";
import { Footer } from "../components/Footer";


export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />

      <main className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <p className="mb-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span className="rule mr-3" />
          Informations légales
        </p>
        <h1 className="font-serif text-4xl leading-tight md:text-5xl">
          Mentions légales
        </h1>

        <div className="mt-14 space-y-12 leading-relaxed text-muted-foreground">

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-ink">Éditeur du site</h2>
            <p>
              <strong className="text-ink font-medium"> Egoligo</strong><br />
              1 rue Gentil Ader<br />
              64100 Bayonne<br />
              France
            </p>
            <p>
              SIRET : 482 661 386 00052
            </p>
            <p>
              Directeur de la publication : Edouard de Dreuzy<br />
              Contact : <a href="mailto:bonjour@ Egoligo.fr" className="text-ink underline-offset-4 hover:underline">bonjour@ Egoligo.fr</a>
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-ink">Hébergement</h2>
            <p>
              Ce site est hébergé par Vercel Inc., 340 Pine Street Suite 701, San Francisco CA 94104, États-Unis (vercel.com). Le nom de domaine est enregistré auprès d'OVH SAS, 2 rue Kellermann, 59100 Roubaix, France.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-ink">Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, conception) est
              la propriété exclusive d' Egoligo. Toute reproduction, même
              partielle, est interdite sans autorisation préalable écrite.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-ink">Données personnelles</h2>
            <p>
              Les informations collectées via le formulaire de contact sont
              utilisées uniquement pour répondre à votre demande. Elles ne sont
              ni revendues, ni transmises à des tiers.
            </p>
            <p>
              Conformément à la loi Informatique et Libertés du 6 janvier 1978
              modifiée et au Règlement Général sur la Protection des Données
              (RGPD), vous disposez d'un droit d'accès, de rectification et de
              suppression de vos données. Pour l'exercer, écrivez à{" "}
              <a href="mailto:bonjour@ Egoligo.fr" className="text-ink underline-offset-4 hover:underline">
                bonjour@ Egoligo.fr
              </a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-ink">Cookies</h2>
            <p>
              Ce site n'utilise pas de cookies de traçage ou publicitaires.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
