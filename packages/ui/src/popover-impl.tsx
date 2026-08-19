import { Popover as BasePopover } from "@base-ui/react/popover";

import { cn } from "./utils";

export function Popover({
  open,
  onOpenChange,
  trigger,
  triggerClassName,
  popupClassName,
  children,
}: {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger: React.ReactNode;
  triggerClassName?: string;
  popupClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <BasePopover.Root open={open} onOpenChange={onOpenChange}>
      <BasePopover.Trigger className={triggerClassName}>{trigger}</BasePopover.Trigger>
      <BasePopover.Portal>
        <BasePopover.Positioner className="z-50" sideOffset={4}>
          <BasePopover.Popup
            className={cn(
              "rounded-md border border-border bg-card shadow-md outline-none dark:border-card-foreground",
              popupClassName,
            )}
          >
            {children}
          </BasePopover.Popup>
        </BasePopover.Positioner>
      </BasePopover.Portal>
    </BasePopover.Root>
  );
}
