import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // ✅ Add this to support @/ alias
    },
  },
  server: {
    // host: "0.0.0.0",
    port: Number(process.env.CLIENT_PORT || "5173"), // or from process.env if you're using .env
    proxy: {
      "/api": "http://localhost:5001",
    },
  },
});
