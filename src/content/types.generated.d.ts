declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		typeof entryMap[C][keyof typeof entryMap[C]] & Render;

	type BaseCollectionConfig<S extends import('astro/zod').ZodRawShape> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<import('astro/zod').ZodObject<S>>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends import('astro/zod').ZodRawShape>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	export function getEntry<C extends keyof typeof entryMap, E extends keyof typeof entryMap[C]>(
		collection: C,
		entryKey: E
	): Promise<typeof entryMap[C][E] & Render>;
	export function getCollection<
		C extends keyof typeof entryMap,
		E extends keyof typeof entryMap[C]
	>(
		collection: C,
		filter?: (data: typeof entryMap[C][E]) => boolean
	): Promise<(typeof entryMap[C][E] & Render)[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		import('astro/zod').ZodObject<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			injectedFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"application": {
"android.mdx": {
  id: "android.mdx",
  slug: "android",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"ansible.mdx": {
  id: "ansible.mdx",
  slug: "ansible",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"authelia.mdx": {
  id: "authelia.mdx",
  slug: "authelia",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"cubejs.mdx": {
  id: "cubejs.mdx",
  slug: "cubejs",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"docker.mdx": {
  id: "docker.mdx",
  slug: "docker",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"flipperzero.mdx": {
  id: "flipperzero.mdx",
  slug: "flipperzero",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"flutter.mdx": {
  id: "flutter.mdx",
  slug: "flutter",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"gcloud.mdx": {
  id: "gcloud.mdx",
  slug: "gcloud",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"git.mdx": {
  id: "git.mdx",
  slug: "git",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"godot.mdx": {
  id: "godot.mdx",
  slug: "godot",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"javascript.mdx": {
  id: "javascript.mdx",
  slug: "javascript",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"kubernetes.md": {
  id: "kubernetes.md",
  slug: "kubernetes",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"longhorn.mdx": {
  id: "longhorn.mdx",
  slug: "longhorn",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"lvm.mdx": {
  id: "lvm.mdx",
  slug: "lvm",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"ml.mdx": {
  id: "ml.mdx",
  slug: "ml",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"mysql.mdx": {
  id: "mysql.mdx",
  slug: "mysql",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"nftables.mdx": {
  id: "nftables.mdx",
  slug: "nftables",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"nmap.mdx": {
  id: "nmap.mdx",
  slug: "nmap",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"nomad.mdx": {
  id: "nomad.mdx",
  slug: "nomad",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"obsidian.mdx": {
  id: "obsidian.mdx",
  slug: "obsidian",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"php.mdx": {
  id: "php.mdx",
  slug: "php",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"portainer.mdx": {
  id: "portainer.mdx",
  slug: "portainer",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"proxmox.mdx": {
  id: "proxmox.mdx",
  slug: "proxmox",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"pterodactyl.mdx": {
  id: "pterodactyl.mdx",
  slug: "pterodactyl",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"rust.mdx": {
  id: "rust.mdx",
  slug: "rust",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"strapi.mdx": {
  id: "strapi.mdx",
  slug: "strapi",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"terraform.mdx": {
  id: "terraform.mdx",
  slug: "terraform",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"traefik.mdx": {
  id: "traefik.mdx",
  slug: "traefik",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"unity.mdx": {
  id: "unity.mdx",
  slug: "unity",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"void.mdx": {
  id: "void.mdx",
  slug: "void",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"watchtower.mdx": {
  id: "watchtower.mdx",
  slug: "watchtower",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"webserver.mdx": {
  id: "webserver.mdx",
  slug: "webserver",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"wireguard.mdx": {
  id: "wireguard.mdx",
  slug: "wireguard",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"zsh.mdx": {
  id: "zsh.mdx",
  slug: "zsh",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
},
"crypto": {
"btc.md": {
  id: "btc.md",
  slug: "btc",
  body: string,
  collection: "crypto",
  data: InferEntrySchema<"crypto">
},
"doge.md": {
  id: "doge.md",
  slug: "doge",
  body: string,
  collection: "crypto",
  data: InferEntrySchema<"crypto">
},
"eth.md": {
  id: "eth.md",
  slug: "eth",
  body: string,
  collection: "crypto",
  data: InferEntrySchema<"crypto">
},
},
"gaming": {
"df.mdx": {
  id: "df.mdx",
  slug: "df",
  body: string,
  collection: "gaming",
  data: InferEntrySchema<"gaming">
},
"lol.mdx": {
  id: "lol.mdx",
  slug: "lol",
  body: string,
  collection: "gaming",
  data: InferEntrySchema<"gaming">
},
},
"journal": {
"asset.md": {
  id: "asset.md",
  slug: "asset",
  body: string,
  collection: "journal",
  data: InferEntrySchema<"journal">
},
"roguejester.md": {
  id: "roguejester.md",
  slug: "roguejester",
  body: string,
  collection: "journal",
  data: InferEntrySchema<"journal">
},
"visualnovel.md": {
  id: "visualnovel.md",
  slug: "visualnovel",
  body: string,
  collection: "journal",
  data: InferEntrySchema<"journal">
},
},
"legal": {
"eula.md": {
  id: "eula.md",
  slug: "eula",
  body: string,
  collection: "legal",
  data: InferEntrySchema<"legal">
},
"privacy.md": {
  id: "privacy.md",
  slug: "privacy",
  body: string,
  collection: "legal",
  data: InferEntrySchema<"legal">
},
"tos.md": {
  id: "tos.md",
  slug: "tos",
  body: string,
  collection: "legal",
  data: InferEntrySchema<"legal">
},
},
"manga": {
"rj/main.md": {
  id: "rj/main.md",
  slug: "rj/main",
  body: string,
  collection: "manga",
  data: any
},
},
"news": {
"release-rigor.md": {
  id: "release-rigor.md",
  slug: "release-rigor",
  body: string,
  collection: "news",
  data: InferEntrySchema<"news">
},
},
"npc": {
"lucifurr.md": {
  id: "lucifurr.md",
  slug: "lucifurr",
  body: string,
  collection: "npc",
  data: any
},
},
"play": {
"wvn.mdx": {
  id: "wvn.mdx",
  slug: "wvn",
  body: string,
  collection: "play",
  data: InferEntrySchema<"play">
},
},
"releases": {
"1.md": {
  id: "1.md",
  slug: "1",
  body: string,
  collection: "releases",
  data: InferEntrySchema<"releases">
},
},
"security": {
"xss.md": {
  id: "xss.md",
  slug: "xss",
  body: string,
  collection: "security",
  data: InferEntrySchema<"security">
},
},
"stock": {
"aapl.md": {
  id: "aapl.md",
  slug: "aapl",
  body: string,
  collection: "stock",
  data: InferEntrySchema<"stock">
},
"spy.md": {
  id: "spy.md",
  slug: "spy",
  body: string,
  collection: "stock",
  data: InferEntrySchema<"stock">
},
"tsla.md": {
  id: "tsla.md",
  slug: "tsla",
  body: string,
  collection: "stock",
  data: InferEntrySchema<"stock">
},
"vt.md": {
  id: "vt.md",
  slug: "vt",
  body: string,
  collection: "stock",
  data: InferEntrySchema<"stock">
},
},
"team": {
"example.md": {
  id: "example.md",
  slug: "example",
  body: string,
  collection: "team",
  data: InferEntrySchema<"team">
},
"h0lybyte.md": {
  id: "h0lybyte.md",
  slug: "h0lybyte",
  body: string,
  collection: "team",
  data: InferEntrySchema<"team">
},
"lvl21bellsprout.md": {
  id: "lvl21bellsprout.md",
  slug: "lvl21bellsprout",
  body: string,
  collection: "team",
  data: InferEntrySchema<"team">
},
"sean.md": {
  id: "sean.md",
  slug: "sean",
  body: string,
  collection: "team",
  data: InferEntrySchema<"team">
},
"silver91.md": {
  id: "silver91.md",
  slug: "silver91",
  body: string,
  collection: "team",
  data: InferEntrySchema<"team">
},
},
"theory": {
"deadcode.md": {
  id: "deadcode.md",
  slug: "deadcode",
  body: string,
  collection: "theory",
  data: InferEntrySchema<"theory">
},
"fintech.md": {
  id: "fintech.md",
  slug: "fintech",
  body: string,
  collection: "theory",
  data: InferEntrySchema<"theory">
},
"matrix.md": {
  id: "matrix.md",
  slug: "matrix",
  body: string,
  collection: "theory",
  data: InferEntrySchema<"theory">
},
"programming.md": {
  id: "programming.md",
  slug: "programming",
  body: string,
  collection: "theory",
  data: InferEntrySchema<"theory">
},
},
"tools": {
"status.md": {
  id: "status.md",
  slug: "status",
  body: string,
  collection: "tools",
  data: any
},
"webmaster.md": {
  id: "webmaster.md",
  slug: "webmaster",
  body: string,
  collection: "tools",
  data: any
},
},
"website": {
"footer/applications.md": {
  id: "footer/applications.md",
  slug: "footer/applications",
  body: string,
  collection: "website",
  data: InferEntrySchema<"website">
},
"footer/assets.md": {
  id: "footer/assets.md",
  slug: "footer/assets",
  body: string,
  collection: "website",
  data: InferEntrySchema<"website">
},
"footer/contact.md": {
  id: "footer/contact.md",
  slug: "footer/contact",
  body: string,
  collection: "website",
  data: InferEntrySchema<"website">
},
"footer/legal.md": {
  id: "footer/legal.md",
  slug: "footer/legal",
  body: string,
  collection: "website",
  data: InferEntrySchema<"website">
},
"footer/login.md": {
  id: "footer/login.md",
  slug: "footer/login",
  body: string,
  collection: "website",
  data: InferEntrySchema<"website">
},
"footer/privacy.md": {
  id: "footer/privacy.md",
  slug: "footer/privacy",
  body: string,
  collection: "website",
  data: InferEntrySchema<"website">
},
"footer/profile.md": {
  id: "footer/profile.md",
  slug: "footer/profile",
  body: string,
  collection: "website",
  data: InferEntrySchema<"website">
},
"footer/projects.md": {
  id: "footer/projects.md",
  slug: "footer/projects",
  body: string,
  collection: "website",
  data: InferEntrySchema<"website">
},
"footer/register.md": {
  id: "footer/register.md",
  slug: "footer/register",
  body: string,
  collection: "website",
  data: InferEntrySchema<"website">
},
"footer/shop.md": {
  id: "footer/shop.md",
  slug: "footer/shop",
  body: string,
  collection: "website",
  data: InferEntrySchema<"website">
},
"footer/support.md": {
  id: "footer/support.md",
  slug: "footer/support",
  body: string,
  collection: "website",
  data: InferEntrySchema<"website">
},
"footer/terms.md": {
  id: "footer/terms.md",
  slug: "footer/terms",
  body: string,
  collection: "website",
  data: InferEntrySchema<"website">
},
},

	};

	type ContentConfig = typeof import("./config");
}
