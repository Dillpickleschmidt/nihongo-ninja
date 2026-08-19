import { Slider as BaseSlider } from "@base-ui/react/slider";

import type { SliderProps } from "./slider-types";

export function Slider({
  value,
  onValueChange,
  min,
  max,
  step = 1,
  label,
  className,
}: SliderProps) {
  return (
    <BaseSlider.Root
      value={value}
      onValueChange={(next) => {
        onValueChange(Array.isArray(next) ? (next[0] ?? min) : next);
      }}
      min={min}
      max={max}
      step={step}
      className={className}
    >
      <BaseSlider.Control className="flex w-full touch-none items-center py-2 select-none">
        <BaseSlider.Track className="h-1.5 w-full rounded-full bg-muted select-none dark:bg-white/[0.06]">
          <BaseSlider.Indicator className="rounded-full bg-dynamic-accent/50 select-none dark:bg-white/20" />
          <BaseSlider.Thumb
            aria-label={label}
            className="size-4 rounded-full border border-border bg-background select-none dark:border-white/40"
          />
        </BaseSlider.Track>
      </BaseSlider.Control>
    </BaseSlider.Root>
  );
}
