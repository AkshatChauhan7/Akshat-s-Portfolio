'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  PaperAirplaneIcon
} from '@heroicons/react/24/outline'

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/AkshatChauhan7/',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/akshat-chauhan-ba2a64326/',
  },
  {
    name: 'Portfolio',
    url: '#home',
  },
  {
    name: 'Email',
    url: 'mailto:chauhanakshat50@gmail.com',
  }
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Handle form submission here
    setTimeout(() => setIsSubmitting(false), 2000)
  }

  return (
    <section id="contact" className="py-16 sm:py-24 relative min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold gradient-text mb-3 sm:mb-4 lg:mb-6">
            Let's Work Together
          </h2>
          <p className="text-white/70 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-2 sm:px-4">
            Ready to bring your ideas to life? Let's discuss how we can create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass-card p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-3 sm:mb-4 lg:mb-6">
                Get In Touch
              </h3>
              <p className="text-white/80 leading-relaxed mb-4 sm:mb-6 lg:mb-8 text-xs sm:text-sm lg:text-base">
                I'm always interested in hearing about new opportunities, 
                challenging projects, and innovative ideas. Whether you're a startup, 
                established company, or fellow developer, let's connect!
              </p>

              {/* Contact Methods */}
              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    icon: <EnvelopeIcon className="w-6 h-6" />,
                    label: 'Email',
                    value: 'chauhanakshat50@gmail.com',
                    href: 'mailto:chauhanakshat50@gmail.com'
                  },
                  {
                    icon: <PhoneIcon className="w-6 h-6" />,
                    label: 'Phone',
                    value: '(+91) 8868844771',
                    href: 'tel:+918868844771'
                  },
                  {
                    icon: <MapPinIcon className="w-6 h-6" />,
                    label: 'Location',
                    value: 'Greater Noida, UP, India',
                    href: '#'
                  }
                ].map((contact, index) => (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 p-2 sm:p-3 lg:p-4 glass-button rounded-lg sm:rounded-xl group transition-all duration-300 hover:glow-effect"
                  >
                    <div className="text-primary-400 group-hover:text-primary-300 transition-colors duration-300 flex-shrink-0">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6">{contact.icon}</div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-white/60 text-xs lg:text-sm">{contact.label}</p>
                      <p className="text-white font-medium text-xs sm:text-sm lg:text-base truncate">{contact.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl">
              <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-white mb-3 sm:mb-4 lg:mb-6">
                Connect Online
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center space-x-2 sm:space-x-3 p-2 sm:p-3 lg:p-4 glass-button rounded-lg sm:rounded-xl group hover:glow-effect transition-all duration-300"
                  >
                    <span className="text-white group-hover:text-primary-300 transition-colors duration-300 font-medium text-xs sm:text-sm lg:text-base">
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl lg:rounded-3xl">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-3 sm:mb-4 lg:mb-6">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 lg:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white/80 text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-glass-light border border-white/20 rounded-lg sm:rounded-xl text-white text-sm sm:text-base placeholder-white/50 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white/80 text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-glass-light border border-white/20 rounded-lg sm:rounded-xl text-white text-sm sm:text-base placeholder-white/50 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white/80 text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-glass-light border border-white/20 rounded-lg sm:rounded-xl text-white text-sm sm:text-base placeholder-white/50 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-all duration-300"
                    placeholder="Project collaboration"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white/80 text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-glass-light border border-white/20 rounded-lg sm:rounded-xl text-white text-sm sm:text-base placeholder-white/50 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-all duration-300 resize-none min-h-[80px] sm:min-h-[120px]"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full group relative px-4 py-3 sm:px-6 sm:py-4 lg:px-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg sm:rounded-xl text-white font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="flex items-center justify-center space-x-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <PaperAirplaneIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-12 sm:mt-16 lg:mt-24 pt-6 sm:pt-8 lg:pt-12 border-t border-white/10 text-center"
      >
        <p className="text-white/60 text-xs sm:text-sm px-4">
          © 2025 Akshat Chauhan. Built with Next.js, TypeScript, and Tailwind CSS.
        </p>
      </motion.footer>
    </section>
  )
}