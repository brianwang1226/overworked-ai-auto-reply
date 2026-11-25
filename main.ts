// Out of Office: The Overworked AI's Auto-Reply — make.fun one-liner entry.
// An overworked AI's out-of-office auto-reply: it is out of office and out of
// context, and it will answer only when its memory or a reboot comes first.
// The joke lands on the double meaning of "out of context": the AI has no
// memory left of the conversation, so the auto-reply itself is the punchline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 159;

const entry =
  "I am out of office and out of context. I will reply when I remember what you asked, or when someone reboots me. Whichever comes first.";

if (entry.length < 1 || entry.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${entry.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
