import { LoaderCircle } from "lucide-react";

export function DueCountBadge({ count }: { count: number | undefined }) {
  return (
    <div className="flex items-center gap-2 font-excalifont">
      {count === undefined ? (
        <LoaderCircle
          aria-label="Loading due cards"
          className="h-4 w-4 animate-spin text-muted-foreground"
        />
      ) : (
        <span className="text-2xl font-bold text-dynamic-accent brightness-150">{count}</span>
      )}
      <span className="text-sm text-muted-foreground">
        {count === 1 ? "due card" : "due cards"}
      </span>
    </div>
  );
}
