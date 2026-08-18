import { cn } from "@nn/ui";
import { Dialog } from "@nn/ui/dialog";
import { Check, SquarePen, Trash2, X } from "lucide-react";
import { useRef, useState } from "react";

import { useVocab, type Folder, type FolderDeleteStrategy } from "../context";
import { useFolderTree } from "../hooks/use-folder-tree";
import { NAME_MAX_LENGTH } from "../validation/constants";
import {
  FolderNameSchema,
  validateFolderNameUnique,
  validateNoCircularReference,
} from "../validation/deck-folder-validation";
import { DeleteConfirmation } from "./delete-confirmation";
import { LocationSelector } from "./location-selector";
import { confirmAction } from "./web-dialogs";

export function FolderEditModal() {
  const { editingFolder, setEditingFolder } = useVocab();

  return (
    <Dialog
      open={!!editingFolder}
      onOpenChange={(open) => {
        if (!open) setEditingFolder(null);
      }}
      title={editingFolder ? `Edit ${editingFolder.folderName}` : ""}
      className="max-w-lg"
    >
      {editingFolder && (
        <FolderEditForm
          key={editingFolder.id}
          folder={editingFolder}
          onClose={() => {
            setEditingFolder(null);
          }}
        />
      )}
    </Dialog>
  );
}

function FolderEditForm({ folder, onClose }: { folder: Folder; onClose: () => void }) {
  const { folders, decks, updateFolder, deleteFolder } = useVocab();
  const nameInputRef = useRef<HTMLInputElement>(null);

  const [name, setName] = useState(folder.folderName);
  const [selectedFolderId, setSelectedFolderId] = useState(folder.parentFolderId || "root");
  const [deleteStrategy, setDeleteStrategy] = useState<FolderDeleteStrategy>("move-up");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);
  const [showValidation, setShowValidation] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  const userFolders = folders.filter((f) => f.source === "user");

  const { folderTreeNodes, folderContents } = useFolderTree({ folders, decks, item: folder });

  const targetParentId = selectedFolderId === "root" ? undefined : selectedFolderId;
  const trimmedName = name.trim();

  const nameValidation = (() => {
    const schemaResult = FolderNameSchema.safeParse(trimmedName);
    if (!schemaResult.success) {
      return { isValid: false, error: schemaResult.error.issues[0]?.message ?? "Invalid name" };
    }

    const uniqueResult = validateFolderNameUnique(
      trimmedName,
      userFolders,
      targetParentId,
      folder.id,
    );
    if (!uniqueResult.isValid) return uniqueResult;

    if (targetParentId && targetParentId !== folder.parentFolderId) {
      const circularResult = validateNoCircularReference(folder.id, targetParentId, userFolders);
      if (!circularResult.isValid) return circularResult;
    }

    return { isValid: true, error: "" };
  })();

  const hasChanges =
    trimmedName !== folder.folderName || targetParentId !== (folder.parentFolderId ?? undefined);

  const canSave = nameValidation.isValid && hasChanges;

  const selectedFolderName =
    selectedFolderId === "root"
      ? "Root"
      : (folders.find((f) => f.id === selectedFolderId)?.folderName ?? "Unknown");

  const handleSave = async () => {
    if (isEditingName) {
      const shouldApply = confirmAction(
        "You have unsaved name changes! Would you like to apply them?",
      );
      if (!shouldApply) return;
      setIsEditingName(false);
    }

    setShowValidation(true);
    if (!canSave) return;

    const updates: { folderName?: string; parentFolderId?: string | null } = {};
    if (trimmedName !== folder.folderName) updates.folderName = trimmedName;
    const nextParentId = selectedFolderId === "root" ? null : selectedFolderId;
    if (nextParentId !== (folder.parentFolderId ?? null)) updates.parentFolderId = nextParentId;

    setSaveError(null);
    try {
      await updateFolder(folder.id, updates);
      onClose();
    } catch (error) {
      console.error("Failed to update folder:", error);
      setSaveError("Failed to save changes. Please try again.");
    }
  };

  const handleDelete = async () => {
    setSaveError(null);
    try {
      await deleteFolder(folder.id, deleteStrategy);
      onClose();
    } catch (error) {
      console.error("Failed to delete folder:", error);
      setSaveError("Failed to delete the folder. Please try again.");
    }
  };

  return (
    <div>
      {saveError && (
        <p className="mt-3 rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive">
          {saveError}
        </p>
      )}

      {showDeleteConfirm ? (
        <div className="mt-4">
          <DeleteConfirmation
            item={folder}
            folderContents={folderContents}
            deleteStrategy={deleteStrategy}
            onStrategyChange={setDeleteStrategy}
            onCancel={() => {
              setShowDeleteConfirm(false);
            }}
            onConfirm={() => {
              void handleDelete();
            }}
          />
        </div>
      ) : (
        <>
          <div className="mt-4 space-y-6">
            <div>
              <label htmlFor="folder-edit-name" className="mb-1 block text-sm font-medium">
                Name
              </label>
              <div className="relative">
                <input
                  id="folder-edit-name"
                  ref={nameInputRef}
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.currentTarget.value);
                  }}
                  onBlur={() => {
                    setShowValidation(true);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && isEditingName) setIsEditingName(false);
                  }}
                  placeholder="Folder name"
                  maxLength={NAME_MAX_LENGTH}
                  disabled={!isEditingName}
                  className={cn(
                    "h-10 w-full rounded-md border border-border bg-transparent px-3 pr-12 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-amber-500 dark:border-card-foreground",
                    !isEditingName && "cursor-default bg-muted/50",
                  )}
                />
                <div className="absolute top-1/2 right-2 flex -translate-y-1/2 gap-1">
                  {!isEditingName ? (
                    <button
                      type="button"
                      aria-label="Edit name"
                      className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-md hover:bg-accent"
                      onClick={() => {
                        setIsEditingName(true);
                        setTimeout(() => nameInputRef.current?.focus(), 0);
                      }}
                    >
                      <SquarePen className="h-3 w-3" />
                    </button>
                  ) : (
                    <>
                      <button
                        type="button"
                        aria-label="Apply name"
                        className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-md hover:text-green-500 focus-visible:text-green-500"
                        onClick={() => {
                          setIsEditingName(false);
                        }}
                      >
                        <Check className="h-3 w-3" />
                      </button>
                      <button
                        type="button"
                        aria-label="Discard name changes"
                        className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-md hover:text-red-500 focus-visible:text-red-500"
                        onClick={() => {
                          setName(folder.folderName);
                          setIsEditingName(false);
                        }}
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </>
                  )}
                </div>
              </div>
              {showValidation && !nameValidation.isValid && (
                <p className="mt-1 text-sm text-red-500">{nameValidation.error}</p>
              )}
            </div>

            <div className="space-y-3">
              <span className="block text-sm font-medium text-foreground">Location</span>
              <div className="space-y-3 rounded-lg border border-card-foreground/70 bg-muted/20 p-3 backdrop-blur-sm">
                <LocationSelector
                  selectedFolderId={selectedFolderId}
                  selectedFolderName={selectedFolderName}
                  folderTreeNodes={folderTreeNodes}
                  editingType="folder"
                  onSelect={setSelectedFolderId}
                />
              </div>
            </div>

            <div className="border-t border-card-foreground/70 pt-6">
              <div className="rounded-lg border border-destructive/30 bg-destructive/10 p-4 backdrop-blur-xs">
                <div className="mb-3 flex items-center gap-3">
                  <Trash2 className="h-5 w-5 shrink-0 text-destructive" />
                  <div>
                    <h4 className="text-sm font-medium text-foreground">Delete Folder</h4>
                    <p className="mt-1 text-xs text-muted-foreground">
                      This action cannot be undone
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setShowDeleteConfirm(true);
                  }}
                  className="w-full cursor-pointer rounded-md bg-destructive px-4 py-2 text-sm font-medium text-white hover:bg-destructive/90"
                >
                  Delete Folder
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 cursor-pointer rounded-md border border-border/70 px-4 py-2 text-sm font-medium hover:bg-accent"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => {
                void handleSave();
              }}
              disabled={!canSave}
              className="flex-1 cursor-pointer rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50"
            >
              Save Changes
            </button>
          </div>
        </>
      )}
    </div>
  );
}
