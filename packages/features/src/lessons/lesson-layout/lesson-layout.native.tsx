import { Link } from "@nn/router";
import { Text } from "@nn/ui";
import { View } from "react-native";

// Mobile layout for lesson pages: back button + content, no decorative
// artwork (the web images are served from the web app's /img directory).
export function LessonLayout({ children }: { maxWidth?: string; children: React.ReactNode }) {
  return (
    <View className="flex-1 bg-background">
      <View className="z-50 px-4 pt-4">
        <Link href="/">
          <Text className="text-sm text-muted-foreground">← Back</Text>
        </Link>
      </View>
      <View className="flex-1">{children}</View>
    </View>
  );
}
