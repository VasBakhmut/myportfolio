"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface BlogPostCardProps {
  title: string
  excerpt: string
  date: string
  readTime: string
  image: string
  category: string
  slug: string
}

export function BlogPostCard({ title, excerpt, date, readTime, image, category, slug }: BlogPostCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="h-full"
    >
      <Card className="overflow-hidden h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500"
            style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
          />
          <div className="absolute top-4 left-4">
            <Badge className="bg-primary hover:bg-primary">{category}</Badge>
          </div>
        </div>
        <CardHeader>
          <CardTitle className="line-clamp-2">{title}</CardTitle>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {date}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {readTime}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="line-clamp-3">{excerpt}</CardDescription>
        </CardContent>
        <CardFooter className="mt-auto">
          <Link href={`/blog/${slug}`} className="w-full">
            <Button variant="ghost" className="w-full justify-between group">
              Read More
              <motion.div animate={{ x: isHovered ? 5 : 0 }} transition={{ duration: 0.2 }}>
                <ArrowRight className="h-4 w-4 group-hover:text-primary" />
              </motion.div>
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
