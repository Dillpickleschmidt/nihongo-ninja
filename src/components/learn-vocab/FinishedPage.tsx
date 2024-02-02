// JSX to display when the user has finished all the questions in the lesson

import Button from "../button"

type FinishedPageProps = {
  link: string
}

export default function FinishedPage({ link }: FinishedPageProps) {
  return (
    <div className="h-[80%] flex flex-col justify-center items-center">
      <div className="my-24 text-4xl text-center">
        You&apos;ve finished all the questions!
      </div>
      <div className="">
        <Button link={link}>{"Next Lesson"}</Button>
      </div>
    </div>
  )
}
