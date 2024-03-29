"use client"

import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react"
import Link from "next/link"
import { VariantProps, cva } from "class-variance-authority"
import cn from "../util/cn"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof buttonVariants> & {
    children?: ReactNode
    link?: string
  }

export default function Button({
  children,
  className,
  variant,
  link,
  ...props
}: ButtonProps) {
  if (link) {
    return (
      <Link
        {...props}
        href={link}
        scroll={false}
        className={cn(buttonVariants({ variant, className }))}
      >
        {children}
      </Link>
    )
  } else {
    // Doesn't do anything right now, for future use
    return (
      <button {...props} className={cn(buttonVariants({ variant, className }))}>
        {children}
      </button>
    )
  }
}

const buttonVariants = cva(
  "cursor-pointer hover:scale-[103%] ease-in-out duration-200",
  {
    variants: {
      variant: {
        main: "bg-white rounded-full border-2 border-black text-black font-medium hover:bg-neutral-200 px-9 py-3 text-xl shadow-md drop-shadow-lg focus:outline-indigo-500",
        system: "px-2 py-2 hover:text-neutral-500 text-black text-2xl",
        card: "text-white font-medium hover:brightness-125 text-5xl",
        vocab:
          "bg-[#191919] rounded-xl border border-neutral-700 py-5 px-8 text-xl text-start font-light hover:bg-[#222222] hover:shadow-md",
        close:
          "h-full flex flex-col justify-center items-center bg-[#F6E7D2] pb-1 px-[0.35rem] hover:bg-red-400 border border-black rounded-lg opacity-50 text-black",
      },
    },
    defaultVariants: {
      variant: "main",
    },
  }
)
