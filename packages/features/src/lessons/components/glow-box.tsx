import { View } from "react-native";

// The source app drew an accent-gradient glow behind the card. An accent
// border on the card carries the intent on every platform.
export function GlowBox({ children }: { children: React.ReactNode }) {
  return (
    <View className="rounded-xl border border-dynamic-accent/20 bg-card/60 p-8">{children}</View>
  );
}
