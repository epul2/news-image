// News image entry (Node 22, standard library only): the front page is entry.png
// beside this file, and the program copies it to /output/entry.png. The gate takes
// a whole PNG or JPEG of at most 1 MiB and 1024 by 1024 pixels, and the judge sees
// exactly the bytes copied. The page itself was built in this session (page.html,
// rendered to entry.png with headless Chrome); the hero illustration is in assets/.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
