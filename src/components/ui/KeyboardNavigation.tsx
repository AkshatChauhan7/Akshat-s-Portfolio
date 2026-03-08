'use client'

import { useEffect, useCallback } from 'react'

interface KeyboardShortcut {
  key: string
  section: string
  description: string
}

const shortcuts: KeyboardShortcut[] = [
  { key: 'h', section: 'home', description: 'Go to Home' },
  { key: 'a', section: 'about', description: 'Go to About' },
  { key: 's', section: 'skills', description: 'Go to Skills' },
  { key: 'p', section: 'projects', description: 'Go to Projects' },
  { key: 'l', section: 'leetcode', description: 'Go to LeetCode' },
  { key: 'c', section: 'contact', description: 'Go to Contact' },
  { key: 'e', section: 'experience', description: 'Go to Experience' },
]

export function useKeyboardNavigation() {
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
      }

      // Show/hide help with '?'
      if (e.key === '?') {
        const helpModal = document.getElementById('keyboard-help-modal')
        if (helpModal) {
          helpModal.classList.toggle('hidden')
        }
      }

      // Close modal with Escape
      if (e.key === 'Escape') {
        const helpModal = document.getElementById('keyboard-help-modal')
        if (helpModal) {
          helpModal.classList.add('hidden')
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [scrollToSection])

  return shortcuts
}

export function KeyboardHelpModal() {
  const shortcuts = [
    { key: 'H', description: 'Home' },
    { key: 'A', description: 'About' },
    { key: 'S', description: 'Skills' },
    { key: 'P', description: 'Projects' },
    { key: 'L', description: 'LeetCode' },
    { key: 'E', description: 'Experience' },
    { key: 'C', description: 'Contact' },
    { key: '?', description: 'Toggle this help' },
    { key: 'Esc', description: 'Close modal' },
  ]

  return (
    <div
      id="keyboard-help-modal"
      className="hidden fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="keyboard-help-title"
    >
      <div className="glass-card p-6 sm:p-8 rounded-3xl max-w-md mx-4 w-full">
        <h2 id="keyboard-help-title" className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          ⌨️ Keyboard Shortcuts
        </h2>
        <div className="space-y-3">
          {shortcuts.map((shortcut) => (
            <div key={shortcut.key} className="flex items-center justify-between">
              <span className="text-white/70">{shortcut.description}</span>
              <kbd className="px-3 py-1 bg-white/10 rounded-lg text-primary-400 font-mono text-sm border border-white/20">
                {shortcut.key}
              </kbd>
            </div>
          ))}
        </div>
        <p className="text-white/50 text-sm mt-6 text-center">
          Press <kbd className="px-2 py-0.5 bg-white/10 rounded text-xs">?</kbd> to toggle this help
        </p>
      </div>
    </div>
  )
}
