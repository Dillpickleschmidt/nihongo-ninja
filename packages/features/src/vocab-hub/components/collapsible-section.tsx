import { cn, Collapsible, CollapsiblePanel, CollapsibleTrigger } from "@nn/ui";
import { ChevronRight } from "@nn/ui/icons";
import type { MenuIcon } from "@nn/ui/menu";

export function CollapsibleSection({
  title,
  icon: Icon,
  isExpanded,
  onToggle,
  depth,
  className,
  children,
}: {
  title: string;
  icon?: MenuIcon;
  isExpanded: boolean;
  onToggle: () => void;
  depth?: number;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Collapsible open={isExpanded} onOpenChange={onToggle} className={cn("w-full", className)}>
      <CollapsibleTrigger
        className={cn(
          "inline-flex w-full cursor-pointer items-center justify-start gap-2 rounded-md text-sm font-medium transition-colors",
          "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none",
          "hover:bg-accent hover:text-accent-foreground",
          "px-2 py-1.5",
          depth && depth > 0 && "pl-4",
        )}
      >
        <ChevronRight
          className={cn(
            "h-4 w-4 shrink-0 transition-transform duration-200",
            isExpanded && "rotate-90",
          )}
        />
        {Icon && <Icon className="h-4 w-4 shrink-0" />}
        <span className="truncate text-xs">{title}</span>
      </CollapsibleTrigger>
      <CollapsiblePanel className="pl-4">{children}</CollapsiblePanel>
    </Collapsible>
  );
}
