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
import C13Nouns from "./components/chapter-13/C13Nouns"
import C13AdjAndVerbs from "./components/chapter-13/C13AdjAndVerbs"
import C13DayCountAndMisc from "./components/chapter-13/C13DayCountAndMisc"
import C14Nouns1 from "./components/chapter-14/C14Nouns1"
import C14Nouns2 from "./components/chapter-14/C14Nouns2"
import C14AdjAndVerbs from "./components/chapter-14/C14AdjAndVerbs"
import C14CountersAdvMisc from "./components/chapter-14/C14CountersAdvMisc"
import C15Nouns1 from "./components/chapter-15/C15Nouns1"
import C15Nouns2 from "./components/chapter-15/C15Nouns2"
import C15GodanAndIchidanV from "./components/chapter-15/C15GodanAndIchidanV"
import C15IrrVAdvMisc from "./components/chapter-15/C15IrrVAdvMisc"
import C16Nouns from "./components/chapter-16/C16Nouns"
import C16AdjAndUV from "./components/chapter-16/C16AdjAndUV"
import C16RuAndIrrV from "./components/chapter-16/C16RuAndIrrV"
import C16AdvAndMisc from "./components/chapter-16/C16AdvAndMisc"

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
      { title: "Nouns", component: C13Nouns },
      { title: "Adjectives & Verbs", component: C13AdjAndVerbs },
      { title: "Day Count & Misc.", component: C13DayCountAndMisc },
    ],
  },
  {
    number: "14",
    categories: [
      { title: "Nouns 1", component: C14Nouns1 },
      { title: "Nouns 2", component: C14Nouns2 },
      { title: "Adjectives & Verbs", component: C14AdjAndVerbs },
      { title: "Counters, Adv. & Misc.", component: C14CountersAdvMisc },
    ],
  },
  {
    number: "15",
    categories: [
      { title: "Nouns 1", component: C15Nouns1 },
      { title: "Nouns 2", component: C15Nouns2 },
      { title: "Ichidan & Godan Verbs", component: C15GodanAndIchidanV },
      {
        title: "Irregular Verbs, Adv., & Misc.",
        component: C15IrrVAdvMisc,
      },
    ],
  },
  {
    number: "16",
    categories: [
      { title: "Nouns", component: C16Nouns },
      { title: "Adjectives & U-Verbs", component: C16AdjAndUV },
      { title: "Ru-Verbs & Irregular Verbs", component: C16RuAndIrrV },
      { title: "Adverbs & Misc.", component: C16AdvAndMisc },
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
                    <category.component />
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
