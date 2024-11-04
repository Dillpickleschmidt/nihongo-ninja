import ContentBox from "@/components/ContentBox"
import Furigana from "@/components/text/Furigana"
import SelectText from "@/components/text/MultipleChoiceText"

export default function page() {
  return (
    <ContentBox
      nextButtonText="Next Lesson ->"
      nextButtonLink="/learn/chapter-2/mo-particle"
    >
      <h1 class="px-12 pb-6 pt-28 text-center text-4xl font-semibold lg:px-28">
        Asking Who with <span class="font-japanese text-red-500">だれ</span>
      </h1>
      <div class="space-y-6 px-8 sm:px-16 md:px-24">
        <h3 class="!mt-12 text-2xl font-bold">
          <span class="font-japanese text-3xl">
            <Furigana furigana={<span class="text-lg">だれ</span>}>誰</Furigana>
          </span>{" "}
          - Who
        </h3>
        <ul class="!mt-2 list-inside list-disc space-y-2">
          <li>
            <strong>Function: </strong>
            <span class="font-japanese">だれ</span> is used to ask{" "}
            <span class="font-black">who</span> in Japanese. It is a question
            word that helps identify a person among many.
          </li>
          <li>
            <strong>Usage: </strong>Use <span class="font-japanese">だれ</span>{" "}
            when you want to know the identity of someone.
          </li>
        </ul>
        <h4 class="text-xl font-bold">Example Sentences</h4>
        <ol class="!mt-4 ml-6 list-decimal space-y-2">
          <li>
            You notice a new student sitting across the room in class.
            <p class="mt-2">
              <span class="font-japanese text-xl">
                あの
                <Furigana furigana={<span class="text-sm">がくせい</span>}>
                  学生
                </Furigana>
                はだれですか。
              </span>
              {"->"} Who is that student?
            </p>
          </li>
          <li>
            Your young Japanese teacher just started teaching straight out of
            college and is indestinguishable from your peers.
            <p class="mt-2">
              <span class="font-japanese text-xl">
                あのう、だれが
                <Furigana furigana={<span class="text-sm">せんせい</span>}>
                  先生
                </Furigana>
                ですか。
              </span>
              {"->"} Um... who is the teacher?
            </p>
          </li>
          <li>
            You hear a knock on the door.
            <p class="mt-2">
              <span class="font-japanese text-xl">だれですか。</span>
              {"->"} Who is it?
            </p>
          </li>
        </ol>

        <h3 class="!mt-12 text-2xl font-bold">
          <span class="font-japanese text-3xl">
            <Furigana furigana={<span class="text-lg">だれ</span>}>誰</Furigana>
          </span>
          の - Whose
        </h3>
        <ul class="!mt-2 list-inside list-disc space-y-2">
          <li>
            <strong>Function: </strong>
            <span class="font-japanese">だれの</span> is used to ask{" "}
            <span class="font-black">whose</span> something is. It combines{" "}
            <span class="text-nowrap font-japanese">だれ</span> (who) with{" "}
            <span class="font-japanese">の</span> (a possessive particle) to
            inquire about ownership.
          </li>
          <li>
            <strong>Usage: </strong>Use{" "}
            <span class="font-japanese">だれの</span> when you want to know the
            owner of an item.
          </li>
        </ul>
        <h4 class="text-xl font-bold">Example Sentences</h4>
        <ol class="!mt-4 ml-6 list-decimal space-y-2">
          <li>
            You find a wallet on the floor
            <p class="mt-2">
              <span class="font-japanese text-xl">
                これはだれの
                <Furigana furigana={<span class="text-sm">さいふ</span>}>
                  財布
                </Furigana>
                ですか。
              </span>
              {"->"} Whose wallet is this?
            </p>
          </li>
          <li>
            You're walking to your seat and notice a bag on your desk.
            <p class="mt-2">
              <span class="font-japanese text-xl">
                これはだれの
                <Furigana furigana={<span class="text-sm">かばん</span>}>
                  鞄
                </Furigana>
                ですか。
              </span>
              {"->"} Whose bag is this?
            </p>
          </li>
          <li>
            Your professor finds an extravagant sombrero left behind in the
            lecture hall.
            <p class="mt-2">
              <span class="font-japanese text-xl">
                えっと。。。だれの
                <Furigana furigana={<span class="text-sm">ぼうし</span>}>
                  帽子
                </Furigana>
                ですか。
              </span>
              {"->"} Uh... whose hat is this?
            </p>
          </li>
        </ol>
      </div>
      <div class="space-y-4 px-12 pb-32 leading-8 sm:px-16 md:px-24 [&>*]:space-y-4">
        <h3 class="pt-12 text-center text-3xl font-bold">Practice</h3>
        <p>
          You notice a skinny old man at the gym lift twice your max. You turn
          your head and whisper to your friend:
        </p>
        <SelectText
          answer="あのおじいさんはだれですか。"
          a="あのおじいさんはだれのですか。"
          b="そのおじいさんはだれですか。"
          c="あのおじさんはだれですか。"
          d="あのおじいさんはだれですか。"
          class="text-xl"
        />
        <p>
          Someone crazy-looking comes up to you and proclaims to be your
          long-lost brother, but you're at least willing to hear them out...
        </p>
        <SelectText
          answer="あのう、すみませんが、だれですか。"
          a="あのう、だれのか。"
          b="あのう、すみませんが、だれですか。"
          c="あのう、だれの。"
          d="あのう、すみませんが、だれのか。"
          class="text-xl"
        />
        <p>
          Someone left their umbrella in the stand, and your shop is closing for
          the day. You turn and ask your remaining colleagues:
        </p>
        <SelectText
          answer="だれのかさですか。"
          a="このかさはだれですか。"
          b="だれのかさですか。"
          c="かさはだれですか。"
          d="これはだれですか。"
          class="text-xl"
        />
      </div>
    </ContentBox>
  )
}
