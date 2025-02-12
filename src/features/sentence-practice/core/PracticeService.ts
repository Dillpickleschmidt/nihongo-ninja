// core/PracticeService.ts
import { AnswerChecker } from "./answer-processing/AnswerChecker"
import { VariationGenerator } from "./answer-processing/VariationGenerator"
import { ConjugationEngine } from "./conjugation/ConjugationEngine"
import type {
  PracticeQuestion,
  CheckResult,
  Answer,
} from "./answer-processing/types"
import type {
  UnprocessedQuestion,
  ConjugatableSegment,
  ConjugatedWord,
} from "./conjugation/types"

export class PracticeService {
  private answerChecker: AnswerChecker
  private variationGenerator: VariationGenerator
  private conjugationEngine: ConjugationEngine

  constructor() {
    this.answerChecker = new AnswerChecker()
    this.variationGenerator = new VariationGenerator()
    this.conjugationEngine = new ConjugationEngine()
  }

  /**
   * Converts unprocessed questions with conjugatable segments into processed questions with string segments
   * @param questions Array of questions with potentially conjugatable segments
   * @returns Processed questions with all conjugations and variations resolved
   */
  prepareQuestions(questions: UnprocessedQuestion[]): PracticeQuestion[] {
    return questions.map((question) => ({
      ...question,
      answers: this.processAnswers(question.answers, question.english),
    }))
  }

  /**
   * Processes unprocessed answers into fully processed answers with all variations
   * @param unprocessedAnswers Array of answers containing conjugatable segments
   * @returns Array of processed answers with all conjugations and variations
   */
  private processAnswers(
    unprocessedAnswers: UnprocessedQuestion["answers"],
    english: string,
  ): Answer[] {
    return unprocessedAnswers.flatMap((answer) => {
      // First convert unprocessed segments to string[] by handling conjugations
      const processedAnswers = this.processAnswer(answer)

      // Then generate all variations (kana, pronouns, etc.)
      return this.variationGenerator.generateVariations({
        answers: processedAnswers,
        english,
      }).answers
    })
  }

  /**
   * Processes a single unprocessed answer into an array of processed answers
   * handling conjugations and generating all valid combinations
   * @param answer Unprocessed answer containing conjugatable segments
   * @returns Array of processed answers with all conjugations resolved
   */
  private processAnswer(
    answer: UnprocessedQuestion["answers"][number],
  ): Answer[] {
    // Generate both polite and casual forms unless constrained
    const politenessVariations = [true, false]

    return politenessVariations.flatMap((isPolite) => {
      const processedSegments = answer.segments.map((segment) => {
        if (this.isConjugatedWord(segment)) {
          // Need to flatten the conjugated results into a single string[]
          return this.conjugationEngine
            .conjugateSegments([segment], isPolite)
            .flat() // Add .flat() here
        }
        return [segment]
      })

      // Create all possible combinations of conjugated segments
      return this.generateCombinations(processedSegments).map(
        (combinedSegments) => ({
          segments: combinedSegments,
          notes: answer.notes,
          originalPoliteForm: isPolite,
          isVariation: false,
        }),
      )
    })
  }

  /**
   * Type guard to check if a segment is a ConjugatedWord
   */
  private isConjugatedWord(
    segment: ConjugatableSegment,
  ): segment is ConjugatedWord {
    return typeof segment !== "string" && "word" in segment && "pos" in segment
  }

  /**
   * Generates all possible combinations of segments when some segments have multiple variations
   * @param segmentArrays Array where each element is an array of possible variations for that segment position
   * @returns Array of all possible combinations of segments
   * @example
   * Input: [["猫"], ["が", "は"], ["好き"]]
   * Output: [["猫", "が", "好き"], ["猫", "は", "好き"]]
   */
  private generateCombinations(segmentArrays: string[][]): string[][] {
    if (segmentArrays.length === 0) return [[]]
    if (segmentArrays.length === 1) return segmentArrays[0].map((seg) => [seg])

    const [firstSegmentArray, ...restSegmentArrays] = segmentArrays
    const remainingCombinations = this.generateCombinations(restSegmentArrays)

    const result: string[][] = []
    // For each possible variation of the current segment
    for (const segment of firstSegmentArray) {
      // Combine it with each possible combination of the remaining segments
      for (const combination of remainingCombinations) {
        result.push([segment, ...combination])
      }
    }

    return result
  }

  /**
   * Checks a user's answer against a practice question
   */
  checkAnswer(input: string, question: PracticeQuestion): CheckResult {
    return this.answerChecker.checkAnswer(input, question)
  }
}
