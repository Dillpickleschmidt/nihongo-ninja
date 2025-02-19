// core/PracticeService.ts
import { AnswerChecker } from "./answer-processing/AnswerChecker"
import { VariationGenerator } from "./answer-processing/VariationGenerator"
import { ConjugationEngine } from "./conjugation/ConjugationEngine"
import { TextProcessor } from "./text/TextProcessor"
import type {
  PracticeQuestion,
  CheckResult,
  Answer,
} from "./answer-processing/types"
import type {
  UnprocessedQuestion,
  ConjugatableSegment,
  ConjugatedWord,
  BlankableWord,
} from "./conjugation/types"
import { AnswerInputs } from "../store/types"

export class PracticeService {
  private answerChecker: AnswerChecker
  private variationGenerator: VariationGenerator
  private conjugationEngine: ConjugationEngine
  private textProcessor: TextProcessor

  constructor() {
    this.answerChecker = new AnswerChecker()
    this.variationGenerator = new VariationGenerator()
    this.conjugationEngine = new ConjugationEngine()
    this.textProcessor = new TextProcessor()
  }

  /**
   * Converts unprocessed questions with conjugatable segments into processed questions with string segments
   */
  prepareQuestions(questions: UnprocessedQuestion[]): PracticeQuestion[] {
    return questions.map((question) => ({
      ...question,
      answers: this.processAnswers(question.answers, question.english),
    }))
  }

  /**
   * Processes raw segments into simple string arrays by handling both blank words and conjugatable words
   */
  private prepareSegments(
    segments: ConjugatableSegment[],
    isPolite: boolean,
  ): string[][] {
    return segments.map((segment) => {
      // First handle blank words
      const transformedSegment = this.transformBlankWords(segment)
      // Then handle any conjugatable words
      return this.transformConjugatableWords(transformedSegment, isPolite)
    })
  }

  private transformBlankWords(
    segment: ConjugatableSegment,
  ): string | ConjugatedWord {
    if (this.isBlankableWord(segment)) {
      return segment.word
    }
    return segment
  }

  private transformConjugatableWords(
    segment: string | ConjugatedWord,
    isPolite: boolean,
  ): string[] {
    if (this.isConjugatedWord(segment)) {
      return this.conjugationEngine
        .conjugateSegments([segment], isPolite)
        .flat()
    }
    return [segment as string]
  }

  private processAnswers(
    unprocessedAnswers: UnprocessedQuestion["answers"],
    english: string,
  ): Answer[] {
    return unprocessedAnswers.flatMap((answer) => {
      const processedAnswers = this.processAnswer(answer)
      return this.variationGenerator.generateVariations({
        answers: processedAnswers,
        english,
      }).answers
    })
  }

  private processAnswer(
    answer: UnprocessedQuestion["answers"][number],
  ): Answer[] {
    const politenessVariations = [true, false]

    return politenessVariations.flatMap((isPolite) => {
      const preparedSegments = this.prepareSegments(answer.segments, isPolite)

      return this.generateCombinations(preparedSegments).map(
        (combinedSegments) => ({
          segments: combinedSegments,
          notes: answer.notes,
          originalPoliteForm: isPolite,
          isVariation: false,
        }),
      )
    })
  }

  private isBlankableWord(
    segment: ConjugatableSegment,
  ): segment is BlankableWord {
    return typeof segment === "object" && "blank" in segment
  }

  private isConjugatedWord(
    segment: ConjugatableSegment,
  ): segment is ConjugatedWord {
    return typeof segment !== "string" && "word" in segment && "pos" in segment
  }

  private generateCombinations(segmentArrays: string[][]): string[][] {
    if (segmentArrays.length === 0) return [[]]
    if (segmentArrays.length === 1) return segmentArrays[0].map((seg) => [seg])

    const [firstSegmentArray, ...restSegmentArrays] = segmentArrays
    const remainingCombinations = this.generateCombinations(restSegmentArrays)

    const result: string[][] = []
    for (const segment of firstSegmentArray) {
      for (const combination of remainingCombinations) {
        result.push([segment, ...combination])
      }
    }

    return result
  }

  fillBlankInputs(
    inputs: AnswerInputs,
    question: PracticeQuestion,
  ): AnswerInputs {
    const blankInputs = inputs.blanks ?? []
    const fullInput = question.answers[0].segments.map((segment, index) => {
      if (blankInputs[index]) {
        return blankInputs[index]
      }
      return this.textProcessor.removeFurigana(segment.toString())
    })

    return { blanks: fullInput }
  }

  checkAnswer(inputs: AnswerInputs, question: PracticeQuestion): CheckResult {
    if (inputs.single) {
      return this.answerChecker.checkAnswer(inputs.single, question)
    }

    const blankInputs = inputs.blanks ?? []
    const result = this.answerChecker.checkAnswer(
      inputs.blanks?.join("") ?? "",
      question,
    )

    // Transform the single input result into multiple inputs for blanks
    return {
      isCorrect: result.isCorrect,
      inputs: blankInputs.map((value) => ({
        value,
        errors: [], // TODO: Split result.inputs[0].errors by position
      })),
      answers: result.answers,
    }
  }
}
