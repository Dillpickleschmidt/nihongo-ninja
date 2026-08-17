import type { PracticeCard } from "../types";
import { getPromptDisplay } from "../utils/card-display";

// Plain prompt rendering; the kanji stroke-order animation display arrives
// with the KanjiAnimation port and replaces this for single kanji/radicals.
export function PromptText({ card }: { card: PracticeCard }) {
  const promptDisplay = getPromptDisplay(card);

  if (promptDisplay.isHtml) {
    return (
      <div
        className="font-japanese text-5xl font-medium tracking-wide sm:text-7xl"
        dangerouslySetInnerHTML={{ __html: promptDisplay.html ?? "" }}
      />
    );
  }
  return <div className="font-japanese text-6xl font-medium sm:text-8xl">{promptDisplay.text}</div>;
}
