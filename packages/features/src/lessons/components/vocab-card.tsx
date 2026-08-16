import { Text } from "@nn/ui";
import { View } from "react-native";

// Minimal cross-platform vocabulary card for lesson pages. The source app's
// full VocabularyCard (tabs, example audio, ruby furigana) belongs to the
// vocab-page feature and ports with it.
export function VocabCard({
  word,
  furigana,
  english,
}: {
  word: string;
  furigana?: string;
  english: string[];
}) {
  const reading = furigana !== undefined && furigana !== word ? furigana : undefined;

  return (
    <View className="rounded-xl border border-border bg-card/60 px-6 py-4">
      <View className="flex-row items-baseline gap-3">
        <Text className="font-japanese text-2xl font-semibold text-foreground">{word}</Text>
        {reading === undefined ? null : (
          <Text className="font-japanese text-sm text-muted-foreground">{reading}</Text>
        )}
      </View>
      <Text className="mt-1 text-muted-foreground">{english.join(", ")}</Text>
    </View>
  );
}
