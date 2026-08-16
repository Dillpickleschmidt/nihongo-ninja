import { LoaderCircle } from "lucide-react";

export function DueCountBadge({ count }: { count: number | undefined }) {
  return (
    <div className="flex items-center gap-2 font-excalifont">
      {count === undefined ? (
        <LoaderCircle className="h-4 w-4 animate-spin text-muted-foreground" />
      ) : (
        <span className="text-2xl font-bold text-dynamic-accent brightness-150">{count}</span>
      )}
      <span className="text-sm text-muted-foreground">due cards</span>
    </div>
  );
}
