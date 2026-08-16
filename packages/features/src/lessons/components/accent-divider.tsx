import { cn } from "@nn/ui";
import { View } from "react-native";

// The source app used a CSS gradient fading the accent to transparent. A solid
// low-opacity accent line renders the same intent on every platform.
export function AccentDivider({ className }: { className?: string }) {
  return <View className={cn("h-px w-full bg-dynamic-accent/30", className)} />;
}
