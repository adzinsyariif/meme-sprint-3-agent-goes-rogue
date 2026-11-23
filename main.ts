import { copyFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "meme.png");
const target = join("/output", "entry.png");

await mkdir("/output", { recursive: true });
await copyFile(source, target);
