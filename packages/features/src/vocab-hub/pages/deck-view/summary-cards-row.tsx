import { SummaryCard } from "./summary-card";

type Row = { hasHistory: boolean; dueCount: number };

export function SummaryCardsRow({
  vocabCount,
  kanjiCount,
  radicalCount,
  vocabDueRows,
  kanjiDueRows,
  radicalDueRows,
  dueRowsLoading,
  onVocabClick,
  onKanjiClick,
}: {
  vocabCount?: number;
  kanjiCount?: number;
  radicalCount?: number;
  vocabDueRows?: { meanings: Row; spellings: Row };
  kanjiDueRows?: { meanings: Row };
  radicalDueRows?: { meanings: Row };
  dueRowsLoading: boolean;
  onVocabClick: () => void;
  onKanjiClick: () => void;
}) {
  return (
    <div className="grid grid-cols-3 gap-3">
      <SummaryCard
        label="Vocabulary"
        count={vocabCount}
        dueRows={
          vocabDueRows && [
            { label: "Meanings", ...vocabDueRows.meanings },
            { label: "Spellings", ...vocabDueRows.spellings },
          ]
        }
        dueLoading={dueRowsLoading}
        onClick={onVocabClick}
      />
      <SummaryCard
        label="Kanji"
        count={kanjiCount}
        dueRows={kanjiDueRows && [{ label: "Meanings", ...kanjiDueRows.meanings }]}
        dueLoading={dueRowsLoading}
        onClick={onKanjiClick}
      />
      <SummaryCard
        label="Radicals"
        count={radicalCount}
        dueRows={radicalDueRows && [{ label: "Meanings", ...radicalDueRows.meanings }]}
        dueLoading={dueRowsLoading}
      />
    </div>
  );
}
