import { ContextMenu as BaseContextMenu } from "@base-ui/react/context-menu";
import { Menu as BaseMenu } from "@base-ui/react/menu";

import type {
  ContextMenuProps,
  DropdownMenuProps,
  MenuItemProps,
  MenuLinkProps,
  MenuSubProps,
} from "./menu-types";
import { cn } from "./utils";

const popupClass =
  "min-w-44 rounded-md border border-border bg-card py-1 shadow-md outline-none dark:border-card-foreground";

const itemClass =
  "flex cursor-pointer items-center px-3 py-1.5 text-xs outline-none select-none data-highlighted:bg-accent data-disabled:cursor-not-allowed data-disabled:opacity-50";

const destructiveItemClass =
  "text-red-600 data-highlighted:bg-red-50 data-highlighted:text-red-900 dark:text-red-400 dark:data-highlighted:bg-red-950 dark:data-highlighted:text-red-300";

const separatorClass = "my-1 border-t border-border dark:border-card-foreground";

// The two roots share one part set, so items/subs must not care which root
// they're under. Base UI's ContextMenu re-exports Menu parts; the reverse
// composition (Menu items inside ContextMenu popups) type-checks and shares
// runtime state through the same internal context.
function ItemContent({
  icon: Icon,
  pending,
  label,
  labelClassName,
}: Pick<MenuItemProps, "icon" | "pending" | "label" | "labelClassName">) {
  return (
    <>
      {pending ? (
        <div className="mr-2 h-3 w-3 animate-spin rounded-full border border-current border-t-transparent" />
      ) : (
        Icon !== undefined && <Icon className="mr-2 h-3 w-3" />
      )}
      <span className={labelClassName}>{label}</span>
    </>
  );
}

export function MenuItem({
  icon,
  label,
  onSelect,
  disabled,
  destructive,
  pending,
  labelClassName,
  title,
}: MenuItemProps) {
  return (
    <BaseMenu.Item
      disabled={disabled || pending}
      title={title}
      className={cn(itemClass, destructive && destructiveItemClass)}
      onClick={onSelect}
    >
      <ItemContent icon={icon} pending={pending} label={label} labelClassName={labelClassName} />
    </BaseMenu.Item>
  );
}

export function MenuLink({ icon, label, href }: MenuLinkProps) {
  return (
    <BaseMenu.LinkItem href={href} className={itemClass}>
      <ItemContent icon={icon} label={label} />
    </BaseMenu.LinkItem>
  );
}

export function MenuSeparator() {
  return <BaseMenu.Separator className={separatorClass} />;
}

export function MenuSub({ icon, label, popupClassName, children }: MenuSubProps) {
  return (
    <BaseMenu.SubmenuRoot>
      <BaseMenu.SubmenuTrigger className={itemClass}>
        <ItemContent icon={icon} label={label} />
      </BaseMenu.SubmenuTrigger>
      <BaseMenu.Portal>
        <BaseMenu.Positioner className="z-50">
          <BaseMenu.Popup className={cn(popupClass, popupClassName)}>{children}</BaseMenu.Popup>
        </BaseMenu.Positioner>
      </BaseMenu.Portal>
    </BaseMenu.SubmenuRoot>
  );
}

export function DropdownMenu({
  trigger,
  triggerClassName,
  popupClassName,
  children,
}: DropdownMenuProps) {
  return (
    <BaseMenu.Root>
      <BaseMenu.Trigger className={triggerClassName}>{trigger}</BaseMenu.Trigger>
      <BaseMenu.Portal>
        <BaseMenu.Positioner className="z-50" sideOffset={4}>
          <BaseMenu.Popup className={cn(popupClass, popupClassName)}>{children}</BaseMenu.Popup>
        </BaseMenu.Positioner>
      </BaseMenu.Portal>
    </BaseMenu.Root>
  );
}

export function ContextMenu({
  content,
  className,
  popupClassName,
  onOpenChange,
  children,
}: ContextMenuProps) {
  return (
    <BaseContextMenu.Root onOpenChange={onOpenChange}>
      <BaseContextMenu.Trigger render={<div className={className} />}>
        {content}
      </BaseContextMenu.Trigger>
      <BaseContextMenu.Portal>
        <BaseContextMenu.Positioner className="z-50">
          <BaseContextMenu.Popup className={cn(popupClass, popupClassName)}>
            {children}
          </BaseContextMenu.Popup>
        </BaseContextMenu.Positioner>
      </BaseContextMenu.Portal>
    </BaseContextMenu.Root>
  );
}
