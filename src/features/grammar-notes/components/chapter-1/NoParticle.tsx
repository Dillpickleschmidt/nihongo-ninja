import Furigana from "@/components/text/Furigana"

export default function NoParticle() {
  return (
    <div class="relative h-full w-full p-8 text-base text-black">
      <h1 class="text-center text-xl font-bold">
        <span class="font-japanese text-sky-500">の</span> Particle
      </h1>
      <div class="mt-3">
        <h2 class="text-lg font-semibold">Function</h2>
        <p>
          Connects two nouns, indicating possession or a close relationship.
          Similar to the apostrophe-s ('s) in English, but it's better to think
          of it as a noun connector.
        </p>
      </div>
      <div class="mt-3">
        <h2 class="text-lg font-semibold">Structure</h2>
        <p>
          [Noun 1] + <span class="font-japanese text-sky-500">の</span> + [Noun
          2]
        </p>
        <p>Noun 1 is the owner, and Noun 2 is the possessed item.</p>
      </div>
      <div class="mt-4 text-center">
        <div class="flex justify-center">
          <div class="border-b-2 border-black">
            <h2 class="text-lg font-semibold italic">Example Sentences</h2>
          </div>
        </div>
        <div class="mt-3">
          <p>
            <span class="font-japanese">たけしさんのでんわばんご</span> -
            Takeshi's phone number
          </p>
          <p>
            <span class="font-japanese">わたしのほん</span> - My book
          </p>
          <p>
            <span class="font-japanese">せんせいのくるま</span> - Teacher's car
          </p>
          <p>
            <span class="font-japanese">さとうさんのおかあさん</span> - Satou's
            mother
          </p>
          <p>
            <span class="font-japanese">おとうさんのくるま</span> - Father's car
          </p>
        </div>
      </div>
      <div class="mt-4">
        <h2 class="text-lg font-semibold">Connecting More Than Two Nouns</h2>
        <p>
          You can string together multiple{" "}
          <span class="font-japanese text-sky-500">の</span> particles in a
          single sentence:
        </p>

        <p class="mt-4">
          Example:{" "}
          <span class="font-japanese">
            <Furigana furigana={<span class="text-sm">あめりか</span>}>
              アメリカ
            </Furigana>
            <span class="text-sky-500">の</span>ともだち
            <span class="text-sky-500">の</span>
            <Furigana furigana={<span class="text-sm">かめら</span>}>
              カメラ
            </Furigana>
          </span>{" "}
          - American friend's camera
        </p>
        <p>
          Example:{" "}
          <span class="font-japanese">
            にほんご<span class="text-sky-500">の</span>せんせい
            <span class="text-sky-500">の</span>とけい
          </span>{" "}
          - Japanese teacher's watch
        </p>
      </div>
    </div>
  )
}
