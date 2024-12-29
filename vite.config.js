import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "@svgr/rollup";
import { ghPages } from "vite-plugin-gh-pages";

export default defineConfig({
  plugins: [react(), svgr(), ghPages()],
  base: "/",
});
