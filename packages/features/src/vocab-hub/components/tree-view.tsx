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
      {/* Button semantics, not role="tree": tree roles promise Arrow/Home/End
          roving focus this flat Tab-order list doesn't implement. */}
      <div
        role={isSelectable ? "button" : undefined}
        aria-pressed={isSelectable ? isSelected : undefined}
        tabIndex={isSelectable ? 0 : undefined}
        className={`flex items-center rounded-sm px-2 py-1 text-xs ${
          isSelectable ? "cursor-pointer hover:bg-accent" : "cursor-default"
        } ${isSelected && isSelectable ? "bg-accent ring-1 ring-border" : ""}`}
        style={{ paddingLeft: `${level * 16 + 8}px` }}
        onClick={(e) => {
          e.stopPropagation();
          if (isSelectable) props.onSelect?.(node.id, node);
        }}
        onKeyDown={(e) => {
          if (e.key !== "Enter" && e.key !== " ") return;
          e.preventDefault();
          e.stopPropagation();
          if (isSelectable) props.onSelect?.(node.id, node);
        }}
      >
        {hasChildren ? (
          <button
            type="button"
            aria-label={isExpanded ? `Collapse ${node.label}` : `Expand ${node.label}`}
            aria-expanded={isExpanded}
            className="mr-1 flex h-4 w-4 items-center justify-center rounded-sm hover:bg-accent"
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

        {props.renderIcon?.(node, isExpanded)}

        {props.renderLabel ? (
          props.renderLabel(node, isSelected)
        ) : (
          <span className="flex-1 truncate">{node.label}</span>
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
