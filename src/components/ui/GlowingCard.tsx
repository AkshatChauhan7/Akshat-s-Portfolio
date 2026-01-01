'use client'

import { motion } from 'framer-motion'
import { useRef, useState } from 'react'

interface GlowingCardProps {
  children: React.ReactNode
  className?: string
}

export function GlowingCard({ children, className = '' }: GlowingCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`relative overflow-hidden rounded-3xl ${className}`}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Animated gradient border */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x" />
      
      {/* Glow effect following mouse */}
      {isHovering && (
        <div
          className="absolute w-64 h-64 rounded-full pointer-events-none transition-opacity duration-300"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
          }}
        />
      )}
      
      {/* Card content */}
      <div className="relative glass-card p-6 sm:p-8 m-[1px] rounded-3xl z-10">
        {children}
      </div>
    </motion.div>
  )
}
