import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    draft: z.boolean(),
  }),
});

export const collections = {
  blog: blogCollection,
};
