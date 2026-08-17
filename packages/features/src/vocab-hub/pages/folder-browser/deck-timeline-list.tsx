import { Collapsible } from "@base-ui/react/collapsible";
import { convexQuery } from "@convex-dev/react-query";
import { api } from "@nn/convex/_generated/api";
import { useQuery } from "@tanstack/react-query";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

import { useVocab, type Deck } from "../../context";
import { buildDeckUrlPath } from "../../utils/navigation";
import { DeckVocabTable } from "./deck-vocab-table";

export function DeckTimelineList({
  decks,
  defaultExpanded,
}: {
  decks: Deck[];
  defaultExpanded: boolean;
}) {
  const { folders } = useVocab();

  return (
    <ul className="relative ml-[7px] border-l-2 border-card-foreground/10">
      {decks.map((deck) => (
        <li key={deck.id}>
          <DeckTimelineEntry
            deck={deck}
            linkTo={`/vocab/${buildDeckUrlPath(deck, folders)}`}
            defaultExpanded={defaultExpanded}
          />
        </li>
      ))}
    </ul>
  );
}

function DeckTimelineEntry({
  deck,
  linkTo,
  defaultExpanded,
}: {
  deck: Deck;
  linkTo: string;
  defaultExpanded: boolean;
}) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <Collapsible.Root open={expanded} onOpenChange={setExpanded}>
      <Collapsible.Trigger className="group relative flex w-full cursor-pointer items-center gap-3 rounded-lg py-2.5 pr-3 pl-6 text-left text-foreground/75 transition-all duration-150 hover:bg-accent hover:text-foreground focus-visible:bg-accent focus-visible:outline-none dark:text-white/70 dark:hover:bg-white/5 dark:hover:text-white dark:focus-visible:bg-white/10">
        <div className="absolute top-1/2 left-[-7px] size-3 -translate-y-1/2 rounded-full border-2 border-card-foreground/20 bg-background transition-colors group-hover:border-dynamic-accent/50 group-hover:bg-dynamic-accent/50 dark:group-hover:border-white/50 dark:group-hover:bg-white/50" />

        <div className="min-w-0 flex-1">
          <h3 className="flex items-center gap-1.5 text-sm leading-tight font-medium">
            {deck.deckName}
          </h3>
        </div>

        <a
          href={linkTo}
          className="absolute right-9 rounded-md bg-orange-500/80 px-3 py-1.5 font-excalifont text-xs font-medium text-white transition-colors duration-150 hover:bg-orange-500"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          Start
        </a>

        <ChevronRight className="size-4 shrink-0 opacity-40 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-70 [[aria-expanded=true]_&]:rotate-90" />
      </Collapsible.Trigger>

      <Collapsible.Panel>
        <div className="pr-3 pb-2 pl-6">
          {/* Mounts only while expanded, so the vocab query runs on demand. */}
          <DeckVocabPanel deckId={deck.id} />
        </div>
      </Collapsible.Panel>
    </Collapsible.Root>
  );
}

function DeckVocabPanel({ deckId }: { deckId: string }) {
  const { data: vocab } = useQuery(convexQuery(api.api.vocabulary.getDeckVocab, { deckId }));

  if (!vocab) {
    return <div className="animate-pulse py-2 text-xs text-muted-foreground">Loading...</div>;
  }
  return <DeckVocabTable vocab={vocab} />;
}
