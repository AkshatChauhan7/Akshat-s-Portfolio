'use client'

import { useEffect, useCallback, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon } from '@heroicons/react/24/outline'

const shortcuts = [
  { key: 'H', section: 'home', description: 'Home' },
  { key: 'A', section: 'about', description: 'About' },
  { key: 'S', section: 'skills', description: 'Skills' },
  { key: 'P', section: 'projects', description: 'Projects' },
  { key: 'L', section: 'leetcode', description: 'LeetCode' },
  { key: 'E', section: 'experience', description: 'Experience' },
  { key: 'C', section: 'contact', description: 'Contact' },
]

export function KeyboardNav() {
  const [showHelp, setShowHelp] = useState(false)

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const yOffset = -80
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger when typing in inputs
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        e.ctrlKey ||
        e.metaKey ||
        e.altKey
      ) {
        return
      }

      const shortcut = shortcuts.find(s => s.key.toLowerCase() === e.key.toLowerCase())
      if (shortcut) {
        e.preventDefault()
        scrollToSection(shortcut.section)
        setShowHelp(false)
      }

      // Show/hide help with '?'
      if (e.key === '?' || (e.shiftKey && e.key === '/')) {
        e.preventDefault()
        setShowHelp(prev => !prev)
      }

      // Close modal with Escape
      if (e.key === 'Escape') {
        setShowHelp(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [scrollToSection])

  return (
    <>
      {/* Keyboard shortcut hint - only show on desktop */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={() => setShowHelp(true)}
        className="hidden lg:flex fixed bottom-6 right-6 z-50 items-center gap-2 px-4 py-2 glass-card rounded-full text-white/60 hover:text-white/90 transition-colors text-sm group"
        aria-label="Show keyboard shortcuts"
      >
        <span className="group-hover:text-primary-400 transition-colors">Press</span>
        <kbd className="px-2 py-0.5 bg-white/10 rounded text-primary-400 font-mono text-xs border border-white/20">?</kbd>
        <span className="group-hover:text-primary-400 transition-colors">for shortcuts</span>
      </motion.button>

      {/* Help Modal */}
      <AnimatePresence>
        {showHelp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setShowHelp(false)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="keyboard-help-title"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 20 }}
              className="glass-card p-6 sm:p-8 rounded-3xl max-w-md w-full"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 id="keyboard-help-title" className="text-xl font-bold text-white flex items-center gap-2">
                  ⌨️ Keyboard Shortcuts
                </h2>
                <button
                  onClick={() => setShowHelp(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  aria-label="Close keyboard shortcuts"
                >
                  <XMarkIcon className="w-5 h-5 text-white/60" />
                </button>
              </div>
              
              <div className="space-y-3">
                {shortcuts.map((shortcut) => (
                  <button
                    key={shortcut.key}
                    onClick={() => {
                      scrollToSection(shortcut.section)
                      setShowHelp(false)
                    }}
                    className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors group"
                  >
                    <span className="text-white/70 group-hover:text-white transition-colors">
                      {shortcut.description}
                    </span>
                    <kbd className="px-3 py-1 bg-white/10 rounded-lg text-primary-400 font-mono text-sm border border-white/20 group-hover:border-primary-400/40 transition-colors">
                      {shortcut.key}
                    </kbd>
                  </button>
                ))}
                <div className="flex items-center justify-between p-2 border-t border-white/10 mt-4 pt-4">
                  <span className="text-white/50">Close this modal</span>
                  <kbd className="px-3 py-1 bg-white/10 rounded-lg text-white/60 font-mono text-sm border border-white/20">
                    Esc
                  </kbd>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Skip to main content link for accessibility */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-primary-500 focus:text-white focus:rounded-lg focus:outline-none"
      >
        Skip to main content
      </a>
    </>
  )
}
