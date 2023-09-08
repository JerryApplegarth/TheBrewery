const { defineConfig } = require('vite');

module.exports = defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: 'index.html',
				about: './zipcode.html',

				// ...
				// List all files you want in your build
			},
		},
	},
});
