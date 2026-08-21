/* The CSS is the source of truth and lives at the repo's design-system/.
   This concatenates it into dist/ so the package ships one stylesheet, in the
   order tokens-then-components that the system requires. */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const src = resolve(here, "../../../design-system");
const out = resolve(here, "../dist/design-system.css");

const FONTS =
  "@import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,400;0,500;0,600;0,700;0,800;1,700;1,800&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');\n";

mkdirSync(dirname(out), { recursive: true });
writeFileSync(
  out,
  FONTS +
    "\n/* ---- tokens.css ---- */\n" + readFileSync(resolve(src, "tokens.css"), "utf8") +
    "\n/* ---- elmore.css ---- */\n" + readFileSync(resolve(src, "elmore.css"), "utf8"),
);
console.log("built dist/design-system.css");
