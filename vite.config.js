import { defineConfig } from "vite";
import svgrPlugin from "vite-plugin-svgr";
import react from "@vitejs/plugin-react";
import fs from "fs";

export default defineConfig({
  plugins: [react(), svgrPlugin()],
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
