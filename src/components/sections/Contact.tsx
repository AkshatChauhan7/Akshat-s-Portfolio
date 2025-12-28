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
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">
            Let's Work Together
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss how we can create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Get In Touch
              </h3>
              <p className="text-white/80 leading-relaxed mb-8">
                I'm always interested in hearing about new opportunities, 
                challenging projects, and innovative ideas. Whether you're a startup, 
                established company, or fellow developer, let's connect!
              </p>

              {/* Contact Methods */}
              <div className="space-y-6">
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
                    className="flex items-center space-x-4 p-4 glass-button rounded-xl group transition-all duration-300 hover:glow-effect"
                  >
                    <div className="text-primary-400 group-hover:text-primary-300 transition-colors duration-300">
                      {contact.icon}
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">{contact.label}</p>
                      <p className="text-white font-medium">{contact.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8 rounded-3xl">
              <h4 className="text-xl font-semibold text-white mb-6">
                Connect Online
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-3 p-4 glass-button rounded-xl group hover:glow-effect transition-all duration-300"
                  >
                    <span className="text-white group-hover:text-primary-300 transition-colors duration-300 font-medium">
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
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white/80 text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-glass-light border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white/80 text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-glass-light border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white/80 text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-glass-light border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-all duration-300"
                    placeholder="Project collaboration"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white/80 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-glass-light border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl text-white font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="flex items-center justify-center space-x-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <PaperAirplaneIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
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
        className="mt-24 pt-12 border-t border-white/10 text-center"
      >
        <p className="text-white/60">
          © 2025 Akshat Chauhan. Built with Next.js, TypeScript, and Tailwind CSS.
        </p>
      </motion.footer>
    </section>
  )
}