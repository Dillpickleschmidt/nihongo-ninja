import ContentBox from "@/components/ContentBox"
import Countries from "@/features/vocab-list/components/chapter-1/Countries"
import FamilySchool from "@/features/vocab-list/components/chapter-1/FamilySchool"
import Minutes from "@/features/vocab-list/components/chapter-1/Minutes"
import OccupationsMajors from "@/features/vocab-list/components/chapter-1/OccupationsMajors"
import PeopleDescriptorsMisc from "@/features/vocab-list/components/chapter-1/PeopleDescriptorsMisc"
import Time from "@/features/vocab-list/components/chapter-1/Time"
import UsefulExpressions from "@/features/vocab-list/components/chapter-1/UsefulExpressions"

export default function page() {
  return (
    <ContentBox
      nextButtonText="See Upcoming Grammar ->"
      nextButtonLink="/learn/grammar-notes"
    >
      <div class="border-b border-neutral-600 pb-16 md:mx-16">
        <h1 class="mx-auto mb-12 mt-20 text-center text-5xl font-semibold tracking-wide">
          <em>Vocabulary</em>
        </h1>
        <div class="mx-8">
          <h3 class="mb-3 mt-8 text-center text-2xl font-medium text-orange-400">
            People, Descriptors, Misc.
          </h3>
          <PeopleDescriptorsMisc />
          <h3 class="mb-3 mt-8 text-center text-2xl font-medium text-orange-400">
            Useful Expressions
          </h3>
          <UsefulExpressions />
          <h3 class="mb-3 mt-8 text-center text-2xl font-medium text-orange-400">
            Family & School
          </h3>
          <FamilySchool />
          <h3 class="mb-3 mt-8 text-center text-2xl font-medium text-orange-400">
            Countries
          </h3>
          <Countries />
          <h3 class="mb-3 mt-8 text-center text-2xl font-medium text-orange-400">
            Time
          </h3>
          <Time />
          <h3 class="mb-3 mt-8 text-center text-2xl font-medium text-orange-400">
            Minutes
          </h3>
          <Minutes />
          <h3 class="mb-3 mt-8 text-center text-2xl font-medium text-orange-400">
            Occupations & Majors
          </h3>
          <OccupationsMajors />
        </div>
      </div>
      <div class="pb-32" />
    </ContentBox>
  )
}
