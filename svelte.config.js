import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
            // default options are shown. On some platforms
            // these options are set automatically — see below
            target: "#svelte",
			adapter: adapter(),
			fallback: undefined
        })
	}
};

export default config;
