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
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"arcade": {
"fishchip.mdx": {
	id: "fishchip.mdx";
  slug: "fishchip";
  body: string;
  collection: "arcade";
  data: InferEntrySchema<"arcade">
} & { render(): Render[".mdx"] };
"robot-unicorn-attack.mdx": {
	id: "robot-unicorn-attack.mdx";
  slug: "robot-unicorn-attack";
  body: string;
  collection: "arcade";
  data: InferEntrySchema<"arcade">
} & { render(): Render[".mdx"] };
"travelbox.mdx": {
	id: "travelbox.mdx";
  slug: "travelbox";
  body: string;
  collection: "arcade";
  data: InferEntrySchema<"arcade">
} & { render(): Render[".mdx"] };
"typing.mdx": {
	id: "typing.mdx";
  slug: "typing";
  body: string;
  collection: "arcade";
  data: InferEntrySchema<"arcade">
} & { render(): Render[".mdx"] };
};
"blog": {
"post-1.md": {
	id: "post-1.md";
  slug: "post-1";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"post-2.md": {
	id: "post-2.md";
  slug: "post-2";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"post-3.md": {
	id: "post-3.md";
  slug: "post-3";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
};
"comic": {
};
"docs": {
"advanced/technical-specifications.mdx": {
	id: "advanced/technical-specifications.mdx";
  slug: "advanced/technical-specifications";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"application/android.mdx": {
	id: "application/android.mdx";
  slug: "application/android";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"application/ansible.mdx": {
	id: "application/ansible.mdx";
  slug: "application/ansible";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"application/appwrite.mdx": {
	id: "application/appwrite.mdx";
  slug: "application/appwrite";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"application/authelia.mdx": {
	id: "application/authelia.mdx";
  slug: "application/authelia";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"application/cubejs.mdx": {
	id: "application/cubejs.mdx";
  slug: "application/cubejs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"application/docker.mdx": {
	id: "application/docker.mdx";
  slug: "application/docker";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"application/flipperzero.mdx": {
	id: "application/flipperzero.mdx";
  slug: "application/flipperzero";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"application/flutter.mdx": {
	id: "application/flutter.mdx";
  slug: "application/flutter";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"application/gcloud.mdx": {
	id: "application/gcloud.mdx";
  slug: "application/gcloud";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"application/git.mdx": {
	id: "application/git.mdx";
  slug: "application/git";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"application/godot.mdx": {
	id: "application/godot.mdx";
  slug: "application/godot";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"application/index.mdx": {
	id: "application/index.mdx";
  slug: "application";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"application/javascript.mdx": {
	id: "application/javascript.mdx";
  slug: "application/javascript";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"application/kubernetes.mdx": {
	id: "application/kubernetes.mdx";
  slug: "application/kubernetes";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"application/linux.mdx": {
	id: "application/linux.mdx";
  slug: "application/linux";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"application/longhorn.mdx": {
	id: "application/longhorn.mdx";
  slug: "application/longhorn";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"application/ml.mdx": {
	id: "application/ml.mdx";
  slug: "application/ml";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"application/n8n.mdx": {
	id: "application/n8n.mdx";
  slug: "application/n8n";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"application/nginx.mdx": {
	id: "application/nginx.mdx";
  slug: "application/nginx";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"application/nmap.mdx": {
	id: "application/nmap.mdx";
  slug: "application/nmap";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"application/nomad.mdx": {
	id: "application/nomad.mdx";
  slug: "application/nomad";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"application/obs.mdx": {
	id: "application/obs.mdx";
  slug: "application/obs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"application/php.mdx": {
	id: "application/php.mdx";
  slug: "application/php";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"application/pocketbase.mdx": {
	id: "application/pocketbase.mdx";
  slug: "application/pocketbase";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"application/portainer.mdx": {
	id: "application/portainer.mdx";
  slug: "application/portainer";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"application/proxmox.mdx": {
	id: "application/proxmox.mdx";
  slug: "application/proxmox";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"application/python.mdx": {
	id: "application/python.mdx";
  slug: "application/python";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"application/redis.mdx": {
	id: "application/redis.mdx";
  slug: "application/redis";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"application/rust.mdx": {
	id: "application/rust.mdx";
  slug: "application/rust";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"application/sql.mdx": {
	id: "application/sql.mdx";
  slug: "application/sql";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"application/terraform.mdx": {
	id: "application/terraform.mdx";
  slug: "application/terraform";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"application/traefik.mdx": {
	id: "application/traefik.mdx";
  slug: "application/traefik";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"application/unity.mdx": {
	id: "application/unity.mdx";
  slug: "application/unity";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"application/v01d.mdx": {
	id: "application/v01d.mdx";
  slug: "application/v01d";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"application/wireguard.mdx": {
	id: "application/wireguard.mdx";
  slug: "application/wireguard";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"construction/custom-solutions.mdx": {
	id: "construction/custom-solutions.mdx";
  slug: "construction/custom-solutions";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"construction/project-planning.mdx": {
	id: "construction/project-planning.mdx";
  slug: "construction/project-planning";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"construction/safety.mdx": {
	id: "construction/safety.mdx";
  slug: "construction/safety";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"construction/service-overview.mdx": {
	id: "construction/service-overview.mdx";
  slug: "construction/service-overview";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"crypto/btc.mdx": {
	id: "crypto/btc.mdx";
  slug: "crypto/btc";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"crypto/doge.mdx": {
	id: "crypto/doge.mdx";
  slug: "crypto/doge";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"crypto/eth.mdx": {
	id: "crypto/eth.mdx";
  slug: "crypto/eth";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"crypto/index.mdx": {
	id: "crypto/index.mdx";
  slug: "crypto";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"de/guides/first-project-checklist.mdx": {
	id: "de/guides/first-project-checklist.mdx";
  slug: "de/guides/first-project-checklist";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"de/guides/getting-started.mdx": {
	id: "de/guides/getting-started.mdx";
  slug: "de/guides/getting-started";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"de/guides/intro.mdx": {
	id: "de/guides/intro.mdx";
  slug: "de/guides/intro";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"de/welcome-to-docs.mdx": {
	id: "de/welcome-to-docs.mdx";
  slug: "de/welcome-to-docs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/guides/first-project-checklist.mdx": {
	id: "es/guides/first-project-checklist.mdx";
  slug: "es/guides/first-project-checklist";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/guides/getting-started.mdx": {
	id: "es/guides/getting-started.mdx";
  slug: "es/guides/getting-started";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/guides/intro.mdx": {
	id: "es/guides/intro.mdx";
  slug: "es/guides/intro";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"es/welcome-to-docs.mdx": {
	id: "es/welcome-to-docs.mdx";
  slug: "es/welcome-to-docs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fa/guides/first-project-checklist.mdx": {
	id: "fa/guides/first-project-checklist.mdx";
  slug: "fa/guides/first-project-checklist";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fa/guides/getting-started.mdx": {
	id: "fa/guides/getting-started.mdx";
  slug: "fa/guides/getting-started";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fa/guides/intro.mdx": {
	id: "fa/guides/intro.mdx";
  slug: "fa/guides/intro";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fa/welcome-to-docs.mdx": {
	id: "fa/welcome-to-docs.mdx";
  slug: "fa/welcome-to-docs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fr/guides/first-project-checklist.mdx": {
	id: "fr/guides/first-project-checklist.mdx";
  slug: "fr/guides/first-project-checklist";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fr/guides/getting-started.mdx": {
	id: "fr/guides/getting-started.mdx";
  slug: "fr/guides/getting-started";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fr/guides/intro.mdx": {
	id: "fr/guides/intro.mdx";
  slug: "fr/guides/intro";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"fr/welcome-to-docs.mdx": {
	id: "fr/welcome-to-docs.mdx";
  slug: "fr/welcome-to-docs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"gaming/index.mdx": {
	id: "gaming/index.mdx";
  slug: "gaming";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"gaming/lol.mdx": {
	id: "gaming/lol.mdx";
  slug: "gaming/lol";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"gaming/rimworld.mdx": {
	id: "gaming/rimworld.mdx";
  slug: "gaming/rimworld";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"gaming/titanfall.mdx": {
	id: "gaming/titanfall.mdx";
  slug: "gaming/titanfall";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/first-project-checklist.mdx": {
	id: "guides/first-project-checklist.mdx";
  slug: "guides/first-project-checklist";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/getting-started.mdx": {
	id: "guides/getting-started.mdx";
  slug: "guides/getting-started";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"guides/intro.mdx": {
	id: "guides/intro.mdx";
  slug: "guides/intro";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"itemdb/food/candy.mdx": {
	id: "itemdb/food/candy.mdx";
  slug: "itemdb/food/candy";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"itemdb/food/fish.mdx": {
	id: "itemdb/food/fish.mdx";
  slug: "itemdb/food/fish";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"itemdb/food/index.mdx": {
	id: "itemdb/food/index.mdx";
  slug: "itemdb/food";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"itemdb/index.mdx": {
	id: "itemdb/index.mdx";
  slug: "itemdb";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"itemdb/potion/alchemist.mdx": {
	id: "itemdb/potion/alchemist.mdx";
  slug: "itemdb/potion/alchemist";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"itemdb/potion/evesbar.mdx": {
	id: "itemdb/potion/evesbar.mdx";
  slug: "itemdb/potion/evesbar";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"itemdb/potion/index.mdx": {
	id: "itemdb/potion/index.mdx";
  slug: "itemdb/potion";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"ja/guides/first-project-checklist.mdx": {
	id: "ja/guides/first-project-checklist.mdx";
  slug: "ja/guides/first-project-checklist";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"ja/guides/getting-started.mdx": {
	id: "ja/guides/getting-started.mdx";
  slug: "ja/guides/getting-started";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"ja/guides/intro.mdx": {
	id: "ja/guides/intro.mdx";
  slug: "ja/guides/intro";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"ja/welcome-to-docs.mdx": {
	id: "ja/welcome-to-docs.mdx";
  slug: "ja/welcome-to-docs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"legal/disclaimer.mdx": {
	id: "legal/disclaimer.mdx";
  slug: "legal/disclaimer";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"legal/eula.mdx": {
	id: "legal/eula.mdx";
  slug: "legal/eula";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"legal/index.mdx": {
	id: "legal/index.mdx";
  slug: "legal";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"legal/privacy.mdx": {
	id: "legal/privacy.mdx";
  slug: "legal/privacy";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"legal/tos.mdx": {
	id: "legal/tos.mdx";
  slug: "legal/tos";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"maps/ccc.mdx": {
	id: "maps/ccc.mdx";
  slug: "maps/ccc";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"music/ambient.mdx": {
	id: "music/ambient.mdx";
  slug: "music/ambient";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"music/chillstep.mdx": {
	id: "music/chillstep.mdx";
  slug: "music/chillstep";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"music/dnb.mdx": {
	id: "music/dnb.mdx";
  slug: "music/dnb";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"music/edm.mdx": {
	id: "music/edm.mdx";
  slug: "music/edm";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"music/electroswing.mdx": {
	id: "music/electroswing.mdx";
  slug: "music/electroswing";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"music/index.mdx": {
	id: "music/index.mdx";
  slug: "music";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"music/kbve.mdx": {
	id: "music/kbve.mdx";
  slug: "music/kbve";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"music/lofihiphop.mdx": {
	id: "music/lofihiphop.mdx";
  slug: "music/lofihiphop";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"music/nujazz.mdx": {
	id: "music/nujazz.mdx";
  slug: "music/nujazz";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"music/rock.mdx": {
	id: "music/rock.mdx";
  slug: "music/rock";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"music/studybeats.mdx": {
	id: "music/studybeats.mdx";
  slug: "music/studybeats";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"npcdb/citizen/chip.mdx": {
	id: "npcdb/citizen/chip.mdx";
  slug: "npcdb/citizen/chip";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"npcdb/citizen/fudster.mdx": {
	id: "npcdb/citizen/fudster.mdx";
  slug: "npcdb/citizen/fudster";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"npcdb/citizen/ignatius-hollow.mdx": {
	id: "npcdb/citizen/ignatius-hollow.mdx";
  slug: "npcdb/citizen/ignatius-hollow";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"npcdb/index.mdx": {
	id: "npcdb/index.mdx";
  slug: "npcdb";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"project/api.mdx": {
	id: "project/api.mdx";
  slug: "project/api";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"project/ar.mdx": {
	id: "project/ar.mdx";
  slug: "project/ar";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"project/atlas.mdx": {
	id: "project/atlas.mdx";
  slug: "project/atlas";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"project/charles.mdx": {
	id: "project/charles.mdx";
  slug: "project/charles";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"project/cityvote.mdx": {
	id: "project/cityvote.mdx";
  slug: "project/cityvote";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"project/cryptothrone.mdx": {
	id: "project/cryptothrone.mdx";
  slug: "project/cryptothrone";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"project/graph.mdx": {
	id: "project/graph.mdx";
  slug: "project/graph";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"project/herbmail.mdx": {
	id: "project/herbmail.mdx";
  slug: "project/herbmail";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"project/index.mdx": {
	id: "project/index.mdx";
  slug: "project";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"project/lofifocus.mdx": {
	id: "project/lofifocus.mdx";
  slug: "project/lofifocus";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"project/rareicon.mdx": {
	id: "project/rareicon.mdx";
  slug: "project/rareicon";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"project/vip.mdx": {
	id: "project/vip.mdx";
  slug: "project/vip";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"recipe/mango-juice.mdx": {
	id: "recipe/mango-juice.mdx";
  slug: "recipe/mango-juice";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"recipe/mcconaughey-diet.mdx": {
	id: "recipe/mcconaughey-diet.mdx";
  slug: "recipe/mcconaughey-diet";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"shop/index.mdx": {
	id: "shop/index.mdx";
  slug: "shop";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"shop/services/ai-tools.mdx": {
	id: "shop/services/ai-tools.mdx";
  slug: "shop/services/ai-tools";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"shop/services/api-development.mdx": {
	id: "shop/services/api-development.mdx";
  slug: "shop/services/api-development";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"shop/services/data-storage.mdx": {
	id: "shop/services/data-storage.mdx";
  slug: "shop/services/data-storage";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"shop/services/software-automation.mdx": {
	id: "shop/services/software-automation.mdx";
  slug: "shop/services/software-automation";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"stock/aapl.mdx": {
	id: "stock/aapl.mdx";
  slug: "stock/aapl";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"stock/tsla.mdx": {
	id: "stock/tsla.mdx";
  slug: "stock/tsla";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"theory/automation.mdx": {
	id: "theory/automation.mdx";
  slug: "theory/automation";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"theory/deadcode.mdx": {
	id: "theory/deadcode.mdx";
  slug: "theory/deadcode";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"theory/emulation.mdx": {
	id: "theory/emulation.mdx";
  slug: "theory/emulation";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"theory/programming.mdx": {
	id: "theory/programming.mdx";
  slug: "theory/programming";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"theory/socialmedia.mdx": {
	id: "theory/socialmedia.mdx";
  slug: "theory/socialmedia";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"theory/solarpunk.mdx": {
	id: "theory/solarpunk.mdx";
  slug: "theory/solarpunk";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"theory/swartz-guerilla-manifesto.mdx": {
	id: "theory/swartz-guerilla-manifesto.mdx";
  slug: "theory/swartz-guerilla-manifesto";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/conch.mdx": {
	id: "tools/conch.mdx";
  slug: "tools/conch";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/equipment-care.mdx": {
	id: "tools/equipment-care.mdx";
  slug: "tools/equipment-care";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/index.mdx": {
	id: "tools/index.mdx";
  slug: "tools";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"tools/tool-guides.mdx": {
	id: "tools/tool-guides.mdx";
  slug: "tools/tool-guides";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"travel/index.mdx": {
	id: "travel/index.mdx";
  slug: "travel";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"webmaster/index.mdx": {
	id: "webmaster/index.mdx";
  slug: "webmaster";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"welcome-to-docs.mdx": {
	id: "welcome-to-docs.mdx";
  slug: "welcome-to-docs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"zh-cn/guides/first-project-checklist.mdx": {
	id: "zh-cn/guides/first-project-checklist.mdx";
  slug: "zh-cn/guides/first-project-checklist";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"zh-cn/guides/getting-started.mdx": {
	id: "zh-cn/guides/getting-started.mdx";
  slug: "zh-cn/guides/getting-started";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"zh-cn/guides/intro.mdx": {
	id: "zh-cn/guides/intro.mdx";
  slug: "zh-cn/guides/intro";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"zh-cn/welcome-to-docs.mdx": {
	id: "zh-cn/welcome-to-docs.mdx";
  slug: "zh-cn/welcome-to-docs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
};
"experiments": {
"wasm.md": {
	id: "wasm.md";
  slug: "wasm";
  body: string;
  collection: "experiments";
  data: any
} & { render(): Render[".md"] };
};
"graveyard": {
"12-22.mdx": {
	id: "12-22.mdx";
  slug: "12-22";
  body: string;
  collection: "graveyard";
  data: any
} & { render(): Render[".mdx"] };
"12-23.mdx": {
	id: "12-23.mdx";
  slug: "12-23";
  body: string;
  collection: "graveyard";
  data: any
} & { render(): Render[".mdx"] };
"12-24.mdx": {
	id: "12-24.mdx";
  slug: "12-24";
  body: string;
  collection: "graveyard";
  data: any
} & { render(): Render[".mdx"] };
"12-25.mdx": {
	id: "12-25.mdx";
  slug: "12-25";
  body: string;
  collection: "graveyard";
  data: any
} & { render(): Render[".mdx"] };
"12-26.mdx": {
	id: "12-26.mdx";
  slug: "12-26";
  body: string;
  collection: "graveyard";
  data: any
} & { render(): Render[".mdx"] };
"12-27.mdx": {
	id: "12-27.mdx";
  slug: "12-27";
  body: string;
  collection: "graveyard";
  data: any
} & { render(): Render[".mdx"] };
"12-28.mdx": {
	id: "12-28.mdx";
  slug: "12-28";
  body: string;
  collection: "graveyard";
  data: any
} & { render(): Render[".mdx"] };
"12-29.mdx": {
	id: "12-29.mdx";
  slug: "12-29";
  body: string;
  collection: "graveyard";
  data: any
} & { render(): Render[".mdx"] };
"12-30.mdx": {
	id: "12-30.mdx";
  slug: "12-30";
  body: string;
  collection: "graveyard";
  data: any
} & { render(): Render[".mdx"] };
"12-31.mdx": {
	id: "12-31.mdx";
  slug: "12-31";
  body: string;
  collection: "graveyard";
  data: any
} & { render(): Render[".mdx"] };
};
"insights": {
"insight-1.md": {
	id: "insight-1.md";
  slug: "insight-1";
  body: string;
  collection: "insights";
  data: InferEntrySchema<"insights">
} & { render(): Render[".md"] };
"insight-2.md": {
	id: "insight-2.md";
  slug: "insight-2";
  body: string;
  collection: "insights";
  data: InferEntrySchema<"insights">
} & { render(): Render[".md"] };
"insight-3.md": {
	id: "insight-3.md";
  slug: "insight-3";
  body: string;
  collection: "insights";
  data: InferEntrySchema<"insights">
} & { render(): Render[".md"] };
};
"journal": {
"01-01.mdx": {
	id: "01-01.mdx";
  slug: "01-01";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"01-02.mdx": {
	id: "01-02.mdx";
  slug: "01-02";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"01-03.mdx": {
	id: "01-03.mdx";
  slug: "01-03";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"01-04.mdx": {
	id: "01-04.mdx";
  slug: "01-04";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"01-05.mdx": {
	id: "01-05.mdx";
  slug: "01-05";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"01-06.mdx": {
	id: "01-06.mdx";
  slug: "01-06";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"01-07.mdx": {
	id: "01-07.mdx";
  slug: "01-07";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"01-08.mdx": {
	id: "01-08.mdx";
  slug: "01-08";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"01-09.mdx": {
	id: "01-09.mdx";
  slug: "01-09";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"01-10.mdx": {
	id: "01-10.mdx";
  slug: "01-10";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"01-11.mdx": {
	id: "01-11.mdx";
  slug: "01-11";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"01-12.mdx": {
	id: "01-12.mdx";
  slug: "01-12";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"01-13.mdx": {
	id: "01-13.mdx";
  slug: "01-13";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"01-14.mdx": {
	id: "01-14.mdx";
  slug: "01-14";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"01-15.mdx": {
	id: "01-15.mdx";
  slug: "01-15";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"01-16.mdx": {
	id: "01-16.mdx";
  slug: "01-16";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"01-17.mdx": {
	id: "01-17.mdx";
  slug: "01-17";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"01-18.mdx": {
	id: "01-18.mdx";
  slug: "01-18";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"01-19.mdx": {
	id: "01-19.mdx";
  slug: "01-19";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"01-20.mdx": {
	id: "01-20.mdx";
  slug: "01-20";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"01-21.mdx": {
	id: "01-21.mdx";
  slug: "01-21";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"01-22.mdx": {
	id: "01-22.mdx";
  slug: "01-22";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"01-23.mdx": {
	id: "01-23.mdx";
  slug: "01-23";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"01-24.mdx": {
	id: "01-24.mdx";
  slug: "01-24";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"01-25.mdx": {
	id: "01-25.mdx";
  slug: "01-25";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"01-26.mdx": {
	id: "01-26.mdx";
  slug: "01-26";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"01-27.mdx": {
	id: "01-27.mdx";
  slug: "01-27";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"01-28.mdx": {
	id: "01-28.mdx";
  slug: "01-28";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"01-29.mdx": {
	id: "01-29.mdx";
  slug: "01-29";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"01-30.mdx": {
	id: "01-30.mdx";
  slug: "01-30";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"01-31.mdx": {
	id: "01-31.mdx";
  slug: "01-31";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"02-01.mdx": {
	id: "02-01.mdx";
  slug: "02-01";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"02-02.mdx": {
	id: "02-02.mdx";
  slug: "02-02";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"02-03.mdx": {
	id: "02-03.mdx";
  slug: "02-03";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"02-04.mdx": {
	id: "02-04.mdx";
  slug: "02-04";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"02-05.mdx": {
	id: "02-05.mdx";
  slug: "02-05";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"02-06.mdx": {
	id: "02-06.mdx";
  slug: "02-06";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"02-07.mdx": {
	id: "02-07.mdx";
  slug: "02-07";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"02-08.mdx": {
	id: "02-08.mdx";
  slug: "02-08";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"02-09.mdx": {
	id: "02-09.mdx";
  slug: "02-09";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"02-10.mdx": {
	id: "02-10.mdx";
  slug: "02-10";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"02-11.mdx": {
	id: "02-11.mdx";
  slug: "02-11";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"02-12.mdx": {
	id: "02-12.mdx";
  slug: "02-12";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"02-13.mdx": {
	id: "02-13.mdx";
  slug: "02-13";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"02-14.mdx": {
	id: "02-14.mdx";
  slug: "02-14";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"02-15.mdx": {
	id: "02-15.mdx";
  slug: "02-15";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"02-16.mdx": {
	id: "02-16.mdx";
  slug: "02-16";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"02-17.mdx": {
	id: "02-17.mdx";
  slug: "02-17";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"02-18.mdx": {
	id: "02-18.mdx";
  slug: "02-18";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"02-19.mdx": {
	id: "02-19.mdx";
  slug: "02-19";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"02-20.mdx": {
	id: "02-20.mdx";
  slug: "02-20";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"02-21.mdx": {
	id: "02-21.mdx";
  slug: "02-21";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"02-22.mdx": {
	id: "02-22.mdx";
  slug: "02-22";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"02-23.mdx": {
	id: "02-23.mdx";
  slug: "02-23";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"02-24.mdx": {
	id: "02-24.mdx";
  slug: "02-24";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"02-25.mdx": {
	id: "02-25.mdx";
  slug: "02-25";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"02-26.mdx": {
	id: "02-26.mdx";
  slug: "02-26";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"02-27.mdx": {
	id: "02-27.mdx";
  slug: "02-27";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"02-28.mdx": {
	id: "02-28.mdx";
  slug: "02-28";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"02-29.mdx": {
	id: "02-29.mdx";
  slug: "02-29";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"03-01.mdx": {
	id: "03-01.mdx";
  slug: "03-01";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"03-02.mdx": {
	id: "03-02.mdx";
  slug: "03-02";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"03-03.mdx": {
	id: "03-03.mdx";
  slug: "03-03";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"03-04.mdx": {
	id: "03-04.mdx";
  slug: "03-04";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"03-05.mdx": {
	id: "03-05.mdx";
  slug: "03-05";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"03-06.mdx": {
	id: "03-06.mdx";
  slug: "03-06";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"03-07.mdx": {
	id: "03-07.mdx";
  slug: "03-07";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"03-08.mdx": {
	id: "03-08.mdx";
  slug: "03-08";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"03-09.mdx": {
	id: "03-09.mdx";
  slug: "03-09";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"03-10.mdx": {
	id: "03-10.mdx";
  slug: "03-10";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"03-11.mdx": {
	id: "03-11.mdx";
  slug: "03-11";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"03-12.mdx": {
	id: "03-12.mdx";
  slug: "03-12";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"03-13.mdx": {
	id: "03-13.mdx";
  slug: "03-13";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"03-14.mdx": {
	id: "03-14.mdx";
  slug: "03-14";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"03-15.mdx": {
	id: "03-15.mdx";
  slug: "03-15";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"03-16.mdx": {
	id: "03-16.mdx";
  slug: "03-16";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"03-17.mdx": {
	id: "03-17.mdx";
  slug: "03-17";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"03-18.mdx": {
	id: "03-18.mdx";
  slug: "03-18";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"03-19.mdx": {
	id: "03-19.mdx";
  slug: "03-19";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"03-20.mdx": {
	id: "03-20.mdx";
  slug: "03-20";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"03-21.mdx": {
	id: "03-21.mdx";
  slug: "03-21";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"03-22.mdx": {
	id: "03-22.mdx";
  slug: "03-22";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"03-23.mdx": {
	id: "03-23.mdx";
  slug: "03-23";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"03-24.mdx": {
	id: "03-24.mdx";
  slug: "03-24";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"03-25.mdx": {
	id: "03-25.mdx";
  slug: "03-25";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"03-26.mdx": {
	id: "03-26.mdx";
  slug: "03-26";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"03-27.mdx": {
	id: "03-27.mdx";
  slug: "03-27";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"03-28.mdx": {
	id: "03-28.mdx";
  slug: "03-28";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"03-29.mdx": {
	id: "03-29.mdx";
  slug: "03-29";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"03-30.mdx": {
	id: "03-30.mdx";
  slug: "03-30";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"03-31.mdx": {
	id: "03-31.mdx";
  slug: "03-31";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"04-01.mdx": {
	id: "04-01.mdx";
  slug: "04-01";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"04-02.mdx": {
	id: "04-02.mdx";
  slug: "04-02";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"04-03.mdx": {
	id: "04-03.mdx";
  slug: "04-03";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"04-04.mdx": {
	id: "04-04.mdx";
  slug: "04-04";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"04-05.mdx": {
	id: "04-05.mdx";
  slug: "04-05";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"04-06.mdx": {
	id: "04-06.mdx";
  slug: "04-06";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"04-07.mdx": {
	id: "04-07.mdx";
  slug: "04-07";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"04-08.mdx": {
	id: "04-08.mdx";
  slug: "04-08";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"04-09.mdx": {
	id: "04-09.mdx";
  slug: "04-09";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"04-10.mdx": {
	id: "04-10.mdx";
  slug: "04-10";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"04-11.mdx": {
	id: "04-11.mdx";
  slug: "04-11";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"04-12.mdx": {
	id: "04-12.mdx";
  slug: "04-12";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"04-13.mdx": {
	id: "04-13.mdx";
  slug: "04-13";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"04-14.mdx": {
	id: "04-14.mdx";
  slug: "04-14";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"04-15.mdx": {
	id: "04-15.mdx";
  slug: "04-15";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"04-16.mdx": {
	id: "04-16.mdx";
  slug: "04-16";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"04-17.mdx": {
	id: "04-17.mdx";
  slug: "04-17";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"04-18.mdx": {
	id: "04-18.mdx";
  slug: "04-18";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"04-19.mdx": {
	id: "04-19.mdx";
  slug: "04-19";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"04-20.mdx": {
	id: "04-20.mdx";
  slug: "04-20";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"04-21.mdx": {
	id: "04-21.mdx";
  slug: "04-21";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"04-22.mdx": {
	id: "04-22.mdx";
  slug: "04-22";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"04-23.mdx": {
	id: "04-23.mdx";
  slug: "04-23";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"04-24.mdx": {
	id: "04-24.mdx";
  slug: "04-24";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"04-25.mdx": {
	id: "04-25.mdx";
  slug: "04-25";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"04-26.mdx": {
	id: "04-26.mdx";
  slug: "04-26";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"04-27.mdx": {
	id: "04-27.mdx";
  slug: "04-27";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"04-28.mdx": {
	id: "04-28.mdx";
  slug: "04-28";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"04-29.mdx": {
	id: "04-29.mdx";
  slug: "04-29";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"04-30.mdx": {
	id: "04-30.mdx";
  slug: "04-30";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"05-01.mdx": {
	id: "05-01.mdx";
  slug: "05-01";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"05-02.mdx": {
	id: "05-02.mdx";
  slug: "05-02";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"05-03.mdx": {
	id: "05-03.mdx";
  slug: "05-03";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"05-04.mdx": {
	id: "05-04.mdx";
  slug: "05-04";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"05-05.mdx": {
	id: "05-05.mdx";
  slug: "05-05";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"05-06.mdx": {
	id: "05-06.mdx";
  slug: "05-06";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"05-07.mdx": {
	id: "05-07.mdx";
  slug: "05-07";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"05-08.mdx": {
	id: "05-08.mdx";
  slug: "05-08";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"05-09.mdx": {
	id: "05-09.mdx";
  slug: "05-09";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"05-10.mdx": {
	id: "05-10.mdx";
  slug: "05-10";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"05-11.mdx": {
	id: "05-11.mdx";
  slug: "05-11";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"05-12.mdx": {
	id: "05-12.mdx";
  slug: "05-12";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"05-13.mdx": {
	id: "05-13.mdx";
  slug: "05-13";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"05-14.mdx": {
	id: "05-14.mdx";
  slug: "05-14";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"05-15.mdx": {
	id: "05-15.mdx";
  slug: "05-15";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"05-16.mdx": {
	id: "05-16.mdx";
  slug: "05-16";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"05-17.mdx": {
	id: "05-17.mdx";
  slug: "05-17";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"05-18.mdx": {
	id: "05-18.mdx";
  slug: "05-18";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"05-19.mdx": {
	id: "05-19.mdx";
  slug: "05-19";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"05-20.mdx": {
	id: "05-20.mdx";
  slug: "05-20";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"05-21.mdx": {
	id: "05-21.mdx";
  slug: "05-21";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"05-22.mdx": {
	id: "05-22.mdx";
  slug: "05-22";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"05-23.mdx": {
	id: "05-23.mdx";
  slug: "05-23";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"05-24.mdx": {
	id: "05-24.mdx";
  slug: "05-24";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"05-25.mdx": {
	id: "05-25.mdx";
  slug: "05-25";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"05-26.mdx": {
	id: "05-26.mdx";
  slug: "05-26";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"05-27.mdx": {
	id: "05-27.mdx";
  slug: "05-27";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"05-28.mdx": {
	id: "05-28.mdx";
  slug: "05-28";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"05-29.mdx": {
	id: "05-29.mdx";
  slug: "05-29";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"05-30.mdx": {
	id: "05-30.mdx";
  slug: "05-30";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"05-31.mdx": {
	id: "05-31.mdx";
  slug: "05-31";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"06-01.mdx": {
	id: "06-01.mdx";
  slug: "06-01";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"06-02.mdx": {
	id: "06-02.mdx";
  slug: "06-02";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"06-03.mdx": {
	id: "06-03.mdx";
  slug: "06-03";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"06-04.mdx": {
	id: "06-04.mdx";
  slug: "06-04";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"06-05.mdx": {
	id: "06-05.mdx";
  slug: "06-05";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"06-06.mdx": {
	id: "06-06.mdx";
  slug: "06-06";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"06-07.mdx": {
	id: "06-07.mdx";
  slug: "06-07";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"06-08.mdx": {
	id: "06-08.mdx";
  slug: "06-08";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"06-09.mdx": {
	id: "06-09.mdx";
  slug: "06-09";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"06-10.mdx": {
	id: "06-10.mdx";
  slug: "06-10";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"06-11.mdx": {
	id: "06-11.mdx";
  slug: "06-11";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"06-12.mdx": {
	id: "06-12.mdx";
  slug: "06-12";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"06-13.mdx": {
	id: "06-13.mdx";
  slug: "06-13";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"06-14.mdx": {
	id: "06-14.mdx";
  slug: "06-14";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"06-15.mdx": {
	id: "06-15.mdx";
  slug: "06-15";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"06-16.mdx": {
	id: "06-16.mdx";
  slug: "06-16";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"06-17.mdx": {
	id: "06-17.mdx";
  slug: "06-17";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"06-18.mdx": {
	id: "06-18.mdx";
  slug: "06-18";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"06-19.mdx": {
	id: "06-19.mdx";
  slug: "06-19";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"06-20.mdx": {
	id: "06-20.mdx";
  slug: "06-20";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"06-21.mdx": {
	id: "06-21.mdx";
  slug: "06-21";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"06-22.mdx": {
	id: "06-22.mdx";
  slug: "06-22";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"06-23.mdx": {
	id: "06-23.mdx";
  slug: "06-23";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"06-24.mdx": {
	id: "06-24.mdx";
  slug: "06-24";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"06-25.mdx": {
	id: "06-25.mdx";
  slug: "06-25";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"06-26.mdx": {
	id: "06-26.mdx";
  slug: "06-26";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"06-27.mdx": {
	id: "06-27.mdx";
  slug: "06-27";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"06-28.mdx": {
	id: "06-28.mdx";
  slug: "06-28";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"06-29.mdx": {
	id: "06-29.mdx";
  slug: "06-29";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"06-30.mdx": {
	id: "06-30.mdx";
  slug: "06-30";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"07-01.mdx": {
	id: "07-01.mdx";
  slug: "07-01";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"07-02.mdx": {
	id: "07-02.mdx";
  slug: "07-02";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"07-03.mdx": {
	id: "07-03.mdx";
  slug: "07-03";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"07-04.mdx": {
	id: "07-04.mdx";
  slug: "07-04";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"07-05.mdx": {
	id: "07-05.mdx";
  slug: "07-05";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"07-06.mdx": {
	id: "07-06.mdx";
  slug: "07-06";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"07-07.mdx": {
	id: "07-07.mdx";
  slug: "07-07";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"07-08.mdx": {
	id: "07-08.mdx";
  slug: "07-08";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"07-09.mdx": {
	id: "07-09.mdx";
  slug: "07-09";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"07-10.mdx": {
	id: "07-10.mdx";
  slug: "07-10";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"07-11.mdx": {
	id: "07-11.mdx";
  slug: "07-11";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"07-12.mdx": {
	id: "07-12.mdx";
  slug: "07-12";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"07-13.mdx": {
	id: "07-13.mdx";
  slug: "07-13";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"07-14.mdx": {
	id: "07-14.mdx";
  slug: "07-14";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"07-15.mdx": {
	id: "07-15.mdx";
  slug: "07-15";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"07-16.mdx": {
	id: "07-16.mdx";
  slug: "07-16";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"07-17.mdx": {
	id: "07-17.mdx";
  slug: "07-17";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"07-18.mdx": {
	id: "07-18.mdx";
  slug: "07-18";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"07-19.mdx": {
	id: "07-19.mdx";
  slug: "07-19";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"07-20.mdx": {
	id: "07-20.mdx";
  slug: "07-20";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"07-21.mdx": {
	id: "07-21.mdx";
  slug: "07-21";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"07-22.mdx": {
	id: "07-22.mdx";
  slug: "07-22";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"07-23.mdx": {
	id: "07-23.mdx";
  slug: "07-23";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"07-24.mdx": {
	id: "07-24.mdx";
  slug: "07-24";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"07-25.mdx": {
	id: "07-25.mdx";
  slug: "07-25";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"07-26.mdx": {
	id: "07-26.mdx";
  slug: "07-26";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"07-27.mdx": {
	id: "07-27.mdx";
  slug: "07-27";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"07-28.mdx": {
	id: "07-28.mdx";
  slug: "07-28";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"07-29.mdx": {
	id: "07-29.mdx";
  slug: "07-29";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"07-30.mdx": {
	id: "07-30.mdx";
  slug: "07-30";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"07-31.mdx": {
	id: "07-31.mdx";
  slug: "07-31";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"08-01.mdx": {
	id: "08-01.mdx";
  slug: "08-01";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"08-02.mdx": {
	id: "08-02.mdx";
  slug: "08-02";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"08-03.mdx": {
	id: "08-03.mdx";
  slug: "08-03";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"08-04.mdx": {
	id: "08-04.mdx";
  slug: "08-04";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"08-05.mdx": {
	id: "08-05.mdx";
  slug: "08-05";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"08-06.mdx": {
	id: "08-06.mdx";
  slug: "08-06";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"08-07.mdx": {
	id: "08-07.mdx";
  slug: "08-07";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"08-08.mdx": {
	id: "08-08.mdx";
  slug: "08-08";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"08-09.mdx": {
	id: "08-09.mdx";
  slug: "08-09";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"08-10.mdx": {
	id: "08-10.mdx";
  slug: "08-10";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"08-11.mdx": {
	id: "08-11.mdx";
  slug: "08-11";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"08-12.mdx": {
	id: "08-12.mdx";
  slug: "08-12";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"08-13.mdx": {
	id: "08-13.mdx";
  slug: "08-13";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"08-14.mdx": {
	id: "08-14.mdx";
  slug: "08-14";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"08-15.mdx": {
	id: "08-15.mdx";
  slug: "08-15";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"08-16.mdx": {
	id: "08-16.mdx";
  slug: "08-16";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"08-17.mdx": {
	id: "08-17.mdx";
  slug: "08-17";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"08-18.mdx": {
	id: "08-18.mdx";
  slug: "08-18";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"08-19.mdx": {
	id: "08-19.mdx";
  slug: "08-19";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"08-20.mdx": {
	id: "08-20.mdx";
  slug: "08-20";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"08-21.mdx": {
	id: "08-21.mdx";
  slug: "08-21";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"08-22.mdx": {
	id: "08-22.mdx";
  slug: "08-22";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"08-23.mdx": {
	id: "08-23.mdx";
  slug: "08-23";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"08-24.mdx": {
	id: "08-24.mdx";
  slug: "08-24";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"08-25.mdx": {
	id: "08-25.mdx";
  slug: "08-25";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"08-26.mdx": {
	id: "08-26.mdx";
  slug: "08-26";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"08-27.mdx": {
	id: "08-27.mdx";
  slug: "08-27";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"08-28.mdx": {
	id: "08-28.mdx";
  slug: "08-28";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"08-29.mdx": {
	id: "08-29.mdx";
  slug: "08-29";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"08-30.mdx": {
	id: "08-30.mdx";
  slug: "08-30";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"08-31.mdx": {
	id: "08-31.mdx";
  slug: "08-31";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"09-01.mdx": {
	id: "09-01.mdx";
  slug: "09-01";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"09-02.mdx": {
	id: "09-02.mdx";
  slug: "09-02";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"09-03.mdx": {
	id: "09-03.mdx";
  slug: "09-03";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"09-04.mdx": {
	id: "09-04.mdx";
  slug: "09-04";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"09-05.mdx": {
	id: "09-05.mdx";
  slug: "09-05";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"09-06.mdx": {
	id: "09-06.mdx";
  slug: "09-06";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"09-07.mdx": {
	id: "09-07.mdx";
  slug: "09-07";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"09-08.mdx": {
	id: "09-08.mdx";
  slug: "09-08";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"09-09.mdx": {
	id: "09-09.mdx";
  slug: "09-09";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"09-10.mdx": {
	id: "09-10.mdx";
  slug: "09-10";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"09-11.mdx": {
	id: "09-11.mdx";
  slug: "09-11";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"09-12.mdx": {
	id: "09-12.mdx";
  slug: "09-12";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"09-13.mdx": {
	id: "09-13.mdx";
  slug: "09-13";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"09-14.mdx": {
	id: "09-14.mdx";
  slug: "09-14";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"09-15.mdx": {
	id: "09-15.mdx";
  slug: "09-15";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"09-16.mdx": {
	id: "09-16.mdx";
  slug: "09-16";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"09-17.mdx": {
	id: "09-17.mdx";
  slug: "09-17";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"09-18.mdx": {
	id: "09-18.mdx";
  slug: "09-18";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"09-19.mdx": {
	id: "09-19.mdx";
  slug: "09-19";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"09-20.mdx": {
	id: "09-20.mdx";
  slug: "09-20";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"09-21.mdx": {
	id: "09-21.mdx";
  slug: "09-21";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"09-22.mdx": {
	id: "09-22.mdx";
  slug: "09-22";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"09-23.mdx": {
	id: "09-23.mdx";
  slug: "09-23";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"09-24.mdx": {
	id: "09-24.mdx";
  slug: "09-24";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"09-25.mdx": {
	id: "09-25.mdx";
  slug: "09-25";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"09-26.mdx": {
	id: "09-26.mdx";
  slug: "09-26";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"09-27.mdx": {
	id: "09-27.mdx";
  slug: "09-27";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"09-28.mdx": {
	id: "09-28.mdx";
  slug: "09-28";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"09-29.mdx": {
	id: "09-29.mdx";
  slug: "09-29";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"09-30.mdx": {
	id: "09-30.mdx";
  slug: "09-30";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"10-01.mdx": {
	id: "10-01.mdx";
  slug: "10-01";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"10-02.mdx": {
	id: "10-02.mdx";
  slug: "10-02";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"10-03.mdx": {
	id: "10-03.mdx";
  slug: "10-03";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"10-04.mdx": {
	id: "10-04.mdx";
  slug: "10-04";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"10-05.mdx": {
	id: "10-05.mdx";
  slug: "10-05";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"10-06.mdx": {
	id: "10-06.mdx";
  slug: "10-06";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"10-07.mdx": {
	id: "10-07.mdx";
  slug: "10-07";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"10-08.mdx": {
	id: "10-08.mdx";
  slug: "10-08";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"10-09.mdx": {
	id: "10-09.mdx";
  slug: "10-09";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"10-10.mdx": {
	id: "10-10.mdx";
  slug: "10-10";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"10-11.mdx": {
	id: "10-11.mdx";
  slug: "10-11";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"10-12.mdx": {
	id: "10-12.mdx";
  slug: "10-12";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"10-13.mdx": {
	id: "10-13.mdx";
  slug: "10-13";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"10-14.mdx": {
	id: "10-14.mdx";
  slug: "10-14";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"10-15.mdx": {
	id: "10-15.mdx";
  slug: "10-15";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"10-16.mdx": {
	id: "10-16.mdx";
  slug: "10-16";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"10-17.mdx": {
	id: "10-17.mdx";
  slug: "10-17";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"10-18.mdx": {
	id: "10-18.mdx";
  slug: "10-18";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"10-19.mdx": {
	id: "10-19.mdx";
  slug: "10-19";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"10-20.mdx": {
	id: "10-20.mdx";
  slug: "10-20";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"10-21.mdx": {
	id: "10-21.mdx";
  slug: "10-21";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"10-22.mdx": {
	id: "10-22.mdx";
  slug: "10-22";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"10-23.mdx": {
	id: "10-23.mdx";
  slug: "10-23";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"10-24.mdx": {
	id: "10-24.mdx";
  slug: "10-24";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"10-25.mdx": {
	id: "10-25.mdx";
  slug: "10-25";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"10-26.mdx": {
	id: "10-26.mdx";
  slug: "10-26";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"10-27.mdx": {
	id: "10-27.mdx";
  slug: "10-27";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"10-28.mdx": {
	id: "10-28.mdx";
  slug: "10-28";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"10-29.mdx": {
	id: "10-29.mdx";
  slug: "10-29";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"10-30.mdx": {
	id: "10-30.mdx";
  slug: "10-30";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"10-31.mdx": {
	id: "10-31.mdx";
  slug: "10-31";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"11-01.mdx": {
	id: "11-01.mdx";
  slug: "11-01";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"11-02.mdx": {
	id: "11-02.mdx";
  slug: "11-02";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"11-03.mdx": {
	id: "11-03.mdx";
  slug: "11-03";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"11-04.mdx": {
	id: "11-04.mdx";
  slug: "11-04";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"11-05.mdx": {
	id: "11-05.mdx";
  slug: "11-05";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"11-06.mdx": {
	id: "11-06.mdx";
  slug: "11-06";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"11-07.mdx": {
	id: "11-07.mdx";
  slug: "11-07";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"11-08.mdx": {
	id: "11-08.mdx";
  slug: "11-08";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"11-09.mdx": {
	id: "11-09.mdx";
  slug: "11-09";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"11-10.mdx": {
	id: "11-10.mdx";
  slug: "11-10";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"11-11.mdx": {
	id: "11-11.mdx";
  slug: "11-11";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"11-12.mdx": {
	id: "11-12.mdx";
  slug: "11-12";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"11-13.mdx": {
	id: "11-13.mdx";
  slug: "11-13";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"11-14.mdx": {
	id: "11-14.mdx";
  slug: "11-14";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"11-15.mdx": {
	id: "11-15.mdx";
  slug: "11-15";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"11-16.mdx": {
	id: "11-16.mdx";
  slug: "11-16";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"11-17.mdx": {
	id: "11-17.mdx";
  slug: "11-17";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"11-18.mdx": {
	id: "11-18.mdx";
  slug: "11-18";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"11-19.mdx": {
	id: "11-19.mdx";
  slug: "11-19";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"11-20.mdx": {
	id: "11-20.mdx";
  slug: "11-20";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"11-21.mdx": {
	id: "11-21.mdx";
  slug: "11-21";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"11-22.mdx": {
	id: "11-22.mdx";
  slug: "11-22";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"11-23.mdx": {
	id: "11-23.mdx";
  slug: "11-23";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"11-24.mdx": {
	id: "11-24.mdx";
  slug: "11-24";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"11-25.mdx": {
	id: "11-25.mdx";
  slug: "11-25";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"11-26.mdx": {
	id: "11-26.mdx";
  slug: "11-26";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"11-27.mdx": {
	id: "11-27.mdx";
  slug: "11-27";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"11-28.mdx": {
	id: "11-28.mdx";
  slug: "11-28";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"11-29.mdx": {
	id: "11-29.mdx";
  slug: "11-29";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"11-30.mdx": {
	id: "11-30.mdx";
  slug: "11-30";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"12-01.mdx": {
	id: "12-01.mdx";
  slug: "12-01";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"12-02.mdx": {
	id: "12-02.mdx";
  slug: "12-02";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"12-03.mdx": {
	id: "12-03.mdx";
  slug: "12-03";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"12-04.mdx": {
	id: "12-04.mdx";
  slug: "12-04";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"12-05.mdx": {
	id: "12-05.mdx";
  slug: "12-05";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"12-06.mdx": {
	id: "12-06.mdx";
  slug: "12-06";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"12-07.mdx": {
	id: "12-07.mdx";
  slug: "12-07";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"12-08.mdx": {
	id: "12-08.mdx";
  slug: "12-08";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"12-09.mdx": {
	id: "12-09.mdx";
  slug: "12-09";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"12-10.mdx": {
	id: "12-10.mdx";
  slug: "12-10";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"12-11.mdx": {
	id: "12-11.mdx";
  slug: "12-11";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"12-12.mdx": {
	id: "12-12.mdx";
  slug: "12-12";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
};
"products": {
"a765.md": {
	id: "a765.md";
  slug: "a765";
  body: string;
  collection: "products";
  data: InferEntrySchema<"products">
} & { render(): Render[".md"] };
"b203.md": {
	id: "b203.md";
  slug: "b203";
  body: string;
  collection: "products";
  data: InferEntrySchema<"products">
} & { render(): Render[".md"] };
"f303.md": {
	id: "f303.md";
  slug: "f303";
  body: string;
  collection: "products";
  data: InferEntrySchema<"products">
} & { render(): Render[".md"] };
"t845.md": {
	id: "t845.md";
  slug: "t845";
  body: string;
  collection: "products";
  data: InferEntrySchema<"products">
} & { render(): Render[".md"] };
};
"security": {
"firewall/firewall.mdx": {
	id: "firewall/firewall.mdx";
  slug: "firewall";
  body: string;
  collection: "security";
  data: any
} & { render(): Render[".mdx"] };
"xss/xss.mdx": {
	id: "xss/xss.mdx";
  slug: "xss";
  body: string;
  collection: "security";
  data: any
} & { render(): Render[".mdx"] };
};

	};

	type DataEntryMap = {
		"_bin": {
};

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../src/content/config.js");
}
