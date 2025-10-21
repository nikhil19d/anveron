'use client'
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-16 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      </div>

      {/* Animated elements */}
      <motion.div
        className="absolute top-20 right-20"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <Sparkles className="h-8 w-8 text-white/30" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Zap className="h-12 w-12 text-white/20" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Have a startup idea and
              <br />
              <span className="text-gray-300">
                need a website?
              </span>
            </h2>

            <p
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Let&apos;s build it together!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="liquid-glass-cta text-white text-lg px-8 py-4 h-auto group"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                onClick={() => document.getElementById('free-audit')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Free Audit Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                15 Free Days
              </div>
              <div className="text-blue-100" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Design + Dev
              </div>
            </div>
          </motion.div>

          {/* Additional CTA text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <p
              className="text-blue-100 text-sm max-w-2xl mx-auto"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Join successful startups who transformed their digital presence with Anveron.
              Our proven process delivers results that drive growth and user engagement.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
