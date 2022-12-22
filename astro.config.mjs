import { defineConfig } from "astro/config";
//import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import compress from "astro-compress";
import prefetch from "@astrojs/prefetch";

//*   MDX / MD Integration
import markdownConfig from './markdown.config'

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({

  // Experimental
  experimental: {
    contentCollections: true,
  },
  site: "https://kbve.com",
  markdown: markdownConfig,
  integrations: [
  // preact({
  //   compat: true
  // }), 

  sitemap({
    customPages: ["https://app.kbve.com/#/", "https://app.kbve.com/#/asset/"]
  }), 
  mdx({
    ...markdownConfig,
    //extendPlugins: "astroDefaults"
  }), 
  react(),
  compress(), 
  prefetch({
    throttle: 20
  }), 
  tailwind(), 
  alpinejs(), 
  partytown({
    // dataLayer.push as a forwarding-event.
    config: { 
      forward: ["dataLayer.push"] 
    },
  }),
  ],
  // Vite

  vite: {
    ssr: {
      //external: ["@11ty/eleventy-img", "svgo"],
      external: ["@11ty/eleventy-img"]
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
  }
});