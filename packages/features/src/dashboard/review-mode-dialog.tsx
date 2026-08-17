import { Dialog } from "@base-ui/react/dialog";
import { Link } from "@nn/router";
import { cn } from "@nn/ui";

export function ReviewModeDialog({
  open,
  onOpenChange,
  meaningsCount,
  spellingsCount,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  meaningsCount: number | undefined;
  spellingsCount: number | undefined;
}) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-black/55 transition-opacity data-ending-style:opacity-0 data-starting-style:opacity-0" />
        <Dialog.Popup className="fixed top-1/2 left-1/2 z-50 w-full max-w-[calc(100vw-2rem)] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-border/70 bg-card p-6 transition-all outline-none data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0 sm:max-w-md dark:border-white/10 dark:bg-[#121212]">
          <Dialog.Title className="text-lg font-semibold text-foreground">
            Choose review mode
          </Dialog.Title>
          <Dialog.Description className="mt-1 text-sm text-muted-foreground">
            Pick the type of review you want to practice right now.
          </Dialog.Description>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <ReviewModeOption
              mode="meanings"
              label="Meanings"
              symbol="読"
              symbolClass="text-sky-500 dark:text-sky-300"
              count={meaningsCount}
            />
            <ReviewModeOption
              mode="spellings"
              label="Spellings"
              symbol="あ"
              symbolClass="text-orange-500 dark:text-orange-300"
              count={spellingsCount}
            />
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function ReviewModeOption({
  mode,
  label,
  symbol,
  symbolClass,
  count,
}: {
  mode: "meanings" | "spellings";
  label: string;
  symbol: string;
  symbolClass: string;
  count: number | undefined;
}) {
  const disabled = count === undefined || count === 0;
  const content = (
    <div className="flex flex-col items-center gap-2">
      <span className={cn("text-lg font-bold", symbolClass)}>{symbol}</span>
      <span className="text-sm font-medium">{label}</span>
      <span className="text-xs text-muted-foreground">{count ?? "–"} due</span>
    </div>
  );

  const classes =
    "inline-flex h-auto min-h-28 items-center justify-center rounded-md border border-border/70 bg-card/40 p-4 text-foreground dark:border-white/10 dark:bg-white/[0.02]";

  if (disabled) {
    return <div className={cn(classes, "opacity-50")}>{content}</div>;
  }
  return (
    <Link
      href="/review/session"
      search={{ mode }}
      className={cn(classes, "transition-colors hover:bg-accent dark:hover:bg-white/[0.05]")}
    >
      {content}
    </Link>
  );
}
