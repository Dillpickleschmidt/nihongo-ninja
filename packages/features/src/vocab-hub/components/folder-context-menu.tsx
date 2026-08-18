import { ContextMenu } from "@base-ui/react/context-menu";
import { Dialog } from "@base-ui/react/dialog";
import { cn } from "@nn/ui";
import { PencilLine, Trash2 } from "lucide-react";
import { useState } from "react";

import { useVocab, type Folder, type FolderDeleteStrategy } from "../context";
import { useFolderTree } from "../hooks/use-folder-tree";
import { DeleteConfirmation } from "./delete-confirmation";
import { dialogBackdropClass, dialogPopupClass } from "./dialog-styles";
import {
  destructiveMenuItemClass,
  menuItemClass,
  menuPopupClass,
  menuSeparatorClass,
} from "./menu-styles";

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

  const { folderContents } = useFolderTree({ folders, decks, item: folder });

  const canEdit = folder.source === "user";

  const handleDelete = async () => {
    await deleteFolder(folder.id, deleteStrategy);
    setShowDeleteConfirm(false);
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
      <ContextMenu.Root>
        <ContextMenu.Trigger render={<div />}>{card}</ContextMenu.Trigger>

        <ContextMenu.Portal>
          <ContextMenu.Positioner className="z-50">
            <ContextMenu.Popup className={cn(menuPopupClass, "w-48")}>
              <ContextMenu.Item
                className={menuItemClass}
                onClick={() => {
                  setEditingFolder(folder);
                }}
              >
                <PencilLine className="mr-2 h-3 w-3" />
                Edit folder
              </ContextMenu.Item>

              <ContextMenu.Separator className={menuSeparatorClass} />

              <ContextMenu.Item
                className={cn(menuItemClass, destructiveMenuItemClass)}
                onClick={() => {
                  setShowDeleteConfirm(true);
                }}
              >
                <Trash2 className="mr-2 h-3 w-3" />
                Delete folder
              </ContextMenu.Item>
            </ContextMenu.Popup>
          </ContextMenu.Positioner>
        </ContextMenu.Portal>
      </ContextMenu.Root>

      <Dialog.Root
        open={showDeleteConfirm}
        onOpenChange={(open) => {
          if (!open) setShowDeleteConfirm(false);
        }}
      >
        <Dialog.Portal>
          <Dialog.Backdrop className={dialogBackdropClass} />
          <Dialog.Popup className={cn(dialogPopupClass, "max-w-lg")}>
            <Dialog.Title className="text-lg font-semibold">
              Delete {folder.folderName}
            </Dialog.Title>
            <div className="mt-4">
              <DeleteConfirmation
                item={folder}
                itemType="folder"
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
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
