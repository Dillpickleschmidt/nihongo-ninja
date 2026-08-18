import { Link, usePathname } from "@nn/router";
import { cn } from "@nn/ui";
import { Plus, Search } from "lucide-react";

function CardDeckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 7h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5" />
      <path d="M3 5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3" />
      <rect x="1" y="3" width="16" height="12" rx="2" />
      <line x1="4" y1="7" x2="12" y2="7" />
      <line x1="4" y1="10" x2="10" y2="10" />
    </svg>
  );
}

const ITEM_CLASSES = (active: boolean) =>
  cn(
    "flex h-8 cursor-pointer items-center gap-2 rounded-md px-3 text-sm font-medium transition-all duration-200",
    active
      ? "bg-card font-medium text-foreground shadow backdrop-blur-sm dark:bg-background/70"
      : "text-muted-foreground hover:bg-background/50 hover:text-foreground",
  );

export function CenterNavBar() {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-10 flex items-center justify-center px-4 py-3">
      <div className="flex rounded-[10px] border border-border/70 bg-background/70 p-1 shadow-md backdrop-blur-md dark:border-card-foreground/70 dark:bg-background/50">
        <Link
          href="/vocab"
          className={ITEM_CLASSES(pathname === "/vocab" || pathname === "/vocab/")}
        >
          <CardDeckIcon className="h-3.5 w-3.5" />
          <span className="text-xs">Vocab Cards</span>
        </Link>
        <Link href="/vocab/create" className={ITEM_CLASSES(pathname.startsWith("/vocab/create"))}>
          <Plus className="h-3.5 w-3.5" />
          <span className="text-xs">Create Decks</span>
        </Link>
        {/* Plain anchor until the browse page ports — keeps the typed Href
            union honest. */}
        <a href="/vocab/browse" className={ITEM_CLASSES(pathname.startsWith("/vocab/browse"))}>
          <Search className="h-3.5 w-3.5" />
          <span className="text-xs">Browse Decks</span>
        </a>
      </div>
    </div>
  );
}
