'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDownIcon, EnvelopeIcon, DocumentIcon, CheckIcon, ClipboardDocumentIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export function Hero() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('chauhanakshat50@gmail.com')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden noise-overlay">
      {/* Subtle ambient background */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[200px] animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[200px] animate-float-medium" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-[200px] h-[200px] bg-accent/3 rounded-full blur-[150px] animate-float-fast" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container-editorial py-16 md:py-24 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left side - Text Content (spans 7 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 lg:col-start-1 pt-12 lg:pt-20"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8"
            >
              <p className="caption text-accent mb-4 tracking-widest">Hello, I'm</p>
              <h1 className="heading-hero text-fg-primary">
                Akshat<span className="text-accent"> Chauhan</span>
              </h1>
            </motion.div>

            {/* Role and Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mb-12 max-w-xl"
            >
              <h2 className="heading-3 font-light text-fg-secondary mb-6 leading-relaxed">
                Student & <span className="font-semibold text-fg-primary">Builder</span>
              </h2>
              <p className="body-lg text-fg-secondary leading-relaxed">
                Passionate about crafting efficient solutions and automating the world,
                <span className="text-accent font-medium">one line of code at a time.</span>
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary group"
              >
                <span className="relative z-10">Get In Touch</span>
                <EnvelopeIcon className="w-5 h-5 relative z-10" aria-hidden="true" />
              </motion.a>

              <div className="relative">
                <motion.button
                  onClick={copyEmail}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-secondary w-full sm:w-auto"
                >
                  {copied ? (
                    <>
                      <CheckIcon className="w-5 h-5" aria-hidden="true" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <ClipboardDocumentIcon className="w-5 h-5" aria-hidden="true" />
                      <span>Copy Email</span>
                    </>
                  )}
                </motion.button>
                <AnimatePresence>
                  {copied && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute -bottom-10 left-0 px-3 py-1.5 bg-accent text-bg-primary text-sm font-medium rounded"
                    >
                      Email copied to clipboard
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.a
                href="/Akshat_Chauhan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-secondary w-full sm:w-auto border-border-light"
              >
                <DocumentIcon className="w-5 h-5" aria-hidden="true" />
                <span>View Resume</span>
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-3 gap-6 md:gap-10 pt-8 border-t border-border"
            >
              {[
                { number: 6, suffix: '+', label: 'Projects Built' },
                { number: 2, suffix: '+', label: 'Years Learning' },
                { number: 300, suffix: '+', label: 'LeetCode Solved' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group"
                >
                  <div className="heading-1 font-bold text-fg-primary mb-2">
                    {stat.number}{stat.suffix}
                  </div>
                  <div className="caption text-fg-muted group-hover:text-accent transition-colors duration-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Photo (spans 5 columns, offset) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:col-start-8 relative hidden lg:block"
          >
            <div className="relative group" style={{ aspectRatio: '4/5' }}>
              {/* Ambient glow */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.15, 0.25, 0.15]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-8 bg-accent/10 rounded-full blur-[100px]"
              />

              {/* Subtle border ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 bg-gradient-to-r from-accent/20 via-transparent to-accent/20 rounded-full opacity-50"
              />

              {/* Photo container */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className="relative w-full h-full rounded-2xl overflow-hidden bg-card border border-border"
              >
                <Image
                  src="/images/me.jpeg"
                  alt="Akshat Chauhan"
                  fill
                  className="object-cover object-[50%_25%] group-hover:scale-105 transition-transform duration-1000 ease-out"
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 bg-card border border-border px-4 py-2 rounded-lg text-sm font-medium text-accent shadow-lg"
              >
                AI/ML Enthusiast
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10], x: [-5, 5, -5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-4 lg:-bottom-8 lg:-left-6 bg-card border border-border px-4 py-2 rounded-lg text-sm font-medium text-accent shadow-lg"
              >
                Full-Stack Developer
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-fg-muted"
        >
          <span className="caption tracking-widest">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-12 relative"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/2 -translate-x-1/2 w-1 h-2 bg-accent/50 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}