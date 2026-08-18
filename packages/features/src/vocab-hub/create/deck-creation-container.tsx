import { Tabs } from "@base-ui/react/tabs";
import { useConvexMutation } from "@convex-dev/react-query";
import { api } from "@nn/convex/_generated/api";
import type { Id } from "@nn/convex/_generated/dataModel";
import { useRouter } from "@nn/router";
import { Plus } from "lucide-react";
import { useState } from "react";

import { useVocab } from "../context";
import { VocabularyCard } from "../pages/deck-view/vocabulary-card";
import { formDataToDeckVocabItemInput, formDataToVocabularyItem } from "../types/vocabulary";
import { validateDeckNameUnique } from "../validation/deck-folder-validation";
import { validateVocabItemMinimal } from "../validation/vocabulary-validation";
import { DeckCreateHeader } from "./deck-create-header";
import { DeckDetails } from "./deck-details";
import { useDeckCreationStore } from "./store";
import { VocabItemEditor } from "./vocab-item-editor";

export function DeckCreationContainer() {
  const { store, actions } = useDeckCreationStore();
  const { decks } = useVocab();
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const router = useRouter();

  const createDeckWithVocab = useConvexMutation(api.api.decks.createDeckWithVocab);
  const updateDeckWithVocab = useConvexMutation(api.api.decks.updateDeckWithVocab);

  const validFormDataItems = Array.from(store.vocabItems.formData.values()).filter(
    validateVocabItemMinimal,
  );

  const handleSaveDeck = async () => {
    actions.setHasAttemptedSubmit(true);
    setSaveError(null);

    const deckName = store.deck.name.trim();
    const nameValid =
      deckName.length > 0 &&
      validateDeckNameUnique(deckName, decks, store.original?.deckId).isValid;
    if (!nameValid || validFormDataItems.length === 0) return;

    setIsSaving(true);
    try {
      const folderId =
        store.deck.selectedFolderId === "root"
          ? undefined
          : (store.deck.selectedFolderId as Id<"userDeckFolders">);

      const vocabularyItems = validFormDataItems
        .map(formDataToDeckVocabItemInput)
        .filter((item): item is NonNullable<typeof item> => item !== null);

      if (actions.isEditMode()) {
        const deckId = store.original?.deckId;
        if (!deckId) throw new Error("Deck ID is required for editing");
        await updateDeckWithVocab({
          deckId: deckId as Id<"userDecks">,
          deckName,
          deckDescription: store.deck.description || undefined,
          folderId: folderId ?? null,
          allowedPracticeModes: store.deck.allowedPracticeModes,
          vocabularyItems,
        });
      } else {
        await createDeckWithVocab({
          deckName,
          deckDescription: store.deck.description || undefined,
          folderId,
          allowedPracticeModes: store.deck.allowedPracticeModes,
          vocabularyItems,
        });
      }

      actions.resetStore();
      router.push("/vocab");
    } catch (error) {
      console.error("Failed to save deck:", error);
      setSaveError("Failed to save the deck. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="mx-auto max-w-5xl space-y-8 p-2 pb-8 sm:px-4 lg:px-6">
      <DeckCreateHeader
        onClear={actions.resetStore}
        onSave={() => {
          void handleSaveDeck();
        }}
        isSaving={isSaving}
      />

      {saveError && (
        <p className="rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive">
          {saveError}
        </p>
      )}

      <DeckDetails />

      <section>
        <div className="mb-2">
          <h2 className="text-lg font-semibold">Vocabulary Items</h2>
        </div>

        <Tabs.Root value={store.ui.currentTab} onValueChange={actions.setCurrentTab}>
          <Tabs.List className="mb-4 inline-flex rounded-md border border-border/60 bg-background/60 p-1 backdrop-blur-sm dark:border-card-foreground/70">
            <Tabs.Tab
              value="items"
              className="cursor-pointer rounded-sm px-3 py-1.5 text-sm font-medium text-muted-foreground data-active:bg-card data-active:text-foreground data-active:shadow"
            >
              List
            </Tabs.Tab>
            <Tabs.Tab
              value="preview"
              className="cursor-pointer rounded-sm px-3 py-1.5 text-sm font-medium text-muted-foreground data-active:bg-card data-active:text-foreground data-active:shadow"
            >
              Preview
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="items" className="mt-0">
            <div className="space-y-4">
              {store.vocabItems.activeIds.map((id, index) => (
                <VocabItemEditor
                  key={id}
                  itemId={id}
                  index={index}
                  isFirstItem={index === 0}
                  onRemove={() => {
                    actions.removeVocabItem(id);
                  }}
                />
              ))}

              <div className="mt-6 flex justify-center">
                <button
                  type="button"
                  className="flex cursor-pointer items-center gap-2 rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground hover:bg-secondary/80"
                  onClick={actions.addVocabItem}
                >
                  <Plus className="size-4" />
                  Add Item
                </button>
              </div>
            </div>
          </Tabs.Panel>

          <Tabs.Panel value="preview" className="mt-0">
            {validFormDataItems.length > 0 ? (
              <div className="space-y-4">
                {validFormDataItems.map((item, index) => (
                  <VocabularyCard key={index} item={formDataToVocabularyItem(item)} index={index} />
                ))}
              </div>
            ) : (
              <div className="p-6 text-center text-muted-foreground">
                <p className="text-sm">No vocabulary items to preview yet.</p>
                <p className="mt-2 text-xs">
                  Add some vocabulary items to see them displayed here.
                </p>
              </div>
            )}
          </Tabs.Panel>
        </Tabs.Root>
      </section>
    </div>
  );
}
