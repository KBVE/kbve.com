import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

//?     [JS]:[Library]
//TODO  <import vue>

import react from '@astrojs/react';

//*   Prefetch for AstroJS
import prefetch from '@astrojs/prefetch';

//*   MDX / MD Integration
import mdx from '@astrojs/mdx';
import markdownConfig from './markdown.config';

//*   [TailWindCSS] for AstroJS
//?   Reference https://kbve.com/application/javascript/#tailwindcss
import tailwind from '@astrojs/tailwind';

//*   [AlpineJS]:[AstroJS]
//?   Reference https://kbve.com/application/javascript/#alphinejs
import alpinejs from '@astrojs/alpinejs';

//* Party Town for AstroJS
import partytown from '@astrojs/partytown';

//* Define Config of AstroJS


//*   [Svelte]:[AstroJS]
import svelte from '@astrojs/svelte';

//!   [Million.js]
import million from 'million/compiler';

// https://astro.build/config
export default defineConfig({
	site: 'https://kbve.com/',
	markdown: markdownConfig,
	integrations: [
		sitemap({
			customPages: ['https://app.kbve.com/#/', 'https://app.kbve.com/#/asset/'],
		}),
		mdx({
			...markdownConfig,
			//extendPlugins: "astroDefaults"
		}),
		//  React
		react(),
		//  Post-Build -> Compress
		//compress(),
		//  Prefetch
		prefetch({
			throttle: 3,
		}),
		tailwind(),
		alpinejs(),
		partytown({
			// dataLayer.push as a forwarding-event.
			config: {
				forward: ['dataLayer.push'],
			},
		}),
		// Image Experimental from Astro.
		
		// Svelte
		svelte(),
	],
	//  Vite
	vite: {
		plugins: [million.vite({ mode: 'react', optimize: false, server: true })],
		ssr: {
			//external: ["@11ty/eleventy-img", "svgo"],
			//external: ["@11ty/eleventy-img"]
		},
		// build: {
		//   rollupOptions: {
		//     output: {
		//       entryFileNames: 'entry.[hash].js',
		//       chunkFileNames: 'chunks/chunk.[hash].js',
		//       assetFileNames: 'assets/asset.[hash][extname]',
		//     },
		//   },
		// },
	},
});
