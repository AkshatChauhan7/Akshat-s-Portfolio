'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useState } from 'react'
import { ArrowTopRightOnSquareIcon, CodeBracketIcon, StarIcon, EyeIcon } from '@heroicons/react/24/outline'

const projects = [
  {
    id: 1,
    title: 'Calorie.io',
    description: 'A comprehensive fitness tracking application for health enthusiasts. Users can create accounts, track daily calories, create custom recipes, and monitor their fitness journey.',
    longDescription: 'Built with modern web technologies, this full-stack application features user authentication, real-time data tracking, custom recipe creation, and comprehensive analytics dashboard.',
    techStack: ['JavaScript', 'Node.js', 'HTML/CSS', 'Database'],
    githubUrl: 'https://github.com/AkshatChauhan7/Calorie.io',
    demoUrl: 'https://calorieio.netlify.app/',
    featured: true,
    stats: { stars: 12, views: 150 },
    gradient: 'from-emerald-400 to-teal-600',
    category: 'Web App'
  },
  {
    id: 2,
    title: 'Fitness Tracker - BeFit',
    description: 'A JavaFX application with MySQL backend for comprehensive fitness tracking. Log workouts, meals, and fitness data with an intuitive desktop interface.',
    longDescription: 'Desktop fitness application featuring workout logging, meal tracking, progress visualization, and comprehensive reporting with modern JavaFX interface.',
    techStack: ['Java', 'JavaFX', 'MySQL', 'Desktop App'],
    githubUrl: 'https://github.com/AkshatChauhan7/Fitness-Tracker---BeFit',
    demoUrl: '#',
    featured: true,
    stats: { stars: 8, views: 95 },
    gradient: 'from-blue-400 to-indigo-600',
    category: 'Desktop App'
  },
  {
    id: 3,
    title: 'The Voice Assistant - Oggy',
    description: 'An intelligent voice assistant built with Python, featuring voice recognition, natural language processing, and various automated tasks.',
    longDescription: 'AI-powered voice assistant with natural language processing, voice recognition, task automation, and smart home integration capabilities.',
    techStack: ['Python', 'Speech Recognition', 'NLP', 'Automation'],
    githubUrl: 'https://github.com/AkshatChauhan7/The-Voice-Assistant-Oggy',
    demoUrl: '#',
    featured: false,
    stats: { stars: 15, views: 220 },
    gradient: 'from-purple-400 to-pink-600',
    category: 'AI/ML'
  },
  {
    id: 4,
    title: 'Anime Recommendation System',
    description: 'Machine learning project for recommending anime based on user preferences and viewing history, using collaborative filtering techniques.',
    longDescription: 'Advanced recommendation system using collaborative filtering, content-based filtering, and hybrid approaches with comprehensive data analysis.',
    techStack: ['Python', 'Jupyter Notebook', 'Machine Learning', 'Data Analysis'],
    githubUrl: 'https://github.com/AkshatChauhan7/Anime-Recommendation',
    demoUrl: '#',
    featured: false,
    stats: { stars: 23, views: 180 },
    gradient: 'from-orange-400 to-red-600',
    category: 'AI/ML'
  }
]

const categories = ['All', 'Web App', 'Desktop App', 'AI/ML']

export function ProjectsEnhanced() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

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
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">
            A curated selection of my most impactful work showcasing technical expertise and creative problem-solving
          </p>

          {/* Category Filter */}
          <div className="flex justify-center gap-2 sm:gap-4 flex-wrap">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 gap-8 lg:gap-10"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
              isHovered={hoveredProject === project.id}
              onHover={setHoveredProject}
            />
          ))}
        </motion.div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Projects Built', value: '12+', icon: '🚀' },
            { label: 'Technologies Used', value: '15+', icon: '⚡' },
            { label: 'GitHub Stars', value: '58+', icon: '⭐' },
            { label: 'Total Views', value: '1.2K+', icon: '👀' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-4 rounded-xl text-center"
            >
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-2xl font-bold text-primary-400">{stat.value}</div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Individual Project Card Component with 3D hover effect
function ProjectCard({ 
  project, 
  index, 
  isHovered, 
  onHover 
}: { 
  project: any, 
  index: number, 
  isHovered: boolean, 
  onHover: (id: number | null) => void 
}) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-100, 100], [30, -30]))
  const rotateY = useSpring(useTransform(x, [-100, 100], [-30, 30]))

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      style={{ x, y, rotateX, rotateY, z: 100 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        x.set(e.clientX - centerX)
        y.set(e.clientY - centerY)
      }}
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => {
        onHover(null)
        x.set(0)
        y.set(0)
      }}
      className="group perspective-1000"
    >
      <div className={`
        relative glass-card p-6 sm:p-8 rounded-3xl 
        transition-all duration-500 transform-gpu
        hover:glow-effect cursor-pointer
        ${isHovered ? 'scale-105' : ''}
      `}>
        {/* Project Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className={`px-2 py-1 rounded-lg text-xs font-semibold bg-gradient-to-r ${project.gradient} text-white`}>
                {project.category}
              </span>
              {project.featured && (
                <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-lg text-xs font-semibold flex items-center gap-1">
                  <StarIcon className="w-3 h-3" />
                  Featured
                </span>
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:gradient-text transition-all duration-300">
              {project.title}
            </h3>
          </div>
          
          {/* Project Stats */}
          <div className="flex items-center gap-3 text-xs text-white/60">
            <div className="flex items-center gap-1">
              <StarIcon className="w-3 h-3" />
              <span>{project.stats.stars}</span>
            </div>
            <div className="flex items-center gap-1">
              <EyeIcon className="w-3 h-3" />
              <span>{project.stats.views}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-6">
          {isHovered ? project.longDescription : project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech: string) => (
            <span 
              key={tech}
              className="px-3 py-1 text-xs bg-white/10 text-white/80 rounded-full hover:bg-white/20 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 flex items-center justify-center gap-2 py-2 px-4 glass-button rounded-xl text-white/80 hover:text-white transition-all duration-300 group/btn"
          >
            <CodeBracketIcon className="w-4 h-4 group-hover/btn:text-primary-400" />
            <span>Code</span>
          </motion.a>
          
          {project.demoUrl !== '#' && (
            <motion.a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl text-white font-medium hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 group/btn"
            >
              <ArrowTopRightOnSquareIcon className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              <span>Demo</span>
            </motion.a>
          )}
        </div>

        {/* Hover Glow Effect */}
        <div className={`
          absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none
          bg-gradient-to-r ${project.gradient} blur-xl -z-10
        `} style={{ filter: 'blur(20px)' }} />
      </div>
    </motion.div>
  )
}