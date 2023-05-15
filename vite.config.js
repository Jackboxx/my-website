import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: [{ find: '$lib', replacement: path.resolve(__dirname, 'src/lib') }]
	},
	server: {
		https: true,
		host: 'localhost',
		port: 3000
	}
};

export default config;
