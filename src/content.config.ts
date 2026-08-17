import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    stack: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    icon: z.string().optional(),
    cardImage: z.string().optional(),
    cardImageDark: z.string().optional(),
    url: z.string().optional(),
    urlLabel: z.string().optional(),
    qrCode: z.string().optional(),
    qrCodeAlt: z.string().optional(),
    screenshots: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
        }),
      )
      .default([]),
    repository: z.string().optional(),
    detailLayout: z.enum(['default', 'whitenoise']).default('default'),
  }),
});

export const collections = { blog, projects };
