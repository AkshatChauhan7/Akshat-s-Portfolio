'use client'

import { motion } from 'framer-motion'
import { ArrowDownIcon, EnvelopeIcon, DocumentIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-2"
            >
              <p className="text-primary-400 font-medium text-lg">Hello, I'm</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold gradient-text leading-tight">
                Akshat Chauhan
              </h1>
            </motion.div>

            {/* Role and Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <h2 className="text-2xl sm:text-3xl text-white/90 font-light">
                Student & <span className="gradient-text font-semibold">Builder</span>
              </h2>
              <p className="text-lg text-white/70 leading-relaxed max-w-xl">
                Passionate about crafting efficient solutions and automating the world, one line of code at a time.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-primary-500/25 transition-all duration-300"
              >
                <EnvelopeIcon className="w-5 h-5" />
                <span>Get In Touch</span>
              </motion.a>
              
              <motion.a
                href="/resume.pdf"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-8 py-4 glass-card border border-white/20 text-white rounded-2xl font-semibold hover:glow-effect transition-all duration-300"
              >
                <DocumentIcon className="w-5 h-5" />
                <span>View Resume</span>
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10"
            >
              {[
                { number: '6+', label: 'Projects Built' },
                { number: '2+', label: 'Years Learning' },
                { number: '177', label: 'LeetCode Solved' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold gradient-text">{stat.number}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative background */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-600 opacity-20 blur-sm"
              />
              
              {/* Photo container */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden glass-card border-4 border-white/20 hover:border-primary-400/50 transition-all duration-500"
              >
                {/* Placeholder for photo - Remove this div after adding your photo */}
                <div className="w-full h-full bg-gradient-to-br from-primary-500/30 to-secondary-500/30 flex items-center justify-center">
                  <div className="text-center text-white/70">
                    <div className="text-6xl mb-4">👤</div>
                    <p className="text-sm">Add your photo to:</p>
                    <p className="text-xs text-primary-400 mt-1">public/images/profile.jpg</p>
                  </div>
                </div>
                
                {/* Actual photo - Remove 'hidden' class and add your photo */}
                <Image
                  src="/images/profile.jpg"
                  alt="Akshat Chauhan"
                  fill
                  className="object-cover object-center hidden" 
                  priority
                />
              </motion.div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-16 h-16 glass-card rounded-2xl flex items-center justify-center text-2xl"
              >
                💻
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 w-16 h-16 glass-card rounded-2xl flex items-center justify-center text-2xl"
              >
                🚀
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex justify-center mt-16"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2 text-white/60 hover:text-primary-400 transition-colors cursor-pointer"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDownIcon className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}