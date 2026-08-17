import { X } from "lucide-react";

export function SelectionIndicator({
  selectedKanji,
  selectedRadical,
  onClear,
}: {
  selectedKanji: string | null;
  selectedRadical: string | null;
  onClear: () => void;
}) {
  return (
    <div className="mx-4 flex items-center justify-between rounded-lg border border-indigo-500/30 bg-indigo-500/10 px-4 py-2">
      <div className="text-sm text-indigo-300">
        {selectedKanji && (
          <>
            Filtering by kanji: <span className="font-bold">{selectedKanji}</span>
          </>
        )}
        {selectedRadical && (
          <>
            Filtering by radical: <span className="font-bold">{selectedRadical}</span>
          </>
        )}
      </div>
      <button
        type="button"
        onClick={onClear}
        className="rounded-md p-1 text-indigo-300 hover:bg-indigo-500/20"
        title="Clear selection"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
