import { Link } from "@nn/router";
import { Book, Folder as FolderIcon, Plus } from "lucide-react";

import { CollapsibleSection } from "../components/collapsible-section";
import { DeckCard } from "../components/deck-card";
import { useVocab, type Deck, type Folder } from "../context";
import {
  getDecksInFolder,
  getFolderChildren,
  getRootFolders,
  getRootOrphanDecks,
} from "../utils/hierarchy";

export function SidebarHierarchyView({ selectedDeckId }: { selectedDeckId: string | null }) {
  const { folders, decks } = useVocab();

  const rootFolders = getRootFolders(folders);
  const learningPathRootFolders = rootFolders.filter(
    (f) => f.source === "built-in" || f.learningPathId,
  );
  const plainUserRootFolders = rootFolders.filter((f) => f.source === "user" && !f.learningPathId);
  const orphanUserDecks = getRootOrphanDecks(decks).filter((d) => d.source === "user");

  return (
    <div className="flex h-full flex-col">
      <div className="mb-4 space-y-1">
        <h3 className="text-base font-semibold">Your Decks</h3>
        <p className="text-xs text-muted-foreground">Organize and manage your vocabulary decks</p>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto">
        {learningPathRootFolders.length > 0 && (
          <div className="space-y-1">
            <h4 className="px-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Learning Paths
            </h4>
            <div className="space-y-1">
              {learningPathRootFolders.map((folder) => (
                <FolderNode
                  key={folder.id}
                  folder={folder}
                  allFolders={folders}
                  allDecks={decks}
                  selectedDeckId={selectedDeckId}
                  depth={0}
                />
              ))}
            </div>
          </div>
        )}

        <div className="space-y-1">
          <h4 className="px-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
            My Folders
          </h4>
          {plainUserRootFolders.length > 0 || orphanUserDecks.length > 0 ? (
            <div className="space-y-1">
              {plainUserRootFolders.map((folder) => (
                <FolderNode
                  key={folder.id}
                  folder={folder}
                  allFolders={folders}
                  allDecks={decks}
                  selectedDeckId={selectedDeckId}
                  depth={0}
                />
              ))}
              {orphanUserDecks.map((deck) => (
                <DeckCard
                  key={deck.id}
                  deck={deck}
                  isSelected={selectedDeckId === deck.id}
                  className="mx-2"
                />
              ))}
            </div>
          ) : (
            <p className="px-2 py-4 text-center text-xs text-muted-foreground">
              No decks yet. Create one to get started!
            </p>
          )}
        </div>
      </div>

      <div className="pt-4">
        <Link
          href="/vocab/create"
          className="flex w-full items-center justify-center gap-2 rounded-md border border-border/70 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground dark:border-card-foreground/70"
        >
          <Plus className="h-4 w-4" />
          Create New
        </Link>
      </div>
    </div>
  );
}

function FolderNode({
  folder,
  allFolders,
  allDecks,
  selectedDeckId,
  depth,
}: {
  folder: Folder;
  allFolders: Folder[];
  allDecks: Deck[];
  selectedDeckId: string | null;
  depth: number;
}) {
  const { expandedSections, toggleSection } = useVocab();

  const childFolders = getFolderChildren(allFolders, folder.id);
  const childDecks = getDecksInFolder(allDecks, folder.id);

  return (
    <CollapsibleSection
      title={folder.folderName}
      icon={folder.source === "built-in" ? Book : FolderIcon}
      isExpanded={expandedSections.has(folder.id)}
      onToggle={() => {
        toggleSection(folder.id);
      }}
      depth={depth}
    >
      <div className="space-y-1">
        {childFolders.map((childFolder) => (
          <FolderNode
            key={childFolder.id}
            folder={childFolder}
            allFolders={allFolders}
            allDecks={allDecks}
            selectedDeckId={selectedDeckId}
            depth={depth + 1}
          />
        ))}
        {childDecks.map((deck) => (
          <DeckCard key={deck.id} deck={deck} isSelected={selectedDeckId === deck.id} />
        ))}
      </div>
    </CollapsibleSection>
  );
}
