// Module path and resolution utilities

import { chapters } from "../chapters";
import { dynamic_modules, type DynamicModule } from "../dynamic_modules";
import { external_resources, type ExternalResource } from "../external_resources";
import { getModuleLink, type ModuleLink } from "../module-links";
import { static_modules, type StaticModule } from "../static_modules";

// Unified Module type
export type Module = StaticModule | DynamicModule | ExternalResource;

export const moduleCatalog: Record<string, Module> = {
  ...static_modules,
  ...dynamic_modules,
  ...external_resources,
};

/**
 * Given a moduleId, find the next module in the learning path and return its link.
 */
export function getNextModuleLink(moduleId: string): ModuleLink | null {
  for (const textbookChapters of Object.values(chapters)) {
    for (const chapter of Object.values(textbookChapters)) {
      const ids = chapter.learning_path_item_ids;
      const idx = ids.indexOf(moduleId);
      if (idx === -1 || idx === ids.length - 1) continue;

      const nextId = ids[idx + 1];
      if (nextId === undefined) continue;
      const nextModule = moduleCatalog[nextId];
      if (nextModule) return getModuleLink(nextModule, nextId);
    }
  }
  return null;
}
