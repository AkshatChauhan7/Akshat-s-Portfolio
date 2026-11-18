'use client'

import { motion } from 'framer-motion'
import {
  HeartIcon,
  FilmIcon,
  AcademicCapIcon,
  MusicalNoteIcon,
  PuzzlePieceIcon,
  TrophyIcon
} from '@heroicons/react/24/outline'

// Pre-rendered icons to avoid TypeScript issues
const interestIcons = {
  trophy: <TrophyIcon className="w-7 h-7" />,
  puzzle: <PuzzlePieceIcon className="w-7 h-7" />,
  academic: <AcademicCapIcon className="w-7 h-7" />,
  film: <FilmIcon className="w-7 h-7" />,
}

const interests = [
  {
    icon: interestIcons.trophy,
    title: 'Discipline & Resilience',
    description: 'Dedicated to fitness training as a practice in discipline, goal-setting, and pushing through challenges—skills that directly translate to tackling complex engineering problems.',
    details: ['Discipline', 'Goal Setting', 'Mental Fortitude', 'Consistency']
  },
  {
    icon: interestIcons.puzzle,
    title: 'Problem Solving',
    description: 'Love tackling complex algorithms and finding elegant solutions to challenging programming problems.',
    details: ['LeetCode Daily', 'DSA Practice', 'Code Optimization', 'Pattern Recognition']
  },
  {
    icon: interestIcons.academic,
    title: 'Continuous Learning',
    description: 'Always exploring new technologies, frameworks, and methodologies to stay current in the tech world.',
    details: ['Web3 Tech', 'AI/ML Concepts', 'Cloud Computing', 'System Design']
  },
  {
    icon: interestIcons.film,
    title: 'Visual Storytelling',
    description: 'Drawn to anime for its masterful narrative structure and visual design—inspiring my approach to crafting intuitive user experiences and compelling product narratives.',
    details: ['Narrative Design', 'Visual Aesthetics', 'Character Development', 'World Building']
  }
]

export function BeyondCode() {
  return (
    <section id="beyond-code" className="py-20 md:py-28 lg:py-36 relative">
      <div className="container-editorial">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-baseline gap-4 mb-6">
            <span className="caption text-accent">07</span>
            <h2 className="heading-1">
              Beyond <span className="text-accent">Code</span>
            </h2>
          </div>
          <p className="body-lg text-fg-secondary max-w-2xl leading-relaxed">
            The person behind the programmer. My interests, hobbies, and what drives me outside the world of code.
          </p>
        </motion.div>

        {/* Interests Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
              className="card-editorial p-6 md:p-8 rounded-2xl group h-full flex flex-col"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent/20 transition-colors duration-300">
                  {interest.icon}
                </div>
                <div>
                  <h3 className="heading-4 text-fg-primary group-hover:text-accent transition-colors duration-300 mb-2">
                    {interest.title}
                  </h3>
                  <p className="body-sm text-fg-secondary leading-relaxed">
                    {interest.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {interest.details.map((detail, detailIndex) => (
                  <motion.span
                    key={detail}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (index * 0.1) + (detailIndex * 0.04), ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 rounded-full bg-card border border-border text-fg-secondary text-sm font-medium hover:border-accent hover:text-accent transition-all duration-200"
                  >
                    {detail}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 text-center"
        >
          <div className="card-editorial p-10 md:p-16 rounded-2xl max-w-3xl mx-auto border-accent/30 relative">
            <blockquote className="heading-2 text-fg-primary font-light leading-relaxed mb-6 italic">
              "Be Better Everyday!"
            </blockquote>
            <p className="caption text-accent">
              — My personal mantra for life and coding
            </p>
            {/* Decorative accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}