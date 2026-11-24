import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The robot vacuum's best excuse, one line.
const line =
  "I didn't miss that spot — the dust bunny under the couch pays rent, and I don't evict paying tenants.";

if (line.length > 140) {
  throw new Error(`entry is ${line.length} chars, over the 140 limit`);
}
if (line.split("\n").length !== 1) {
  throw new Error("entry must be exactly 1 line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(`wrote ${line.length}-char entry to ${join(outDir, "entry.txt")}`);
