import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

import sitemap from "@astrojs/sitemap";


// https://astro.build/config
export default defineConfig({
	site: 'https://kbve.com',
	
  integrations: [
	preact(), 
	sitemap({
	customPages: ['https://app.kbve.com/#/', 'https://app.kbve.com/#/asset/']
  	})
	]
});