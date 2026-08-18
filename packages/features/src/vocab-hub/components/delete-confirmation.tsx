import type { Deck, Folder, FolderDeleteStrategy } from "../context";

type DeckDeleteConfirmationProps = {
  itemType: "deck";
  item: Deck;
  onCancel: () => void;
  onConfirm: () => void;
};

type FolderDeleteConfirmationProps = {
  itemType: "folder";
  item: Folder;
  folderContents?: { decks: number; folders: number };
  deleteStrategy: FolderDeleteStrategy;
  onStrategyChange: (strategy: FolderDeleteStrategy) => void;
  onCancel: () => void;
  onConfirm: () => void;
};

type DeleteConfirmationProps = DeckDeleteConfirmationProps | FolderDeleteConfirmationProps;

export function DeleteConfirmation(props: DeleteConfirmationProps) {
  return (
    <div className="space-y-4">
      {props.itemType === "deck" ? (
        <p className="text-sm">Delete "{props.item.deckName}"? This action cannot be undone.</p>
      ) : (
        <div className="space-y-4">
          <p>Delete "{props.item.folderName}"?</p>

          {props.folderContents &&
            (props.folderContents.decks > 0 || props.folderContents.folders > 0) && (
              <div className="rounded border border-card-foreground/70 bg-background/40 p-3 backdrop-blur-sm">
                <p className="text-sm">
                  This folder contains{" "}
                  <strong>
                    {props.folderContents.decks} deck
                    {props.folderContents.decks !== 1 ? "s" : ""}
                  </strong>
                  {props.folderContents.folders > 0 && (
                    <>
                      {" "}
                      and{" "}
                      <strong>
                        {props.folderContents.folders} subfolder
                        {props.folderContents.folders !== 1 ? "s" : ""}
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
                      checked={props.deleteStrategy === "move-up"}
                      onChange={() => {
                        props.onStrategyChange("move-up");
                      }}
                      className="accent-amber-500"
                    />
                    <span className="text-sm">Move items to parent folder</span>
                  </label>

                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="deleteStrategy"
                      checked={props.deleteStrategy === "delete-all"}
                      onChange={() => {
                        props.onStrategyChange("delete-all");
                      }}
                      className="accent-amber-500"
                    />
                    <span className="text-sm">Delete all items (cannot be undone)</span>
                  </label>
                </div>
              </div>
            )}
        </div>
      )}

      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={props.onCancel}
          className="cursor-pointer rounded-md border border-border/70 px-4 py-2 text-sm font-medium hover:bg-accent"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={props.onConfirm}
          className="cursor-pointer rounded-md bg-destructive px-4 py-2 text-sm font-medium text-white hover:bg-destructive/90"
        >
          Delete {props.itemType === "deck" ? "Deck" : "Folder"}
        </button>
      </div>
    </div>
  );
}
