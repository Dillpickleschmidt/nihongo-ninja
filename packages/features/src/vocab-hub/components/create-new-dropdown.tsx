import { usePathname } from "@nn/router";
import { Text } from "@nn/ui";
import { FileText, Folder, Plus } from "@nn/ui/icons";
import { DropdownMenu, MenuItem, MenuLink } from "@nn/ui/menu";

import { useVocab } from "../context";
import { resolveFolderFromPath } from "../utils/navigation";
import { alertMutationError } from "./mutation-error";
import { promptText } from "./web-dialogs";

export function CreateNewDropdown() {
  const { folders, createFolder } = useVocab();
  const pathname = usePathname();

  // New folders land in the user folder currently being viewed; anywhere
  // else (dashboard, built-in folders) they land at root. The source app
  // could only create at root, which made nesting unreachable.
  const segments = (pathname ?? "").split("/").filter(Boolean).slice(1);
  const currentFolder = resolveFolderFromPath(segments, folders);
  const parentId = currentFolder?.source === "user" ? currentFolder.id : undefined;

  const handleCreateFolder = () => {
    const name = promptText("Enter folder name:");
    if (name && name.trim()) {
      createFolder(name.trim(), parentId).catch(alertMutationError("create the folder"));
    }
  };

  return (
    <DropdownMenu
      trigger={
        <>
          <Plus className="h-4 w-4 text-muted-foreground" />
          <Text className="text-sm font-medium text-muted-foreground">Create New</Text>
        </>
      }
      triggerClassName="w-full cursor-pointer flex-row items-center justify-center gap-2 rounded-md border border-border/70 py-2 transition-colors hover:bg-accent dark:border-card-foreground/70"
      popupClassName="w-48"
    >
      <MenuLink icon={FileText} label="New Deck" href="/vocab/create" />
      <MenuItem
        icon={Folder}
        label={
          currentFolder?.source === "user"
            ? `New Folder in ${currentFolder.folderName}`
            : "New Folder"
        }
        onSelect={handleCreateFolder}
      />
    </DropdownMenu>
  );
}
