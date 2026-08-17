import { execFileSync } from "node:child_process";
import * as fs from "node:fs";
import * as path from "node:path";

export const repoRoot = path.resolve(import.meta.dirname, "../..");
const convexDir = path.join(repoRoot, "packages/convex");

export function importToConvex(tableName: string, filePath: string): void {
  execFileSync("npx", ["convex", "import", "--table", tableName, filePath, "--replace", "-y"], {
    stdio: "inherit",
    cwd: convexDir,
  });
}

export function writeJsonl(filePath: string, rows: unknown[]): void {
  // Written in chunks: joining hundreds of thousands of rows into one
  // string exceeds the engine's maximum string length.
  const fd = fs.openSync(filePath, "w");
  try {
    const CHUNK = 5000;
    for (let i = 0; i < rows.length; i += CHUNK) {
      const chunk = rows.slice(i, i + CHUNK);
      const prefix = i === 0 ? "" : "\n";
      fs.writeSync(fd, prefix + chunk.map((r) => JSON.stringify(r)).join("\n"));
    }
  } finally {
    fs.closeSync(fd);
  }
}

export function readJson<T>(filePath: string): T {
  return JSON.parse(fs.readFileSync(filePath, "utf-8")) as T;
}

// Reads one variable from the root .env (nub does not auto-load env files).
export function readRootEnv(name: string): string | undefined {
  if (process.env[name]) return process.env[name];
  const envPath = path.join(repoRoot, ".env");
  if (!fs.existsSync(envPath)) return undefined;
  for (const line of fs.readFileSync(envPath, "utf-8").split("\n")) {
    const match = /^([A-Z0-9_]+)=(.*)$/u.exec(line.trim());
    if (match && match[1] === name) return match[2];
  }
  return undefined;
}
