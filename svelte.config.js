import preprocess from 'svelte-preprocess';
import vercel from '@sveltejs/adapter-vercel';
import staticAdapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess({
		defaults: {
			style: 'postcss'
		},
		"postcss": true
	})],

	kit: {
		//adapter: vercel(),
		adapter: staticAdapter(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
