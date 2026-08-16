import { View } from "react-native";

import { Button } from "./button";
import type { Theme } from "./theme-shared";
import { useTheme } from "./theme-shared";

const OPTIONS: readonly { readonly value: Theme; readonly label: string }[] = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "system", label: "System" },
];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <View className="flex-row gap-1 rounded-md border border-border p-1">
      {OPTIONS.map((option) => (
        <Button
          key={option.value}
          size="sm"
          variant={theme === option.value ? "default" : "ghost"}
          onPress={() => {
            setTheme(option.value);
          }}
        >
          {option.label}
        </Button>
      ))}
    </View>
  );
}
