import { useVocab, type Deck } from "../context";
import { buildDeckUrlPath } from "../utils/navigation";

function formatRelativeTime(ts: number) {
  const diff = Date.now() - ts;
  const minutes = Math.floor(diff / 60000);
  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

export function RecentlyStudiedSection({
  recentCompletions,
  decks,
}: {
  recentCompletions: { moduleId: string; completedAt: number }[];
  decks: Deck[];
}) {
  const { folders } = useVocab();

  const recentDecks = recentCompletions
    .slice(0, 3)
    .map((c) => {
      const deck = decks.find((d) => d.id === c.moduleId);
      return deck ? { deck, completedAt: c.completedAt } : null;
    })
    .filter((d): d is { deck: Deck; completedAt: number } => d != null);

  if (recentDecks.length === 0) return null;

  return (
    <div>
      <h2 className="mb-3 text-sm font-semibold text-foreground">Recently Studied</h2>
      <div>
        {recentDecks.map((item) => (
          <a
            key={item.deck.id}
            href={`/vocab/${buildDeckUrlPath(item.deck, folders)}`}
            className="flex h-auto w-full items-center justify-start gap-3 rounded-md px-2 py-2 transition-colors hover:bg-accent dark:hover:bg-white/[0.03]"
          >
            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/30 dark:bg-white/20" />
            <span className="flex-1 truncate text-left text-sm text-muted-foreground dark:text-white/50">
              {item.deck.deckName}
            </span>
            <span className="shrink-0 text-xs text-muted-foreground/70 tabular-nums dark:text-white/25">
              {formatRelativeTime(item.completedAt)}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
