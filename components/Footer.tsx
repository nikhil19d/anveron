'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, Linkedin, Twitter, Instagram } from 'lucide-react';


export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="mb-6">
                <motion.h1
                  className="text-3xl font-bold text-white"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  animate={{
                    y: [0, -5, 0],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  ANVERON
                </motion.h1>
              </div>

              <p
                className="text-gray-300 mb-6 max-w-md"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Helping startups turn bad UX into good UX – affordable, professional, and tailored solutions.
                Transform your digital presence with our expert team.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-white" />
                  <span style={{ fontFamily: 'Montserrat, sans-serif' }}>799 100 4886</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-white" />
                  <span style={{ fontFamily: 'Montserrat, sans-serif' }}>hello@anveron.com</span>
                </div>
              </div>

              <p
                className="text-sm text-gray-400 mt-6 italic"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                &quot;Your ideas are safe with us. Before we start, every client signs an agreement
                to protect your project and our collaboration.&quot;
              </p>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3
                className="text-lg font-semibold mb-6"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Services
              </h3>
              <ul className="space-y-3 text-gray-300">
                {[
                  'UX Design',
                  'UI Design',
                  'Frontend Development',
                  'Backend Development',
                  'Maintenance & Support'
                ].map((service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      className="hover:text-blue-400 transition-colors"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3
                className="text-lg font-semibold mb-6"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Company
              </h3>
              <ul className="space-y-3 text-gray-300">
                {[
                  { name: 'About', href: '#home' },
                  { name: 'Our Projects', href: '#projects' },
                  { name: 'Process', href: '#process' },
                  { name: 'Contact', href: '#contact' },
                  { name: 'Get Free Audit', href: '#audit' }
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="hover:text-blue-400 transition-colors"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p
              className="text-gray-400 text-sm"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              © {currentYear} Anveron. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              {/* Social links */}
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>

              {/* Legal links */}
              <div className="flex items-center gap-4 text-sm">
                <a
                  href="#privacy"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Privacy Policy
                </a>
                <a
                  href="#terms"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Terms & Conditions
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
