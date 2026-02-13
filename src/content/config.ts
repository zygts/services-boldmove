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

    packagesSection: z.object({
      title: z.string(),
      subtitle: z.string(),
      toggleLeftLabel: z.string(),
      toggleRightLabel: z.string(),
      discountPercent: z.number().default(10),

      currency: z.string().default("EUR"),
      locale: z.string().default("en-GB"),

      packages: z.array(
        z.object({
          id: z.string(),
          name: z.string(),
          description: z.string(),
          standardPrice: z.number(), // en euros (ej 3200). Convertimos a céntimos en runtime
          ctaLabel: z.string(),
          badge: z.string().optional().default(""), // ej: "Most Popular"
          features: z.array(z.string()).default([]),
        })
      ).default([]),
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
