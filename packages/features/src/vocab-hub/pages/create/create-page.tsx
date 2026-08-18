import { Link } from "@nn/router";
import { useConvexAuth } from "convex/react";

import { DeckCreationContainer } from "../../create/deck-creation-container";
import { DeckCreationStoreProvider } from "../../create/store";

export default function DeckCreatePage() {
  const { isLoading, isAuthenticated } = useConvexAuth();

  if (isLoading) {
    return <div className="py-24" aria-busy="true" />;
  }

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-24">
        <p className="text-muted-foreground">Sign in to create your own decks.</p>
        <Link
          href="/auth"
          className="rounded-md bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent dark:bg-white/5 dark:hover:bg-white/10"
        >
          Go to sign in
        </Link>
      </div>
    );
  }

  return (
    <DeckCreationStoreProvider>
      <DeckCreationContainer />
    </DeckCreationStoreProvider>
  );
}
