import { LocationSelector } from "../components/location-selector";
import { useVocab } from "../context";
import { useFolderTree } from "../hooks/use-folder-tree";
import { validateDeckNameUnique } from "../validation/deck-folder-validation";
import { Field } from "./field-primitives";
import { useDeckCreationStore, type PracticeMode } from "./store";

export function DeckDetails() {
  const { store, actions } = useDeckCreationStore();
  const { folders, decks } = useVocab();

  const { folderTreeNodes } = useFolderTree({ folders, decks, item: null });

  const handleFolderSelect = (folderId: string) => {
    if (folderId === "root") {
      actions.updateDeckFolder("root", "Root");
    } else {
      const folder = folders.find((f) => f.id === folderId);
      actions.updateDeckFolder(folderId, folder?.folderName || "Root");
    }
  };

  const hasAttemptedSubmit = store.validation.hasAttemptedSubmit;
  const nameEmpty = store.deck.name.trim().length === 0;
  const uniqueness = validateDeckNameUnique(store.deck.name, decks, store.original?.deckId);

  const nameIndicator = (() => {
    if (!hasAttemptedSubmit && nameEmpty) return <span>Required</span>;
    if (hasAttemptedSubmit && nameEmpty) {
      return <span className="text-xs font-medium text-destructive">Deck name is required</span>;
    }
    if (hasAttemptedSubmit && !uniqueness.isValid) {
      return <span className="text-xs font-medium text-destructive">{uniqueness.error}</span>;
    }
    return null;
  })();

  const handlePracticeModeChange = (mode: PracticeMode, enabled: boolean) => {
    const currentModes = store.deck.allowedPracticeModes;
    if (enabled) {
      if (!currentModes.includes(mode)) {
        actions.updateAllowedPracticeModes([...currentModes, mode]);
      }
    } else {
      const newModes = currentModes.filter((m) => m !== mode);
      if (newModes.length > 0) actions.updateAllowedPracticeModes(newModes);
    }
  };

  const modeCheckbox = (mode: PracticeMode, label: string) => (
    <label
      className="flex cursor-pointer items-center justify-end space-x-2"
      title="Choose which modes are presented when you click to practice this deck. At least one must be enabled."
    >
      <span className="text-xs text-muted-foreground">{label}</span>
      <input
        type="checkbox"
        checked={store.deck.allowedPracticeModes.includes(mode)}
        onChange={(e) => {
          handlePracticeModeChange(mode, e.currentTarget.checked);
        }}
        disabled={
          store.deck.allowedPracticeModes.length === 1 &&
          store.deck.allowedPracticeModes.includes(mode)
        }
        className="size-3.5 cursor-pointer accent-[var(--color-primary)]"
      />
    </label>
  );

  return (
    <section>
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Deck Details</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Field
          label="Deck Name"
          value={store.deck.name}
          placeholder="My Vocabulary Deck"
          onChange={actions.updateDeckName}
          indicator={nameIndicator}
          inputClassName="border-primary backdrop-blur-sm dark:border-primary-foreground/40 dark:bg-primary/10"
        />

        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="mb-1 flex items-center justify-between">
              <span className="text-sm font-medium">Folder</span>
            </div>
            <LocationSelector
              selectedFolderId={store.deck.selectedFolderId}
              selectedFolderName={store.deck.selectedFolderName}
              folderTreeNodes={folderTreeNodes}
              editingType="deck"
              onSelect={handleFolderSelect}
            />
            {store.original && store.original.folderId !== store.deck.selectedFolderId && (
              <div className="mt-1 text-xs text-muted-foreground">
                Original location: {store.original.folderName}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-1 pt-4">
            {modeCheckbox("meanings", "Allow Meanings")}
            {modeCheckbox("spellings", "Allow Spellings")}
          </div>
        </div>
      </div>

      <div className="mt-4">
        <Field
          label="Description"
          value={store.deck.description}
          placeholder="Describe your deck..."
          onChange={actions.updateDeckDescription}
          inputClassName="border-primary backdrop-blur-sm dark:border-primary-foreground/40 dark:bg-primary/10"
        />
      </div>
    </section>
  );
}
