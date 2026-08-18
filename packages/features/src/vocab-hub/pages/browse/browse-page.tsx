import { useConvexMutation } from "@convex-dev/react-query";
import { api } from "@nn/convex/_generated/api";
import type { Id } from "@nn/convex/_generated/dataModel";
import type { SharedDeckInfo } from "@nn/convex/model/sharing";
import { usePaginatedQuery } from "convex/react";
import { Clock, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { alertMutationError } from "../../components/mutation-error";
import { confirmAction } from "../../components/web-dialogs";
import { DeckPreviewModal } from "./deck-preview-modal";
import { SharedDeckCard } from "./shared-deck-card";

type SortBy = "recent" | "popular";

const PAGE_SIZE = 20;

export function BrowsePage() {
  const [sortBy, setSortBy] = useState<SortBy>("recent");
  const [previewDeckId, setPreviewDeckId] = useState<Id<"userDecks"> | null>(null);

  // Cursor pagination replaces the source's offset/merge bookkeeping; the
  // hook resets itself when sortBy changes.
  const { results, status, loadMore } = usePaginatedQuery(
    api.api.sharing.getSharedDecks,
    { sortBy },
    { initialNumItems: PAGE_SIZE },
  );

  const importDeck = useConvexMutation(api.api.sharing.importSharedDeck);
  const unshareDeck = useConvexMutation(api.api.sharing.unshareDeck);

  const [importingIds, setImportingIds] = useState<Set<string>>(new Set());
  const [unsharingIds, setUnsharingIds] = useState<Set<string>>(new Set());

  const sentinelRef = useRef<HTMLDivElement>(null);
  const loadMoreRef = useRef<() => void>(() => {});
  loadMoreRef.current = () => {
    if (status === "CanLoadMore") loadMore(PAGE_SIZE);
  };

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) loadMoreRef.current();
      },
      { threshold: 0.1 },
    );
    observer.observe(sentinel);
    return () => {
      observer.disconnect();
    };
  }, []);

  const withPending = async (
    setPending: React.Dispatch<React.SetStateAction<Set<string>>>,
    deckId: string,
    run: () => Promise<unknown>,
  ) => {
    setPending((prev) => new Set(prev).add(deckId));
    try {
      await run();
    } finally {
      setPending((prev) => {
        const next = new Set(prev);
        next.delete(deckId);
        return next;
      });
    }
  };

  const handleImport = (deckId: Id<"userDecks">) => {
    void withPending(setImportingIds, deckId, () =>
      importDeck({ deckId }).catch(alertMutationError("import the deck")),
    );
  };

  const handleUnshare = (deckId: Id<"userDecks">) => {
    if (!confirmAction("Are you sure you want to unshare this deck?")) return;
    void withPending(setUnsharingIds, deckId, () =>
      unshareDeck({ deckId }).catch(alertMutationError("unshare the deck")),
    );
  };

  const isInitialLoading = results.length === 0 && status === "LoadingFirstPage";
  const isEmpty = results.length === 0 && status === "Exhausted";

  return (
    <div className="h-full w-full overflow-y-auto p-6">
      <div className="mb-6 text-center">
        <h1 className="mb-2 text-3xl font-bold">Community Decks</h1>
        <p className="text-lg text-muted-foreground">
          Discover vocabulary decks created by other learners
        </p>
      </div>

      <div className="mb-6 flex justify-center">
        <div className="flex rounded-lg border border-border/60 bg-background/60 p-1 backdrop-blur-sm dark:border-card-foreground/70 dark:bg-background/40">
          <SortButton
            active={sortBy === "recent"}
            onClick={() => {
              setSortBy("recent");
            }}
          >
            <Clock className="h-3.5 w-3.5" />
            Recent
          </SortButton>
          <SortButton
            active={sortBy === "popular"}
            onClick={() => {
              setSortBy("popular");
            }}
          >
            <TrendingUp className="h-3.5 w-3.5" />
            Popular
          </SortButton>
        </div>
      </div>

      {isInitialLoading && (
        <div className="flex justify-center py-12">
          <div className="h-6 w-6 animate-spin rounded-full border border-current border-t-transparent" />
        </div>
      )}

      {isEmpty && (
        <div className="py-12 text-center">
          <p className="text-muted-foreground">
            No shared decks found. Be the first to share a deck!
          </p>
        </div>
      )}

      <div className="space-y-4">
        {results.map((deck: SharedDeckInfo, index: number) => (
          <SharedDeckCard
            key={deck.deckId}
            deck={deck}
            index={index}
            isImporting={importingIds.has(deck.deckId)}
            isUnsharing={unsharingIds.has(deck.deckId)}
            onPreview={() => {
              setPreviewDeckId(deck.deckId);
            }}
            onImport={() => {
              handleImport(deck.deckId);
            }}
            onUnshare={() => {
              handleUnshare(deck.deckId);
            }}
          />
        ))}
      </div>

      {results.length > 0 && status === "LoadingMore" && (
        <div className="flex justify-center py-8">
          <div className="h-6 w-6 animate-spin rounded-full border border-current border-t-transparent" />
        </div>
      )}

      <div ref={sentinelRef} className="h-4" />

      <DeckPreviewModal
        deckId={previewDeckId}
        onClose={() => {
          setPreviewDeckId(null);
        }}
        onImport={() => {
          if (previewDeckId) handleImport(previewDeckId);
        }}
        isImporting={previewDeckId ? importingIds.has(previewDeckId) : false}
      />
    </div>
  );
}

function SortButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-xs transition-all ${
        active
          ? "bg-card font-medium text-foreground shadow backdrop-blur-sm dark:bg-background/70"
          : "text-muted-foreground hover:bg-background/50 hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}
