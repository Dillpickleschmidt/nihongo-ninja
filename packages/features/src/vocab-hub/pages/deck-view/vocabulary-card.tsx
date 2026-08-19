import type { VocabularyItem } from "@nn/convex/validators";
import { cn, FuriganaText, Tabs, TabsList, TabsPanel, TabsTrigger, Text } from "@nn/ui";
import { Book, Grid2x2 } from "@nn/ui/icons";
import { View } from "react-native";

const triggerClass = "h-7 flex-1 cursor-pointer flex-row items-center justify-center rounded-md";
const triggerTextClass = (active: boolean) => (active ? "text-primary" : "text-primary/50");

// Real Examples (immersion-kit audio/scene examples) stay deferred on the
// Kagome lambda; both layouts show Info + Simple Examples.
export function VocabularyCard({ item, index }: { item: VocabularyItem; index: number }) {
  return (
    <View className="@container w-full">
      <View
        className={`relative rounded-lg border border-border/60 shadow-md backdrop-blur-sm dark:border-card-foreground/70 ${
          (index + 1) % 2 === 0 ? "bg-card/60" : "bg-card/50"
        }`}
      >
        <View className="px-6 py-6">
          <View className="@3xl:hidden">
            <CardHeader item={item} index={index} />
            <Tabs defaultValue="info" className="w-full">
              <TabsList className="w-full rounded-md bg-background/40 p-1 backdrop-blur-sm">
                <TabsTrigger value="info" className={triggerClass}>
                  {(active) => (
                    <>
                      <Book className={cn("mr-1.5 h-3.5 w-3.5", triggerTextClass(active))} />
                      <Text className={cn("text-xs", triggerTextClass(active))}>Info</Text>
                    </>
                  )}
                </TabsTrigger>
                <TabsTrigger value="examples-simple" className={triggerClass}>
                  {(active) => (
                    <>
                      <Grid2x2 className={cn("mr-1.5 h-3.5 w-3.5", triggerTextClass(active))} />
                      <Text className={cn("text-xs", triggerTextClass(active))}>
                        Simple Examples
                      </Text>
                    </>
                  )}
                </TabsTrigger>
              </TabsList>

              <TabsPanel value="info">
                <VocabInfo item={item} />
              </TabsPanel>
              <TabsPanel value="examples-simple">
                <SimpleExamples item={item} />
              </TabsPanel>
            </Tabs>
          </View>

          <View className="hidden @3xl:flex">
            <CardHeader item={item} index={index} />
            <View className="flex-row gap-6">
              <View className="w-1/2 border-l-2 border-orange-400/60 pl-6 saturate-75">
                <VocabInfo item={item} />
              </View>
              <View className="w-1/2 rounded-lg border border-border/60 bg-background/40 p-4 backdrop-blur-sm dark:border-card-foreground/70">
                <SimpleExamples item={item} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

function CardHeader({ item, index }: { item: VocabularyItem; index: number }) {
  return (
    <View className="mb-6 border-b border-border pb-4">
      <View className="flex-row items-center justify-between gap-4">
        <View className="flex-row items-baseline gap-4">
          <View className="flex-row items-baseline">
            <Text className="mr-3 text-base text-muted-foreground">{`${index + 1}.`}</Text>
            <FuriganaText
              furigana={item.furigana}
              textClassName="font-japanese text-xl font-bold"
            />
          </View>
          <Text className="text-sm text-foreground/70 italic">{item.english.join(", ")}</Text>
        </View>
      </View>
    </View>
  );
}

function VocabInfo({ item }: { item: VocabularyItem }) {
  return (
    <View className="gap-4">
      {item.particles && (
        <View className="gap-2">
          {item.particles.map((particle, i) => (
            <Text key={i} className="text-sm">
              <Text className="text-sm font-medium text-foreground">
                {particle.label || "Particle"}:{" "}
              </Text>
              <Text className="font-japanese text-sm font-bold text-emerald-400">
                {particle.particle}
              </Text>
            </Text>
          ))}
        </View>
      )}

      {item.mnemonics && (
        <View className="gap-2 pt-2">
          {item.mnemonics.kanji && item.mnemonics.kanji.length > 0 && (
            <View className="gap-1">
              <Text className="text-sm font-medium text-sky-400">Kanji Mnemonics:</Text>
              {item.mnemonics.kanji.map((mnemonic, i) => (
                <Text key={i} className="ml-2 text-sm text-foreground/70">
                  {mnemonic}
                </Text>
              ))}
            </View>
          )}
          {item.mnemonics.reading && item.mnemonics.reading.length > 0 && (
            <View className="gap-1">
              <Text className="text-sm font-medium text-emerald-400">Reading Mnemonics:</Text>
              {item.mnemonics.reading.map((mnemonic, i) => (
                <Text key={i} className="ml-2 text-sm text-foreground/70">
                  {mnemonic}
                </Text>
              ))}
            </View>
          )}
        </View>
      )}

      {item.info && item.info.length > 0 && (
        <View className="ml-4 gap-1">
          {item.info.map((info, i) => (
            <Text key={i} className="text-sm text-foreground/70">
              {"• "}
              {info}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
}

function SimpleExamples({ item }: { item: VocabularyItem }) {
  if (!item.exampleSentences || item.exampleSentences.length === 0) {
    return <Text className="text-sm text-muted-foreground">No examples available</Text>;
  }

  return (
    <View className="gap-4">
      {item.exampleSentences.map((sentence, i) => (
        <View key={i} className="gap-1.5">
          <View className="flex-row flex-wrap items-end">
            {sentence.japanese.map((part, j) => (
              <FuriganaText
                key={j}
                furigana={typeof part === "string" ? part : part.t}
                textClassName="font-japanese text-base leading-relaxed"
              />
            ))}
          </View>
          <Text className="text-xs leading-relaxed text-muted-foreground">
            {sentence.english.map((part) => (typeof part === "string" ? part : part.t)).join("")}
          </Text>
        </View>
      ))}
    </View>
  );
}
