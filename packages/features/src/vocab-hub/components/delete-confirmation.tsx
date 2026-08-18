import type { Folder, FolderDeleteStrategy } from "../context";

// Deck deletion confirms with window.confirm in DeckCard; only folders need
// the strategy choice this component provides.
export function DeleteConfirmation({
  item,
  folderContents,
  deleteStrategy,
  onStrategyChange,
  onCancel,
  onConfirm,
}: {
  item: Folder;
  folderContents?: { decks: number; folders: number };
  deleteStrategy: FolderDeleteStrategy;
  onStrategyChange: (strategy: FolderDeleteStrategy) => void;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  return (
    <div className="space-y-4">
      <div className="space-y-4">
        <p>Delete "{item.folderName}"?</p>

        {folderContents && (folderContents.decks > 0 || folderContents.folders > 0) && (
          <div className="rounded border border-card-foreground/70 bg-background/40 p-3 backdrop-blur-sm">
            <p className="text-sm">
              This folder contains{" "}
              <strong>
                {folderContents.decks} deck
                {folderContents.decks !== 1 ? "s" : ""}
              </strong>
              {folderContents.folders > 0 && (
                <>
                  {" "}
                  and{" "}
                  <strong>
                    {folderContents.folders} subfolder
                    {folderContents.folders !== 1 ? "s" : ""}
                  </strong>
                </>
              )}
              . What should happen to them?
            </p>

            <div className="mt-3 space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="deleteStrategy"
                  checked={deleteStrategy === "move-up"}
                  onChange={() => {
                    onStrategyChange("move-up");
                  }}
                  className="accent-amber-500"
                />
                <span className="text-sm">Move items to parent folder</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="deleteStrategy"
                  checked={deleteStrategy === "delete-all"}
                  onChange={() => {
                    onStrategyChange("delete-all");
                  }}
                  className="accent-amber-500"
                />
                <span className="text-sm">Delete all items (cannot be undone)</span>
              </label>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onCancel}
          className="cursor-pointer rounded-md border border-border/70 px-4 py-2 text-sm font-medium hover:bg-accent"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={onConfirm}
          className="cursor-pointer rounded-md bg-destructive px-4 py-2 text-sm font-medium text-white hover:bg-destructive/90"
        >
          Delete Folder
        </button>
      </div>
    </div>
  );
}
