"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

interface AnimatedCounterProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
}

export function AnimatedCounter({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  className = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const countRef = useRef(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
      const startTime = Date.now()
      const endTime = startTime + duration

      const animateCount = () => {
        const now = Date.now()
        const progress = Math.min(1, (now - startTime) / duration)
        const currentCount = Math.floor(progress * end)

        if (countRef.current !== currentCount) {
          countRef.current = currentCount
          setCount(currentCount)
        }

        if (now < endTime) {
          requestAnimationFrame(animateCount)
        } else {
          setCount(end)
        }
      }

      requestAnimationFrame(animateCount)
    }
  }, [isInView, end, duration, hasAnimated])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}
