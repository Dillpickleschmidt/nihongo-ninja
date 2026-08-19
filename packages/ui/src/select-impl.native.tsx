import { Fragment, useState } from "react";
import { Modal, Pressable, ScrollView, View } from "react-native";

import { ChevronDown } from "./icons";
import type { SelectProps } from "./select-types";
import { Text } from "./text";
import { cn } from "./utils";

export function Select({ value, onValueChange, groups, triggerClassName }: SelectProps) {
  const [open, setOpen] = useState(false);
  const selected = groups.flatMap((g) => g.options).find((o) => o.value === value);

  return (
    <>
      <Pressable
        className={triggerClassName}
        onPress={() => {
          setOpen(true);
        }}
      >
        <Text className="text-sm text-foreground">{selected?.label ?? ""}</Text>
        <ChevronDown className="size-4 text-foreground opacity-50" />
      </Pressable>
      <Modal
        visible={open}
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
        <View className="max-h-[70%] rounded-t-2xl border-t border-border bg-card px-2 pt-2 pb-8 dark:border-card-foreground">
          <ScrollView>
            {groups.map((group) => (
              <Fragment key={group.label}>
                <Text className="px-4 py-2 text-xs text-muted-foreground">{group.label}</Text>
                {group.options.map((option) => (
                  <Pressable
                    key={option.value}
                    className={cn("px-4 py-3", option.value === value && "bg-accent")}
                    onPress={() => {
                      setOpen(false);
                      onValueChange(option.value);
                    }}
                  >
                    <Text className="text-sm text-foreground">{option.label}</Text>
                  </Pressable>
                ))}
              </Fragment>
            ))}
          </ScrollView>
        </View>
      </Modal>
    </>
  );
}
