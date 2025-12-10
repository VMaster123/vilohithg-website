'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skills = [
  'Python',
  'PyTorch',
  'TensorFlow',
  'Scikit-Learn',
  'NumPy',
  'Pandas',
  'SQL',
  'Java',
  'MATLAB',
  'R',
  'Julia',
  'C',
  'C#',
  'C++',
  'Spark',
  'CUDA',
  'TypeScript',
  'JavaScript',
  'React',
  'Git',
  'Docker',
  'Linux',
  'AWS',
  'Scientific Machine Learning',
  'Partial Differential Equations',
  'Numerical Analysis',
  'Control Theory',
  'Reinforcement Learning',
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
              I'm a 3rd year Computer Science major at Georgia Tech with a focus on Modeling/Simulation and Theory, 
              and a minor in Mathematics. My research spans Scientific Machine Learning, Neural Partial Differential 
              Equations, and Plasma Physics. I'm currently working on Neural PDEs for Nonlinear Chaotic Systems 
              and Spectral Inverse Modeling of Space Plasmas.
            </p>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I have experience in control theory, inverse problems, and dynamical systems, with applications 
              ranging from brain emulation to plasma control. My work combines mathematical rigor with computational 
              innovation to solve complex scientific problems.
            </p>
            
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Leadership</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <span className="font-semibold">Southeast Analog Club GT Admin Officer:</span> Leading team to draft 
                chapter Constitution, coordinating joint events with other campus organizations, and ensuring club 
                compliance and active status.
              </p>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Languages</h4>
              <div className="flex flex-wrap gap-3">
                {['English (Native)', 'Spanish (Intermediate)', 'Telugu (Conversational)'].map((lang) => (
                  <span
                    key={lang}
                    className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 
                             text-purple-700 dark:text-purple-300 rounded-full 
                             font-medium text-sm md:text-base"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

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

