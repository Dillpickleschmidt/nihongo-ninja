import { Check } from "lucide-solid"
import { JSX } from "solid-js"

export type StarRatingMetric = {
  type: "stars"
  value: number
}

export type FlexibleMetric = {
  type: "flexible"
  content: JSX.Element
  note?: string // Optional caveat or explanation
}

// Helper function to create flexible metrics with an optional note
const createFlexibleMetric = (
  content: JSX.Element,
  note?: string,
): FlexibleMetric => ({
  type: "flexible",
  content,
  note,
})

export type ResourceMetric = {
  price: FlexibleMetric
  grammarExplanations: StarRatingMetric
  listeningContent: FlexibleMetric | StarRatingMetric
  easeOfUse: StarRatingMetric
  spacedRepetition: FlexibleMetric | StarRatingMetric
  progressTracking: FlexibleMetric
  proficiencyLevel: FlexibleMetric
  speakingPractice: StarRatingMetric
  handwritingPractice: FlexibleMetric
  sentenceDrills: FlexibleMetric | StarRatingMetric
  conjugationDrills: FlexibleMetric
  structuredCourse: FlexibleMetric
}

export type Resource = {
  name: string
  metrics: ResourceMetric
}

export const metricLabels = [
  "Price",
  "Grammar Explanations",
  "Listening Content",
  "Ease of Use",
  "Spaced Repetition",
  "Progress Tracking",
  "Proficiency Level",
  "Structured Course",
  "Speaking Practice",
  "Handwriting Practice",
  "Sentence Drills",
  "Conjugation Drills",
]

export const resources: Resource[] = [
  {
    name: "Nihongo Ninja",
    metrics: {
      price: createFlexibleMetric(
        <span class="font-medium text-green-500">Free</span>,
      ),
      grammarExplanations: { type: "stars", value: 5 },
      listeningContent: { type: "stars", value: 4 },
      easeOfUse: { type: "stars", value: 5 },
      spacedRepetition: createFlexibleMetric(
        <Check class="h-6 w-6 text-green-500" />,
        "First-party support for Anki and JPDB.",
      ),
      progressTracking: createFlexibleMetric(
        <Check class="h-6 w-6 text-green-500" />,
      ),
      proficiencyLevel: createFlexibleMetric(
        <span>
          N4<span class="text-red-500">*</span>
        </span>,
        "Covers N4-level vocabulary but only has grammar explanations until Chapter 6, (half of N5—we're working on updating this).",
      ),
      structuredCourse: createFlexibleMetric(
        <Check class="h-6 w-6 text-green-500" />,
      ),
      speakingPractice: { type: "stars", value: 1 },
      handwritingPractice: createFlexibleMetric(
        <span class="font-medium">-</span>,
      ),
      sentenceDrills: { type: "stars", value: 5 },
      conjugationDrills: createFlexibleMetric(
        <Check class="h-6 w-6 text-green-500" />,
      ),
    },
  },
  {
    name: "Genki I & II",
    metrics: {
      price: createFlexibleMetric(<span class="font-medium">$70 + $70</span>),
      grammarExplanations: { type: "stars", value: 4 },
      listeningContent: { type: "stars", value: 1 },
      easeOfUse: { type: "stars", value: 2 },
      spacedRepetition: createFlexibleMetric(
        <span class="font-medium">-</span>,
      ),
      progressTracking: createFlexibleMetric(
        <span class="font-medium">-</span>,
      ),
      proficiencyLevel: createFlexibleMetric("N4"),
      structuredCourse: createFlexibleMetric(
        <Check class="h-6 w-6 text-green-500" />,
      ),
      speakingPractice: { type: "stars", value: 0 },
      handwritingPractice: createFlexibleMetric(
        <Check class="h-6 w-6 text-green-500" />,
      ),
      sentenceDrills: { type: "stars", value: 2 },
      conjugationDrills: createFlexibleMetric(
        <span class="font-medium">-</span>,
      ),
    },
  },
  {
    name: "DuoLingo",
    metrics: {
      price: createFlexibleMetric(
        <span class="font-medium">Free*</span>,
        "Has ads. Must upgrade to Plus for $7/mo to practice more than ~15 minutes/day.",
      ),
      grammarExplanations: { type: "stars", value: 1 },
      listeningContent: { type: "stars", value: 2 },
      easeOfUse: { type: "stars", value: 5 },
      spacedRepetition: createFlexibleMetric(
        <span class="font-medium">-</span>,
      ),
      progressTracking: createFlexibleMetric(
        <Check class="h-6 w-6 text-green-500" />,
      ),
      proficiencyLevel: createFlexibleMetric(
        "N4",
        "Technically covers N4-level but most examples are very unnatural and you won't internalize much.",
      ),
      structuredCourse: createFlexibleMetric(
        <Check class="h-6 w-6 text-green-500" />,
        "It is structured, but your progression is very slow.",
      ),
      speakingPractice: { type: "stars", value: 1 },
      handwritingPractice: createFlexibleMetric(
        <span class="font-medium">-</span>,
      ),
      sentenceDrills: { type: "stars", value: 2 },
      conjugationDrills: createFlexibleMetric(
        <span class="font-medium">-</span>,
      ),
    },
  },
  {
    name: "Memrise",
    metrics: {
      price: createFlexibleMetric(
        <span class="font-medium">$8/mo</span>,
        "Free version available, but key features require a subscription.",
      ),
      grammarExplanations: { type: "stars", value: 1 },
      listeningContent: { type: "stars", value: 4 },
      easeOfUse: { type: "stars", value: 5 },
      spacedRepetition: createFlexibleMetric(
        <Check class="h-6 w-6 text-green-500" />,
        "Proprietary SRS system for vocab—can't switch later down the line.",
      ),
      progressTracking: createFlexibleMetric(
        <Check class="h-6 w-6 text-green-500" />,
        "Tracks vocab progress but lacks structured course progression.",
      ),
      proficiencyLevel: createFlexibleMetric(
        <span>
          N3<span class="text-red-500">*</span>
        </span>,
        "Covers N3-level vocabulary but lacks grammar explanations, so you won't actually be N3 proficient.",
      ),
      structuredCourse: createFlexibleMetric(
        <span class="font-medium">-</span>,
        "Not a fully structured course—focuses on vocabulary only.",
      ),
      speakingPractice: { type: "stars", value: 3 },
      handwritingPractice: createFlexibleMetric(
        <span class="font-medium">-</span>,
      ),
      sentenceDrills: createFlexibleMetric(
        <span class="font-medium">-</span>,
        "Provides example sentences but lacks sentence-building exercises.",
      ),
      conjugationDrills: createFlexibleMetric(
        <span class="font-medium">-</span>,
      ),
    },
  },
  {
    name: "NativShark",
    metrics: {
      price: createFlexibleMetric(<span class="font-medium">$20/mo</span>),
      grammarExplanations: { type: "stars", value: 5 },
      listeningContent: { type: "stars", value: 3 },
      easeOfUse: { type: "stars", value: 5 },
      spacedRepetition: createFlexibleMetric(
        <Check class="h-6 w-6 text-green-500" />,
        "Proprietary SRS system for vocab—can't switch later down the line.",
      ),
      progressTracking: createFlexibleMetric(
        <Check class="h-6 w-6 text-green-500" />,
      ),
      proficiencyLevel: createFlexibleMetric("N3"),
      structuredCourse: createFlexibleMetric(
        <Check class="h-6 w-6 text-green-500" />,
      ),
      speakingPractice: { type: "stars", value: 2 },
      handwritingPractice: createFlexibleMetric(
        <span class="font-medium">-</span>,
      ),
      sentenceDrills: { type: "stars", value: 0 },
      conjugationDrills: createFlexibleMetric(
        <span class="font-medium">-</span>,
      ),
    },
  },
  {
    name: "Bunpro",
    metrics: {
      price: createFlexibleMetric(<span class="font-medium">$5/mo</span>),
      grammarExplanations: { type: "stars", value: 5 },
      listeningContent: { type: "stars", value: 3 },
      easeOfUse: { type: "stars", value: 4 },
      spacedRepetition: createFlexibleMetric(
        <Check class="h-6 w-6 text-green-500" />,
        "Proprietary SRS system for grammar points—can't switch later down the line.",
      ),
      progressTracking: createFlexibleMetric(
        <Check class="h-6 w-6 text-green-500" />,
      ),
      proficiencyLevel: createFlexibleMetric("N1"),
      structuredCourse: createFlexibleMetric(
        <Check class="h-6 w-6 text-green-500" />,
        "Follows JLPT levels and textbook paths but requires self-study.",
      ),
      speakingPractice: { type: "stars", value: 0 },
      handwritingPractice: createFlexibleMetric(
        <span class="font-medium">-</span>,
      ),
      sentenceDrills: { type: "stars", value: 2 },
      conjugationDrills: createFlexibleMetric(
        <Check class="h-6 w-6 text-green-500" />,
        "Provides fill-in-the-blank conjugation drills, but no dedicated conjugation tables.",
      ),
    },
  },
  {
    name: "Satori Reader",
    metrics: {
      price: createFlexibleMetric(
        <span class="font-medium">$9/mo</span>,
        "There's a good bit of free content as well.",
      ),
      grammarExplanations: { type: "stars", value: 3 },
      listeningContent: { type: "stars", value: 5 },
      easeOfUse: { type: "stars", value: 3 },
      spacedRepetition: createFlexibleMetric(
        <Check class="h-6 w-6 text-green-500" />,
        "Some spaced repetition features, but primarily for reading. There are tools to import these to Anki & vice versa.",
      ),
      progressTracking: createFlexibleMetric(
        <span class="font-medium">-</span>,
        "No detailed progress tracking beyond completed articles.",
      ),
      proficiencyLevel: createFlexibleMetric("N1"),
      structuredCourse: createFlexibleMetric(
        <span class="font-medium">-</span>,
        "Not a structured course—focuses on reading immersion.",
      ),
      speakingPractice: { type: "stars", value: 3 },
      handwritingPractice: createFlexibleMetric(
        <span class="font-medium">-</span>,
      ),
      sentenceDrills: createFlexibleMetric(
        <span class="font-medium">-</span>,
        "Provides very good example sentences but no active drills.",
      ),
      conjugationDrills: createFlexibleMetric(
        <span class="font-medium">-</span>,
      ),
    },
  },
  {
    name: "Anki",
    metrics: {
      price: createFlexibleMetric(<span class="font-medium">Free</span>),
      grammarExplanations: { type: "stars", value: 0 },
      listeningContent: { type: "stars", value: 2 },
      easeOfUse: { type: "stars", value: 1 },
      spacedRepetition: createFlexibleMetric(
        <div class="flex">
          <Check class="h-6 w-6 text-green-500" />
          <Check class="h-6 w-6 text-green-500" />
        </div>,
        "The standard for spaced repetition for years, but requires a lot of manual configuration. It's extremely flexible in its use.",
      ),
      progressTracking: createFlexibleMetric(
        <Check class="h-6 w-6 text-green-500" />,
      ),
      proficiencyLevel: createFlexibleMetric("Any", "You make the cards."),
      structuredCourse: createFlexibleMetric(
        <span class="font-medium">-</span>,
      ),
      speakingPractice: { type: "stars", value: 0 },
      handwritingPractice: createFlexibleMetric(
        <span class="font-medium">-</span>,
      ),
      sentenceDrills: { type: "stars", value: 0 },
      conjugationDrills: createFlexibleMetric(
        <span class="font-medium">-</span>,
      ),
    },
  },
  {
    name: "Hello Talk",
    metrics: {
      price: createFlexibleMetric(<span class="font-medium">Free</span>),
      grammarExplanations: { type: "stars", value: 0 },
      listeningContent: { type: "stars", value: 5 },
      easeOfUse: { type: "stars", value: 3 },
      spacedRepetition: createFlexibleMetric(
        <span class="font-medium">-</span>,
      ),
      progressTracking: createFlexibleMetric(
        <span class="font-medium">-</span>,
      ),
      proficiencyLevel: createFlexibleMetric(
        "Native",
        "Applicable for all skill levels. Take it as far as you want.",
      ),
      structuredCourse: createFlexibleMetric(
        <span class="font-medium">-</span>,
      ),
      speakingPractice: { type: "stars", value: 5 },
      handwritingPractice: createFlexibleMetric(
        <span class="font-medium">-</span>,
      ),
      sentenceDrills: { type: "stars", value: 0 },
      conjugationDrills: createFlexibleMetric(
        <span class="font-medium">-</span>,
      ),
    },
  },
  {
    name: "College Class",
    metrics: {
      price: createFlexibleMetric(<span class="font-medium">$$$$</span>),
      grammarExplanations: { type: "stars", value: 4 },
      listeningContent: { type: "stars", value: 4 },
      easeOfUse: { type: "stars", value: 4 },
      spacedRepetition: createFlexibleMetric(
        <span class="font-medium">-</span>,
      ),
      progressTracking: createFlexibleMetric(
        <span class="font-medium">-</span>,
      ),
      proficiencyLevel: createFlexibleMetric(
        "N2",
        "As high as you want to take it. Most stop after N3 and start self-study at that point.",
      ),
      structuredCourse: createFlexibleMetric(
        <Check class="h-6 w-6 text-green-500" />,
      ),
      speakingPractice: { type: "stars", value: 4 },
      handwritingPractice: createFlexibleMetric(
        <Check class="h-6 w-6 text-green-500" />,
      ),
      sentenceDrills: createFlexibleMetric(
        <Check class="h-6 w-6 text-green-500" />,
        "You get plenty of chances to practice but don't get immediate feedback.",
      ),
      conjugationDrills: createFlexibleMetric(
        <Check class="h-6 w-6 text-green-500" />,
        "You don't get immediate feedback.",
      ),
    },
  },
]
