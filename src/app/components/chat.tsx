// unique modal for AI chatbot

"use clent"
import { useRef, useEffect } from "react"

type ChatProps = React.DialogHTMLAttributes<HTMLDialogElement> & {
  isOpen: boolean
  toggleChatProp: () => void
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

  return (
    <dialog
      ref={chatRef}
      className="backdrop:backdrop-saturate-0 backdrop:backdrop-blur-2xl backdrop:backdrop-brightness-50"
    >
      {/* divRef-> clickable elements that don't close the dialog */}
      <div ref={divRef}>
        <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] overflow-hidden rounded-[25px] w-[30%] h-[83%] bg-[#151515] text-white text-lg text-start">
          <div className="flex flex-col items-center justify-between w-full h-full mx-auto">
            <div>
              <h1 className="m-12 text-3xl text-center">AI Assistant</h1>
              <p className="p-10">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste,
                expedita.
              </p>
              <div className="w-full bg-[#333333]">
                <p className="p-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore sequi, harum in voluptates voluptatum delectus eos
                  dignissimos autem totam facilis numquam libero, quos rem
                  tempora nostrum quis, praesentium saepe soluta.
                </p>
              </div>
              <p className="p-10">Lorem ipsum dolor sit amet.</p>
              <div className="w-full bg-[#333333]">
                <p className="p-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore sequi, harum in voluptates voluptatum delectus eos
                  dignissimos autem totam facilis numquam libero, quos rem
                  tempora nostrum quis, praesentium saepe soluta.
                </p>
              </div>
            </div>
            <div>
              <input
                className={
                  "rounded-full px-9 py-2 my-9 text-lg placeholder:text-[#666666] w-[530px] bg-[#333333]"
                }
                id="ai-input"
                type="text"
                placeholder="Ask me anything..."
              />
            </div>
          </div>
        </div>
      </div>
    </dialog>
  )
}
