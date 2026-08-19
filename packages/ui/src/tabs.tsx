import { createContext, useContext, useState } from "react";
import { Pressable, View } from "react-native";

import { cn } from "./utils";

// Single RN implementation (ADR 0001). Active styling is a prop, not a CSS
// selector, because native has no data-attribute selectors.
type TabsContextValue = { value: string; setValue: (next: string) => void };

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext(): TabsContextValue {
  const context = useContext(TabsContext);
  if (!context) throw new Error("Tabs components must be used within <Tabs>");
  return context;
}

export function Tabs({
  value,
  defaultValue,
  onValueChange,
  className,
  children,
}: {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  children: React.ReactNode;
}) {
  const [internal, setInternal] = useState(defaultValue ?? "");
  const current = value ?? internal;
  const setValue = (next: string) => {
    setInternal(next);
    onValueChange?.(next);
  };

  return (
    <TabsContext.Provider value={{ value: current, setValue }}>
      <View className={className}>{children}</View>
    </TabsContext.Provider>
  );
}

export function TabsList({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <View role="tablist" className={cn("flex-row", className)}>
      {children}
    </View>
  );
}

// Function children receive the active state: RN text color does not cascade
// from the Pressable, so active-dependent child styling needs it explicitly.
export function TabsTrigger({
  value,
  className,
  activeClassName,
  children,
}: {
  value: string;
  className?: string;
  activeClassName?: string;
  children: React.ReactNode | ((active: boolean) => React.ReactNode);
}) {
  const { value: current, setValue } = useTabsContext();
  const active = current === value;

  return (
    <Pressable
      role="tab"
      aria-selected={active}
      onPress={() => {
        setValue(value);
      }}
      className={cn(className, active && activeClassName)}
    >
      {typeof children === "function" ? children(active) : children}
    </Pressable>
  );
}

export function TabsPanel({
  value,
  className,
  keepMounted,
  children,
}: {
  value: string;
  className?: string;
  keepMounted?: boolean;
  children: React.ReactNode;
}) {
  const { value: current } = useTabsContext();
  const active = current === value;

  if (!active && !keepMounted) return null;

  return (
    <View role="tabpanel" className={cn(className, !active && "hidden")}>
      {children}
    </View>
  );
}
