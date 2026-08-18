import { Dialog } from "@base-ui/react/dialog";
import { useState } from "react";

import { useDeckCreationStore } from "./store";

// The source's Import CSV/JSON menu items were no-op stubs; dropped.
export function DeckCreateHeader({
  onClear,
  onSave,
  isSaving,
}: {
  onClear: () => void;
  onSave: () => void;
  isSaving?: boolean;
}) {
  const [confirmClearOpen, setConfirmClearOpen] = useState(false);
  const { actions } = useDeckCreationStore();
  const isEditMode = actions.isEditMode();

  return (
    <div className="-mx-2 rounded-lg border border-border/60 bg-background/60 p-4 backdrop-blur-md dark:border-card-foreground/70 dark:bg-background/40">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl leading-tight font-semibold">
            {isEditMode ? "Edit Custom Deck" : "Create a Custom Deck"}
          </h1>
          <p className="text-sm text-muted-foreground">
            Build vocabulary with translations, examples, and more.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Dialog.Root open={confirmClearOpen} onOpenChange={setConfirmClearOpen}>
            <Dialog.Trigger className="cursor-pointer rounded-md px-3 py-1.5 text-sm hover:bg-accent">
              Clear
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Backdrop className="fixed inset-0 z-50 bg-black/55 transition-opacity data-ending-style:opacity-0 data-starting-style:opacity-0" />
              <Dialog.Popup className="fixed top-1/2 left-1/2 z-50 w-full max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-xl border border-border/70 bg-card p-6 transition-all outline-none data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0 dark:border-white/10 dark:bg-[#121212]">
                <Dialog.Title className="text-lg font-semibold">Clear draft?</Dialog.Title>
                <Dialog.Description className="mt-1 text-sm text-muted-foreground">
                  This removes all fields and vocabulary items.
                </Dialog.Description>
                <div className="mt-4 flex justify-end gap-2">
                  <button
                    type="button"
                    className="cursor-pointer rounded-md px-3 py-1.5 text-sm hover:bg-accent"
                    onClick={() => {
                      setConfirmClearOpen(false);
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="cursor-pointer rounded-md bg-destructive px-3 py-1.5 text-sm text-white hover:bg-destructive/90"
                    onClick={() => {
                      onClear();
                      setConfirmClearOpen(false);
                    }}
                  >
                    Clear
                  </button>
                </div>
              </Dialog.Popup>
            </Dialog.Portal>
          </Dialog.Root>
          <button
            type="button"
            className="cursor-pointer rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50"
            onClick={onSave}
            disabled={isSaving}
          >
            {isSaving ? "Saving..." : isEditMode ? "Save Changes" : "Save Deck"}
          </button>
        </div>
      </div>
    </div>
  );
}
