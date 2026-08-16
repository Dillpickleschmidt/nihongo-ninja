import type { TextProps } from "react-native";
import { Text as RNText } from "react-native";

import { cn } from "./utils";

// The app-wide text default. React Native has no style inheritance, so every
// text primitive composes this instead of relying on a cascade. Change the app
// font or default text color here, in one place.
export const textBase = "text-foreground font-outfit";

export function Text({ className, ...props }: TextProps) {
  return <RNText className={cn(textBase, className)} {...props} />;
}
