import { copyFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const indexPath = fileURLToPath(new URL("../dist/index.html", import.meta.url));
const notFoundPath = fileURLToPath(new URL("../dist/404.html", import.meta.url));

copyFileSync(indexPath, notFoundPath);