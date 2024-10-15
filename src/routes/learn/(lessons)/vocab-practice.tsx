import Dropdown from "@/features/vocab-practice/Dropdown"
import { Button } from "@/components/ui/button"
import { A } from "@solidjs/router"
import { Title } from "@solidjs/meta"

export default function page() {
  return (
    <>
      <Title>Nihongo Ninja - Vocab Practice</Title>
      <div class="w-full px-4 pt-32 text-lg">
        <div class="flex w-full flex-col items-center">
          <Dropdown text="Chapter 0">
            <A href="/learn/chapter-0/practice/hiragana">
              <Button
                variant="link"
                class="justify-start text-start text-lg font-normal duration-100 ease-out"
              >
                Hiragana
              </Button>
            </A>
            <A href="/learn/chapter-0/practice/dakuten-handakuten">
              <Button
                variant="link"
                class="justify-start text-start text-lg font-normal duration-100 ease-out"
              >
                Dakuten & Handakuten
              </Button>
            </A>
            <A href="/learn/chapter-0/practice/contracted-sounds">
              <Button
                variant="link"
                class="justify-start text-start text-lg font-normal duration-100 ease-out"
              >
                Contracted Sounds
              </Button>
            </A>
            <A href="/learn/chapter-0/practice/greetings-common-expressions">
              <Button
                variant="link"
                class="justify-start text-start text-lg font-normal duration-100 ease-out"
              >
                Greetings & Common Expressions
              </Button>
            </A>
            <A href="/learn/chapter-0/practice/numbers-0-10">
              <Button
                variant="link"
                class="justify-start text-start text-lg font-normal duration-100 ease-out"
              >
                Numbers 0-10
              </Button>
            </A>
            <A href="/learn/chapter-0/practice/numbers-11-100">
              <Button
                variant="link"
                class="justify-start text-start text-lg font-normal duration-100 ease-out"
              >
                Numbers 11-100
              </Button>
            </A>
          </Dropdown>
          <Dropdown text="Chapter 1">
            <A href="/learn/chapter-1/practice/kanji-numbers">
              <Button
                variant="link"
                class="justify-start text-start text-lg font-normal duration-100 ease-out"
              >
                Kanji Numbers
              </Button>
            </A>
            <A href="/learn/chapter-1/practice/people-descriptors-misc">
              <Button
                variant="link"
                class="justify-start text-start text-lg font-normal duration-100 ease-out"
              >
                People, Descriptors, & Misc.
              </Button>
            </A>
            <A href="/learn/chapter-1/practice/family-school">
              <Button
                variant="link"
                class="justify-start text-start text-lg font-normal duration-100 ease-out"
              >
                Family & School
              </Button>
            </A>
            <A href="/learn/chapter-1/practice/occupations-majors">
              <Button
                variant="link"
                class="justify-start text-start text-lg font-normal duration-100 ease-out"
              >
                Occupations & Majors
              </Button>
            </A>
            <A href="/learn/chapter-1/practice/countries-time">
              <Button
                variant="link"
                class="justify-start text-start text-lg font-normal duration-100 ease-out"
              >
                Countries & Time
              </Button>
            </A>
            <A href="/learn/chapter-1/practice/time">
              <Button
                variant="link"
                class="justify-start text-start text-lg font-normal duration-100 ease-out"
              >
                Time
              </Button>
            </A>
            <A href="/learn/chapter-1/practice/minutes">
              <Button
                variant="link"
                class="justify-start text-start text-lg font-normal duration-100 ease-out"
              >
                Minutes
              </Button>
            </A>
          </Dropdown>
          <Dropdown text="Chapter 2">
            <A href="/learn/chapter-2/practice/katakana">
              <Button
                variant="link"
                class="justify-start text-start text-lg font-normal duration-100 ease-out"
              >
                Katakana
              </Button>
            </A>
            <A href="/learn/chapter-2/practice/things">
              <Button
                variant="link"
                class="justify-start text-start text-lg font-normal duration-100 ease-out"
              >
                Things
              </Button>
            </A>
            <A href="/learn/chapter-2/practice/words-that-point">
              <Button
                variant="link"
                class="justify-start text-start text-lg font-normal duration-100 ease-out"
              >
                Words That Point
              </Button>
            </A>
            <A href="/learn/chapter-2/practice/places-money-food">
              <Button
                variant="link"
                class="justify-start text-start text-lg font-normal duration-100 ease-out"
              >
                Places, Money, Food
              </Button>
            </A>
            <A href="/learn/chapter-2/practice/all-vocab">
              <Button
                variant="link"
                class="justify-start text-start text-lg font-normal duration-100 ease-out"
              >
                All Vocab
              </Button>
            </A>
          </Dropdown>
          <Dropdown text="Chapter 3">
            <A href="/learn/chapter-3/practice/chapter-1-kanji-part-1">
              <Button
                variant="link"
                class="justify-start text-start text-lg font-normal duration-100 ease-out"
              >
                Chapter 1 Kanji Part 1
              </Button>
            </A>
            <A href="/learn/chapter-3/practice/chapter-1-kanji-part-2">
              <Button
                variant="link"
                class="justify-start text-start text-lg font-normal duration-100 ease-out"
              >
                Chapter 1 Kanji Part 2
              </Button>
            </A>
            <A href="/learn/chapter-3/practice/chapter-1-kanji-part-3">
              <Button
                variant="link"
                class="justify-start text-start text-lg font-normal duration-100 ease-out"
              >
                Chapter 1 Kanji Part 3
              </Button>
            </A>
            <A href="/learn/chapter-3/practice/chapter-2-kanji">
              <Button
                variant="link"
                class="justify-start text-start text-lg font-normal duration-100 ease-out"
              >
                Chapter 2 Kanji
              </Button>
            </A>
            <A href="/learn/chapter-3/practice/nouns-readings">
              <Button
                variant="link"
                class="justify-start text-start text-lg font-normal duration-100 ease-out"
              >
                Nouns - Readings
              </Button>
            </A>
            <A href="/learn/chapter-3/practice/nouns-kana">
              <Button
                variant="link"
                class="justify-start text-start text-lg font-normal duration-100 ease-out"
              >
                Nouns - Kana
              </Button>
            </A>
            <A href="/learn/chapter-3/practice/days-and-time-readings">
              <Button
                variant="link"
                class="justify-start text-start text-lg font-normal duration-100 ease-out"
              >
                Days & Time - Readings
              </Button>
            </A>
            <A href="/learn/chapter-3/practice/days-and-time-kana">
              <Button
                variant="link"
                class="justify-start text-start text-lg font-normal duration-100 ease-out"
              >
                Days & Time - Kana
              </Button>
            </A>
            <A href="/learn/chapter-3/practice/verbs-and-adj-readings">
              <Button
                variant="link"
                class="justify-start text-start text-lg font-normal duration-100 ease-out"
              >
                Verbs & Adjectives - Readings
              </Button>
            </A>
            <A href="/learn/chapter-3/practice/verbs-and-adj-kana">
              <Button
                variant="link"
                class="justify-start text-start text-lg font-normal duration-100 ease-out"
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
