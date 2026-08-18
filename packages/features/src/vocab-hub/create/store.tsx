import type { Doc } from "@nn/convex/_generated/dataModel";
import type { practiceModeValidator } from "@nn/convex/validators";
import type { Infer } from "convex/values";
import { createContext, useContext, useMemo, useState } from "react";

import {
  createEmptyVocabItemFormData,
  deckVocabItemToFormData,
  type VocabItemFormData,
} from "../types/vocabulary";

export type PracticeMode = Infer<typeof practiceModeValidator>;

export interface DeckEditData {
  deck: Doc<"userDecks">;
  vocabItems: Doc<"deckVocabularyItems">[];
  folderName?: string;
}

export interface DeckCreationState {
  deck: {
    name: string;
    description: string;
    selectedFolderId: string;
    selectedFolderName: string;
    allowedPracticeModes: PracticeMode[];
  };
  vocabItems: {
    nextId: number;
    activeIds: number[];
    formData: Map<number, VocabItemFormData>;
  };
  validation: {
    errors: Record<string, string[]>;
    hasAttemptedSubmit: boolean;
  };
  ui: {
    currentTab: string;
  };
  original: {
    deckId?: string;
    name: string;
    description: string;
    folderId: string;
    folderName: string;
  } | null;
}

function createInitialState(initialData?: DeckEditData): DeckCreationState {
  const isEditMode = !!initialData?.deck;

  const originalData = isEditMode
    ? {
        deckId: initialData.deck._id,
        name: initialData.deck.deckName,
        description: initialData.deck.deckDescription || "",
        folderId: initialData.deck.folderId || "root",
        folderName: initialData.folderName || "Root",
      }
    : null;

  let vocabFormData: Map<number, VocabItemFormData>;
  let activeIds: number[];
  let nextId: number;

  if (initialData?.vocabItems && initialData.vocabItems.length > 0) {
    vocabFormData = new Map();
    activeIds = [];
    initialData.vocabItems.forEach((item, index) => {
      vocabFormData.set(index, deckVocabItemToFormData(item));
      activeIds.push(index);
    });
    nextId = initialData.vocabItems.length;
  } else {
    vocabFormData = new Map([
      [0, createEmptyVocabItemFormData()],
      [1, createEmptyVocabItemFormData()],
    ]);
    activeIds = [0, 1];
    nextId = 2;
  }

  return {
    deck: {
      name: isEditMode ? initialData.deck.deckName : "",
      description: isEditMode ? initialData.deck.deckDescription || "" : "",
      selectedFolderId: isEditMode ? initialData.deck.folderId || "root" : "root",
      selectedFolderName: isEditMode ? initialData.folderName || "Root" : "Root",
      allowedPracticeModes: isEditMode
        ? initialData.deck.allowedPracticeModes
        : ["meanings", "spellings"],
    },
    vocabItems: { nextId, activeIds, formData: vocabFormData },
    validation: { errors: {}, hasAttemptedSubmit: false },
    ui: { currentTab: "items" },
    original: originalData,
  };
}

function useDeckCreationStoreValue(initialData?: DeckEditData) {
  const [store, setStore] = useState<DeckCreationState>(() => createInitialState(initialData));

  const actions = useMemo(() => {
    const update = (fn: (prev: DeckCreationState) => DeckCreationState) => {
      setStore(fn);
    };

    return {
      updateDeckName: (name: string) => {
        update((s) => ({ ...s, deck: { ...s.deck, name } }));
      },
      updateDeckDescription: (description: string) => {
        update((s) => ({ ...s, deck: { ...s.deck, description } }));
      },
      updateDeckFolder: (folderId: string, folderName: string) => {
        update((s) => ({
          ...s,
          deck: { ...s.deck, selectedFolderId: folderId, selectedFolderName: folderName },
        }));
      },
      updateAllowedPracticeModes: (modes: PracticeMode[]) => {
        update((s) => ({ ...s, deck: { ...s.deck, allowedPracticeModes: modes } }));
      },
      addVocabItem: () => {
        update((s) => ({
          ...s,
          vocabItems: {
            nextId: s.vocabItems.nextId + 1,
            activeIds: [...s.vocabItems.activeIds, s.vocabItems.nextId],
            formData: new Map(s.vocabItems.formData).set(
              s.vocabItems.nextId,
              createEmptyVocabItemFormData(),
            ),
          },
        }));
      },
      removeVocabItem: (id: number) => {
        update((s) => {
          const formData = new Map(s.vocabItems.formData);
          formData.delete(id);
          return {
            ...s,
            vocabItems: {
              ...s.vocabItems,
              activeIds: s.vocabItems.activeIds.filter((itemId) => itemId !== id),
              formData,
            },
          };
        });
      },
      updateVocabItemFormData: (id: number, formData: VocabItemFormData) => {
        update((s) => ({
          ...s,
          vocabItems: {
            ...s.vocabItems,
            formData: new Map(s.vocabItems.formData).set(id, formData),
          },
        }));
      },
      setValidationErrors: (errors: Record<string, string[]>) => {
        update((s) => ({ ...s, validation: { ...s.validation, errors } }));
      },
      setHasAttemptedSubmit: (attempted: boolean) => {
        update((s) => ({ ...s, validation: { ...s.validation, hasAttemptedSubmit: attempted } }));
      },
      setCurrentTab: (tab: string) => {
        update((s) => ({ ...s, ui: { currentTab: tab } }));
      },
      resetStore: () => {
        setStore(createInitialState());
      },
      isEditMode: () => !!initialData,
    };
  }, [initialData]);

  return { store, actions };
}

type StoreValue = ReturnType<typeof useDeckCreationStoreValue>;

const DeckCreationStoreContext = createContext<StoreValue | null>(null);

export function DeckCreationStoreProvider({
  initialData,
  children,
}: {
  initialData?: DeckEditData;
  children: React.ReactNode;
}) {
  const value = useDeckCreationStoreValue(initialData);
  return (
    <DeckCreationStoreContext.Provider value={value}>{children}</DeckCreationStoreContext.Provider>
  );
}

export function useDeckCreationStore(): StoreValue {
  const context = useContext(DeckCreationStoreContext);
  if (!context) {
    throw new Error("useDeckCreationStore must be used within a DeckCreationStoreProvider");
  }
  return context;
}
