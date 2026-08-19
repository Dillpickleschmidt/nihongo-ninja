import { createContext, useContext, useState } from "react";
import { Modal, Pressable, View } from "react-native";

import type {
  ContextMenuProps,
  DropdownMenuProps,
  MenuItemProps,
  MenuLinkProps,
  MenuSubProps,
} from "./menu-types";
import { Text } from "./text";
import { cn } from "./utils";

// One sheet per open menu; a submenu swaps the sheet body rather than
// stacking another modal.
type SheetContextValue = {
  close: () => void;
  openSub: (label: string, children: React.ReactNode) => void;
};

const SheetContext = createContext<SheetContextValue | null>(null);

function useSheet(): SheetContextValue {
  const context = useContext(SheetContext);
  if (!context) throw new Error("Menu items must be used within a menu");
  return context;
}

function MenuSheet({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  const [sub, setSub] = useState<{ label: string; children: React.ReactNode } | null>(null);

  const close = () => {
    setSub(null);
    onClose();
  };

  return (
    <Modal visible={open} transparent animationType="slide" onRequestClose={close}>
      <SheetContext.Provider
        value={{
          close,
          openSub: (label, children) => {
            setSub({ label, children });
          },
        }}
      >
        <Pressable aria-label="Dismiss" className="flex-1 bg-black/55" onPress={close} />
        <View className="max-h-[70%] rounded-t-2xl border-t border-border bg-card px-2 pt-2 pb-8 dark:border-card-foreground">
          {sub === null ? (
            children
          ) : (
            <>
              <Pressable
                className="flex-row items-center px-4 py-3"
                onPress={() => {
                  setSub(null);
                }}
              >
                <Text className="text-sm text-muted-foreground">‹ Back</Text>
                <Text className="ml-3 text-sm font-medium text-foreground">{sub.label}</Text>
              </Pressable>
              <View className="my-1 border-t border-border dark:border-card-foreground" />
              {sub.children}
            </>
          )}
        </View>
      </SheetContext.Provider>
    </Modal>
  );
}

function ItemRow({
  icon: Icon,
  label,
  onPress,
  disabled,
  destructive,
  pending,
  labelClassName,
}: MenuItemProps & { onPress?: () => void }) {
  return (
    <Pressable
      role="menuitem"
      disabled={disabled || pending}
      onPress={onPress}
      className={cn("flex-row items-center px-4 py-3", (disabled || pending) && "opacity-50")}
    >
      {Icon !== undefined && !pending && (
        <Icon className={cn("mr-3 h-4 w-4", destructive ? "text-red-400" : "text-foreground")} />
      )}
      <Text
        className={cn(
          "text-sm",
          destructive ? "text-red-600 dark:text-red-400" : "text-foreground",
          labelClassName,
        )}
      >
        {label}
      </Text>
    </Pressable>
  );
}

export function MenuItem(props: MenuItemProps) {
  const { close } = useSheet();
  return (
    <ItemRow
      {...props}
      onPress={() => {
        close();
        props.onSelect?.();
      }}
    />
  );
}

// Navigation from a native menu closes the sheet; the consuming app routes
// via its own Link handling, so href-only items surface as plain rows that
// the router package wires up during the domain conversions.
export function MenuLink({ icon, label }: MenuLinkProps) {
  const { close } = useSheet();
  return <ItemRow icon={icon} label={label} onPress={close} />;
}

export function MenuSeparator() {
  return <View className="my-1 border-t border-border dark:border-card-foreground" />;
}

export function MenuSub({ icon, label, children }: MenuSubProps) {
  const { openSub } = useSheet();
  return (
    <ItemRow
      icon={icon}
      label={label}
      onPress={() => {
        openSub(label, children);
      }}
    />
  );
}

export function DropdownMenu({ trigger, triggerClassName, children }: DropdownMenuProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Pressable
        className={triggerClassName}
        onPress={() => {
          setOpen(true);
        }}
      >
        {trigger}
      </Pressable>
      <MenuSheet
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        {children}
      </MenuSheet>
    </>
  );
}

export function ContextMenu({ content, className, onOpenChange, children }: ContextMenuProps) {
  const [open, setOpen] = useState(false);
  const setOpenNotify = (next: boolean) => {
    setOpen(next);
    onOpenChange?.(next);
  };
  return (
    <>
      <Pressable
        className={className}
        onLongPress={() => {
          setOpenNotify(true);
        }}
      >
        {content}
      </Pressable>
      <MenuSheet
        open={open}
        onClose={() => {
          setOpenNotify(false);
        }}
      >
        {children}
      </MenuSheet>
    </>
  );
}
