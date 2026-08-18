import { Text } from "@nn/ui";
import { View } from "react-native";

// Mobile deck browsing arrives with the mobile design pass.
export function BrowsePage() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-muted-foreground">Deck browsing is on the web app for now.</Text>
    </View>
  );
}

export default BrowsePage;
