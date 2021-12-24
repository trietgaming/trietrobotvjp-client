import { defineConfig } from "vite";
import svgrPlugin from "vite-plugin-svgr";
import react from "@vitejs/plugin-react";
import fs from "fs";
import eslint from "@rollup/plugin-eslint";
import { resolve as resolvePath } from "path";

export default defineConfig({
  plugins: [
    react(),
    svgrPlugin(),
    { ...eslint({ include: "src/**/*.+(jsx | js)" }), enforce: "pre" },
  ],
  resolve: {
    alias: [
      { find: "@assets", replacement: `${__dirname}/src/assets` },
      { find: "@appFirebase", replacement: `${__dirname}/src/firebase` },
      { find: "@appReduxStore", replacement: `${__dirname}/src/App/store.js` },
      { find: "@customHooks", replacement: `${__dirname}/src/hooks` },
      {
        find: "@components",
        replacement: `${__dirname}/src/global-components`,
      },
      { find: "@CONFIG", replacement: `${__dirname}/app-config.json` },
    ],
  },
  server: {
    port: 3000,
    https: {
      key: fs.readFileSync("localhost-key.pem"),
      cert: fs.readFileSync("localhost.pem"),
    },
  },
});
