'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skills = [
  'Python',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Machine Learning',
  'TensorFlow',
  'PyTorch',
  'Scientific Computing',
  'Mathematical Modeling',
  'Computational Fluid Dynamics',
  'Git',
  'MongoDB',
  'PostgreSQL',
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          About Me
        </motion.h2>
        
        <div ref={ref} className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 md:p-12"
          >
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I like to work on problems in Scientific Machine Learning, Partial Differential Equations, 
              and Artificial Intelligence. Some projects include Computational Fluid Dynamics, 
              Multi-Physics Simulation, and Mathematical Modeling to name a few.
            </p>

            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Skills & Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 
                             text-indigo-700 dark:text-indigo-300 rounded-full 
                             font-medium text-sm md:text-base cursor-default
                             border border-indigo-200 dark:border-indigo-800
                             hover:bg-indigo-200 dark:hover:bg-indigo-900/50 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

