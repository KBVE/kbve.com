import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: 'https://kbve.com',
  markdown: {
    extendDefaultPlugins: true
  },
  integrations: [preact(), sitemap({
    customPages: ['https://app.kbve.com/#/', 'https://app.kbve.com/#/asset/']
  }), mdx(), react(), compress()]
});