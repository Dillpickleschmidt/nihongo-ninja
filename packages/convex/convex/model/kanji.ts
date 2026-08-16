import type { Doc } from "../_generated/dataModel";
import { QueryCtx } from "../_generated/server";
import type { KanjiEntry, RadicalEntry } from "../validators";

type WanikaniItem = Doc<"wanikaniItems">;

/**
 * Fetch kanji and radical data from wanikaniItems table
 * Skips missing entries (no placeholders)
 *
 * TODO: Will eventually fetch from additional sources and orchestrate
 * based on user preferences (e.g., WaniKani API, custom kanji sources)
 */
export async function fetchKanjiAndRadicals(
  ctx: QueryCtx,
  kanjiChars: string[],
  radicalChars: string[] = [],
): Promise<{
  kanji: KanjiEntry[];
  radicals: RadicalEntry[];
  skippedKanji: string[];
  skippedRadicals: string[];
  // Entries for the kanji's component radicals, keyed by character. Built from
  // documents this function already loaded — callers that need the component
  // radicals read them here instead of fetching the same documents again.
  componentRadicals: Map<string, RadicalEntry>;
}> {
  if (kanjiChars.length === 0 && radicalChars.length === 0) {
    return {
      kanji: [],
      radicals: [],
      skippedKanji: [],
      skippedRadicals: [],
      componentRadicals: new Map(),
    };
  }

  const items = await fetchWanikaniItemsByCharacters(ctx, [...kanjiChars, ...radicalChars]);
  const { kanjiMap, radicalMap } = partitionItemsByType(items);
  const componentMap = await buildComponentRadicalMap(ctx, kanjiMap);

  const componentRadicals = new Map<string, RadicalEntry>();
  for (const item of componentMap.values()) {
    if (item.characters) {
      componentRadicals.set(item.characters, {
        radical: item.characters,
        meanings: item.meanings,
        meaningMnemonic: item.meaningMnemonic,
      });
    }
  }

  const { entries: kanji, skipped: skippedKanji } = buildKanjiEntries(
    kanjiChars,
    kanjiMap,
    componentMap,
  );
  const { entries: radicals, skipped: skippedRadicals } = buildRadicalEntries(
    radicalChars,
    radicalMap,
  );

  return { kanji, radicals, skippedKanji, skippedRadicals, componentRadicals };
}

async function fetchWanikaniItemsByCharacters(
  ctx: QueryCtx,
  characters: string[],
): Promise<WanikaniItem[]> {
  // collect(), not first(): a character can exist as both a kanji and a
  // radical (一, 人, 日, ...), and the caller partitions by characterType.
  const results = await Promise.all(
    characters.map((char) =>
      ctx.db
        .query("wanikaniItems")
        .withIndex("by_character", (q) => q.eq("characters", char))
        .collect(),
    ),
  );
  return results.flat();
}

function partitionItemsByType(items: WanikaniItem[]): {
  kanjiMap: Map<string, WanikaniItem>;
  radicalMap: Map<string, WanikaniItem>;
} {
  const kanjiMap = new Map<string, WanikaniItem>();
  const radicalMap = new Map<string, WanikaniItem>();

  for (const item of items) {
    if (item.characterType === "kanji" && item.characters) {
      kanjiMap.set(item.characters, item);
    } else if (item.characterType === "radical" && item.characters) {
      radicalMap.set(item.characters, item);
    }
  }

  return { kanjiMap, radicalMap };
}

async function buildComponentRadicalMap(
  ctx: QueryCtx,
  kanjiMap: Map<string, WanikaniItem>,
): Promise<Map<number, WanikaniItem>> {
  const componentIds = new Set<number>();
  for (const item of kanjiMap.values()) {
    for (const id of item.componentIds) {
      componentIds.add(id);
    }
  }

  const map = new Map<number, WanikaniItem>();
  if (componentIds.size === 0) return map;

  const results = await Promise.all(
    [...componentIds].map((id) =>
      ctx.db
        .query("wanikaniItems")
        .withIndex("by_wanikaniId", (q) => q.eq("wanikaniId", id))
        .first(),
    ),
  );

  for (const item of results) {
    if (item?.characterType === "radical" && item.characters) {
      map.set(item.wanikaniId, item);
    }
  }

  return map;
}

function buildKanjiEntries(
  kanjiChars: string[],
  kanjiMap: Map<string, WanikaniItem>,
  componentMap: Map<number, WanikaniItem>,
): { entries: KanjiEntry[]; skipped: string[] } {
  const entries: KanjiEntry[] = [];
  const skipped: string[] = [];

  for (const char of kanjiChars) {
    const item = kanjiMap.get(char);
    if (!item) {
      skipped.push(char);
      continue;
    }

    const radicalComponents = item.componentIds
      .map((id) => componentMap.get(id)?.characters)
      .filter((c): c is string => c !== undefined);

    entries.push({
      kanji: char,
      radicalComponents,
      meanings: item.meanings,
      meaningMnemonic: item.meaningMnemonic,
      ...(item.readingMnemonic && { readingMnemonic: item.readingMnemonic }),
    });
  }

  return { entries, skipped };
}

function buildRadicalEntries(
  radicalChars: string[],
  radicalMap: Map<string, WanikaniItem>,
): { entries: RadicalEntry[]; skipped: string[] } {
  const entries: RadicalEntry[] = [];
  const skipped: string[] = [];

  for (const char of radicalChars) {
    const item = radicalMap.get(char);
    if (!item) {
      skipped.push(char);
      continue;
    }

    entries.push({
      radical: char,
      meanings: item.meanings,
      meaningMnemonic: item.meaningMnemonic,
    });
  }

  return { entries, skipped };
}
