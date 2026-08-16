#!/usr/bin/env node
// Makes the client-rendered bundle for Electron (apps/tanstack-start/dist-electron).
//
//   1. Copy the client assets from the SSR build (.output).
//   2. Start the built SSR server one time. Get the HTML of "/". Write it as
//      index.html. The router then handles all navigation in the client.
//
// TanStack Start SPA mode is not reliable on nitro 3 alpha. Use this instead.
// Run with `nub run -F @nn/tanstack-start build:electron`.
import { spawn } from "node:child_process";
import * as fs from "node:fs";
import * as path from "node:path";

const repoRoot = path.resolve(import.meta.dirname, "..");
const webDir = path.join(repoRoot, "apps/tanstack-start");
const outputDir = path.join(webDir, ".output");
const distDir = path.join(webDir, "dist-electron");
const PORT = 45123;

function fail(msg: string): never {
  console.error(`\n[export-electron] ERROR: ${msg}\n`);
  process.exit(1);
}

if (!fs.existsSync(path.join(outputDir, "server/index.mjs"))) {
  fail("apps/tanstack-start/.output not found — run `vite build` first (build:electron does).");
}

fs.rmSync(distDir, { recursive: true, force: true });
fs.mkdirSync(distDir, { recursive: true });
fs.cpSync(path.join(outputDir, "public"), distDir, { recursive: true });

const server = spawn("node", [path.join(outputDir, "server/index.mjs")], {
  env: { ...process.env, PORT: String(PORT) },
  stdio: ["ignore", "pipe", "pipe"],
});
server.stderr.on("data", (d) => {
  process.stderr.write(d);
});

async function fetchShell() {
  for (let attempt = 0; attempt < 30; attempt++) {
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/`);
      if (res.ok) return await res.text();
    } catch {
      // The server is not ready yet.
    }
    await new Promise((r) => {
      setTimeout(r, 500);
    });
  }
  return null;
}

const html = await fetchShell();
server.kill();

if (!html) fail("Could not fetch / from the built SSR server after 15s.");
if (!html.includes("<html")) fail("Response for / does not look like HTML.");

fs.writeFileSync(path.join(distDir, "index.html"), html);
console.log(
  `[export-electron] wrote ${path.relative(repoRoot, distDir)} (${fs.readdirSync(distDir).length} entries).`,
);
process.exit(0);
