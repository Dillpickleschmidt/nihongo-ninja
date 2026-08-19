import { Tabs, TabsList, TabsPanel, TabsTrigger } from "@nn/ui";

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

      <Tabs
        value={view.activeTab}
        onValueChange={(v) => {
          view.setActiveTab(v as TabValue);
        }}
      >
        <TabsList className="inline-flex rounded-md border border-border/60 bg-background/60 p-1 backdrop-blur-sm dark:border-card-foreground/70 dark:bg-background/40">
          <TabsTrigger
            value="vocabulary"
            className="cursor-pointer rounded-sm px-3 py-1.5 text-sm font-medium text-muted-foreground"
            activeClassName="bg-card text-foreground shadow"
          >
            Vocabulary
            {view.selectedKanji && view.filteredVocab && (
              <span className="ml-1.5 text-xs text-indigo-400">({view.filteredVocab.length})</span>
            )}
          </TabsTrigger>
          <TabsTrigger
            value="kanji"
            className="cursor-pointer rounded-sm px-3 py-1.5 text-sm font-medium text-muted-foreground"
            activeClassName="bg-card text-foreground shadow"
          >
            Kanji → Radicals
            {view.selectedRadical && view.filteredKanji && (
              <span className="ml-1.5 text-xs text-purple-400">({view.filteredKanji.length})</span>
            )}
          </TabsTrigger>
        </TabsList>

        <TabsPanel value="vocabulary" className="mt-4">
          <VocabTab vocabulary={view.filteredVocab} />
        </TabsPanel>

        <TabsPanel value="kanji" className="mt-4">
          <KanjiTab
            kanjiEntries={view.filteredKanji}
            kanjiToVocab={view.kanjiToVocab}
            skippedKanji={view.skippedKanji}
            selectedKanji={view.selectedKanji}
            selectedRadical={view.selectedRadical}
            toggleKanji={view.toggleKanji}
            toggleRadical={view.toggleRadical}
          />
        </TabsPanel>
      </Tabs>

      <div className="fixed bottom-20 left-1/2 -translate-x-1/2 md:hidden">
        <PracticeButton deckId={deck.id} />
      </div>
    </div>
  );
}
