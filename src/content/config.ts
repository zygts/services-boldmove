import { defineCollection, z } from "astro:content";

const landing = defineCollection({
  type: "data",
  schema: z.object({
    fullWidthCard: z.object({
      title: z.string(),
      headline: z.string(),
      body: z.string(),
      icons: z
        .array(
          z.object({
            icon: z.string(),
            iconAlt: z.string().optional().default(""),
          })
        )
        .default([]),
    }),

    threeColumnsCards: z
      .array(
        z.object({
          id: z.string(),
          title: z.string(),
          items: z
            .array(
              z.object({
                title: z.string(),
                body: z.string(),
                icon: z.string(),
                iconAlt: z.string().optional().default(""),
              })
            )
            .default([]),
        })
      )
      .default([]),
  }),
});

export const collections = { landing };
