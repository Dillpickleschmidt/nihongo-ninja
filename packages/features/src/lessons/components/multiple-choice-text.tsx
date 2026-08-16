import { cn, Text } from "@nn/ui";
import { useState } from "react";
import { Pressable, View } from "react-native";

const OPTION_KEYS = ["a", "b", "c", "d"] as const;
type OptionKey = (typeof OPTION_KEYS)[number];

type MultipleChoiceTextProps = {
  answer: string | string[];
  a?: string;
  b?: string;
  c?: string;
  d?: string;
  className?: string;
};

export function MultipleChoiceText({ answer, className, ...options }: MultipleChoiceTextProps) {
  const [clicked, setClicked] = useState<Partial<Record<OptionKey, boolean>>>({});
  const [correct, setCorrect] = useState<Partial<Record<OptionKey, boolean>>>({});

  const handlePress = (option: OptionKey) => {
    setClicked((prev) => ({ ...prev, [option]: true }));
    const correctAnswers = Array.isArray(answer) ? answer : [answer];
    const text = options[option];
    if (text !== undefined && correctAnswers.includes(text)) {
      setCorrect((prev) => ({ ...prev, [option]: true }));
    }
  };

  const stateClass = (option: OptionKey) => {
    if (correct[option]) {
      return "rounded-md bg-[#00F064]/90 pr-2 dark:bg-green-500/90";
    }
    if (clicked[option]) {
      return "rounded-md";
    }
    return "";
  };

  const stateTextClass = (option: OptionKey) => {
    if (correct[option]) return "font-medium text-black";
    if (clicked[option]) return "font-medium text-[#FF0000] dark:text-red-500";
    return "text-foreground";
  };

  return (
    <View className="gap-2 pl-4">
      {OPTION_KEYS.map((option) => {
        const text = options[option];
        if (text === undefined) return null;
        return (
          <Pressable
            key={option}
            onPress={() => {
              handlePress(option);
            }}
            accessibilityRole="button"
            accessibilityLabel={
              clicked[option]
                ? `${option}: ${text} — ${correct[option] ? "correct" : "incorrect"}`
                : `${option}: ${text}`
            }
            className={cn("cursor-pointer flex-row items-baseline self-start", stateClass(option))}
          >
            <Text
              className={cn("px-2 py-px text-lg", stateTextClass(option))}
            >{`${option}) `}</Text>
            <Text
              className={cn("font-japanese text-lg font-medium", stateTextClass(option), className)}
            >
              {text}
            </Text>
            {/* Not color-only: a marker also shows the result */}
            {clicked[option] ? (
              <Text className={cn("pl-2 text-lg font-bold", stateTextClass(option))}>
                {correct[option] ? "✓" : "✗"}
              </Text>
            ) : null}
          </Pressable>
        );
      })}
    </View>
  );
}
