'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: '💻',
    skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++']
  },
  {
    title: 'Frontend Development',
    icon: '🎨',
    skills: ['React', 'Next.js', 'CustomTkinter', 'JavaFX']
  },
  {
    title: 'Backend & APIs',
    icon: '⚙️',
    skills: ['Node.js', 'Express', 'FastAPI', 'API Development']
  },
  {
    title: 'Databases',
    icon: '🗄️',
    skills: ['MySQL', 'MongoDB']
  },
  {
    title: 'AI/ML Libraries',
    icon: '🤖',
    skills: ['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'XGBoost', 'Random Forest']
  },
  {
    title: 'Tools & Automation',
    icon: '🔧',
    skills: ['Git', 'n8n Automation']
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 relative spotlight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.span 
            className="inline-block px-4 py-2 rounded-full glass-card text-primary-300 text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            What I Work With
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-shine mb-4 sm:mb-6">
            Technical Skills
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto">
            Technologies and tools I use to build exceptional products
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="perspective-card"
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="glass-card-glow p-6 sm:p-8 rounded-3xl group transition-all duration-300 h-full"
              >
                {/* Category header with icon */}
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-primary-300 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                
                {/* Skills chips */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 py-1.5 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-white/10 text-white/90 text-sm font-medium hover:border-primary-400/50 hover:from-primary-500/30 hover:to-secondary-500/30 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}