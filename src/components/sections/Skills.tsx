'use client'

import { motion } from 'framer-motion'

const skillCategories = [
	{
		title: 'Programming Languages',
		skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++'],
	},
	{
		title: 'Frontend Development',
		skills: ['React', 'Next.js', 'CustomTkinter', 'JavaFX'],
	},
	{
		title: 'Backend & APIs',
		skills: ['Node.js', 'Express', 'FastAPI', 'API Development'],
	},
	{
		title: 'Databases',
		skills: ['MySQL', 'MongoDB'],
	},
	{
		title: 'AI/ML Libraries',
		skills: [
			'Pandas',
			'NumPy',
			'Scikit-learn',
			'Matplotlib',
			'XGBoost',
			'Random Forest',
		],
	},
	{
		title: 'Tools & Automation',
		skills: ['Git', 'n8n Automation'],
	},
]

export function Skills() {
	return (
		<section id="skills" className="py-20 md:py-28 lg:py-36 relative">
			<div className="container-editorial">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
					className="mb-16 md:mb-24 max-w-2xl"
				>
					<div className="flex items-baseline gap-4 mb-6">
						<span className="caption text-accent">02</span>
						<h2 className="heading-1">
							Technical <span className="text-accent">Skills</span>
						</h2>
					</div>
					<p className="body-lg text-fg-secondary leading-relaxed">
						Technologies and tools I use to build exceptional products
					</p>
				</motion.div>

				{/* Skills Grid - Asymmetric layout */}
				<div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
					{skillCategories.map((category, categoryIndex) => (
						<motion.div
							key={category.title}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-50px' }}
							transition={{
								duration: 0.6,
								delay: categoryIndex * 0.08,
								ease: [0.16, 1, 0.3, 1],
							}}
							className={`${
								categoryIndex < 3 ? 'lg:col-span-4' : 'lg:col-span-6'
							}`}
						>
							<div className="card-editorial p-6 md:p-8 rounded-2xl h-full group">
								<div className="mb-6">
									<h3 className="heading-4 text-fg-primary mb-2 group-hover:text-accent transition-colors duration-300">
										{category.title}
									</h3>
									<div className="w-12 h-[1px] bg-accent" />
								</div>

								<div className="flex flex-wrap gap-2">
									{category.skills.map((skill, skillIndex) => (
										<motion.span
											key={skill}
											initial={{ opacity: 0, scale: 0.9 }}
											whileInView={{ opacity: 1, scale: 1 }}
											viewport={{ once: true }}
											transition={{
												duration: 0.4,
												delay:
													categoryIndex * 0.08 +
													skillIndex * 0.04,
												ease: [0.16, 1, 0.3, 1],
											}}
											whileHover={{ scale: 1.05, y: -2 }}
											className="px-4 py-2 rounded-full bg-card border border-border text-fg-secondary text-sm font-medium hover:border-accent hover:text-accent hover:bg-card-hover transition-all duration-300 cursor-default"
										>
											{skill}
										</motion.span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* Proficiency note */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-50px' }}
					transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
					className="mt-16 text-center"
				>
					<p className="caption text-fg-muted">
						Always expanding my toolkit — currently diving deeper into system
						design and cloud architectures
					</p>
				</motion.div>
			</div>
		</section>
	)
}