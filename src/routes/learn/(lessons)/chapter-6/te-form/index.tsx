import ContentBox from "@/components/ContentBox"
import SelectText from "@/components/text/MultipleChoiceText"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { A } from "@solidjs/router"
import IrregularVerbsTeFormChart1 from "./components/IrregularVerbsTeFormChart1"
import IrregularVerbsTeFormChart2 from "./components/IrregularVerbsTeFormChart2"

const TeFormLesson = () => {
  return (
    <ContentBox
      nextButtonText="Next Lesson ->"
      nextButtonLink="/learn/chapter-2/janai"
    >
      <h1 class="px-6 pb-6 pt-28 text-center text-4xl font-semibold sm:px-12 lg:px-28">
        Verb Conjugation - <span class="font-japanese text-green-500">て</span>{" "}
        Form
      </h1>

      <div class="space-y-6 px-8 sm:px-16 md:px-24">
        <p>
          The{" "}
          <span class="font-japanese text-xl font-medium text-green-500">
            て
          </span>{" "}
          form is one of the most fundamental patterns in Japanese grammar. It
          acts as a versatile "connector" that allows you to build complex
          expressions from basic verbs - letting you link multiple actions, make
          requests, ask permission, and more. Unlike English which uses
          different words for each of these purposes, Japanese achieves them all
          through this single form.
        </p>
        <div class="rounded-lg bg-card p-4">
          <p class="font-semibold text-green-500">Uses of the て Form:</p>

          <div class="mt-4 space-y-4">
            <div class="space-y-2">
              <p class="font-semibold">This Chapter</p>
              <ul class="list-disc space-y-1 pl-6">
                <li>
                  <span class="font-japanese">〜てください</span> - Making
                  polite requests
                  <span class="ml-2 text-sm text-muted-foreground">
                    ("Please do...")
                  </span>
                </li>
                <li>
                  <span class="font-japanese">Verb て、Verb</span> - Connecting
                  multiple actions
                  <span class="ml-2 text-sm text-muted-foreground">
                    ("do X and then Y")
                  </span>
                </li>
                <li>
                  <span class="font-japanese">〜てもいいですか</span> - Asking
                  permission
                  <span class="ml-2 text-sm text-muted-foreground">
                    ("May I...?")
                  </span>
                </li>
                <li>
                  <span class="font-japanese">〜てはいけません</span> -
                  Expressing prohibition
                  <span class="ml-2 text-sm text-muted-foreground">
                    ("Must not...")
                  </span>
                </li>
              </ul>
            </div>

            <div class="space-y-2">
              <p class="font-semibold">Future Chapters</p>
              <ul class="list-disc space-y-1 pl-6">
                <li>
                  <span class="font-japanese">〜ている</span> - Expressing
                  ongoing actions or states
                  <span class="ml-2 text-sm text-muted-foreground">
                    (e.g., "I am eating" vs. "I eat") (Next Chapter)
                  </span>
                </li>
                <li>
                  <span class="font-japanese">〜てみる</span> - Trying something
                  out
                  <span class="ml-2 text-sm text-muted-foreground">
                    (e.g., "try eating it", "try studying this way")
                  </span>
                </li>
                <li>
                  <span class="font-japanese">
                    〜てくれる/てあげる/てもらう
                  </span>{" "}
                  - Expressing giving and receiving of actions
                  <span class="ml-2 text-sm text-muted-foreground">
                    (e.g., "do for me", "do for someone", "receive the action")
                  </span>
                </li>
                <li>
                  <span class="font-japanese">〜てすみません</span> -
                  Apologizing for actions
                  <span class="ml-2 text-sm text-muted-foreground">
                    (e.g., "Sorry for being late", "Sorry for the trouble")
                  </span>
                </li>
                <li>
                  <span class="italic">+ many more!</span>
                </li>
              </ul>
            </div>

            <p class="text-sm text-muted-foreground">
              The{" "}
              <span class="font-japanese font-medium text-green-500">て</span>{" "}
              form is a cornerstone of Japanese grammar that you'll continue
              discovering new uses for as you progress.
            </p>
          </div>
        </div>

        <hr class="my-6 border-t" />

        <h3 class="text-xl font-bold text-orange-400">
          Quick Review: Japanese Verbs
        </h3>
        <div class="mt-4 space-y-4">
          <div>
            <p class="text-lg font-semibold">Identifying Verbs</p>
            <p class="mt-2">
              All Japanese verbs end in a character with an{" "}
              <span class="font-bold">u-sound</span>{" "}
              <span class="text-base text-muted-foreground">
                (in dictionary form)
              </span>
              :
            </p>
            <div class="mt-2 grid grid-cols-2 gap-4 font-japanese text-xl sm:grid-cols-4">
              <div class="rounded bg-card p-2 text-center">う (u)</div>
              <div class="rounded bg-card p-2 text-center">つ (tsu)</div>
              <div class="rounded bg-card p-2 text-center">む (mu)</div>
              <div class="rounded bg-card p-2 text-center">ぶ (bu)</div>
              <div class="rounded bg-card p-2 text-center">く (ku)</div>
              <div class="rounded bg-card p-2 text-center">ぐ (gu)</div>
              <div class="rounded bg-card p-2 text-center">す (su)</div>
              <div class="rounded bg-card p-2 text-center">る (ru)</div>
            </div>
          </div>

          <div>
            <p class="py-2 text-lg font-semibold">
              Differentiating Godan & Ichidan Verbs
            </p>
            <div class="mt-2 rounded-lg bg-card p-4">
              <p class="font-bold text-orange-400">Ichidan Verbs:</p>
              <ul class="mt-2 list-disc space-y-1 pl-6">
                <li>
                  End in <span class="font-japanese">いる</span> or{" "}
                  <span class="font-japanese">える</span>
                </li>
                <li>
                  Stem always ends in <span class="font-japanese">い</span> or{" "}
                  <span class="font-japanese">え</span>
                </li>
                <li>One step to conjugate (just remove る)</li>
                <li>
                  Example:{" "}
                  <span class="font-japanese">食べる、見る、起きる</span>
                </li>
              </ul>
            </div>
            <div class="mt-4 rounded-lg bg-card p-4">
              <p class="font-bold text-orange-400">Godan Verbs:</p>
              <ul class="mt-2 list-disc space-y-1 pl-6">
                <li>All other verbs that don't match Ichidan pattern</li>
                <li>Keep the consonant, shift the 'u' sound</li>
                <li>
                  Examples:{" "}
                  <span class="font-japanese">書く、待つ、読む、話す</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr class="my-6 border-t" />

        <h2 class="!mt-12 text-center text-3xl font-bold">
          <span class="text-green-500">て</span>-Form Conjugation Chart
        </h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead class="w-1/3 text-base">Verb Type</TableHead>
              <TableHead class="w-1/3 text-base">Rule</TableHead>
              <TableHead class="w-1/3 text-base">Examples</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell class="text-lg">Ichidan verbs</TableCell>
              <TableCell class="font-japanese text-xl">る → て</TableCell>
              <TableCell class="font-japanese text-xl">
                食べる → 食べ
                <span class="underline decoration-green-500/75 underline-offset-4">
                  て
                </span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell rowSpan={5} class="text-lg">
                Godan verbs
              </TableCell>
              <TableCell class="font-japanese text-xl">
                <div class="flex items-center gap-4">
                  <div class="space-y-1">
                    <div>う</div>
                    <div>つ</div>
                    <div>る*</div>
                  </div>
                  <div>→</div>
                  <div>って</div>
                </div>
              </TableCell>
              <TableCell class="font-japanese text-xl">
                <div>
                  会う → 会
                  <span class="underline decoration-green-500/75 underline-offset-4">
                    って
                  </span>
                </div>
                <div>
                  待つ → 待
                  <span class="underline decoration-green-500/75 underline-offset-4">
                    って
                  </span>
                </div>
                <div>
                  とる → と
                  <span class="underline decoration-green-500/75 underline-offset-4">
                    って
                  </span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell class="font-japanese text-xl">
                <div class="flex items-center gap-4">
                  <div class="space-y-1">
                    <div>む</div>
                    <div>ぶ</div>
                    <div>ぬ</div>
                  </div>
                  <div>→</div>
                  <div>んで</div>
                </div>
              </TableCell>
              <TableCell class="font-japanese text-xl">
                <div>
                  読む → 読
                  <span class="underline decoration-green-500/75 underline-offset-4">
                    んで
                  </span>
                </div>
                <div>
                  遊ぶ → 遊
                  <span class="underline decoration-green-500/75 underline-offset-4">
                    んで
                  </span>
                </div>
                <div>
                  死ぬ → 死
                  <span class="underline decoration-green-500/75 underline-offset-4">
                    んで
                  </span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell class="font-japanese text-xl">
                く → いて
                <div class="mt-2 text-base italic text-muted-foreground">
                  Exception: 行く → 行って
                </div>
              </TableCell>
              <TableCell class="font-japanese text-xl">
                書く → 書
                <span class="underline decoration-green-500/75 underline-offset-4">
                  いて
                </span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell class="font-japanese text-xl">ぐ → いで</TableCell>
              <TableCell class="font-japanese text-xl">
                泳ぐ → 泳
                <span class="underline decoration-green-500/75 underline-offset-4">
                  いで
                </span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell class="font-japanese text-xl">す → して</TableCell>
              <TableCell class="font-japanese text-xl">
                話す → 話
                <span class="underline decoration-green-500/75 underline-offset-4">
                  して
                </span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell class="text-lg">Irregular verbs</TableCell>
              <TableCell class="font-japanese text-xl"></TableCell>
              <TableCell class="font-japanese text-xl">
                <div>
                  する →{" "}
                  <span class="underline decoration-green-500/75 underline-offset-4">
                    して
                  </span>
                </div>
                <div>
                  くる →{" "}
                  <span class="underline decoration-green-500/75 underline-offset-4">
                    きて
                  </span>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        {/* <h2 class="!mt-12 text-center text-3xl font-bold">Common Uses</h2>

          <div class="space-y-6">
            <div>
              <h3 class="text-xl font-bold">1. Making Polite Requests</h3>
              <div class="!mt-4 space-y-2">
                <p class="font-japanese text-xl">
                  座って + ください → 座ってください
                  <span class="ml-2 text-base italic text-muted-foreground">
                    (Please sit down)
                  </span>
                </p>
                <p class="font-japanese text-xl">
                  見て + ください → 見てください
                  <span class="ml-2 text-base italic text-muted-foreground">
                    (Please look)
                  </span>
                </p>
                <p class="font-japanese text-xl">
                  静かにして + ください → 静かにしてください
                  <span class="ml-2 text-base italic text-muted-foreground">
                    (Please be quiet - what your teacher desperately wants to
                    say at 8 AM)
                  </span>
                </p>
              </div>
            </div>

            <div>
              <h3 class="text-xl font-bold">2. Connecting Actions</h3>
              <div class="!mt-4 space-y-2">
                <p class="font-japanese text-xl">
                  図書館に行って、寝ました
                  <span class="ml-2 text-base italic text-muted-foreground">
                    (Went to the library and fell asleep - the true student
                    experience)
                  </span>
                </p>
                <p class="font-japanese text-xl">
                  コーヒーを飲んで、もっとコーヒーを飲みました
                  <span class="ml-2 text-base italic text-muted-foreground">
                    (Drank coffee and then drank more coffee)
                  </span>
                </p>
              </div>
            </div>

            <div>
              <h3 class="text-xl font-bold">3. Asking Permission</h3>
              <div class="!mt-4 space-y-2">
                <p class="font-japanese text-xl">
                  帰ってもいいですか
                  <span class="ml-2 text-base italic text-muted-foreground">
                    (May I go home? - Asked hourly during meetings)
                  </span>
                </p>
                <p class="font-japanese text-xl">
                  食べてもいいですか
                  <span class="ml-2 text-base italic text-muted-foreground">
                    (May I eat this? - The eternal question at Japanese
                    restaurants)
                  </span>
                </p>
              </div>
            </div>

            <div>
              <h3 class="text-xl font-bold">4. Expressing Prohibition</h3>
              <div class="!mt-4 space-y-2">
                <p class="font-japanese text-xl">
                  寝てはいけません
                  <span class="ml-2 text-base italic text-muted-foreground">
                    (Must not sleep - The note on every programmer's monitor)
                  </span>
                </p>
                <p class="font-japanese text-xl">
                  全部食べてはいけません
                  <span class="ml-2 text-base italic text-muted-foreground">
                    (Must not eat everything - The note your roommate will
                    definitely ignore)
                  </span>
                </p>
              </div>
            </div>
          </div> */}
        <p class="text-base text-muted-foreground">
          *Remember, verbs that end in る might be either a godan or ichidan
          verb which have different conjugations!
        </p>

        <hr class="my-6 border-t" />

        <p>
          Sadly,{" "}
          <span class="font-japanese font-medium text-green-500">て</span>-form
          conjugation isn't as simple as ます conjugation, as godan verbs have
          different rules depending on the ending character.
        </p>
        <p class="text-base text-muted-foreground">
          Fun fact: There are 5 groups in the godan section of the chart above.
          You may have realized that the word ichidan contains (いち) {"->"} 1,
          and godan contains (ご) {"->"} 5.
        </p>
        <p>
          You'll need to memorize the patterns for each ending. However, since
          you'll use them a lot, you'll become more comfortable with these
          patterns and be able to use them without much thought soon enough.
        </p>
        <p>
          The good news is that memorizing the chart above is 99% of the hard
          work in this lesson. If you can correctly conjugate verbs into the{" "}
          <span class="font-japanese font-medium text-green-500">て</span>-form,
          the rest of this chapter will be very easy.
        </p>
        <p>
          Take a look at our{" "}
          <A
            href="/learn/conjugation?normal=false&teForm=true&volitional=false&taiForm=false&tariForm=false&potential=false&imperative=false&conditional=false&passive=false&causative=false&causativePassive=false&verb=true&iAdjective=false&naAdjective=false&polite=true&plain=false&nonPast=true&past=false&positive=true&negative=false"
            class="text-sky-400 underline"
          >
            conjugation practice tool
          </A>{" "}
          for the most efficient way to master{" "}
          <span class="font-japanese font-medium text-green-500">て</span>-form!
        </p>

        <hr class="my-6 border-t" />

        <h2 class="!mt-12 text-center text-2xl font-bold">
          What Tense are These?
        </h2>
        <p>
          <span class="font-japanese font-medium text-green-500">て</span>-form
          verbs <u>don't</u> actually carry tense information{" "}
          <span class="text-base text-muted-foreground">
            (past, present, etc.)
          </span>
          . Take the following expression:
        </p>
        <div class="flex justify-between text-center">
          <p class="w-1/2 font-japanese text-xl">座ってください</p>
          <p class="w-1/2 text-muted-foreground">Please sit.</p>
        </div>
        <p>
          This simply means <strong>please sit</strong>. Like English, it
          doesn't have a tense, it's just a direct request.
        </p>

        <hr class="my-6 border-t" />

        <h3 class="font-bold">
          How about connecting sentences?{" "}
          <span class="text-base font-normal text-muted-foreground">
            (you'll learn this shortly)
          </span>
        </h3>
        <div class="flex justify-between text-center">
          <p class="w-1/2 font-japanese text-xl">
            コーヒーを飲んで、本を読みました
          </p>
          <p class="w-1/2 text-muted-foreground">
            I drank coffee and I read a book.
          </p>
        </div>
        <p>
          Here, the{" "}
          <span class="font-japanese font-medium text-green-500">て</span>-form
          of 飲む connects the two actions. But the tense of everything in the
          sentence is determined by the final verb, 読みました.
        </p>
        <p class="text-base italic text-muted-foreground">
          *More on this in the "Connecting Two Activities" lesson.
        </p>

        <hr class="my-6 border-t" />

        <h2 class="!mt-12 text-2xl font-bold">Irregular Verbs</h2>
        <p>
          If you recall from Chapter 3, there are a few words that don't follow
          the godan/ichidan classifactions that you'd expect.
        </p>
        <h3 class="font-bold">Words you've encountered:</h3>
        <IrregularVerbsTeFormChart1 />

        <h3 class="font-bold">Words you haven't yet encountered:</h3>
        <IrregularVerbsTeFormChart2 />

        <p class="text-base text-muted-foreground">
          Frankly, I found て-Form the most difficult to master in Japanese, but
          the conjugation tool will fast-track your progress{" "}
          <span class="text-sm">
            (oh how I wish I had it when I was learning)
          </span>
          . But that also means every other conjugation you learn won't be as
          hard. Also, some forms are very similar to the て-form so it will
          serve as a great foundation.
        </p>
      </div>

      <div class="space-y-4 px-12 pb-32 leading-8 sm:px-16 md:px-24 [&>*]:space-y-4">
        <h3 class="pt-12 text-center text-3xl font-bold">Practice</h3>
        <p class="text-center text-base italic text-muted-foreground">
          Choose the correct て-form conjugation
        </p>

        <p>開ける (to open)</p>
        <SelectText
          answer="開けて"
          a="開けて"
          b="開けって"
          c="開けんで"
          class="text-xl"
        />
        <p>急ぐ (to hurry)</p>
        <SelectText
          answer="急いで"
          a="急ぐて"
          b="急いで"
          c="急いて"
          class="text-xl"
        />
        <p>遊ぶ (to play)</p>
        <SelectText
          answer="遊んで"
          a="遊んで"
          b="遊ぶて"
          c="遊びて"
          class="text-xl"
        />
        <p>泳ぐ (to swim)</p>
        <SelectText
          answer="泳いで"
          a="泳いで"
          b="泳ぐて"
          c="泳んで"
          class="text-xl"
        />
        <p>会う (to meet)</p>
        <SelectText
          answer="会って"
          a="会って"
          b="会うて"
          c="会いて"
          class="text-xl"
        />
        <p class="text-center italic">
          These ones may be hard to differentiate at first:
        </p>
        <p>買う (to buy)</p>
        <SelectText
          answer="買って"
          a="買うて"
          b="買って"
          c="買いて"
          class="text-xl"
        />
        <p>書く (to write)</p>
        <SelectText
          answer="書いて"
          a="書くて"
          b="書いて"
          c="書きて"
          class="text-xl"
        />
        <p>来る (to come)</p>
        <SelectText
          answer="来て"
          a="来きて"
          b="来いて"
          c="来て"
          class="text-xl"
        />
        <p>聞く (to hear/listen)</p>
        <SelectText
          answer="聞いて"
          a="聞くて"
          b="聞いて"
          c="聞きて"
          class="text-xl"
        />
      </div>
    </ContentBox>
  )
}

export default TeFormLesson
