import { cn } from "@nn/ui";

import { useVocab, type Deck } from "../context";
import { buildDeckUrlPath } from "../utils/navigation";

// Read-only card; the edit/rename/move/share context menu arrives with the
// deck CRUD PR.
export function DeckCard({
  deck,
  isSelected,
  className,
}: {
  deck: Deck;
  isSelected?: boolean;
  className?: string;
}) {
  const { folders } = useVocab();
  const deckPath = `/vocab/${buildDeckUrlPath(deck, folders)}`;

  return (
    <a
      href={deckPath}
      className={cn(
        "relative block cursor-pointer space-y-3 rounded-lg border border-border/60 bg-card/70 p-4 shadow-sm backdrop-blur-sm hover:bg-card/90 hover:shadow-md dark:border-card-foreground/70 dark:bg-card/60 dark:hover:bg-card/70",
        isSelected && "outline-2 outline-border dark:outline-card-foreground",
        className,
      )}
    >
      <div className="space-y-1">
        <h4
          className={cn(
            "pr-8 text-sm leading-tight font-medium",
            deck.source === "built-in" &&
              "underline decoration-muted-foreground/70 underline-offset-4",
          )}
          title={deck.source === "built-in" ? "Built-in deck" : undefined}
        >
          {deck.deckName}
        </h4>
        {deck.source === "built-in" && <p className="text-xs text-muted-foreground">Built-in</p>}
      </div>
    </a>
  );
}
