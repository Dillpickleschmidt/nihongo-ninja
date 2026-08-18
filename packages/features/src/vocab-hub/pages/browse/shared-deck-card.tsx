import { Popover } from "@base-ui/react/popover";
import type { SharedDeckInfo } from "@nn/convex/model/sharing";
import { Crown, Download, Eye, FileText, Share, SquarePen, Users } from "lucide-react";

import { alertMutationError } from "../../components/mutation-error";
import { alertMessage, promptText } from "../../components/web-dialogs";
import { useVocab } from "../../context";
import { DeckNameSchema, validateDeckNameUnique } from "../../validation/deck-folder-validation";

export function SharedDeckCard({
  deck,
  index,
  isImporting,
  isUnsharing,
  onPreview,
  onImport,
  onUnshare,
}: {
  deck: SharedDeckInfo;
  index: number;
  isImporting: boolean;
  isUnsharing: boolean;
  onPreview: () => void;
  onImport: () => void;
  onUnshare: () => void;
}) {
  const { decks, updateDeck } = useVocab();

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
      deck.deckId,
    );
    if (!unique.isValid) {
      alertMessage(unique.error ?? "A deck with this name already exists");
      return;
    }
    updateDeck(deck.deckId, { deckName: trimmed }).catch(alertMutationError("rename the deck"));
  };

  const stripe = (index + 1) % 2 === 0 ? "bg-card/60" : "bg-card/50";

  return (
    <div
      className={`relative rounded-xl border shadow-md backdrop-blur-sm transition-all duration-200 hover:shadow-lg ${
        deck.isOwn
          ? `border-amber-400/50 ring-1 ring-amber-400/20 ${stripe}`
          : `border-border/60 dark:border-card-foreground/70 ${stripe}`
      }`}
    >
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2">
              <h3 className="text-lg leading-tight font-bold">{deck.deckName}</h3>
              {deck.isOwn && <Crown className="h-3.5 w-3.5 shrink-0 text-amber-400" />}
            </div>

            {deck.deckDescription && (
              <p className="text-xs leading-relaxed text-muted-foreground">
                {deck.deckDescription}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-3">
              <div
                className={`flex items-center gap-1.5 rounded-md border px-2 py-1 backdrop-blur-sm ${
                  deck.isOwn
                    ? "border-amber-400/30 bg-amber-100/20"
                    : "border-border/60 bg-background/40 dark:border-card-foreground/50"
                }`}
              >
                <Users className={`h-3 w-3 ${deck.isOwn ? "text-amber-400" : "text-sky-400"}`} />
                <span className="text-xs font-medium">{deck.isOwn ? "You" : "Community"}</span>
              </div>

              {deck.importCount > 0 && (
                <div className="flex items-center gap-1.5 rounded-md border border-border/60 bg-background/40 px-2 py-1 backdrop-blur-sm dark:border-card-foreground/50">
                  <Download className="h-3 w-3 text-green-400" />
                  <span className="text-xs font-medium">{deck.importCount}</span>
                </div>
              )}

              <span className="text-xs text-muted-foreground">
                {new Date(deck.sharedAt).toLocaleDateString()}
              </span>
            </div>
          </div>

          <div className="ml-4">
            {deck.isOwn ? (
              <Popover.Root>
                <Popover.Trigger className="cursor-pointer rounded-md bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground shadow-sm hover:bg-secondary/80">
                  Manage
                </Popover.Trigger>
                <Popover.Portal>
                  <Popover.Positioner className="z-50" sideOffset={4}>
                    <Popover.Popup className="w-48 rounded-md border border-border bg-card p-2 shadow-md outline-none dark:border-card-foreground">
                      <div className="space-y-1">
                        <a
                          href={`/vocab/deck/${deck.deckId}/edit`}
                          className="flex w-full cursor-pointer items-center rounded-md px-2 py-1.5 text-sm hover:bg-accent"
                        >
                          <SquarePen className="mr-2 h-3 w-3" />
                          Edit contents
                        </a>
                        <button
                          type="button"
                          className="flex w-full cursor-pointer items-center rounded-md px-2 py-1.5 text-sm hover:bg-accent"
                          onClick={handleRename}
                        >
                          <FileText className="mr-2 h-3 w-3" />
                          Rename
                        </button>
                        <button
                          type="button"
                          className="flex w-full cursor-pointer items-center rounded-md px-2 py-1.5 text-sm text-red-600 hover:bg-red-50 hover:text-red-900 disabled:cursor-not-allowed disabled:opacity-50 dark:text-red-400 dark:hover:bg-red-950 dark:hover:text-red-300"
                          disabled={isUnsharing}
                          onClick={onUnshare}
                        >
                          {isUnsharing ? (
                            <div className="mr-2 h-3 w-3 animate-spin rounded-full border border-current border-t-transparent" />
                          ) : (
                            <Share className="mr-2 h-3 w-3" />
                          )}
                          Unshare
                        </button>
                      </div>
                    </Popover.Popup>
                  </Popover.Positioner>
                </Popover.Portal>
              </Popover.Root>
            ) : (
              <div className="flex gap-2">
                <button
                  type="button"
                  className="flex cursor-pointer items-center rounded-md border border-border/70 px-3 py-1.5 text-xs font-medium shadow-sm hover:bg-accent"
                  onClick={onPreview}
                >
                  <Eye className="mr-1.5 h-3.5 w-3.5" />
                  Preview
                </button>
                <button
                  type="button"
                  className="flex cursor-pointer items-center rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground shadow-sm disabled:cursor-not-allowed disabled:opacity-50"
                  disabled={isImporting}
                  onClick={onImport}
                >
                  {isImporting ? (
                    <div className="mr-1.5 h-3.5 w-3.5 animate-spin rounded-full border border-current border-t-transparent" />
                  ) : (
                    <Download className="mr-1.5 h-3.5 w-3.5" />
                  )}
                  Import
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
