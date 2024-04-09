import { defineConfig, passthroughImageService } from 'astro/config';
import deno from '@astrojs/deno';

export default defineConfig({
	adapter: deno(),
	output: 'server',
	image: {
    service: passthroughImageService(),
  },
})
