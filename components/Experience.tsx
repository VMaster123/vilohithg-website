'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiBriefcase, HiCalendar } from 'react-icons/hi'

interface ExperienceItem {
  title: string
  organization: string
  location: string
  period: string
  description: string[]
  technologies?: string[]
}

const experiences: ExperienceItem[] = [
  {
    title: "Sparse & Randomized Numerical Linear Algebra Researcher",
    organization: "Georgia Tech",
    location: "Atlanta, Georgia",
    period: "August 2025 – Present",
    description: [
      "Applied Randomized Numerical Linear Algebra to scientific workloads (graphs, PDEs, SciML), benchmarking algorithms on datasets with 10³-10⁶ samples and 50–10³ features with JL-kNN as a representative example measuring distance preservation, rank-overlap, and approximate nearest-neighbor recall.",
      "Built sparse benchmarking pipelines, incorporating FINCH cache-blocking research and testing 3–5 backends, 10–20 randomized projections, and multiple sparsity levels to systematically quantify rank stability, distance distortion, and backend performance."
    ],
    technologies: ["Python", "NumPy", "Linear Algebra", "Benchmarking", "k-NN", "FINCH"]
  },
  {
    title: "Control Theory & Neural Dynamics Intern",
    organization: "Carboncopies Foundation",
    location: "Remote",
    period: "May 2025 – September 2025",
    description: [
      "Developing mathematical and computational frameworks for brain emulation, integrating control theory, inverse problems, and dynamical systems to reconstruct neural connectivity from incomplete or noisy data.",
      "Simulating spiking neuron networks (LIF model) using stochastic differential equations and emulating them using an SRM deep neural network, achieving >90% neuron prediction accuracy across datasets."
    ],
    technologies: ["Python", "PyTorch", "Neural Networks", "Control Theory", "Dynamical Systems", "SDEs"]
  },
  {
    title: "AI Engineering Intern",
    organization: "Stride Labs",
    location: "Remote",
    period: "October 2024 – January 2025",
    description: [
      "Engineered geometric smoothing and mesh reconstruction algorithms for a computer-vision model pipeline, improving anatomical fit by 20–25% in over 1,000-foot scans and enhancing model robustness.",
      "Implemented React-based tools to annotate anatomical landmarks on 3D foot scans, integrating with the spline generation and smoothing pipeline to accelerate foot orthotics modeling and enhance accuracy."
    ],
    technologies: ["React", "TypeScript", "Computer Vision", "3D Modeling", "Mesh Processing"]
  }
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Professional Experience & Research
        </motion.h2>

        <div ref={ref} className="max-w-5xl mx-auto mt-12 space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 md:p-8 
                       border-l-4 border-indigo-600 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <HiBriefcase className="text-indigo-600 dark:text-indigo-400 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mt-1">
                        {exp.organization}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                  <HiCalendar size={18} />
                  <span className="text-sm md:text-base whitespace-nowrap">{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mt-4">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <span className="text-indigo-600 dark:text-indigo-400 mt-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed flex-1">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {exp.technologies && (
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 
                                 text-indigo-700 dark:text-indigo-300 rounded-md text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

