import { defineCollection, z } from "astro:content";

const landing = defineCollection({
  type: "data",
  schema: z.object({
    cardSections: z.array(
    z.object({
        id: z.string(),
        title: z.string(),
        items: z.array(
        z.object({
            title: z.string(),
            body: z.string(),
            icon: z.string(),
            iconAlt: z.string().optional().default("")
        })
        )
    })
    ).default([])

  }),
});

export const collections = { landing };
