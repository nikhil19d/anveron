'use client'

import { motion } from 'framer-motion';
import { Badge } from './ui/badge';
import { Users } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-gray-800 text-white border border-gray-600 hover:bg-gray-700">
            Turning Ideas Into Reality
          </Badge>
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Where Innovation Meets Precision
          </h2>
          <p
            className="text-lg text-gray-300 max-w-3xl mx-auto"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            We help startups turn their ideas into reality with seamless UX design and full-stack development.
            Our team of expert designers and developers work closely with you to create professional,
            editable, and scalable websites—without breaking the bank.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Company mission */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-r from-gray-900 to-black p-8 rounded-xl text-white border border-gray-700">
              <Users className="h-12 w-12 mb-4 text-white" />
              <h3
                className="text-xl font-bold mb-4"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Our Mission
              </h3>
              <p
                className="font-medium leading-relaxed text-gray-300"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                &quot;We collaborate with developers and designers to understand your perspective
                and help you make your first website—fully coded, editable, and tailored to your needs.&quot;
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-700">
              <h3
                className="font-semibold text-white mb-4 text-lg"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Why Choose Anveron?
              </h3>
              <ul className="space-y-3 text-gray-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  Affordable pricing for startups
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  Professional, scalable solutions
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  Fully editable and maintainable code
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  Ongoing support and updates
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  Expert team with proven track record
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Stats and features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex justify-center">
              <div className="text-center p-8 border border-gray-600 rounded-xl hover:border-white transition-colors max-w-xs bg-gray-900">
                <div className="text-4xl font-bold text-white mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  90.99%
                </div>
                <p className="text-gray-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Client Satisfaction
                </p>
              </div>
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  );
}
