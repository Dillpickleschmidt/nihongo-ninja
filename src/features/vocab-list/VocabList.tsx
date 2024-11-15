import { For } from "solid-js"
import ChapterDropdown from "./components/ChapterDropdown"
import CategoryDropdown from "./components/CategoryDropdown"
import Greetings from "./components/chapter-0/Greetings"
import CommonExpressions from "./components/chapter-0/CommonExpressions"
import Numbers from "./components/chapter-0/Numbers"
import PeopleDescriptorsMisc from "./components/chapter-1/PeopleDescriptorsMisc"
import OccupationsMajors from "./components/chapter-1/OccupationsMajors"
import Countries from "./components/chapter-1/Countries"
import Minutes from "./components/chapter-1/Minutes"
import FamilySchool from "./components/chapter-1/FamilySchool"
import UsefulExpressions from "./components/chapter-1/UsefulExpressions"
import Time from "./components/chapter-1/Time"
import Things from "./components/chapter-2/Things"
import PlacesMoneyFood from "./components/chapter-2/PlacesMoneyFood"
import WordsThatPoint from "./components/chapter-2/WordsThatPoint"
import Nouns from "./components/chapter-3/Nouns"
import DaysAndTime from "./components/chapter-3/DaysAndTime"
import VerbsAndAdjectives from "./components/chapter-3/VerbsAndAdjectives"
import AdverbsExpressions from "./components/chapter-3/AdverbsExpressions"
import AndSoBut from "./components/chapter-3/AndSoBut"
import VocabGroup from "./components/VocabGroup.tsx"

const chapters = [
  {
    number: "0",
    categories: [
      { title: "Greetings", component: Greetings },
      { title: "Common Expressions", component: CommonExpressions },
      { title: "Numbers", component: Numbers },
    ],
  },
  {
    number: "1",
    categories: [
      {
        title: "People, Descriptors, & Misc.",
        component: PeopleDescriptorsMisc,
      },
      { title: "Family & School", component: FamilySchool },
      { title: "Occupations & Majors", component: OccupationsMajors },
      { title: "Countries", component: Countries },
      { title: "Time", component: Time },
      { title: "Minutes", component: Minutes },
      { title: "Useful Expressions", component: UsefulExpressions },
    ],
  },
  {
    number: "2",
    categories: [
      { title: "Things", component: Things },
      { title: "Words That Point", component: WordsThatPoint },
      { title: "Places, Money, & Food", component: PlacesMoneyFood },
    ],
  },
  {
    number: "3",
    categories: [
      { title: "Nouns", component: Nouns },
      { title: "Days of The Week & Time", component: DaysAndTime },
      { title: "Verbs & Adjectives", component: VerbsAndAdjectives },
      { title: "Adverbs & Expressions", component: AdverbsExpressions },
      { title: "And, So, and But", component: AndSoBut },
    ],
  },
  {
    number: "13",
    categories: [
      { title: "Nouns", component: <VocabGroup path="chapter-13/nouns" /> },
      {
        title: "Adjectives & Verbs",
        component: <VocabGroup path="chapter-13/adj-and-verbs" />,
      },
      {
        title: "Day Count & Misc.",
        component: <VocabGroup path="chapter-13/day-count-and-misc" />,
      },
    ],
  },
  {
    number: "14",
    categories: [
      { title: "Nouns 1", component: <VocabGroup path="chapter-14/nouns-1" /> },
      { title: "Nouns 2", component: <VocabGroup path="chapter-14/nouns-2" /> },
      {
        title: "Adjectives & Verbs",
        component: <VocabGroup path="chapter-14/adj-and-verbs" />,
      },
      {
        title: "Counters, Adv. & Misc.",
        component: <VocabGroup path="chapter-14/counters-adv-misc" />,
      },
    ],
  },
  {
    number: "15",
    categories: [
      { title: "Nouns 1", component: <VocabGroup path="chapter-15/nouns-1" /> },
      { title: "Nouns 2", component: <VocabGroup path="chapter-15/nouns-2" /> },
      {
        title: "Ichidan & Godan Verbs",
        component: <VocabGroup path="chapter-15/godan-and-ichidan-v" />,
      },
      {
        title: "Irregular Verbs, Adv., & Misc.",
        component: <VocabGroup path="chapter-15/irr-v-adv-misc" />,
      },
    ],
  },
  {
    number: "16",
    categories: [
      { title: "Nouns", component: <VocabGroup path="chapter-16/nouns-1" /> },
      {
        title: "Adjectives & U-Verbs",
        component: <VocabGroup path="chapter-16/adj-and-u-v" />,
      },
      {
        title: "Ru-Verbs & Irregular Verbs",
        component: <VocabGroup path="chapter-16/ru-and-irr-v" />,
      },
      {
        title: "Adverbs & Misc.",
        component: <VocabGroup path="chapter-16/adv-and-misc" />,
      },
    ],
  },
  {
    number: "17",
    categories: [
      { title: "Nouns 1", component: <VocabGroup path="chapter-17/nouns-1" /> },
      {
        title: "Nouns 2",
        component: <VocabGroup path="chapter-17/nouns-2" />,
      },
      {
        title: "Verbs",
        component: <VocabGroup path="chapter-17/verbs" />,
      },
      {
        title: "Adjectives, Adv. & Misc.",
        component: <VocabGroup path="chapter-17/adj-adv-misc" />,
      },
    ],
  },
  {
    number: "18",
    categories: [
      { title: "Nouns 1", component: <VocabGroup path="chapter-18/nouns-1" /> },
      {
        title: "Nouns 2 & Adjectives",
        component: <VocabGroup path="chapter-18/nouns-2-and-adjectives" />,
      },
      {
        title: "U & Irregular Verbs",
        component: <VocabGroup path="chapter-18/u-and-irr-verbs" />,
      },
      {
        title: "Ru-Verbs & Misc.",
        component: <VocabGroup path="chapter-18/ru-verbs-and-misc" />,
      },
    ],
  },
]

export default function VocabList() {
  return (
    <div class="mx-auto space-y-4 sm:container">
      <For each={chapters}>
        {(chapter) => (
          <ChapterDropdown chapter={chapter.number}>
            <div class="space-y-2">
              <For each={chapter.categories}>
                {(category) => (
                  <CategoryDropdown
                    title={category.title}
                    expandedByDefault={true}
                  >
                    {typeof category.component === "function"
                      ? category.component()
                      : category.component}
                  </CategoryDropdown>
                )}
              </For>
            </div>
          </ChapterDropdown>
        )}
      </For>
    </div>
  )
}
