'use client'

import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="home" className="pt-24 pb-16 bg-black relative overflow-hidden">
      {/* Floating wireframe elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-16 h-16 border border-white rounded-lg" />
        <div className="absolute top-40 right-20 w-12 h-12 border border-white rounded-full" />
        <div className="absolute bottom-20 left-1/4 w-8 h-8 border border-white" />
        <div className="absolute bottom-40 right-1/3 w-20 h-20 border border-white rounded-lg" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                <span className="text-white">Where Design Meets</span>
                <span className="block liquid-glass-text">
                  Care & Precision
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-gray-300 leading-relaxed"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Affordable, professional design & development services that help you stand out.
                Turn ideas into reality with our tailored solutions.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="liquid-glass-cta text-white group"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                onClick={() => document.getElementById('design-scratch')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Design from Scratch - We&apos;ll Help
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="liquid-glass-button text-white group"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                onClick={() => document.getElementById('redesign-website')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Redesign Existing Website
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Animated 3D Pencil */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative bg-black rounded-2xl p-8 h-96 flex items-center justify-center overflow-hidden">
              {/* 3D Pencil */}
              <motion.div
                animate={{
                  rotateY: isHovered ? [0, 360] : [0, 180, 360],
                  rotateX: [0, 15, -15, 0],
                  y: [0, -30, 0],
                  scale: isHovered ? [1, 1.2, 1] : [1, 1.1, 1]
                }}
                transition={{
                  duration: isHovered ? 2 : 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Pencil Body */}
                <div className="relative w-8 h-64 mx-auto">
                  {/* Main pencil shaft */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-800 to-black rounded-lg shadow-2xl" />

                  {/* White highlights */}
                  <div className="absolute left-1 top-4 bottom-4 w-1 bg-white opacity-60 rounded-full" />
                  <div className="absolute right-1 top-8 bottom-8 w-1 bg-gray-400 opacity-40 rounded-full" />

                  {/* Additional highlight lines */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-4 bottom-4 w-0.5 bg-white opacity-30 rounded-full" />

                  {/* Pencil tip */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-gray-600" />

                  {/* Pencil eraser end */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-10 h-4 bg-gray-700 rounded-lg shadow-lg" />

                  {/* Metal band */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-10 h-2 bg-gradient-to-r from-gray-400 to-gray-600 rounded-sm" />
                </div>

                {/* Pencil tip glow effect */}
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: [0, 1, 0], scale: [0.5, 2, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full blur-lg"
                  />
                )}

                {/* Floating particles */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full opacity-70"
                    animate={{
                      y: [0, -50, -100],
                      x: [0, Math.sin(i) * 30, Math.sin(i) * 60],
                      opacity: [0, 1, 0],
                      scale: [0, 1.2, 0.3]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 1.2,
                      ease: "easeOut"
                    }}
                    style={{
                      left: `${45 + i * 5}%`,
                      bottom: '25%'
                    }}
                  />
                ))}
              </motion.div>

              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/20 to-gray-700/20 blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
