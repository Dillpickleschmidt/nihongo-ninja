import { Text } from "@nn/ui";
import { View } from "react-native";

import { GlowBox } from "./glow-box";
import { SectionLabel } from "./section-label";

export function LessonSummary({ children }: { children: React.ReactNode }) {
  return (
    <GlowBox>
      <SectionLabel>Summary</SectionLabel>
      <View className="mt-4 gap-3 sm:grid sm:grid-cols-2">{children}</View>
    </GlowBox>
  );
}

export function SummaryItem({ children }: { children: React.ReactNode }) {
  return (
    <View className="flex-row gap-2.5">
      <View className="mt-1.5 size-1.5 shrink-0 rounded-full bg-dynamic-accent opacity-60" />
      <Text className="flex-1 text-sm text-muted-foreground">{children}</Text>
    </View>
  );
}
