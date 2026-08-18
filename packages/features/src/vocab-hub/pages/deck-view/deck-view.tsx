import { Tabs } from "@base-ui/react/tabs";

import type { Deck } from "../../context";
import { DeckHeader, PracticeButton } from "./deck-header";
import { KanjiTab } from "./kanji-tab";
import { SelectionIndicator } from "./selection-indicator";
import { SummaryCardsRow } from "./summary-cards-row";
import { useDeckView, type TabValue } from "./use-deck-view";
import { VocabTab } from "./vocab-tab";

export function DeckView({ deck }: { deck: Deck }) {
  const view = useDeckView(deck);

  return (
    <div className="space-y-6">
      <DeckHeader
        deckId={deck.id}
        deckName={deck.deckName}
        deckDescription={deck.deckDescription}
      />

      <SummaryCardsRow
        vocabCount={view.counts?.vocab}
        kanjiCount={view.counts?.kanji}
        radicalCount={view.counts?.radicals}
        vocabDueRows={view.dueRows?.vocabulary}
        kanjiDueRows={view.dueRows?.kanji}
        radicalDueRows={view.dueRows?.radicals}
        dueRowsLoading={view.dueRowsLoading}
        onVocabClick={() => {
          view.setActiveTab("vocabulary");
        }}
        onKanjiClick={() => {
          view.setActiveTab("kanji");
        }}
      />

      {view.hasSelection && (
        <SelectionIndicator
          selectedKanji={view.selectedKanji}
          selectedRadical={view.selectedRadical}
          onClear={view.clearSelection}
        />
      )}

      <Tabs.Root
        value={view.activeTab}
        onValueChange={(v) => {
          view.setActiveTab(v as TabValue);
        }}
      >
        <Tabs.List className="inline-flex rounded-md border border-border/60 bg-background/60 p-1 backdrop-blur-sm dark:border-card-foreground/70 dark:bg-background/40">
          <Tabs.Tab
            value="vocabulary"
            className="cursor-pointer rounded-sm px-3 py-1.5 text-sm font-medium text-muted-foreground data-active:bg-card data-active:text-foreground data-active:shadow"
          >
            Vocabulary
            {view.selectedKanji && view.filteredVocab && (
              <span className="ml-1.5 text-xs text-indigo-400">({view.filteredVocab.length})</span>
            )}
          </Tabs.Tab>
          <Tabs.Tab
            value="kanji"
            className="cursor-pointer rounded-sm px-3 py-1.5 text-sm font-medium text-muted-foreground data-active:bg-card data-active:text-foreground data-active:shadow"
          >
            Kanji → Radicals
            {view.selectedRadical && view.filteredKanji && (
              <span className="ml-1.5 text-xs text-purple-400">({view.filteredKanji.length})</span>
            )}
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="vocabulary" className="mt-4">
          <VocabTab vocabulary={view.filteredVocab} />
        </Tabs.Panel>

        <Tabs.Panel value="kanji" className="mt-4">
          <KanjiTab
            kanjiEntries={view.filteredKanji}
            kanjiToVocab={view.kanjiToVocab}
            skippedKanji={view.skippedKanji}
            selectedKanji={view.selectedKanji}
            selectedRadical={view.selectedRadical}
            toggleKanji={view.toggleKanji}
            toggleRadical={view.toggleRadical}
          />
        </Tabs.Panel>
      </Tabs.Root>

      <div className="fixed bottom-20 left-1/2 -translate-x-1/2 md:hidden">
        <PracticeButton deckId={deck.id} />
      </div>
    </div>
  );
}
