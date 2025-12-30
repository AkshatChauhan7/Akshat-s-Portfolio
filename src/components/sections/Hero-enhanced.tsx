'use client'

import { motion } from 'framer-motion'
import { ArrowDownIcon, EnvelopeIcon, DocumentIcon, SparklesIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export function HeroEnhanced() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background with floating elements */}
      <div className="absolute inset-0 -z-10">
        {/* Main gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl floating"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl floating-delayed"></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl floating"></div>
        <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-indigo-400/15 rounded-full blur-2xl floating-delayed"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Left side - Enhanced Text Content */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            {/* Greeting with sparkle effect */}
            <motion.div variants={itemVariants} className="space-y-2">
              <div className="flex items-center gap-2">
                <SparklesIcon className="w-5 h-5 text-primary-400" />
                <p className="text-primary-400 font-medium text-base sm:text-lg">Hello, I'm</p>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold gradient-text leading-tight">
                Akshat Chauhan
              </h1>
            </motion.div>

            {/* Enhanced Role and Tagline */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-white/90 font-light">
                Student & <span className="gradient-text font-semibold glow-text">Builder</span>
              </h2>
              <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-xl">
                Passionate about crafting efficient solutions and automating the world, 
                <span className="text-primary-400 font-medium"> one line of code at a time.</span>
              </p>
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl text-white font-semibold text-sm sm:text-base hover:shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <EnvelopeIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  Let's Connect
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
              
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-6 py-3 sm:px-8 sm:py-4 glass-button rounded-xl text-white font-semibold text-sm sm:text-base hover:glow-effect transition-all duration-300 magnetic-hover"
              >
                <span className="flex items-center justify-center gap-2">
                  <DocumentIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-primary-400 transition-colors" />
                  View Resume
                </span>
              </motion.a>
            </motion.div>

            {/* Stats or Quick Info */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-6 text-sm text-white/60 pt-4"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Available for opportunities</span>
              </div>
              <div className="text-primary-400 font-medium">
                500+ Problems Solved
              </div>
            </motion.div>
          </div>

          {/* Right side - Enhanced Profile Section */}
          <motion.div variants={itemVariants} className="order-1 lg:order-2">
            <div className="relative max-w-md mx-auto lg:max-w-lg">
              {/* Profile image with enhanced effects */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-1 group-hover:scale-105 transition-transform duration-300">
                  <div className="relative overflow-hidden rounded-3xl">
                    <Image
                      src="/images/me.jpeg"
                      alt="Akshat Chauhan"
                      width={400}
                      height={500}
                      className="w-full h-auto object-cover rounded-3xl"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl"></div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 glass-card px-3 py-2 rounded-xl"
              >
                <span className="text-xs font-medium text-primary-400">AI/ML Enthusiast</span>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 glass-card px-3 py-2 rounded-xl"
              >
                <span className="text-xs font-medium text-purple-400">Full-Stack Dev</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-white/40 hover:text-white/60 transition-colors cursor-pointer"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-xs mb-2">Scroll down</span>
            <ArrowDownIcon className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}