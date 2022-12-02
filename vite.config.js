import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    build: {
      lib: {
        entry: resolve(__dirname, "src/main.jsx"),
        name: "WFReactWidget",
        fileName: "bundle",
        formats: ["iife"],
      },
      rollupOptions: {
        external: ["react", "react-dom"],
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
          },
        },
      },
    },
    plugins: [react(), svgr()],
    define: {
      "process.env.NODE_ENV":
        command === "build" ? '"production"' : '"development"',
    },
  };
});
