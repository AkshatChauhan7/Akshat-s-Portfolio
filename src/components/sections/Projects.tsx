'use client'

import { motion } from 'framer-motion'
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline'

const projects = [
  {
    id: 1,
    title: 'Calorie.io',
    description: 'A comprehensive fitness tracking application for health enthusiasts. Users can create accounts, track daily calories, create custom recipes, and monitor their fitness journey with more features planned.',
    techStack: ['JavaScript', 'HTML', 'CSS', 'Node.js', 'Database'],
    githubUrl: 'https://github.com/AkshatChauhan7/Calorie.io',
    demoUrl: 'https://calorieio.netlify.app/',
    featured: true
  },
  {
    id: 2,
    title: 'Fitness Tracker - BeFit',
    description: 'A JavaFX application with MySQL backend for comprehensive fitness tracking. Log workouts, meals, and fitness data with an intuitive desktop interface.',
    techStack: ['Java', 'JavaFX', 'MySQL', 'Desktop App'],
    githubUrl: 'https://github.com/AkshatChauhan7/Fitness-Tracker---BeFit',
    demoUrl: '#',
    featured: true
  },
  {
    id: 3,
    title: 'The Voice Assistant - Oggy',
    description: 'An intelligent voice assistant built with Python, featuring voice recognition, natural language processing, and various automated tasks.',
    techStack: ['Python', 'Speech Recognition', 'NLP', 'Automation'],
    githubUrl: 'https://github.com/AkshatChauhan7/The-Voice-Assistant-Oggy',
    demoUrl: '#',
    featured: false
  },
  {
    id: 4,
    title: 'Time Tracker Pro',
    description: 'A productivity application to track time spent on various tasks and projects, helping users optimize their workflow and productivity.',
    techStack: ['JavaScript', 'HTML', 'CSS', 'Web APIs'],
    githubUrl: 'https://github.com/AkshatChauhan7/Time-Tracker-Pro',
    demoUrl: '#',
    featured: false
  },
  {
    id: 5,
    title: 'My LeetCode Solutions',
    description: 'A comprehensive collection of LeetCode problem solutions implemented in C++, showcasing algorithmic thinking and problem-solving skills.',
    techStack: ['C++', 'Algorithms', 'Data Structures', 'Problem Solving'],
    githubUrl: 'https://github.com/AkshatChauhan7/My_LeetCode_Solutions',
    demoUrl: 'https://leetcode.com/u/Akshat_Chauhan_7/',
    featured: false
  },
  {
    id: 6,
    title: 'Anime Recommendation System',
    description: 'Machine learning project for recommending anime based on user preferences and viewing history, using collaborative filtering techniques.',
    techStack: ['Python', 'Jupyter Notebook', 'Machine Learning', 'Data Analysis'],
    githubUrl: 'https://github.com/AkshatChauhan7/Anime-Recommendation',
    demoUrl: '#',
    featured: false
  }
]

export function Projects() {
  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 relative">
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
            Featured Projects
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A selection of my most impactful work showcasing technical expertise and problem-solving skills
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-3xl group hover:glow-effect transition-all duration-500"
            >
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <h3 className="text-2xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 glass-button rounded-full text-white hover:text-primary-400 transition-colors duration-200"
                    >
                      <CodeBracketIcon className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.demoUrl}
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 glass-button rounded-full text-white hover:text-primary-400 transition-colors duration-200"
                    >
                      <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
                
                <p className="text-white/80 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: (index * 0.2) + (techIndex * 0.05) }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-glass-light rounded-full text-primary-300 text-sm font-medium border border-primary-400/20 hover:border-primary-400/40 transition-all duration-200"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card p-6 rounded-2xl group hover:glow-effect transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-white group-hover:text-primary-300 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <div className="flex space-x-2">
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.1 }}
                      className="p-1 text-white/60 hover:text-primary-400 transition-colors duration-200"
                    >
                      <CodeBracketIcon className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={project.demoUrl}
                      whileHover={{ scale: 1.1 }}
                      className="p-1 text-white/60 hover:text-primary-400 transition-colors duration-200"
                    >
                      <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
                
                <p className="text-white/70 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-glass-light rounded text-primary-400 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-2 py-1 text-white/50 text-xs">
                      +{project.techStack.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}