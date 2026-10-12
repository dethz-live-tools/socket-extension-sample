import fs from "node:fs";
import path from "node:path";
import type { ApiModuleMeta } from "../../../src/modules/expansion";

export interface ExtensionConfig extends ApiModuleMeta {
  routePath?: string;
  wsPrefix?: string;
}

/**
 * Load and parse extensions.json metadata
 */
export function loadMeta(dir: string = import.meta.dir): ExtensionConfig {
  const candidates = [
    path.resolve(dir, "extensions.json"),
    path.resolve(dir, "..", "extensions.json"),
  ];
  for (const cand of candidates) {
    if (fs.existsSync(cand)) {
      return JSON.parse(fs.readFileSync(cand, "utf-8"));
    }
  }
  throw new Error(`[sample] Missing required metadata file: ${candidates[0]}`);
}

export const meta = loadMeta();
