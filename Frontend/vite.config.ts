import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import * as path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      "@hitss": path.resolve(__dirname, "../Backend/src"),
      "@cmp": path.resolve(__dirname, "./src/components"),
      "@stl": path.resolve(__dirname, "./src/styles"),
      "@ast": path.resolve(__dirname, "./src/assets"),
      "@pgs": path.resolve(__dirname, "./src/pages"),
    },
  },
  server: {
    port: 5173,
    host: true,
    fs: {
      allow: [".."],
    },
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  plugins: [react()],
});
