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
  modalSubtitle: z.string().default(""),
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

      // ✅ vídeo
      video: z.string(),
      poster: z.string().optional().default(""),
      videoLabel: z.string().optional().default(""),

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
        // enabled opcional si lo quieres conservar
        enabled: z.boolean().optional().default(true),
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

      requirements: z.string().default(""),
      footerText: z.string().optional().default(""),
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

    platformsSection: z.object({
      title: z.string().default("PLATFORMS"),
      body: z.object({
        p1: z.string(),
        p2: z.string(),
        emphasis: z.string(),
      }),
      videos: z.array(
        z.object({
          label: z.string(),
          src: z.string().optional().default(""),
          url: z.string().optional().default(""),
          poster: z.string().optional().default(""),
          muted: z.boolean().optional().default(true),
          autoplay: z.boolean().optional().default(true),
          loop: z.boolean().optional().default(true),
          controls: z.boolean().optional().default(false),
        })
      ).default([]),
    }),

    testimonialsSection: z.object({
      title: z.string().default("WHAT OUR CLIENTS SAY ABOUT US"),
      underline: z.string().optional().default(""),
      cards: z.array(
        z.object({
          quote: z.string(),
          author: z.string(),
        })
      ).default([]),
    }),

    contactSection: z.object({
      title: z.string().default("TALK TO US"),
      emailLine: z.object({
        text: z.string().default("Please hit us up on"),
        email: z.string().default("hello@boldmove.tv"),
      }),
      address: z.object({
        label: z.string().default("Address"),
        text: z.string().default(""),
      }),
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
