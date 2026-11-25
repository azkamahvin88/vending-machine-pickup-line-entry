// vending-machine-pickup-line-entry — make.fun one-liner entry
// Writes the chosen pickup line (spoken AS a vending machine) to entry.txt.
// Node 22+, standard library only, ESM.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Are you exact change? Because every time you walk by, something in me finally adds up.";

const MAX_CHARS = 200;

function countCodePoints(text) {
  return [...text].length;
}

function validate(line) {
  if (typeof line !== "string" || line.length === 0) {
    throw new Error("pickup line must be a non-empty string");
  }
  if (line.trim().length === 0) {
    throw new Error("pickup line must not be blank");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("pickup line must be a single line (no newline characters)");
  }
  const chars = countCodePoints(line);
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(
      `pickup line must be 1-${MAX_CHARS} characters, got ${chars}`,
    );
  }
  return chars;
}

function main() {
  const chars = validate(LINE);
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, `${LINE}\n`, "utf8");
  console.log(`wrote ${chars} chars to ${outPath}`);
}

main();
