import Dialog from "@/components/Dialog"
import Romaji from "@/components/text/Romaji"
import Button from "@/components/Button"
import SpoilerButton from "@/components/SpoilerButton"

export default function Lesson9Pt2() {
  return (
    <Dialog variant={"reading"} className="bg-[#191919] text-[#F8F5E9]">
      <div className="pb-16">
        <h1 className="pt-24 pb-12 text-4xl font-medium leading-[3.25rem] text-center px-20">
          Let&apos;s learn the basic numbers.
        </h1>
        <div className="w-full flex justify-center">
          {/* Numbers List Box */}
          <div className="overflow-y-scroll scrollbar:hidden flex justify-center rounded-3xl bg-[#2f2f2f] py-6 px-16 text-4xl">
            <div className="[&>*]:flex [&>*]:items-center [&>*]:pt-4 [&>*]:pb-3 [&>*]:px-9 [&>*]:border-b [&>*]:border-black">
              {/* Individual Box */}
              <div>
                {/* Romaji Element */}
                <div className="text-5xl font-medium">
                  <Romaji romaji="ichi" romajiTextSize="text-2xl">
                    いち
                  </Romaji>
                </div>
                <p className="ml-2">- one</p>
              </div>
              <div className="text-neutral-300">
                <div className="text-5xl font-medium">
                  <Romaji romaji="ni" romajiTextSize="text-2xl" centered={true}>
                    に
                  </Romaji>
                </div>
                <p className="ml-2">- two</p>
              </div>
              <div>
                <div className="text-5xl font-medium">
                  <Romaji romaji="san" romajiTextSize="text-2xl">
                    さん
                  </Romaji>
                </div>
                <p className="ml-2">- three</p>
              </div>
              <div className="text-neutral-300">
                <div className="text-5xl font-medium">
                  <Romaji romaji="yon/shi" romajiTextSize="text-2xl">
                    よん/し
                  </Romaji>
                </div>
                <p className="ml-2">- four</p>
              </div>
              <div>
                <div className="text-5xl font-medium">
                  <Romaji romaji="go" romajiTextSize="text-2xl" centered={true}>
                    ご
                  </Romaji>
                </div>
                <p className="ml-2">- five</p>
              </div>
              <div className="text-neutral-300">
                <div className="text-5xl font-medium">
                  <Romaji romaji="roku" romajiTextSize="text-2xl">
                    ろく
                  </Romaji>
                </div>
                <p className="ml-2">- six</p>
              </div>
              <div>
                <div className="text-5xl font-medium">
                  <Romaji romaji="nana/shichi" romajiTextSize="text-2xl">
                    なな/しち
                  </Romaji>
                </div>
                <p className="ml-2">- seven</p>
              </div>
              <div className="text-neutral-300">
                <div className="text-5xl font-medium">
                  <Romaji romaji="hachi" romajiTextSize="text-2xl">
                    はち
                  </Romaji>
                </div>
                <p className="ml-2">- eight</p>
              </div>
              <div>
                <div className="text-5xl font-medium">
                  <Romaji romaji="kyuu/ku" romajiTextSize="text-2xl">
                    きゅう/く
                  </Romaji>
                </div>
                <p className="ml-2">- nine</p>
              </div>
              <div className="text-neutral-300">
                <div className="text-5xl font-medium">
                  <Romaji romaji="juu" romajiTextSize="text-2xl">
                    じゅう
                  </Romaji>
                </div>
                <p className="ml-2">- ten</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-12 px-32 [&>*]:py-6">
          <p>
            You&apos;ll notice that numbers 4, 7, and 9 have two options.
            Japanese speakers use either option, so it&apos;s good to know both!
          </p>
          <p>
            Just like most languages, 1-10 are essential numbers to know, but
            even more so in Japanese. Unlike English, there&apos;s no unique
            words for eleven, twelve, thirteen, etc. Nor are there even unique
            words for twenty, thirty, forty, etc. Instead, you combine the
            numbers <span className="whitespace-nowrap">1-10</span> to create
            them.
          </p>
          <div>
            <p className="text-center">
              To make eleven, you just put together &quot;ten&quot; and
              &quot;one&quot; to make
            </p>
            <h3 className="text-4xl text-center mt-2">
              <Romaji romaji="jyuu">じゅう</Romaji>
              <span className="text-orange-400">
                <Romaji romaji="ichi">いち</Romaji>
              </span>
              .
            </h3>
          </div>
          <div>
            <p className="text-center">
              To make twenty, you put together &quot;two&quot; and
              &quot;ten&quot; to make
            </p>
            <h3 className="text-4xl text-center mt-2">
              <span className="text-red-400">
                <Romaji romaji="ni">に</Romaji>
              </span>
              <Romaji romaji="jyuu">じゅう</Romaji>.
            </h3>
          </div>
          <div>
            <p className="text-center">
              To make twenty-one, you put together &quot;two&quot;,
              &quot;ten&quot; and &quot;one&quot; to make
            </p>
            <h3 className="text-4xl text-center mt-2">
              <span className="text-red-400">
                <Romaji romaji="ni">に</Romaji>
              </span>
              <Romaji romaji="jyuu">じゅう</Romaji>
              <span className="text-orange-400">
                <Romaji romaji="ichi">いち</Romaji>
              </span>
              .
            </h3>
          </div>
          <div>
            <p className="text-center">
              To make forty-seven, you put together &quot;four&quot;,
              &quot;ten&quot; and &quot;seven&quot; to make
            </p>
            <h3 className="text-4xl text-center mt-2">
              <span className="text-red-400">
                <Romaji romaji="yon">よん</Romaji>
              </span>
              <Romaji romaji="jyuu">じゅう</Romaji>
              <span className="text-orange-400">
                <Romaji romaji="nana">なな</Romaji>
              </span>
              .
            </h3>
          </div>
          <h3 className="text-2xl font-semibold text-center">
            Think you can say 99? Give it a try!
          </h3>
          <div className="w-full flex justify-center !pt-0">
            <SpoilerButton animated={true}>
              <h3 className="text-4xl text-center mt-6">
                <span className="text-red-400">
                  <Romaji romaji="kyuu">きゅう</Romaji>
                </span>
                <Romaji romaji="jyuu">じゅう</Romaji>
                <span className="text-orange-400">
                  <Romaji romaji="kyuu">きゅう</Romaji>
                </span>
                .
              </h3>
            </SpoilerButton>
          </div>
        </div>
        <div className="mt-24 mx-12 !mb-0 flex flex-row justify-end">
          <Button link="/learn/chapter-1/numbers">
            See the full chart {"->"}
          </Button>
        </div>
      </div>
    </Dialog>
  )
}
