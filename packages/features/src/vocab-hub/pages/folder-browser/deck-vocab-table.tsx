import type { VocabularyItem } from "@nn/convex/validators";
import { extractHiragana } from "@nn/data/utils/text/furigana";

export function DeckVocabTable({ vocab }: { vocab: VocabularyItem[] }) {
  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="border-b border-border/30">
          <th className="py-1.5 pr-3 text-left text-xs font-medium text-muted-foreground/60">
            Kanji
          </th>
          <th className="py-1.5 pr-3 text-left text-xs font-medium text-muted-foreground/60">
            Kana
          </th>
          <th className="py-1.5 text-right text-xs font-medium text-muted-foreground/60">
            English
          </th>
        </tr>
      </thead>
      <tbody>
        {vocab.map((item) => (
          <tr key={item.key} className="border-b border-border/30 last:border-0">
            <td className="py-1.5 pr-3 font-japanese text-lg">{item.overwriteWord ?? item.word}</td>
            <td className="py-1.5 pr-3 font-japanese text-lg">{extractHiragana(item.furigana)}</td>
            <td className="py-1.5 text-right text-[0.9375rem]">{item.english.join(", ")}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
