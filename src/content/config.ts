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
          title: z.string(),
          description: z.string(),

          image: z.string(),
          imageAlt: z.string().optional().default(""),

          standardPrice: z.number(),
          ctaLabel: z.string(),
          badge: z.string().optional().default(""),

          mainFeatures: z.array(
            z.object({
              icon: z.string(),
              text: z.string(),
            })
          ).default([]),

          writing: z.object({
            label: z.string().default("CUSTOM WRITING"),
            unitLabel: z.string().default("writing days"),
            minDays: z.number().int().default(0),
            maxDays: z.number().int().default(3),
            pricePerDay: z.number().default(0),
          }),

          additionalFeatures: z.array(
            z.object({
              icon: z.string(),
              text: z.string(),
            })
          ).default([]),

          requirements: z.string().default("")
        })
      ).default([]),

    }),

    upgradeSection: z.object({
      title: z.string(),
      card: z.object({
        id: z.string(),
        title: z.string(),
        description: z.string(),
        image: z.string(),
        imageAlt: z.string().optional().default(""),
        standardPrice: z.number(),
        ctaLabel: z.string(),
        badge: z.string().optional().default(""),
        mainFeatures: z.array(z.object({ icon: z.string(), text: z.string() })).default([]),
        writing: z
          .object({
            label: z.string().default("CUSTOM WRITING"),
            unitLabel: z.string().default("writing days"),
            minDays: z.number().int().default(0),
            maxDays: z.number().int().default(0),
            pricePerDay: z.number().default(0),
          })
          .optional(),
        additionalFeatures: z.array(z.object({ icon: z.string(), text: z.string() })).default([]),
        requirements: z.string().default(""),
      }),
      footerText: z.string(), 
    }),

    servicesSection: z.object({
      title: z.string().default("SERVICES"),
      subtitle: z.string().optional().default(""),
      useSeparatorImage: z.boolean().optional().default(false),
      separatorImage: z.string().optional().default(""),
      services: z.array(
        z.object({
          id: z.string(),
          name: z.string(),
          price: z.string(),
          description: z.string(),
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
