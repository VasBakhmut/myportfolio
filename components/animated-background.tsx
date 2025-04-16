"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Shape {
  id: number
  x: number
  y: number
  size: number
  rotation: number
  opacity: number
  duration: number
  delay: number
  type: "circle" | "square" | "triangle"
}

export function AnimatedBackground() {
  const [shapes, setShapes] = useState<Shape[]>([])

  useEffect(() => {
    // Generate random shapes
    const newShapes: Shape[] = []
    const types: ("circle" | "square" | "triangle")[] = ["circle", "square", "triangle"]

    for (let i = 0; i < 15; i++) {
      newShapes.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 60 + 20,
        rotation: Math.random() * 360,
        opacity: Math.random() * 0.07 + 0.03,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
        type: types[Math.floor(Math.random() * types.length)],
      })
    }

    setShapes(newShapes)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: shape.size,
            height: shape.type !== "triangle" ? shape.size : shape.size * 0.866, // Adjust height for triangles
            opacity: shape.opacity,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            rotate: [0, shape.rotation, 0],
          }}
          transition={{
            duration: shape.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: shape.delay,
          }}
        >
          {shape.type === "circle" && <div className="w-full h-full rounded-full bg-primary dark:bg-primary/70" />}
          {shape.type === "square" && <div className="w-full h-full rotate-45 bg-primary dark:bg-primary/70" />}
          {shape.type === "triangle" && (
            <div
              className="w-0 h-0"
              style={{
                borderLeft: `${shape.size / 2}px solid transparent`,
                borderRight: `${shape.size / 2}px solid transparent`,
                borderBottom: `${shape.size * 0.866}px solid var(--primary)`,
                opacity: shape.opacity,
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  )
}
