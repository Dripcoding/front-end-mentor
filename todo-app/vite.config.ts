/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { VitePluginFonts } from 'vite-plugin-fonts';
import viteTsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	cacheDir: './node_modules/.vite/todo-app-',

	server: {
		port: 4200,
		host: 'localhost',
	},

	preview: {
		port: 4300,
		host: 'localhost',
	},

	plugins: [
		svgr(),
		react(),
		viteTsConfigPaths({
			root: './',
		}),
		VitePluginFonts({
			custom: {
				families: [
					{
						name: 'Josefin Sans',
						local: 'Josefin Sans',
						src: './src/assets/fonts/*.ttf',
					},
				],
				display: 'auto',
				preload: true,
				prefetch: false,
			},
		}),
	],

	test: {
		globals: true,
		cache: {
			dir: './node_modules/.vitest',
		},
		environment: 'jsdom',
		include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
		setupFiles: ['setupTests.js'],
	},
});
