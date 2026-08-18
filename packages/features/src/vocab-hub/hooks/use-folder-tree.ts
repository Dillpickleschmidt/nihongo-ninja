import { useMemo } from "react";

import type { TreeNode } from "../components/tree-view";
import type { Deck, Folder } from "../context";

export function useFolderTree({
  folders,
  decks,
  item,
}: {
  folders: Folder[];
  decks: Deck[];
  item: Deck | Folder | null;
}) {
  const folderTreeNodes = useMemo((): TreeNode[] => {
    if (folders.length === 0) return [];

    // Built-in folders can't be used as destinations.
    let availableFolders = folders.filter((f) => f.source === "user");

    if (item && !("deckName" in item)) {
      const excludeIds = new Set([item.id]);
      const addDescendants = (id: string) => {
        availableFolders.forEach((f) => {
          if (f.parentFolderId === id && !excludeIds.has(f.id)) {
            excludeIds.add(f.id);
            addDescendants(f.id);
          }
        });
      };
      addDescendants(item.id);
      availableFolders = availableFolders.filter((f) => !excludeIds.has(f.id));
    }

    const buildTreeNodes = (parentId: string | undefined): TreeNode[] =>
      availableFolders
        .filter((f) => f.parentFolderId === parentId)
        .sort((a, b) => a.folderName.localeCompare(b.folderName))
        .map((folder) => ({
          id: folder.id,
          label: folder.folderName,
          data: folder,
          children: buildTreeNodes(folder.id),
        }));

    return buildTreeNodes(undefined);
  }, [folders, item]);

  const folderContents = useMemo(() => {
    if (!item || "deckName" in item) return { decks: 0, folders: 0 };

    const descendants = new Set([item.id]);
    const addDescendants = (id: string) => {
      folders.forEach((f) => {
        if (f.parentFolderId === id && !descendants.has(f.id)) {
          descendants.add(f.id);
          addDescendants(f.id);
        }
      });
    };
    addDescendants(item.id);

    return {
      decks: decks.filter((d) => d.folderId && descendants.has(d.folderId)).length,
      folders: descendants.size - 1,
    };
  }, [folders, decks, item]);

  return { folderTreeNodes, folderContents };
}
