import { FolderBreadcrumbs } from "../components/breadcrumbs";
import { DeckCard } from "../components/deck-card";
import { FolderCard } from "../components/folder-card";
import { useVocab } from "../context";
import { getFolderLevelItems } from "../utils/hierarchy";
import { buildFolderBreadcrumbs } from "../utils/navigation";

export function FolderView({ folderId }: { folderId: string }) {
  const { folders, decks } = useVocab();

  const folder = folders.find((f) => f.id === folderId);
  const breadcrumbs = buildFolderBreadcrumbs(folders, folderId);
  const items = getFolderLevelItems(folders, decks, folderId);

  return (
    <div className="space-y-6">
      <FolderBreadcrumbs items={breadcrumbs} />

      <div className="mb-4">
        <h2 className="mb-2 text-2xl font-bold text-foreground">
          {folder?.folderName || "Folder"}
        </h2>
      </div>

      {items.length > 0 ? (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((node) =>
            node.type === "folder" ? (
              <FolderCard key={node.id} folder={node.data} />
            ) : (
              <DeckCard key={node.id} deck={node.data} />
            ),
          )}
        </div>
      ) : (
        <EmptyState message="No folders or decks yet" />
      )}
    </div>
  );
}

export function EmptyState({ message }: { message: string }) {
  return (
    <div className="rounded-lg border border-dashed border-border/50 p-8 text-center">
      <p className="text-sm text-muted-foreground">{message}</p>
    </div>
  );
}
