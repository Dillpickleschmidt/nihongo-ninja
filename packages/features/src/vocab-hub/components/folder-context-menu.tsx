import { Dialog } from "@nn/ui/dialog";
import { PencilLine, Trash2 } from "@nn/ui/icons";
import { ContextMenu, MenuItem, MenuSeparator } from "@nn/ui/menu";
import { useState } from "react";

import { useVocab, type Folder, type FolderDeleteStrategy } from "../context";
import { useFolderTree } from "../hooks/use-folder-tree";
import { DeleteConfirmation } from "./delete-confirmation";
import { alertMutationError } from "./mutation-error";

export function FolderContextMenu({
  folder,
  href,
  children,
}: {
  folder: Folder;
  href: string;
  children: React.ReactNode;
}) {
  const { folders, decks, deleteFolder, setEditingFolder } = useVocab();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteStrategy, setDeleteStrategy] = useState<FolderDeleteStrategy>("move-up");
  const [isDeleting, setIsDeleting] = useState(false);

  const { folderContents } = useFolderTree({ folders, decks, item: folder });

  const canEdit = folder.source === "user";

  const handleDelete = async () => {
    if (isDeleting) return;
    setIsDeleting(true);
    try {
      await deleteFolder(folder.id, deleteStrategy);
      setShowDeleteConfirm(false);
    } catch (error) {
      alertMutationError("delete the folder")(error);
    } finally {
      setIsDeleting(false);
    }
  };

  const card = (
    <a
      href={href}
      className="block cursor-pointer rounded-lg border border-card-foreground/70 bg-card/60 p-4 shadow-sm backdrop-blur-sm transition-colors hover:bg-card/70 hover:shadow-md"
    >
      {children}
    </a>
  );

  if (!canEdit) return card;

  return (
    <>
      <ContextMenu content={card} popupClassName="w-48">
        <MenuItem
          icon={PencilLine}
          label="Edit folder"
          onSelect={() => {
            setEditingFolder(folder);
          }}
        />
        <MenuSeparator />
        <MenuItem
          destructive
          icon={Trash2}
          label="Delete folder"
          onSelect={() => {
            setShowDeleteConfirm(true);
          }}
        />
      </ContextMenu>

      <Dialog
        open={showDeleteConfirm}
        onOpenChange={(open) => {
          if (!open) setShowDeleteConfirm(false);
        }}
        title={`Delete ${folder.folderName}`}
        className="max-w-lg"
      >
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
      </Dialog>
    </>
  );
}
