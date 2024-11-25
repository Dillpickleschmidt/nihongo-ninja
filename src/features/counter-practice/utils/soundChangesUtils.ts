// soundChangesUtils.ts
import { CounterPattern } from "../types"

// For actual counter reading in the app
export const getFullCounterReading = (
  numberReading: string,
  pattern: CounterPattern,
): string => {
  switch (pattern.soundChangeType) {
    case "generic": {
      // Built-in readings for つ/個
      const genericReadings: Record<string, string> = {
        いち: "ひとつ",
        に: "ふたつ",
        さん: "みっつ",
        よん: "よっつ",
        ご: "いつつ",
        ろく: "むっつ",
        なな: "ななつ",
        はち: "やっつ",
        きゅう: "ここのつ",
        じゅう: "とお",
      }
      return genericReadings[numberReading] || numberReading + "つ"
    }

    case "dates": {
      // Built-in readings for days of the month
      const dateReadings: Record<string, string> = {
        いち: "ついたち",
        に: "ふつか",
        さん: "みっか",
        よん: "よっか",
        ご: "いつか",
        ろく: "むいか",
        なな: "なのか",
        はち: "ようか",
        きゅう: "ここのか",
        じゅう: "とおか",
        じゅうよん: "じゅうよっか",
        にじゅう: "はつか",
        にじゅうよん: "にじゅうよっか",
      }
      return dateReadings[numberReading] || numberReading + "か"
    }

    case "hToP": {
      const needsSmallTsu = ["いち", "ろく", "はち", "じゅう"].includes(
        numberReading,
      )
      const firstPart = needsSmallTsu
        ? numberReading.slice(0, -1) + "っ"
        : numberReading

      // Convert h-sounds to p-sounds for さん and よん, regular h-sounds otherwise
      return needsSmallTsu || ["さん", "よん"].includes(numberReading)
        ? firstPart +
            pattern.baseReading.replace(/^は|^ひ|^ふ|^へ|^ほ/, (match) =>
              match === "は"
                ? "ぱ"
                : match === "ひ"
                  ? "ぴ"
                  : match === "ふ"
                    ? "ぷ"
                    : match === "へ"
                      ? "ぺ"
                      : "ぽ",
            )
        : numberReading + pattern.baseReading
    }

    case "hToP/B": {
      const needsSmallTsu = ["いち", "ろく", "はち", "じゅう"].includes(
        numberReading,
      )
      const firstPart = needsSmallTsu
        ? numberReading.slice(0, -1) + "っ"
        : numberReading

      // Use b-sounds after さん
      if (numberReading === "さん") {
        return (
          numberReading +
          pattern.baseReading.replace(/^は|^ひ|^ふ|^へ|^ほ/, (match) =>
            match === "は"
              ? "ば"
              : match === "ひ"
                ? "び"
                : match === "ふ"
                  ? "ぶ"
                  : match === "へ"
                    ? "べ"
                    : "ぼ",
          )
        )
      }

      // Convert h-sounds to p-sounds after small っ, regular h-sounds otherwise
      return needsSmallTsu
        ? firstPart +
            pattern.baseReading.replace(/^は|^ひ|^ふ|^へ|^ほ/, (match) =>
              match === "は"
                ? "ぱ"
                : match === "ひ"
                  ? "ぴ"
                  : match === "ふ"
                    ? "ぷ"
                    : match === "へ"
                      ? "ぺ"
                      : "ぽ",
            )
        : numberReading + pattern.baseReading
    }

    case "kToG": {
      // Convert k-sounds to g-sounds
      return (
        numberReading +
        pattern.baseReading.replace(/^か|^き|^く|^け|^こ/, (match) =>
          match === "か"
            ? "が"
            : match === "き"
              ? "ぎ"
              : match === "く"
                ? "ぐ"
                : match === "け"
                  ? "げ"
                  : "ご",
        )
      )
    }

    case "sToZ": {
      // Convert s-sounds to z-sounds
      return (
        numberReading +
        pattern.baseReading.replace(/^さ|^し|^す|^せ|^そ/, (match) =>
          match === "さ"
            ? "ざ"
            : match === "し"
              ? "じ"
              : match === "す"
                ? "ず"
                : match === "せ"
                  ? "ぜ"
                  : "ぞ",
        )
      )
    }

    case "p": {
      const needsSmallTsu = ["いち", "ろく", "はち", "じゅう"].includes(
        numberReading,
      )
      const firstPart = needsSmallTsu
        ? numberReading.slice(0, -1) + "っ"
        : numberReading

      return needsSmallTsu
        ? firstPart +
            pattern.baseReading.replace(/^は|^ひ|^ふ|^へ|^ほ/, (match) =>
              match === "は"
                ? "ぱ"
                : match === "ひ"
                  ? "ぴ"
                  : match === "ふ"
                    ? "ぷ"
                    : match === "へ"
                      ? "ぺ"
                      : "ぽ",
            )
        : numberReading + pattern.baseReading
    }

    case "k": {
      const needsSmallTsu = ["いち", "ろく", "はち", "じゅう"].includes(
        numberReading,
      )
      const firstPart = needsSmallTsu
        ? numberReading.slice(0, -1) + "っ"
        : numberReading

      return needsSmallTsu
        ? firstPart +
            pattern.baseReading.replace(/^か|^き|^く|^け|^こ/, (match) =>
              match === "か"
                ? "か"
                : match === "き"
                  ? "き"
                  : match === "く"
                    ? "く"
                    : match === "け"
                      ? "け"
                      : "こ",
            )
        : numberReading + pattern.baseReading
    }

    case "s": {
      const needsSmallTsu = ["いち", "はち", "じゅう"].includes(numberReading) // Removed ろく
      const firstPart = needsSmallTsu
        ? numberReading.slice(0, -1) + "っ"
        : numberReading

      return needsSmallTsu
        ? firstPart +
            pattern.baseReading.replace(/^さ|^し|^す|^せ|^そ/, (match) =>
              match === "さ"
                ? "さ"
                : match === "し"
                  ? "し"
                  : match === "す"
                    ? "す"
                    : match === "せ"
                      ? "せ"
                      : "そ",
            )
        : numberReading + pattern.baseReading
    }

    case "t": {
      const needsSmallTsu = ["いち", "はち", "じゅう"].includes(numberReading) // Removed ろく
      const firstPart = needsSmallTsu
        ? numberReading.slice(0, -1) + "っ"
        : numberReading

      return needsSmallTsu
        ? firstPart +
            pattern.baseReading.replace(/^た|^ち|^つ|^て|^と/, (match) =>
              match === "た"
                ? "た"
                : match === "ち"
                  ? "ち"
                  : match === "つ"
                    ? "つ"
                    : match === "て"
                      ? "て"
                      : "と",
            )
        : numberReading + pattern.baseReading
    }

    default:
      return numberReading + pattern.baseReading
  }
}
