'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const skillCategories = [
  {
    title: 'Frontend',
    color: 'from-blue-400 to-blue-600',
    skills: [
      { name: 'React/Next.js', level: 90, icon: '⚛️' },
      { name: 'TypeScript', level: 85, icon: '🔷' },
      { name: 'Tailwind CSS', level: 95, icon: '🎨' },
      { name: 'JavaScript', level: 88, icon: '⚡' }
    ]
  },
  {
    title: 'Backend',
    color: 'from-green-400 to-green-600',
    skills: [
      { name: 'Node.js', level: 80, icon: '🟢' },
      { name: 'Python', level: 85, icon: '🐍' },
      { name: 'Java', level: 75, icon: '☕' },
      { name: 'C++', level: 90, icon: '⚙️' }
    ]
  },
  {
    title: 'AI/ML',
    color: 'from-purple-400 to-purple-600',
    skills: [
      { name: 'Machine Learning', level: 78, icon: '🤖' },
      { name: 'Deep Learning', level: 70, icon: '🧠' },
      { name: 'Data Analysis', level: 82, icon: '📊' },
      { name: 'Computer Vision', level: 65, icon: '👁️' }
    ]
  },
  {
    title: 'Tools & Others',
    color: 'from-orange-400 to-orange-600',
    skills: [
      { name: 'Git/GitHub', level: 85, icon: '🔧' },
      { name: 'Docker', level: 70, icon: '🐳' },
      { name: 'AWS/Cloud', level: 60, icon: '☁️' },
      { name: 'Database Design', level: 75, icon: '🗄️' }
    ]
  }
]

export function SkillsEnhanced() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4 sm:mb-6">
            Technical Arsenal
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit built through hands-on experience and continuous learning
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12 overflow-x-auto pb-2"
        >
          <div className="flex gap-2 sm:gap-4 min-w-max">
            {skillCategories.map((category, index) => (
              <motion.button
                key={category.title}
                onClick={() => setActiveCategory(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === index
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'glass-button text-white/70 hover:text-white'
                }`}
              >
                {category.title}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Skills Display */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
              className="glass-card p-6 rounded-2xl hover:glow-effect transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <h3 className="text-lg font-semibold text-white group-hover:text-primary-300 transition-colors">
                    {skill.name}
                  </h3>
                </div>
                <span className="text-primary-400 font-bold text-lg">
                  {skill.level}%
                </span>
              </div>

              {/* Animated Progress Bar */}
              <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" }}
                  className={`h-full bg-gradient-to-r ${skillCategories[activeCategory].color} rounded-full relative`}
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-pulse"></div>
                </motion.div>
              </div>

              {/* Hover effect - additional info */}
              {hoveredSkill === skill.name && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-3 pt-3 border-t border-white/10"
                >
                  <p className="text-sm text-white/60">
                    {getSkillDescription(skill.name)}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Overall Proficiency Indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-card inline-block p-6 rounded-2xl">
            <h3 className="text-white font-semibold mb-2">Overall Proficiency</h3>
            <div className="flex items-center gap-2 text-primary-400">
              <span className="text-3xl font-bold">82%</span>
              <span className="text-sm">Average across all skills</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Helper function for skill descriptions
function getSkillDescription(skillName: string): string {
  const descriptions: Record<string, string> = {
    'React/Next.js': 'Building modern, scalable web applications with React ecosystem',
    'TypeScript': 'Type-safe development for better code quality and maintainability',
    'Tailwind CSS': 'Rapid UI development with utility-first CSS framework',
    'JavaScript': 'Core language proficiency with ES6+ features and async programming',
    'Node.js': 'Server-side JavaScript development and API creation',
    'Python': 'Data science, automation, and backend development',
    'Java': 'Object-oriented programming and enterprise application development',
    'C++': 'System programming and competitive programming expertise',
    'Machine Learning': 'Supervised and unsupervised learning algorithms implementation',
    'Deep Learning': 'Neural networks and deep learning frameworks experience',
    'Data Analysis': 'Statistical analysis and data visualization with Python/R',
    'Computer Vision': 'Image processing and computer vision applications',
    'Git/GitHub': 'Version control and collaborative development workflows',
    'Docker': 'Containerization and deployment automation',
    'AWS/Cloud': 'Cloud infrastructure and deployment strategies',
    'Database Design': 'Relational and NoSQL database design and optimization'
  }
  
  return descriptions[skillName] || 'Proficient in this technology with practical experience'
}