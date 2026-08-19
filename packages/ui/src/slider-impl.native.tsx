import { useRef, useState } from "react";
import { View, type GestureResponderEvent } from "react-native";

import type { SliderProps } from "./slider-types";
import { cn } from "./utils";

export function Slider({
  value,
  onValueChange,
  min,
  max,
  step = 1,
  label,
  className,
}: SliderProps) {
  const [trackWidth, setTrackWidth] = useState(0);
  const widthRef = useRef(0);
  widthRef.current = trackWidth;

  const handleTouch = (event: GestureResponderEvent) => {
    const width = widthRef.current;
    if (width <= 0) return;
    const ratio = Math.min(1, Math.max(0, event.nativeEvent.locationX / width));
    const raw = min + ratio * (max - min);
    const stepped = Math.min(max, Math.max(min, Math.round(raw / step) * step));
    if (stepped !== value) onValueChange(stepped);
  };

  const ratio = max > min ? (value - min) / (max - min) : 0;

  return (
    <View
      role="slider"
      aria-label={label}
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
      className={cn("justify-center py-3", className)}
      onLayout={(event) => {
        setTrackWidth(event.nativeEvent.layout.width);
      }}
      onStartShouldSetResponder={() => true}
      onMoveShouldSetResponder={() => true}
      onResponderGrant={handleTouch}
      onResponderMove={handleTouch}
    >
      <View className="h-1.5 w-full rounded-full bg-muted dark:bg-white/[0.06]">
        <View
          className="h-full rounded-full bg-dynamic-accent/50 dark:bg-white/20"
          style={{ width: `${ratio * 100}%` }}
        />
      </View>
      <View
        pointerEvents="none"
        className="absolute size-4 rounded-full border border-border bg-background dark:border-white/40"
        style={{ left: `${ratio * 100}%`, marginLeft: -8 }}
      />
    </View>
  );
}
