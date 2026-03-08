'use client'

import { motion } from 'framer-motion'
import { 
  SparklesIcon,
  RocketLaunchIcon,
  CpuChipIcon,
  CloudIcon,
  CubeTransparentIcon,
  BeakerIcon
} from '@heroicons/react/24/outline'

const learningTopics = [
  {
    icon: <CloudIcon className="w-6 h-6" />,
    name: 'AWS & Cloud',
    progress: 40,
    description: 'EC2, S3, Lambda, and cloud architecture patterns',
    status: 'In Progress'
  },
  {
    icon: <CubeTransparentIcon className="w-6 h-6" />,
    name: 'Docker & Kubernetes',
    progress: 35,
    description: 'Containerization and orchestration for scalable deployments',
    status: 'In Progress'
  },
  {
    icon: <CpuChipIcon className="w-6 h-6" />,
    name: 'System Design',
    progress: 50,
    description: 'Designing scalable, distributed systems',
    status: 'Active'
  },
  {
    icon: <BeakerIcon className="w-6 h-6" />,
    name: 'GraphQL',
    progress: 25,
    description: 'Modern API design with Apollo and type-safe queries',
    status: 'Starting'
  }
]

const futureInterests = [
  'Rust',
  'WebAssembly',
  'ML/AI Integration',
  'Microservices',
  'Redis',
  'PostgreSQL'
]

export function CurrentlyLearning() {
  return (
    <section id="learning" className="py-16 sm:py-20 lg:py-24 relative" aria-labelledby="learning-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <SparklesIcon className="w-6 h-6 text-primary-400" aria-hidden="true" />
            <span className="text-primary-400 font-medium text-sm uppercase tracking-wider">Growth Mindset</span>
          </div>
          <h2 id="learning-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4 sm:mb-6">
            Currently Learning
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto">
            Always expanding my skillset. Here's what I'm diving into right now.
          </p>
        </motion.div>

        {/* Learning Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {learningTopics.map((topic, index) => (
            <motion.div
              key={topic.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card p-5 sm:p-6 rounded-2xl group hover:glow-effect transition-all duration-300"
              role="article"
              aria-label={`Learning ${topic.name}: ${topic.progress}% complete`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-primary-400 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                  {topic.icon}
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  topic.status === 'Active' 
                    ? 'bg-green-500/20 text-green-400' 
                    : topic.status === 'Starting'
                    ? 'bg-yellow-500/20 text-yellow-400'
                    : 'bg-primary-500/20 text-primary-400'
                }`}>
                  {topic.status}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-300 transition-colors">
                {topic.name}
              </h3>
              <p className="text-white/60 text-sm mb-4 leading-relaxed">
                {topic.description}
              </p>
              
              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-white/50">Progress</span>
                  <span className="text-primary-400 font-medium">{topic.progress}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2" role="progressbar" aria-valuenow={topic.progress} aria-valuemin={0} aria-valuemax={100}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${topic.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-primary-500 to-primary-400 h-2 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Future Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-6 sm:p-8 rounded-3xl max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-6">
            <RocketLaunchIcon className="w-6 h-6 text-primary-400" aria-hidden="true" />
            <h3 className="text-xl font-semibold text-white">On My Radar</h3>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3" role="list" aria-label="Technologies I'm interested in learning">
            {futureInterests.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 glass-card rounded-full text-white/80 text-sm font-medium border border-white/10 hover:border-primary-400/40 hover:text-primary-300 transition-all duration-200 cursor-default"
                role="listitem"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
