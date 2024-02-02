// JSX to display when the user has finished 7 questions

import Button from "../button"
import JapaneseFont from "../JapaneseFont"

type VocabItemValue = {
  hiragana?: string[]
  english?: string[]
  mnemonics?: string
}

type VocabItem = {
  key: string
  value: VocabItemValue
  style: string // type: "multiple-choice" or "write"
}

type ReviewPageProps = {
  reviewQuestions: VocabItem[]
  setShowReview: (showReview: boolean) => void
}

export default function ReviewPage({
  reviewQuestions,
  setShowReview,
}: ReviewPageProps) {
  return (
    <div className="h-full flex flex-row justify-center">
      <div className="2xl:w-[60%] xl:w-[80%] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] px-12 py-10 bg-[#222222] rounded-[10px] border-2 border-neutral-700 border-dashed">
        {/* Render your review UI here */}
        <div className="w-full flex justify-center">
          <h1 className="border-b pb-6 border-yellow-500 border-opacity-75 px-16 text-5xl font-semibold">
            Review
          </h1>
        </div>
        <div className="my-6 flex justify-center">
          <div className="space-y-6">
            {reviewQuestions.map((question, index) => (
              <div key={index} className="border-b border-neutral-700 pb-6">
                <p className="text-4xl font-medium">
                  <JapaneseFont>{question.key}</JapaneseFont>{" "}
                  <span className="text-2xl">
                    -{" "}
                    {question.value.english &&
                    question.value.english[0] &&
                    question.value.hiragana?.[0]
                      ? // If both hiragana and english exist, render both
                        question.value.hiragana &&
                        " / " &&
                        question.value.english.join(" / ")
                      : question.value.hiragana && question.value.hiragana[0]
                      ? // If only hiragana exists, render hiragana
                        question.value.hiragana
                      : // If only english exists, render english
                        question.value.english?.join(" / ") ?? ""}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-end outline-none">
          <Button
            className=""
            autoFocus={true}
            onClick={() => {
              // When "continue" is clicked, hide the review UI
              setShowReview(false)
            }}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  )
}
