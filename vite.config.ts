import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { PreRenderedAsset } from "rollup";

export default defineConfig({
  plugins: [
    tanstackRouter({ target: "react", routesDirectory: "./src/infra/routes" }),
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(path.dirname(fileURLToPath(import.meta.url)), "src"),
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/infra/test/setup.ts"],
    include: ["**/*.tests.tsx"],
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo: PreRenderedAsset) => {
          if (/\.(png|jpe?g|gif|svg|webp|ico)$/i.test(assetInfo.name || "")) {
            return "assets/[name][extname]";
          }
          if (/\.(woff2?|eot|ttf|otf)$/i.test(assetInfo.name || "")) {
            return "assets/fonts/[name][extname]";
          }
          return "assets/[name][extname]";
        },
      },
    },
  },
});
