import { Text } from "@nn/ui";
import { View } from "react-native";

// Web-only layout (and the CRUD modals it mounts); the mobile hub arrives
// with the mobile design pass.
export function VocabHubShell(_props: { showPanel: boolean; children: React.ReactNode }) {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-muted-foreground">The vocab hub is on the web app for now.</Text>
    </View>
  );
}
