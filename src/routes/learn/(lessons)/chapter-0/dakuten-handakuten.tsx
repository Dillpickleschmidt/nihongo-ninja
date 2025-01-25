import ContentBox from "@/components/ContentBox"

export default function JapanesePronunciation() {
  return (
    <ContentBox
      nextButtonText="Next Lesson ->"
      nextButtonLink="/learn/chapter-0/practice/dakuten-handakuten"
    >
      <h2 class="px-20 pt-6 text-center text-[2.625rem] font-medium leading-[3.25rem] sm:pt-12 lg:pt-24">
        🌊
      </h2>
      <h2 class="px-12 pb-12 text-center text-[2rem] font-medium leading-[2.875rem] lg:px-20">
        So you've mastered the gentle curves and strokes of Hiragana, and you're
        feeling <em>*pretty* confident</em>, right? Well,{" "}
        <span class="text-[3.125rem]">
          <strong>hold onto your hats</strong>
        </span>
        , because it's time to <em>spice</em> things up with some dashes and
        circles —welcome to the dazzling domain of{" "}
        <span class="text-[2.675rem] font-bold">Dakuten</span> and{" "}
        <span class="text-[2.675rem] font-bold">Handakuten!</span>
      </h2>
      <p class="mb-2 text-center text-2xl font-bold">( &quot; )</p>
      <div class="space-y-6 px-8 pb-32 sm:px-[7.5rem]">
        <div class="flex flex-row justify-center !pb-0">
          <div class="![&>*]:py-0 pl-2 pr-6 text-center text-xl font-bold">
            <em>
              <p>D</p>
              <p>A</p>
              <p>K</p>
              <p>U</p>
              <p>T</p>
              <p>E</p>
              <p>N</p>
            </em>
          </div>
          <p>
            Think of Dakuten as little <em>magical</em> marks that have the
            power to change sounds in a snap. They're like the cool DJs of the
            Hiragana world, remixing the beats. You take a plain sound like 'ka'
            (<span class="font-japanese text-xl font-semibold">か</span>
            ), slap on a dakuten, and voila, it's suddenly transformed into{" "}
            <em>'ga'</em> (
            <span class="font-japanese text-xl font-semibold">が</span>
            ). It's like adding a little bit of seasoning to your favorite dish
            - just a small dash changes the whole flavor! 🍜
          </p>
        </div>
        <p class="mb-12 mt-0 text-center text-sm">
          *It's a small change but take a look at those extra little quote marks
          on が*
        </p>
        <div class="!mt-16 flex flex-row items-center justify-center !pb-0">
          <div class="![&>*]:py-0 pl-2 pr-6 text-center text-xl font-bold">
            <em>
              <p>H</p>
              <p>A</p>
              <p>N</p>
              <p>D</p>
              <p>A</p>
              <p>K</p>
              <p>U</p>
              <p>T</p>
              <p>E</p>
              <p>N</p>
            </em>
          </div>
          <div class="mb-12">
            <p class="pr-10 text-center text-2xl font-bold">( ゜)</p>
            <p>
              Now, if Dakuten are the DJs, Handakuten are like their quirky
              sidekicks. These little circles are a bit more selective, only
              partying with the{" "}
              <span class="font-japanese text-[0.95rem] font-semibold">
                'h'
              </span>{" "}
              sounds. Add them to 'ha' (
              <span class="font-japanese text-xl font-semibold">は</span>
              ), and suddenly you're in the cool, breezy world of <em>
                'pa'
              </em>{" "}
              (<span class="font-japanese text-xl font-semibold">ぱ</span>
              ). It's like putting a fancy hat on a letter and watching it turn
              into a social butterfly. 🦋
            </p>
          </div>
        </div>
        <div class="space-y-4">
          <h2 class="mt-16 text-center text-3xl font-bold">
            <em>
              <span class="text-4xl">WHY</span>, THOUGH?
            </em>
          </h2>
          <p class="">
            You might be asking, &quot;
            <span class="text-xl">
              <em>Why all these changes?</em>
            </span>{" "}
            &quot; Well, because{" "}
            <em>
              <u>variety is the spice of life!</u>
            </em>{" "}
            Or maybe because Japanese speakers centuries ago got a little bored
            and decided to mix things up.
          </p>
        </div>
        <p class="text-center text-xl">
          <span class="font-japanese">わかりません</span>{" "}
          <span class="text-base">(I don't know)</span>{" "}
          <span class="!py-2 text-3xl">🤷🏻</span>
        </p>
        <p>
          Let's delve into these script variations with the enthusiasm of{" "}
          <span class="text-[1.1625rem] font-bold">
            someone who's just realized there's more to learn after thinking
            they were done
          </span>
          . Who knew a couple of tiny marks could make such a <u>big</u>{" "}
          difference? Happy learning, and remember, in the realm of Dakuten and
          Handakuten, <em>expect the unexpected!</em>
        </p>
        <div class="!mt-12 flex flex-col items-center">
          {/* <TantanChart /> */}
        </div>
        <div class="!-mb-6 text-center">
          <p class="!mt-16 text-4xl font-semibold">
            <span class="font-japanese">がんばって！</span>
          </p>
          <p class="mt-4 text-xl">Do your best! 😀</p>
        </div>
      </div>
    </ContentBox>
  )
}
