declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}
declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]];

	export const image: () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodString;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	const entryMap: {
		"application": {
"android.mdx": {
  id: "android.mdx",
  slug: "android",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] },
"ansible.mdx": {
  id: "ansible.mdx",
  slug: "ansible",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] },
"authelia.mdx": {
  id: "authelia.mdx",
  slug: "authelia",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] },
"cubejs.mdx": {
  id: "cubejs.mdx",
  slug: "cubejs",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] },
"docker.mdx": {
  id: "docker.mdx",
  slug: "docker",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] },
"flipperzero.mdx": {
  id: "flipperzero.mdx",
  slug: "flipperzero",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] },
"flutter.mdx": {
  id: "flutter.mdx",
  slug: "flutter",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] },
"gcloud.mdx": {
  id: "gcloud.mdx",
  slug: "gcloud",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] },
"git.mdx": {
  id: "git.mdx",
  slug: "git",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] },
"godot.mdx": {
  id: "godot.mdx",
  slug: "godot",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] },
"javascript.mdx": {
  id: "javascript.mdx",
  slug: "javascript",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] },
"k8s.mdx": {
  id: "k8s.mdx",
  slug: "k8s",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] },
"kubernetes.mdx": {
  id: "kubernetes.mdx",
  slug: "kubernetes",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] },
"longhorn.mdx": {
  id: "longhorn.mdx",
  slug: "longhorn",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] },
"lvm.mdx": {
  id: "lvm.mdx",
  slug: "lvm",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] },
"ml.mdx": {
  id: "ml.mdx",
  slug: "ml",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] },
"mysql.mdx": {
  id: "mysql.mdx",
  slug: "mysql",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] },
"nftables.mdx": {
  id: "nftables.mdx",
  slug: "nftables",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] },
"nginx.mdx": {
  id: "nginx.mdx",
  slug: "nginx",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] },
"nmap.mdx": {
  id: "nmap.mdx",
  slug: "nmap",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] },
"nomad.mdx": {
  id: "nomad.mdx",
  slug: "nomad",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] },
"obsidian.mdx": {
  id: "obsidian.mdx",
  slug: "obsidian",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] },
"php.mdx": {
  id: "php.mdx",
  slug: "php",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] },
"portainer.mdx": {
  id: "portainer.mdx",
  slug: "portainer",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] },
"proxmox.mdx": {
  id: "proxmox.mdx",
  slug: "proxmox",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] },
"pterodactyl.mdx": {
  id: "pterodactyl.mdx",
  slug: "pterodactyl",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] },
"rust.mdx": {
  id: "rust.mdx",
  slug: "rust",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] },
"rustdesk.mdx": {
  id: "rustdesk.mdx",
  slug: "rustdesk",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] },
"simba.mdx": {
  id: "simba.mdx",
  slug: "simba",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] },
"strapi.mdx": {
  id: "strapi.mdx",
  slug: "strapi",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] },
"terraform.mdx": {
  id: "terraform.mdx",
  slug: "terraform",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] },
"traefik.mdx": {
  id: "traefik.mdx",
  slug: "traefik",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] },
"unity.mdx": {
  id: "unity.mdx",
  slug: "unity",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] },
"void.mdx": {
  id: "void.mdx",
  slug: "void",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] },
"watchtower.mdx": {
  id: "watchtower.mdx",
  slug: "watchtower",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] },
"webserver.mdx": {
  id: "webserver.mdx",
  slug: "webserver",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] },
"wireguard.mdx": {
  id: "wireguard.mdx",
  slug: "wireguard",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] },
"zsh.mdx": {
  id: "zsh.mdx",
  slug: "zsh",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] },
},
"blog": {
"theorycraft.mdx": {
  id: "theorycraft.mdx",
  slug: "theorycraft",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] },
},
"crypto": {
"btc.md": {
  id: "btc.md",
  slug: "btc",
  body: string,
  collection: "crypto",
  data: InferEntrySchema<"crypto">
} & { render(): Render[".md"] },
"doge.md": {
  id: "doge.md",
  slug: "doge",
  body: string,
  collection: "crypto",
  data: InferEntrySchema<"crypto">
} & { render(): Render[".md"] },
"eth.md": {
  id: "eth.md",
  slug: "eth",
  body: string,
  collection: "crypto",
  data: InferEntrySchema<"crypto">
} & { render(): Render[".md"] },
},
"gaming": {
"df.mdx": {
  id: "df.mdx",
  slug: "df",
  body: string,
  collection: "gaming",
  data: InferEntrySchema<"gaming">
} & { render(): Render[".mdx"] },
"lol.mdx": {
  id: "lol.mdx",
  slug: "lol",
  body: string,
  collection: "gaming",
  data: InferEntrySchema<"gaming">
} & { render(): Render[".mdx"] },
},
"journal": {
"asset.md": {
  id: "asset.md",
  slug: "asset",
  body: string,
  collection: "journal",
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] },
"roguejester.md": {
  id: "roguejester.md",
  slug: "roguejester",
  body: string,
  collection: "journal",
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] },
"visualnovel.md": {
  id: "visualnovel.md",
  slug: "visualnovel",
  body: string,
  collection: "journal",
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] },
},
"legal": {
"eula.mdx": {
  id: "eula.mdx",
  slug: "eula",
  body: string,
  collection: "legal",
  data: InferEntrySchema<"legal">
} & { render(): Render[".mdx"] },
"privacy.mdx": {
  id: "privacy.mdx",
  slug: "privacy",
  body: string,
  collection: "legal",
  data: InferEntrySchema<"legal">
} & { render(): Render[".mdx"] },
"tos.mdx": {
  id: "tos.mdx",
  slug: "tos",
  body: string,
  collection: "legal",
  data: InferEntrySchema<"legal">
} & { render(): Render[".mdx"] },
},
"manga": {
"rj/main.md": {
  id: "rj/main.md",
  slug: "rj/main",
  body: string,
  collection: "manga",
  data: any
} & { render(): Render[".md"] },
},
"news": {
"release-rigor.md": {
  id: "release-rigor.md",
  slug: "release-rigor",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
} & { render(): Render[".md"] },
},
"npc": {
"lucifurr/emotion/happy.md": {
  id: "lucifurr/emotion/happy.md",
  slug: "lucifurr/emotion/happy",
  body: string,
  collection: "npc",
  data: any
} & { render(): Render[".md"] },
"lucifurr/lucifurr.md": {
  id: "lucifurr/lucifurr.md",
  slug: "lucifurr/lucifurr",
  body: string,
  collection: "npc",
  data: any
} & { render(): Render[".md"] },
},
"play": {
"rj.mdx": {
  id: "rj.mdx",
  slug: "rj",
  body: string,
  collection: "play",
  data: InferEntrySchema<"play">
} & { render(): Render[".mdx"] },
"wvn.mdx": {
  id: "wvn.mdx",
  slug: "wvn",
  body: string,
  collection: "play",
  data: InferEntrySchema<"play">
} & { render(): Render[".mdx"] },
},
"project": {
"api.mdx": {
  id: "api.mdx",
  slug: "api",
  body: string,
  collection: "project",
  data: any
} & { render(): Render[".mdx"] },
"ar.mdx": {
  id: "ar.mdx",
  slug: "ar",
  body: string,
  collection: "project",
  data: any
} & { render(): Render[".mdx"] },
"discord-sh.mdx": {
  id: "discord-sh.mdx",
  slug: "discord-sh",
  body: string,
  collection: "project",
  data: any
} & { render(): Render[".mdx"] },
"galaxia.mdx": {
  id: "galaxia.mdx",
  slug: "galaxia",
  body: string,
  collection: "project",
  data: any
} & { render(): Render[".mdx"] },
"roguejester.mdx": {
  id: "roguejester.mdx",
  slug: "roguejester",
  body: string,
  collection: "project",
  data: any
} & { render(): Render[".mdx"] },
"rsps.mdx": {
  id: "rsps.mdx",
  slug: "rsps",
  body: string,
  collection: "project",
  data: any
} & { render(): Render[".mdx"] },
},
"recipe": {
"mangojuice.mdx": {
  id: "mangojuice.mdx",
  slug: "mangojuice",
  body: string,
  collection: "recipe",
  data: InferEntrySchema<"recipe">
} & { render(): Render[".mdx"] },
},
"releases": {
"1.md": {
  id: "1.md",
  slug: "1",
  body: string,
  collection: "releases",
  data: InferEntrySchema<"releases">
} & { render(): Render[".md"] },
},
"security": {
"xss.mdx": {
  id: "xss.mdx",
  slug: "xss",
  body: string,
  collection: "security",
  data: InferEntrySchema<"security">
} & { render(): Render[".mdx"] },
},
"stock": {
"aapl.mdx": {
  id: "aapl.mdx",
  slug: "aapl",
  body: string,
  collection: "stock",
  data: InferEntrySchema<"stock">
} & { render(): Render[".mdx"] },
"spy.mdx": {
  id: "spy.mdx",
  slug: "spy",
  body: string,
  collection: "stock",
  data: InferEntrySchema<"stock">
} & { render(): Render[".mdx"] },
"tsla.mdx": {
  id: "tsla.mdx",
  slug: "tsla",
  body: string,
  collection: "stock",
  data: InferEntrySchema<"stock">
} & { render(): Render[".mdx"] },
"vt.mdx": {
  id: "vt.mdx",
  slug: "vt",
  body: string,
  collection: "stock",
  data: InferEntrySchema<"stock">
} & { render(): Render[".mdx"] },
},
"team": {
"example.mdx": {
  id: "example.mdx",
  slug: "example",
  body: string,
  collection: "team",
  data: InferEntrySchema<"team">
} & { render(): Render[".mdx"] },
"fudster.mdx": {
  id: "fudster.mdx",
  slug: "fudster",
  body: string,
  collection: "team",
  data: InferEntrySchema<"team">
} & { render(): Render[".mdx"] },
"h0lybyte.mdx": {
  id: "h0lybyte.mdx",
  slug: "h0lybyte",
  body: string,
  collection: "team",
  data: InferEntrySchema<"team">
} & { render(): Render[".mdx"] },
"keros.mdx": {
  id: "keros.mdx",
  slug: "keros",
  body: string,
  collection: "team",
  data: InferEntrySchema<"team">
} & { render(): Render[".mdx"] },
"lvl21bellsprout.mdx": {
  id: "lvl21bellsprout.mdx",
  slug: "lvl21bellsprout",
  body: string,
  collection: "team",
  data: InferEntrySchema<"team">
} & { render(): Render[".mdx"] },
"sean.mdx": {
  id: "sean.mdx",
  slug: "sean",
  body: string,
  collection: "team",
  data: InferEntrySchema<"team">
} & { render(): Render[".mdx"] },
"silver91.mdx": {
  id: "silver91.mdx",
  slug: "silver91",
  body: string,
  collection: "team",
  data: InferEntrySchema<"team">
} & { render(): Render[".mdx"] },
"ziggy9263.mdx": {
  id: "ziggy9263.mdx",
  slug: "ziggy9263",
  body: string,
  collection: "team",
  data: InferEntrySchema<"team">
} & { render(): Render[".mdx"] },
},
"theory": {
"deadcode.mdx": {
  id: "deadcode.mdx",
  slug: "deadcode",
  body: string,
  collection: "theory",
  data: InferEntrySchema<"theory">
} & { render(): Render[".mdx"] },
"fintech.mdx": {
  id: "fintech.mdx",
  slug: "fintech",
  body: string,
  collection: "theory",
  data: InferEntrySchema<"theory">
} & { render(): Render[".mdx"] },
"gamedesign.mdx": {
  id: "gamedesign.mdx",
  slug: "gamedesign",
  body: string,
  collection: "theory",
  data: InferEntrySchema<"theory">
} & { render(): Render[".mdx"] },
"healthcare.mdx": {
  id: "healthcare.mdx",
  slug: "healthcare",
  body: string,
  collection: "theory",
  data: InferEntrySchema<"theory">
} & { render(): Render[".mdx"] },
"matrix.mdx": {
  id: "matrix.mdx",
  slug: "matrix",
  body: string,
  collection: "theory",
  data: InferEntrySchema<"theory">
} & { render(): Render[".mdx"] },
"programming.mdx": {
  id: "programming.mdx",
  slug: "programming",
  body: string,
  collection: "theory",
  data: InferEntrySchema<"theory">
} & { render(): Render[".mdx"] },
"prompt.mdx": {
  id: "prompt.mdx",
  slug: "prompt",
  body: string,
  collection: "theory",
  data: InferEntrySchema<"theory">
} & { render(): Render[".mdx"] },
"solarpunk.mdx": {
  id: "solarpunk.mdx",
  slug: "solarpunk",
  body: string,
  collection: "theory",
  data: InferEntrySchema<"theory">
} & { render(): Render[".mdx"] },
},
"tools": {
"status.mdx": {
  id: "status.mdx",
  slug: "status",
  body: string,
  collection: "tools",
  data: any
} & { render(): Render[".mdx"] },
"webmaster.mdx": {
  id: "webmaster.mdx",
  slug: "webmaster",
  body: string,
  collection: "tools",
  data: any
} & { render(): Render[".mdx"] },
},
"website": {
"about.mdx": {
  id: "about.mdx",
  slug: "about",
  body: string,
  collection: "website",
  data: InferEntrySchema<"website">
} & { render(): Render[".mdx"] },
"c.mdx": {
  id: "c.mdx",
  slug: "c",
  body: string,
  collection: "website",
  data: InferEntrySchema<"website">
} & { render(): Render[".mdx"] },
"search.mdx": {
  id: "search.mdx",
  slug: "search",
  body: string,
  collection: "website",
  data: InferEntrySchema<"website">
} & { render(): Render[".mdx"] },
"twitch.mdx": {
  id: "twitch.mdx",
  slug: "twitch",
  body: string,
  collection: "website",
  data: InferEntrySchema<"website">
} & { render(): Render[".mdx"] },
"twitter.mdx": {
  id: "twitter.mdx",
  slug: "twitter",
  body: string,
  collection: "website",
  data: InferEntrySchema<"website">
} & { render(): Render[".mdx"] },
"youtube.mdx": {
  id: "youtube.mdx",
  slug: "youtube",
  body: string,
  collection: "website",
  data: InferEntrySchema<"website">
} & { render(): Render[".mdx"] },
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
