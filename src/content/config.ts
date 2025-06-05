// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content', // 'data' para JSON/YAML, 'content' para Markdown/MDX
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    author: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    description: z.string(),
  }),
});

const teamCollection = defineCollection({
  type: 'data', // Usamos 'data' porque son datos estructurados (aunque estén en MD para mayor facilidad de lectura)
  schema: z.object({
    name: z.string(),
    role: z.string(),
    experience: z.array(z.string()).optional(),
    bio: z.string(),
    image: z.string(), // Ruta a la imagen del miembro del equipo
  }),
});

const testimonialCollection = defineCollection({
  type: 'data', // Usamos 'data' para testimonios estructurados
  schema: z.object({
    quote: z.string(),
    author: z.string(),
    relation: z.string().optional(), // Ej. "Hija", "Cuidadora", "Familiar"
    image: z.string().optional(), // Opcional: foto de quien da el testimonio
  }),
});

export const collections = {
  'blog': blogCollection,
  'team': teamCollection,
  'testimonials': testimonialCollection,
};