import { cn } from "@nn/ui";
import { List, Rows3 } from "lucide-react";

export type LearnViewMode = "grid" | "compact";

export function ViewToggle({
  selectedView,
  setSelectedView,
}: {
  selectedView: LearnViewMode;
  setSelectedView: (view: LearnViewMode) => void;
}) {
  const label = selectedView === "compact" ? "By Category" : "Chronological";

  const buttonClass = (view: LearnViewMode) =>
    cn(
      "flex h-6 items-center rounded-md px-2 transition-colors",
      selectedView === view ? "bg-accent dark:bg-card-foreground/70" : "hover:bg-accent/50",
    );

  return (
    <div className="flex items-center gap-2 font-excalifont">
      <span className="text-sm text-muted-foreground dark:text-white/40">{label}</span>
      <div className="flex h-8 items-center justify-end gap-1">
        <button
          type="button"
          aria-label="Chronological view"
          aria-pressed={selectedView === "grid"}
          className={buttonClass("grid")}
          onClick={() => {
            setSelectedView("grid");
          }}
        >
          <Rows3 className="h-4 w-4" />
        </button>
        <button
          type="button"
          aria-label="Categorized view"
          aria-pressed={selectedView === "compact"}
          className={buttonClass("compact")}
          onClick={() => {
            setSelectedView("compact");
          }}
        >
          <List className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
