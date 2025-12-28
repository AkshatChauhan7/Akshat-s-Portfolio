'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { TrophyIcon, FireIcon, ChartBarIcon, CodeBracketIcon } from '@heroicons/react/24/outline'
import { fetchLeetCodeStats, fetchLeetCodeStatsGraphQL, getProblemCategories, type LeetCodeStats } from '@/utils/leetcode'

export function LeetCode() {
  const [stats, setStats] = useState<LeetCodeStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

  useEffect(() => {
    const loadStats = async () => {
      setLoading(true)
      try {
        // Load only stats data
        let data = await fetchLeetCodeStats('Akshat_Chauhan_7')
        if (!data) {
          data = await fetchLeetCodeStatsGraphQL('Akshat_Chauhan_7')
        }
        
        if (data) {
          setStats(data)
        }
        
        setLastUpdated(new Date())
      } catch (error) {
        console.error('Failed to load LeetCode data:', error)
      } finally {
        setLoading(false)
      }
    }

    loadStats()
  }, [])

  const problemCategories = getProblemCategories()
  return (
    <section id="leetcode" className="py-24 relative">
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
            LeetCode Journey
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-4">
            My competitive programming progress and problem-solving achievements
          </p>
          {lastUpdated && (
            <div className="flex items-center justify-center space-x-4 text-sm text-white/50">
              <span>Last updated: {lastUpdated.toLocaleString()}</span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={async () => {
                  setLoading(true)
                  try {
                    const data = await fetchLeetCodeStats('Akshat_Chauhan_7')
                    if (data) {
                      setStats(data)
                      setLastUpdated(new Date())
                    }
                  } catch (error) {
                    console.error('Refresh failed:', error)
                  } finally {
                    setLoading(false)
                  }
                }}
                className="px-3 py-1 glass-button rounded-lg text-primary-400 hover:text-primary-300 transition-colors"
              >
                {loading ? '🔄' : '↻'} Refresh
              </motion.button>
            </div>
          )}
        </motion.div>

        {/* LeetCode Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: <TrophyIcon className="w-8 h-8" />,
              title: 'Problems Solved',
              value: loading ? '...' : (stats?.totalSolved?.toString() || '177'),
              subtitle: 'Out of 3,791 total',
              color: 'from-yellow-400 to-orange-500'
            },
            {
              icon: <FireIcon className="w-8 h-8" />,
              title: 'Max Streak',
              value: loading ? '...' : (stats?.streak?.toString() || '127'),
              subtitle: 'Days consecutive',
              color: 'from-red-400 to-pink-500'
            },
            {
              icon: <ChartBarIcon className="w-8 h-8" />,
              title: 'Global Rank',
              value: loading ? '...' : (stats?.ranking?.toLocaleString() || '811,755'),
              subtitle: 'Worldwide ranking',
              color: 'from-blue-400 to-purple-500'
            },
            {
              icon: <CodeBracketIcon className="w-8 h-8" />,
              title: 'Acceptance Rate',
              value: loading ? '...' : `${stats?.acceptanceRate?.toFixed(1) || '77.1'}%`,
              subtitle: 'Solution accuracy',
              color: 'from-green-400 to-teal-500'
            }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 rounded-3xl group hover:glow-effect transition-all duration-300"
            >
              <div className={`text-transparent bg-gradient-to-r ${stat.color} bg-clip-text mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {stat.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-white/80 font-medium mb-1">{stat.title}</p>
              <p className="text-white/60 text-sm">{stat.subtitle}</p>
            </motion.div>
          ))}
        </div>

        {/* LeetCode Profile & Progress */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Coding Profile
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 glass-button rounded-xl">
                  <div>
                    <p className="text-white font-medium">LeetCode Profile</p>
                    <p className="text-white/60 text-sm">@Akshat_Chauhan_7</p>
                  </div>
                  <motion.a
                    href="https://leetcode.com/u/Akshat_Chauhan_7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg text-white font-medium hover:shadow-lg"
                  >
                    View Profile
                  </motion.a>
                </div>

                {/* Problem Categories */}
                <div className="space-y-4">
                  <h4 className="text-white font-semibold">Problem Categories</h4>
                  {problemCategories.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-white/80">{item.category}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-primary-400">{item.solved}/{item.total}</span>
                          <span className={`px-2 py-1 rounded text-xs ${
                            item.difficulty === 'Fundamental' ? 'bg-green-500/20 text-green-400' :
                            item.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {item.difficulty}
                          </span>
                        </div>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${Math.min((item.solved / item.total) * 100, 100)}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* GitHub Link */}
                <motion.a
                  href="https://github.com/AkshatChauhan7/My_LeetCode_Solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="block w-full text-center px-6 py-3 mt-6 glass-button rounded-xl text-primary-400 hover:text-primary-300 font-medium transition-colors duration-200"
                >
                  View All Solutions on GitHub →
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Difficulty Breakdown & Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Difficulty Breakdown */}
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Difficulty Breakdown
              </h3>
              
              <div className="space-y-6">
                {[
                  { 
                    difficulty: 'Easy', 
                    solved: loading ? '...' : (stats?.easySolved?.toString() || '96'), 
                    total: 918, 
                    color: 'from-green-400 to-green-500',
                    percentage: loading ? 0 : ((stats?.easySolved || 96) / 918) * 100
                  },
                  { 
                    difficulty: 'Medium', 
                    solved: loading ? '...' : (stats?.mediumSolved?.toString() || '73'), 
                    total: 1977, 
                    color: 'from-yellow-400 to-yellow-500',
                    percentage: loading ? 0 : ((stats?.mediumSolved || 73) / 1977) * 100
                  },
                  { 
                    difficulty: 'Hard', 
                    solved: loading ? '...' : (stats?.hardSolved?.toString() || '8'), 
                    total: 896, 
                    color: 'from-red-400 to-red-500',
                    percentage: loading ? 0 : ((stats?.hardSolved || 8) / 896) * 100
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="space-y-3"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{item.difficulty}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-white/80 text-sm">{item.solved}/{item.total}</span>
                        <span className="text-primary-400 text-sm">({item.percentage.toFixed(1)}%)</span>
                      </div>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${Math.min(item.percentage * 2, 100)}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievement Stats */}
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Achievements
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-button p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-primary-400 mb-1">
                    {loading ? '...' : (stats?.submissions?.toString() || '350')}
                  </div>
                  <div className="text-white/70 text-sm">Total Submissions</div>
                </div>
                <div className="glass-button p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">
                    {loading ? '...' : (stats?.activeDays?.toString() || '172')}
                  </div>
                  <div className="text-white/70 text-sm">Active Days</div>
                </div>
                <div className="glass-button p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">C++</div>
                  <div className="text-white/70 text-sm">Primary Language</div>
                </div>
                <div className="glass-button p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">
                    {loading ? '...' : `${stats?.acceptanceRate?.toFixed(0) || '77'}%`}
                  </div>
                  <div className="text-white/70 text-sm">Success Rate</div>
                </div>
              </div>

              {/* Recent Badges */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <h4 className="text-white font-semibold mb-4">Recent Badges</h4>
                <div className="grid grid-cols-3 gap-3">
                  <div className="glass-button p-3 rounded-xl text-center">
                    <div className="text-xl mb-1">🏆</div>
                    <div className="text-white/80 text-xs">100 Days</div>
                  </div>
                  <div className="glass-button p-3 rounded-xl text-center">
                    <div className="text-xl mb-1">⭐</div>
                    <div className="text-white/80 text-xs">50 Days</div>
                  </div>
                  <div className="glass-button p-3 rounded-xl text-center">
                    <div className="text-xl mb-1">🐼</div>
                    <div className="text-white/80 text-xs">Pandas</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}