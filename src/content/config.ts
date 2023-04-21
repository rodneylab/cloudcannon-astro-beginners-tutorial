import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().date(),
    draft: z.boolean().optional()
  }),
});

export const collections = {
  blog: blogCollection,
};
