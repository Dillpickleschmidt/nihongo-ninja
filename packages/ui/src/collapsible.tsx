import { createContext, useContext } from "react";
import { Pressable, View } from "react-native";

// Single RN implementation (ADR 0001).
type CollapsibleContextValue = { open: boolean; toggle: () => void };

const CollapsibleContext = createContext<CollapsibleContextValue | null>(null);

function useCollapsibleContext(): CollapsibleContextValue {
  const context = useContext(CollapsibleContext);
  if (!context) throw new Error("Collapsible components must be used within <Collapsible>");
  return context;
}

export function Collapsible({
  open,
  onOpenChange,
  className,
  id,
  children,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  className?: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <CollapsibleContext.Provider
      value={{
        open,
        toggle: () => {
          onOpenChange(!open);
        },
      }}
    >
      <View id={id} className={className}>
        {children}
      </View>
    </CollapsibleContext.Provider>
  );
}

export function CollapsibleTrigger({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const { open, toggle } = useCollapsibleContext();
  return (
    <Pressable role="button" aria-expanded={open} onPress={toggle} className={className}>
      {children}
    </Pressable>
  );
}

export function CollapsiblePanel({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const { open } = useCollapsibleContext();
  if (!open) return null;
  return <View className={className}>{children}</View>;
}
