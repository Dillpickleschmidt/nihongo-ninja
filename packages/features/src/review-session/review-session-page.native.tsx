import { Text } from "@nn/ui";
import { View } from "react-native";

// Mobile practice arrives with the mobile design pass.
export default function ReviewSessionPage(_props: { mode: "meanings" | "spellings" }) {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-muted-foreground">Reviews are on the web app for now.</Text>
    </View>
  );
}
