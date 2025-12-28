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

const interests = [
  {
    icon: <TrophyIcon className="w-8 h-8" />,
    title: 'Fitness & Gym',
    description: 'Regular gym-goer who believes in balancing physical and mental health through consistent training.',
    details: ['Strength Training', 'Cardio', 'Wellness', 'Consistency']
  },
  {
    icon: <PuzzlePieceIcon className="w-8 h-8" />,
    title: 'Problem Solving',
    description: 'Love tackling complex algorithms and finding elegant solutions to challenging programming problems.',
    details: ['LeetCode Daily', 'DSA Practice', 'Code Optimization', 'Pattern Recognition']
  },
  {
    icon: <AcademicCapIcon className="w-8 h-8" />,
    title: 'Continuous Learning',
    description: 'Always exploring new technologies, frameworks, and methodologies to stay current in the tech world.',
    details: ['Web3 Tech', 'AI/ML Concepts', 'Cloud Computing', 'System Design']
  },
  {
    icon: <FilmIcon className="w-8 h-8" />,
    title: 'Anime Enthusiast',
    description: 'Passionate about anime art and storytelling. Currently watching seasonal anime and exploring classic series.',
    details: ['Vinland Saga', 'One Piece', 'Code Geass', 'Kaguya Sama']
  }
]



export function BeyondCode() {
  return (
    <section id="beyond-code" className="py-24 relative">
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
            Beyond Code
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            The person behind the programmer. My interests, hobbies, and what drives me outside the world of code.
          </p>
        </motion.div>

        {/* Interests Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {interests.map((interest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card p-6 sm:p-8 rounded-3xl group hover:glow-effect transition-all duration-500"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="text-primary-400 group-hover:scale-110 transition-transform duration-300">
                  {interest.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all duration-300 mb-2">
                    {interest.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {interest.description}
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {interest.details.map((detail, detailIndex) => (
                  <motion.span
                    key={detail}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (index * 0.1) + (detailIndex * 0.05) }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 glass-card rounded-full text-primary-300 text-sm font-medium border border-primary-400/20 hover:border-primary-400/40 transition-all duration-200"
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-8 text-center"
        >
          <div className="glass-card p-8 rounded-3xl max-w-4xl mx-auto">
            <blockquote className="text-xl sm:text-2xl text-white/90 font-light leading-relaxed mb-6">
              "Be Better Everyday!"
            </blockquote>
            <p className="text-primary-400 font-medium">
              — My personal mantra for life and coding
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}