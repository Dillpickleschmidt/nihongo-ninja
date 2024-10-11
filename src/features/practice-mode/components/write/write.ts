/*
This file contains the logic for handling the user's input for the write mode.
*/

import { Card } from "@/types/vocab"

/**
 * Presents write options from a set of cards.
 * @param data The raw vocab data array.
 * @param shuffleInput Whether to shuffle the input data. Default is true.
 * @param currentCardIndex The index of the current card.
 * @returns The correct Card entry.
 */
export function presentWriteOptions(
  data: Card[],
  shuffleInput = true,
  currentCardIndex: number,
): Card {
  if (data.length < 1) {
    throw new Error("Entries are empty, cannot pick a correct key.")
  }

  const entries = shuffleInput
    ? [...data].sort(() => 0.5 - Math.random())
    : data

  // Extract the entry at the specified index
  return entries[currentCardIndex]
}

/**
 * Check if the user's written answer is correct based on enabled categories.
 * @param userAnswer The user's answer to check.
 * @param correctOption The correct entry with answers.
 * @param enabledAnswerCategories The categories to check answers against.
 * @returns True if the answer is correct, false otherwise.
 */
export function handleWrittenAnswer(
  userAnswer: string,
  correctOption: Card,
  enabledAnswerCategories: string[],
): boolean {
  // Flatten the enabled answers from all categories
  const enabledAnswers = correctOption.answerCategories
    .filter((category) => enabledAnswerCategories.includes(category.category))
    .flatMap((category) => category.answers)

  // Check if the user's answer matches any of the enabled answers
  const normalizedUserAnswer = userAnswer.trim().toLowerCase()
  return enabledAnswers
    .map((answer) => answer.trim().toLowerCase())
    .includes(normalizedUserAnswer)
}
