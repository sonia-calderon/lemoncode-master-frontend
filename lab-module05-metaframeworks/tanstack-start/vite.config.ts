import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
    tanstackStart({
      prerender: {
        enabled: true,
        crawlLinks: false,
        autoStaticPathsDiscovery: false,
      },
      pages: [
        { path: '/houses/1' },
        { path: '/houses/2' },
        { path: '/houses/3' },
        { path: '/houses/4' },
        { path: '/houses/5' },
        { path: '/houses/6' },
      ],
    }),
    react(),
  ],
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  envPrefix: 'PUBLIC_',
});
