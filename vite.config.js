import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: [{ find: 'src', replacement: path.resolve(__dirname, 'src') }]
	},
	server: {
		host: 'localhost',
		port: 3000
	}
};

export default config;
