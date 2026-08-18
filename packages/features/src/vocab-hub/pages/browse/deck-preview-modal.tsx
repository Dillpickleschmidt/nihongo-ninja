import { Dialog } from "@base-ui/react/dialog";
import { convexQuery } from "@convex-dev/react-query";
import { api } from "@nn/convex/_generated/api";
import type { Id } from "@nn/convex/_generated/dataModel";
import { convertFuriganaToRubyHtml } from "@nn/data/utils/text/furigana";
import { cn } from "@nn/ui";
import { useQuery } from "@tanstack/react-query";
import { Download } from "lucide-react";

import { dialogBackdropClass, dialogPopupClass } from "../../components/dialog-styles";

export function DeckPreviewModal({
  deckId,
  onClose,
  onImport,
  isImporting,
}: {
  deckId: Id<"userDecks"> | null;
  onClose: () => void;
  onImport: () => void;
  isImporting: boolean;
}) {
  return (
    <Dialog.Root
      open={!!deckId}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <Dialog.Portal>
        <Dialog.Backdrop className={dialogBackdropClass} />
        <Dialog.Popup className={cn(dialogPopupClass, "max-h-[80vh] sm:max-w-2xl")}>
          <Dialog.Title className="text-lg font-semibold">Deck Preview</Dialog.Title>
          {deckId && (
            <PreviewContent
              key={deckId}
              deckId={deckId}
              onClose={onClose}
              onImport={onImport}
              isImporting={isImporting}
            />
          )}
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function PreviewContent({
  deckId,
  onClose,
  onImport,
  isImporting,
}: {
  deckId: Id<"userDecks">;
  onClose: () => void;
  onImport: () => void;
  isImporting: boolean;
}) {
  const { data: vocab, isPending } = useQuery(
    convexQuery(api.api.sharing.getSharedDeckVocabItems, { deckId }),
  );
  const items = vocab ?? [];

  return (
    <>
      <div className="mt-4 max-h-[50vh] overflow-y-auto">
        {isPending && (
          <div className="flex justify-center py-8">
            <div className="h-6 w-6 animate-spin rounded-full border border-current border-t-transparent" />
          </div>
        )}

        {!isPending && items.length === 0 && (
          <div className="py-8 text-center">
            <p className="text-muted-foreground">This deck has no vocabulary items.</p>
          </div>
        )}

        {items.length > 0 && (
          <div className="space-y-2">
            <p className="mb-4 text-sm text-muted-foreground">
              {items.length} vocabulary item{items.length !== 1 ? "s" : ""}
            </p>
            {items.map((item, index) => (
              <div
                key={item._id}
                className={`rounded-lg border border-border/60 p-3 dark:border-card-foreground/50 ${
                  (index + 1) % 2 === 0 ? "bg-card/60" : "bg-card/50"
                }`}
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-sm text-muted-foreground">{index + 1}.</span>
                  <span
                    className="font-japanese text-lg font-bold"
                    dangerouslySetInnerHTML={{
                      __html: convertFuriganaToRubyHtml(item.furigana || item.word),
                    }}
                  />
                  <span className="text-sm text-muted-foreground italic">
                    {item.english.join(", ")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-6 flex gap-3">
        <button
          type="button"
          onClick={onClose}
          className="flex-1 cursor-pointer rounded-md border border-border/70 px-4 py-2 text-sm font-medium hover:bg-accent"
        >
          Close
        </button>
        <button
          type="button"
          onClick={onImport}
          disabled={isImporting || items.length === 0}
          className="flex flex-1 cursor-pointer items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isImporting ? (
            <div className="mr-2 h-4 w-4 animate-spin rounded-full border border-current border-t-transparent" />
          ) : (
            <Download className="mr-2 h-4 w-4" />
          )}
          Import Deck
        </button>
      </div>
    </>
  );
}
