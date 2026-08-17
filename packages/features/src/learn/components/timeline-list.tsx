import { cn } from "@nn/ui";
import { ChevronRight, type LucideIcon } from "lucide-react";

export function TimelineList({ children }: { children: React.ReactNode }) {
  return <ul className="relative ml-[7px] border-l-2 border-card-foreground/10">{children}</ul>;
}

export function TimelineItem({
  title,
  description,
  href,
  icon: Icon,
  iconClass,
  disabled,
  onSelect,
  className,
  dotClass,
  last,
}: {
  title: string;
  description?: string;
  href: string;
  icon: LucideIcon;
  iconClass?: string;
  disabled?: boolean;
  onSelect?: () => void;
  className?: string;
  dotClass?: string;
  last?: boolean;
}) {
  const content = (
    <>
      <div
        className={cn(
          "absolute top-1/2 left-[-7px] size-3 -translate-y-1/2 rounded-full border-2 bg-background transition-colors",
          "border-card-foreground/20 group-hover:border-dynamic-accent/50 group-hover:bg-dynamic-accent/50 dark:group-hover:border-white/50 dark:group-hover:bg-white/50",
          dotClass,
        )}
      />

      <div className="min-w-0 flex-1">
        <h3 className="flex items-center gap-1.5 text-sm leading-tight font-medium">
          {title}
          <Icon size={16} className={cn("shrink-0", iconClass)} />
        </h3>
        {description === undefined ? null : (
          <p className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">{description}</p>
        )}
      </div>

      <ChevronRight className="size-4 shrink-0 opacity-40 transition-all group-hover:translate-x-0.5 group-hover:opacity-70" />
    </>
  );

  const baseClasses = cn(
    "group flex items-center gap-3 rounded-lg py-2.5 pr-3 pl-6 transition-all duration-150",
    "text-foreground/75 hover:bg-accent hover:text-foreground dark:text-white/70 dark:hover:bg-white/5 dark:hover:text-white",
    "focus-visible:bg-accent focus-visible:outline-none dark:focus-visible:bg-white/10",
    disabled && "cursor-not-allowed opacity-50",
    className,
  );

  return (
    <li className={cn("relative", !last && "pb-1")}>
      {onSelect && !disabled ? (
        <button type="button" onClick={onSelect} className={cn(baseClasses, "w-full text-left")}>
          {content}
        </button>
      ) : (
        <a href={disabled ? undefined : href} className={baseClasses}>
          {content}
        </a>
      )}
    </li>
  );
}
