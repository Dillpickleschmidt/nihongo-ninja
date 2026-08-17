import { Link } from "@nn/router";
import { ChevronRight, Play } from "lucide-react";

import { buildPracticePath } from "../../utils/navigation";

export function PracticeButton({ deckId }: { deckId: string }) {
  return (
    <Link
      href={buildPracticePath(deckId)}
      className="group flex items-center gap-2 rounded-xl bg-dynamic-accent/80 px-4 py-2.5 text-sm font-medium text-white transition-all hover:scale-[1.02] hover:bg-dynamic-accent"
    >
      <span
        className="flex items-center gap-2"
        style={{
          textShadow: "0 8px 15px -4px color-mix(in srgb, var(--dynamic-accent) 30%, transparent)",
        }}
      >
        <Play className="size-4" />
        <span className="font-excalifont">Start practicing</span>
        <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}

export function DeckHeader({
  deckId,
  deckName,
  deckDescription,
}: {
  deckId: string;
  deckName: string;
  deckDescription?: string;
}) {
  return (
    <div className="relative p-4 text-center">
      <div>
        <div className="mb-2">
          <span className="inline-flex items-center rounded-full bg-orange-500/20 px-2.5 py-1 text-xs font-medium tracking-wide text-orange-400 uppercase">
            Deck
          </span>
        </div>
        <h1 className="text-2xl font-bold lg:text-3xl">{deckName}</h1>
        {deckDescription && <p className="mt-2 text-sm text-muted-foreground">{deckDescription}</p>}
      </div>
      <div className="absolute right-0 bottom-4 hidden md:block">
        <PracticeButton deckId={deckId} />
      </div>
    </div>
  );
}
