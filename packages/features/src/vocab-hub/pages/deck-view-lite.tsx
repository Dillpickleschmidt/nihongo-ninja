import { convexQuery } from "@convex-dev/react-query";
import { api } from "@nn/convex/_generated/api";
import { Link } from "@nn/router";
import { useQuery } from "@tanstack/react-query";

import { FolderBreadcrumbs } from "../components/breadcrumbs";
import { useVocab, type Deck } from "../context";
import { buildFolderBreadcrumbs, buildPracticePath } from "../utils/navigation";
import { DeckVocabTable } from "./folder-browser/deck-vocab-table";

// Minimal deck page: name, practice launch, and contents. The full DeckView
// (kanji/radical tabs, FSRS due counts, VocabularyCard) ports next.
export function DeckViewLite({ deck }: { deck: Deck }) {
  const { folders } = useVocab();
  const { data: vocab } = useQuery(
    convexQuery(api.api.vocabulary.getDeckVocab, { deckId: deck.id }),
  );

  const breadcrumbs = buildFolderBreadcrumbs(folders, deck.folderId ?? null);

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <FolderBreadcrumbs items={breadcrumbs.map((c) => ({ ...c, current: false }))} />

      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="space-y-1">
          <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">Deck</p>
          <h2 className="text-2xl font-bold text-foreground">{deck.deckName}</h2>
          {deck.deckDescription && (
            <p className="text-sm text-muted-foreground">{deck.deckDescription}</p>
          )}
        </div>

        <Link
          href={buildPracticePath(deck.id)}
          className="rounded-md bg-orange-500/80 px-4 py-2 font-excalifont text-sm font-medium text-white transition-colors hover:bg-orange-500"
        >
          Start practicing
        </Link>
      </div>

      {vocab ? (
        <DeckVocabTable vocab={vocab} />
      ) : (
        <div className="animate-pulse py-4 text-sm text-muted-foreground">Loading...</div>
      )}
    </div>
  );
}
