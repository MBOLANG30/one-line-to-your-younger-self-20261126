// One Line to Your Younger Self — make.fun entry.
// Writes one original line, in English, to send back to my younger self.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Forgive your father before the hospital hallway does it for you — you only get one unhurried conversation.";

// The gate: /output/entry.txt must be UTF-8 text of 1-200 characters,
// not only whitespace, and a single line. Fail loudly rather than
// ever writing an invalid entry. The check counts characters (the
// sealed gate counts characters, not bytes), so the em dash counts
// as one character even though it is three bytes in UTF-8.
if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  LINE.trim().length === 0 ||
  LINE.includes("\n") ||
  LINE.includes("\r")
) {
  throw new Error(
    `Line fails the gate: ${LINE.length} characters, must be 1-200, one line, non-blank.`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
