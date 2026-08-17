type ChipColor = "indigo" | "purple" | "sky" | "neutral";

const PALETTE: Record<ChipColor, { selected: string; idle: string }> = {
  indigo: {
    selected: "border-indigo-500/40 bg-indigo-500/20 text-indigo-300",
    idle: "border-indigo-500/30 bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20",
  },
  purple: {
    selected: "border-purple-500/40 bg-purple-500/20 text-purple-300",
    idle: "border-purple-500/30 bg-purple-500/10 text-purple-300 hover:bg-purple-500/20",
  },
  sky: {
    selected: "border-sky-500/40 bg-sky-500/20 text-sky-300",
    idle: "border-sky-500/30 bg-sky-500/10 text-sky-300 hover:bg-sky-500/20",
  },
  neutral: {
    selected: "border-neutral-500/40 bg-neutral-500/20 text-neutral-300",
    idle: "border-neutral-500/30 bg-neutral-500/10 text-neutral-300 hover:bg-neutral-500/20",
  },
};

export function Chip({
  label,
  color,
  selected,
  onClick,
}: {
  label: string;
  color: ChipColor;
  selected?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      className={`inline-flex cursor-pointer items-center rounded-full border px-2 py-0.5 text-xs font-semibold transition ${selected ? PALETTE[color].selected : PALETTE[color].idle}`}
      onClick={onClick}
      title={selected ? "Clear selection" : "Select"}
    >
      {label}
    </button>
  );
}
