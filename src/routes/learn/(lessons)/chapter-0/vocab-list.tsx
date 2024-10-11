import ContentBox from "@/components/ContentBox"
import CommonExpressions from "@/features/vocab-list/components/chapter-0/CommonExpressions"
import Greetings from "@/features/vocab-list/components/chapter-0/Greetings"
import Numbers from "@/features/vocab-list/components/chapter-0/Numbers"

export default function page() {
  return (
    <ContentBox
      nextButtonLink="/learn/chapter-0/greetings"
      nextButtonText="To Greetings ->"
    >
      <div class="pb-32">
        <div class="mx-16 border-b border-neutral-600 pb-16">
          <h1 class="mx-auto mb-12 mt-20 text-center text-5xl font-semibold tracking-wide">
            <em>Vocabulary</em>
          </h1>
          <div class="mx-8">
            <p>
              <strong>Congradulations!</strong> That was a lot to get through, I
              know :(. Let's try something more fun and take a look at the
              upcoming vocabulary—utilizing all the characters you just learned.
            </p>
            <h3 class="mb-6 mt-8 text-center text-2xl font-medium text-orange-400">
              Greetings
            </h3>
            <Greetings />
            <h3 class="mb-6 mt-8 text-center text-2xl font-medium text-orange-400">
              Common Expressions
            </h3>
            <CommonExpressions />
            <h3 class="mb-6 mt-8 text-center text-2xl font-medium text-orange-400">
              Numbers
            </h3>
            <Numbers />
            <h3 class="mt-4 text-center">...up to 99 (it's easy).</h3>
          </div>
        </div>
      </div>
    </ContentBox>
  )
}
