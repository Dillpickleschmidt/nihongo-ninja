import { buildPathSelectionPreferences } from "@nn/data/backgrounds/learning-path-selection";
import { removeBackgroundPreferencesForPath } from "@nn/data/backgrounds/overrides";
import { external_resources } from "@nn/data/external_resources";
import { getModuleLink, type ModuleLink } from "@nn/data/module-links";
import { getChaptersByTextbook } from "@nn/data/utils/chapters";
import { moduleCatalog } from "@nn/data/utils/modules";
import { getAllTextbooks, isBuiltInTextbook } from "@nn/data/utils/textbooks";

import { Doc, Id } from "../_generated/dataModel";
import { MutationCtx, QueryCtx } from "../_generated/server";
import { deleteDeck } from "./decks";
import { getDescendantFolderIds } from "./folders";
import { createDeckVocabItems } from "./vocabulary";

const MODULES_PER_CHAPTER = 30;

export type LearningPath = {
  id: string;
  name: string;
  shortName: string;
  isUserCreated: boolean;
};

export type LearningPathModule = {
  moduleId: string;
  module: {
    title: string;
    module_type: string;
    description?: string;
  };
  linkTo: ModuleLink;
  disabled: boolean;
};

export type LearningPathChapter = {
  slug: string;
  title: string;
  description?: string;
  features?: string[];
  externalResourceIds: string[];
  modules: LearningPathModule[];
};

export type ModuleDetail = {
  sourceType: "grammar" | "vocabulary";
  transcriptGroups: Array<
    Array<{
      line_id: number;
      text: string;
      english: string;
      timestamp?: string;
    }>
  >;
  vocabularyItems: Array<{
    word: string;
    furigana?: string;
    english?: string;
  }>;
  moduleDescription?: string;
};

type CreateCustomLearningPathArgs = {
  transcript: {
    name: string;
    showName?: string;
    episodeName?: string;
    transcriptData: Array<{
      line_id: number;
      text: string;
      english: string;
      timestamp?: string;
    }>;
  };
  selectedGrammarModules: Array<{
    moduleId: string;
    transcriptLineIds: number[][];
    orderIndex: number;
  }>;
  selectedVocabDecks: Array<{
    isVerbDeck: boolean;
    words: Array<{
      word: string;
      furigana?: string;
      english?: string;
    }>;
    transcriptLineIds: number[][];
    orderIndex: number;
  }>;
};

/**
 * Gets all built-in textbook learning paths
 */
export function getBuiltInPaths(): LearningPath[] {
  return getAllTextbooks().map((tb) => ({
    id: tb.id,
    name: tb.name,
    shortName: tb.short_name,
    isUserCreated: false,
  }));
}

/**
 * Gets all learning paths (built-in + user-created if authenticated)
 */
export async function getAllLearningPaths(ctx: QueryCtx): Promise<LearningPath[]> {
  const builtInPaths = getBuiltInPaths();

  const identity = await ctx.auth.getUserIdentity();
  if (!identity) return builtInPaths;

  const userPaths = await ctx.db
    .query("learningPathTranscripts")
    .withIndex("by_user", (q) => q.eq("userId", identity.subject))
    .collect();

  const mappedUserPaths = userPaths.map((path) => ({
    id: String(path._id),
    name: path.name,
    shortName: path.name,
    isUserCreated: true,
  }));

  return [...builtInPaths, ...mappedUserPaths];
}

export async function getResolvedChaptersForPath(
  ctx: QueryCtx,
  pathId: string,
): Promise<LearningPathChapter[]> {
  if (isBuiltInTextbook(pathId)) {
    const chapters = getChaptersByTextbook(pathId);
    return chapters.map((chapter) => {
      const disabledSet = new Set(chapter.disabled_modules ?? []);
      const modules = resolveLearningPathModuleIds(
        chapter.learning_path_item_ids,
        disabledSet,
        chapter.slug,
      );
      const externalResourceIds = chapter.learning_path_item_ids.filter(
        (id) => id in external_resources,
      );

      return {
        slug: chapter.slug,
        title: chapter.title,
        description: chapter.description,
        features: chapter.features,
        externalResourceIds,
        modules,
      };
    });
  }

  const userPathId = await resolveUserPathId(ctx, pathId);
  if (!userPathId) return [];

  const moduleSources = await ctx.db
    .query("learningPathModuleSources")
    .withIndex("by_path", (q) => q.eq("pathId", userPathId))
    .collect();

  if (moduleSources.length === 0) return [];

  moduleSources.sort((a, b) => a.orderIndex - b.orderIndex);

  const deckIds = new Set(
    moduleSources
      .filter((source) => source.sourceType === "vocabulary")
      .map((source) => source.moduleId),
  );

  const identity = await ctx.auth.getUserIdentity();
  if (!identity) return [];

  const decks = await Promise.all(
    [...deckIds].map((deckId) => ctx.db.get(deckId as Id<"userDecks">)),
  );

  const deckMap = new Map(
    decks
      .filter((deck) => deck !== null && deck.userId === identity.subject)
      .map((deck) => [String(deck!._id), deck!]),
  );

  const resolvedModules: LearningPathModule[] = [];

  for (const source of moduleSources) {
    if (source.sourceType === "grammar") {
      const module = moduleCatalog[source.moduleId];
      if (!module) {
        console.warn(
          `[LearningPath] Missing grammar module '${source.moduleId}' for custom path '${pathId}'`,
        );
        continue;
      }

      resolvedModules.push({
        moduleId: source.moduleId,
        module: {
          title: module.title,
          module_type: module.module_type,
          description: module.description,
        },
        linkTo: getModuleLink(module, source.moduleId),
        disabled: false,
      });
      continue;
    }

    const deck = deckMap.get(source.moduleId);
    if (!deck) {
      console.warn(
        `[LearningPath] Missing vocabulary deck '${source.moduleId}' for custom path '${pathId}'`,
      );
      continue;
    }

    const folderPath = deck.folderId ? await buildFolderPath(ctx, deck.folderId) : "";
    const deckPath = folderPath
      ? `/vocab/${folderPath}/${String(deck._id)}`
      : `/vocab/${String(deck._id)}`;

    resolvedModules.push({
      moduleId: source.moduleId,
      module: {
        title: deck.deckName,
        module_type: "vocab-practice",
        description: deck.deckDescription,
      },
      linkTo: { to: deckPath },
      disabled: false,
    });
  }

  return buildCustomPathChapters(resolvedModules);
}

export async function getModuleDetail(
  ctx: QueryCtx,
  pathId: string,
  moduleId: string,
): Promise<ModuleDetail | null> {
  const userPathId = await resolveUserPathId(ctx, pathId);
  if (!userPathId) return null;

  const path = await ctx.db.get(userPathId);
  if (!path) return null;

  const source = await ctx.db
    .query("learningPathModuleSources")
    .withIndex("by_path_module", (q) => q.eq("pathId", userPathId).eq("moduleId", moduleId))
    .first();

  if (!source) {
    console.warn(
      `[LearningPath] Missing module source for path '${pathId}' and module '${moduleId}'`,
    );
    return null;
  }

  // Resolve by line_id, not array position: ids need not be zero-based or dense.
  const lineById = new Map(path.transcriptData.map((line) => [line.line_id, line]));
  const transcriptGroups = source.transcriptLineIds.map((group) =>
    group.map((lineId) => lineById.get(lineId)).filter((line) => line !== undefined),
  );

  if (source.sourceType === "grammar") {
    const module = moduleCatalog[moduleId];
    if (!module) {
      console.warn(`[LearningPath] Missing grammar module '${moduleId}' for module detail`);
    }

    return {
      sourceType: "grammar",
      transcriptGroups,
      vocabularyItems: [],
      moduleDescription: module?.description,
    };
  }

  const deckId = moduleId as Id<"userDecks">;
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) return null;

  const deck = await ctx.db.get(deckId);
  if (!deck || deck.userId !== identity.subject) {
    console.warn(`[LearningPath] Missing or unauthorized deck '${moduleId}' for module detail`);
    return {
      sourceType: "vocabulary",
      transcriptGroups,
      vocabularyItems: [],
    };
  }

  const vocabItems = await ctx.db
    .query("deckVocabularyItems")
    .withIndex("by_deck_word", (q) => q.eq("deckId", deckId))
    .collect();

  return {
    sourceType: "vocabulary",
    transcriptGroups,
    vocabularyItems: vocabItems
      .sort((a, b) => a._creationTime - b._creationTime)
      .map((item) => ({
        word: item.word,
        furigana: item.furigana,
        english: item.english[0],
      })),
  };
}

// Convex caps one document at ~1 MiB and one transaction at 16 MiB / 16k
// documents — reject inputs that could exceed them.
const MAX_TRANSCRIPT_LINES = 5000;
const MAX_TRANSCRIPT_BYTES = 900_000;
const MAX_GRAMMAR_MODULES = 200;
const MAX_VOCAB_DECKS = 100;
const MAX_WORDS_PER_DECK = 500;
const MAX_LINE_ID_GROUPS = 200;

function requireValidOrderIndex(orderIndex: number): void {
  if (!Number.isInteger(orderIndex) || orderIndex < 0) {
    throw new Error(`orderIndex must be a non-negative integer, got ${orderIndex}`);
  }
}

function validateCreateCustomLearningPathArgs(args: CreateCustomLearningPathArgs): void {
  const { transcript, selectedGrammarModules, selectedVocabDecks } = args;
  if (transcript.transcriptData.length > MAX_TRANSCRIPT_LINES) {
    throw new Error(`Transcript has too many lines (max ${MAX_TRANSCRIPT_LINES})`);
  }
  if (JSON.stringify(transcript.transcriptData).length > MAX_TRANSCRIPT_BYTES) {
    throw new Error("Transcript is too large");
  }
  if (selectedGrammarModules.length > MAX_GRAMMAR_MODULES) {
    throw new Error(`Too many grammar modules (max ${MAX_GRAMMAR_MODULES})`);
  }
  if (selectedVocabDecks.length > MAX_VOCAB_DECKS) {
    throw new Error(`Too many vocabulary decks (max ${MAX_VOCAB_DECKS})`);
  }
  for (const module of selectedGrammarModules) {
    if (!Object.hasOwn(moduleCatalog, module.moduleId)) {
      throw new Error(`Unknown module id: ${module.moduleId}`);
    }
    requireValidOrderIndex(module.orderIndex);
    if (module.transcriptLineIds.length > MAX_LINE_ID_GROUPS) {
      throw new Error(`Too many transcript line groups (max ${MAX_LINE_ID_GROUPS})`);
    }
  }
  for (const deck of selectedVocabDecks) {
    requireValidOrderIndex(deck.orderIndex);
    if (deck.words.length > MAX_WORDS_PER_DECK) {
      throw new Error(`Too many words in a deck (max ${MAX_WORDS_PER_DECK})`);
    }
    if (deck.transcriptLineIds.length > MAX_LINE_ID_GROUPS) {
      throw new Error(`Too many transcript line groups (max ${MAX_LINE_ID_GROUPS})`);
    }
  }
}

export async function createCustomLearningPath(
  ctx: MutationCtx,
  args: CreateCustomLearningPathArgs,
): Promise<{ pathId: string; firstChapterSlug: string }> {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) throw new Error("Unauthenticated");

  validateCreateCustomLearningPathArgs(args);

  // Create root folder first (needed for path record)
  const rootFolderId = await ctx.db.insert("userDeckFolders", {
    userId: identity.subject,
    folderName: args.transcript.name,
    parentFolderId: undefined,
  });

  // Create path record (needed for learningPathId on folders)
  const pathId = await ctx.db.insert("learningPathTranscripts", {
    userId: identity.subject,
    name: args.transcript.name,
    rootFolderId,
    showName: args.transcript.showName,
    episodeName: args.transcript.episodeName,
    transcriptData: args.transcript.transcriptData,
  });

  // Patch root folder with learningPathId
  await ctx.db.patch(rootFolderId, { learningPathId: pathId });

  const sortedVocabDecks = [...args.selectedVocabDecks].sort((a, b) => a.orderIndex - b.orderIndex);

  const chapterFolderIdBySlug = new Map<string, Id<"userDeckFolders">>();
  for (const deck of sortedVocabDecks) {
    const chapterNum = Math.floor(deck.orderIndex / MODULES_PER_CHAPTER) + 1;
    const chapterSlug = `chapter-${chapterNum}`;
    if (chapterFolderIdBySlug.has(chapterSlug)) continue;

    const chapterFolderId = await ctx.db.insert("userDeckFolders", {
      userId: identity.subject,
      folderName: `Chapter ${chapterNum}`,
      parentFolderId: rootFolderId,
      learningPathId: pathId,
    });
    chapterFolderIdBySlug.set(chapterSlug, chapterFolderId);
  }

  for (const module of args.selectedGrammarModules) {
    await ctx.db.insert("learningPathModuleSources", {
      pathId,
      moduleId: module.moduleId,
      sourceType: "grammar",
      transcriptLineIds: module.transcriptLineIds,
      orderIndex: module.orderIndex,
    });
  }

  // Part numbers restart per chapter and per deck kind.
  const partCounters = new Map<string, number>();
  for (const deck of sortedVocabDecks) {
    const chapterNum = Math.floor(deck.orderIndex / MODULES_PER_CHAPTER) + 1;
    const chapterSlug = `chapter-${chapterNum}`;
    const chapterFolderId = chapterFolderIdBySlug.get(chapterSlug);
    const kind = deck.isVerbDeck ? "Verbs" : "Non-Verbs";
    const counterKey = `${chapterSlug}:${kind}`;
    const part = (partCounters.get(counterKey) ?? 0) + 1;
    partCounters.set(counterKey, part);
    const deckName = `${kind} - Part ${part}`;
    const deckId = await ctx.db.insert("userDecks", {
      userId: identity.subject,
      deckName,
      deckDescription: `Vocabulary from ${args.transcript.name}`,
      folderId: chapterFolderId,
      source: "learning_path",
      allowedPracticeModes: ["meanings", "spellings"],
    });

    await createDeckVocabItems(
      ctx,
      deckId,
      deck.words.map((word) => ({
        word: word.word,
        furigana: word.furigana,
        english: word.english ? [word.english] : [],
        isVerb: deck.isVerbDeck,
      })),
    );

    await ctx.db.insert("learningPathModuleSources", {
      pathId,
      moduleId: String(deckId),
      sourceType: "vocabulary",
      transcriptLineIds: deck.transcriptLineIds,
      orderIndex: deck.orderIndex,
    });
  }

  return { pathId: String(pathId), firstChapterSlug: "chapter-1" };
}

export async function deleteCustomLearningPath(ctx: MutationCtx, pathId: string) {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) throw new Error("Unauthenticated");
  if (isBuiltInTextbook(pathId)) {
    throw new Error("Built-in learning paths cannot be deleted");
  }

  const userPathId = await resolveUserPathId(ctx, pathId);
  if (!userPathId) throw new Error("Learning path not found");
  const path = await ctx.db.get(userPathId);
  if (!path) throw new Error("Learning path not found");

  const moduleSources = await ctx.db
    .query("learningPathModuleSources")
    .withIndex("by_path", (q) => q.eq("pathId", userPathId))
    .collect();

  const vocabDeckIds = moduleSources
    .filter((source) => source.sourceType === "vocabulary")
    .map((source) => source.moduleId);

  for (const deckIdString of vocabDeckIds) {
    const deckId = deckIdString as Id<"userDecks">;
    const deck = await ctx.db.get(deckId);
    if (!deck || deck.userId !== identity.subject) {
      console.warn(
        `[LearningPath] Skipping missing or unauthorized deck '${deckIdString}' for path '${pathId}'`,
      );
      continue;
    }

    await deleteDeck(ctx, deckId);
  }

  for (const source of moduleSources) {
    await ctx.db.delete(source._id);
  }

  // Detach any decks the user moved into the path's folders (only decks the
  // path created were deleted above), then delete the folder tree.
  const treeFolderIds = await getDescendantFolderIds(ctx, path.rootFolderId);
  treeFolderIds.add(path.rootFolderId);

  const ownedDecks = await ctx.db
    .query("userDecks")
    .withIndex("by_user", (q) => q.eq("userId", identity.subject))
    .collect();
  for (const deck of ownedDecks) {
    if (deck.folderId && treeFolderIds.has(deck.folderId)) {
      await ctx.db.patch(deck._id, { folderId: undefined });
    }
  }

  for (const folderId of treeFolderIds) {
    await ctx.db.delete(folderId);
  }

  await ctx.db.delete(userPathId);

  const profile = await ctx.db
    .query("profiles")
    .withIndex("by_user", (q) => q.eq("userId", identity.subject))
    .first();

  if (!profile) return;

  const wasActive = profile.userPreferences.activeLearningPath === pathId;
  const fallback = buildPathSelectionPreferences("genki_1");

  await ctx.db.patch(profile._id, {
    userPreferences: {
      ...profile.userPreferences,
      backgroundOverrides: removeBackgroundPreferencesForPath(
        profile.userPreferences.backgroundOverrides,
        pathId,
      ),
      ...(wasActive && fallback),
      timestamp: Date.now(),
    },
  });
}

function buildCustomPathChapters(modules: LearningPathModule[]): LearningPathChapter[] {
  const chapters: LearningPathChapter[] = [];
  for (let i = 0; i < modules.length; i += MODULES_PER_CHAPTER) {
    const chapterNum = Math.floor(i / MODULES_PER_CHAPTER) + 1;
    chapters.push({
      slug: `chapter-${chapterNum}`,
      title: `Chapter ${chapterNum}`,
      externalResourceIds: [],
      modules: modules.slice(i, i + MODULES_PER_CHAPTER),
    });
  }
  return chapters;
}

function resolveLearningPathModuleIds(
  moduleIds: string[],
  disabledSet: Set<string>,
  chapterSlug: string,
): LearningPathModule[] {
  const resolvedModules: LearningPathModule[] = [
    {
      moduleId: `${chapterSlug}-vocab`,
      module: {
        title: `Ch. ${chapterSlug.replace("chapter-", "")} Vocabulary`,
        module_type: "vocab-list",
      },
      linkTo: { to: "/vocab", search: { chapter: chapterSlug } },
      disabled: false,
    },
  ];

  for (const moduleId of moduleIds) {
    const module = moduleCatalog[moduleId];
    if (!module) {
      console.warn(
        `[LearningPath] Missing built-in module '${moduleId}' in chapter '${chapterSlug}'`,
      );
      continue;
    }

    resolvedModules.push({
      moduleId,
      module: {
        title: module.title,
        module_type: module.module_type,
        description: module.description,
      },
      linkTo: getModuleLink(module, moduleId),
      disabled: disabledSet.has(moduleId),
    });
  }

  return resolvedModules;
}

async function resolveUserPathId(
  ctx: QueryCtx | MutationCtx,
  pathId: string,
): Promise<Id<"learningPathTranscripts"> | null> {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) return null;

  const maybePath = await ctx.db.get(pathId as Id<"learningPathTranscripts">);
  if (!maybePath) return null;
  if (maybePath.userId !== identity.subject) return null;
  return maybePath._id;
}

async function buildFolderPath(ctx: QueryCtx, folderId: Id<"userDeckFolders">): Promise<string> {
  const segments: string[] = [];
  const visited = new Set<Id<"userDeckFolders">>();
  let currentId: Id<"userDeckFolders"> | undefined = folderId;

  while (currentId !== undefined && !visited.has(currentId)) {
    visited.add(currentId);
    const folder: Doc<"userDeckFolders"> | null = await ctx.db.get(currentId);
    if (!folder) break;
    segments.unshift(String(folder._id));
    currentId = folder.parentFolderId;
  }

  return segments.join("/");
}
