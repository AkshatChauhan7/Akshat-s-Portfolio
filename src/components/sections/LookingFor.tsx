'use client'

import { motion } from 'framer-motion'
import {
  BriefcaseIcon,
  MapPinIcon,
  CalendarIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

const lookingForItems = [
  'Software Engineering Internships',
  'AI/ML Roles',
  'Backend Engineering Positions',
  'Open Source Collaboration'
]

const preferenceIcons = [
  <MapPinIcon className="w-5 h-5" />,
  <CalendarIcon className="w-5 h-5" />,
  <BriefcaseIcon className="w-5 h-5" />
]

const preferences = [
  { icon: preferenceIcons[0], text: 'India • Open to Remote & Relocation' },
  { icon: preferenceIcons[1], text: 'Available: Summer 2026' },
  { icon: preferenceIcons[2], text: 'Internship / New Grad Roles' }
]

export function LookingFor() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="card-editorial p-6 md:p-8 rounded-2xl"
      role="region"
      aria-labelledby="looking-for-heading"
    >
      <h3 id="looking-for-heading" className="heading-4 text-fg-primary mb-6 flex items-center gap-3">
        <BriefcaseIcon className="w-5 h-5 text-accent" aria-hidden="true" />
        <span>What I'm Looking For</span>
      </h3>

      {/* Role Interests */}
      <div className="space-y-3 mb-6">
        {lookingForItems.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="flex items-center gap-3 group"
          >
            <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0" aria-hidden="true" />
            <span className="body-sm text-fg-secondary group-hover:text-fg-primary transition-colors">{item}</span>
          </motion.div>
        ))}
      </div>

      {/* Preferences */}
      <div className="pt-6 border-t border-border space-y-3">
        {preferences.map((pref, index) => (
          <motion.div
            key={pref.text}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
            className="flex items-center gap-3 body-sm text-fg-secondary"
          >
            <span className="text-accent flex-shrink-0 w-5 h-5">{pref.icon}</span>
            <span>{pref.text}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}