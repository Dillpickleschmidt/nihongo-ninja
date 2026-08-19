import { Link } from "@nn/router";
import { Tabs, TabsList, TabsPanel, TabsTrigger } from "@nn/ui";
import { useConvexAuth } from "convex/react";

import { DeckCreationContainer } from "../../create/deck-creation-container";
import { MissedWordsDeckBuilder } from "../../create/missed-words-deck-builder";
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
    <Tabs defaultValue="manual" className="mx-auto max-w-5xl p-2 sm:px-4 lg:px-6">
      <TabsList className="mb-6 inline-flex rounded-md border border-border/60 bg-background/60 p-1 backdrop-blur-sm dark:border-card-foreground/70">
        <TabsTrigger
          value="manual"
          className="cursor-pointer rounded-sm px-3 py-1.5 text-sm font-medium text-muted-foreground"
          activeClassName="bg-card text-foreground shadow"
        >
          Manual
        </TabsTrigger>
        <TabsTrigger
          value="missed-words"
          className="cursor-pointer rounded-sm px-3 py-1.5 text-sm font-medium text-muted-foreground"
          activeClassName="bg-card text-foreground shadow"
        >
          From Missed Words
        </TabsTrigger>
      </TabsList>

      {/* keepMounted: unmounting would drop the in-progress deck draft when
          the user peeks at the missed-words tab. */}
      <TabsPanel value="manual" className="mt-0" keepMounted>
        <DeckCreationStoreProvider>
          <DeckCreationContainer />
        </DeckCreationStoreProvider>
      </TabsPanel>

      <TabsPanel value="missed-words" className="mt-0">
        <MissedWordsDeckBuilder />
      </TabsPanel>
    </Tabs>
  );
}
