import { Text } from "@nn/ui";
import { View } from "react-native";

// Mobile vocab hub arrives with the mobile design pass.
export default function PathViewPage(_props: { splat: string }) {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-muted-foreground">The vocab hub is on the web app for now.</Text>
    </View>
  );
}
