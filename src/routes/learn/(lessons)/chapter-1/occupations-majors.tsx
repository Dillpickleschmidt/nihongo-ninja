import { createResource, Show } from "solid-js"
import { getVocabularyByPath } from "@/data-utils/statements"
import { A } from "@solidjs/router"
import { Button } from "@/components/ui/button"
import type { RichVocabItem } from "@/types/vocab"
import VocabCards from "@/features/vocab-card/VocabCards"
import ContentBox from "@/components/ContentBox"

export default function page() {
  const path = "chapter-1/occupations-majors"
  const [data] = createResource<RichVocabItem[]>(
    async () => await getVocabularyByPath(path),
  )
  const jpdbIds = [
    [1375970, 3499299065],
    [1198560, 97821687],
    [1558050, 2727256350],
    [2077500, 1226645967],
    [1278010, 1706505088],
    [9000027, 592891567],
    [1251320, 4038116835],
    [1283510, 1921103956],
    [1505190, 4249027222],
    [1159980, 4222937496],
    [1326160, 3908347866],
  ]

  const tableClassName = "table-fixed w-full"
  const japaneseClassName = "font-japanese text-[1.35rem] font-medium"

  return (
    <ContentBox
      size="lg"
      nextButtonLink="/learn/chapter-1/practice/occupations-majors"
    >
      <h1 class="px-28 pb-6 pt-6 text-center text-4xl font-semibold sm:pt-12 lg:pt-24">
        Occupations & Majors
      </h1>
      <Show when={data()}>
        <VocabCards data={data()!} />
      </Show>

      {/* Additional Majors */}
      <div class="mx-24 pb-32 pt-6">
        <div class="border-b border-neutral-600 pb-6">
          <h2 class="py-3 text-center text-2xl font-bold">Additional Majors</h2>
          <p class="mb-6 text-center">
            Find the major that applies to{" "}
            <em>
              <span class="font-semibold text-orange-400">YOU</span>!
            </em>{" "}
            (no need to memorize these)
          </p>

          <table class={tableClassName}>
            <tbody class="align-top">
              <tr class="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Aerospace Engineering</td>
                <td>Uchuu koogaku</td>
                <td class={japaneseClassName}>うちゅうこうがく (宇宙工学)</td>
              </tr>
              <tr class="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Art History</td>
                <td>Bijutsu shi</td>
                <td class={japaneseClassName}>びじゅつし (美術史)</td>
              </tr>
              <tr class="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Architecture</td>
                <td>Kenchiku gaku</td>
                <td class={japaneseClassName}>けんちくがく (建築学)</td>
              </tr>
              <tr class="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Biochemistry</td>
                <td>Seekagaku</td>
                <td class={japaneseClassName}>せいかがく (生化学)</td>
              </tr>
              <tr class="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Biology</td>
                <td>Seebutsu gaku</td>
                <td class={japaneseClassName}>せいぶつがく (生物学)</td>
              </tr>
              <tr class="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Chemical Engineering</td>
                <td>Kagaku koogaku</td>
                <td class={japaneseClassName}>かがくこうがく (化学工学)</td>
              </tr>
              <tr class="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Chemistry</td>
                <td>Kagaku</td>
                <td class={japaneseClassName}>かがく (化学)</td>
              </tr>
              <tr class="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Cognitive Science</td>
                <td>Ninchi kagaku</td>
                <td class={japaneseClassName}>にんちかがく (認知科学)</td>
              </tr>
              <tr class="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>(Pre-) Commerce</td>
                <td>Bijinesu</td>
                <td class={japaneseClassName}>びじねす (ビジネス)</td>
              </tr>
              <tr class="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Computer Engineering</td>
                <td>Konpyuutaa koogaku</td>
                <td class={japaneseClassName}>
                  こんぴゅーたーこうがく (コンピュータ工学)
                </td>
              </tr>
              <tr class="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Computer Science</td>
                <td>Konpyuutaa saiense</td>
                <td class={japaneseClassName}>
                  こんぴゅーたーさいえんす (コンピュータサイエンス)
                </td>
              </tr>
              <tr class="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Communication</td>
                <td>Komyunikeeshion</td>
                <td class={japaneseClassName}>
                  こみゅにけーしょん (コミュニケーション)
                </td>
              </tr>
              <tr class="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Drama</td>
                <td>Engeki</td>
                <td class={japaneseClassName}>えんげき (演劇)</td>
              </tr>
              <tr class="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>East Asian Studies</td>
                <td>Higashi ajia kenkyuu</td>
                <td class={japaneseClassName}>
                  ひがしあじあけんきゅう (東アジア研究)
                </td>
              </tr>
              <tr class="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Electrical Engineering</td>
                <td>Denki koogaku</td>
                <td class={japaneseClassName}>でんきこうがく (電気工学)</td>
              </tr>
              <tr class="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Education</td>
                <td>Kyooikugaku</td>
                <td class={japaneseClassName}>きょういくがく (教育学)</td>
              </tr>
              <tr class="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Engineering</td>
                <td>Enjiniaringu</td>
                <td class={japaneseClassName}>
                  えんじにありんぐ (エンジニアリング)
                </td>
              </tr>
              <tr class="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Environmental Science</td>
                <td>Kankyoo kagaku</td>
                <td class={japaneseClassName}>かんきょうかがく (環境科学)</td>
              </tr>
              <tr class="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Finance</td>
                <td>Zaiseegaku</td>
                <td class={japaneseClassName}>ざいせいがく (財政学)</td>
              </tr>
              <tr class="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Foreign Affairs</td>
                <td>Kokusai kankee</td>
                <td class={japaneseClassName}>こくさいかんけい (国際関係)</td>
              </tr>
              <tr class="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Linguistics</td>
                <td>Gengogaku</td>
                <td class={japaneseClassName}>げんごがく (言語学)</td>
              </tr>
              <tr class="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Management</td>
                <td>Keieegaku</td>
                <td class={japaneseClassName}>けいえいがく (経営学)</td>
              </tr>
              <tr class="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Math</td>
                <td>Suugaku</td>
                <td class={japaneseClassName}>すうがく (数学)</td>
              </tr>
              <tr class="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Media Studies</td>
                <td>Media kenkyuu</td>
                <td class={japaneseClassName}>
                  めでぃあけんきゅう (メディア研究)
                </td>
              </tr>
              <tr class="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Music</td>
                <td>Ongaku</td>
                <td class={japaneseClassName}>おんがく (音楽)</td>
              </tr>
              <tr class="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Neuroscience</td>
                <td>Shinkee kagagu</td>
                <td class={japaneseClassName}>しんけいかがく (神経科学)</td>
              </tr>
              <tr class="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Pharmacy</td>
                <td>Yakugaku</td>
                <td class={japaneseClassName}>やくがく (薬学)</td>
              </tr>
              <tr class="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Philosophy</td>
                <td>Tetsugaku</td>
                <td class={japaneseClassName}>てつがく (哲学)</td>
              </tr>
              <tr class="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Physics</td>
                <td>Butsurigaku</td>
                <td class={japaneseClassName}>ぶつりがく (物理学)</td>
              </tr>
              <tr class="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>(Pre-) Medical</td>
                <td>Igaku</td>
                <td class={japaneseClassName}>いがく (医学)</td>
              </tr>
              <tr class="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Psychology</td>
                <td>Shinrigaku</td>
                <td class={japaneseClassName}>しんりがく (心理学)</td>
              </tr>
              <tr class="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Religious Studies</td>
                <td>Shuukyoogaku</td>
                <td class={japaneseClassName}>しゅうきょうがく (宗教学)</td>
              </tr>
              <tr class="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Spanish</td>
                <td>Supein go</td>
                <td class={japaneseClassName}>すぺいんご (スペイン語)</td>
              </tr>
              <tr class="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Studio Art</td>
                <td>Bijutsu</td>
                <td class={japaneseClassName}>びじゅつ (美術)</td>
              </tr>
              <tr class="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>System Engineering</td>
                <td>Shisutemu koogaku</td>
                <td class={japaneseClassName}>
                  しすてむこうがく (システム工学)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="mt-6">
          <table class={tableClassName}>
            <tbody class="align-top">
              <tr class="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td class="text-xl font-medium">Undecided</td>
                <td class="text-xl font-medium">Mada wakarimasen</td>
                <td class="font-japanese text-2xl font-medium">
                  まだわかりません (まだ分かりません)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </ContentBox>
  )
}
