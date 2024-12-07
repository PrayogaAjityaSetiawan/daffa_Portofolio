import { defineCollection, z } from "astro:content";

export const collections = {
    blogs: defineCollection({
        type: "content",
        schema: z.object({
            title: z.string(),
            description: z.string(),
            pubDate: z.string().transform((str) => new Date(str)),
            heroImage: z.string(),
            tags: z.string(),
        }),
    }),
};

