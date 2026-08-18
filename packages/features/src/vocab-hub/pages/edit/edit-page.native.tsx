import { Text } from "@nn/ui";
import { View } from "react-native";

// Mobile deck editing arrives with the mobile design pass.
export default function DeckEditPage(_props: { deckId: string }) {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-muted-foreground">Deck editing is on the web app for now.</Text>
    </View>
  );
}
