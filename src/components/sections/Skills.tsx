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
    <section id="skills" className="py-24 relative">
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
            Technical Skills
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to build exceptional products
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 rounded-3xl group hover:glow-effect transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-6 group-hover:text-primary-300 transition-colors duration-300">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-glass-light hover:bg-glass-white transition-all duration-200"
                  >
                    <div className="w-2 h-2 bg-primary-400 rounded-full" />
                    <span className="text-white/90 font-medium">{skill}</span>
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