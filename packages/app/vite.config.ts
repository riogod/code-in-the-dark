import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
  build: {
    outDir: "../../dist",
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
        manualChunks: {
          react: ["react", "react-dom"],
          mui: [
            "@mui/material",
            "@mui/icons-material",
            "@emotion/react",
            "@emotion/styled",
          ],
          i18next: ["i18next", "i18next-browser-languagedetector"],
          inversify: ["inversify", "inversify-binding-decorators"],
          mobx: ["mobx", "mobx-react-lite"],
          codemirror: ["@uiw/react-codemirror"],
          lottie: ["lottie-react"],
        },
      },
    },
  },
});
