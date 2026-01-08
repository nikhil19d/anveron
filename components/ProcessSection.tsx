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

const processSteps = [
  {
    step: '01',
    icon: Calendar,
    title: 'Book Slot',
    description: 'We understand your requirements, goals, and current challenges. This consultation is completely free.',
    details: [
      'Analyze your current website/app',
      'Identify pain points and opportunities',
      'Discuss your business goals',
      'Provide initial recommendations'
    ]
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
    ]
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
    ]
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
    ]
  }
];

export function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <Badge className="mb-6 bg-white text-black border-0 hover:bg-gray-200">
            Our Process
          </Badge>
          <h2
            className="text-4xl md:text-5xl text-white mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            From Idea to Launch
          </h2>
          <p
            className="text-lg text-gray-400 max-w-2xl"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Our proven 4-step process ensures your project is delivered on time,
            within budget, and exceeds your expectations
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="space-y-0">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex gap-8 pb-16">
                {/* Left: Step Number & Icon */}
                <div className="flex flex-col items-center relative">
                  {/* Step Circle */}
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center flex-shrink-0 relative z-10">
                    <step.icon className="h-7 w-7 text-black" />
                  </div>

                  {/* Connecting Line */}
                  {index < processSteps.length - 1 && (
                    <div className="w-0.5 bg-gray-800 absolute top-16 bottom-0 left-1/2 transform -translate-x-1/2" />
                  )}
                </div>

                {/* Right: Content */}
                <div className="flex-1 pt-1">
                  <div className="mb-3">
                    <span
                      className="text-sm text-gray-500 tracking-widest"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      STEP {step.step}
                    </span>
                  </div>

                  <h3
                    className="text-2xl text-white mb-3"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {step.title}
                  </h3>

                  <p
                    className="text-gray-400 mb-6 leading-relaxed"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {step.description}
                  </p>

                  <div className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <div
                        key={detailIndex}
                        className="flex items-start gap-3"
                      >
                        <div className="w-1 h-1 bg-gray-600 rounded-full mt-2 flex-shrink-0" />
                        <span
                          className="text-sm text-gray-500"
                          style={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 pt-16 border-t border-gray-900"
        >
          <div className="max-w-3xl">
            <h3
              className="text-2xl text-white mb-3"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Ready to Start Your Project?
            </h3>
            <p
              className="text-gray-400 mb-8"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Book your Slot today and take the first step toward transforming your digital presence
            </p>
            <motion.button
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              className="rounded-sm bg-white text-black px-8 py-4 inline-flex items-center gap-3 hover:bg-gray-200 transition-colors"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
              onClick={() => document.getElementById('audit')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span>Book Slot</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
