import type { TextProps } from "react-native";
import { Text as RNText } from "react-native";

import { cn } from "./utils";

// App-wide text default. RN has no style inheritance, so every text primitive
// composes this. 1rem/1.5 matches what plain DOM text inherits on web —
// react-native-web's Text otherwise defaults to 14px.
export const textBase = "text-[1rem]/[1.5] text-foreground font-outfit";

export function Text({ className, ...props }: TextProps) {
  return <RNText className={cn(textBase, className)} {...props} />;
}
