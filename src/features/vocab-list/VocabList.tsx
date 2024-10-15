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

export default function VocabList() {
  return (
    <>
      <h1 class="mx-auto pb-6 pt-28 text-center text-5xl font-semibold tracking-wide">
        <em>Chapter 0</em>
      </h1>
      <div class="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
        <div class="hidden lg:block">
          <h3 class="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Greetings
          </h3>
          <Greetings />
          <h3 class="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Numbers
          </h3>
          <Numbers />
          <p class="mt-4 text-center">...up to 99 (it's easy).</p>
        </div>
        <div class="hidden lg:block">
          <h3 class="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Common Expressions
          </h3>
          <CommonExpressions />
        </div>

        <div class="lg:hidden">
          <div>
            <h3 class="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
              Greetings
            </h3>
            <Greetings />
          </div>
          <div>
            <h3 class="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
              Common Expressions
            </h3>
            <CommonExpressions />
          </div>
          <div>
            <h3 class="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
              Numbers
            </h3>
            <Numbers />
            <p class="mt-4 text-center">...up to 99 (it's easy).</p>
          </div>
        </div>
      </div>

      <h1 class="mx-auto mb-6 mt-20 text-center text-5xl font-semibold tracking-wide">
        <em>Chapter 1</em>
      </h1>
      <div class="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
        <div class="hidden lg:block">
          <h3 class="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            People, Descriptors, Misc.
          </h3>
          <PeopleDescriptorsMisc />
          <h3 class="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Occupations & Majors
          </h3>
          <OccupationsMajors />
          <h3 class="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Countries
          </h3>
          <Countries />
          <h3 class="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Minutes
          </h3>
          <Minutes />
        </div>

        <div class="hidden lg:block">
          <h3 class="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Family & School
          </h3>
          <FamilySchool />
          <h3 class="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Useful Expressions
          </h3>
          <UsefulExpressions />
          <h3 class="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Time
          </h3>
          <Time />
        </div>

        <div class="lg:hidden">
          <h3 class="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            People, Descriptors, Misc.
          </h3>
          <PeopleDescriptorsMisc />
        </div>
        <div class="lg:hidden">
          <h3 class="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Family & School
          </h3>
          <FamilySchool />
        </div>
        <div class="lg:hidden">
          <h3 class="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Occupations & Majors
          </h3>
          <OccupationsMajors />
        </div>
        <div class="lg:hidden">
          <h3 class="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Useful Expressions
          </h3>
          <UsefulExpressions />
        </div>
        <div class="lg:hidden">
          <h3 class="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Countries
          </h3>
          <Countries />
        </div>
        <div class="lg:hidden">
          <h3 class="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Time
          </h3>
          <Time />
        </div>
        <div class="lg:hidden">
          <h3 class="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Minutes
          </h3>
          <Minutes />
        </div>
      </div>

      <h1 class="mx-auto mb-6 mt-20 text-center text-5xl font-semibold tracking-wide">
        <em>Chapter 2</em>
      </h1>
      <div class="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
        <div class="hidden lg:block">
          <h3 class="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Things
          </h3>
          <Things />

          <h3 class="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Places, Money, Food
          </h3>
          <PlacesMoneyFood />
        </div>

        <div class="hidden lg:block">
          <h3 class="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Words That Point
          </h3>
          <WordsThatPoint />
        </div>

        <div class="lg:hidden">
          <h3 class="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Things
          </h3>
          <Things />
        </div>
        <div class="lg:hidden">
          <h3 class="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Words That Point
          </h3>
          <WordsThatPoint />
        </div>
        <div class="lg:hidden">
          <h3 class="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Places, Money, Food
          </h3>
          <PlacesMoneyFood />
        </div>
      </div>

      <h1 class="mx-auto mb-6 mt-20 text-center text-5xl font-semibold tracking-wide">
        <em>Chapter 3</em>
      </h1>
      <div class="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
        <div class="hidden lg:block">
          <h3 class="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Nouns
          </h3>
          <Nouns />
          <h3 class="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Verbs & Adjectives
          </h3>
          <VerbsAndAdjectives />
        </div>

        <div class="hidden lg:block">
          <h3 class="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Days of The Week & Time
          </h3>
          <DaysAndTime />
          <h3 class="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Adverbs & Expressions
          </h3>
          <AdverbsExpressions />
          <h3 class="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            And, So, and But
          </h3>
          <AndSoBut />
        </div>

        <div class="lg:hidden">
          <h3 class="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Nouns
          </h3>
          <Nouns />
        </div>
        <div class="lg:hidden">
          <h3 class="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Days of The Week & Time
          </h3>
          <DaysAndTime />
        </div>
        <div class="lg:hidden">
          <h3 class="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Verbs & Adjectives
          </h3>
          <VerbsAndAdjectives />
        </div>
        <div class="lg:hidden">
          <h3 class="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Adverbs & Expressions
          </h3>
          <AdverbsExpressions />
        </div>
        <div class="lg:hidden">
          <h3 class="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            And, So, and But
          </h3>
          <AndSoBut />
        </div>
      </div>
      <h1 class="mx-auto mb-6 mt-20 text-center text-5xl font-semibold tracking-wide">
        <em>Chapter 13</em>
      </h1>
      <div class="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
          <h3 class="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Nouns
          </h3>
          <C13Nouns />
        </div>
        <div>
          <h3 class="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Adjectives & Verbs
          </h3>
          <C13AdjAndVerbs />
        </div>
        <div>
          <h3 class="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Day Count & Misc.
          </h3>
          <C13DayCountAndMisc />
        </div>
      </div>

      <h1 class="mx-auto mb-6 mt-20 text-center text-5xl font-semibold tracking-wide">
        <em>Chapter 14</em>
      </h1>
      <div class="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
          <h3 class="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Nouns 1
          </h3>
          <C14Nouns1 />
        </div>
        <div>
          <h3 class="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Nouns 2
          </h3>
          <C14Nouns2 />
        </div>
        <div>
          <h3 class="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Adjectives & Verbs
          </h3>
          <C14AdjAndVerbs />
        </div>
        <div>
          <h3 class="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Counters, Adv. & Misc.
          </h3>
          <C14CountersAdvMisc />
        </div>
      </div>

      <h1 class="mx-auto mb-6 mt-20 text-center text-5xl font-semibold tracking-wide">
        <em>Chapter 15</em>
      </h1>
      <div class="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
          <h3 class="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Nouns 1
          </h3>
          <C15Nouns1 />
        </div>
        <div>
          <h3 class="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Nouns 2
          </h3>
          <C15Nouns2 />
        </div>
        <div>
          <h3 class="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Ichidan & Godan Verbs
          </h3>
          <C15GodanAndIchidanV />
        </div>
        <div>
          <h3 class="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Irreg Verbs, Adv., & Misc.
          </h3>
          <C15IrrVAdvMisc />
        </div>
      </div>

      <h1 class="mx-auto mb-6 mt-20 text-center text-5xl font-semibold tracking-wide">
        <em>Chapter 16</em>
      </h1>
      <div class="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
          <h3 class="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Nouns
          </h3>
          <C16Nouns />
        </div>
        <div>
          <h3 class="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Adjectives & U-Verbs
          </h3>
          <C16AdjAndUV />
        </div>
        <div>
          <h3 class="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Ru-Verbs & Irregular Verbs
          </h3>
          <C16RuAndIrrV />
        </div>
        <div>
          <h3 class="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Adverbs & Misc.
          </h3>
          <C16AdvAndMisc />
        </div>
      </div>
    </>
  )
}
