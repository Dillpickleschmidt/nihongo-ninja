import { Menu } from "@base-ui/react/menu";
import { usePathname } from "@nn/router";
import { cn } from "@nn/ui";
import { FileText, Folder, Plus } from "lucide-react";

import { useVocab } from "../context";
import { resolveFolderFromPath } from "../utils/navigation";
import { menuItemClass, menuPopupClass } from "./menu-styles";
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
    <Menu.Root>
      <Menu.Trigger className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-md border border-border/70 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground dark:border-card-foreground/70">
        <Plus className="h-4 w-4" />
        Create New
      </Menu.Trigger>
      <Menu.Portal>
        <Menu.Positioner className="z-50" sideOffset={4}>
          <Menu.Popup className={cn(menuPopupClass, "w-48")}>
            <Menu.LinkItem href="/vocab/create" className={menuItemClass}>
              <FileText className="mr-2 h-4 w-4" />
              New Deck
            </Menu.LinkItem>
            <Menu.Item className={menuItemClass} onClick={handleCreateFolder}>
              <Folder className="mr-2 h-4 w-4" />
              {currentFolder?.source === "user"
                ? `New Folder in ${currentFolder.folderName}`
                : "New Folder"}
            </Menu.Item>
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
}
