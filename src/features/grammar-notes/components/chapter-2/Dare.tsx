import Furigana from "@/components/text/Furigana"

export default function Dare() {
  return (
    <div class="relative h-full w-full p-8 text-base text-black">
      <h1 class="text-center text-xl font-bold">
        Asking Who with <span class="font-japanese text-red-500">だれ</span>
      </h1>
      <div class="mt-3">
        <h2 class="text-lg font-semibold">Function</h2>
        <p>
          <span class="font-japanese font-semibold text-red-500">
            誰 (だれ)
          </span>{" "}
          is used to ask <strong>who</strong> in Japanese. It is a question word
          that helps identify a person among many.
        </p>
      </div>
      <div class="mt-4">
        <div class="flex justify-center">
          <div class="mb-3 border-b-2 border-black">
            <h2 class="text-lg font-semibold italic">Example Sentences</h2>
          </div>
        </div>
        <div class="text-center">
          <p>
            <span class="font-japanese">
              あの
              <Furigana furigana={<span class="text-xs">がくせい</span>}>
                学生
              </Furigana>
              はだれですか。
            </span>{" "}
            - Who is that student?
          </p>
          <p>
            <span class="font-japanese">
              あのう、だれが
              <Furigana furigana={<span class="text-xs">がくせい</span>}>
                先生
              </Furigana>
              ですか。
            </span>{" "}
            - Um... who is the teacher?
          </p>
          <p class="mt-2">
            <span class="font-japanese">だれですか。</span> - Who is it?
          </p>
        </div>
      </div>
      <div class="mt-4">
        <h2 class="text-lg font-semibold">だれの - Whose</h2>
        <p>
          <span class="font-japanese">だれの</span> is used to ask whose
          something is. It combines <span class="font-japanese">だれ</span>{" "}
          (who) with <span class="font-japanese">の</span> (a possessive
          particle) to inquire about ownership.
        </p>
      </div>
      <div class="mt-4 text-center">
        <div class="flex justify-center">
          <div class="mb-3 border-b-2 border-black">
            <h2 class="text-lg font-semibold italic">Example Sentences</h2>
          </div>
        </div>
        <p>
          <span class="font-japanese">
            これはだれの
            <Furigana furigana={<span class="text-xs">さいふ</span>}>
              財布
            </Furigana>
            ですか。
          </span>{" "}
          - Whose wallet is this?
        </p>
        <p>
          <span class="font-japanese">
            これはだれの
            <Furigana furigana={<span class="text-xs">かばん</span>}>
              鞄
            </Furigana>
            ですか。
          </span>{" "}
          - Whose bag is this?
        </p>
        <p>
          <span class="font-japanese">
            だれの
            <Furigana furigana={<span class="text-xs">ぼうし</span>}>
              帽子
            </Furigana>
            ですか。
          </span>{" "}
          - Whose hat is this?
        </p>
      </div>
    </div>
  )
}
