import { DeckCard } from "../../components/deck-card";
import { FolderCard } from "../../components/folder-card";
import { useVocab, type Deck, type Folder } from "../../context";
import { getFolderLevelItems } from "../../utils/hierarchy";

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
  const items = matchingDeckIds
    ? all.filter((node) => node.type === "folder" || matchingDeckIds.has(node.data.id))
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
