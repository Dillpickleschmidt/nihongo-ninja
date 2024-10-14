import Furigana from "@/components/text/Furigana"

export default function WordOrder() {
  return (
    <div class="h-full w-full p-8 text-base text-black">
      <h1 class="text-center text-xl font-bold">
        Japanese Word Order and Particle Placement
      </h1>

      <div class="mt-3">
        <h2 class="text-lg font-semibold">Basic Word Order</h2>
        <p>
          Japanese word order is flexible, but the verb typically comes at the
          end of the sentence. Common pattern:{" "}
          <strong>Topic - Time - Place - Object - Verb</strong>
        </p>
      </div>

      <div class="mt-2 text-center">
        <p class="font-japanese">私は 明日 東京で ラーメンを 食べます。</p>
        <p class="text-sm">I will eat ramen in Tokyo tomorrow.</p>
      </div>

      <h2 class="mt-4 text-lg font-semibold">Emphasis and Flexibility</h2>
      <p>
        Important or new information tends to be placed closer to the end of the
        sentence, just before the verb. Word order can be changed for emphasis,
        while maintaining grammatical correctness.
      </p>

      <div class="mt-2 text-center">
        <p class="font-japanese">明日 東京で 私は ラーメンを 食べます。</p>
        <p class="text-sm">Tomorrow in Tokyo, I will eat ramen.</p>
      </div>

      <h2 class="mt-4 text-lg font-semibold">Particle Placement Rules</h2>
      <ul class="list-inside list-disc">
        <li>
          Most particles are attached to the <strong>end of nouns</strong>
        </li>
        <li>
          Particles move with their associated nouns when word order changes
        </li>
      </ul>

      <div class="mt-2">
        <div class="flex w-full items-center">
          <p class="w-1/4 font-semibold text-red-500">Incorrect</p>
          <p class="w-3/4">
            <span class="font-japanese line-through">
              私は 本 ゆっくり<span class="font-bold text-red-500">を</span>{" "}
              読みます。
            </span>
          </p>
        </div>
        <div class="flex w-full items-center">
          <p class="w-1/4 font-semibold">Correct</p>
          <p class="w-3/4">
            <span class="font-japanese">
              私は 本<span class="font-bold text-red-500">を</span> ゆっくり
              読みます。
            </span>
            {" -> "} I read books slowly.
          </p>
        </div>
      </div>
      <ul class="ml-4 mt-1 list-inside list-disc">
        <li>
          The first example is like saying "I read <u>slowlys</u>" as opposed to
          "I read <u>books</u>" since <span class="font-japanese">を</span> is
          incorrectly paired with <span class="font-japanese">ゆっくり</span>{" "}
          instead of <span class="font-japanese">本</span>.
        </li>
      </ul>

      <h2 class="mt-4 text-lg font-semibold">Omission in Conversation</h2>
      <p>
        In casual speech, subjects, objects, and <u>even particles</u> can
        sometimes be omitted.
      </p>

      <div class="-mt-2 text-center">
        <p class="font-japanese">
          (私は)コーヒーが
          <Furigana furigana={<span class="text-sm">す</span>}>好</Furigana>
          きです。
        </p>
        <p class="text-sm">(I) like coffee.</p>
      </div>
      <div class="mt-2 text-center">
        <p class="font-japanese">何(を)してるの？</p>
        <p class="text-sm">What are you doing?</p>
      </div>

      <h2 class="mt-1 text-lg font-semibold">Key Points to Remember</h2>
      <ul class="list-inside list-disc">
        <li>Verb always comes at the end</li>
        <li>Particles stick to their nouns</li>
        <li>Word order can change for emphasis</li>
        <li>Context/level of formality allows for omission in conversation</li>
      </ul>
    </div>
  )
}
