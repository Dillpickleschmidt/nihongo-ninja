import { convexQuery } from "@convex-dev/react-query";
import { api } from "@nn/convex/_generated/api";
import type { Id } from "@nn/convex/_generated/dataModel";
import { useQuery } from "@tanstack/react-query";
import { useConvexAuth } from "convex/react";

import { useVocab } from "../../context";
import { DeckCreationContainer } from "../../create/deck-creation-container";
import { DeckCreationStoreProvider, type DeckEditData } from "../../create/store";

export default function DeckEditPage({ deckId }: { deckId: string }) {
  const { isLoading: authPending, isAuthenticated: authed } = useConvexAuth();
  const { folders } = useVocab();

  const { data, isError } = useQuery({
    ...convexQuery(api.api.decks.getDeckWithVocab, { deckId: deckId as Id<"userDecks"> }),
    enabled: authed,
  });

  if (!authPending && !authed) {
    return (
      <div className="flex flex-col items-center justify-center py-24">
        <p className="text-muted-foreground">Sign in to edit your decks.</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center py-24">
        <p className="text-muted-foreground">Could not load this deck.</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center py-24 text-sm text-muted-foreground">
        Loading...
      </div>
    );
  }

  const editData: DeckEditData = {
    deck: data.deck,
    vocabItems: data.vocabItems,
    folderName: data.deck.folderId
      ? folders.find((f) => f.id === data.deck.folderId)?.folderName
      : undefined,
  };

  return (
    <DeckCreationStoreProvider key={deckId} initialData={editData}>
      <DeckCreationContainer />
    </DeckCreationStoreProvider>
  );
}
