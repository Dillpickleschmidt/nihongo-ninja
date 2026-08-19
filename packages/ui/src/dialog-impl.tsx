import { Dialog as BaseDialog } from "@base-ui/react/dialog";

import { cn } from "./utils";

export function Dialog({
  open,
  onOpenChange,
  title,
  description,
  className,
  children,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  // Sizing/overflow overrides for the popup card (defaults to max-w-sm).
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <BaseDialog.Root open={open} onOpenChange={onOpenChange}>
      <BaseDialog.Portal>
        <BaseDialog.Backdrop className="fixed inset-0 z-50 bg-black/55 transition-opacity data-ending-style:opacity-0 data-starting-style:opacity-0" />
        <BaseDialog.Popup
          className={cn(
            "fixed top-1/2 left-1/2 z-50 w-full max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-xl border border-border/70 bg-card p-6 transition-all outline-none data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0 dark:border-white/10 dark:bg-[#121212]",
            className,
          )}
        >
          <BaseDialog.Title className="text-lg font-semibold">{title}</BaseDialog.Title>
          {description !== undefined && (
            <BaseDialog.Description className="mt-1 text-sm text-muted-foreground">
              {description}
            </BaseDialog.Description>
          )}
          {children}
        </BaseDialog.Popup>
      </BaseDialog.Portal>
    </BaseDialog.Root>
  );
}
