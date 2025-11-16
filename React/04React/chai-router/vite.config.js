import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackReactRouterVite } from "@tanstack/router-plugin";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    TanStackReactRouterVite({ target: "react", autoCodeSplitting: true }),
    react(),
  ],
});
