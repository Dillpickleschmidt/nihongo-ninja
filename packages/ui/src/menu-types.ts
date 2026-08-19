export type MenuIcon = React.ComponentType<{ className?: string }>;

export type MenuItemProps = {
  icon?: MenuIcon;
  label: string;
  onSelect?: () => void;
  disabled?: boolean;
  destructive?: boolean;
  // Replaces the icon with a spinner and disables the item.
  pending?: boolean;
  // Extra classes for the label text (e.g. state coloring).
  labelClassName?: string;
  // Web-only hover explanation for disabled items.
  title?: string;
};

export type MenuLinkProps = {
  icon?: MenuIcon;
  label: string;
  href: string;
};

export type MenuSubProps = {
  icon?: MenuIcon;
  label: string;
  popupClassName?: string;
  children: React.ReactNode;
};

export type DropdownMenuProps = {
  trigger: React.ReactNode;
  triggerClassName?: string;
  popupClassName?: string;
  children: React.ReactNode;
};

export type ContextMenuProps = {
  // The always-visible content the menu attaches to (right-click on web,
  // long-press on native).
  content: React.ReactNode;
  className?: string;
  popupClassName?: string;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
};
