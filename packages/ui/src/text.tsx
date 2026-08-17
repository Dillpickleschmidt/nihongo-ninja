import type { TextProps } from "react-native";
import { Text as RNText } from "react-native";

import { cn } from "./utils";

// The app-wide text default. React Native has no style inheritance, so every
// text primitive composes this instead of relying on a cascade. Change the app
// font or default text color here, in one place.
// The 1rem/1.5 size matches the web default that plain DOM text inherits —
// react-native-web's Text otherwise defaults to 14px. A text-* class on a
// component replaces the whole size+leading pair via twMerge.
export const textBase = "text-[1rem]/[1.5] text-foreground font-outfit";

export function Text({ className, ...props }: TextProps) {
  return <RNText className={cn(textBase, className)} {...props} />;
}
