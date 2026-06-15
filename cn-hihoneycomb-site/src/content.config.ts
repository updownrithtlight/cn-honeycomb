import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const technical = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/technical" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    publishDate: z.string(),
    updatedDate: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    audience: z.string()
  })
});

export const collections = { technical };
