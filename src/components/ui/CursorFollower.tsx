'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState('default')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const mouseLeave = () => setIsVisible(false)
    const mouseEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', mouseMove)
    window.addEventListener('mouseleave', mouseLeave)
    window.addEventListener('mouseenter', mouseEnter)

    // Add hover effects for interactive elements
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'button, a, [role="button"], .cursor-hover, input, textarea'
      )
      
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', () => setCursorVariant('hover'))
        el.addEventListener('mouseleave', () => setCursorVariant('default'))
      })
    }

    // Initial setup
    addHoverListeners()

    // Re-run when DOM changes (for dynamically added elements)
    const observer = new MutationObserver(addHoverListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', mouseMove)
      window.removeEventListener('mouseleave', mouseLeave)
      window.removeEventListener('mouseenter', mouseEnter)
      observer.disconnect()
    }
  }, [isVisible])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      opacity: 0.6,
      mixBlendMode: 'difference' as const,
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      scale: 1.5,
      opacity: 0.8,
      mixBlendMode: 'difference' as const,
    },
  }

  // Only show on desktop
  if (typeof window !== 'undefined' && window.innerWidth < 1024) {
    return null
  }

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed pointer-events-none z-50 rounded-full bg-gradient-to-r from-primary-400 to-secondary-400"
        style={{ 
          width: 32, 
          height: 32,
          filter: 'blur(0px)',
          opacity: isVisible ? 0.6 : 0,
        }}
        animate={cursorVariant}
        variants={variants}
        transition={{ 
          type: "spring", 
          stiffness: 500, 
          damping: 28,
          opacity: { duration: 0.2 }
        }}
      />

      {/* Trailing effect */}
      <motion.div
        className="fixed pointer-events-none z-40 rounded-full border-2 border-white/20"
        style={{ 
          width: 48, 
          height: 48,
          opacity: isVisible ? 0.3 : 0,
        }}
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
        }}
        transition={{ 
          type: "spring", 
          stiffness: 150, 
          damping: 15,
          opacity: { duration: 0.3 }
        }}
      />
    </>
  )
}