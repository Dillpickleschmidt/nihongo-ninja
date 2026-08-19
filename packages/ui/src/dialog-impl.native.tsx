import { Modal, Pressable, View } from "react-native";

import { Text } from "./text";
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
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Modal
      visible={open}
      transparent
      animationType="fade"
      onRequestClose={() => {
        onOpenChange(false);
      }}
    >
      <View className="flex-1 items-center justify-center bg-black/55 p-6">
        <Pressable
          aria-label="Dismiss"
          className="absolute inset-0"
          onPress={() => {
            onOpenChange(false);
          }}
        />
        <View
          className={cn(
            "w-full max-w-sm rounded-xl border border-border/70 bg-card p-6 dark:border-white/10 dark:bg-[#121212]",
            className,
          )}
        >
          <Text role="heading" aria-level={2} className="text-lg font-semibold">
            {title}
          </Text>
          {description !== undefined && (
            <Text className="mt-1 text-sm text-muted-foreground">{description}</Text>
          )}
          {children}
        </View>
      </View>
    </Modal>
  );
}
