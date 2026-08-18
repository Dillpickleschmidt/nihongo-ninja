import { Popover } from "@base-ui/react/popover";
import { ChevronDown, Folder, House } from "lucide-react";
import { useState } from "react";

import { TreeView, type TreeNode } from "./tree-view";

export function LocationSelector({
  selectedFolderId,
  selectedFolderName,
  folderTreeNodes,
  editingType,
  onSelect,
}: {
  selectedFolderId: string;
  selectedFolderName: string;
  folderTreeNodes: TreeNode[];
  editingType: "deck" | "folder";
  onSelect: (folderId: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [tempSelectedFolderId, setTempSelectedFolderId] = useState("");
  const [expandedFolderIds, setExpandedFolderIds] = useState<Set<string>>(new Set());

  const handleOpenChange = (open: boolean) => {
    if (open) {
      setTempSelectedFolderId(selectedFolderId);

      if (selectedFolderId === "root") {
        setExpandedFolderIds(new Set(["root"]));
      } else {
        const expandPath = (
          targetId: string,
          nodes: TreeNode[],
          path: string[] = [],
        ): string[] | null => {
          for (const node of nodes) {
            if (node.id === targetId) return path;
            if (node.children) {
              const found = expandPath(targetId, node.children, [...path, node.id]);
              if (found !== null) return found;
            }
          }
          return null;
        };
        const pathToExpand = expandPath(selectedFolderId, folderTreeNodes);
        setExpandedFolderIds(new Set(["root", ...(pathToExpand || [])]));
      }
    }
    setIsOpen(open);
  };

  const handleToggleFolder = (id: string) => {
    setExpandedFolderIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleSelectTreeNode = (id: string, node: TreeNode) => {
    if (node.children && node.children.length > 0) handleToggleFolder(id);
    setTempSelectedFolderId(id);
  };

  const isSelectableNode = (node: TreeNode) =>
    editingType === "folder" ? node.id === "root" || node.data !== null : true;

  return (
    <Popover.Root open={isOpen} onOpenChange={handleOpenChange}>
      <Popover.Trigger className="flex h-10 w-full cursor-pointer items-center justify-start rounded-md border border-card-foreground/70 bg-background/50 px-3 text-sm font-normal backdrop-blur-sm hover:bg-accent/40">
        {selectedFolderId === "root" ? (
          <>
            <House className="mr-2 h-4 w-4" />
            Root
          </>
        ) : (
          <>
            <Folder className="mr-2 h-4 w-4" />
            {selectedFolderName}
          </>
        )}
        <ChevronDown className="ml-auto h-4 w-4" />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Positioner className="z-50" sideOffset={4}>
          <Popover.Popup className="w-80 rounded-md border border-white/10 bg-background/70 p-0 shadow-xl backdrop-blur-md">
            <div className="max-h-64 space-y-1 overflow-y-auto p-3">
              <TreeView
                nodes={[{ id: "root", label: "Root", children: folderTreeNodes, data: null }]}
                selectedId={tempSelectedFolderId}
                onSelect={handleSelectTreeNode}
                expandedIds={expandedFolderIds}
                onToggle={handleToggleFolder}
                isSelectable={isSelectableNode}
                renderIcon={(node) =>
                  node.id === "root" ? (
                    <House className="mr-2 h-4 w-4 shrink-0" />
                  ) : (
                    <Folder className="mr-2 h-4 w-4 shrink-0" />
                  )
                }
                renderLabel={(node, isSelected) => (
                  <span
                    className={`flex-1 truncate ${!isSelectableNode(node) ? "opacity-50" : ""} ${
                      isSelected && isSelectableNode(node) ? "font-medium" : ""
                    }`}
                  >
                    {node.label}
                  </span>
                )}
              />
            </div>

            <div className="flex justify-end gap-2 border-t border-card-foreground/70 bg-background/40 p-2 backdrop-blur-sm">
              <button
                type="button"
                onClick={() => {
                  setTempSelectedFolderId(selectedFolderId);
                  setIsOpen(false);
                }}
                className="h-8 cursor-pointer rounded-md border border-border/70 px-3 text-sm hover:bg-accent"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  onSelect(tempSelectedFolderId);
                  setIsOpen(false);
                }}
                disabled={tempSelectedFolderId === selectedFolderId}
                className="h-8 cursor-pointer rounded-md bg-primary px-3 text-sm text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50"
              >
                Select
              </button>
            </div>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}
