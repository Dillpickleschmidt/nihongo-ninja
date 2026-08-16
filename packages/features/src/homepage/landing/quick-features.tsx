import { QUICK_FEATURES } from "./features-data";
import { useAnimateIn } from "./use-animate-in";

function QuickFeatureCard({
  icon,
  title,
  desc,
  index,
}: {
  icon: string;
  title: string;
  desc: string;
  index: number;
}) {
  const { ref, initialStyles } = useAnimateIn("down", { delay: 200 + index * 100, duration: 500 });

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-(--landing-accent)/20 hover:bg-white/[0.04]"
      style={initialStyles}
    >
      <div className="mb-4 font-japanese text-4xl text-(--landing-accent)/80 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="mb-1 font-semibold text-white">{title}</h3>
      <p className="text-sm text-white/50">{desc}</p>
    </div>
  );
}

export function QuickFeatures() {
  return (
    <section className="relative pt-14 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {QUICK_FEATURES.map((feature, i) => (
            <QuickFeatureCard key={feature.title} {...feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
