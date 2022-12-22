//?       [Collection]:[Config]
//*       [IMPORTS]
//*       [Zod]:{z} , {defineCollection} - scope and abstract typescript definitions.
import { z, defineCollection } from 'astro:content';


//?       {release} - Official release documentation for the website
//!       [MIGRATION] - This is slated to be migrated out of the collection but kept inside until v2
const releases = defineCollection({
  schema: {
    title: z.string(),
    version: z.number(),
  },
});

//?       {legal} - Collection of all <LEGAL> documents within the KBVE organization.
//!       [TO:DO] - tos.md - Terms of Services - https://github.com/KBVE/kbve.com/issues/249
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


//?       {application} - alias of {app} - Collection of all <APPLICATION> notes, documents and references.
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

//*       [ASSET]
//!       [WARNING] : Careful when referencing the `asset` slug, as there is a folder, `assets`, that can cause issues when referencing.
//?       [ASSET] currently contains two collections, <stock> and <crypto>, with plans to expand out and include <shelter> (2/100). REF: https://github.com/KBVE/kbve.com/issues/88

//?       {stock}
//!       [MIGRATION] - Currently the stock collection is limited to {.md} files, as {.mdx} / Markdown JS is throwing a large range of errors as of Astro 1.7.1.
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

//?       {crypto}
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

//?       {gaming}
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

//?       {journal}
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

//?       {security}

const security = defineCollection({
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

//?       {news}
const news = defineCollection({
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

//?       {team}
const team = defineCollection({
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

//?       {theory}
const theory = defineCollection({
  schema: {
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()), 
    footnote: z.string().optional(),
    author: z.string().default('KBVE Team'),
    img: z.string().default(''),
    date: z.string().optional(),
    url: z.string().optional(),
    ref: z.string().optional(),
  },
});

//?       {media}
const media = defineCollection({
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

//?       {tools}
//?       :var:status - There might be issues with how the status boolean will be handled. We can manually handle it via the markdown file OR we can use a global list.       
const tools = defineCollection({
  schema: {
    title: z.string(),
    status: z.boolean().optional(),
    description: z.string(),
    tags: z.array(z.string()), 
    footnote: z.string().optional(),
    author: z.string().default('KBVE Team'),
    img: z.string().default(''),
    date: z.string().optional(),
    url: z.string().optional(),
  },
});

//?       {play}
//!       [PLAN] MD Configurations for Unity Games
const play = defineCollection({
  schema: {
    title: z.string(),
    status: z.boolean().optional(),
    description: z.string(),
    tags: z.array(z.string()), 
    footnote: z.string().optional(),
    author: z.string().default('KBVE Team'),
    img: z.string().default(''),
    date: z.string().optional(),
    url: z.string().optional(),
  },
});




//?       [COLLECTIONS]
//*       Exporting out all of the {$} collections.

export const collections = {
    releases: releases,
    legal: legal,
    application: application,
    stock: stock,
    crypto: crypto,
    gaming: gaming,
    journal: journal,
    security: security,
    news: news,
    team: team,
    theory: theory,
//    media: media,
//    tools: tools,
//    play: play,

}