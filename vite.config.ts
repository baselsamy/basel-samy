import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // 🔑 REQUIRED for GitHub Pages (repo name)
  base: "/basel-samy/",

  // 🔑 REQUIRED to make /docs the ONLY build output
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },

  // ✅ KEEP — used only for local dev
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },

  // ✅ KEEP — Lovable tagger only in dev
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  // ✅ KEEP — path alias
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
