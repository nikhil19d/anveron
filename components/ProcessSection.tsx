'use client'

import { motion } from 'framer-motion';
import { Badge } from './ui/badge';
import {
  Calendar,
  Palette,
  Code,
  HeadphonesIcon,
  ArrowRight
} from 'lucide-react';
import { useState } from 'react';

const processSteps = [
  {
    step: '01',
    icon: Calendar,
    title: 'Book Free Audit Call',
    description: 'We understand your requirements, goals, and current challenges. This consultation is completely free.',
    details: [
      'Analyze your current website/app',
      'Identify pain points and opportunities',
      'Discuss your business goals',
      'Provide initial recommendations'
    ],
    color: 'from-gray-700 to-gray-900'
  },
  {
    step: '02',
    icon: Palette,
    title: 'UX/UI Design Mockup',
    description: 'We create designs that match your vision and convert visitors into customers.',
    details: [
      'User research and persona development',
      'Wireframing and user flow mapping',
      'High-fidelity mockups',
      'Interactive prototypes'
    ],
    color: 'from-gray-600 to-gray-800'
  },
  {
    step: '03',
    icon: Code,
    title: 'Development',
    description: 'We build your website with clean, editable code using modern technologies.',
    details: [
      'Frontend development with React/Next.js',
      'Backend API development',
      'Database setup and integration',
      'Third-party service integrations'
    ],
    color: 'from-gray-500 to-gray-700'
  },
  {
    step: '04',
    icon: HeadphonesIcon,
    title: 'Support & Updates',
    description: 'We assist you as you grow with ongoing maintenance and feature updates.',
    details: [
      'Regular security updates',
      'Performance monitoring',
      'Feature enhancements',
      'Code maintenance'
    ],
    color: 'from-gray-400 to-gray-600'
  }
];

export function ProcessSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="process" className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-gray-800 text-white border border-gray-600 hover:bg-gray-700">
            Our Process
          </Badge>
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            From Idea to Launch
          </h2>
          <p
            className="text-lg text-gray-300 max-w-3xl mx-auto"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Our proven 4-step process ensures your project is delivered on time, within budget,
            and exceeds your expectations
          </p>
        </motion.div>

        {/* Timeline View - Desktop */}
        <div className="hidden lg:block relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-16 bottom-16 w-1 bg-gradient-to-b from-gray-700 via-gray-500 to-gray-400" />

          {/* Animated 3D Pencil */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 z-10"
            initial={{ top: '4rem' }}
            animate={{ top: '28rem' }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
              repeatType: "reverse"
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div
              animate={{
                rotateY: isHovered ? [0, 360] : [0, 180, 360],
                rotateX: [0, 15, -15, 0],
                y: [0, -15, 0],
                scale: isHovered ? [1, 1.3, 1] : [1, 1.1, 1]
              }}
              transition={{
                duration: isHovered ? 3 : 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Pencil Body */}
              <div className="relative w-4 h-16 mx-auto">
                {/* Main pencil shaft */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-800 to-black rounded-sm shadow-lg" />

                {/* White highlights */}
                <div className="absolute left-0 top-1 bottom-1 w-0.5 bg-white opacity-60 rounded-full" />
                <div className="absolute right-0 top-2 bottom-2 w-0.5 bg-gray-400 opacity-40 rounded-full" />

                {/* Pencil tip */}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-1 border-r-1 border-t-2 border-l-transparent border-r-transparent border-t-gray-600" />

                {/* Pencil eraser end */}
                <div className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-5 h-1 bg-gray-700 rounded-sm" />
              </div>

              {/* Floating particles */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full opacity-70"
                  animate={{
                    y: [0, -15, -30],
                    x: [0, Math.sin(i) * 10, Math.sin(i) * 20],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeOut"
                  }}
                  style={{
                    left: `${45 + i * 5}%`,
                    bottom: '15%'
                  }}
                />
              ))}
            </motion.div>
          </motion.div>

          <div className="space-y-24">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-12`}
              >
                <div className="flex-1">
                  <div className={`bg-gray-900 border border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow ${index % 2 === 0 ? 'text-right' : 'text-left'
                    }`}>
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'
                      }`}>
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center`}>
                        <step.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div
                          className="text-3xl font-bold bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent"
                          style={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                          {step.step}
                        </div>
                      </div>
                    </div>

                    <h3
                      className="text-xl font-bold text-white mb-3"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {step.title}
                    </h3>

                    <p
                      className="text-gray-300 mb-4"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {step.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      {step.details.map((detail) => (
                        <div
                          key={detail}
                          className={`flex items-center gap-2 ${index % 2 === 0 ? 'justify-end' : 'justify-start'
                            }`}
                        >
                          <div className="w-1.5 h-1.5 bg-white rounded-full" />
                          <span
                            className="text-sm text-gray-300"
                            style={{ fontFamily: 'Montserrat, sans-serif' }}
                          >
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>


                  </div>
                </div>

                <div className="w-16 h-16 rounded-full bg-gray-800 border border-gray-600 shadow-lg flex items-center justify-center relative z-20">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center`}>
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                </div>

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden space-y-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 border border-gray-700 rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center`}>
                  <step.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div
                    className="text-2xl font-bold text-white"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {step.step}
                  </div>
                </div>
              </div>

              <h3
                className="text-xl font-bold text-white mb-3"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {step.title}
              </h3>

              <p
                className="text-gray-300 mb-4"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {step.description}
              </p>

              <div className="space-y-2">
                {step.details.map((detail) => (
                  <div key={detail} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    <span
                      className="text-sm text-gray-300"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {detail}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3
              className="text-2xl font-bold text-white mb-4"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Ready to Start Your Project?
            </h3>
            <p
              className="text-gray-300 mb-6"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Book your free audit call today and take the first step toward transforming your digital presence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white border border-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                onClick={() => document.getElementById('free-audit')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Free Audit
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
