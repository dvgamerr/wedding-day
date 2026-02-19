import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import compress from 'astro-compress';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	prefetch: true,
	site: 'https://wedding.dvgamerr.app',
	output: 'static',
	integrations: [mdx(), sitemap(), compress()],
});
