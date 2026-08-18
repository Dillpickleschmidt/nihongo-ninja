import { Info, Plus, Trash2 } from "lucide-react";

import { createEmptyVocabItemFormData, type VocabItemFormData } from "../types/vocabulary";
import { Field, PairListEditor, StringListEditor } from "./field-primitives";
import { useDeckCreationStore } from "./store";

export function VocabItemEditor({
  itemId,
  index,
  isFirstItem,
  onRemove,
}: {
  itemId: number;
  index: number;
  isFirstItem: boolean;
  onRemove: () => void;
}) {
  const { store, actions } = useDeckCreationStore();

  const formData = store.vocabItems.formData.get(itemId) || createEmptyVocabItemFormData();
  const hasAttemptedSubmit = store.validation.hasAttemptedSubmit;

  const updateFormData = (updates: Partial<VocabItemFormData>) => {
    actions.updateVocabItemFormData(itemId, { ...formData, ...updates });
  };

  const requiredIndicator = (isValid: boolean, error: string) => {
    if (hasAttemptedSubmit && !isValid) {
      return <span className="text-xs font-medium text-destructive">{error}</span>;
    }
    if (!hasAttemptedSubmit && isFirstItem) {
      return <span>Required</span>;
    }
    return null;
  };

  const wordValid = formData.word.trim().length > 0;
  const englishValid = formData.english.some((meaning) => meaning.trim().length > 0);

  const emptySections: { label: string; onAdd: () => void }[] = [
    ...(formData.notes.length === 0
      ? [
          {
            label: "Note",
            onAdd: () => {
              updateFormData({ notes: [""] });
            },
          },
        ]
      : []),
    ...(formData.particles.length === 0
      ? [
          {
            label: "Particle",
            onAdd: () => {
              updateFormData({ particles: [{ particle: "", label: "" }] });
            },
          },
        ]
      : []),
    ...(formData.examples.length === 0
      ? [
          {
            label: "Example Sentence",
            onAdd: () => {
              updateFormData({ examples: [{ japanese: "", english: "" }] });
            },
          },
        ]
      : []),
    ...(formData.readingMnemonics.length === 0
      ? [
          {
            label: "Reading Mnemonic",
            onAdd: () => {
              updateFormData({ readingMnemonics: [""] });
            },
          },
        ]
      : []),
    ...(formData.kanjiMnemonics.length === 0
      ? [
          {
            label: "Kanji Mnemonic",
            onAdd: () => {
              updateFormData({ kanjiMnemonics: [""] });
            },
          },
        ]
      : []),
  ];

  return (
    <div className="rounded-lg border border-border/60 bg-card/50 p-4 shadow-sm backdrop-blur-sm dark:border-card-foreground/70">
      <div className="mb-3 flex items-center justify-between">
        <div className="text-xs text-muted-foreground">Item {index + 1}</div>
        <button
          type="button"
          className="flex size-8 cursor-pointer items-center justify-center rounded-md hover:bg-accent"
          onClick={onRemove}
          aria-label="Remove item"
        >
          <Trash2 className="size-4" />
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Field
          label="Word"
          value={formData.word}
          placeholder="食べ物"
          onChange={(word) => {
            updateFormData({ word });
          }}
          indicator={requiredIndicator(wordValid, "Word is required")}
        />
        <Field
          label="Furigana"
          value={formData.furigana}
          placeholder="食[た]べ  物[もの]"
          onChange={(furigana) => {
            updateFormData({ furigana });
          }}
          title="Add a space before each kanji group. If you typed '食[た]べ物[もの]' (without the space), もの will be applied to 'べ物' instead of just '物.'"
          description="Use kana in brackets for kanji segments."
        />
      </div>

      <div className="mt-2.5 grid gap-4 md:grid-cols-2">
        <div>
          <div className="mb-1.5 flex items-center justify-between text-sm font-medium">
            English Meanings
          </div>
          <StringListEditor
            noun="meaning"
            values={formData.english}
            placeholder="food"
            onChange={(english) => {
              updateFormData({ english });
            }}
            firstRowIndicator={requiredIndicator(
              englishValid,
              "At least one English meaning is required",
            )}
          />

          <div className="flex items-center gap-2 pt-4">
            <label className="flex cursor-pointer items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.isVerb}
                onChange={(e) => {
                  updateFormData({ isVerb: e.currentTarget.checked });
                }}
                className="ml-1 size-4 cursor-pointer accent-[var(--color-primary)]"
              />
              <span className="text-sm font-medium">Is Verb</span>
            </label>
            <span className="text-xs text-muted-foreground">Is this a verb?</span>
            <span title="When you use multiple-choice during review, we show verbs with verbs and non-verbs with non-verbs (so the answer isn't too obvious).">
              <Info className="size-3 text-muted-foreground" />
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="mt-3 flex min-h-36 flex-col justify-center 2xl:mt-1.5">
            <div className="flex flex-wrap justify-end gap-2">
              {emptySections.map((section) => (
                <button
                  key={section.label}
                  type="button"
                  onClick={section.onAdd}
                  className="flex cursor-pointer items-center gap-1 rounded-md border border-border/70 px-3 py-1.5 text-xs hover:bg-accent"
                >
                  <Plus className="max-h-3 max-w-3" /> {section.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {formData.notes.length > 0 && (
          <StringListEditor
            label="Notes"
            noun="note"
            values={formData.notes}
            placeholder="Add a note..."
            allowEmpty
            onChange={(notes) => {
              updateFormData({ notes });
            }}
          />
        )}

        {formData.particles.length > 0 && (
          <PairListEditor
            label="Particles"
            noun="particle"
            values={formData.particles}
            fields={[
              { key: "particle", placeholder: "Particle (は、を、に...)" },
              { key: "label", placeholder: "Label (for when there are multiple particles)" },
            ]}
            onChange={(particles) => {
              updateFormData({ particles });
            }}
            makeEmpty={() => ({ particle: "", label: "" })}
          />
        )}

        {formData.examples.length > 0 && (
          <PairListEditor
            label="Example Sentences"
            noun="example"
            values={formData.examples}
            fields={[
              { key: "japanese", placeholder: "Japanese example..." },
              { key: "english", placeholder: "English translation..." },
            ]}
            onChange={(examples) => {
              updateFormData({ examples });
            }}
            makeEmpty={() => ({ japanese: "", english: "" })}
          />
        )}

        {formData.readingMnemonics.length > 0 && (
          <StringListEditor
            label="Reading Mnemonics"
            noun="reading mnemonic"
            values={formData.readingMnemonics}
            placeholder="Reading mnemonic..."
            allowEmpty
            onChange={(readingMnemonics) => {
              updateFormData({ readingMnemonics });
            }}
          />
        )}

        {formData.kanjiMnemonics.length > 0 && (
          <StringListEditor
            label="Kanji Mnemonics"
            noun="kanji mnemonic"
            values={formData.kanjiMnemonics}
            placeholder="Kanji mnemonic..."
            allowEmpty
            onChange={(kanjiMnemonics) => {
              updateFormData({ kanjiMnemonics });
            }}
          />
        )}
      </div>
    </div>
  );
}
