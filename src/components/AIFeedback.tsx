"use client"
import { useState, useRef, useEffect } from "react"
import { Message, experimental_useAssistant as useAssistant } from "ai/react"

const roleToColorMap: Record<Message["role"], string> = {
  system: "red",
  user: "",
  function: "blue",
  tool: "purple",
  assistant: "#333333",
  data: "orange",
}

type AIFeedbackProps = React.DialogHTMLAttributes<HTMLDialogElement> & {
  xposition?: string
  yposition?: string
  closeAIFeedback: () => void
  onKeysPressed: (keys: string[]) => void // pass keysPressed to parent component
}

export default function AIFeedback({
  xposition,
  yposition,
  closeAIFeedback,
  onKeysPressed,
  ...props
}: AIFeedbackProps) {
  const [composedCharacter, setComposedCharacter] = useState("")

  // Opens the dialog
  const chatRef = useRef<null | HTMLDialogElement>(null)
  useEffect(() => {
    chatRef.current?.showModal()
  })

  const { status, messages, input, submitMessage, handleInputChange, error } =
    useAssistant({
      api: "../../api/chat",
    })

  // Handles outside clicks and closes the dialog
  const divRef = useRef<HTMLDivElement | null>(null) // used to close the chat when the user clicks outside of the chat
  const inputRef = useRef<HTMLInputElement>(null) // used to unfocus the input field by default

  useEffect(() => {
    const handleOutSideClick = (event: MouseEvent) => {
      if (divRef.current && !divRef.current.contains(event.target as Node)) {
        closeAIFeedback()
      }
    }
    window.addEventListener("mousedown", handleOutSideClick)

    inputRef.current?.blur()

    const handleCompositionUpdate = (event: CompositionEvent) => {
      // if the user types a Japanese character, close the dialog
      setComposedCharacter(event.data)
      console.log("composedCharacter", event.data)
      if (event.data && !/[\uff41-\uff5a\uff21-\uff3a]/.test(event.data)) {
        // if the composed character is not a full-width Latin letter
        onKeysPressed(event.data.split(""))
        closeAIFeedback()
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      // also, if the user presses any of these keys, close the dialog
      if (event.key === "Enter" || /^[a-zA-Z0-9]$/.test(event.key)) {
      }
      if (event.key === "Backspace") {
        onKeysPressed(["Backspace"]) // pass keysPressed to parent component (to delete the last character)
      }
      closeAIFeedback()
    }

    const timer = setTimeout(() => {
      window.addEventListener("compositionupdate", handleCompositionUpdate)
      window.addEventListener("keydown", handleKeyDown)
    }, 0)

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick)
      window.removeEventListener("compositionupdate", handleCompositionUpdate)
      window.removeEventListener("keydown", handleKeyDown)
      clearTimeout(timer)
    }
  }, [composedCharacter])

  return (
    <dialog ref={chatRef} {...props}>
      <input autoFocus={true} className="absolute text-2xl" />
      <div ref={divRef}>
        {error != null && (
          <div className="relative px-6 py-4 text-white bg-red-500 rounded-md">
            <span className="block sm:inline">
              Error: {(error as any).toString()}
            </span>
          </div>
        )}
        <div className="fixed top-[50%] left-[50%] translate-x-[62%] translate-y-[-30%] overflow-y-auto overscroll-y-contain no-scrollbar rounded-[25px] w-[25%] h-[30%] bg-[#151515] border-black border-2 text-white text-lg text-start">
          <div className="flex flex-col items-center justify-between w-full h-full mx-auto">
            <div>
              <h1 className="p-6 border-b border-black text-2xl text-center">
                Smart Feedback
              </h1>
              <div className="px-10 py-6 whitespace-pre-wrap bg-[#333333]">
                ❌ Not quite! Try again or <u>show correct answer</u>
              </div>
              {messages.map((m: Message) => (
                <div
                  key={m.id}
                  className="p-10 whitespace-pre-wrap"
                  style={{ background: roleToColorMap[m.role] }}
                >
                  <strong>{`${m.role}: `}</strong>
                  {m.role !== "data" && m.content}
                </div>
              ))}

              {status === "in_progress" && (
                <div className="w-full h-8 max-w-md p-2 mb-8 bg-gray-300 rounded-lg dark:bg-gray-600 animate-pulse" />
              )}
            </div>

            <div>
              <form onSubmit={submitMessage}>
                <input
                  className={
                    "rounded-[15px] px-7 py-2 my-9 text-lg placeholder:text-[#666666] w-[430px] bg-[#333333]"
                  }
                  ref={inputRef}
                  disabled={status !== "awaiting_message"}
                  value={input}
                  placeholder="Ask me anything..."
                  onChange={handleInputChange}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  )
}
