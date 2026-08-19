import { createFuriganaGroupRegex } from "@nn/data/utils/text/furigana";
import { Text, View } from "react-native";

import { cn } from "./utils";

type Segment = { base: string; reading?: string };

// Mirrors convertFuriganaToRubyHtml's tokenization: bracketed groups become
// annotated segments; spaces and the U+001F segment separator are dropped.
function parseSegments(furigana: string): Segment[] {
  const segments: Segment[] = [];
  const regex = createFuriganaGroupRegex();
  let cursor = 0;
  for (const match of furigana.matchAll(regex)) {
    const plain = furigana.slice(cursor, match.index);
    if (plain) segments.push({ base: plain });
    segments.push({ base: match[1] ?? "", reading: match[2] });
    cursor = match.index + match[0].length;
  }
  const tail = furigana.slice(cursor);
  if (tail) segments.push({ base: tail });

  return segments
    .map((segment) => ({
      ...segment,
      // oxlint-disable-next-line no-control-regex
      base: segment.base.replace(/[\s\u001F]/g, ""),
    }))
    .filter((segment) => segment.base.length > 0);
}

export function FuriganaText({
  furigana,
  className,
  textClassName,
}: {
  furigana: string;
  className?: string;
  textClassName?: string;
}) {
  const segments = parseSegments(furigana);

  return (
    <View className={cn("flex-row flex-wrap items-end", className)}>
      {segments.map((segment, i) =>
        segment.reading === undefined ? (
          <Text key={i} className={cn("font-japanese", textClassName)}>
            {segment.base}
          </Text>
        ) : (
          <View key={i} className="items-center">
            <Text className="font-japanese text-[10px] leading-tight text-foreground">
              {segment.reading}
            </Text>
            <Text className={cn("font-japanese", textClassName)}>{segment.base}</Text>
          </View>
        ),
      )}
    </View>
  );
}
