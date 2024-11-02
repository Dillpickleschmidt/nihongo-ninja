import { Component, For } from "solid-js"

interface Props {
  feedback: string[]
}

export const FeedbackDisplay: Component<Props> = (props) => {
  return (
    <div class="rounded bg-blue-50 p-3">
      <div class="font-bold text-blue-800">Feedback:</div>
      <ul class="list-disc pl-5 text-blue-700">
        <For each={props.feedback}>{(text) => <li>{text}</li>}</For>
      </ul>
    </div>
  )
}
