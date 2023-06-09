import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import ssr from "vite-plugin-ssr/plugin";
const mode = process.env.MODE || "dev";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({ compilerOptions: { hydratable: true } }),

    mode !== "hmr" ? ssr({ prerender: true }) : {},
  ],
  server: {
    port: 9085,
  },
  mode: mode === "dev" ? "development" : "production",
  build: {
    minify: mode !== "dev",
    emptyOutDir: true,
  },
});
