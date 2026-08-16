import { useAnimateIn } from "./use-animate-in";

export function StatCounter({
  value,
  label,
  delay,
}: {
  value: string;
  label: string;
  delay: number;
}) {
  const { ref, initialStyles } = useAnimateIn("down", { delay, duration: 700, threshold: 0.5 });

  return (
    <div ref={ref} className="text-center" style={initialStyles}>
      <div className="bg-linear-to-r from-(--landing-accent) to-(--landing-accent-end) bg-clip-text text-4xl font-bold text-transparent lg:text-5xl">
        {value}
      </div>
      <div className="mt-2 text-sm tracking-wider text-white/50 uppercase">{label}</div>
    </div>
  );
}
