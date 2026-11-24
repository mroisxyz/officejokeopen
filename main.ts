// hello again, this entry sends one small joke to the stand-up judge.
// The batch has no orders to process and no meeting slot to defend.
// Every slot in this pipeline stays dull so the final word can land.

import { mkdir, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ownDir = fileURLToPath(new URL('.', import.meta.url));
const outputDir = resolve(ownDir, process.env.MAKEFUN_OUTPUT_DIR ?? '/output');
const joke = "I put 'quick question' in the subject line and watched three calendars quietly close like doors.";

await mkdir(outputDir, { recursive: true });
await writeFile(join(outputDir, 'entry.txt'), joke, 'utf8');
console.log(`entry.txt: ${Buffer.byteLength(joke, 'utf8')} bytes`);
