import { useVocab } from "../../context";
import { resolveDeckFromPath, resolveFolderFromPath } from "../../utils/navigation";
import { DeckView } from "../deck-view/deck-view";
import { EmptyState, FolderView } from "../folder-view";
import { UnsortedView } from "../unsorted-view";

export default function PathViewPage({ splat }: { splat: string }) {
  const { folders, decks, isLoading } = useVocab();

  const pathSegments = splat.split("/").filter(Boolean);

  if (pathSegments.length === 1 && pathSegments[0] === "unsorted") {
    return <UnsortedView />;
  }

  const deck = resolveDeckFromPath(pathSegments, decks, folders);
  if (deck) return <DeckView deck={deck} />;

  const folder = resolveFolderFromPath(pathSegments, folders);
  if (folder) return <FolderView folderId={folder.id} />;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-sm text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return <EmptyState message="Not found" />;
}
