import { chapters } from "@nn/data/chapters";
import { textbooks, type TextbookIDEnum } from "@nn/data/textbooks";

import { Id } from "../_generated/dataModel";
import { MutationCtx, QueryCtx } from "../_generated/server";
import { deleteDeck } from "./decks";

// ===== Unified Folder Type =====

export interface UnifiedFolder {
  id: string;
  folderName: string;
  parentFolderId?: string;
  source: "user" | "built-in";
  learningPathId?: string;
}

// ===== Built-in Folder Generation =====

export function getBuiltInFolders(): UnifiedFolder[] {
  const folders: UnifiedFolder[] = [];

  for (const [textbookId, textbook] of Object.entries(textbooks)) {
    // Add textbook as root folder
    folders.push({
      id: textbookId,
      folderName: textbook.short_name,
      parentFolderId: undefined,
      source: "built-in",
    });

    // Add chapters as child folders
    const textbookChapters = chapters[textbookId as TextbookIDEnum];
    if (!textbookChapters) continue;
    for (const [chapterSlug, chapter] of Object.entries(textbookChapters)) {
      folders.push({
        id: `${textbookId}/${chapterSlug}`,
        folderName: chapter.title,
        parentFolderId: textbookId,
        source: "built-in",
      });
    }
  }

  return folders;
}

// ===== Unified Query (built-in + user) =====

export async function getAllFolders(ctx: QueryCtx): Promise<UnifiedFolder[]> {
  const builtIn = getBuiltInFolders();

  const identity = await ctx.auth.getUserIdentity();
  if (!identity) return builtIn;

  const userFolders = await getUserFolders(ctx);
  const normalized: UnifiedFolder[] = userFolders.map((f) => ({
    id: f._id,
    folderName: f.folderName,
    parentFolderId: f.parentFolderId,
    source: "user" as const,
    learningPathId: f.learningPathId,
  }));

  return [...builtIn, ...normalized];
}

// ===== Query Helpers =====

export async function getUserFolders(ctx: QueryCtx) {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) throw new Error("Unauthenticated");

  return ctx.db
    .query("userDeckFolders")
    .withIndex("by_user", (q) => q.eq("userId", identity.subject))
    .collect();
}

// ===== Validation Helpers =====

export async function checkFolderNameUnique(
  ctx: QueryCtx,
  name: string,
  parentFolderId?: Id<"userDeckFolders">,
  excludeFolderId?: Id<"userDeckFolders">,
) {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) throw new Error("Unauthenticated");

  const existingFolders = await ctx.db
    .query("userDeckFolders")
    .withIndex("by_user", (q) => q.eq("userId", identity.subject))
    .collect();
  const duplicate = existingFolders.find(
    (f) =>
      f.folderName.toLowerCase() === name.toLowerCase() &&
      f.parentFolderId === parentFolderId &&
      f._id !== excludeFolderId,
  );
  if (duplicate) {
    throw new Error("A folder with this name already exists here");
  }
}

export async function verifyFolderOwnership(ctx: QueryCtx, folderId: Id<"userDeckFolders">) {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) throw new Error("Unauthenticated");

  const folder = await ctx.db.get(folderId);
  if (!folder) throw new Error("Folder not found");
  if (folder.userId !== identity.subject) throw new Error("Unauthorized");
  return folder;
}

// ===== Mutation Helpers =====

export async function createFolder(
  ctx: MutationCtx,
  folderName: string,
  parentFolderId?: Id<"userDeckFolders">,
  learningPathId?: Id<"learningPathTranscripts">,
) {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) throw new Error("Unauthenticated");

  if (parentFolderId) await verifyFolderOwnership(ctx, parentFolderId);

  return ctx.db.insert("userDeckFolders", {
    userId: identity.subject,
    folderName,
    parentFolderId,
    learningPathId,
  });
}

export async function updateFolder(
  ctx: MutationCtx,
  folderId: Id<"userDeckFolders">,
  updates: {
    folderName?: string;
    parentFolderId?: Id<"userDeckFolders"> | null;
  },
) {
  const folder = await verifyFolderOwnership(ctx, folderId);

  // Reject a parent assignment that would create a cycle: walk the proposed
  // parent's ancestor chain and fail if it reaches this folder.
  if (updates.parentFolderId) {
    const visited = new Set<Id<"userDeckFolders">>();
    let ancestorId: Id<"userDeckFolders"> | undefined = updates.parentFolderId;
    while (ancestorId) {
      if (ancestorId === folderId || visited.has(ancestorId)) {
        throw new Error("Cannot move a folder into itself or its descendants");
      }
      visited.add(ancestorId);
      const ancestor = await verifyFolderOwnership(ctx, ancestorId);
      ancestorId = ancestor.parentFolderId;
    }
  }

  // A rename or move must obey the same sibling-name rule as creation.
  if (updates.folderName !== undefined || updates.parentFolderId !== undefined) {
    const targetName = updates.folderName ?? folder.folderName;
    const targetParent =
      updates.parentFolderId === undefined
        ? folder.parentFolderId
        : (updates.parentFolderId ?? undefined);
    await checkFolderNameUnique(ctx, targetName, targetParent, folderId);
  }

  const patch: { folderName?: string; parentFolderId?: Id<"userDeckFolders"> } = {};
  if (updates.folderName !== undefined) {
    patch.folderName = updates.folderName;
  }
  if (updates.parentFolderId !== undefined) {
    patch.parentFolderId = updates.parentFolderId ?? undefined;
  }
  await ctx.db.patch(folderId, patch);
}

export async function deleteFolderWithStrategy(
  ctx: MutationCtx,
  folderId: Id<"userDeckFolders">,
  strategy: "move-up" | "delete-all",
) {
  const folder = await verifyFolderOwnership(ctx, folderId);

  const allFolderIds = await getDescendantFolderIds(ctx, folderId);
  allFolderIds.add(folderId);

  const allDecks = await ctx.db
    .query("userDecks")
    .withIndex("by_user", (q) => q.eq("userId", folder.userId))
    .collect();

  const decksInFolders = allDecks.filter((d) => d.folderId && allFolderIds.has(d.folderId));

  if (strategy === "move-up") {
    for (const deck of decksInFolders) {
      await ctx.db.patch(deck._id, { folderId: folder.parentFolderId });
    }
  } else {
    // deleteDeck also removes the deck's vocabulary items and share records.
    for (const deck of decksInFolders) {
      await deleteDeck(ctx, deck._id);
    }
  }

  for (const id of allFolderIds) {
    await ctx.db.delete(id);
  }
}

export async function getDescendantFolderIds(
  ctx: QueryCtx | MutationCtx,
  folderId: Id<"userDeckFolders">,
): Promise<Set<Id<"userDeckFolders">>> {
  const result = new Set<Id<"userDeckFolders">>();
  const children = await ctx.db
    .query("userDeckFolders")
    .withIndex("by_parent", (q) => q.eq("parentFolderId", folderId))
    .collect();

  for (const child of children) {
    result.add(child._id);
    const descendants = await getDescendantFolderIds(ctx, child._id);
    for (const id of descendants) {
      result.add(id);
    }
  }
  return result;
}
