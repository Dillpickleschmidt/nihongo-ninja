// unique modal for AI chatbot

"use clent"
import { useRef, useEffect } from "react"
import supabase from "../../lib/supabase/server"
import { Message, experimental_useAssistant as useAssistant } from "ai/react"

type ChatProps = React.DialogHTMLAttributes<HTMLDialogElement> & {
  isOpen: boolean
  toggleChatProp: () => void
}

const roleToColorMap: Record<Message["role"], string> = {
  system: "red",
  user: "",
  function: "blue",
  tool: "purple",
  assistant: "#333333",
  data: "orange",
}

export default function Chat({ isOpen, toggleChatProp }: ChatProps) {
  // Opens the dialog
  const chatRef = useRef<null | HTMLDialogElement>(null)
  useEffect(() => {
    // If the dialog prop isOpen == true, show the dialog
    // see parent (navbar.tsx) for how this is used
    if (isOpen && chatRef.current) {
      chatRef.current.showModal()
    }
  }, [isOpen]) // re-run this effect when isOpen changes

  // Handles outside clicks and closes the dialog
  const divRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleOutSideClick = (event: MouseEvent) => {
      if (divRef.current && !divRef.current.contains(event.target as Node)) {
        chatRef.current?.close()
        // toggleChatProp is a function that toggles the state of isChatOpen in the parent component
        toggleChatProp()
      }
    }
    window.addEventListener("mousedown", handleOutSideClick)

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick)
    }
  }, [])

  const { status, messages, input, submitMessage, handleInputChange, error } =
    useAssistant({
      api: "../api/chat",
    })

  // When status changes to accepting messages, focus the input:
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (status === "awaiting_message") {
      inputRef.current?.focus()
    }
  }, [status])

  return (
    <dialog
      ref={chatRef}
      className="backdrop:backdrop-saturate-[75%] backdrop:backdrop-blur-2xl backdrop:backdrop-brightness-50"
    >
      {/* divRef-> clickable elements that don't close the dialog */}
      <div ref={divRef}>
        {error != null && (
          <div className="relative px-6 py-4 text-white bg-red-500 rounded-md">
            <span className="block sm:inline">
              Error: {(error as any).toString()}
            </span>
          </div>
        )}
        <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] overflow-y-auto overscroll-y-contain no-scrollbar rounded-[25px] w-[30%] h-[83%] bg-[#151515] border-black border-4 text-white text-lg text-start">
          <div className="flex flex-col items-center justify-between w-full h-full mx-auto">
            <div>
              <h1 className="m-12 text-3xl text-center">AI Assistant</h1>
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
                    "rounded-[15px] px-9 py-2 my-9 text-lg placeholder:text-[#666666] w-[530px] bg-[#333333]"
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
