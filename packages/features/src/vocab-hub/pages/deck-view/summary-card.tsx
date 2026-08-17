import { LoaderCircle } from "lucide-react";

type DueRow = { label: "Meanings" | "Spellings"; hasHistory: boolean; dueCount: number };

export function SummaryCard({
  label,
  count,
  dueRows,
  dueLoading,
  onClick,
}: {
  label: string;
  count?: number;
  dueRows?: DueRow[];
  dueLoading?: boolean;
  onClick?: () => void;
}) {
  const visibleDueRows = (dueRows || []).filter((row) => row.hasHistory);

  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-full cursor-pointer flex-col items-start justify-start rounded-xl border border-border/60 bg-card/60 p-3 text-left backdrop-blur-sm transition hover:bg-accent/40 dark:border-card-foreground/70 dark:bg-card/40"
      title={`View ${label}`}
    >
      <span className="text-xs text-muted-foreground">{label}</span>
      <span className="mt-1 flex w-full flex-col items-start gap-1.5 sm:flex-row sm:items-end sm:justify-between">
        {count !== undefined ? (
          <span className="text-2xl leading-none font-bold text-primary">{count}</span>
        ) : (
          <LoaderCircle className="mt-1 h-8 w-8 animate-spin text-muted-foreground/50" />
        )}

        {dueLoading && (
          <span className="text-xs text-muted-foreground/70">Loading due counts...</span>
        )}

        {!dueLoading && visibleDueRows.length > 0 && (
          <span className="space-y-0.5 text-xs sm:text-right">
            {visibleDueRows.map((row) => (
              <span key={row.label} className="block text-muted-foreground">
                {row.label}: {row.dueCount} due
              </span>
            ))}
          </span>
        )}
      </span>
    </button>
  );
}
