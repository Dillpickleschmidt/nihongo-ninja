import { Collapsible } from "@base-ui/react/collapsible";
import { cn } from "@nn/ui";
import { ChevronRight, type LucideIcon } from "lucide-react";

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
  icon?: LucideIcon;
  isExpanded: boolean;
  onToggle: () => void;
  depth?: number;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Collapsible.Root open={isExpanded} onOpenChange={onToggle} className={cn("w-full", className)}>
      <Collapsible.Trigger
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
      </Collapsible.Trigger>
      <Collapsible.Panel className="pl-4">{children}</Collapsible.Panel>
    </Collapsible.Root>
  );
}
