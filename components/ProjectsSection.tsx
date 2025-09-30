'use client'

import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import {
  ArrowRight,
  X,
  Code,
  Smartphone,
  Database,
  Globe,
  Sparkles,
  Zap,
  Cpu
} from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  results: string;
  x: number;
  y: number;
  z: number;
  color: string;
  size: number;
  details: {
    challenge: string;
    solution: string;
    impact: string;
  };
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Revolution",
    category: "Full-Stack",
    description: "Complete e-commerce platform with AI-powered recommendations and real-time analytics dashboard.",
    tags: ["React", "Node.js", "MongoDB", "AI/ML", "Stripe"],
    results: "300% Sales Boost",
    x: 0.2,
    y: 0.3,
    z: 0.5,
    color: "#FF6B6B",
    size: 1.2,
    details: {
      challenge: "Client needed a modern e-commerce solution to replace their outdated system and compete in the digital marketplace.",
      solution: "Built a full-stack platform with React frontend, Node.js backend, AI recommendations, and advanced analytics.",
      impact: "Achieved 300% increase in sales, 85% faster page load times, and 95% customer satisfaction rate."
    }
  },
  {
    id: 2,
    title: "FinTech Mobile App",
    category: "Front-End",
    description: "Intuitive mobile banking application with biometric authentication and real-time transaction monitoring.",
    tags: ["React Native", "TypeScript", "Redux", "Biometrics"],
    results: "1M+ Downloads",
    x: 0.7,
    y: 0.2,
    z: 0.8,
    color: "#4ECDC4",
    size: 1.1,
    details: {
      challenge: "Create a secure, user-friendly mobile banking app that builds trust and encourages adoption.",
      solution: "Designed an intuitive interface with advanced security features and smooth user experience.",
      impact: "Reached 1 million downloads within 6 months with 4.8/5 app store rating."
    }
  },
  {
    id: 3,
    title: "Healthcare Dashboard",
    category: "Front-End",
    description: "Real-time patient monitoring system with advanced data visualization and alert mechanisms.",
    tags: ["Vue.js", "D3.js", "WebSocket", "Charts"],
    results: "50% Faster Diagnosis",
    x: 0.1,
    y: 0.7,
    z: 0.3,
    color: "#45B7D1",
    size: 1.0,
    details: {
      challenge: "Hospital needed real-time patient monitoring with instant alerts and comprehensive data visualization.",
      solution: "Built responsive dashboard with live data streams, interactive charts, and smart notification system.",
      impact: "Reduced diagnosis time by 50% and improved patient care quality significantly."
    }
  },
  {
    id: 4,
    title: "AI-Powered CRM",
    category: "Back-End",
    description: "Intelligent customer relationship management system with predictive analytics and automation.",
    tags: ["Python", "PostgreSQL", "Redis", "ML"],
    results: "40% Revenue Growth",
    x: 0.8,
    y: 0.6,
    z: 0.2,
    color: "#96CEB4",
    size: 1.3,
    details: {
      challenge: "Sales team needed intelligent CRM system to better understand customer behavior and predict sales trends.",
      solution: "Developed AI-powered CRM with machine learning algorithms for lead scoring and sales predictions.",
      impact: "Generated 40% revenue growth and improved sales team efficiency by 60%."
    }
  },
  {
    id: 5,
    title: "Blockchain Platform",
    category: "Full-Stack",
    description: "Decentralized application for secure transactions with smart contract integration.",
    tags: ["Solidity", "Web3", "Ethereum", "React"],
    results: "99.9% Security",
    x: 0.5,
    y: 0.1,
    z: 0.9,
    color: "#FFEAA7",
    size: 1.15,
    details: {
      challenge: "Client required a secure, transparent platform for decentralized transactions and smart contracts.",
      solution: "Built blockchain-based platform with smart contracts and intuitive web interface.",
      impact: "Achieved 99.9% security rating and processed over $10M in secure transactions."
    }
  },
  {
    id: 6,
    title: "IoT Smart Home",
    category: "Full-Stack",
    description: "Connected home automation system with voice control and energy optimization.",
    tags: ["IoT", "Node.js", "MongoDB", "Voice AI"],
    results: "60% Energy Savings",
    x: 0.3,
    y: 0.8,
    z: 0.6,
    color: "#DDA0DD",
    size: 1.05,
    details: {
      challenge: "Create an integrated smart home system that's easy to use and significantly reduces energy consumption.",
      solution: "Developed IoT platform with voice control, automated scheduling, and energy optimization algorithms.",
      impact: "Achieved 60% energy savings and 95% user satisfaction with voice command accuracy."
    }
  }
];

const connections = [
  { from: 1, to: 2, strength: 0.8 },
  { from: 2, to: 3, strength: 0.6 },
  { from: 3, to: 4, strength: 0.7 },
  { from: 4, to: 5, strength: 0.9 },
  { from: 5, to: 6, strength: 0.5 },
  { from: 6, to: 1, strength: 0.4 },
  { from: 1, to: 4, strength: 0.3 },
  { from: 2, to: 5, strength: 0.2 }
];

const categories = ["All", "Front-End", "Back-End", "Full-Stack"];

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
  }>>([]);

  // Filter projects based on category
  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  // Handle mouse movement for magnetic effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left) / rect.width);
        mouseY.set((e.clientY - rect.top) / rect.height);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Particle system
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => {
        const newParticles = prev
          .map(p => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            life: p.life - 0.02
          }))
          .filter(p => p.life > 0);

        // Add new particles occasionally
        if (Math.random() < 0.3) {
          newParticles.push({
            id: Date.now() + Math.random() * 1000,
            x: Math.random(),
            y: Math.random(),
            vx: (Math.random() - 0.5) * 0.002,
            vy: (Math.random() - 0.5) * 0.002,
            life: 1
          });
        }

        return newParticles;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const getProjectPosition = (project: Project, mouseXPos: number, mouseYPos: number) => {
    const magneticStrength = 0.1;
    const distance = Math.sqrt(
      Math.pow(project.x - mouseXPos, 2) + Math.pow(project.y - mouseYPos, 2)
    );

    if (distance < 0.2) {
      const force = (0.2 - distance) * magneticStrength;
      const angle = Math.atan2(mouseYPos - project.y, mouseXPos - project.x);
      return {
        x: project.x + Math.cos(angle) * force,
        y: project.y + Math.sin(angle) * force
      };
    }

    return { x: project.x, y: project.y };
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden min-h-screen">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${mouseXSpring}% ${mouseYSpring}%, 
              rgba(255, 255, 255, 0.1) 0%, 
              rgba(255, 255, 255, 0.05) 30%, 
              transparent 70%)`
          }}
          animate={{
            background: [
              `radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 70%)`,
              `radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 70%)`,
              `radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 70%)`
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating particles */}
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${particle.x * 100}%`,
              top: `${particle.y * 100}%`,
              opacity: particle.life * 0.6
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, particle.life * 0.6, 0]
            }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="liquid-glass-text">Project Constellation</span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Explore our universe of digital solutions - each project a star in the constellation of innovation
          </motion.p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center mb-16"
        >
          <div className="flex flex-wrap gap-4 bg-black/30 backdrop-blur-xl rounded-2xl p-2 border border-white/10">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl transition-all duration-500 text-sm sm:text-base ${selectedCategory === category
                  ? 'liquid-glass-cta text-white shadow-[0_0_30px_rgba(255,255,255,0.3)]'
                  : 'liquid-glass-button text-white/70 hover:text-white'
                  }`}
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
                {category !== 'All' && (
                  <motion.div
                    className="inline-block ml-2"
                    animate={{ rotate: selectedCategory === category ? 360 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {category === 'Front-End' && <Smartphone className="w-4 h-4" />}
                    {category === 'Back-End' && <Database className="w-4 h-4" />}
                    {category === 'Full-Stack' && <Globe className="w-4 h-4" />}
                  </motion.div>
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Constellation View */}
        <motion.div
          ref={containerRef}
          className="relative h-[800px] rounded-3xl bg-black/20 backdrop-blur-xl border border-white/10 overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {connections.map((connection, index) => {
              const fromProject = filteredProjects.find(p => p.id === connection.from);
              const toProject = filteredProjects.find(p => p.id === connection.to);

              if (!fromProject || !toProject) return null;

              return (
                <motion.line
                  key={`connection-${selectedCategory}-${connection.from}-${connection.to}-${index}`}
                  x1={`${fromProject.x * 100}%`}
                  y1={`${fromProject.y * 100}%`}
                  x2={`${toProject.x * 100}%`}
                  y2={`${toProject.y * 100}%`}
                  stroke="rgba(255, 255, 255, 0.2)"
                  strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: connection.strength,
                    opacity: hoveredProject === connection.from || hoveredProject === connection.to ? 0.8 : 0.3
                  }}
                  transition={{ duration: 2, delay: index * 0.1 }}
                />
              );
            })}
          </svg>

          {/* Project Orbs */}
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              const position = getProjectPosition(project, mouseXSpring.get(), mouseYSpring.get());

              return (
                <motion.div
                  key={`project-${selectedCategory}-${project.id}`}
                  className="absolute cursor-pointer group"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: 1,
                    scale: hoveredProject === project.id ? 1.3 : 1,
                    x: `${position.x * 100}%`,
                    y: `${position.y * 100}%`,
                    z: project.z * 100
                  }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    delay: index * 0.1
                  }}
                  style={{
                    left: `${project.x * 100}%`,
                    top: `${project.y * 100}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Outer Glow Ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `radial-gradient(circle, ${project.color}40 0%, transparent 70%)`,
                      filter: 'blur(20px)'
                    }}
                    animate={{
                      scale: hoveredProject === project.id ? [1, 1.5, 1] : [1, 1.2, 1],
                      opacity: [0.3, 0.7, 0.3]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  {/* Main Orb */}
                  <motion.div
                    className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-white/30 backdrop-blur-xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${project.color}20, ${project.color}40)`,
                      boxShadow: `0 0 30px ${project.color}60`
                    }}
                    animate={{
                      rotateY: [0, 360],
                      boxShadow: [
                        `0 0 20px ${project.color}40`,
                        `0 0 40px ${project.color}80`,
                        `0 0 20px ${project.color}40`
                      ]
                    }}
                    transition={{
                      rotateY: { duration: 10, repeat: Infinity, ease: "linear" },
                      boxShadow: { duration: 2, repeat: Infinity }
                    }}
                  >
                    <motion.div
                      animate={{
                        scale: hoveredProject === project.id ? [1, 1.2, 1] : 1,
                        rotate: [0, 360]
                      }}
                      transition={{
                        rotate: { duration: 8, repeat: Infinity, ease: "linear" }
                      }}
                    >
                      {project.category === 'Front-End' && <Smartphone className="w-6 h-6 text-white" />}
                      {project.category === 'Back-End' && <Database className="w-6 h-6 text-white" />}
                      {project.category === 'Full-Stack' && <Globe className="w-6 h-6 text-white" />}
                    </motion.div>
                  </motion.div>

                  {/* Floating Label */}
                  <motion.div
                    className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: hoveredProject === project.id ? 1 : 0.7,
                      y: hoveredProject === project.id ? 0 : 10,
                      scale: hoveredProject === project.id ? 1.1 : 1
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="liquid-glass-button px-3 py-1 rounded-lg text-xs sm:text-sm text-white text-center">
                      <div className="font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {project.title}
                      </div>
                      <div className="text-xs text-gray-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {project.results}
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating Particles around hovered orb */}
                  {hoveredProject === project.id && (
                    <>
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={`particle-${project.id}-${i}`}
                          className="absolute w-2 h-2 bg-white rounded-full"
                          style={{
                            left: '50%',
                            top: '50%'
                          }}
                          animate={{
                            x: [0, Math.cos(i * 45 * Math.PI / 180) * 60, 0],
                            y: [0, Math.sin(i * 45 * Math.PI / 180) * 60, 0],
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.1,
                            ease: "easeInOut"
                          }}
                        />
                      ))}
                    </>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Constellation Info */}
          <motion.div
            className="absolute top-4 right-4 liquid-glass-button px-4 py-2 rounded-xl"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 }}
          >
            <div className="flex items-center gap-2 text-white text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <Sparkles className="w-4 h-4" />
              <span>{filteredProjects.length} Projects Active</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-black/90 border border-white/20 backdrop-blur-xl rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
                initial={{ opacity: 0, scale: 0.8, rotateX: -15 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateX: 15 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Floating close button */}
                <motion.button
                  onClick={() => setSelectedProject(null)}
                  className="absolute -top-4 -right-4 w-10 h-10 liquid-glass-button rounded-full flex items-center justify-center text-white z-10"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="h-5 w-5" />
                </motion.button>

                {/* Project header with floating elements */}
                <div className="relative mb-6">
                  <motion.div
                    className="absolute -top-2 -left-2 w-4 h-4 rounded-full"
                    style={{ backgroundColor: selectedProject.color }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <motion.h3
                        className="text-2xl sm:text-3xl font-bold text-white mb-2"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {selectedProject.title}
                      </motion.h3>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <Badge
                          className="liquid-glass-button text-white border-white/20 mb-3"
                          style={{ backgroundColor: `${selectedProject.color}20` }}
                        >
                          {selectedProject.category}
                        </Badge>
                      </motion.div>
                    </div>

                    <motion.div
                      className="text-right"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="text-lg font-bold text-white mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {selectedProject.results}
                      </div>
                      <div className="text-sm text-gray-400">Impact Achieved</div>
                    </motion.div>
                  </div>
                </div>

                {/* Project details with staggered animations */}
                <motion.div className="space-y-6">
                  {[
                    { title: "Challenge", content: selectedProject.details.challenge, icon: Zap, delay: 0.5 },
                    { title: "Solution", content: selectedProject.details.solution, icon: Cpu, delay: 0.6 },
                    { title: "Impact", content: selectedProject.details.impact, icon: Sparkles, delay: 0.7 }
                  ].map((section) => {
                    const Icon = section.icon;
                    return (
                      <motion.div
                        key={section.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: section.delay }}
                        className="liquid-glass-button p-4 rounded-xl"
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <Icon className="w-5 h-5 text-white" />
                          <h4 className="text-lg font-semibold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            {section.title}
                          </h4>
                        </div>
                        <p className="text-gray-300 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          {section.content}
                        </p>
                      </motion.div>
                    );
                  })}

                  {/* Technology tags */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="pt-4"
                  >
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      <Code className="w-5 h-5" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.9 + tagIndex * 0.1 }}
                          className="px-3 py-1 liquid-glass-button text-white rounded-full text-sm border border-white/20"
                          style={{ fontFamily: 'Montserrat, sans-serif' }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Ready to Create Your Own
            <span className="liquid-glass-text block">Digital Constellation?</span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Let&apos;s build something extraordinary together and add your project to our universe of innovation
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="liquid-glass-cta text-white group text-lg px-8 py-4 h-auto"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
              onClick={() => document.getElementById('design-scratch')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Project
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.div>
            </Button>

            <Button
              size="lg"
              className="liquid-glass-button text-white text-lg px-8 py-4 h-auto"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
              onClick={() => document.getElementById('free-audit')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Schedule Discovery Call
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
