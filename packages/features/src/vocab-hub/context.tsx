import { convexQuery } from "@convex-dev/react-query";
import { api } from "@nn/convex/_generated/api";
import type { UnifiedDeck } from "@nn/convex/model/decks";
import type { UnifiedFolder } from "@nn/convex/model/folders";
import { useQuery } from "@tanstack/react-query";
import { createContext, useCallback, useContext, useMemo, useState } from "react";

import { getFolderPath } from "./utils/hierarchy";

export type Folder = UnifiedFolder;
export type Deck = UnifiedDeck;

// Deck/folder CRUD arrives with the editing PR; until then the hub is
// read-only and guests simply browse the built-in content.
type VocabContextValue = {
  folders: Folder[];
  decks: Deck[];
  isLoading: boolean;

  expandedSections: Set<string>;
  toggleSection: (id: string) => void;
  initializeExpandedFromDeck: (deckId: string | null) => void;
  initializeExpandedFromFolder: (folderId: string | null) => void;
};

const VocabContext = createContext<VocabContextValue | null>(null);

export function VocabProvider({ children }: { children: React.ReactNode }) {
  // Returns built-in + user data; built-in only when signed out.
  const { data, isPending } = useQuery(convexQuery(api.api.folders.getAllFoldersAndDecks, {}));

  const folders = data?.folders ?? EMPTY_FOLDERS;
  const decks = data?.decks ?? EMPTY_DECKS;

  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const toggleSection = useCallback((id: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const initializeExpandedFromDeck = useCallback(
    (deckId: string | null) => {
      const deck = deckId ? decks.find((d) => d.id === deckId) : undefined;
      if (!deck?.folderId) {
        setExpandedSections(new Set<string>());
        return;
      }
      const path = getFolderPath(deck.folderId, folders);
      setExpandedSections(new Set(path.map((f) => f.id)));
    },
    [decks, folders],
  );

  const initializeExpandedFromFolder = useCallback(
    (folderId: string | null) => {
      if (!folderId) {
        setExpandedSections(new Set<string>());
        return;
      }
      const path = getFolderPath(folderId, folders);
      setExpandedSections(new Set(path.map((f) => f.id)));
    },
    [folders],
  );

  const value = useMemo(
    () => ({
      folders,
      decks,
      isLoading: isPending,
      expandedSections,
      toggleSection,
      initializeExpandedFromDeck,
      initializeExpandedFromFolder,
    }),
    [
      folders,
      decks,
      isPending,
      expandedSections,
      toggleSection,
      initializeExpandedFromDeck,
      initializeExpandedFromFolder,
    ],
  );

  return <VocabContext.Provider value={value}>{children}</VocabContext.Provider>;
}

const EMPTY_FOLDERS: Folder[] = [];
const EMPTY_DECKS: Deck[] = [];

export function useVocab(): VocabContextValue {
  const context = useContext(VocabContext);
  if (!context) throw new Error("useVocab must be used within a VocabProvider");
  return context;
}
