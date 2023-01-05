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
"android.md": {
  id: "android.md",
  slug: "android",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"ansible.md": {
  id: "ansible.md",
  slug: "ansible",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"authelia.md": {
  id: "authelia.md",
  slug: "authelia",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"cubejs.md": {
  id: "cubejs.md",
  slug: "cubejs",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"docker.md": {
  id: "docker.md",
  slug: "docker",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"flipperzero.md": {
  id: "flipperzero.md",
  slug: "flipperzero",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"flutter.md": {
  id: "flutter.md",
  slug: "flutter",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"gcloud.md": {
  id: "gcloud.md",
  slug: "gcloud",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"git.md": {
  id: "git.md",
  slug: "git",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"godot.md": {
  id: "godot.md",
  slug: "godot",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"javascript.md": {
  id: "javascript.md",
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
"longhorn.md": {
  id: "longhorn.md",
  slug: "longhorn",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"lvm.md": {
  id: "lvm.md",
  slug: "lvm",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"ml.md": {
  id: "ml.md",
  slug: "ml",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"mysql.md": {
  id: "mysql.md",
  slug: "mysql",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"nftables.md": {
  id: "nftables.md",
  slug: "nftables",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"nmap.md": {
  id: "nmap.md",
  slug: "nmap",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"nomad.md": {
  id: "nomad.md",
  slug: "nomad",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"obsidian.md": {
  id: "obsidian.md",
  slug: "obsidian",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"php.md": {
  id: "php.md",
  slug: "php",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"portainer.md": {
  id: "portainer.md",
  slug: "portainer",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"proxmox.md": {
  id: "proxmox.md",
  slug: "proxmox",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"pterodactyl.md": {
  id: "pterodactyl.md",
  slug: "pterodactyl",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"rust.md": {
  id: "rust.md",
  slug: "rust",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"strapi.md": {
  id: "strapi.md",
  slug: "strapi",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"terraform.md": {
  id: "terraform.md",
  slug: "terraform",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"traefik.md": {
  id: "traefik.md",
  slug: "traefik",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"unity.md": {
  id: "unity.md",
  slug: "unity",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"void.md": {
  id: "void.md",
  slug: "void",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"watchtower.md": {
  id: "watchtower.md",
  slug: "watchtower",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"webserver.md": {
  id: "webserver.md",
  slug: "webserver",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"wireguard.md": {
  id: "wireguard.md",
  slug: "wireguard",
  body: string,
  collection: "application",
  data: InferEntrySchema<"application">
},
"zsh.md": {
  id: "zsh.md",
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
"lol.md": {
  id: "lol.md",
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
