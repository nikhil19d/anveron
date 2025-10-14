'use client'

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import {
  Palette,
  Code,
  Smartphone,
  Server,
  HeadphonesIcon,
  ArrowRight,
  Check,
  X
} from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    icon: Palette,
    title: 'UX Design',
    description: 'User-centered design that converts visitors into customers',
    features: [
      'User Research & Analysis',
      'Wireframing & Prototyping',
      'User Journey Mapping',
      'Usability Testing'
    ],
    color: 'from-blue-500 to-blue-600',
    details: {
      process: [
        'Discovery Phase: We research your target audience and analyze competitor websites',
        'Information Architecture: Creating site maps and user flows for optimal navigation',
        'Wireframing: Low-fidelity sketches to establish layout and functionality',
        'User Testing: Validate designs with real users before development',
        'Iteration: Refine designs based on feedback and testing results'
      ],
      deliverables: [
        'User Personas and Journey Maps',
        'Site Architecture and User Flows',
        'Interactive Wireframes',
        'Usability Testing Reports',
        'UX Documentation and Guidelines'
      ]
    }
  },
  {
    icon: Smartphone,
    title: 'UI Design',
    description: 'Beautiful, modern interfaces that users love to interact with',
    features: [
      'Modern Visual Design',
      'Component Libraries',
      'Responsive Design',
      'Design Systems'
    ],
    color: 'from-purple-500 to-purple-600',
    details: {
      process: [
        'Style Guide Creation: Establishing colors, typography, and visual hierarchy',
        'Component Design: Creating reusable UI elements and patterns',
        'High-Fidelity Mockups: Pixel-perfect designs for all screen sizes',
        'Interactive Prototyping: Clickable prototypes to test user interactions',
        'Design System Documentation: Complete style guide for developers'
      ],
      deliverables: [
        'Complete Visual Style Guide',
        'High-Fidelity Design Files (Figma)',
        'Component Library',
        'Interactive Prototypes',
        'Design System Documentation'
      ]
    }
  },
  {
    icon: Code,
    title: 'Frontend Development',
    description: 'Fast, responsive websites built with modern technologies',
    features: [
      'React & Next.js Development',
      'Mobile-First Responsive',
      'Performance Optimization',
      'SEO Implementation'
    ],
    color: 'from-green-500 to-green-600',
    details: {
      process: [
        'Environment Setup: Configure development tools and frameworks',
        'Component Development: Build reusable React components',
        'Responsive Implementation: Ensure perfect mobile and desktop experience',
        'Performance Optimization: Image optimization, lazy loading, and caching',
        'Testing & Quality Assurance: Cross-browser testing and code review'
      ],
      deliverables: [
        'Clean, Commented Source Code',
        'Responsive Website',
        'Performance-Optimized Build',
        'Cross-Browser Compatibility',
        'Development Documentation'
      ]
    }
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Scalable backend solutions to power your application',
    features: [
      'API Development',
      'Database Design',
      'Authentication Systems',
      'Cloud Integration'
    ],
    color: 'from-orange-500 to-orange-600',
    details: {
      process: [
        'Architecture Planning: Design scalable backend structure',
        'Database Setup: Configure optimal database schema',
        'API Development: Create RESTful APIs with proper documentation',
        'Security Implementation: Add authentication and data protection',
        'Cloud Deployment: Deploy to reliable hosting platforms'
      ],
      deliverables: [
        'RESTful API Documentation',
        'Database Schema and Models',
        'Authentication System',
        'Cloud Infrastructure Setup',
        'API Testing Suite'
      ]
    }
  },
  {
    icon: HeadphonesIcon,
    title: 'Maintenance & Support',
    description: 'Ongoing support to keep your website running smoothly',
    features: [
      '24/7 Technical Support',
      'Regular Updates',
      'Security Monitoring',
      'Performance Tracking'
    ],
    color: 'from-teal-500 to-teal-600',
    details: {
      process: [
        'Health Monitoring: Regular performance and security checks',
        'Content Updates: Keep your website content fresh and relevant',
        'Security Patches: Apply latest security updates and patches',
        'Performance Optimization: Continuous speed and efficiency improvements',
        'Backup Management: Regular automated backups for data security'
      ],
      deliverables: [
        'Monthly Performance Reports',
        'Security Audit Reports',
        'Regular Content Updates',
        'Backup and Recovery System',
        'Priority Technical Support'
      ]
    }
  }
];

export function ServicesSection() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  return (
    <section id="services" className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-black/30 border border-white/20 text-white backdrop-blur-lg hover:bg-white/10">
            Our Services
          </Badge>
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Complete Digital Solutions
          </h2>
          <p
            className="text-lg text-gray-300 max-w-3xl mx-auto"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            From concept to launch, we provide end-to-end services to transform your startup&apos;s digital presence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300 border border-white/10 bg-black/30 backdrop-blur-lg hover:bg-white/5">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-gray-700 to-gray-900 border border-white/20 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle
                    className="text-xl text-white"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {service.title}
                  </CardTitle>
                  <CardDescription
                    className="text-gray-300"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Check className="h-4 w-4 text-white flex-shrink-0" />
                        <span
                          className="text-sm text-gray-300"
                          style={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full bg-black text-white border border-white/20 hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 group"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                    onClick={() => {
                      setSelectedService(service)
                      setIsOpen(true)
                    }
                    }
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-black/30 border border-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 text-white"
        >
          <h3
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Ready to Transform Your Startup?
          </h3>
          <p
            className="text-lg mb-8 text-gray-300"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Get a free audit of your current website and discover opportunities for improvement
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-black text-white border border-white/20 hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
              onClick={() => document.getElementById('free-audit')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Free Audit
            </Button>
          </div>
        </motion.div>

        {/* Service Details Modal */}
        {(selectedService && isOpen) && (
          <div
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${selectedService.color} flex items-center justify-center`}>
                      <selectedService.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3
                        className="text-2xl font-bold text-gray-900"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      >
                        {selectedService.title}
                      </h3>
                      <p
                        className="text-gray-600"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      >
                        {selectedService.description}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="text-gray-400 hover:text-gray-600 p-2"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4
                      className="text-lg font-semibold text-gray-900 mb-4"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      Our Process
                    </h4>
                    <div className="space-y-3">
                      {selectedService.details.process.map((step, index) => (
                        <div key={index} className="flex gap-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">
                            {index + 1}
                          </div>
                          <p
                            className="text-gray-600 text-sm"
                            style={{ fontFamily: 'Montserrat, sans-serif' }}
                          >
                            {step}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4
                      className="text-lg font-semibold text-gray-900 mb-4"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      What You&apos;ll Get
                    </h4>
                    <div className="space-y-3 mb-6">
                      {selectedService.details.deliverables.map((item, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <p
                            className="text-gray-600 text-sm"
                            style={{ fontFamily: 'Montserrat, sans-serif' }}
                          >
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-700 hover:to-blue-900"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                    onClick={() => {
                      document.getElementById('free-audit')?.scrollIntoView({ behavior: 'smooth' })
                      setIsOpen(false)
                    }
                    }
                  >
                    Get Started with {selectedService.title}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
