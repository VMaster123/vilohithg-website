'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiAcademicCap, HiLocationMarker } from 'react-icons/hi'

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="section-padding bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Education
        </motion.h2>

        <div ref={ref} className="max-w-4xl mx-auto mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 
                     rounded-2xl shadow-lg p-8 md:p-12 border border-indigo-100 dark:border-gray-600"
          >
            <div className="flex items-start gap-6">
              <div className="p-4 bg-indigo-600 rounded-xl text-white">
                <HiAcademicCap size={32} />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 md:mb-0">
                    Georgia Institute of Technology
                  </h3>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <HiLocationMarker size={18} />
                    <span>Atlanta, Georgia</span>
                  </div>
                </div>
                
                <p className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                  Bachelor of Science in Computer Science
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Concentration: Modeling/Simulation and Theory • Minor in Mathematics
                </p>
                
                <div className="flex flex-wrap gap-4 text-sm md:text-base mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-900 dark:text-white">GPA:</span>
                    <span className="text-gray-700 dark:text-gray-300">3.53</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-900 dark:text-white">Period:</span>
                    <span className="text-gray-700 dark:text-gray-300">May 2024 – May 2027</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-900 dark:text-white">Honors:</span>
                    <span className="text-gray-700 dark:text-gray-300">Dean's List Spring 2025</span>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Relevant Coursework:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Partial Differential Equations',
                      'Combinatorics',
                      'Algorithm Honors',
                      'Numerical Analysis',
                      'Computer Simulation',
                      'Scientific Machine Learning',
                      'Data Structures',
                      'Linear Algebra',
                      'Vector Calculus',
                      'Statistics'
                    ].map((course, index) => (
                      <motion.span
                        key={course}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: index * 0.03, duration: 0.3 }}
                        className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 
                                 rounded-lg text-sm border border-gray-200 dark:border-gray-700"
                      >
                        {course}
                      </motion.span>
                    ))}
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

