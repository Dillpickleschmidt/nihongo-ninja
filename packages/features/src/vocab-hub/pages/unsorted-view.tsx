import { FolderBreadcrumbs } from "../components/breadcrumbs";
import { DeckCard } from "../components/deck-card";
import { useVocab } from "../context";
import { getRootOrphanDecks } from "../utils/hierarchy";
import { EmptyState } from "./folder-view";

export function UnsortedView() {
  const { decks } = useVocab();
  const orphanDecks = getRootOrphanDecks(decks);

  return (
    <div className="space-y-6">
      <FolderBreadcrumbs
        items={[
          { label: "Root", href: "/vocab" },
          { label: "Unsorted", href: "/vocab/unsorted", current: true },
        ]}
      />

      <div className="mb-4">
        <h2 className="mb-2 text-2xl font-bold text-foreground">Unsorted</h2>
      </div>

      {orphanDecks.length > 0 ? (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {orphanDecks.map((deck) => (
            <DeckCard key={deck.id} deck={deck} />
          ))}
        </div>
      ) : (
        <EmptyState message="No unsorted decks" />
      )}
    </div>
  );
}
