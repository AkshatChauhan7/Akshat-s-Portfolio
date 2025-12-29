'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'LeetCode', href: '#leetcode' },
  { name: 'Automation', href: '#automation' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Beyond Code', href: '#beyond-code' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' }
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1))
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Body scroll lock when navigation is open
  useEffect(() => {
    if (isOpen) {
      // Lock body scroll
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = '0px' // Prevent layout shift
    } else {
      // Restore body scroll
      document.body.style.overflow = 'unset'
      document.body.style.paddingRight = 'unset'
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
      document.body.style.paddingRight = 'unset'
    }
  }, [isOpen])

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      const yOffset = -80
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
        scrolled 
          ? 'py-4 bg-black/20 backdrop-blur-lg border-b border-white/10' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative z-10"
          >
            <button
              onClick={() => scrollToSection('#hero')}
              className="text-2xl font-bold gradient-text hover:glow-text transition-all duration-300"
            >
              AC
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className={`relative text-sm font-medium transition-all duration-300 ${
                  activeSection === item.href.substring(1)
                    ? 'text-primary-400 glow-text'
                    : 'text-white/80 hover:text-white hover:glow-text'
                }`}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="navIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl glass-button text-white"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <XMarkIcon className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Bars3Icon className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Proper Stacking */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop - Isolates page content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 lg:hidden"
              style={{ 
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: 9998
              }}
              onClick={() => setIsOpen(false)}
            />
            
            {/* Mobile Menu Panel - True Overlay */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30
              }}
              className="fixed top-0 right-0 h-screen w-80 max-w-[90vw] bg-black border-l border-white/20 lg:hidden overflow-hidden"
              style={{ 
                position: 'fixed',
                top: 0,
                right: 0,
                height: '100vh',
                zIndex: 9999,
                isolation: 'isolate'
              }}
            >
              <div className="h-full flex flex-col bg-black">
                {/* Clean Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10 bg-black">
                  <span className="text-xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                    Navigation
                  </span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    <XMarkIcon className="w-5 h-5" />
                  </button>
                </div>

                {/* Navigation List - Internal scroll only */}
                <div className="flex-1 overflow-y-auto bg-black">
                  <nav className="py-4 px-4 space-y-1">
                    {navItems.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => scrollToSection(item.href)}
                        className={`w-full text-left px-4 py-4 rounded-lg transition-all duration-200 ${
                          activeSection === item.href.substring(1)
                            ? 'bg-primary-500/20 text-primary-300 border border-primary-400/30'
                            : 'text-white/80 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full ${
                            activeSection === item.href.substring(1)
                              ? 'bg-primary-400'
                              : 'bg-white/40'
                          }`} />
                          <span className="font-medium">{item.name}</span>
                        </div>
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-white/10 bg-black">
                  <button
                    onClick={() => scrollToSection('#contact')}
                    className="w-full px-4 py-3 bg-primary-500/20 hover:bg-primary-500/30 text-primary-300 rounded-lg font-medium transition-colors"
                  >
                    Get In Touch
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}