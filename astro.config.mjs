import { defineConfig } from 'astro/config'
import { fileURLToPath } from 'node:url'
import mdx from '@astrojs/mdx'
import compress from 'astro-compress'
import tailwindcss from '@tailwindcss/vite'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  site: 'https://wedding.dvgamerr.app',
  output: 'static',
  integrations: [mdx(), sitemap(), compress()],
  security: {
    checkOrigin: false,
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  },
})
