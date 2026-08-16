import { cn } from "@nn/ui";

export function FloatingKanji({ char, className }: { char: string; className?: string }) {
  return (
    <span
      className={cn(
        "pointer-events-none absolute font-japanese text-[12rem] font-bold text-white/[0.02] select-none",
        className,
      )}
    >
      {char}
    </span>
  );
}
