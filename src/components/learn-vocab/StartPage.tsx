// JSX to display at the beginning

import JapaneseFont from "../text/JapaneseFont"
import Button from "../Button"

type StartPageProps = {
  children: React.ReactNode
  hideTerms?: boolean
  tutorial?: boolean
  originalVocabArray: any
  setTutorialStep: (step: number) => void
  setStarted: (started: boolean) => void
  started: boolean
}

export default function StartPage({
  children,
  hideTerms,
  tutorial,
  originalVocabArray,
  setTutorialStep,
  setStarted,
}: StartPageProps) {
  return (
    <div>
      <div className="text-2xl">
        <div className="w-full mt-24 flex justify-center items-center">
          <div>{children}</div>
        </div>
        {!hideTerms && (
          <div className="mt-12 flex justify-center">
            <div>
              {originalVocabArray.map((values: any, index: number) => (
                <li
                  key={index}
                  className={`leading-[1.75] ${
                    index % 2 === 0 ? "text-[#b49b7d]" : "text-[#dfcdb3]"
                  }`}
                >
                  <JapaneseFont
                    className={`font-semibold text-4xl ${
                      index % 2 === 0 && "text-[#907c64]"
                    }`}
                  >
                    {values.key}
                  </JapaneseFont>{" "}
                  -{" "}
                  {values.value.english &&
                  values.value.english[0] &&
                  values.value.hiragana[0]
                    ? // If both hiragana and english exist, render both
                      values.value.hiragana &&
                      " / " &&
                      values.value.english.join(" / ")
                    : values.value.hiragana && values.value.hiragana[0]
                    ? // If only hiragana exists, render hiragana
                      values.value.hiragana
                    : // If only english exists, render english
                      values.value.english.join(" / ")}
                </li>
              ))}
            </div>
          </div>
        )}
        <div className="my-12 flex flex-row justify-center">
          {tutorial ? (
            <Button
              onClick={() => {
                setTutorialStep(0)
                setStarted(true)
              }}
              className="bg-[#F6E7D2] hover:bg-[#FFF7EC]"
            >
              Get Started
            </Button>
          ) : (
            <Button
              onClick={() => setStarted(true)}
              className="bg-[#F6E7D2] hover:bg-[#FFF7EC]"
            >
              Start Practicing
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
