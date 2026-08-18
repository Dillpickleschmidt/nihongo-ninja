import { ContextMenu } from "@base-ui/react/context-menu";
import { cn } from "@nn/ui";
import {
  Copy,
  FileText,
  Folder,
  FolderPlus,
  House,
  PencilLine,
  SquarePen,
  Trash2,
} from "lucide-react";
import { useState } from "react";

import { useVocab, type Deck } from "../context";
import { useFolderTree } from "../hooks/use-folder-tree";
import { getFolderPath } from "../utils/hierarchy";
import { buildDeckUrlPath } from "../utils/navigation";
import { DeckNameSchema, validateDeckNameUnique } from "../validation/deck-folder-validation";
import {
  destructiveMenuItemClass,
  menuItemClass,
  menuPopupClass,
  menuSeparatorClass,
} from "./menu-styles";
import { alertMutationError } from "./mutation-error";
import { TreeView } from "./tree-view";

export function DeckCard({
  deck,
  isSelected,
  className,
}: {
  deck: Deck;
  isSelected?: boolean;
  className?: string;
}) {
  const { folders, decks, updateDeck, deleteDeck, setCopyingDeck } = useVocab();
  const deckPath = `/vocab/${buildDeckUrlPath(deck, folders)}`;
  const editPath = `/vocab/deck/${deck.id}/edit`;
  const canEdit = deck.source === "user";

  const [expandedFolderIds, setExpandedFolderIds] = useState<Set<string>>(new Set());

  const { folderTreeNodes } = useFolderTree({ folders, decks: [], item: deck });

  const handleToggleFolder = (id: string) => {
    setExpandedFolderIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleMoveToFolder = (folderId: string) => {
    updateDeck(deck.id, { folderId: folderId === "root" ? null : folderId }).catch(
      alertMutationError("move the deck"),
    );
  };

  const initializeExpandedState = () => {
    const path = deck.folderId ? getFolderPath(deck.folderId, folders) : [];
    setExpandedFolderIds(new Set(["root", ...path.map((f) => f.id)]));
  };

  const handleRename = () => {
    const newName = window.prompt("Enter new deck name:", deck.deckName);
    const trimmed = newName?.trim();
    if (!trimmed || trimmed === deck.deckName) return;

    const schemaResult = DeckNameSchema.safeParse(trimmed);
    if (!schemaResult.success) {
      window.alert(schemaResult.error.issues[0]?.message ?? "Invalid name");
      return;
    }
    const unique = validateDeckNameUnique(
      trimmed,
      decks.filter((d) => d.source === "user"),
      deck.id,
    );
    if (!unique.isValid) {
      window.alert(unique.error);
      return;
    }
    updateDeck(deck.id, { deckName: trimmed }).catch(alertMutationError("rename the deck"));
  };

  const handleDelete = () => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${deck.deckName}"? This action cannot be undone.`,
    );
    if (confirmed) deleteDeck(deck.id).catch(alertMutationError("delete the deck"));
  };

  return (
    <ContextMenu.Root
      onOpenChange={(open) => {
        if (open) initializeExpandedState();
      }}
    >
      <ContextMenu.Trigger render={<div className={cn("group relative", className)} />}>
        <a
          href={deckPath}
          className={cn(
            "block cursor-pointer space-y-3 rounded-lg border border-border/60 bg-card/70 p-4 shadow-sm backdrop-blur-sm hover:bg-card/90 hover:shadow-md dark:border-card-foreground/70 dark:bg-card/60 dark:hover:bg-card/70",
            isSelected && "outline-2 outline-border dark:outline-card-foreground",
          )}
        >
          <div className="space-y-1">
            <h4
              className={cn(
                "pr-8 text-sm leading-tight font-medium",
                deck.source === "built-in" &&
                  "underline decoration-muted-foreground/70 underline-offset-4",
              )}
              title={deck.source === "built-in" ? "Built-in deck" : undefined}
            >
              {deck.deckName}
            </h4>
            {deck.source === "built-in" && (
              <p className="text-xs text-muted-foreground">Built-in</p>
            )}
          </div>
        </a>

        {canEdit && (
          <a
            href={editPath}
            title="Edit deck"
            className="absolute top-2 right-2 rounded-md p-1 opacity-0 transition-opacity duration-200 group-hover:opacity-100 hover:bg-accent focus-visible:opacity-100"
          >
            <SquarePen className="h-3 w-3" />
          </a>
        )}
      </ContextMenu.Trigger>

      <ContextMenu.Portal>
        <ContextMenu.Positioner className="z-50">
          <ContextMenu.Popup className={menuPopupClass}>
            {canEdit ? (
              <ContextMenu.LinkItem href={editPath} className={menuItemClass}>
                <PencilLine className="mr-2 h-3 w-3" />
                Edit contents
              </ContextMenu.LinkItem>
            ) : (
              <ContextMenu.Item
                disabled
                className={menuItemClass}
                title="Built-in deck editing is disabled. Select make a copy instead."
              >
                <PencilLine className="mr-2 h-3 w-3" />
                Edit contents
              </ContextMenu.Item>
            )}

            <ContextMenu.Separator className={menuSeparatorClass} />

            <ContextMenu.Item disabled={!canEdit} className={menuItemClass} onClick={handleRename}>
              <FileText className="mr-2 h-3 w-3" />
              Rename
            </ContextMenu.Item>

            {canEdit && (
              <ContextMenu.SubmenuRoot>
                <ContextMenu.SubmenuTrigger className={menuItemClass}>
                  <FolderPlus className="mr-2 h-3 w-3" />
                  Move
                </ContextMenu.SubmenuTrigger>
                <ContextMenu.Portal>
                  <ContextMenu.Positioner className="z-50">
                    <ContextMenu.Popup
                      className={cn(menuPopupClass, "max-h-80 w-64 overflow-y-auto p-2")}
                    >
                      <TreeView
                        nodes={[
                          { id: "root", label: "Root", children: folderTreeNodes, data: null },
                        ]}
                        selectedId={deck.folderId || "root"}
                        onSelect={handleMoveToFolder}
                        expandedIds={expandedFolderIds}
                        onToggle={handleToggleFolder}
                        renderIcon={(node) =>
                          node.id === "root" ? (
                            <House className="mr-2 h-4 w-4 shrink-0" />
                          ) : (
                            <Folder className="mr-2 h-4 w-4 shrink-0" />
                          )
                        }
                        renderLabel={(node, nodeSelected) => (
                          <span
                            className={`flex-1 truncate text-xs ${nodeSelected ? "font-medium" : ""}`}
                          >
                            {node.label}
                          </span>
                        )}
                      />
                    </ContextMenu.Popup>
                  </ContextMenu.Positioner>
                </ContextMenu.Portal>
              </ContextMenu.SubmenuRoot>
            )}

            <ContextMenu.Item
              className={menuItemClass}
              onClick={() => {
                setCopyingDeck(deck);
              }}
            >
              <Copy className="mr-2 h-3 w-3" />
              Make a copy
            </ContextMenu.Item>

            {/* Built-in decks have no Delete: removal depends on the import
                domain's hide/restore, which isn't ported yet. */}
            {canEdit && (
              <>
                <ContextMenu.Separator className={menuSeparatorClass} />
                <ContextMenu.Item
                  className={cn(menuItemClass, destructiveMenuItemClass)}
                  onClick={handleDelete}
                >
                  <Trash2 className="mr-2 h-3 w-3" />
                  Delete
                </ContextMenu.Item>
              </>
            )}
          </ContextMenu.Popup>
        </ContextMenu.Positioner>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  );
}
