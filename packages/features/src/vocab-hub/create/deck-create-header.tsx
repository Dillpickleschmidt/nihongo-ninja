import { Dialog } from "@nn/ui/dialog";
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
          <button
            type="button"
            className="cursor-pointer rounded-md px-3 py-1.5 text-sm hover:bg-accent"
            onClick={() => {
              setConfirmClearOpen(true);
            }}
          >
            Clear
          </button>
          <Dialog
            open={confirmClearOpen}
            onOpenChange={setConfirmClearOpen}
            title="Clear draft?"
            description="This removes all fields and vocabulary items."
          >
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
          </Dialog>
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
