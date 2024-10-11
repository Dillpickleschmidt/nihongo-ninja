import { Card } from "@/types/vocab"

type MultipleChoices = {
  options: Card[]
  correctOption: Card
}

/**
 * Generates multiple choice options from a set of cards.
 * @param data The raw vocab data array.
 * @param shuffleInput Whether to shuffle the input data. Default is true.
 * @param currentCardIndex The index of the current card.
 * @returns An object with multiple choice options and the correct option.
 *
 * - By default, the function will shuffle the input data and select the first 4 entries as options.
 * The correct key is randomly selected from the input data.
 * - Alternatively, the function can be called with shuffleInput set to false. In that case, the
 * first entry will be the correct key and the remaining entries will be shuffled to select 3 options.
 * This is useful for cycling through the data in order.
 */
export function presentMultipleChoiceOptions(
  data: Card[],
  shuffleInput = true,
  currentCardIndex: number,
): MultipleChoices {
  if (data.length < 4) {
    throw new Error("Not enough entries to select 4 options")
  }

  let entries = data

  if (shuffleInput) {
    // Shuffle the entries array
    entries = [...entries].sort(() => 0.5 - Math.random())
  }

  // Extract the entry at the current card index
  const correctEntry = entries[currentCardIndex]

  // Remove the correct entry from the list
  const remainingEntries = entries.filter(
    (entry) => entry.key !== correctEntry.key,
  )

  // Shuffle the remaining entries array
  const remainingShuffledEntries = remainingEntries.sort(
    () => 0.5 - Math.random(),
  )

  // Select the first 3 remaining entries after shuffling
  const select3Entries = remainingShuffledEntries.slice(0, 3)

  // Combine the correct entry with the selected entries
  const selectedEntries = [correctEntry, ...select3Entries]

  // Shuffle the selected entries
  const shuffledSelectedEntries = selectedEntries.sort(
    () => 0.5 - Math.random(),
  )

  return {
    options: shuffledSelectedEntries,
    correctOption: correctEntry,
  }
}

/**
 * Checks if the user's answer is correct based on enabled categories.
 * @param multipleChoices The multiple choice options and correct option.
 * @param userAnswer The user's answer to check.
 * @returns True if the answer is correct, false otherwise.
 */
export function handleMultipleChoiceSelection(
  multipleChoices: MultipleChoices,
  userAnswer: string,
): boolean {
  const { correctOption } = multipleChoices

  if (!correctOption || !correctOption.answerCategories) {
    throw new Error("Correct option or answer categories not found")
  }

  // Flatten the enabled answers from all categories
  const answers = correctOption.answerCategories.flatMap(
    (category) => category.answers,
  )

  // console.log("enabledAnswers: ", answers)

  // Check if the user's answer matches any of the enabled answers
  return answers.includes(userAnswer)
}
