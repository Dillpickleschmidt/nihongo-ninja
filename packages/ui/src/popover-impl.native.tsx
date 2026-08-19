import { useState } from "react";
import { Modal, Pressable, View } from "react-native";

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
  const [internal, setInternal] = useState(false);
  const isOpen = open ?? internal;
  const setOpen = (next: boolean) => {
    setInternal(next);
    onOpenChange?.(next);
  };

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
      <Modal
        visible={isOpen}
        transparent
        animationType="slide"
        onRequestClose={() => {
          setOpen(false);
        }}
      >
        <Pressable
          aria-label="Dismiss"
          className="flex-1 bg-black/55"
          onPress={() => {
            setOpen(false);
          }}
        />
        <View
          className={cn(
            "max-h-[70%] rounded-t-2xl border-t border-border bg-card p-4 pb-8 dark:border-card-foreground",
            popupClassName,
          )}
        >
          {children}
        </View>
      </Modal>
    </>
  );
}
