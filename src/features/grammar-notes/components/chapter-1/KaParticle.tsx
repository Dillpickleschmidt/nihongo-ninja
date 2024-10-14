export default function KaParticle() {
  return (
    <div class="relative h-full w-full p-8 text-base text-black">
      <h1 class="text-center text-xl font-bold">
        <span class="font-japanese text-red-500">か</span> Particle
      </h1>
      <div class="mt-3">
        <h2 class="text-lg font-semibold">Function</h2>
        <p>
          Forms questions in Japanese. Simply add{" "}
          <span class="font-japanese text-red-500">か</span> to the end of a
          statement to make it a question.
        </p>
        <div class="flex justify-center">
          <div>
            <p>
              <span class="font-japanese">がくせいです。</span> - (I am) a
              student.
            </p>
            <p>
              <span class="font-japanese">
                がくせいです<span class="text-red-500">か</span>。
              </span>{" "}
              - Are (you) a student?
            </p>
          </div>
        </div>
      </div>
      <div class="mt-3">
        <h2 class="text-lg font-semibold">Question Marks</h2>
        <p>
          Question marks (？) are typically not used—
          <span class="font-japanese text-red-500">か</span> alone is enough to
          indicate a question, though question markers have become popular in
          casual writing.
        </p>
      </div>
      <div class="mt-3 space-y-3 text-center">
        <div class="flex justify-center">
          <div class="border-b-2 border-black">
            <h2 class="text-lg font-semibold italic">Example Sentences</h2>
          </div>
        </div>
        <div>
          <p>
            Q: <span class="font-japanese">いまなんじですか。</span>
          </p>
          <p class="text-xs">What time is it now?</p>
          <p>
            A: <span class="font-japanese">くじです。</span>
          </p>
          <p class="text-xs">It is nine o'clock.</p>
        </div>

        <div>
          <p>
            Q: <span class="font-japanese">ゆきさんはなんさいですか。</span>
          </p>
          <p class="text-xs">How old are you, Yuki?</p>
          <p>
            A: <span class="font-japanese">じゅうきゅうさいです。</span>
          </p>
          <p class="text-xs">I'm nineteen years old.</p>
        </div>

        <div>
          <p>
            Q:{" "}
            <span class="font-japanese">でんわばんごうはなんばんですか。</span>
          </p>
          <p class="text-xs">What is your telephone number?</p>
          <p>
            A:{" "}
            <span class="font-japanese">
              はちろくななごさんぜろきゅうです。
            </span>
          </p>
          <p class="text-xs">It is 867-5309.</p>
        </div>
      </div>

      <div class="mt-4">
        <h2 class="text-lg font-semibold">Non-Question Uses</h2>
        <p>
          Expressing uncertainty:{" "}
          <span class="font-japanese">そうですか。</span> - Is that so? <br />
          Polite confirmations: <span class="font-japanese">
            そうですか。
          </span>{" "}
          - I see.
        </p>
      </div>

      <div class="mt-4">
        <h2 class="text-lg font-semibold">Intonation</h2>
        <p>Rising intonation (↑) for direct questions.</p>
        <p>Falling intonation (↓) for understanding or mild surprise.</p>
      </div>

      <div class="mt-4 space-y-3">
        <p>
          Example: <span class="font-japanese">いまなんじですか。</span> - What
          time is it now? (↑) <br />
          Example: <span class="font-japanese">そうですか。</span> - I see. (↓)
        </p>
      </div>
    </div>
  )
}
