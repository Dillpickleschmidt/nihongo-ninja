import { convexQuery, useConvexMutation } from "@convex-dev/react-query";
import { api } from "@nn/convex/_generated/api";
import type { Id } from "@nn/convex/_generated/dataModel";
import type { UnifiedDeck } from "@nn/convex/model/decks";
import type { UnifiedFolder } from "@nn/convex/model/folders";
import { useQuery } from "@tanstack/react-query";
import { createContext, useCallback, useContext, useMemo, useState } from "react";

import { getFolderPath } from "./utils/hierarchy";

export type Folder = UnifiedFolder;
export type Deck = UnifiedDeck;

export type FolderDeleteStrategy = "move-up" | "delete-all";

type VocabContextValue = {
  folders: Folder[];
  decks: Deck[];
  isLoading: boolean;

  expandedSections: Set<string>;
  toggleSection: (id: string) => void;
  initializeExpandedFromDeck: (deckId: string | null) => void;
  initializeExpandedFromFolder: (folderId: string | null) => void;

  editingFolder: Folder | null;
  setEditingFolder: (folder: Folder | null) => void;
  copyingDeck: Deck | null;
  setCopyingDeck: (deck: Deck | null) => void;

  createFolder: (name: string, parentId?: string) => Promise<void>;
  updateFolder: (
    folderId: string,
    updates: { folderName?: string; parentFolderId?: string | null },
  ) => Promise<void>;
  deleteFolder: (folderId: string, strategy: FolderDeleteStrategy) => Promise<void>;
  updateDeck: (
    deckId: string,
    updates: { deckName?: string; deckDescription?: string; folderId?: string | null },
  ) => Promise<void>;
  deleteDeck: (deckId: string) => Promise<void>;
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

  const [editingFolder, setEditingFolder] = useState<Folder | null>(null);
  const [copyingDeck, setCopyingDeck] = useState<Deck | null>(null);

  const createFolderMutation = useConvexMutation(api.api.folders.createFolder);
  const updateFolderMutation = useConvexMutation(api.api.folders.updateFolder);
  const deleteFolderMutation = useConvexMutation(api.api.folders.deleteFolder);
  const updateDeckMutation = useConvexMutation(api.api.decks.updateDeck);
  const deleteDeckMutation = useConvexMutation(api.api.decks.deleteDeck);

  const createFolder = useCallback(
    async (name: string, parentId?: string) => {
      await createFolderMutation({
        folderName: name,
        parentFolderId: parentId as Id<"userDeckFolders"> | undefined,
      });
    },
    [createFolderMutation],
  );

  const updateFolder = useCallback(
    async (folderId: string, updates: { folderName?: string; parentFolderId?: string | null }) => {
      await updateFolderMutation({
        folderId: folderId as Id<"userDeckFolders">,
        folderName: updates.folderName,
        parentFolderId: updates.parentFolderId as Id<"userDeckFolders"> | null | undefined,
      });
    },
    [updateFolderMutation],
  );

  const deleteFolder = useCallback(
    async (folderId: string, strategy: FolderDeleteStrategy) => {
      await deleteFolderMutation({ folderId: folderId as Id<"userDeckFolders">, strategy });
    },
    [deleteFolderMutation],
  );

  const updateDeck = useCallback(
    async (
      deckId: string,
      updates: { deckName?: string; deckDescription?: string; folderId?: string | null },
    ) => {
      await updateDeckMutation({
        deckId: deckId as Id<"userDecks">,
        deckName: updates.deckName,
        deckDescription: updates.deckDescription,
        folderId: updates.folderId as Id<"userDeckFolders"> | null | undefined,
      });
    },
    [updateDeckMutation],
  );

  const deleteDeck = useCallback(
    async (deckId: string) => {
      await deleteDeckMutation({ deckId: deckId as Id<"userDecks"> });
    },
    [deleteDeckMutation],
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
      editingFolder,
      setEditingFolder,
      copyingDeck,
      setCopyingDeck,
      createFolder,
      updateFolder,
      deleteFolder,
      updateDeck,
      deleteDeck,
    }),
    [
      folders,
      decks,
      isPending,
      expandedSections,
      toggleSection,
      initializeExpandedFromDeck,
      initializeExpandedFromFolder,
      editingFolder,
      copyingDeck,
      createFolder,
      updateFolder,
      deleteFolder,
      updateDeck,
      deleteDeck,
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
