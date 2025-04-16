"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface TypingTextProps {
  text: string
  className?: string
  speed?: number
  delay?: number
}

export function TypingText({ text, className = "", speed = 50, delay = 0 }: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState("")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      let currentIndex = 0
      const timeout = setTimeout(() => {
        const interval = setInterval(() => {
          setDisplayedText(text.substring(0, currentIndex + 1))
          currentIndex++

          if (currentIndex >= text.length) {
            clearInterval(interval)
          }
        }, speed)

        return () => clearInterval(interval)
      }, delay)

      return () => clearTimeout(timeout)
    }
  }, [isInView, text, speed, delay])

  return (
    <span ref={ref} className={className}>
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.8 }}
        className="inline-block w-0.5 h-5 bg-current ml-0.5 align-middle"
      />
    </span>
  )
}
