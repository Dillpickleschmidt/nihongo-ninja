// Static stand-in for the interactive VocabularyCard demo. The real card
// (tabs, immersion-kit audio examples) ports with the vocab-page feature and
// replaces this.
export function VocabDemoCard() {
  return (
    <div className="relative rounded-lg border border-card-foreground/70 bg-card/50 shadow-md backdrop-blur-sm">
      <div className="px-6 py-6">
        <div className="flex items-baseline gap-3">
          <span className="font-japanese text-2xl font-semibold text-white">聞こえる</span>
          <span className="font-japanese text-sm text-white/50">きこえる</span>
          <span className="text-sm text-white/50">が</span>
        </div>
        <p className="mt-1 text-white/70">to be audible</p>
        <ul className="mt-4 space-y-1.5 text-sm text-white/60">
          <li>• Intransitive counterpart of 聞く (to hear) — the sound reaches you on its own</li>
          <li>• Used when something can be heard naturally, without actively trying to listen</li>
        </ul>
        <div className="mt-4 space-y-2 border-t border-white/10 pt-4 text-sm">
          <div>
            <p className="font-japanese text-white/80">音楽が聞こえる</p>
            <p className="text-white/50">I can hear music</p>
          </div>
          <div>
            <p className="font-japanese text-white/80">ここから海の音が聞こえる</p>
            <p className="text-white/50">I can hear the sound of the ocean from here</p>
          </div>
        </div>
      </div>
    </div>
  );
}
