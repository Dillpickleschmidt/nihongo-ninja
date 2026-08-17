// Interpolate red → yellow → green as progress moves 0 → 100.
export function getProgressColor(progress: number) {
  const p = Math.max(0, Math.min(100, progress));
  const red = [239, 68, 68] as const;
  const yellow = [234, 179, 8] as const;
  const green = [34, 197, 94] as const;

  const [from, to, ratio] =
    p <= 50 ? ([red, yellow, p / 50] as const) : ([yellow, green, (p - 50) / 50] as const);

  const channel = (i: 0 | 1 | 2) => Math.round(from[i] + (to[i] - from[i]) * ratio);
  return `rgb(${channel(0)}, ${channel(1)}, ${channel(2)})`;
}

export function ProgressRing({
  progress,
  size = 140,
  strokeWidth = 5,
}: {
  progress: number;
  size?: number;
  strokeWidth?: number;
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - Math.min(100, progress) / 100);
  const center = size / 2;

  return (
    <div className="relative inline-flex shrink-0 items-center justify-center">
      <svg className="-rotate-90" width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          stroke="currentColor"
          className="text-muted/80 dark:text-white/6"
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          stroke={getProgressColor(progress)}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-700 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span
          className="text-3xl font-bold tracking-tight tabular-nums"
          style={{ color: getProgressColor(progress) }}
        >
          {progress >= 100 ? "百" : `${progress}%`}
        </span>
      </div>
    </div>
  );
}
