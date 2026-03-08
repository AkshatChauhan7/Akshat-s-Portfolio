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
  'Full-Stack Development Roles',
  'Backend Engineering Positions',
  'Open Source Collaboration'
]

const preferences = [
  { icon: <MapPinIcon className="w-5 h-5" />, text: 'India • Open to Remote & Relocation' },
  { icon: <CalendarIcon className="w-5 h-5" />, text: 'Available: Summer 2026' },
  { icon: <BriefcaseIcon className="w-5 h-5" />, text: 'Internship / New Grad Roles' }
]

export function LookingFor() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass-card p-6 sm:p-8 rounded-3xl mb-8"
      role="region"
      aria-labelledby="looking-for-heading"
    >
      <h3 id="looking-for-heading" className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <BriefcaseIcon className="w-6 h-6 text-primary-400" aria-hidden="true" />
        What I'm Looking For
      </h3>
      
      {/* Role Interests */}
      <div className="space-y-3 mb-6">
        {lookingForItems.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-center gap-3 group"
          >
            <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0" aria-hidden="true" />
            <span className="text-white/80 group-hover:text-white transition-colors">{item}</span>
          </motion.div>
        ))}
      </div>

      {/* Preferences */}
      <div className="pt-6 border-t border-white/10 space-y-3">
        {preferences.map((pref, index) => (
          <motion.div
            key={pref.text}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
            className="flex items-center gap-3 text-white/70"
          >
            <span className="text-primary-400" aria-hidden="true">{pref.icon}</span>
            <span>{pref.text}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
