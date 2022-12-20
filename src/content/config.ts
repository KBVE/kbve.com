import { z, defineCollection } from 'astro:content';

const releases = defineCollection({
  schema: {
    title: z.string(),
    version: z.number(),
  },
});

const legal = defineCollection({
  schema: {
    id: z.string(),
    title: z.string(),
    description: z.string(),
    version: z.number(),
    tags: z.array(z.string()), 
    footnote: z.string().optional(),
    author: z.string().default('KBVE Team'),
    img: z.string().default(''),
    date: z.string(),
    url: z.string().optional(),
  },
});


const application = defineCollection({
  schema: {
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()), 
    footnote: z.string().optional(),
    author: z.string().default('KBVE Team'),
    img: z.string().default(''),
    date: z.string().optional(),
    url: z.string().optional(),
  },
});

const stock = defineCollection({
  schema: {
    ticker: z.string(),
    title: z.string(),
    description: z.string(),
    isin: z.string().optional(),
    cusip: z.string().optional(),
    exchange: z.string(),
    tags: z.array(z.string()), 
    footnote: z.string().optional(),
    author: z.string().default('KBVE Team'),
    img: z.string().default(''),
    date: z.string().optional(),
    url: z.string().optional(),
  },
});


const crypto = defineCollection({
  schema: {
    ticker: z.string(),
    title: z.string(),
    description: z.string(),
    isin: z.string().optional(),
    cusip: z.string().optional(),
    exchange: z.string(),
    tags: z.array(z.string()), 
    footnote: z.string().optional(),
    author: z.string().default('KBVE Team'),
    img: z.string().default(''),
    date: z.string().optional(),
    url: z.string().optional(),
  },
});

const gaming = defineCollection({
  schema: {
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()), 
    footnote: z.string().optional(),
    author: z.string().default('KBVE Team'),
    img: z.string().default(''),
    date: z.string().optional(),
    url: z.string().optional(),
  },
});

const journal = defineCollection({
  schema: {
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()), 
    footnote: z.string().optional(),
    author: z.string().default('KBVE Team'),
    img: z.string().default(''),
    date: z.string().optional(),
    url: z.string().optional(),
  },
});

export const collections = {
    releases: releases,
    legal: legal,
    application: application,
    stock: stock,
    crypto: crypto,
    gaming: gaming,
    journal: journal,
}