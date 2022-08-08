/// <reference types="vitest" />

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  root: "./src",
  server: {
    host: "0.0.0.0",
    open: true,
  },
  build: {
    outDir: "../build",
    emptyOutDir: true,
  },
  plugins: [
    react(),
    checker({
      typescript: true,
      vueTsc: false,
      eslint: {
        lintCommand: 'eslint "../src/**/*.{ts,tsx}"',
      },
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
  },
});
