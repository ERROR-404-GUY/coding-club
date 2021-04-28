const adapter = require('@sveltejs/adapter-static');
const pkg = require('./package.json');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	kit: {
		adapter: adapter({
			fallback: 'index.html'
		}),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		ssr: false,

		vite: {
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {})
			}
		}
	}
};
