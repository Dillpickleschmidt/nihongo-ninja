import { Folder as FolderIcon } from "lucide-react";

import { useVocab, type Folder } from "../context";
import { buildFolderUrlPath } from "../utils/navigation";
import { FolderContextMenu } from "./folder-context-menu";

export function FolderCard({ folder }: { folder: Folder }) {
  const { folders } = useVocab();
  const folderPath = `/vocab/${buildFolderUrlPath(folder.id, folders)}`;

  return (
    <FolderContextMenu folder={folder} href={folderPath}>
      <FolderCardContent
        title={folder.folderName}
        subtitle={folder.source === "built-in" ? "Built-in" : undefined}
      />
    </FolderContextMenu>
  );
}

export function FolderCardContent({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="rounded-md border border-border/60 bg-muted/50 p-2 backdrop-blur-xs dark:border-card-foreground/70 dark:bg-muted/40">
        <FolderIcon className="h-5 w-5 text-muted-foreground" />
      </div>

      <div className="min-w-0 flex-1">
        <h4 className="truncate text-sm leading-tight font-medium">{title}</h4>
        {subtitle && <p className="mt-1 text-xs text-muted-foreground">{subtitle}</p>}
      </div>
    </div>
  );
}
