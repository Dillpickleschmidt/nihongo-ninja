import { AlertDialog } from "@base-ui/react/alert-dialog";
import { cn } from "@nn/ui";

export function ConfirmActionDialog({
  open,
  onOpenChange,
  title,
  description,
  confirmLabel,
  onConfirm,
  secondaryLabel,
  onSecondary,
  variant = "default",
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  confirmLabel: string;
  onConfirm: () => void;
  // Optional second action, for flows with more than one choice.
  secondaryLabel?: string;
  onSecondary?: () => void;
  variant?: "default" | "destructive";
}) {
  const close = () => {
    onOpenChange(false);
  };

  return (
    <AlertDialog.Root open={open} onOpenChange={onOpenChange}>
      <AlertDialog.Portal>
        <AlertDialog.Backdrop className="fixed inset-0 z-50 bg-black/55 transition-opacity data-ending-style:opacity-0 data-starting-style:opacity-0" />
        <AlertDialog.Popup className="fixed top-1/2 left-1/2 z-50 w-full max-w-[calc(100vw-2rem)] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-white/10 bg-neutral-900 p-6 text-white shadow-xl transition-all outline-none data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0 sm:max-w-md">
          <AlertDialog.Title className="text-lg font-semibold">{title}</AlertDialog.Title>
          <AlertDialog.Description className="mt-2 text-sm text-white/60">
            {description}
          </AlertDialog.Description>
          <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={close}
              className="cursor-pointer rounded-md border border-white/10 px-4 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
            >
              Cancel
            </button>
            {secondaryLabel && onSecondary ? (
              <button
                type="button"
                onClick={() => {
                  onSecondary();
                  close();
                }}
                className="cursor-pointer rounded-md border border-white/10 px-4 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
              >
                {secondaryLabel}
              </button>
            ) : null}
            <button
              type="button"
              onClick={() => {
                onConfirm();
                close();
              }}
              className={cn(
                "cursor-pointer rounded-md px-4 py-2 text-sm font-medium transition-all",
                variant === "destructive"
                  ? "bg-red-600 text-white hover:bg-red-500"
                  : "bg-dynamic-accent text-white hover:brightness-110",
              )}
            >
              {confirmLabel}
            </button>
          </div>
        </AlertDialog.Popup>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
