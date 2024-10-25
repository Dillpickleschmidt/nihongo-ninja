/*
This file contains the logic for handling the user's input for the write mode.
*/

import { Card, Particle } from "@/types/vocab"

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
  // Flatten the answers from enabled categories
  const enabledAnswers = correctOption.answerCategories
    .filter((category) => enabledAnswerCategories.includes(category.category))
    .flatMap((category) => category.answers)

  // Check if the user's answer matches any of the enabled answers
  const normalizedUserAnswer = userAnswer.trim().toLowerCase()
  return enabledAnswers
    .map((answer) => answer.trim().toLowerCase())
    .includes(normalizedUserAnswer)
}

// Add this new function to handle particle validation
export function validateParticles(
  particleAnswers: { [key: string]: string },
  correctParticles: Particle[],
): boolean {
  return correctParticles.every((particle) => {
    const key = particle.label || "unlabeled"
    const userAnswer = particleAnswers[key]?.trim().toLowerCase() || ""
    return userAnswer === particle.particle.toLowerCase()
  })
}
