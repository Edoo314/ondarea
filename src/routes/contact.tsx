import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { contactSchema, type ContactFormData } from "@/lib/contact";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Confier un récit à Ondarea" },
      { name: "description", content: "Confiez-nous le nom de l'aîné dont vous souhaitez recueillir la mémoire, et celui du proche dont il portera le récit." },
      { property: "og:title", content: "Ondarea — Confier un récit" },
      { property: "og:description", content: "Commencez par nous écrire. Nous revenons vers vous sous quelques jours." },
    ],
  }),
  component: ContactPage,
});

type Errors = Partial<Record<keyof ContactFormData, string>>;

function ContactPage() {
  const navigate = useNavigate();
  const [data, setData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    city: "",
    department: "",
    elder: "",
    character: "",
    type: "particulier",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  function update<K extends keyof ContactFormData>(key: K, value: ContactFormData[K]) {
    setData((d) => ({ ...d, [key]: value }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof ContactFormData;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    try {
      sessionStorage.setItem("ondarea-contact", JSON.stringify(parsed.data));
    } catch {
      // sessionStorage can be unavailable; proceed anyway
    }
    navigate({ to: "/confirmation" });
  }

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />

      <main className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <p className="mb-6 text-xs uppercase tracking-[0.25em] text-ember">
          <span className="rule mr-3" />
          Confier un récit
        </p>
        <h1 className="font-serif text-4xl leading-tight md:text-5xl">
          Quel est le premier personnage<br />
          <em className="text-ember">dont vous souhaitez conserver le souvenir ?</em>
        </h1>
        <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed">
          Indiquez-nous l'aîné que nous rencontrerons, et le proche dont il
          portera la mémoire. Nous revenons vers vous sous quelques jours.
        </p>

        <form onSubmit={onSubmit} noValidate className="mt-14 space-y-8">
          <fieldset className="space-y-3">
            <legend className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Vous êtes
            </legend>
            <div className="flex flex-wrap gap-3">
              {[
                { value: "particulier", label: "Un particulier / une famille" },
                { value: "etablissement", label: "Un établissement (EHPAD, résidence)" },
              ].map((opt) => (
                <label
                  key={opt.value}
                  className={`cursor-pointer rounded-sm border px-4 py-2 text-sm transition-colors ${
                    data.type === opt.value ? "border-ink bg-ink text-paper" : "border-ink/20 hover:border-ink"
                  }`}
                >
                  <input
                    type="radio"
                    name="type"
                    value={opt.value}
                    checked={data.type === opt.value}
                    onChange={() => update("type", opt.value as ContactFormData["type"])}
                    className="sr-only"
                  />
                  {opt.label}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="grid gap-6 md:grid-cols-2">
            <Field label="Votre nom" error={errors.name} required>
              <input
                type="text"
                value={data.name}
                onChange={(e) => update("name", e.target.value)}
                maxLength={100}
                className="input"
              />
            </Field>
            <Field label="Adresse e-mail" error={errors.email} required>
              <input
                type="email"
                value={data.email}
                onChange={(e) => update("email", e.target.value)}
                maxLength={255}
                className="input"
              />
            </Field>
          </div>

          <Field label="Téléphone (facultatif)" error={errors.phone}>
            <input
              type="tel"
              value={data.phone}
              onChange={(e) => update("phone", e.target.value)}
              maxLength={30}
              className="input"
            />
          </Field>

          <div className="grid gap-6 md:grid-cols-2">
            <Field label="Ville (facultatif)" error={errors.city}>
              <input
                type="text"
                value={data.city}
                onChange={(e) => update("city", e.target.value)}
                maxLength={120}
                className="input"
              />
            </Field>
            <Field label="Département (facultatif)" error={errors.department}>
              <input
                type="text"
                value={data.department}
                onChange={(e) => update("department", e.target.value)}
                maxLength={120}
                className="input"
              />
            </Field>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Field label="Nom de l'aîné à rencontrer" error={errors.elder} required>
              <input
                type="text"
                value={data.elder}
                onChange={(e) => update("elder", e.target.value)}
                maxLength={120}
                className="input"
              />
            </Field>
            <Field label="Personnage dont il portera le récit" error={errors.character} required>
              <input
                type="text"
                value={data.character}
                onChange={(e) => update("character", e.target.value)}
                maxLength={120}
                className="input"
              />
            </Field>
          </div>

          <Field label="Quelques mots pour nous (facultatif)" error={errors.message}>
            <textarea
              value={data.message}
              onChange={(e) => update("message", e.target.value)}
              maxLength={1500}
              rows={5}
              className="input resize-y"
            />
          </Field>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              type="submit"
              className="rounded-sm bg-ink px-6 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-90"
            >
              Vérifier et envoyer
            </button>
            <p className="text-xs text-muted-foreground">
              Vos informations ne servent qu'à vous recontacter.
            </p>
          </div>
        </form>
      </main>

      <Footer />

      <style>{`
        .input {
          width: 100%;
          background: transparent;
          border: 0;
          border-bottom: 1px solid var(--ink);
          padding: 0.5rem 0;
          font-family: var(--font-sans);
          font-size: 1rem;
          color: var(--ink);
          outline: none;
          transition: border-color 0.2s;
        }
        .input:focus { border-color: var(--ember); }
      `}</style>
    </div>
  );
}

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label}
        {required && <span className="text-ember"> *</span>}
      </span>
      <div className="mt-2">{children}</div>
      {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
    </label>
  );
}
