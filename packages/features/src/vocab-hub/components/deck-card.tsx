import { convexQuery, useConvexMutation } from "@convex-dev/react-query";
import { api } from "@nn/convex/_generated/api";
import type { Id } from "@nn/convex/_generated/dataModel";
import { useRouter } from "@nn/router";
import { cn } from "@nn/ui";
import {
  Copy,
  FileText,
  Folder,
  FolderPlus,
  House,
  PencilLine,
  Share,
  SquarePen,
  Trash2,
} from "@nn/ui/icons";
import { ContextMenu, MenuItem, MenuLink, MenuSeparator, MenuSub } from "@nn/ui/menu";
import { useQuery } from "@tanstack/react-query";
import { useConvexAuth } from "convex/react";
import { useState } from "react";

import { useVocab, type Deck } from "../context";
import { useFolderTree } from "../hooks/use-folder-tree";
import { getFolderPath } from "../utils/hierarchy";
import { buildDeckUrlPath } from "../utils/navigation";
import { DeckNameSchema, validateDeckNameUnique } from "../validation/deck-folder-validation";
import { alertMutationError } from "./mutation-error";
import { TreeView } from "./tree-view";
import { alertMessage, confirmAction, promptText } from "./web-dialogs";

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
  const router = useRouter();
  const deckPath = `/vocab/${buildDeckUrlPath(deck, folders)}`;
  const editPath = `/vocab/deck/${deck.id}/edit`;
  const canEdit = deck.source === "user";

  const [expandedFolderIds, setExpandedFolderIds] = useState<Set<string>>(new Set());
  const [isSharing, setIsSharing] = useState(false);

  const { isAuthenticated } = useConvexAuth();
  const { data: isShared } = useQuery({
    ...convexQuery(api.api.sharing.isShared, { deckId: deck.id as Id<"userDecks"> }),
    enabled: canEdit && isAuthenticated,
  });
  const shareDeck = useConvexMutation(api.api.sharing.shareDeck);
  const unshareDeck = useConvexMutation(api.api.sharing.unshareDeck);

  const handleShare = async () => {
    setIsSharing(true);
    try {
      if (isShared) {
        if (!confirmAction("Are you sure you want to unshare this deck?")) return;
        await unshareDeck({ deckId: deck.id as Id<"userDecks"> });
      } else {
        await shareDeck({ deckId: deck.id as Id<"userDecks"> });
        router.push("/vocab/browse");
      }
    } catch (error) {
      alertMutationError("update sharing status")(error);
    } finally {
      setIsSharing(false);
    }
  };

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
    const newName = promptText("Enter new deck name:", deck.deckName);
    const trimmed = newName?.trim();
    if (!trimmed || trimmed === deck.deckName) return;

    const schemaResult = DeckNameSchema.safeParse(trimmed);
    if (!schemaResult.success) {
      alertMessage(schemaResult.error.issues[0]?.message ?? "Invalid name");
      return;
    }
    const unique = validateDeckNameUnique(
      trimmed,
      decks.filter((d) => d.source === "user"),
      deck.id,
    );
    if (!unique.isValid) {
      alertMessage(unique.error ?? "A deck with this name already exists");
      return;
    }
    updateDeck(deck.id, { deckName: trimmed }).catch(alertMutationError("rename the deck"));
  };

  const handleDelete = () => {
    const confirmed = confirmAction(
      `Are you sure you want to delete "${deck.deckName}"? This action cannot be undone.`,
    );
    if (confirmed) deleteDeck(deck.id).catch(alertMutationError("delete the deck"));
  };

  return (
    <ContextMenu
      onOpenChange={(open) => {
        if (open) initializeExpandedState();
      }}
      className={cn("group relative", className)}
      content={
        <>
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
        </>
      }
    >
      {canEdit ? (
        <MenuLink icon={PencilLine} label="Edit contents" href={editPath} />
      ) : (
        <MenuItem
          icon={PencilLine}
          label="Edit contents"
          disabled
          title="Built-in deck editing is disabled. Select make a copy instead."
        />
      )}

      <MenuSeparator />

      <MenuItem icon={FileText} label="Rename" disabled={!canEdit} onSelect={handleRename} />

      {canEdit && (
        <MenuSub icon={FolderPlus} label="Move" popupClassName="max-h-80 w-64 overflow-y-auto p-2">
          <TreeView
            nodes={[{ id: "root", label: "Root", children: folderTreeNodes, data: null }]}
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
              <span className={`flex-1 truncate text-xs ${nodeSelected ? "font-medium" : ""}`}>
                {node.label}
              </span>
            )}
          />
        </MenuSub>
      )}

      {canEdit && isAuthenticated && (
        <MenuItem
          icon={Share}
          label={isShared ? "Unshare" : "Share"}
          pending={isSharing}
          disabled={isShared === undefined}
          labelClassName={isShared ? "text-amber-600 dark:text-amber-400" : undefined}
          onSelect={() => {
            void handleShare();
          }}
        />
      )}

      <MenuItem
        icon={Copy}
        label="Make a copy"
        onSelect={() => {
          setCopyingDeck(deck);
        }}
      />

      {/* Built-in decks have no Delete: removal depends on the import
          domain's hide/restore, which isn't ported yet. */}
      {canEdit && (
        <>
          <MenuSeparator />
          <MenuItem destructive icon={Trash2} label="Delete" onSelect={handleDelete} />
        </>
      )}
    </ContextMenu>
  );
}
