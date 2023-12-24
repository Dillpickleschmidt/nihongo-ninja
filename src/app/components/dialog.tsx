// Basic template for all lessons with variations for different sizes

"use client"
import { ReactNode } from "react"
import { useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import Button from "./button"
import Navbar from "./navbar"
import { VariantProps, cva } from "class-variance-authority"
import cn from "../util/cn"

type DialogProps = React.DialogHTMLAttributes<HTMLDialogElement> &
  VariantProps<typeof dialogVariants> & {
    children: ReactNode
    locked?: boolean // locked changes the navbar appearance to a locked state
  }

// Dialog is a modal that appears on top of the page
export default function Dialog({
  children,
  variant,
  className,
  locked = true, // navbar locked by default
}: DialogProps) {
  // Opens the dialog
  const dialogRef = useRef<null | HTMLDialogElement>(null)
  // useRef holds state and won't rerender on state change
  useEffect(() => {
    // if a dialog html element is present in the page, show the dialog
    dialogRef.current?.showModal()
  })

  // Closes the dialog
  const router = useRouter()
  const handleClose = () => {
    // close the dialog if it exists
    dialogRef.current?.close()
    router.push("/learn", { scroll: false })
  }

  // Handles outside clicks
  const divRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const handleOutSideClick = (event: MouseEvent) => {
      // if the click is outside the div specified, close the dialog (also unmounts this component, calling the cleanup function below)
      if (divRef.current && !divRef.current.contains(event.target as Node)) {
        handleClose()
      }
    }
    // When mousedown, call handleOutSideClick
    window.addEventListener("mousedown", handleOutSideClick)

    // Cleanup function on dismount
    return () => {
      window.removeEventListener("mousedown", handleOutSideClick)
    }
  }, [])

  return (
    <dialog
      ref={dialogRef}
      className="backdrop:backdrop-saturate-0 backdrop:backdrop-blur-2xl backdrop:backdrop-brightness-75"
    >
      {/* divRef-> clickable elements that don't close the dialog */}
      <div ref={divRef}>
        <Navbar locked={locked} />
        {/* Dialog Variants */}
        <div className={cn(dialogVariants({ variant, className }))}>
          {/* Persistent elements in all dialogs */}
          <div className="fixed flex flex-row justify-end w-full">
            <Button link="/learn" variant={"system"} className="mt-10 mr-10">
              x
            </Button>
          </div>
          {/* Unique page elements go here */}
          {children}
        </div>
      </div>
    </dialog>
  )
}

const dialogVariants = cva(
  "fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] mt-10 rounded-[60px] border-[3.5px] border-[#191919] inline-block overflow-hidden shadow-2xl bg-[#F6E7D2] text-black",
  {
    variants: {
      variant: {
        large: "w-[76%] h-[80%]",
        narrow: "w-[38%] h-[80%]",
        small: "w-[30%] h-[50%]",
        profile: "w-[20%] h-[40%]",
      },
    },
    defaultVariants: {
      variant: "large",
    },
  }
)
