'use client'

import { motion } from 'framer-motion'
import { 
  CogIcon, 
  BoltIcon, 
  ClockIcon,
  ChartBarIcon,
  ArrowPathIcon,
  PlayIcon
} from '@heroicons/react/24/outline'

const automationWorkflows = [
  {
    id: 1,
    title: 'Gmail Auto-Reply Bot',
    description: 'Advanced email automation system using Gmail API and Google Gemini AI. Monitors unread emails, analyzes content with LLM for sentiment and priority, generates contextual responses, logs tickets to Google Sheets, and handles formatting with custom JavaScript code.',
    tools: ['Gmail API', 'Google Gemini 2.5', 'Google Sheets', 'LLM Chain', 'Custom Code'],
    benefits: ['AI-powered responses', 'Automatic ticket logging', 'Sentiment analysis', '24/7 email monitoring'],
    complexity: 'Intermediate',
    status: 'Active',
    githubLink: 'https://github.com/AkshatChauhan7/workkflow/blob/main/My_workflow_2.json'
  },
  {
    id: 2,
    title: 'Telegram News Bot',
    description: 'Automated news aggregation system that monitors KDnuggets RSS feeds on a schedule, filters content by recency (configurable days back), processes feed data with custom filtering logic, and delivers curated tech news updates.',
    tools: ['RSS Feed Reader', 'Schedule Trigger', 'KDnuggets API', 'Custom Filtering'],
    benefits: ['Automated scheduling', 'Content filtering', 'Recent news focus', 'RSS processing'],
    complexity: 'Intermediate',
    status: 'Active',
    githubLink: 'https://github.com/AkshatChauhan7/workkflow/blob/main/My_workflow_3.json'
  }
]

export function Automation() {
  return (
    <section id="automation" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="mr-4"
            >
              <CogIcon className="w-12 h-12 text-primary-500" />
            </motion.div>
            <h2 className="text-4xl sm:text-5xl font-bold gradient-text">
              n8n Automation
            </h2>
          </div>
          <p className="text-white/60 text-lg max-w-3xl mx-auto">
            Streamlining workflows and solving real problems through intelligent automation. 
            Building systems that work while I focus on what matters most.
          </p>
        </motion.div>



        {/* Automation Workflows */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {automationWorkflows.map((workflow, index) => (
            <motion.div
              key={workflow.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 sm:p-8 rounded-3xl group hover:glow-effect transition-all duration-500"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                      {workflow.title}
                    </h3>
                    <div className="flex items-center space-x-2 mt-2">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        workflow.complexity === 'Beginner' 
                          ? 'bg-green-500/20 text-green-400' 
                          : workflow.complexity === 'Intermediate'
                          ? 'bg-yellow-500/20 text-yellow-400'
                          : 'bg-red-500/20 text-red-400'
                      }`}>
                        {workflow.complexity}
                      </span>
                      <span className="px-2 py-1 bg-primary-500/20 text-primary-400 rounded text-xs font-medium">
                        {workflow.status}
                      </span>
                    </div>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open(workflow.githubLink, '_blank')}
                  className="p-2 glass-button rounded-full text-primary-400 hover:text-primary-300"
                  title="View Workflow on GitHub"
                >
                  <PlayIcon className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Description */}
              <p className="text-white/80 leading-relaxed mb-6">
                {workflow.description}
              </p>

              {/* Tools Used */}
              <div className="mb-6">
                <h4 className="text-white font-medium mb-3">Tools & Integrations</h4>
                <div className="flex flex-wrap gap-2">
                  {workflow.tools.map((tool, toolIndex) => (
                    <motion.span
                      key={tool}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: (index * 0.1) + (toolIndex * 0.05) }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-glass-light rounded-full text-primary-300 text-sm font-medium border border-primary-400/20 hover:border-primary-400/40 transition-all duration-200"
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h4 className="text-white font-medium mb-3">Key Benefits</h4>
                <div className="space-y-2">
                  {workflow.benefits.map((benefit, benefitIndex) => (
                    <motion.div
                      key={benefitIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (benefitIndex * 0.1) }}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                      <span className="text-white/70 text-sm">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 rounded-3xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Automate Your Workflow
            </h3>
            <p className="text-white/70 mb-6">
              Interested in automation solutions for your business or personal projects? 
              Let's discuss how we can streamline your processes and save valuable time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl text-white font-medium hover:shadow-xl hover:shadow-primary-500/50 transition-all duration-300"
              >
                Discuss Automation
              </motion.a>
              <motion.a
                href="https://github.com/AkshatChauhan7/workkflow"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 glass-button rounded-xl text-primary-400 hover:text-primary-300 font-medium border border-primary-400/30 hover:border-primary-400/60 transition-all duration-300"
              >
                View Workflows
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}