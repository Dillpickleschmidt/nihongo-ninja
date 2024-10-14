import Furigana from "@/components/text/Furigana"

export default function NeYoParticles() {
  return (
    <div class="relative h-full w-full p-8 text-base text-black">
      <h1 class="text-center text-xl font-bold">
        Understanding <span class="font-japanese text-indigo-500">ね</span> and{" "}
        <span class="font-japanese text-green-600">よ</span>
      </h1>
      <div class="mt-3">
        <h2 class="text-lg font-semibold">
          Function of{" "}
          <span class="font-japanese text-xl font-bold text-indigo-500">
            ね
          </span>{" "}
          (ne)
        </h2>
        <p>
          The particle{" "}
          <span class="font-japanese font-semibold text-indigo-500">ね</span> is
          used to confirm <u>shared knowledge</u>, seek agreement, or express
          empathy. It's similar to saying <strong>isn't it?</strong> or{" "}
          <strong>right?</strong> in English.
        </p>
      </div>

      <div class="mt-4 flex justify-center">
        <div class="mb-3 border-b-2 border-black">
          <h2 class="text-lg font-semibold italic">Example Sentences</h2>
        </div>
      </div>
      <div class="text-center">
        <p>
          <span class="font-japanese">このラーメンはおいしいですね。</span> -
          This ramen is tasty, isn't it?
        </p>
        <p>
          <span class="font-japanese">あの映画は面白かったね。</span> - That
          movie was interesting, wasn't it?
        </p>
        <p>
          <span class="font-japanese">今日はいい天気ですね。</span> - It's nice
          weather today, isn't it?
        </p>
      </div>

      <h2 class="mt-6 text-lg font-semibold">
        Function of{" "}
        <span class="font-japanese text-xl font-bold text-green-600">よ</span>{" "}
        (yo)
      </h2>
      <p>
        The particle{" "}
        <span class="font-japanese font-semibold text-green-600">よ</span> is
        used to provide <u>new information</u>, assert something with
        confidence, or emphasize a point. It's like saying{" "}
        <strong>you know</strong> or <strong>I tell you</strong> in English.
      </p>

      <div class="mt-1 flex justify-center">
        <div class="mb-3 border-b-2 border-black">
          <h2 class="text-lg font-semibold italic">Example Sentences</h2>
        </div>
      </div>
      <div class="text-center">
        <p>
          <span class="font-japanese">これは私の本ですよ。</span> - This is my
          book, you know.
        </p>
        <p>
          <span class="font-japanese">その映画は面白いですよ。</span> - That
          movie is interesting, you know.
        </p>
        <p>
          <span class="font-japanese">いいえ、それは違いますよ。</span> - No,
          that's not correct.
        </p>
      </div>

      <h2 class="mt-6 text-lg font-semibold">
        Combining{" "}
        <span class="font-japanese text-xl font-bold text-indigo-500">ね</span>{" "}
        and{" "}
        <span class="font-japanese text-xl font-bold text-green-600">よ</span>:{" "}
        <span class="font-japanese text-xl font-bold text-orange-400">
          よね
        </span>{" "}
        (yone)
      </h2>
      <p>
        When you want to confirm information and seek agreement simultaneously,
        you can combine{" "}
        <span class="font-japanese font-semibold text-indigo-500">ね</span> and{" "}
        <span class="font-japanese font-semibold text-green-600">よ</span> to
        form{" "}
        <span class="font-japanese font-semibold text-orange-400">よね</span>{" "}
        (yone). This combination is used to assert something you believe to be
        true and seek the listener's agreement or confirmation.
      </p>

      <div class="mt-1 flex justify-center">
        <div class="mb-3 border-b-2 border-black">
          <h2 class="text-lg font-semibold italic">Example Sentences</h2>
        </div>
      </div>
      <p>
        <span class="font-japanese">
          田中さんは
          <Furigana furigana={<span class="text-xs">がくせい</span>}>
            学生
          </Furigana>
          ですよね。
        </span>{" "}
        - Tanaka is a student, right?
      </p>
      <p>
        <span class="font-japanese">
          あの映画は面白かったですよね。(Ano eiga wa omoshirokatta desu yone.){" "}
        </span>{" "}
        - That movie was interesting, wasn't it?
      </p>
    </div>
  )
}
