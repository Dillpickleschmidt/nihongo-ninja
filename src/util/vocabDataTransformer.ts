import { VocabItem, RichVocabItem, Card } from "@/types/vocab"

/**
 * Adds hiragana and ruby text to VocabularyItem objects.
 * @param items - An array of VocabularyItem objects to transform.
 * @param furiganaSize - Optional font size for furigana text.
 * @returns An array of RichVocabItem objects.
 */
export function addKanaAndRuby(
  items: VocabItem[],
  furiganaSize?: string,
  removeDuplicateKana = false,
): RichVocabItem[] {
  return items.map((item) => {
    const hiragana = extractHiragana(item.furigana)
    const rubyText = item.furigana.map((furi) =>
      convertFuriganaToRubyHtml(furi, furiganaSize),
    )
    if (removeDuplicateKana && hiragana && hiragana[0] === item.word) {
      hiragana.shift()
    }
    return { ...item, hiragana, rubyText }
  })
}

/**
 * Extracts hiragana from furigana string(s).
 * @param furigana - A string or array of strings containing kanji with furigana in brackets.
 * @returns A hiragana string or array of hiragana strings, depending on the input type.
 */
export function extractHiragana<T extends string | string[]>(
  furigana: T,
): T extends string[] ? string[] : string {
  const extract = (text: string): string => {
    let hiragana = ""
    let skip = false

    for (let i = text.length - 1; i >= 0; i--) {
      const char = text[i]
      if (char === "[") skip = true
      else if (char === "]") skip = false
      else if (skip && char === " ") skip = false
      else if (!skip && char !== " ") hiragana = char + hiragana
    }

    return hiragana
  }

  if (Array.isArray(furigana)) {
    return furigana.map(extract) as T extends string[] ? string[] : string
  } else {
    return extract(furigana) as T extends string[] ? string[] : string
  }
}

/**
 * Converts furigana string(s) to HTML ruby text.
 * @param furigana - A string or array of strings containing kanji with furigana in brackets.
 * @param furiganaSize - The font size for the furigana text (default: "0.75rem").
 * @returns An HTML string or array of HTML strings with ruby tags for furigana display,
 *          depending on the input type.
 */
export function convertFuriganaToRubyHtml<T extends string | string[]>(
  furigana: T,
  furiganaSize?: string,
): T extends string[] ? string[] : string {
  const convert = (text: string): string => {
    let rubyText = ""
    let tempArr: string[] = []
    let foundFurigana = false

    for (let i = 0; i < text.length; i++) {
      const char = text[i]
      tempArr.push(char)

      if (char === "[") {
        foundFurigana = true
        rubyText += `<ruby>${tempArr.join("")}<rp>(</rp><rt><span style="font-size: ${furiganaSize};">`
        tempArr = []
      } else if (char === "]") {
        rubyText += `${tempArr.join("")}</span></rt><rp>)</rp>`
        tempArr = []
      } else if (char === " " || i === text.length - 1) {
        if (foundFurigana) {
          rubyText += `${tempArr.join("")}</ruby>`
        } else {
          rubyText += tempArr.join("").replace(/\s/g, "") // Remove spaces
        }
        tempArr = []
      }
    }

    return rubyText.replace(/[\[\]\s]/g, "")
  }

  if (Array.isArray(furigana)) {
    return furigana.map(convert) as T extends string[] ? string[] : string
  } else {
    return convert(furigana) as T extends string[] ? string[] : string
  }
}

/**
 * Converts a VocabItem object to a Card object for use in flashcards.
 * @param entry - A single VocabItem object to convert.
 * @param index - The index of the entry in its original array (used for ordering).
 * @param mode - The mode of the flashcard, either "readings" or "kana" answers.
 * @returns A Card object.
 *
 * @example
 * const vocabItem = {
 *   word: "食べる",
 *   furigana: ["食[た]べる"],
 *   english: ["to eat", "to consume"],
 *   mnemonics: ["Think of 'taberu' as 'table' where you eat food."],
 *   example_sentences: [{ japanese: "私はリンゴを食べます。", english: "I eat an apple." }],
 *   info: ["Ichidan verb"],
 *   category: "Verbs",
 *   videos: [{ src: "https://example.com/taberu.mp4", title: "Usage of 食べる" }]
 * };
 *
 * const card = convertVocabItemToFlashcard(vocabItem, 0, "readings");
 * // Result:
 * // {
 * //   key: "食べる",
 * //   answerCategories: [{ category: "English", answers: ["to eat", "to consume"] }],
 * //   mnemonics: ["Think of 'taberu' as 'table' where you eat food."],
 * //   order: 0,
 * //   cardStyle: "multiple-choice",
 * //   wrongAnswerCount: 0,
 * //   exampleSentences: [{ japanese: "私はリンゴを食べます。", english: "I eat an apple." }],
 * //   info: ["Ichidan verb"],
 * //   category: "Verbs",
 * //   videos: [{ src: "https://example.com/taberu.mp4", title: "Usage of 食べる" }]
 * // }
 */
function convertVocabItemToFlashcard(
  entry: VocabItem,
  index: number,
  mode: "readings" | "kana",
): Card {
  const answerCategories =
    mode === "kana"
      ? [{ category: "Kana", answers: extractHiragana(entry.furigana) }]
      : [{ category: "English", answers: entry.english }]

  return {
    key: mode === "readings" ? entry.word : entry.english.join(", "),
    answerCategories,
    mnemonics: entry.mnemonics,
    order: index,
    cardStyle: "multiple-choice",
    wrongAnswerCount: 0,
    exampleSentences: entry.example_sentences,
    info: entry.info,
    category: entry.category,
    videos: entry.videos,
  }
}

export function convertVocabItemsToFlashcards(
  entries: VocabItem[],
  mode: "readings" | "kana",
): Card[] {
  return entries.map((entry, index) =>
    convertVocabItemToFlashcard(entry, index, mode),
  )
}

/**
 * Converts a single VocabItem object from kanji to kana representation.
 * @param entry - A VocabItem object to convert.
 * @returns A new VocabItem object with the word converted to kana.
 */
function convertSingleKanjiToKana(entry: VocabItem): VocabItem {
  const hiragana = entry.furigana?.[0] && extractHiragana(entry.furigana[0])
  return {
    ...entry,
    word: hiragana ?? entry.word,
    furigana: hiragana ? [] : entry.furigana,
  }
}

/**
 * Converts multiple VocabItem objects from kanji to kana representation.
 * @param entries - An array of VocabItem objects to convert.
 * @returns A new array of VocabItem objects with words converted to kana.
 */
function convertMultipleKanjiToKana(entries: VocabItem[]): VocabItem[] {
  return entries.map(convertSingleKanjiToKana)
}

/**
 * Converts VocabItem objects from kanji to kana representation.
 * This function can handle both single entries and arrays of entries.
 * @param entries - A single VocabItem or an array of VocabItem objects to convert.
 * @returns The same type as the input (T), with words converted to kana.
 */
export function convertKanjiToKana<T extends VocabItem | VocabItem[]>(
  entries: T,
): T {
  return (
    Array.isArray(entries)
      ? convertMultipleKanjiToKana(entries)
      : convertSingleKanjiToKana(entries)
  ) as T
}

/**
 * Swaps the word and English properties of a single VocabItem object.
 * @param entry - A VocabItem object to modify.
 * @returns A new VocabItem object with word and English properties swapped.
 */
function swapSingleWordAndEnglish(entry: VocabItem): VocabItem {
  return {
    ...entry,
    word: entry.english?.join(", ") ?? entry.word,
    english: [],
    furigana: [entry.word],
  }
}

/**
 * Swaps the word and English properties of multiple VocabItem objects.
 * @param entries - An array of VocabItem objects to modify.
 * @returns A new array of VocabItem objects with word and English properties swapped.
 */
function swapMultipleWordAndEnglish(entries: VocabItem[]): VocabItem[] {
  return entries.map(swapSingleWordAndEnglish)
}

/**
 * Swaps the word and English properties of VocabItem objects.
 * This function can handle both single entries and arrays of entries.
 * @param entries - A single VocabItem or an array of VocabItem objects to modify.
 * @returns The same type as the input (T), with word and English properties swapped.
 */
export function swapWordAndEnglish<T extends VocabItem | VocabItem[]>(
  entries: T,
): T {
  return (
    Array.isArray(entries)
      ? swapMultipleWordAndEnglish(entries)
      : swapSingleWordAndEnglish(entries)
  ) as T
}

function stripFuriganaFromEntry(entry: VocabItem): VocabItem {
  return {
    ...entry,
    furigana: [],
  }
}

export function stripFurigana(entries: VocabItem[]): VocabItem[] {
  return entries.map(stripFuriganaFromEntry)
}
