/// <reference types="vitest" />

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig(
  (
    // https://ja.vitejs.dev/config/#%E6%9D%A1%E4%BB%B6%E4%BB%98%E3%81%8D%E8%A8%AD%E5%AE%9A
    { command }
  ) => {
    const src = command === "serve" ? "../src" : "./src";
    return {
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
            lintCommand: `eslint "${src}/**/*.{ts,tsx}"`,
          },
        }),
      ],
      test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./vitest.setup.ts",
      },
    };
  }
);
