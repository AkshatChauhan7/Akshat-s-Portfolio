'use client'

import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  PaperAirplaneIcon,
  CheckCircleIcon,
  ExclamationCircleIcon
} from '@heroicons/react/24/outline'
import { LookingFor } from './LookingFor'

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
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Form validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus('error')
      setStatusMessage('Please fill in all required fields.')
      setIsSubmitting(false)
      setTimeout(() => {
        setSubmitStatus('idle')
        setStatusMessage('')
      }, 5000)
      return
    }

    try {
      // Send email using Web3Forms API
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: `Portfolio Contact: ${formData.subject}`,
          message: `From: ${formData.name} (${formData.email})\n\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`,
          from_name: formData.name,
          replyto: formData.email
        })
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSubmitStatus('success')
        setStatusMessage('Message sent successfully! I\'ll get back to you soon.')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        throw new Error(result.message || 'Failed to send message')
      }

    } catch (error) {
      console.error('Email sending error:', error)

      // Fallback to mailto if Web3Forms fails
      const subject = encodeURIComponent(`Portfolio Contact: ${formData.subject}`)
      const body = encodeURIComponent(
        `Hi Akshat,\n\n` +
        `I'm reaching out to you through your portfolio contact form.\n\n` +
        `My Details:\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Subject: ${formData.subject}\n\n` +
        `Message:\n${formData.message}\n\n` +
        `Best regards,\n${formData.name}`
      )

      const mailtoLink = `mailto:chauhanakshat50@gmail.com?subject=${subject}&body=${body}`
      window.open(mailtoLink, '_self')

      setSubmitStatus('error')
      setStatusMessage('Email service temporarily unavailable. Your email client should open as fallback.')
    }

    setIsSubmitting(false)
    setTimeout(() => {
      setSubmitStatus('idle')
      setStatusMessage('')
    }, 8000)
  }

  return (
    <section id="contact" className="py-20 md:py-28 lg:py-36 relative min-h-[80vh] flex flex-col justify-center" aria-labelledby="contact-heading">
      <div className="container-editorial w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16 lg:mb-20"
        >
          <div className="flex items-baseline gap-4 mb-6">
            <span className="caption text-accent">09</span>
            <h2 id="contact-heading" className="heading-1">
              Let's <span className="text-accent">Work Together</span>
            </h2>
          </div>
          <p className="body-lg text-fg-secondary max-w-2xl leading-relaxed">
            Ready to bring your ideas to life? Let's discuss how we can create something amazing together.
          </p>
        </motion.div>

        {/* Looking For Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <LookingFor />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Contact Info - 5 columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="card-editorial p-6 md:p-8 rounded-2xl">
              <h3 className="heading-3 text-fg-primary mb-6">Get In Touch</h3>
              <p className="body-md text-fg-secondary leading-relaxed mb-8">
                I'm always interested in hearing about new opportunities,
                challenging projects, and innovative ideas. Whether you're a startup,
                established company, or fellow developer, let's connect!
              </p>

              {/* Contact Methods */}
              <div className="space-y-5">
                {[
                  {
                    icon: EnvelopeIcon,
                    label: 'Email',
                    value: 'chauhanakshat50@gmail.com',
                    href: 'mailto:chauhanakshat50@gmail.com'
                  },
                  {
                    icon: PhoneIcon,
                    label: 'Phone',
                    value: '(+91) 8868844771',
                    href: 'tel:+918868844771'
                  },
                  {
                    icon: MapPinIcon,
                    label: 'Location',
                    value: 'Greater Noida, UP, India',
                    href: '#'
                  }
                ].map((contact, index) => (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border group hover:border-accent/50 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent/20 transition-colors duration-300">
                      <contact.icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="caption text-fg-muted">{contact.label}</p>
                      <p className="body-sm text-fg-primary truncate group-hover:text-accent transition-colors duration-300">{contact.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="card-editorial p-6 md:p-8 rounded-2xl">
              <h4 className="heading-4 text-fg-primary mb-6">Connect Online</h4>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 p-4 rounded-xl bg-card border border-border text-fg-secondary group hover:border-accent hover:text-accent transition-all duration-300"
                  >
                    <span className="font-medium body-sm">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form - 7 columns */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="card-editorial p-6 md:p-8 rounded-2xl">
              <h3 className="heading-3 text-fg-primary mb-6">Send a Message</h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block caption text-fg-muted mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-card border border-border text-fg-primary placeholder-fg-muted rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block caption text-fg-muted mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-card border border-border text-fg-primary placeholder-fg-muted rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block caption text-fg-muted mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-card border border-border text-fg-primary placeholder-fg-muted rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300"
                    placeholder="Project collaboration"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block caption text-fg-muted mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-card border border-border text-fg-primary placeholder-fg-muted rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300 resize-none min-h-[140px]"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                {/* Status Message */}
                {statusMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl border flex items-start gap-3 ${
                      submitStatus === 'success'
                        ? 'bg-green-500/10 border-green-500/30 text-green-400'
                        : 'bg-red-500/10 border-red-500/30 text-red-400'
                    }`}
                  >
                    {submitStatus === 'success' ? (
                      <CheckCircleIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    ) : (
                      <ExclamationCircleIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    )}
                    <p className="body-sm">{statusMessage}</p>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary py-4 text-base overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-bg-primary/30 border-t-bg-primary rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <PaperAirplaneIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </span>
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
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mt-16 md:mt-24 lg:mt-32 pt-8 md:pt-12 lg:pt-16 border-t border-border text-center"
      >
        <p className="body-sm text-fg-muted">
          © 2025 Akshat Chauhan. Built with Next.js, TypeScript, and Tailwind CSS.
        </p>
      </motion.footer>
    </section>
  )
}