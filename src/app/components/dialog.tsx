// Basic template for all lessons with variations for different sizes

"use client"
import { ReactNode, use } from "react"
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
    background?: string
    showAlertOnClose?: boolean
  }

// Dialog is a modal that appears on top of the page
export default function Dialog({
  children,
  variant,
  className,
  locked = true, // navbar locked by default
  background,
  showAlertOnClose = false,
}: DialogProps) {
  // Opens the dialog
  // useRef holds state and won't rerender on state change
  const dialogRef = useRef<null | HTMLDialogElement>(null)

  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal() // if a dialog html element is present in the page, show the dialog
      document.body.classList.add("overflow-hidden") // prevent scrolling of the background
    } else {
      document.body.classList.remove("overflow-hidden")
    }

    return () => {
      document.body.classList.remove("overflow-hidden")
    }
  }, [dialogRef.current])

  const router = useRouter()

  // Closes the dialog
  const handleClose = () => {
    // if showAlertOnClose is true, show a confirmation dialog
    if (
      showAlertOnClose &&
      !window.confirm(
        "You'll lose your progress. Are you sure you want to leave?"
      )
    ) {
      return
    }
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
      className="backdrop:backdrop-saturate-75 backdrop:backdrop-blur-2xl backdrop:backdrop-brightness-75"
    >
      {/* divRef-> clickable elements that don't close the dialog */}
      <div ref={divRef}>
        {/* <Navbar locked={locked} /> */}
        {/* Dialog Variants */}
        <div className={cn(dialogVariants({ variant, className }))}>
          {/* Persistent elements in all dialogs */}
          <div className="fixed flex flex-row justify-end w-full">
            <Button link="/learn" variant={"system"} className="mt-10 mr-10">
              x
            </Button>
          </div>
          {/* If a background is provided, render this html */}
          {background ? (
            <div className="relative">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${background})`,
                  backgroundRepeat: "repeat",
                  backgroundSize: "1200px", // Change this value to scale your background image
                  backgroundBlendMode: "multiply",
                  opacity: 0.3, // Change this value to set the opacity of the background image
                  zIndex: -1,
                }}
              />
              {children}
            </div>
          ) : (
            // Otherwise, just render this html
            children
          )}
        </div>
      </div>
    </dialog>
  )
}

const dialogVariants = cva(
  "fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] my-auto rounded-[60px] border-[3.5px] border-[#191919] inline-block overflow-y-auto overscroll-y-contain no-scrollbar shadow-2xl bg-[#F6E7D2] text-black",
  {
    variants: {
      variant: {
        xl: "w-[86%] h-[95%]",
        large: "w-[76%] h-[80%]",
        reading: "w-[45%] h-[98%] bg-[#F8F5E9]",
        narrow: "w-[38%] h-[80%]",
        md: "w-[30%] h-[70%]",
        small: "w-[30%] h-[50%]",
        blank: "w-[30%] h-[50%] rounded-[10px] border-none bg-[#F8F5E9]",
        profile: "w-[20%] h-[40%]",
      },
    },
    defaultVariants: {
      variant: "large",
    },
  }
)
