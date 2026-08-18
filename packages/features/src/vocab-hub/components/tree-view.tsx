import { ChevronDown, ChevronRight } from "lucide-react";

export interface TreeNode {
  id: string;
  label: string;
  children?: TreeNode[];
  data?: unknown;
}

export interface TreeViewProps {
  nodes: TreeNode[];
  selectedId?: string;
  onSelect?: (id: string, node: TreeNode) => void;
  expandedIds?: Set<string>;
  onToggle?: (id: string) => void;
  level?: number;
  className?: string;
  renderIcon?: (node: TreeNode, isExpanded: boolean) => React.ReactNode;
  renderLabel?: (node: TreeNode, isSelected: boolean) => React.ReactNode;
  isSelectable?: (node: TreeNode) => boolean;
}

function TreeViewNode(props: TreeViewProps & { node: TreeNode }) {
  const { node } = props;
  const hasChildren = !!node.children && node.children.length > 0;
  const isExpanded = props.expandedIds?.has(node.id) ?? false;
  const isSelected = props.selectedId === node.id;
  const isSelectable = props.isSelectable?.(node) ?? true;
  const level = props.level ?? 0;

  return (
    <div>
      {/* Not role="tree" (would promise Arrow/Home/End roving focus this flat
          Tab-order list doesn't implement); the row stays non-interactive so
          the select and expand buttons are siblings, never nested controls. */}
      <div
        className={`flex items-center rounded-sm px-2 py-1 text-xs ${
          isSelected && isSelectable ? "bg-accent ring-1 ring-border" : ""
        } ${isSelectable ? "hover:bg-accent" : ""}`}
        style={{ paddingLeft: `${level * 16 + 8}px` }}
      >
        {hasChildren ? (
          <button
            type="button"
            aria-label={isExpanded ? `Collapse ${node.label}` : `Expand ${node.label}`}
            aria-expanded={isExpanded}
            className="mr-1 flex h-4 w-4 cursor-pointer items-center justify-center rounded-sm hover:bg-accent"
            onClick={(e) => {
              e.stopPropagation();
              props.onToggle?.(node.id);
            }}
          >
            {isExpanded ? (
              <ChevronDown className="h-3 w-3" />
            ) : (
              <ChevronRight className="h-3 w-3" />
            )}
          </button>
        ) : (
          <div className="mr-1 h-4 w-4" />
        )}

        {isSelectable ? (
          <button
            type="button"
            aria-pressed={isSelected}
            className="flex min-w-0 flex-1 cursor-pointer items-center text-left"
            onClick={(e) => {
              e.stopPropagation();
              props.onSelect?.(node.id, node);
            }}
          >
            {props.renderIcon?.(node, isExpanded)}
            {props.renderLabel ? (
              props.renderLabel(node, isSelected)
            ) : (
              <span className="flex-1 truncate">{node.label}</span>
            )}
          </button>
        ) : (
          <>
            {props.renderIcon?.(node, isExpanded)}
            {props.renderLabel ? (
              props.renderLabel(node, isSelected)
            ) : (
              <span className="flex-1 truncate">{node.label}</span>
            )}
          </>
        )}
      </div>

      {hasChildren && isExpanded && (
        <TreeView
          nodes={node.children ?? []}
          selectedId={props.selectedId}
          onSelect={props.onSelect}
          expandedIds={props.expandedIds}
          onToggle={props.onToggle}
          level={level + 1}
          renderIcon={props.renderIcon}
          renderLabel={props.renderLabel}
          isSelectable={props.isSelectable}
        />
      )}
    </div>
  );
}

export function TreeView(props: TreeViewProps) {
  return (
    <div className={props.className}>
      {props.nodes.map((node) => (
        <TreeViewNode key={node.id} {...props} node={node} />
      ))}
    </div>
  );
}
