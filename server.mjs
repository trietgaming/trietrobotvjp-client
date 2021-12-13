import express from "express";
import { resolve as resolvePath, join as joinPath } from "path";

const app = express();

app.use(express.static(joinPath(resolvePath(), "dist")));

app.listen(process.env.PORT, () => {
  console.log("listen");
  console.log(joinPath(resolvePath(), "dist", "index.html"));
});

app.use((req, res, next) => {
  res.sendFile(joinPath(resolvePath(), "dist", "index.html"));
});