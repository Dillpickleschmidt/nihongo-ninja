import { Tabs } from "@base-ui/react/tabs";
import type { VocabularyItem } from "@nn/convex/validators";
import { convertFuriganaToRubyHtml } from "@nn/data/utils/text/furigana";
import { Book, Grid2x2 } from "lucide-react";

const mobileTriggerClass =
  "flex h-7 w-full cursor-pointer items-center justify-center rounded-md text-primary/50 hover:text-primary data-active:bg-transparent data-active:text-primary data-active:shadow-none";

// Real Examples (immersion-kit audio/scene examples) arrive in the next PR;
// until then both layouts show Info + Simple Examples.
export function VocabularyCard({ item, index }: { item: VocabularyItem; index: number }) {
  return (
    <div className="@container w-full">
      <div
        className={`relative rounded-lg border border-border/60 shadow-md backdrop-blur-sm dark:border-card-foreground/70 ${
          (index + 1) % 2 === 0 ? "bg-card/60" : "bg-card/50"
        }`}
      >
        <div className="px-6 py-6">
          <div className="@3xl:hidden">
            <CardHeader item={item} index={index} />
            <Tabs.Root defaultValue="info" className="w-full">
              <Tabs.List className="flex w-full rounded-md bg-background/40 p-1 backdrop-blur-sm">
                <Tabs.Tab value="info" className={mobileTriggerClass}>
                  <Book className="mr-1.5 h-3.5 w-3.5" />
                  <span className="text-xs">Info</span>
                </Tabs.Tab>
                <Tabs.Tab value="examples-simple" className={mobileTriggerClass}>
                  <Grid2x2 className="mr-1.5 h-3.5 w-3.5" />
                  <span className="text-xs">Simple Examples</span>
                </Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value="info">
                <VocabInfo item={item} />
              </Tabs.Panel>
              <Tabs.Panel value="examples-simple">
                <SimpleExamples item={item} />
              </Tabs.Panel>
            </Tabs.Root>
          </div>

          <div className="hidden @3xl:block">
            <CardHeader item={item} index={index} />
            <div className="flex gap-6">
              <div className="w-1/2 border-l-2 border-orange-400/60 pl-6 saturate-75">
                <VocabInfo item={item} />
              </div>
              <div className="w-1/2 rounded-lg border border-border/60 bg-background/40 p-4 backdrop-blur-sm dark:border-card-foreground/70">
                <SimpleExamples item={item} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardHeader({ item, index }: { item: VocabularyItem; index: number }) {
  return (
    <div className="mb-6 border-b border-border pb-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-baseline gap-4">
          <h3 className="flex items-baseline font-japanese text-xl font-bold">
            <span className="mr-3 text-base text-muted-foreground">{`${index + 1}.`}</span>
            <span
              className="text-xl"
              dangerouslySetInnerHTML={{ __html: convertFuriganaToRubyHtml(item.furigana) }}
            />
          </h3>
          <span className="text-sm text-foreground/70 italic">{item.english.join(", ")}</span>
        </div>
      </div>
    </div>
  );
}

function VocabInfo({ item }: { item: VocabularyItem }) {
  return (
    <div className="space-y-4">
      {item.particles && (
        <div className="space-y-2">
          {item.particles.map((particle, i) => (
            <div key={i} className="text-sm">
              <span className="font-medium text-foreground">{particle.label || "Particle"}: </span>
              <span className="font-japanese font-bold text-emerald-400">{particle.particle}</span>
            </div>
          ))}
        </div>
      )}

      {item.mnemonics && (
        <div className="space-y-2 pt-2">
          {item.mnemonics.kanji && item.mnemonics.kanji.length > 0 && (
            <div className="space-y-1">
              <span className="text-sm font-medium text-sky-400">Kanji Mnemonics:</span>
              {item.mnemonics.kanji.map((mnemonic, i) => (
                <div key={i} className="ml-2 text-sm">
                  <span className="text-foreground/70">{mnemonic}</span>
                </div>
              ))}
            </div>
          )}
          {item.mnemonics.reading && item.mnemonics.reading.length > 0 && (
            <div className="space-y-1">
              <span className="text-sm font-medium text-emerald-400">Reading Mnemonics:</span>
              {item.mnemonics.reading.map((mnemonic, i) => (
                <div key={i} className="ml-2 text-sm">
                  <span className="text-foreground/70">{mnemonic}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {item.info && item.info.length > 0 && (
        <ul className="ml-4 space-y-1 text-sm text-foreground/70">
          {item.info.map((info, i) => (
            <li key={i} className="list-disc">
              {info}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function SimpleExamples({ item }: { item: VocabularyItem }) {
  if (!item.exampleSentences || item.exampleSentences.length === 0) {
    return <p className="text-sm text-muted-foreground">No examples available</p>;
  }

  return (
    <div className="space-y-4">
      {item.exampleSentences.map((sentence, i) => (
        <div key={i} className="space-y-1.5">
          <p className="font-japanese text-base leading-relaxed">
            {sentence.japanese.map((part, j) => (
              <span
                key={j}
                dangerouslySetInnerHTML={{
                  __html: convertFuriganaToRubyHtml(typeof part === "string" ? part : part.t),
                }}
              />
            ))}
          </p>
          <p className="text-xs leading-relaxed text-muted-foreground">
            {sentence.english.map((part) => (typeof part === "string" ? part : part.t)).join("")}
          </p>
        </div>
      ))}
    </div>
  );
}
