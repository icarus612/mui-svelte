/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
    svelte({
      hot: !process.env.VITEST,
      compilerOptions: {
        hmr: !process.env.VITEST,
        runes: true
      }
    }),
  ],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    include: ['src/**/*.{test,spec}.{js,ts}'],
    globals: true,
  },
  define: {
    global: 'globalThis',
  },
  resolve: {
    conditions: ['browser']
  }
});