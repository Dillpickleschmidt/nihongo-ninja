import { Header, Heading, Paragraph, Text } from "@nn/ui";
import { View } from "react-native";

import { AccentDivider } from "./accent-divider";

export function OverviewItem({ children }: { children: React.ReactNode }) {
  return (
    <View className="flex-row items-baseline gap-3">
      <View className="mt-[0.35rem] size-1 shrink-0 rounded-full bg-dynamic-accent/30" />
      <Text className="text-sm text-muted-foreground">{children}</Text>
    </View>
  );
}

export function LessonHeader({
  chapter,
  title,
  subtitle,
  children,
}: {
  chapter: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <Header className="overflow-hidden px-8 pt-16 pb-12 sm:grid sm:grid-cols-[1fr_minmax(0,1fr)] sm:gap-x-12">
      <Text className="mb-4 text-[0.65rem] font-semibold tracking-[0.2em] text-muted-foreground/60 uppercase sm:col-span-2">
        {chapter}
      </Text>
      <View className="sm:order-1">
        <Heading level={1} className="font-japanese text-4xl font-bold tracking-tight">
          {title}
        </Heading>
        {subtitle === undefined ? null : (
          <Paragraph className="mt-4 leading-relaxed text-muted-foreground">{subtitle}</Paragraph>
        )}
      </View>
      <View className="mt-6 sm:order-3 sm:col-span-2">
        <AccentDivider />
      </View>
      <View className="mt-6 gap-3 sm:order-2 sm:mt-0 sm:gap-1.5 sm:self-center">{children}</View>
    </Header>
  );
}
