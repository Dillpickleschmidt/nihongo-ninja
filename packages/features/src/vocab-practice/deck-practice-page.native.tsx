import { Text } from "@nn/ui";
import { View } from "react-native";

// Mobile practice arrives with the mobile design pass.
export default function DeckPracticePage(_props: {
  deckId: string;
  mode: "meanings" | "spellings";
}) {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-muted-foreground">Vocab practice is on the web app for now.</Text>
    </View>
  );
}
