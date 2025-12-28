'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++']
  },
  {
    title: 'Frontend Development',
    skills: ['React', 'Next.js', 'CustomTkinter', 'JavaFX']
  },
  {
    title: 'Backend & APIs',
    skills: ['Node.js', 'Express', 'FastAPI', 'API Development']
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'MongoDB']
  },
  {
    title: 'AI/ML Libraries',
    skills: ['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'XGBoost', 'Random Forest']
  },
  {
    title: 'Tools & Automation',
    skills: ['Git', 'n8n Automation']
  }
]

export function Skills() {
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 sm:p-8 rounded-3xl group hover:glow-effect transition-all duration-300"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6 group-hover:text-primary-300 transition-colors duration-300">
                {category.title}
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3 p-2 sm:p-3 rounded-lg bg-glass-light hover:bg-glass-white transition-all duration-200"
                  >
                    <div className="w-2 h-2 bg-primary-400 rounded-full" />
                    <span className="text-white/90 font-medium text-sm sm:text-base">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}