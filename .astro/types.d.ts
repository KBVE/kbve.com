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

	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;
	export type CollectionEntry<C extends keyof AnyEntryMap> = Flatten<AnyEntryMap[C]>;

	// TODO: Remove this when having this fallback is no longer relevant. 2.3? 3.0? - erika, 2023-04-04
	/**
	 * @deprecated
	 * `astro:content` no longer provide `image()`.
	 *
	 * Please use it through `schema`, like such:
	 * ```ts
	 * import { defineCollection, z } from "astro:content";
	 *
	 * defineCollection({
	 *   schema: ({ image }) =>
	 *     z.object({
	 *       image: image(),
	 *     }),
	 * });
	 * ```
	 */
	export const image: never;

	// This needs to be in sync with ImageMetadata
	export type ImageFunction = () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodUnion<
			[
				import('astro/zod').ZodLiteral<'png'>,
				import('astro/zod').ZodLiteral<'jpg'>,
				import('astro/zod').ZodLiteral<'jpeg'>,
				import('astro/zod').ZodLiteral<'tiff'>,
				import('astro/zod').ZodLiteral<'webp'>,
				import('astro/zod').ZodLiteral<'gif'>,
				import('astro/zod').ZodLiteral<'svg'>
			]
		>;
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

	export type SchemaContext = { image: ImageFunction };

	type DataCollectionConfig<S extends BaseSchema> = {
		type: 'data';
		schema?: S | ((context: SchemaContext) => S);
	};

	type ContentCollectionConfig<S extends BaseSchema> = {
		type?: 'content';
		schema?: S | ((context: SchemaContext) => S);
	};

	type CollectionConfig<S> = ContentCollectionConfig<S> | DataCollectionConfig<S>;

	export function defineCollection<S extends BaseSchema>(
		input: CollectionConfig<S>
	): CollectionConfig<S>;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {})
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
		E extends ValidContentEntrySlug<C> | (string & {})
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {})
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {})
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {})
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
		"account": {
"calendar.mdx": {
	id: "calendar.mdx";
  slug: "calendar";
  body: string;
  collection: "account";
  data: InferEntrySchema<"account">
} & { render(): Render[".mdx"] };
"login.mdx": {
	id: "login.mdx";
  slug: "login";
  body: string;
  collection: "account";
  data: InferEntrySchema<"account">
} & { render(): Render[".mdx"] };
"logout.mdx": {
	id: "logout.mdx";
  slug: "logout";
  body: string;
  collection: "account";
  data: InferEntrySchema<"account">
} & { render(): Render[".mdx"] };
"profile.mdx": {
	id: "profile.mdx";
  slug: "profile";
  body: string;
  collection: "account";
  data: InferEntrySchema<"account">
} & { render(): Render[".mdx"] };
"register.mdx": {
	id: "register.mdx";
  slug: "register";
  body: string;
  collection: "account";
  data: InferEntrySchema<"account">
} & { render(): Render[".mdx"] };
"settings.mdx": {
	id: "settings.mdx";
  slug: "settings";
  body: string;
  collection: "account";
  data: InferEntrySchema<"account">
} & { render(): Render[".mdx"] };
};
"application": {
"android/android.mdx": {
	id: "android/android.mdx";
  slug: "android";
  body: string;
  collection: "application";
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] };
"ansible/ansible.mdx": {
	id: "ansible/ansible.mdx";
  slug: "ansible";
  body: string;
  collection: "application";
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] };
"appwrite/appwrite.mdx": {
	id: "appwrite/appwrite.mdx";
  slug: "appwrite";
  body: string;
  collection: "application";
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] };
"authelia/authelia.mdx": {
	id: "authelia/authelia.mdx";
  slug: "authelia";
  body: string;
  collection: "application";
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] };
"automation/automation.mdx": {
	id: "automation/automation.mdx";
  slug: "automation";
  body: string;
  collection: "application";
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] };
"cubejs/cubejs.mdx": {
	id: "cubejs/cubejs.mdx";
  slug: "cubejs";
  body: string;
  collection: "application";
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] };
"docker/docker.mdx": {
	id: "docker/docker.mdx";
  slug: "docker";
  body: string;
  collection: "application";
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] };
"emulator/ryujinx.mdx": {
	id: "emulator/ryujinx.mdx";
  slug: "emulator/ryujinx";
  body: string;
  collection: "application";
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] };
"flipperzero/flipperzero.mdx": {
	id: "flipperzero/flipperzero.mdx";
  slug: "flipperzero";
  body: string;
  collection: "application";
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] };
"flutter/flutter.mdx": {
	id: "flutter/flutter.mdx";
  slug: "flutter";
  body: string;
  collection: "application";
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] };
"gcloud/gcloud.mdx": {
	id: "gcloud/gcloud.mdx";
  slug: "gcloud";
  body: string;
  collection: "application";
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] };
"git/git.mdx": {
	id: "git/git.mdx";
  slug: "git";
  body: string;
  collection: "application";
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] };
"godot/godot.mdx": {
	id: "godot/godot.mdx";
  slug: "godot";
  body: string;
  collection: "application";
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] };
"javascript/javascript.mdx": {
	id: "javascript/javascript.mdx";
  slug: "javascript";
  body: string;
  collection: "application";
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] };
"kubernetes/kubernetes.mdx": {
	id: "kubernetes/kubernetes.mdx";
  slug: "kubernetes";
  body: string;
  collection: "application";
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] };
"longhorn/longhorn.mdx": {
	id: "longhorn/longhorn.mdx";
  slug: "longhorn";
  body: string;
  collection: "application";
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] };
"lvm/lvm.mdx": {
	id: "lvm/lvm.mdx";
  slug: "lvm";
  body: string;
  collection: "application";
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] };
"ml/ml.mdx": {
	id: "ml/ml.mdx";
  slug: "ml";
  body: string;
  collection: "application";
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] };
"n8n/n8n.mdx": {
	id: "n8n/n8n.mdx";
  slug: "n8n";
  body: string;
  collection: "application";
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] };
"nginx/nginx.mdx": {
	id: "nginx/nginx.mdx";
  slug: "nginx";
  body: string;
  collection: "application";
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] };
"nmap/nmap.mdx": {
	id: "nmap/nmap.mdx";
  slug: "nmap";
  body: string;
  collection: "application";
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] };
"nomad/nomad.mdx": {
	id: "nomad/nomad.mdx";
  slug: "nomad";
  body: string;
  collection: "application";
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] };
"obs/obs.mdx": {
	id: "obs/obs.mdx";
  slug: "obs";
  body: string;
  collection: "application";
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] };
"obsidian/obsidian.mdx": {
	id: "obsidian/obsidian.mdx";
  slug: "obsidian";
  body: string;
  collection: "application";
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] };
"php/php.mdx": {
	id: "php/php.mdx";
  slug: "php";
  body: string;
  collection: "application";
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] };
"pocketbase/pocketbase.mdx": {
	id: "pocketbase/pocketbase.mdx";
  slug: "pocketbase";
  body: string;
  collection: "application";
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] };
"portainer/portainer.mdx": {
	id: "portainer/portainer.mdx";
  slug: "portainer";
  body: string;
  collection: "application";
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] };
"proxmox/proxmox.mdx": {
	id: "proxmox/proxmox.mdx";
  slug: "proxmox";
  body: string;
  collection: "application";
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] };
"pterodactyl/pterodactyl.mdx": {
	id: "pterodactyl/pterodactyl.mdx";
  slug: "pterodactyl";
  body: string;
  collection: "application";
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] };
"python/python.mdx": {
	id: "python/python.mdx";
  slug: "python";
  body: string;
  collection: "application";
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] };
"rust/rust.mdx": {
	id: "rust/rust.mdx";
  slug: "rust";
  body: string;
  collection: "application";
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] };
"rustdesk/rustdesk.mdx": {
	id: "rustdesk/rustdesk.mdx";
  slug: "rustdesk";
  body: string;
  collection: "application";
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] };
"sql/sql.mdx": {
	id: "sql/sql.mdx";
  slug: "sql";
  body: string;
  collection: "application";
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] };
"ssh/zsh.mdx": {
	id: "ssh/zsh.mdx";
  slug: "ssh/zsh";
  body: string;
  collection: "application";
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] };
"strapi/strapi.mdx": {
	id: "strapi/strapi.mdx";
  slug: "strapi";
  body: string;
  collection: "application";
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] };
"supabase/supabase.mdx": {
	id: "supabase/supabase.mdx";
  slug: "supabase";
  body: string;
  collection: "application";
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] };
"terraform/terraform.mdx": {
	id: "terraform/terraform.mdx";
  slug: "terraform";
  body: string;
  collection: "application";
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] };
"traefik/traefik.mdx": {
	id: "traefik/traefik.mdx";
  slug: "traefik";
  body: string;
  collection: "application";
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] };
"unity/unity.mdx": {
	id: "unity/unity.mdx";
  slug: "unity";
  body: string;
  collection: "application";
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] };
"void/void.mdx": {
	id: "void/void.mdx";
  slug: "void";
  body: string;
  collection: "application";
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] };
"watchtower/watchtower.mdx": {
	id: "watchtower/watchtower.mdx";
  slug: "watchtower";
  body: string;
  collection: "application";
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] };
"wireguard/wireguard.mdx": {
	id: "wireguard/wireguard.mdx";
  slug: "wireguard";
  body: string;
  collection: "application";
  data: InferEntrySchema<"application">
} & { render(): Render[".mdx"] };
};
"arcade": {
"rj.mdx": {
	id: "rj.mdx";
  slug: "rj";
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
"time-crisis.mdx": {
	id: "time-crisis.mdx";
  slug: "time-crisis";
  body: string;
  collection: "arcade";
  data: InferEntrySchema<"arcade">
} & { render(): Render[".mdx"] };
"wvn.mdx": {
	id: "wvn.mdx";
  slug: "wvn";
  body: string;
  collection: "arcade";
  data: InferEntrySchema<"arcade">
} & { render(): Render[".mdx"] };
};
"blog": {
"theorycraft.mdx": {
	id: "theorycraft.mdx";
  slug: "theorycraft";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
};
"crypto": {
"bnb.mdx": {
	id: "bnb.mdx";
  slug: "bnb";
  body: string;
  collection: "crypto";
  data: InferEntrySchema<"crypto">
} & { render(): Render[".mdx"] };
"btc.mdx": {
	id: "btc.mdx";
  slug: "btc";
  body: string;
  collection: "crypto";
  data: InferEntrySchema<"crypto">
} & { render(): Render[".mdx"] };
"doge.mdx": {
	id: "doge.mdx";
  slug: "doge";
  body: string;
  collection: "crypto";
  data: InferEntrySchema<"crypto">
} & { render(): Render[".mdx"] };
"eth.mdx": {
	id: "eth.mdx";
  slug: "eth";
  body: string;
  collection: "crypto";
  data: InferEntrySchema<"crypto">
} & { render(): Render[".mdx"] };
"xrp.mdx": {
	id: "xrp.mdx";
  slug: "xrp";
  body: string;
  collection: "crypto";
  data: InferEntrySchema<"crypto">
} & { render(): Render[".mdx"] };
};
"gaming": {
"df.mdx": {
	id: "df.mdx";
  slug: "df";
  body: string;
  collection: "gaming";
  data: InferEntrySchema<"gaming">
} & { render(): Render[".mdx"] };
"lol.mdx": {
	id: "lol.mdx";
  slug: "lol";
  body: string;
  collection: "gaming";
  data: InferEntrySchema<"gaming">
} & { render(): Render[".mdx"] };
};
"items": {
"rare.mdx": {
	id: "rare.mdx";
  slug: "rare";
  body: string;
  collection: "items";
  data: any
} & { render(): Render[".mdx"] };
};
"journal": {
"04-17.md": {
	id: "04-17.md";
  slug: "04-17";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"04-18.md": {
	id: "04-18.md";
  slug: "04-18";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"04-19.md": {
	id: "04-19.md";
  slug: "04-19";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"04-20.md": {
	id: "04-20.md";
  slug: "04-20";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"04-21.md": {
	id: "04-21.md";
  slug: "04-21";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"04-22.md": {
	id: "04-22.md";
  slug: "04-22";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"04-23.md": {
	id: "04-23.md";
  slug: "04-23";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"04-24.md": {
	id: "04-24.md";
  slug: "04-24";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"04-25.md": {
	id: "04-25.md";
  slug: "04-25";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"04-26.md": {
	id: "04-26.md";
  slug: "04-26";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"04-27.md": {
	id: "04-27.md";
  slug: "04-27";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"04-28.md": {
	id: "04-28.md";
  slug: "04-28";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"04-29.md": {
	id: "04-29.md";
  slug: "04-29";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"04-30.md": {
	id: "04-30.md";
  slug: "04-30";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"05-01.md": {
	id: "05-01.md";
  slug: "05-01";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"05-02.md": {
	id: "05-02.md";
  slug: "05-02";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"05-03.md": {
	id: "05-03.md";
  slug: "05-03";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"05-04.md": {
	id: "05-04.md";
  slug: "05-04";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"05-05.md": {
	id: "05-05.md";
  slug: "05-05";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"05-06.md": {
	id: "05-06.md";
  slug: "05-06";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"05-07.md": {
	id: "05-07.md";
  slug: "05-07";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"05-08.md": {
	id: "05-08.md";
  slug: "05-08";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"05-09.md": {
	id: "05-09.md";
  slug: "05-09";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"05-10.md": {
	id: "05-10.md";
  slug: "05-10";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"05-15.md": {
	id: "05-15.md";
  slug: "05-15";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"05-16.md": {
	id: "05-16.md";
  slug: "05-16";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"05-17.md": {
	id: "05-17.md";
  slug: "05-17";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"05-18.md": {
	id: "05-18.md";
  slug: "05-18";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"05-19.md": {
	id: "05-19.md";
  slug: "05-19";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"05-20.md": {
	id: "05-20.md";
  slug: "05-20";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"05-21.md": {
	id: "05-21.md";
  slug: "05-21";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"05-22.md": {
	id: "05-22.md";
  slug: "05-22";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"05-23.md": {
	id: "05-23.md";
  slug: "05-23";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"05-24.md": {
	id: "05-24.md";
  slug: "05-24";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"05-25.md": {
	id: "05-25.md";
  slug: "05-25";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"05-26.md": {
	id: "05-26.md";
  slug: "05-26";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"05-27.md": {
	id: "05-27.md";
  slug: "05-27";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"05-28.md": {
	id: "05-28.md";
  slug: "05-28";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"05-29.md": {
	id: "05-29.md";
  slug: "05-29";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"05-30.md": {
	id: "05-30.md";
  slug: "05-30";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"05-31.md": {
	id: "05-31.md";
  slug: "05-31";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"06-01.md": {
	id: "06-01.md";
  slug: "06-01";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"06-02.md": {
	id: "06-02.md";
  slug: "06-02";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"06-03.md": {
	id: "06-03.md";
  slug: "06-03";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"06-04.md": {
	id: "06-04.md";
  slug: "06-04";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"06-05.md": {
	id: "06-05.md";
  slug: "06-05";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"06-06.md": {
	id: "06-06.md";
  slug: "06-06";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"06-07.md": {
	id: "06-07.md";
  slug: "06-07";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"06-08.md": {
	id: "06-08.md";
  slug: "06-08";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"06-09.md": {
	id: "06-09.md";
  slug: "06-09";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"06-10.md": {
	id: "06-10.md";
  slug: "06-10";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"06-11.md": {
	id: "06-11.md";
  slug: "06-11";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"06-12.md": {
	id: "06-12.md";
  slug: "06-12";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"06-13.md": {
	id: "06-13.md";
  slug: "06-13";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"06-14.md": {
	id: "06-14.md";
  slug: "06-14";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"06-15.md": {
	id: "06-15.md";
  slug: "06-15";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"06-16.md": {
	id: "06-16.md";
  slug: "06-16";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"06-17.md": {
	id: "06-17.md";
  slug: "06-17";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"06-18.md": {
	id: "06-18.md";
  slug: "06-18";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"06-20.md": {
	id: "06-20.md";
  slug: "06-20";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"06-21.md": {
	id: "06-21.md";
  slug: "06-21";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"06-22.md": {
	id: "06-22.md";
  slug: "06-22";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"06-23.md": {
	id: "06-23.md";
  slug: "06-23";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"06-25.md": {
	id: "06-25.md";
  slug: "06-25";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"06-26.md": {
	id: "06-26.md";
  slug: "06-26";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"06-27.md": {
	id: "06-27.md";
  slug: "06-27";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"06-28.md": {
	id: "06-28.md";
  slug: "06-28";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"06-29.md": {
	id: "06-29.md";
  slug: "06-29";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"06-30.md": {
	id: "06-30.md";
  slug: "06-30";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"07-01.md": {
	id: "07-01.md";
  slug: "07-01";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"07-02.md": {
	id: "07-02.md";
  slug: "07-02";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"07-03.md": {
	id: "07-03.md";
  slug: "07-03";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"07-04.md": {
	id: "07-04.md";
  slug: "07-04";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"07-05.md": {
	id: "07-05.md";
  slug: "07-05";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"07-06.md": {
	id: "07-06.md";
  slug: "07-06";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"07-07.md": {
	id: "07-07.md";
  slug: "07-07";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"07-08.md": {
	id: "07-08.md";
  slug: "07-08";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"07-09.md": {
	id: "07-09.md";
  slug: "07-09";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"07-10.md": {
	id: "07-10.md";
  slug: "07-10";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"07-11.md": {
	id: "07-11.md";
  slug: "07-11";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"07-12.md": {
	id: "07-12.md";
  slug: "07-12";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"07-13.md": {
	id: "07-13.md";
  slug: "07-13";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"07-14.md": {
	id: "07-14.md";
  slug: "07-14";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"07-15.md": {
	id: "07-15.md";
  slug: "07-15";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"07-16.md": {
	id: "07-16.md";
  slug: "07-16";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"07-17.md": {
	id: "07-17.md";
  slug: "07-17";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"07-18.md": {
	id: "07-18.md";
  slug: "07-18";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"07-19.md": {
	id: "07-19.md";
  slug: "07-19";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"07-20.md": {
	id: "07-20.md";
  slug: "07-20";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"07-21.md": {
	id: "07-21.md";
  slug: "07-21";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"07-22.md": {
	id: "07-22.md";
  slug: "07-22";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"07-23.md": {
	id: "07-23.md";
  slug: "07-23";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"07-24.md": {
	id: "07-24.md";
  slug: "07-24";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"07-25.md": {
	id: "07-25.md";
  slug: "07-25";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"07-26.md": {
	id: "07-26.md";
  slug: "07-26";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"07-27.md": {
	id: "07-27.md";
  slug: "07-27";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"07-28.md": {
	id: "07-28.md";
  slug: "07-28";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"07-29.md": {
	id: "07-29.md";
  slug: "07-29";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"07-30.md": {
	id: "07-30.md";
  slug: "07-30";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"07-31.md": {
	id: "07-31.md";
  slug: "07-31";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"08-01.md": {
	id: "08-01.md";
  slug: "08-01";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"08-02.md": {
	id: "08-02.md";
  slug: "08-02";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"08-03.md": {
	id: "08-03.md";
  slug: "08-03";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"08-04.md": {
	id: "08-04.md";
  slug: "08-04";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"08-05.md": {
	id: "08-05.md";
  slug: "08-05";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"08-06.md": {
	id: "08-06.md";
  slug: "08-06";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"08-07.md": {
	id: "08-07.md";
  slug: "08-07";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"08-08.md": {
	id: "08-08.md";
  slug: "08-08";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"08-09.md": {
	id: "08-09.md";
  slug: "08-09";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"08-10.md": {
	id: "08-10.md";
  slug: "08-10";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"08-11.md": {
	id: "08-11.md";
  slug: "08-11";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"08-12.md": {
	id: "08-12.md";
  slug: "08-12";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"08-13.md": {
	id: "08-13.md";
  slug: "08-13";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"08-14.md": {
	id: "08-14.md";
  slug: "08-14";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"08-15.md": {
	id: "08-15.md";
  slug: "08-15";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"08-16.md": {
	id: "08-16.md";
  slug: "08-16";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"08-17.md": {
	id: "08-17.md";
  slug: "08-17";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"08-18.md": {
	id: "08-18.md";
  slug: "08-18";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"08-19.md": {
	id: "08-19.md";
  slug: "08-19";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"08-20.md": {
	id: "08-20.md";
  slug: "08-20";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"08-21.md": {
	id: "08-21.md";
  slug: "08-21";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"08-22.md": {
	id: "08-22.md";
  slug: "08-22";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"08-23.md": {
	id: "08-23.md";
  slug: "08-23";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".md"] };
"asset.mdx": {
	id: "asset.mdx";
  slug: "asset";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
"visualnovel.mdx": {
	id: "visualnovel.mdx";
  slug: "visualnovel";
  body: string;
  collection: "journal";
  data: InferEntrySchema<"journal">
} & { render(): Render[".mdx"] };
};
"legal": {
"disclaimer.mdx": {
	id: "disclaimer.mdx";
  slug: "disclaimer";
  body: string;
  collection: "legal";
  data: InferEntrySchema<"legal">
} & { render(): Render[".mdx"] };
"eula.mdx": {
	id: "eula.mdx";
  slug: "eula";
  body: string;
  collection: "legal";
  data: InferEntrySchema<"legal">
} & { render(): Render[".mdx"] };
"privacy.mdx": {
	id: "privacy.mdx";
  slug: "privacy";
  body: string;
  collection: "legal";
  data: InferEntrySchema<"legal">
} & { render(): Render[".mdx"] };
"tos.mdx": {
	id: "tos.mdx";
  slug: "tos";
  body: string;
  collection: "legal";
  data: InferEntrySchema<"legal">
} & { render(): Render[".mdx"] };
};
"manga": {
"conch/filler/1.mdx": {
	id: "conch/filler/1.mdx";
  slug: "conch/filler/1";
  body: string;
  collection: "manga";
  data: InferEntrySchema<"manga">
} & { render(): Render[".mdx"] };
"conch/filler/2.mdx": {
	id: "conch/filler/2.mdx";
  slug: "conch/filler/2";
  body: string;
  collection: "manga";
  data: InferEntrySchema<"manga">
} & { render(): Render[".mdx"] };
"conch/filler/3.mdx": {
	id: "conch/filler/3.mdx";
  slug: "conch/filler/3";
  body: string;
  collection: "manga";
  data: InferEntrySchema<"manga">
} & { render(): Render[".mdx"] };
"conch/filler/index.mdx": {
	id: "conch/filler/index.mdx";
  slug: "conch/filler";
  body: string;
  collection: "manga";
  data: InferEntrySchema<"manga">
} & { render(): Render[".mdx"] };
"fintech/abc/a.mdx": {
	id: "fintech/abc/a.mdx";
  slug: "fintech/abc/a";
  body: string;
  collection: "manga";
  data: InferEntrySchema<"manga">
} & { render(): Render[".mdx"] };
"fintech/abc/ai-warning.mdx": {
	id: "fintech/abc/ai-warning.mdx";
  slug: "fintech/abc/ai-warning";
  body: string;
  collection: "manga";
  data: InferEntrySchema<"manga">
} & { render(): Render[".mdx"] };
"fintech/abc/b-datascientist.mdx": {
	id: "fintech/abc/b-datascientist.mdx";
  slug: "fintech/abc/b-datascientist";
  body: string;
  collection: "manga";
  data: InferEntrySchema<"manga">
} & { render(): Render[".mdx"] };
"fintech/abc/b.mdx": {
	id: "fintech/abc/b.mdx";
  slug: "fintech/abc/b";
  body: string;
  collection: "manga";
  data: InferEntrySchema<"manga">
} & { render(): Render[".mdx"] };
"fintech/abc/c.mdx": {
	id: "fintech/abc/c.mdx";
  slug: "fintech/abc/c";
  body: string;
  collection: "manga";
  data: InferEntrySchema<"manga">
} & { render(): Render[".mdx"] };
"fintech/abc/index.mdx": {
	id: "fintech/abc/index.mdx";
  slug: "fintech/abc";
  body: string;
  collection: "manga";
  data: InferEntrySchema<"manga">
} & { render(): Render[".mdx"] };
"grown/index.mdx": {
	id: "grown/index.mdx";
  slug: "grown";
  body: string;
  collection: "manga";
  data: InferEntrySchema<"manga">
} & { render(): Render[".mdx"] };
"rj/filler/1.mdx": {
	id: "rj/filler/1.mdx";
  slug: "rj/filler/1";
  body: string;
  collection: "manga";
  data: InferEntrySchema<"manga">
} & { render(): Render[".mdx"] };
"rj/filler/index.mdx": {
	id: "rj/filler/index.mdx";
  slug: "rj/filler";
  body: string;
  collection: "manga";
  data: InferEntrySchema<"manga">
} & { render(): Render[".mdx"] };
"rj/introduction/1.mdx": {
	id: "rj/introduction/1.mdx";
  slug: "rj/introduction/1";
  body: string;
  collection: "manga";
  data: InferEntrySchema<"manga">
} & { render(): Render[".mdx"] };
"rj/introduction/index.mdx": {
	id: "rj/introduction/index.mdx";
  slug: "rj/introduction";
  body: string;
  collection: "manga";
  data: InferEntrySchema<"manga">
} & { render(): Render[".mdx"] };
};
"media": {
"radio.mdx": {
	id: "radio.mdx";
  slug: "radio";
  body: string;
  collection: "media";
  data: InferEntrySchema<"media">
} & { render(): Render[".mdx"] };
};
"music": {
"adtr-albums.mdx": {
	id: "adtr-albums.mdx";
  slug: "adtr-albums";
  body: string;
  collection: "music";
  data: InferEntrySchema<"music">
} & { render(): Render[".mdx"] };
"olifejp-collection.mdx": {
	id: "olifejp-collection.mdx";
  slug: "olifejp-collection";
  body: string;
  collection: "music";
  data: InferEntrySchema<"music">
} & { render(): Render[".mdx"] };
"ravi-george.mdx": {
	id: "ravi-george.mdx";
  slug: "ravi-george";
  body: string;
  collection: "music";
  data: InferEntrySchema<"music">
} & { render(): Render[".mdx"] };
"starwars-lofi.mdx": {
	id: "starwars-lofi.mdx";
  slug: "starwars-lofi";
  body: string;
  collection: "music";
  data: InferEntrySchema<"music">
} & { render(): Render[".mdx"] };
};
"news": {
"release-rigor.mdx": {
	id: "release-rigor.mdx";
  slug: "release-rigor";
  body: string;
  collection: "news";
  data: InferEntrySchema<"news">
} & { render(): Render[".mdx"] };
};
"npc": {
"holy.mdx": {
	id: "holy.mdx";
  slug: "holy";
  body: string;
  collection: "npc";
  data: any
} & { render(): Render[".mdx"] };
"lucifurr.mdx": {
	id: "lucifurr.mdx";
  slug: "lucifurr";
  body: string;
  collection: "npc";
  data: any
} & { render(): Render[".mdx"] };
"protag.mdx": {
	id: "protag.mdx";
  slug: "protag";
  body: string;
  collection: "npc";
  data: any
} & { render(): Render[".mdx"] };
};
"podcast": {
"darknet-diaries.mdx": {
	id: "darknet-diaries.mdx";
  slug: "darknet-diaries";
  body: string;
  collection: "podcast";
  data: InferEntrySchema<"podcast">
} & { render(): Render[".mdx"] };
};
"project": {
"api.mdx": {
	id: "api.mdx";
  slug: "api";
  body: string;
  collection: "project";
  data: any
} & { render(): Render[".mdx"] };
"ar.mdx": {
	id: "ar.mdx";
  slug: "ar";
  body: string;
  collection: "project";
  data: any
} & { render(): Render[".mdx"] };
"charles.mdx": {
	id: "charles.mdx";
  slug: "charles";
  body: string;
  collection: "project";
  data: any
} & { render(): Render[".mdx"] };
"cityvote.mdx": {
	id: "cityvote.mdx";
  slug: "cityvote";
  body: string;
  collection: "project";
  data: any
} & { render(): Render[".mdx"] };
"discord-sh.mdx": {
	id: "discord-sh.mdx";
  slug: "discord-sh";
  body: string;
  collection: "project";
  data: any
} & { render(): Render[".mdx"] };
"galaxia.mdx": {
	id: "galaxia.mdx";
  slug: "galaxia";
  body: string;
  collection: "project";
  data: any
} & { render(): Render[".mdx"] };
"herbmail.mdx": {
	id: "herbmail.mdx";
  slug: "herbmail";
  body: string;
  collection: "project";
  data: any
} & { render(): Render[".mdx"] };
"rareicon.mdx": {
	id: "rareicon.mdx";
  slug: "rareicon";
  body: string;
  collection: "project";
  data: any
} & { render(): Render[".mdx"] };
"rentearth/rentearth.mdx": {
	id: "rentearth/rentearth.mdx";
  slug: "rentearth";
  body: string;
  collection: "project";
  data: any
} & { render(): Render[".mdx"] };
"roguejester.mdx": {
	id: "roguejester.mdx";
  slug: "roguejester";
  body: string;
  collection: "project";
  data: any
} & { render(): Render[".mdx"] };
"rsps.mdx": {
	id: "rsps.mdx";
  slug: "rsps";
  body: string;
  collection: "project";
  data: any
} & { render(): Render[".mdx"] };
"search-engine.mdx": {
	id: "search-engine.mdx";
  slug: "search-engine";
  body: string;
  collection: "project";
  data: any
} & { render(): Render[".mdx"] };
"stream.mdx": {
	id: "stream.mdx";
  slug: "stream";
  body: string;
  collection: "project";
  data: any
} & { render(): Render[".mdx"] };
"vip.mdx": {
	id: "vip.mdx";
  slug: "vip";
  body: string;
  collection: "project";
  data: any
} & { render(): Render[".mdx"] };
};
"recipe": {
"mango-juice.mdx": {
	id: "mango-juice.mdx";
  slug: "mango-juice";
  body: string;
  collection: "recipe";
  data: InferEntrySchema<"recipe">
} & { render(): Render[".mdx"] };
"mcconaughey-diet.mdx": {
	id: "mcconaughey-diet.mdx";
  slug: "mcconaughey-diet";
  body: string;
  collection: "recipe";
  data: InferEntrySchema<"recipe">
} & { render(): Render[".mdx"] };
};
"releases": {
"1.md": {
	id: "1.md";
  slug: "1";
  body: string;
  collection: "releases";
  data: InferEntrySchema<"releases">
} & { render(): Render[".md"] };
};
"security": {
"firewall/firewall.mdx": {
	id: "firewall/firewall.mdx";
  slug: "firewall";
  body: string;
  collection: "security";
  data: InferEntrySchema<"security">
} & { render(): Render[".mdx"] };
"xss.mdx": {
	id: "xss.mdx";
  slug: "xss";
  body: string;
  collection: "security";
  data: InferEntrySchema<"security">
} & { render(): Render[".mdx"] };
};
"stock": {
"aapl/aapl.mdx": {
	id: "aapl/aapl.mdx";
  slug: "aapl";
  body: string;
  collection: "stock";
  data: InferEntrySchema<"stock">
} & { render(): Render[".mdx"] };
"dis.mdx": {
	id: "dis.mdx";
  slug: "dis";
  body: string;
  collection: "stock";
  data: InferEntrySchema<"stock">
} & { render(): Render[".mdx"] };
"f.mdx": {
	id: "f.mdx";
  slug: "f";
  body: string;
  collection: "stock";
  data: InferEntrySchema<"stock">
} & { render(): Render[".mdx"] };
"gain.mdx": {
	id: "gain.mdx";
  slug: "gain";
  body: string;
  collection: "stock";
  data: InferEntrySchema<"stock">
} & { render(): Render[".mdx"] };
"icln.mdx": {
	id: "icln.mdx";
  slug: "icln";
  body: string;
  collection: "stock";
  data: InferEntrySchema<"stock">
} & { render(): Render[".mdx"] };
"iyr.mdx": {
	id: "iyr.mdx";
  slug: "iyr";
  body: string;
  collection: "stock";
  data: InferEntrySchema<"stock">
} & { render(): Render[".mdx"] };
"main.mdx": {
	id: "main.mdx";
  slug: "main";
  body: string;
  collection: "stock";
  data: InferEntrySchema<"stock">
} & { render(): Render[".mdx"] };
"o.mdx": {
	id: "o.mdx";
  slug: "o";
  body: string;
  collection: "stock";
  data: InferEntrySchema<"stock">
} & { render(): Render[".mdx"] };
"pey.mdx": {
	id: "pey.mdx";
  slug: "pey";
  body: string;
  collection: "stock";
  data: InferEntrySchema<"stock">
} & { render(): Render[".mdx"] };
"sphd.mdx": {
	id: "sphd.mdx";
  slug: "sphd";
  body: string;
  collection: "stock";
  data: InferEntrySchema<"stock">
} & { render(): Render[".mdx"] };
"spy.mdx": {
	id: "spy.mdx";
  slug: "spy";
  body: string;
  collection: "stock";
  data: InferEntrySchema<"stock">
} & { render(): Render[".mdx"] };
"stag.mdx": {
	id: "stag.mdx";
  slug: "stag";
  body: string;
  collection: "stock";
  data: InferEntrySchema<"stock">
} & { render(): Render[".mdx"] };
"tsla.mdx": {
	id: "tsla.mdx";
  slug: "tsla";
  body: string;
  collection: "stock";
  data: InferEntrySchema<"stock">
} & { render(): Render[".mdx"] };
"vnq.mdx": {
	id: "vnq.mdx";
  slug: "vnq";
  body: string;
  collection: "stock";
  data: InferEntrySchema<"stock">
} & { render(): Render[".mdx"] };
"vt.mdx": {
	id: "vt.mdx";
  slug: "vt";
  body: string;
  collection: "stock";
  data: InferEntrySchema<"stock">
} & { render(): Render[".mdx"] };
};
"tags": {
"blockchain/blockchain.mdx": {
	id: "blockchain/blockchain.mdx";
  slug: "blockchain/blockchain";
  body: string;
  collection: "tags";
  data: InferEntrySchema<"tags">
} & { render(): Render[".mdx"] };
"branding/branding.mdx": {
	id: "branding/branding.mdx";
  slug: "branding/branding";
  body: string;
  collection: "tags";
  data: InferEntrySchema<"tags">
} & { render(): Render[".mdx"] };
"data/data.mdx": {
	id: "data/data.mdx";
  slug: "data/data";
  body: string;
  collection: "tags";
  data: InferEntrySchema<"tags">
} & { render(): Render[".mdx"] };
"etf/etf.mdx": {
	id: "etf/etf.mdx";
  slug: "etf/etf";
  body: string;
  collection: "tags";
  data: InferEntrySchema<"tags">
} & { render(): Render[".mdx"] };
"global/global.mdx": {
	id: "global/global.mdx";
  slug: "global/global";
  body: string;
  collection: "tags";
  data: InferEntrySchema<"tags">
} & { render(): Render[".mdx"] };
"host/host.mdx": {
	id: "host/host.mdx";
  slug: "host/host";
  body: string;
  collection: "tags";
  data: InferEntrySchema<"tags">
} & { render(): Render[".mdx"] };
"mobile/mobile.mdx": {
	id: "mobile/mobile.mdx";
  slug: "mobile/mobile";
  body: string;
  collection: "tags";
  data: InferEntrySchema<"tags">
} & { render(): Render[".mdx"] };
"os/os.mdx": {
	id: "os/os.mdx";
  slug: "os/os";
  body: string;
  collection: "tags";
  data: InferEntrySchema<"tags">
} & { render(): Render[".mdx"] };
"reit/reit.mdx": {
	id: "reit/reit.mdx";
  slug: "reit/reit";
  body: string;
  collection: "tags";
  data: InferEntrySchema<"tags">
} & { render(): Render[".mdx"] };
"robotics/robotics.mdx": {
	id: "robotics/robotics.mdx";
  slug: "robotics/robotics";
  body: string;
  collection: "tags";
  data: InferEntrySchema<"tags">
} & { render(): Render[".mdx"] };
"software/software.mdx": {
	id: "software/software.mdx";
  slug: "software/software";
  body: string;
  collection: "tags";
  data: InferEntrySchema<"tags">
} & { render(): Render[".mdx"] };
"sql/sql.mdx": {
	id: "sql/sql.mdx";
  slug: "sql/sql";
  body: string;
  collection: "tags";
  data: InferEntrySchema<"tags">
} & { render(): Render[".mdx"] };
"technology/technology.mdx": {
	id: "technology/technology.mdx";
  slug: "technology/technology";
  body: string;
  collection: "tags";
  data: InferEntrySchema<"tags">
} & { render(): Render[".mdx"] };
"vm/vm.mdx": {
	id: "vm/vm.mdx";
  slug: "vm/vm";
  body: string;
  collection: "tags";
  data: InferEntrySchema<"tags">
} & { render(): Render[".mdx"] };
};
"team": {
"example.mdx": {
	id: "example.mdx";
  slug: "example";
  body: string;
  collection: "team";
  data: InferEntrySchema<"team">
} & { render(): Render[".mdx"] };
"fudster.mdx": {
	id: "fudster.mdx";
  slug: "fudster";
  body: string;
  collection: "team";
  data: InferEntrySchema<"team">
} & { render(): Render[".mdx"] };
"h0lybyte.mdx": {
	id: "h0lybyte.mdx";
  slug: "h0lybyte";
  body: string;
  collection: "team";
  data: InferEntrySchema<"team">
} & { render(): Render[".mdx"] };
"keros.mdx": {
	id: "keros.mdx";
  slug: "keros";
  body: string;
  collection: "team";
  data: InferEntrySchema<"team">
} & { render(): Render[".mdx"] };
"lvl21bellsprout.mdx": {
	id: "lvl21bellsprout.mdx";
  slug: "lvl21bellsprout";
  body: string;
  collection: "team";
  data: InferEntrySchema<"team">
} & { render(): Render[".mdx"] };
"sean.mdx": {
	id: "sean.mdx";
  slug: "sean";
  body: string;
  collection: "team";
  data: InferEntrySchema<"team">
} & { render(): Render[".mdx"] };
"silver91.mdx": {
	id: "silver91.mdx";
  slug: "silver91";
  body: string;
  collection: "team";
  data: InferEntrySchema<"team">
} & { render(): Render[".mdx"] };
"ziggy9263.mdx": {
	id: "ziggy9263.mdx";
  slug: "ziggy9263";
  body: string;
  collection: "team";
  data: InferEntrySchema<"team">
} & { render(): Render[".mdx"] };
};
"theory": {
"bizops/bizops.mdx": {
	id: "bizops/bizops.mdx";
  slug: "bizops";
  body: string;
  collection: "theory";
  data: InferEntrySchema<"theory">
} & { render(): Render[".mdx"] };
"deadcode/deadcode.mdx": {
	id: "deadcode/deadcode.mdx";
  slug: "deadcode";
  body: string;
  collection: "theory";
  data: InferEntrySchema<"theory">
} & { render(): Render[".mdx"] };
"fintech.mdx": {
	id: "fintech.mdx";
  slug: "fintech";
  body: string;
  collection: "theory";
  data: InferEntrySchema<"theory">
} & { render(): Render[".mdx"] };
"gamedesign.mdx": {
	id: "gamedesign.mdx";
  slug: "gamedesign";
  body: string;
  collection: "theory";
  data: InferEntrySchema<"theory">
} & { render(): Render[".mdx"] };
"healthcare.mdx": {
	id: "healthcare.mdx";
  slug: "healthcare";
  body: string;
  collection: "theory";
  data: InferEntrySchema<"theory">
} & { render(): Render[".mdx"] };
"matrix.mdx": {
	id: "matrix.mdx";
  slug: "matrix";
  body: string;
  collection: "theory";
  data: InferEntrySchema<"theory">
} & { render(): Render[".mdx"] };
"phytochemicals.mdx": {
	id: "phytochemicals.mdx";
  slug: "phytochemicals";
  body: string;
  collection: "theory";
  data: InferEntrySchema<"theory">
} & { render(): Render[".mdx"] };
"programming.mdx": {
	id: "programming.mdx";
  slug: "programming";
  body: string;
  collection: "theory";
  data: InferEntrySchema<"theory">
} & { render(): Render[".mdx"] };
"socialmedia.mdx": {
	id: "socialmedia.mdx";
  slug: "socialmedia";
  body: string;
  collection: "theory";
  data: InferEntrySchema<"theory">
} & { render(): Render[".mdx"] };
"solarpunk.mdx": {
	id: "solarpunk.mdx";
  slug: "solarpunk";
  body: string;
  collection: "theory";
  data: InferEntrySchema<"theory">
} & { render(): Render[".mdx"] };
"swartz-guerilla-manifesto.mdx": {
	id: "swartz-guerilla-manifesto.mdx";
  slug: "swartz-guerilla-manifesto";
  body: string;
  collection: "theory";
  data: InferEntrySchema<"theory">
} & { render(): Render[".mdx"] };
};
"tools": {
"conch.mdx": {
	id: "conch.mdx";
  slug: "conch";
  body: string;
  collection: "tools";
  data: any
} & { render(): Render[".mdx"] };
"cv.mdx": {
	id: "cv.mdx";
  slug: "cv";
  body: string;
  collection: "tools";
  data: any
} & { render(): Render[".mdx"] };
"pass.mdx": {
	id: "pass.mdx";
  slug: "pass";
  body: string;
  collection: "tools";
  data: any
} & { render(): Render[".mdx"] };
"postboy.mdx": {
	id: "postboy.mdx";
  slug: "postboy";
  body: string;
  collection: "tools";
  data: any
} & { render(): Render[".mdx"] };
"status.mdx": {
	id: "status.mdx";
  slug: "status";
  body: string;
  collection: "tools";
  data: any
} & { render(): Render[".mdx"] };
"stream/afk.mdx": {
	id: "stream/afk.mdx";
  slug: "stream/afk";
  body: string;
  collection: "tools";
  data: any
} & { render(): Render[".mdx"] };
"stream/bathroom.mdx": {
	id: "stream/bathroom.mdx";
  slug: "stream/bathroom";
  body: string;
  collection: "tools";
  data: any
} & { render(): Render[".mdx"] };
"stream/food.mdx": {
	id: "stream/food.mdx";
  slug: "stream/food";
  body: string;
  collection: "tools";
  data: any
} & { render(): Render[".mdx"] };
"stream/stream.mdx": {
	id: "stream/stream.mdx";
  slug: "stream";
  body: string;
  collection: "tools";
  data: any
} & { render(): Render[".mdx"] };
"stream/water.mdx": {
	id: "stream/water.mdx";
  slug: "stream/water";
  body: string;
  collection: "tools";
  data: any
} & { render(): Render[".mdx"] };
"webmaster.mdx": {
	id: "webmaster.mdx";
  slug: "webmaster";
  body: string;
  collection: "tools";
  data: any
} & { render(): Render[".mdx"] };
};
"video": {
"wolfram.mdx": {
	id: "wolfram.mdx";
  slug: "wolfram";
  body: string;
  collection: "video";
  data: InferEntrySchema<"video">
} & { render(): Render[".mdx"] };
};
"website": {
"about/about.mdx": {
	id: "about/about.mdx";
  slug: "about";
  body: string;
  collection: "website";
  data: InferEntrySchema<"website">
} & { render(): Render[".mdx"] };
"c/c.mdx": {
	id: "c/c.mdx";
  slug: "c";
  body: string;
  collection: "website";
  data: InferEntrySchema<"website">
} & { render(): Render[".mdx"] };
"events/events.mdx": {
	id: "events/events.mdx";
  slug: "events";
  body: string;
  collection: "website";
  data: InferEntrySchema<"website">
} & { render(): Render[".mdx"] };
"github/github.mdx": {
	id: "github/github.mdx";
  slug: "github";
  body: string;
  collection: "website";
  data: InferEntrySchema<"website">
} & { render(): Render[".mdx"] };
"twitch.mdx": {
	id: "twitch.mdx";
  slug: "twitch";
  body: string;
  collection: "website";
  data: InferEntrySchema<"website">
} & { render(): Render[".mdx"] };
"twitter.mdx": {
	id: "twitter.mdx";
  slug: "twitter";
  body: string;
  collection: "website";
  data: InferEntrySchema<"website">
} & { render(): Render[".mdx"] };
"youtube.mdx": {
	id: "youtube.mdx";
  slug: "youtube";
  body: string;
  collection: "website";
  data: InferEntrySchema<"website">
} & { render(): Render[".mdx"] };
};

	};

	type DataEntryMap = {
		"_bin": {
};

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	type ContentConfig = typeof import("../src/content/config");
}
