import { SquareCheck, SquareX, X } from "lucide-react";

export function PracticeHeader({
  currentIndex,
  totalItems,
  correctCount,
  wrongCount,
  onQuit,
}: {
  currentIndex: number;
  totalItems: number;
  correctCount?: number;
  wrongCount?: number;
  onQuit?: () => void;
}) {
  const progress = totalItems > 0 ? ((currentIndex + 1) / totalItems) * 100 : 0;

  return (
    <div className="-mb-2 flex w-full flex-col md:w-2/3 lg:w-1/2">
      <div className="flex w-full items-center gap-3 md:gap-4">
        <button
          type="button"
          aria-label="Quit session"
          onClick={onQuit}
          className="text-muted-foreground/70 transition-transform duration-200 hover:scale-125 hover:text-muted-foreground dark:text-white/30 dark:hover:text-white/60"
        >
          <X size={24} />
        </button>
        <div
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={totalItems}
          aria-valuenow={Math.min(currentIndex + 1, totalItems)}
          className="relative h-3.5 w-full overflow-hidden rounded-full bg-muted dark:bg-white/10"
        >
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${progress}%`,
              background:
                "linear-gradient(to right, var(--dynamic-accent), color-mix(in srgb, var(--dynamic-accent) 70%, white))",
            }}
          />
        </div>
      </div>

      <div className="flex w-full items-center justify-end gap-3 py-2 text-sm">
        <span className="flex items-center gap-1 text-muted-foreground dark:text-white/50">
          <SquareCheck className="size-4 text-emerald-400" />
          <span>{correctCount ?? 0}</span>
        </span>
        <span className="flex items-center gap-1 text-muted-foreground dark:text-white/50">
          <SquareX className="size-4 text-rose-400" />
          <span>{wrongCount ?? 0}</span>
        </span>
        <span className="text-muted-foreground/70 dark:text-white/30">
          {currentIndex + 1}/{totalItems}
        </span>
      </div>
    </div>
  );
}
