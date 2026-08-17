import { formatModuleName } from "./format-module-name";

const TYPE_COLORS: Record<string, string> = {
  "vocab-practice": "147, 197, 253",
  "sentence-practice": "196, 181, 253",
  "vocab-test": "253, 186, 116",
};

function formatRelativeTime(ts: number) {
  const diff = Date.now() - ts;
  const minutes = Math.floor(diff / 60000);
  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

export function ActivityItem({
  modulePath,
  moduleType,
  progressUnits,
  lastUpdatedAt,
}: {
  modulePath: string;
  moduleType: string;
  progressUnits: number;
  questionsAnswered: number;
  lastUpdatedAt: number;
}) {
  const color = TYPE_COLORS[moduleType] ?? "255, 255, 255";

  return (
    <div className="flex items-center gap-2.5 py-1.5">
      <div
        className="h-2 w-2 shrink-0 rounded-full"
        style={{ background: `rgb(${color})`, opacity: 0.5 }}
      />
      <span className="flex-1 truncate text-sm text-foreground/70">
        {formatModuleName(modulePath)}
      </span>
      <span className="shrink-0 text-xs text-muted-foreground tabular-nums">
        {progressUnits} XP
      </span>
      <span className="w-16 shrink-0 text-right text-xs text-muted-foreground/70 tabular-nums">
        {formatRelativeTime(lastUpdatedAt)}
      </span>
    </div>
  );
}
