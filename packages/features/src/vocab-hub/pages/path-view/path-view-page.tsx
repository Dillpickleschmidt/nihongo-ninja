import { useVocab } from "../../context";
import { resolveDeckFromPath, resolveFolderFromPath } from "../../utils/navigation";
import { DeckViewLite } from "../deck-view-lite";
import { EmptyState, FolderView } from "../folder-view";
import { UnsortedView } from "../unsorted-view";

export default function PathViewPage({ splat }: { splat: string }) {
  const { folders, decks, isLoading } = useVocab();

  const pathSegments = splat.split("/").filter(Boolean);

  if (pathSegments.length === 1 && pathSegments[0] === "unsorted") {
    return <UnsortedView />;
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-sm text-muted-foreground">Loading...</div>
      </div>
    );
  }

  const folder = resolveFolderFromPath(pathSegments, folders);
  if (folder) return <FolderView folderId={folder.id} />;

  const deck = resolveDeckFromPath(pathSegments, decks, folders);
  if (deck) return <DeckViewLite deck={deck} />;

  return <EmptyState message="Not found" />;
}
