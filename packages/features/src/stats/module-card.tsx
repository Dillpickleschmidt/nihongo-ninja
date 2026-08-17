import { formatModuleName } from "./format-module-name";

const TYPE_CONFIG: Record<string, { label: string; color: string }> = {
  "vocab-practice": { label: "Vocab", color: "147, 197, 253" },
  "sentence-practice": { label: "Sentences", color: "196, 181, 253" },
  "vocab-test": { label: "Test", color: "253, 186, 116" },
};

function getTypeConfig(type: string) {
  return TYPE_CONFIG[type] ?? { label: type, color: "255, 255, 255" };
}

function formatTime(ts: number) {
  return new Date(ts).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

export function ModuleCard({
  modulePath,
  moduleType,
  progressUnits,
  questionsAnswered,
  lastUpdatedAt,
}: {
  modulePath: string;
  moduleType: string;
  progressUnits: number;
  questionsAnswered: number;
  lastUpdatedAt: number;
}) {
  const config = getTypeConfig(moduleType);

  return (
    <div className="flex items-center gap-3 py-2.5">
      <div
        className="h-7 w-1 shrink-0 rounded-full"
        style={{ background: `rgb(${config.color})`, opacity: 0.4 }}
      />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm text-foreground/80">{formatModuleName(modulePath)}</p>
        <div className="mt-0.5 flex items-center gap-2.5">
          <span
            className="text-xs font-medium tracking-wider uppercase"
            style={{ color: `rgba(${config.color}, 0.6)` }}
          >
            {config.label}
          </span>
          <span className="text-xs text-muted-foreground/70">{formatTime(lastUpdatedAt)}</span>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-4">
        <div className="text-right">
          <span className="text-base font-semibold text-foreground/75 tabular-nums">
            {progressUnits}
          </span>
          <span className="ml-1 text-xs text-muted-foreground">XP</span>
        </div>
        <div className="text-right">
          <span className="text-base font-semibold text-foreground/75 tabular-nums">
            {questionsAnswered}
          </span>
          <span className="ml-1 text-xs text-muted-foreground">qs</span>
        </div>
      </div>
    </div>
  );
}
