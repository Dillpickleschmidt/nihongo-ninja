import { DeckCard } from "../../components/deck-card";
import { FolderCard } from "../../components/folder-card";
import { useVocab, type Deck, type Folder } from "../../context";
import { getDecksInFolder, getFolderChildren, getFolderLevelItems } from "../../utils/hierarchy";

function hasMatchingDescendant(
  folderId: string,
  folders: Folder[],
  decks: Deck[],
  matchingDeckIds: Set<string>,
  visited = new Set<string>(),
): boolean {
  if (visited.has(folderId)) return false;
  visited.add(folderId);
  if (getDecksInFolder(decks, folderId).some((d) => matchingDeckIds.has(d.id))) return true;
  return getFolderChildren(folders, folderId).some((f) =>
    hasMatchingDescendant(f.id, folders, decks, matchingDeckIds, visited),
  );
}

export function UserFolderContent({
  folderId,
  folders,
  decks,
  matchingDeckIds,
}: {
  folderId: string;
  folders: Folder[];
  decks: Deck[];
  matchingDeckIds: Set<string> | null;
}) {
  useVocab();
  const all = getFolderLevelItems(folders, decks, folderId);
  // A child folder stays visible only when a deck somewhere under it
  // matches, so a nested match is reachable through it.
  const items = matchingDeckIds
    ? all.filter((node) =>
        node.type === "folder"
          ? hasMatchingDescendant(node.id, folders, decks, matchingDeckIds)
          : matchingDeckIds.has(node.data.id),
      )
    : all;

  if (items.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-border/50 p-8 text-center">
        <p className="text-sm text-muted-foreground">This folder is empty</p>
      </div>
    );
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((node) =>
        node.type === "folder" ? (
          <FolderCard key={node.id} folder={node.data} />
        ) : (
          <DeckCard key={node.id} deck={node.data} />
        ),
      )}
    </div>
  );
}
