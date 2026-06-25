import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Votre nom est requis").max(100),
  email: z.string().trim().email("Adresse e-mail invalide").max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  city: z.string().trim().max(120).optional().or(z.literal("")),
  department: z.string().trim().max(120).optional().or(z.literal("")),
  elder: z.string().trim().min(1, "Le nom de l'aîné est requis").max(120),
  character: z.string().trim().min(1, "Le nom du proche à raconter est requis").max(120),
  type: z.enum(["particulier", "etablissement"]),
  message: z.string().trim().max(1500).optional().or(z.literal("")),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export function buildMailtoBody(data: ContactFormData): string {
  return [
    `Type : ${data.type === "particulier" ? "Particulier / famille" : "Établissement (EHPAD, résidence)"}`,
    `Nom : ${data.name}`,
    `E-mail : ${data.email}`,
    data.phone ? `Téléphone : ${data.phone}` : null,
    data.city ? `Ville : ${data.city}` : null,
    data.department ? `Département : ${data.department}` : null,
    "",
    `Aîné à rencontrer : ${data.elder}`,
    `Personnage à raconter : ${data.character}`,
    "",
    data.message ? `Message :\n${data.message}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}

