"use client"

import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface SkillProgressProps {
  name: string
  percentage: number
  color?: string
  icon?: string
  delay?: number
}

export function SkillProgress({ name, percentage, color = "bg-primary", icon, delay = 0 }: SkillProgressProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
      setIsVisible(true)
    }
  }, [controls, isInView])

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          {icon && <span className="text-xl">{icon}</span>}
          <span className="font-medium">{name}</span>
        </div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: delay + 0.5 }}
          className="text-sm font-medium"
        >
          {isVisible ? `${percentage}%` : "0%"}
        </motion.span>
      </div>
      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${color} rounded-full`}
          initial={{ width: 0 }}
          animate={controls}
          variants={{
            visible: { width: `${percentage}%` },
          }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}
