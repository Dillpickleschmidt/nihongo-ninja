import Dropdown from "@/features/vocab-practice/Dropdown"
import { Button } from "@/components/ui/button"
import { A } from "@solidjs/router"
import { Title } from "@solidjs/meta"

export default function page() {
  return (
    <>
      <Title>Nihongo Ninja - Vocab Practice</Title>
      <div class="container mx-auto px-4 py-32">
        <div class="flex w-full flex-col items-center space-y-4">
          <Dropdown text="Chapter 0">
            <A href="/learn/chapter-0/practice/hiragana">
              <Button
                variant="ghost"
                class="w-full justify-start px-6 py-3 text-lg font-normal hover:bg-accent/50"
              >
                Hiragana
              </Button>
            </A>
            <A href="/learn/chapter-0/practice/dakuten-handakuten">
              <Button
                variant="ghost"
                class="w-full justify-start px-6 py-3 text-lg font-normal hover:bg-accent/50"
              >
                Dakuten & Handakuten
              </Button>
            </A>
            <A href="/learn/chapter-0/practice/contracted-sounds">
              <Button
                variant="ghost"
                class="w-full justify-start px-6 py-3 text-lg font-normal hover:bg-accent/50"
              >
                Contracted Sounds
              </Button>
            </A>
            <A href="/learn/chapter-0/practice/greetings-common-expressions">
              <Button
                variant="ghost"
                class="w-full justify-start px-6 py-3 text-lg font-normal hover:bg-accent/50"
              >
                Greetings & Common Expressions
              </Button>
            </A>
            <A href="/learn/chapter-0/practice/numbers-0-10">
              <Button
                variant="ghost"
                class="w-full justify-start px-6 py-3 text-lg font-normal hover:bg-accent/50"
              >
                Numbers 0-10
              </Button>
            </A>
            <A href="/learn/chapter-0/practice/numbers-11-100">
              <Button
                variant="ghost"
                class="w-full justify-start px-6 py-3 text-lg font-normal hover:bg-accent/50"
              >
                Numbers 11-100
              </Button>
            </A>
          </Dropdown>
          <Dropdown text="Chapter 1">
            <A href="/learn/chapter-1/practice/kanji-numbers">
              <Button
                variant="ghost"
                class="w-full justify-start px-6 py-3 text-lg font-normal hover:bg-accent/50"
              >
                Kanji Numbers
              </Button>
            </A>
            <A href="/learn/chapter-1/practice/people-descriptors-misc">
              <Button
                variant="ghost"
                class="w-full justify-start px-6 py-3 text-lg font-normal hover:bg-accent/50"
              >
                People, Descriptors, & Misc.
              </Button>
            </A>
            <A href="/learn/chapter-1/practice/family-school">
              <Button
                variant="ghost"
                class="w-full justify-start px-6 py-3 text-lg font-normal hover:bg-accent/50"
              >
                Family & School
              </Button>
            </A>
            <A href="/learn/chapter-1/practice/occupations-majors">
              <Button
                variant="ghost"
                class="w-full justify-start px-6 py-3 text-lg font-normal hover:bg-accent/50"
              >
                Occupations & Majors
              </Button>
            </A>
            <A href="/learn/chapter-1/practice/countries-time">
              <Button
                variant="ghost"
                class="w-full justify-start px-6 py-3 text-lg font-normal hover:bg-accent/50"
              >
                Countries & Time
              </Button>
            </A>
            <A href="/learn/chapter-1/practice/time">
              <Button
                variant="ghost"
                class="w-full justify-start px-6 py-3 text-lg font-normal hover:bg-accent/50"
              >
                Time
              </Button>
            </A>
            <A href="/learn/chapter-1/practice/minutes">
              <Button
                variant="ghost"
                class="w-full justify-start px-6 py-3 text-lg font-normal hover:bg-accent/50"
              >
                Minutes
              </Button>
            </A>
          </Dropdown>
          <Dropdown text="Chapter 2">
            <A href="/learn/chapter-2/practice/katakana">
              <Button
                variant="ghost"
                class="w-full justify-start px-6 py-3 text-lg font-normal hover:bg-accent/50"
              >
                Katakana
              </Button>
            </A>
            <A href="/learn/chapter-2/practice/things">
              <Button
                variant="ghost"
                class="w-full justify-start px-6 py-3 text-lg font-normal hover:bg-accent/50"
              >
                Things
              </Button>
            </A>
            <A href="/learn/chapter-2/practice/words-that-point">
              <Button
                variant="ghost"
                class="w-full justify-start px-6 py-3 text-lg font-normal hover:bg-accent/50"
              >
                Words That Point
              </Button>
            </A>
            <A href="/learn/chapter-2/practice/places-money-food">
              <Button
                variant="ghost"
                class="w-full justify-start px-6 py-3 text-lg font-normal hover:bg-accent/50"
              >
                Places, Money, Food
              </Button>
            </A>
            <A href="/learn/chapter-2/practice/all-vocab">
              <Button
                variant="ghost"
                class="w-full justify-start px-6 py-3 text-lg font-normal hover:bg-accent/50"
              >
                All Vocab
              </Button>
            </A>
          </Dropdown>
          <Dropdown text="Chapter 3">
            <A href="/learn/chapter-3/practice/chapter-1-kanji-part-1">
              <Button
                variant="ghost"
                class="w-full justify-start px-6 py-3 text-lg font-normal hover:bg-accent/50"
              >
                Chapter 1 Kanji Part 1
              </Button>
            </A>
            <A href="/learn/chapter-3/practice/chapter-1-kanji-part-2">
              <Button
                variant="ghost"
                class="w-full justify-start px-6 py-3 text-lg font-normal hover:bg-accent/50"
              >
                Chapter 1 Kanji Part 2
              </Button>
            </A>
            <A href="/learn/chapter-3/practice/chapter-1-kanji-part-3">
              <Button
                variant="ghost"
                class="w-full justify-start px-6 py-3 text-lg font-normal hover:bg-accent/50"
              >
                Chapter 1 Kanji Part 3
              </Button>
            </A>
            <A href="/learn/chapter-3/practice/chapter-2-kanji">
              <Button
                variant="ghost"
                class="w-full justify-start px-6 py-3 text-lg font-normal hover:bg-accent/50"
              >
                Chapter 2 Kanji
              </Button>
            </A>
            <A href="/learn/chapter-3/practice/nouns-readings">
              <Button
                variant="ghost"
                class="w-full justify-start px-6 py-3 text-lg font-normal hover:bg-accent/50"
              >
                Nouns - Readings
              </Button>
            </A>
            <A href="/learn/chapter-3/practice/nouns-kana">
              <Button
                variant="ghost"
                class="w-full justify-start px-6 py-3 text-lg font-normal hover:bg-accent/50"
              >
                Nouns - Kana
              </Button>
            </A>
            <A href="/learn/chapter-3/practice/days-and-time-readings">
              <Button
                variant="ghost"
                class="w-full justify-start px-6 py-3 text-lg font-normal hover:bg-accent/50"
              >
                Days & Time - Readings
              </Button>
            </A>
            <A href="/learn/chapter-3/practice/days-and-time-kana">
              <Button
                variant="ghost"
                class="w-full justify-start px-6 py-3 text-lg font-normal hover:bg-accent/50"
              >
                Days & Time - Kana
              </Button>
            </A>
            <A href="/learn/chapter-3/practice/verbs-and-adj-readings">
              <Button
                variant="ghost"
                class="w-full justify-start px-6 py-3 text-lg font-normal hover:bg-accent/50"
              >
                Verbs & Adjectives - Readings
              </Button>
            </A>
            <A href="/learn/chapter-3/practice/verbs-and-adj-kana">
              <Button
                variant="ghost"
                class="w-full justify-start px-6 py-3 text-lg font-normal hover:bg-accent/50"
              >
                Verbs & Adjectives - Kana
              </Button>
            </A>
          </Dropdown>
        </div>
      </div>
    </>
  )
}
