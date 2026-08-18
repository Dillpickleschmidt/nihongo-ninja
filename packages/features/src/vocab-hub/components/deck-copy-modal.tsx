import { Dialog } from "@base-ui/react/dialog";
import { useConvexMutation } from "@convex-dev/react-query";
import { api } from "@nn/convex/_generated/api";
import type { Id } from "@nn/convex/_generated/dataModel";
import { cn } from "@nn/ui";
import { useState } from "react";

import { useVocab, type Deck } from "../context";
import { useFolderTree } from "../hooks/use-folder-tree";
import { DECK_NAME_MAX_LENGTH, DESCRIPTION_MAX_LENGTH } from "../validation/constants";
import {
  DeckNameSchema,
  DescriptionSchema,
  validateDeckNameUnique,
} from "../validation/deck-folder-validation";
import { dialogBackdropClass, dialogPopupClass } from "./dialog-styles";
import { LocationSelector } from "./location-selector";

export function DeckCopyModal() {
  const { copyingDeck, setCopyingDeck } = useVocab();

  return (
    <Dialog.Root
      open={!!copyingDeck}
      onOpenChange={(open) => {
        if (!open) setCopyingDeck(null);
      }}
    >
      <Dialog.Portal>
        <Dialog.Backdrop className={dialogBackdropClass} />
        <Dialog.Popup className={cn(dialogPopupClass, "max-w-lg")}>
          {copyingDeck && (
            <DeckCopyForm
              key={copyingDeck.id}
              deck={copyingDeck}
              onClose={() => {
                setCopyingDeck(null);
              }}
            />
          )}
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function DeckCopyForm({ deck, onClose }: { deck: Deck; onClose: () => void }) {
  const { folders, decks } = useVocab();
  const copyDeck = useConvexMutation(api.api.decks.copyDeck);

  const [name, setName] = useState(`${deck.deckName} (copy)`);
  const [description, setDescription] = useState(deck.deckDescription || "");
  const [selectedFolderId, setSelectedFolderId] = useState(deck.folderId || "root");
  const [showValidation, setShowValidation] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  const userDecks = decks.filter((d) => d.source === "user");

  const { folderTreeNodes } = useFolderTree({ folders, decks, item: null });

  const nameValidation = (() => {
    const schemaResult = DeckNameSchema.safeParse(name);
    if (!schemaResult.success) {
      return { isValid: false, error: schemaResult.error.issues[0]?.message ?? "Invalid name" };
    }
    return validateDeckNameUnique(name, userDecks);
  })();

  const descriptionValidation = (() => {
    const schemaResult = DescriptionSchema.safeParse(description);
    if (!schemaResult.success) {
      return {
        isValid: false,
        error: schemaResult.error.issues[0]?.message ?? "Invalid description",
      };
    }
    return { isValid: true, error: "" };
  })();

  const canSave = nameValidation.isValid && descriptionValidation.isValid && name.trim().length > 0;

  const selectedFolderName =
    selectedFolderId === "root"
      ? "Root"
      : (folders.find((f) => f.id === selectedFolderId)?.folderName ?? "Unknown");

  const handleSave = async () => {
    setShowValidation(true);
    if (!canSave) return;

    setIsSaving(true);
    setSaveError(null);
    try {
      await copyDeck({
        deckId: deck.id,
        deckSource: deck.source,
        deckName: name.trim(),
        deckDescription: description.trim() || undefined,
        folderId:
          selectedFolderId === "root" ? undefined : (selectedFolderId as Id<"userDeckFolders">),
      });
      onClose();
    } catch (error) {
      console.error("Failed to copy deck:", error);
      setSaveError("Failed to copy the deck. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  const fieldClass =
    "h-10 w-full rounded-md border border-border bg-transparent px-3 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-amber-500 dark:border-card-foreground";

  return (
    <div>
      <Dialog.Title className="text-lg font-semibold">Copy "{deck.deckName}"</Dialog.Title>

      {saveError && (
        <p className="mt-3 rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive">
          {saveError}
        </p>
      )}

      <div className="mt-4 space-y-6">
        <div>
          <label htmlFor="deck-copy-name" className="mb-1 block text-sm font-medium">
            Name
          </label>
          <input
            id="deck-copy-name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.currentTarget.value);
            }}
            onBlur={() => {
              setShowValidation(true);
            }}
            placeholder="Deck name"
            maxLength={DECK_NAME_MAX_LENGTH}
            className={fieldClass}
          />
          {showValidation && !nameValidation.isValid && (
            <p className="mt-1 text-sm text-red-500">{nameValidation.error}</p>
          )}
        </div>

        <div>
          <label htmlFor="deck-copy-description" className="mb-1 block text-sm font-medium">
            Description (optional)
          </label>
          <input
            id="deck-copy-description"
            type="text"
            value={description}
            onChange={(e) => {
              setDescription(e.currentTarget.value);
            }}
            placeholder="Add a description..."
            maxLength={DESCRIPTION_MAX_LENGTH}
            className={fieldClass}
          />
          {showValidation && !descriptionValidation.isValid && (
            <p className="mt-1 text-sm text-red-500">{descriptionValidation.error}</p>
          )}
        </div>

        <div className="space-y-3">
          <span className="block text-sm font-medium text-foreground">Location</span>
          <LocationSelector
            selectedFolderId={selectedFolderId}
            selectedFolderName={selectedFolderName}
            folderTreeNodes={folderTreeNodes}
            editingType="deck"
            onSelect={setSelectedFolderId}
          />
        </div>

        {deck.source === "built-in" && (
          <div className="rounded-lg border border-card-foreground/70 bg-muted/20 p-3 backdrop-blur-sm">
            <p className="text-xs text-muted-foreground">
              This will create a new deck that you can edit. The original built-in deck will remain
              unchanged.
            </p>
          </div>
        )}
      </div>

      <div className="mt-6 flex gap-3">
        <button
          type="button"
          onClick={onClose}
          disabled={isSaving}
          className="flex-1 cursor-pointer rounded-md border border-border/70 px-4 py-2 text-sm font-medium hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={() => {
            void handleSave();
          }}
          disabled={!canSave || isSaving}
          className="flex-1 cursor-pointer rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSaving ? "Creating..." : "Create Copy"}
        </button>
      </div>
    </div>
  );
}
