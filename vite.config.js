import { defineConfig } from "vite";
import prefresh from "@prefresh/vite";
import svgr from "vite-plugin-svgr";
import fs from "fs";
//eslint-disable-next-line
process.env.NODE_ENV === "development" && import("preact/debug");
// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
    jsxInject: `import { h, Fragment } from 'preact'`,
    legalComments: "none",
    sourcemap: false,
    minify: true,
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
  },
  plugins: [svgr(), prefresh()],
  resolve: {
    alias: [
      { find: "react", replacement: "preact/compat" },
      { find: "react-dom", replacement: "preact/compat" },
      { find: "@appHooks", replacement: "/src/hooks" },
      { find: "@appFirebase", replacement: "/src/firebase" },
      { find: "@assets", replacement: "/src/assets" },
      { find: "@appComponents", replacement: "/src/global-components" },
    ],
  },
  server: {
    port: 3000,
    https: {
      key: fs.readFileSync("localhost-key.pem"),
      cert: fs.readFileSync("localhost.pem"),
    },
    host: "0.0.0.0",
  },
});
