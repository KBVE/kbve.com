//?       [Collection]:[Config]
//*       [IMPORTS]
//*       [Zod]:{z} , {defineCollection} - scope and abstract typescript definitions.
import { z, defineCollection } from 'astro:content';


//?       {tags} - Tag collection
//!       [WIP]
const tags = defineCollection({
  schema: z.object({
    title: z.string(),
    version: z.number(),
    draft: z.boolean(),
  }),
})

//?       {release} - Official release documentation for the website
//!       [MIGRATION] - This is slated to be migrated out of the collection but kept inside until v2
const releases = defineCollection({
  schema: z.object({
    title: z.string(),
    version: z.number(),
  }),
});

//?       {legal} - Collection of all <LEGAL> documents within the KBVE organization.
//TODO    tos.md - Terms of Services - https://github.com/KBVE/kbve.com/issues/249
const legal = defineCollection({
  schema: z.object({
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
  }),
});


//?       {application} - alias of {app} - Collection of all <APPLICATION> notes, documents and references.
const application = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()), 
    footnote: z.string().optional(),
    author: z.string().default('KBVE Team'),
    img: z.string().default(''),
    date: z.string().optional(),
    url: z.string().optional(),
    information: z.string().optional(),
    media: z.any().optional(),
  }),
});

//*       [ASSET]
//!       [WARNING] : Careful when referencing the `asset` slug, as there is a folder, `assets`, that can cause issues when referencing.
//?       [ASSET] currently contains two collections, <stock> and <crypto>, with plans to expand out and include <shelter> (2/100). REF: https://github.com/KBVE/kbve.com/issues/88

//?       {stock}
//!       [MIGRATION] - Currently the stock collection is limited to {.md} files, as {.mdx} / Markdown JS is throwing a large range of errors as of Astro 1.7.1.
const stock = defineCollection({
  schema: z.object({
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
  }),
});

//?       {crypto}
const crypto = defineCollection({
  schema: z.object({
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
  }),
});

//?       {gaming}
const gaming = defineCollection({
  schema: z.object({
    status: z.boolean().optional(),
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()), 
    footnote: z.string().optional(),
    author: z.string().default('KBVE Team'),
    img: z.string().default(''),
    date: z.string().optional(),
    url: z.string().optional(),
  }),
});

//?       {journal}
const journal = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()), 
    footnote: z.string().optional(),
    author: z.string().default('KBVE Team'),
    img: z.string().default(''),
    date: z.date().optional(),
    url: z.string().optional(),
  }),
});

//?       {security}

const security = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()), 
    footnote: z.string().optional(),
    author: z.string().default('KBVE Team'),
    img: z.string().default(''),
    date: z.string().optional(),
    url: z.string().optional(),
  }),
});

//?       {news}
const news = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()), 
    footnote: z.string().optional(),
    author: z.string().default('KBVE Team'),
    img: z.string().default(''),
    date: z.string().optional(),
    url: z.string().optional(),
  }),
});

//?       {blog}
const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    img: z.string().default(''),
    tags: z.array(z.string()), 
    footnote: z.string().optional(),
    author: z.string().default('KBVE Team'),
    date: z.string().optional(),
    url: z.string().optional(),
  }),
});


//?       {account}
const account = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    img: z.string().default(''),
    tags: z.array(z.string()), 
    footnote: z.string().optional(),
    author: z.string().default('KBVE Team'),
    date: z.string().optional(),
    url: z.string().optional(),
  }),
});

//!       [PROFILE]
//*       {team} => Staff, Artists, DEVs, VIPs, GFX
//TODO    Organize the typescript - strict for {team}
//TODO    Construct the typescript for {npc}

//?       {team}
const team = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()), 
    footnote: z.string().optional(),
    author: z.string().default('KBVE Team'),
    img: z.string().default(''),
    date: z.string().optional(),
    url: z.string().optional(),
  }),
});

//?       {theory}
const theory = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()), 
    footnote: z.string().optional(),
    author: z.string().default('KBVE Team'),
    img: z.string().default(''),
    date: z.string().optional(),
    url: z.string().optional(),
    ref: z.string().optional(),
  }),
});

//?       {recipe}
const recipe = defineCollection({
  schema: z.object({
    title: z.string(),
    layout: z.string(),
    description: z.string(),
    tags: z.array(z.string()), 
    footnote: z.string().optional(),
    author: z.string().default('KBVE Team'),
    img: z.string().default(''),
    date: z.string().optional(),
    url: z.string().optional(),
    ref: z.string().optional(),
  }),
});

//?       {media}
const media = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()), 
    footnote: z.string().optional(),
    author: z.string().default('KBVE Team'),
    img: z.string().default(''),
    date: z.string().optional(),
    url: z.string().optional(),
  }),
});

//!       [MEDIA -> INNER COLLECTIONS]

//?       {shows}
const video = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()), 
    footnote: z.string().optional(),
    author: z.string().default('KBVE Team'),
    img: z.string().default(''),
    date: z.string().optional(),
    url: z.string().optional(),
    media: z.any(),
  }),
});

//?       {music}
const music = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()), 
    footnote: z.string().optional(),
    author: z.string().default('KBVE Team'),
    img: z.string().default(''),
    date: z.string().optional(),
    url: z.string().optional(),
    media: z.any(),
    feature: z.string().optional(),
  }),
});

const EpisodeData = z.array(
  z.number(),
  z.string(),
);

type Episode = z.infer<typeof EpisodeData>;

//?       {podcast}
const podcast = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()), 
    footnote: z.string().optional(),
    author: z.string().default('KBVE Team'),
    img: z.string().default(''),
    date: z.string().optional(),
    url: z.string().optional(),
    media: z.any(),
  }),
});


//?       {manga}
const manga = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()), 
    footnote: z.string().optional(),
    author: z.string().default('KBVE Team'),
    img: z.string().default(''),
    date: z.string().optional(),
    url: z.string().optional(),
    media: z.any(),
  }),
});



//?       {tools}
//?       :var:status - There might be issues with how the status boolean will be handled. We can manually handle it via the markdown file OR we can use a global list.       
const tools = defineCollection({
  schema: z.object({
    title: z.string(),
    status: z.boolean().optional(),
    description: z.string(),
    tags: z.array(z.string()), 
    footnote: z.string().optional(),
    author: z.string().default('KBVE Team'),
    img: z.string().default(''),
    date: z.string().optional(),
    url: z.string().optional(),
  }),
});

//?       {play}
//!       [PLAN] MD Configurations for Unity Games
const arcade = defineCollection({
  schema: z.object({
    title: z.string(),
    status: z.boolean().optional(),
    description: z.string(),
    tags: z.array(z.string()), 
    footnote: z.string().optional(),
    author: z.string().default('KBVE Team'),
    img: z.string().default(''),
    date: z.string().optional(),
    url: z.string().optional(),
  }),
});

//?       {website}
//!       [PLAN] MD Configurations for <Website>
const website = defineCollection({
  schema: z.object({
    status: z.boolean().optional(),
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    target: z.boolean().optional(),
    tags: z.array(z.string()),
  }),
});

//?       {project}
//!       [PLAN] MD Configurations for <Project>
const project = defineCollection({
  schema: z.object({
    title: z.string(),
    status: z.boolean().optional(),
    description: z.string(),
    tags: z.array(z.string()), 
    footnote: z.string().optional(),
    author: z.string().default('KBVE Team'),
    img: z.string().default(''),
    date: z.string().optional(),
    url: z.string().optional(),
  }),
});


//?       [COLLECTIONS]
//*       Exporting out all of the {$} collections.

export const collections = {

    //?       [KBVE]:[COLLECTION]
    releases: releases,
    legal: legal,
    //?       [DOC]:[COLLECTION]
    application: application,
    gaming: gaming,
    journal: journal,
    security: security,
    theory: theory,
    recipe: recipe,
    //?       [ASSET]:[COLLECTION]
    stock: stock,
    crypto: crypto,
    //?       [TAGS]
    tags: tags,
    //?       [PROFILE]:[COLLECTION]
    team: team,
    account: account,
    //    npc: npc,
    //?       [CONTENT]:[COLLECTIONS]
    news: news,
    blog: blog,
    media: media,
    music: music,
    video: video,
    podcast: podcast,
    //?       [MANGA]
    manga: manga,
    //?       [TOOLS]
    //    tools: tools,
    arcade: arcade,
    website: website,
    //asset: [stock, crypto],

}