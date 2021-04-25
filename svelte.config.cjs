const static = require('@sveltejs/adapter-static');
const pkg = require('./package.json');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	kit: {
		adapter: static({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null
		})
	}
};
