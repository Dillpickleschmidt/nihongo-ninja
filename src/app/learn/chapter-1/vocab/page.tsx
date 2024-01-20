import Dialog from "@/app/components/dialog"
import Button from "@/app/components/button"
import JapaneseFont from "@/app/components/JapaneseFont"

export default function Numbers() {
  return (
    <Dialog variant={"reading"} className="border-4 border-black bg-[#191919]">
      <div className="pb-20 text-xl text-[#F8F5E9]">
        <h1 className="pt-28 pb-6 text-4xl font-medium leading-[3.25rem] text-center px-20">
          <span className="text-5xl font-medium">Great job</span>, you've
          finally made it! You've now got a strong grasp of Hiragana! Not only
          can you <span className="text-5xl">read</span> hiragana, but you also
          have the phonetic arsenal to <span className="text-5xl">say</span>{" "}
          pretty much <span className="font-bold">*anything*</span> in
          Japanese!🔥
        </h1>
        <p className="px-28 py-6 text-xl leading-8">
          You're probably tired of practicing hiragana, so here's a quick
          preview of what you'll learn in the next few lessons. You'll quckly
          work your way through each word as they come up, and you'll be having
          real Japanese conversations before you know it!
        </p>
        <h1 className="mx-auto mt-6 mb-12 text-6xl text-center font-semibold tracking-wide underline-offset-8">
          <u>
            <em>Vocabulary</em>
          </u>
        </h1>
        <div className="mx-24 pb-12 border-b border-neutral-600">
          <h3 className="mt-8 mb-6 text-3xl text-center text-orange-400 font-semibold">
            Greetings
          </h3>
          <div className="[&>*]:flex [&>*]:justify-between leading-[2.75rem]">
            <div className="[&>*]:w-full">
              <ul>
                <JapaneseFont className="text-[1.45rem] font-medium">
                  おはよう。
                </JapaneseFont>
              </ul>
              <ul>Ohayou.</ul>
              <ul>Good morning.</ul>
            </div>
            <div className="[&>*]:w-full">
              <ul>
                <JapaneseFont className="text-[1.45rem] font-medium">
                  おはようございます。
                </JapaneseFont>
              </ul>
              <ul>Ohayou gozaimasu.</ul>
              <ul>Good morning. (polite)</ul>
            </div>
            <div className="[&>*]:w-full">
              <ul>
                <JapaneseFont className="text-[1.45rem] font-medium">
                  こんにちは。
                </JapaneseFont>
              </ul>
              <ul>Konnichiwa.</ul>
              <ul>Good afternoon.</ul>
            </div>
            <div className="[&>*]:w-full">
              <ul>
                <JapaneseFont className="text-[1.45rem] font-medium">
                  こんばんは。
                </JapaneseFont>
              </ul>
              <ul>Konbanwa.</ul>
              <ul>Good evening.</ul>
            </div>
            <div className="[&>*]:w-full">
              <ul>
                <JapaneseFont className="text-[1.45rem] font-medium">
                  またね。
                </JapaneseFont>
              </ul>
              <ul>Mata ne.</ul>
              <ul>See you later.</ul>
            </div>
            <div className="[&>*]:w-full">
              <ul>
                <JapaneseFont className="text-[1.45rem] font-medium">
                  じゃあね。
                </JapaneseFont>
              </ul>
              <ul>Jaa ne.</ul>
              <ul>See you later.</ul>
            </div>
            <div className="[&>*]:w-full">
              <ul>
                <JapaneseFont className="text-[1.45rem] font-medium">
                  さようなら。
                </JapaneseFont>
              </ul>
              <ul>Sayounara.</ul>
              <ul>Goodbye.</ul>
            </div>
          </div>
          <h3 className="mt-8 mb-6 text-3xl text-center text-orange-400 font-semibold">
            Common Phrases
          </h3>
          <div className="[&>*]:flex [&>*]:justify-between leading-[2.75rem]">
            <div className="[&>*]:w-full">
              <ul>
                <JapaneseFont className="text-[1.45rem] font-medium">
                  いってきます。
                </JapaneseFont>
              </ul>
              <ul>Itte kimasu.</ul>
              <ul>I'll go and come back.</ul>
            </div>
            <div className="[&>*]:w-full">
              <ul>
                <JapaneseFont className="text-[1.45rem] font-medium">
                  いってらっしゃい。
                </JapaneseFont>
              </ul>
              <ul>Itterasshai.</ul>
              <ul>Go and come back.</ul>
            </div>
            <div className="[&>*]:w-full">
              <ul>
                <JapaneseFont className="text-[1.45rem] font-medium">
                  ただいま。
                </JapaneseFont>
              </ul>
              <ul>Tadaima.</ul>
              <ul>I'm home.</ul>
            </div>
            <div className="[&>*]:w-full">
              <ul>
                <JapaneseFont className="text-[1.45rem] font-medium">
                  おかえり (なさい)。
                </JapaneseFont>
              </ul>
              <ul>Okaeri (nasai).</ul>
              <ul>Welcome home.</ul>
            </div>
            <div className="[&>*]:w-full">
              <ul>
                <JapaneseFont className="text-[1.45rem] font-medium">
                  おやすみ (なさい)。
                </JapaneseFont>
              </ul>
              <ul>Oyasumi (nasai).</ul>
              <ul>Good night. (sleeping)</ul>
            </div>
            <div className="[&>*]:w-full">
              <ul>
                <JapaneseFont className="text-[1.45rem] font-medium">
                  いただきます。
                </JapaneseFont>
              </ul>
              <ul>Itadakimasu.</ul>
              <ul>Than you for the food.</ul>
            </div>
            <div className="[&>*]:w-full">
              <ul>
                <JapaneseFont className="text-[1.45rem] font-medium">
                  ごちそうさま (でした)。
                </JapaneseFont>
              </ul>
              <ul>Gochisooma (deshita).</ul>
              <ul>That was delicious.</ul>
            </div>
            <div className="[&>*]:w-full">
              <ul>
                <JapaneseFont className="text-[1.45rem] font-medium">
                  はじめまして。
                </JapaneseFont>
              </ul>
              <ul>Hajimemashite.</ul>
              <ul>How do you do?</ul>
            </div>
            <div className="[&>*]:w-full">
              <ul>
                <JapaneseFont className="text-[1.45rem] font-medium">
                  よろしく おねがいします。
                </JapaneseFont>
              </ul>
              <ul>Yoroshiku onegai shimasu.</ul>
              <ul>Please be kind to me.</ul>
            </div>
          </div>
          <h3 className="mt-8 mb-6 text-3xl text-center text-orange-400 font-semibold">
            Essential Expressions
          </h3>
          <div className="[&>*]:flex [&>*]:justify-between leading-[2.75rem]">
            <div className="[&>*]:w-full">
              <ul>
                <JapaneseFont className="text-[1.45rem] font-medium">
                  すみません
                </JapaneseFont>
              </ul>
              <ul>sumimasen</ul>
              <ul>excuse me; sorry</ul>
            </div>
            <div className="[&>*]:w-full">
              <ul>
                <JapaneseFont className="text-[1.45rem] font-medium">
                  いいえ
                </JapaneseFont>
              </ul>
              <ul>iie</ul>
              <ul>no</ul>
            </div>
          </div>

          <h3 className="mt-8 mb-6 text-3xl text-center text-orange-400 font-semibold">
            Numbers
          </h3>
          <div className="[&>*]:flex [&>*]:justify-between leading-[2.75rem]">
            <div className="[&>*]:w-full">
              <ul>
                <JapaneseFont className="text-[1.45rem] font-medium">
                  いち
                </JapaneseFont>
              </ul>
              <ul>ichi</ul>
              <ul>one</ul>
            </div>
            <div className="[&>*]:w-full">
              <ul>
                <JapaneseFont className="text-[1.45rem] font-medium">
                  に
                </JapaneseFont>
              </ul>
              <ul>ni</ul>
              <ul>two</ul>
            </div>
            <div className="[&>*]:w-full">
              <ul>
                <JapaneseFont className="text-[1.45rem] font-medium">
                  さん
                </JapaneseFont>
              </ul>
              <ul>san</ul>
              <ul>three</ul>
            </div>
            <div className="[&>*]:w-full">
              <ul>
                <JapaneseFont className="text-[1.45rem] font-medium">
                  よん
                </JapaneseFont>
              </ul>
              <ul>yon</ul>
              <ul>four</ul>
            </div>
            <div className="[&>*]:w-full">
              <ul>
                <JapaneseFont className="text-[1.45rem] font-medium">
                  ご
                </JapaneseFont>
              </ul>
              <ul>go</ul>
              <ul>five</ul>
            </div>
            <div className="[&>*]:w-full">
              <ul>
                <JapaneseFont className="text-[1.45rem] font-medium">
                  ろく
                </JapaneseFont>
              </ul>
              <ul>roku</ul>
              <ul>six</ul>
            </div>
            <div className="[&>*]:w-full">
              <ul>
                <JapaneseFont className="text-[1.45rem] font-medium">
                  なな
                </JapaneseFont>
              </ul>
              <ul>nana</ul>
              <ul>seven</ul>
            </div>
            <div className="[&>*]:w-full">
              <ul>
                <JapaneseFont className="text-[1.45rem] font-medium">
                  はち
                </JapaneseFont>
              </ul>
              <ul>hachi</ul>
              <ul>eight</ul>
            </div>
            <div className="[&>*]:w-full">
              <ul>
                <JapaneseFont className="text-[1.45rem] font-medium">
                  きゅう
                </JapaneseFont>
              </ul>
              <ul>kyuu</ul>
              <ul>nine</ul>
            </div>
            <div className="[&>*]:w-full">
              <ul>
                <JapaneseFont className="text-[1.45rem] font-medium">
                  じゅう
                </JapaneseFont>
              </ul>
              <ul>juu</ul>
              <ul>ten</ul>
            </div>
          </div>
          <h3 className="mt-4 text-center">...up to 99 (it's easy).</h3>
        </div>
        <div className="mt-12 mx-12 !mb-0 flex flex-row justify-end">
          <Button link="/learn/chapter-1/lesson-6" autoFocus={true}>
            Next Lesson {"->"}
          </Button>
        </div>
      </div>
    </Dialog>
  )
}
