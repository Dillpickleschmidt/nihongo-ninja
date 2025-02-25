// core/answer-processing/VariationGenerator.ts
import type { Answer, PracticeQuestion } from "./types"
import { HonorificHandler } from "../grammar/HonorificHandler"
import { PronounHandler } from "../grammar/PronounHandler"
import { TextProcessor } from "../text/TextProcessor"

export class VariationGenerator {
  private honorificHandler: HonorificHandler
  private pronounHandler: PronounHandler
  private textProcessor: TextProcessor

  constructor() {
    this.honorificHandler = new HonorificHandler()
    this.pronounHandler = new PronounHandler()
    this.textProcessor = new TextProcessor()
  }

  generateVariations(question: PracticeQuestion): PracticeQuestion {
    if (this.shouldIncludeFirstPerson(question.english)) {
      // Keep original answers and add versions with pronouns
      const originalAnswers = question.answers
      const answersWithPronouns = question.answers.map((answer) => ({
        ...answer,
        segments: ["私[わたし]", "は", ...answer.segments],
        isVariation: true,
      }))

      question.answers = [...originalAnswers, ...answersWithPronouns]
    }

    return {
      ...question,
      answers: this.generateAnswerVariations(question),
    }
  }

  private generateAnswerVariations(question: PracticeQuestion): Answer[] {
    const includeFirstPerson = this.shouldIncludeFirstPerson(question.english)
    const includeFirstPersonPlural = this.shouldIncludeFirstPersonPlural(
      question.english,
    )

    const uniqueVariations = new Map<string, Answer>()
    const addUniqueVariation = (variation: Answer) => {
      const key = variation.segments.join("|")
      if (!uniqueVariations.has(key)) {
        uniqueVariations.set(key, variation)
      }
    }

    question.answers.forEach((answer) => {
      // Add the original answer
      addUniqueVariation({
        ...answer,
        isVariation: false,
      })

      // Start with pronoun variations if applicable
      let baseVariations: Answer[] = [answer]

      if (includeFirstPerson) {
        baseVariations = baseVariations.concat(
          this.pronounHandler.generatePronounVariations(answer),
        )
      }

      if (includeFirstPersonPlural) {
        baseVariations = baseVariations.concat(
          this.pronounHandler.generatePluralPronounVariations(answer),
        )
      }

      // For each base variation (original + pronoun variations),
      // generate all other types of variations
      baseVariations.forEach((baseVariation) => {
        addUniqueVariation(baseVariation)

        // Generate honorific variations if applicable
        if (this.honorificHandler.hasHonorific(baseVariation.segments)) {
          this.honorificHandler
            .generateHonorificVariations(baseVariation)
            .forEach((honorificVariation) => {
              addUniqueVariation(honorificVariation)

              // Apply kana variations to honorific variations
              this.generateKanaVariations(honorificVariation).forEach(
                (kanaVariation) => {
                  addUniqueVariation(kanaVariation)
                  // Apply period variations to kana variations
                  this.generatePeriodVariations(kanaVariation).forEach(
                    addUniqueVariation,
                  )
                },
              )

              // Apply period variations to honorific variations
              this.generatePeriodVariations(honorificVariation).forEach(
                addUniqueVariation,
              )
            })
        }

        // Generate kana variations for the base variation
        this.generateKanaVariations(baseVariation).forEach((kanaVariation) => {
          addUniqueVariation(kanaVariation)
          // Apply period variations to kana variations
          this.generatePeriodVariations(kanaVariation).forEach(
            addUniqueVariation,
          )
        })

        // Generate period variations for the base variation
        this.generatePeriodVariations(baseVariation).forEach(addUniqueVariation)
      })
    })

    return Array.from(uniqueVariations.values())
  }

  private generateKanaVariations(answer: Answer): Answer[] {
    const variations: Answer[] = []
    const hasKanji = answer.segments.some((segment) => segment.includes("["))

    if (hasKanji) {
      const kanaSegments = answer.segments.map((segment) =>
        this.textProcessor.convertToKana(segment),
      )

      variations.push({
        ...answer,
        segments: kanaSegments,
        isVariation: true,
        isKanaVariation: true,
      })
    }

    return variations
  }

  private generatePeriodVariations(answer: Answer): Answer[] {
    const variations: Answer[] = []
    const lastSegment = answer.segments[answer.segments.length - 1]
    const hasPeriod = lastSegment.endsWith("。")

    if (hasPeriod) {
      variations.push({
        ...answer,
        segments: [...answer.segments.slice(0, -1), lastSegment.slice(0, -1)],
        isVariation: true,
      })
    } else {
      variations.push({
        ...answer,
        segments: [...answer.segments.slice(0, -1), lastSegment + "。"],
        isVariation: true,
      })
    }

    return variations
  }

  private shouldIncludeFirstPerson(english: string): boolean {
    return english.startsWith("I ") && !english.startsWith("I heard")
  }

  private shouldIncludeFirstPersonPlural(english: string): boolean {
    return english.startsWith("We ")
  }
}
