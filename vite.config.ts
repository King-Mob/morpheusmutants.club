import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  resolve: {
    alias: {
      src: resolve(__dirname, "web"),
    },
  },
  plugins: [react()],
  build: {
    outDir: "../dist-web",
    emptyOutDir: true,
  },
});
