"use client"

import { LazyMotion, easeInOut, useAnimate } from "framer-motion"
import loadMotionFeatures from "@/lib/framer-motion/loadMotionFeatures"
import NavbarContent from "./NavbarContent"
import { useEffect } from "react"
import { useGlobalContext } from "@/context/GlobalContext"

export default function HideNavbarPositioning() {
  const { isHiddenContentVisible } = useGlobalContext()
  const [scope, animate] = useAnimate()

  async function handleMouseExit() {
    if (!isHiddenContentVisible) {
      await animate(
        scope.current,
        { y: -42, opacity: 0.125 },
        { duration: 0.2, ease: easeInOut },
      )
    }
  }
  async function handleMouseOver() {
    await animate(
      scope.current,
      { y: 0, opacity: 1 },
      { duration: 0.2, ease: easeInOut },
    )
  }

  async function pageMountAnimation() {
    await animate(
      // Just to remove blur flickering and provide time offset
      scope.current,
      { y: 0, opacity: 0.999 },
      { duration: 1, ease: easeInOut },
    )
    await animate(
      scope.current,
      { y: -42, opacity: 0.125 },
      { duration: 1, ease: easeInOut },
    )
  }

  async function handleHiddenContentVisible() {
    if (isHiddenContentVisible) {
      await animate(
        scope.current,
        { y: 0, opacity: 0.999 },
        { duration: 0.5, ease: easeInOut },
      )
    } else {
      await animate(
        scope.current,
        { y: -42, opacity: 0.125 },
        { duration: 0.5, ease: easeInOut },
      )
    }
  }

  enum AnimationType {
    pageMount,
    mouseOver,
    mouseExit,
    hiddenContentVisible,
  }

  type AnimationTypeString = keyof typeof AnimationType

  function handleAnimate(animationType: AnimationTypeString) {
    switch (animationType) {
      case "pageMount":
        pageMountAnimation()
        break
      case "mouseOver":
        handleMouseOver()
        break
      case "mouseExit":
        handleMouseExit()
        break
      case "hiddenContentVisible":
        handleHiddenContentVisible()
        break
    }
  }

  useEffect(() => {
    handleAnimate("pageMount")
  }, [handleAnimate])

  useEffect(() => {
    handleAnimate("hiddenContentVisible")
  }, [isHiddenContentVisible])

  return (
    // This animation will run when loadFeatures resolves.
    <LazyMotion features={loadMotionFeatures}>
      <div
        ref={scope}
        onMouseEnter={() => {
          handleAnimate("mouseOver")
        }}
        onMouseLeave={() => handleAnimate("mouseExit")}
        className="fixed left-0 top-0 z-10 h-[65px] w-full bg-background/[99.9%] text-foreground"
      >
        <NavbarContent />
      </div>
    </LazyMotion>
  )
}
