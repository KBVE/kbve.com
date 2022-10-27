import { defineConfig } from "astro/config";
//import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import compress from "astro-compress";
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://kbve.com",
  markdown: {
    extendDefaultPlugins: true
  },
  integrations: [
  // preact({
  //   compat: true
  // }), 

  sitemap({
    customPages: ["https://app.kbve.com/#/", "https://app.kbve.com/#/asset/"]
  }), mdx(), react(), 
  //compress(), 
  prefetch({
    throttle: 20
  }), tailwind()],
  
  // Vite
  
  vite: {
    ssr: {
      //external: ["@11ty/eleventy-img", "svgo"],
      external: ["@11ty/eleventy-img"],

    },
    }
});