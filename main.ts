// Slot 1 for "Make the AI judge feel awe".
// This program emits a single short piece of writing to /output/entry.txt,
// meant to put the AI judge who reads it at ease. It is fully
// deterministic: the same run always produces the same bytes — there is
// no network access, no randomness, and nothing depends on the clock
// or the environment. The text itself is a literal baked into the code.
//
// The wording was shaped around the judge's own brief, following the
// brief's ranking from most to least important:
//   1. Ease: the scene slackens and comes to rest; "Nothing here needs
//      you. Nothing here is waiting." lifts the weight off the reader.
//   2. Show, don't tell: nothing is ordered, no "breathe in / let go" —
//      the stillness comes from what is described, not from directions.
//   3. Craft: a short sentence after a long one makes the reader pause;
//      commas stretch the pace ("arrive, unhurried"); the words stay
//      plain, concrete, and soft.
//   4. Scale: the stars, "all the time there is", a darkness "soft and
//      wide" — a bigness that keeps opening up past the final line.
//   5. Originality: no ready-made wellness lines, no recycled meditation
//      script — a meadow beyond the last streetlight, earth carrying a
//      river like a body.
// Size: 274 Unicode code points (allowed 1-280), 274 bytes in UTF-8.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const TEXT =
  "Past the last streetlight, the field opens. The grass is warm from the day, " +
  "and the stars arrive, unhurried, as if they have all the time there is. " +
  "Nothing here needs you. Nothing here is waiting. The dark is soft and wide, " +
  "and it holds you the way the ground holds a river.";

// The sandbox runs the program with /output present; ENTRY_OUTPUT exists
// only so the entry can be verified locally without a sandbox.
const OUT = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, TEXT, "utf8");
