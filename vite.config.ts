import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // custom domain = serve from root, not a subfolder
  publicDir: "static", // ← look here for static assets instead of public/ will be copied to dist
});
