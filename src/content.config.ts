import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Un fichier par projet dans src/content/projets/. Ajouter un projet = ajouter un fichier.
const projets = defineCollection({
    loader: glob({ pattern: "*.md", base: "./src/content/projets" }),
    schema: ({ image }) =>
        z.object({
            titre: z.string(),
            accroche: z.string(),
            ordre: z.number(),
            // « bientot » affiche la mention de sortie à la place des liens de store.
            statut: z.enum(["bientot", "disponible", "archive"]),
            mention: z.string().optional(),
            site: z.string().url().optional(),
            appStore: z.string().url().optional(),
            playStore: z.string().url().optional(),
            stack: z.array(z.string()),
            icone: image().optional(),
            captures: z.array(z.object({ src: image(), alt: z.string() })).default([]),
        }),
});

export const collections = { projets };
