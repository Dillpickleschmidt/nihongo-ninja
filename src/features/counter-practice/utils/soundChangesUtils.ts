// soundChangesUtils.ts
import { CounterPattern } from "../types"

const handleCompoundNumber = (
  numberReading: string,
  transform: (part: string, baseReading: string) => string,
  baseReading: string
): string => {
  const digits = ['いち', 'に', 'さん', 'よん', 'ご', 'ろく', 'なな', 'はち', 'きゅう', 'じゅう']
  
  // Check for digit endings
  for (const digit of digits) {
    if (numberReading.endsWith(digit)) {
      const prefix = numberReading.slice(0, -digit.length)
      return prefix + transform(digit, baseReading)
    }
  }
  
  return transform(numberReading, baseReading)
}

export const getFullCounterReading = (
  numberReading: string,
  pattern: CounterPattern,
): string => {
  switch (pattern.soundChangeType) {
    case "generic": {
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
      return dateReadings[numberReading] || numberReading + "にち"
    }

    case "hToP": {
      return handleCompoundNumber(numberReading, (part, baseReading) => {
        const needsSmallTsu = ["いち", "ろく", "はち", "じゅう"].includes(part)
        const convertToP = needsSmallTsu || ["さん", "よん"].includes(part)
        const firstPart = needsSmallTsu ? part.slice(0, -1) + "っ" : part
        
        return convertToP
          ? firstPart + baseReading.replace(/^は|^ひ|^ふ|^へ|^ほ/, match =>
              match === "は" ? "ぱ" :
              match === "ひ" ? "ぴ" :
              match === "ふ" ? "ぷ" :
              match === "へ" ? "ぺ" : "ぽ")
          : firstPart + baseReading
      }, pattern.baseReading)
    }

    case "hToP/B": {
      return handleCompoundNumber(numberReading, (part, baseReading) => {
        if (part === "さん") {
          return part + baseReading.replace(/^は|^ひ|^ふ|^へ|^ほ/, match =>
            match === "は" ? "ば" :
            match === "ひ" ? "び" :
            match === "ふ" ? "ぶ" :
            match === "へ" ? "べ" : "ぼ")
        }

        const needsSmallTsu = ["いち", "ろく", "はち", "じゅう"].includes(part)
        const firstPart = needsSmallTsu ? part.slice(0, -1) + "っ" : part
        
        return needsSmallTsu
          ? firstPart + baseReading.replace(/^は|^ひ|^ふ|^へ|^ほ/, match =>
              match === "は" ? "ぱ" :
              match === "ひ" ? "ぴ" :
              match === "ふ" ? "ぷ" :
              match === "へ" ? "ぺ" : "ぽ")
          : firstPart + baseReading
      }, pattern.baseReading)
    }

    case "kToG": {
      return handleCompoundNumber(numberReading, (part, baseReading) => {
        if (part === "さん") {
          return part + baseReading.replace(/^か|^き|^く|^け|^こ/, match =>
            match === "か" ? "が" :
            match === "き" ? "ぎ" :
            match === "く" ? "ぐ" :
            match === "け" ? "げ" : "ご")
        }
        return part + baseReading
      }, pattern.baseReading)
    }

    case "sToZ": {
      return handleCompoundNumber(numberReading, (part, baseReading) => {
        if (part === "さん") {
          return part + baseReading.replace(/^さ|^し|^す|^せ|^そ/, match =>
            match === "さ" ? "ざ" :
            match === "し" ? "じ" :
            match === "す" ? "ず" :
            match === "せ" ? "ぜ" : "ぞ")
        }
        return part + baseReading
      }, pattern.baseReading)
    }

    case "p": {
      return handleCompoundNumber(numberReading, (part, baseReading) => {
        const needsSmallTsu = ["いち", "ろく", "はち", "じゅう"].includes(part)
        const firstPart = needsSmallTsu ? part.slice(0, -1) + "っ" : part
        return firstPart + baseReading
      }, pattern.baseReading)
    }

    case "k": {
      return handleCompoundNumber(numberReading, (part, baseReading) => {
        const needsSmallTsu = ["いち", "ろく", "はち", "じゅう"].includes(part)
        const firstPart = needsSmallTsu ? part.slice(0, -1) + "っ" : part
        return firstPart + baseReading
      }, pattern.baseReading)
    }

    case "s": {
      return handleCompoundNumber(numberReading, (part, baseReading) => {
        const needsSmallTsu = ["いち", "はち", "じゅう"].includes(part)
        const firstPart = needsSmallTsu ? part.slice(0, -1) + "っ" : part
        return firstPart + baseReading
      }, pattern.baseReading)
    }

    case "t": {
      return handleCompoundNumber(numberReading, (part, baseReading) => {
        const needsSmallTsu = ["いち", "はち", "じゅう"].includes(part)
        const firstPart = needsSmallTsu ? part.slice(0, -1) + "っ" : part
        return firstPart + baseReading
      }, pattern.baseReading)
    }

    default:
      return numberReading + pattern.baseReading
  }
}