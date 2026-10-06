import { readdir, mkdir, rm } from "node:fs/promises";
import { basename, extname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const contentRoot = fileURLToPath(new URL("../content/", import.meta.url));
const outputRoot = fileURLToPath(
  new URL("../src/generated/post-images/", import.meta.url),
);
const imageExtensions = new Set([".png", ".jpg", ".jpeg", ".webp"]);

await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });

for (const post of await readdir(contentRoot, { withFileTypes: true })) {
  if (!post.isDirectory()) continue;

  const postRoot = join(contentRoot, post.name);
  for (const filename of await readdir(postRoot)) {
    if (!imageExtensions.has(extname(filename).toLowerCase())) continue;

    const outputName = `${post.name}-${basename(filename, extname(filename))}.webp`;
    await sharp(join(postRoot, filename))
      .resize({ width: 1600, height: 1600, fit: "inside", withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(join(outputRoot, outputName));
  }
}