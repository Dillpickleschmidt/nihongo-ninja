// Basic template for all lessons with variations for different sizes

import { ReactNode } from "react"
import Button from "./Button"
import Navbar from "./Navbar"
import { VariantProps, cva } from "class-variance-authority"
import cn from "../util/cn"
import { Card } from "./ui/card"
import Link from "next/link"
import CloseDialog from "./CloseDialog"

type DialogProps = React.DialogHTMLAttributes<HTMLDialogElement> &
  VariantProps<typeof dialogVariants> & {
    children: ReactNode
    locked?: boolean // locked changes the navbar appearance to a locked state
    backgroundImage?: string
    backgroundImageSize?: string
    backgroundImageOpacity?: number
    showAlertOnClose?: boolean
    scrollRef?: React.MutableRefObject<HTMLDivElement | null> // used to scroll to the top of the dialog
  }

// Dialog is a modal that appears on top of the page
export default function Dialog({
  children,
  variant,
  className,
  locked = true, // navbar locked by default
  backgroundImage,
  backgroundImageSize = "1200px",
  backgroundImageOpacity = 30,
  showAlertOnClose = false,
  scrollRef,
}: DialogProps) {
  // Closes the dialog

  return (
    <>
      <Card className="fixed inset-0 bg-transparent flex items-center justify-center z-10">
        <CloseDialog showAlertOnClose={showAlertOnClose} />
        {/* Dialog Variants */}
        <div className={cn(dialogVariants({ variant, className }))}>
          {/* Persistent elements in all dialogs */}
          <div className="absolute w-full flex justify-end z-50">
            <Button
              link="/learn"
              variant="system"
              className="mt-10 mr-10 focus:outline-none text-3xl leading-none"
              autoFocus={false}
              tabIndex={0}
            >
              &times;
            </Button>
          </div>
          <div
            className="h-full overflow-y-auto overscroll-y-contain scrollbar:hidden"
            ref={scrollRef}
          >
            {/* If a background is provided, render this html */}
            {backgroundImage ? (
              <div className="relative">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundRepeat: "repeat",
                    backgroundSize: backgroundImageSize, // Change this value to scale your background image
                    backgroundBlendMode: "multiply",
                    opacity: backgroundImageOpacity / 100, // Change this value to set the opacity of the background image
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
      </Card>
    </>
  )
}

const dialogVariants = cva(
  "fixed rounded-[60px] border-[3.5px] border-[#191919] bg-[#F6E7D2] text-black overflow-hidden",
  {
    variants: {
      variant: {
        xl: "w-[86%] h-[95%]",
        large: "w-[76%] h-[80%]",
        reading: "w-[45%] h-[98%] border-4 border-black text-xl leading-8",
        narrow: "w-[38%] h-[80%]",
        md: "w-[30%] h-[70%]",
        small: "w-[30%] h-[50%]",
        blank: "w-[30%] h-[50%] rounded-[10px] border-none bg-[#F8F5E9]",
        profile: "w-[20%] h-[40%]",
      },
    },
    defaultVariants: {
      variant: "reading",
    },
  }
)
