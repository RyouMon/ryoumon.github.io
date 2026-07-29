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
    url: z.string().optional(),
    repository: z.string().optional(),
  }),
});

export const collections = { blog, projects };
