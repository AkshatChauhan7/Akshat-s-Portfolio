'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
  className?: string
  startFrom?: number
}

export function AnimatedCounter({ 
  end, 
  duration = 2, 
  suffix = '', 
  className = '',
  startFrom
}: AnimatedCounterProps) {
  // Start from actual value if provided to avoid showing 0 during load
  const [count, setCount] = useState(startFrom !== undefined ? startFrom : end)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true
      const startTime = Date.now()
      const endTime = startTime + duration * 1000
      const initialValue = startFrom !== undefined ? startFrom : 0

      const animate = () => {
        const now = Date.now()
        const progress = Math.min((now - startTime) / (duration * 1000), 1)
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentCount = Math.floor(initialValue + easeOutQuart * (end - initialValue))
        
        setCount(currentCount)

        if (now < endTime) {
          requestAnimationFrame(animate)
        } else {
          setCount(end)
        }
      }

      requestAnimationFrame(animate)
    }
  }, [isInView, end, duration, startFrom])

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ type: 'spring', stiffness: 100, damping: 10 }}
    >
      {count}{suffix}
    </motion.span>
  )
}
