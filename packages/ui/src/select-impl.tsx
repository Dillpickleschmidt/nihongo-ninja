import { Select as BaseSelect } from "@base-ui/react/select";
import { Fragment } from "react";

import { ChevronDown } from "./icons";
import type { SelectProps } from "./select-types";
import { cn } from "./utils";

export function Select({
  value,
  onValueChange,
  groups,
  triggerClassName,
  popupClassName,
}: SelectProps) {
  const items = groups.flatMap((group) => group.options);

  return (
    <BaseSelect.Root
      items={items}
      value={value}
      onValueChange={(next) => {
        if (next) onValueChange(next);
      }}
    >
      <BaseSelect.Trigger className={triggerClassName}>
        <BaseSelect.Value />
        <BaseSelect.Icon>
          <ChevronDown className="size-4 opacity-50" />
        </BaseSelect.Icon>
      </BaseSelect.Trigger>
      <BaseSelect.Portal>
        <BaseSelect.Positioner className="z-50" sideOffset={4}>
          <BaseSelect.Popup
            className={cn(
              "rounded-md border border-border/70 bg-popover py-1 text-popover-foreground shadow-md",
              popupClassName,
            )}
          >
            {groups.map((group) => (
              <Fragment key={group.label}>
                <div className="px-2 py-1.5 text-xs text-muted-foreground dark:text-white/40">
                  {group.label}
                </div>
                {group.options.map((option) => (
                  <BaseSelect.Item
                    key={option.value}
                    value={option.value}
                    className="cursor-pointer px-3 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground"
                  >
                    <BaseSelect.ItemText>{option.label}</BaseSelect.ItemText>
                  </BaseSelect.Item>
                ))}
              </Fragment>
            ))}
          </BaseSelect.Popup>
        </BaseSelect.Positioner>
      </BaseSelect.Portal>
    </BaseSelect.Root>
  );
}
