import React, { useState, useEffect } from 'react';
import { Code, Database, Server, Terminal, Github, Linkedin, Mail, ChevronDown, Award, GraduationCap, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import './index.css';

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll progress for progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const skills = {
    frontend: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Angular'],
    backend: ['Spring boot', 'Python', 'Django', 'REST APIs', 'GraphQL', 'JWT'],
    databases: ['MongoDB', 'PostgreSQL', 'MySQL', 'MariaDB', 'AmazonS3'],
    devops: ['Docker', 'Jenkins', 'Git', 'CI/CD', 'Linux']
  };

  const experience = [
    {
      title: 'Intern',
      company: 'Marketing Confort',
      period: '2025 (6 months)',
      description: [
        "Participated in the design and development of a company intranet based on a microservices architecture.",
        "Implemented absence management and secrets management modules with Next.js (frontend) and Spring Boot (backend).",
        "Developed the KeyStore module for secure management of technical keys and secrets (API keys, tokens, credentials).",
        "Built the employee profile page allowing collaborators to view their personal information in the intranet.",
        "Developed an intranet interface to consult and update backend configurations without accessing the source code."
      ],
      technologies: [
        'Spring Boot',
        'Next.js',
        'PostgreSQL',
        'Amazon S3',
        'Gitlab CI/CD',
        'Docker',
        'Kubernetes',
        'Keycloak',
        'Nexus'
      ]
    },
    {
      title: 'Intern',
      company: 'Devoteam Africa',
      period: '2024 (2 months)',
      description: [
        "Contributed to the design of an HRIS solution based on a microservices architecture.",
        "Developed the frontend with React and the backend with Spring Boot.",
        "Integrated APIs for user data management, leave management, and HR processes.",
        "Deployed the application on Kubernetes, using Docker for containerization and Docker Hub for image storage."
      ],
      technologies: [
        'Angular',
        'Spring Boot',
        'Spring Cloud',
        'Spring JPA',
        'MariaDB',
        'Amazon S3',
        'Kubernetes',
        'Docker',
        'Docker Hub'
      ]
    },
    {
      title: 'Intern',
      company: 'Orange Business Morocco',
      period: '2023 (1 month)',
      description: [
        "Developed a web application for creating, generating, and validating Network Service Descriptors (NSD).",
        "Implemented business validation rules to ensure NSD compliance.",
        "Integrated a system to publish or apply the generated NSDs to the MANO (Management and Orchestration) platform."
      ],
      technologies: ['Django', 'Bootstrap', 'HTML/CSS', 'JavaScript']
    }
  ];

  const projects = [
    {
      title: 'Urban Navigation System with Integrated Tram Guide',
      year: '2025',
      description: [
        "Developed a comprehensive urban navigation system with real-time tram tracking and route planning for Salé-Rabat.",
        "Integrated the Salé-Rabat tramway network for seamless public transportation navigation.",
        "Implemented secure authentication and authorization using Keycloak.",
        "Built interactive maps using Mapbox API for route visualization and real-time tram locations.",
        "Developed responsive frontend with Thymeleaf templates and Spring Boot backend."
      ],
      technologies: ['Spring Boot', 'Thymeleaf', 'Mapbox', 'Keycloak']
    },
    {
      title: 'Dev Helper Tools',
      year: '2025',
      description: [
        "Built a comprehensive suite of 11 essential developer utilities with a modern, premium dark theme interface.",
        "Implemented tools including JSON Formatter, Regex Tester, Color Palette Generator, Base64/URL Encoder, Hash Generator, and more.",
        "Created Mock Data Generator supporting 8 data types with multiple output formats (JSON, CSV, numbered list).",
        "Developed Diff Checker with visual line-by-line comparison and Markdown Previewer with live rendering.",
        "Designed with glassmorphism effects, smooth animations, and responsive layout for optimal user experience."
      ],
      technologies: [
        'React',
        'TypeScript',
        'Vite',
        'CSS3',
        'Web Crypto API'
      ]
    },
    {
      title: 'Arabic Dialects Translator',
      year: '2025',
      description: [
        "Developed a web application that translates text between multiple Arabic dialects, including Moroccan, Egyptian, Levantine, Saudi, and more.",
        "Implemented AI-powered translation using Google's Gemini API for context-aware and accurate dialect conversions.",
        "Designed a modern, clean, and user-friendly interface to simplify typing and real-time translation interactions.",
        "Added secure API-key onboarding allowing users to enter and store their Gemini API key on first use.",
        "Enhanced cross-dialect communication by enabling smooth, natural, and instant translation between regional variations of Arabic."
      ],
      technologies: [
        'React',
        'JavaScript',
        'Gemini API',
        'CSS3',
        'HTML5'
      ]
    },
    {
      title: 'Event and Attendance Management System',
      year: '2025',
      description: [
        "Designed and developed a microservices-based event management platform.",
        "Implemented service discovery with Eureka and centralized configuration with Spring Cloud Config.",
        "Built distributed tracing system using Zipkin for monitoring microservices.",
      ],
      technologies: ['Angular', 'Spring Boot', 'MySQL', 'Eureka', 'Spring Cloud Config', 'Keycloak', 'Zipkin']
    },
    {
      title: 'Parapharmacy E-commerce with AI Chatbot',
      year: '2024',
      description: [
        "Built a full-featured e-commerce platform for parapharmacy products.",
        "Integrated DialogFlow AI chatbot for customer support and product recommendations.",
        "Implemented product catalog, shopping cart, and order management system.",
        "Designed responsive UI using Bootstrap for optimal user experience."
      ],
      technologies: ['Django', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'MySQL', 'DialogFlow']
    }
  ];

  const education = [
    {
      degree: 'Computer Engineering and Networks',
      institution: 'EMSI',
      period: '2022 - 2025',
      location: 'Rabat'
    },
    {
      degree: 'Preparatory Cycle',
      institution: 'EMSI',
      period: '2020 - 2022',
      location: 'Rabat'
    },
    {
      degree: 'Baccalaureate in Physical Sciences',
      institution: 'Cadi Ayyad',
      period: '2020',
      location: 'Marrakech'
    }
  ];

  const certifications = [
    {
      title: 'Building Scalable Java Microservices with Spring Boot and Spring Cloud',
      issuer: 'Google Cloud - Coursera',
      icon: 'code'
    },
    {
      title: 'Agile with Atlassian Jira',
      issuer: 'Atlassian - Coursera',
      icon: 'briefcase'
    },
    {
      title: 'Modeling Software Systems using UML',
      issuer: 'The Hong Kong University of Science and Technology - Coursera',
      icon: 'award'
    },
    {
      title: 'Virtual Networks in Azure',
      issuer: 'Whizlabs - Coursera',
      icon: 'server'
    },
    {
      title: 'McKinsey Forward Program',
      issuer: 'McKinsey Academy',
      icon: 'award'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 origin-left z-50"
        style={{ scaleX: scrollProgress / 100 }}
      />

      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-purple-600 focus:text-white focus:rounded-lg"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Omar.dev
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.getElementById(item.toLowerCase());
                    const navHeight = 80;
                    const elementPosition = section.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - navHeight;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }}
                  className="text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded px-2 py-1"
                  aria-label={`Navigate to ${item} section`}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-purple-500 rounded p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden pb-4"
            >
              <div className="flex flex-col space-y-4">
                {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      const section = document.getElementById(item.toLowerCase());
                      const navHeight = 80;
                      const elementPosition = section.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }}
                    className="text-gray-300 hover:text-white transition-colors duration-200 px-4 py-2 rounded hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    aria-label={`Navigate to ${item} section`}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <main id="main-content">
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-block mb-6">
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 5, 0, -5, 0]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1 mx-auto"
                >
                  <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                    <Code className="w-16 h-16 text-purple-400" />
                  </div>
                </motion.div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Omar Stahi
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Full Stack Developer passionate about creating scalable, user-friendly web applications
              </p>
              <div className="flex justify-center">
                <motion.a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    const contactSection = document.getElementById('contact');
                    const navHeight = 80;
                    const elementPosition = contactSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - navHeight;
                    const startPosition = window.pageYOffset;
                    const distance = offsetPosition - startPosition;
                    const duration = 2000; // 2 seconds - adjust this for speed
                    let start = null;

                    const animation = (currentTime) => {
                      if (start === null) start = currentTime;
                      const timeElapsed = currentTime - start;
                      const progress = Math.min(timeElapsed / duration, 1);

                      // Easing function for smooth acceleration/deceleration
                      const ease = progress < 0.5
                        ? 4 * progress * progress * progress
                        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

                      window.scrollTo(0, startPosition + distance * ease);

                      if (timeElapsed < duration) {
                        requestAnimationFrame(animation);
                      }
                    };

                    requestAnimationFrame(animation);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 px-10 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all duration-200 text-lg"
                >
                  Let's Connect
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-4xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Skills & Expertise
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(skills).map(([category, techs]) => (
                <motion.div
                  key={category}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {category === 'frontend' && <Code className="w-6 h-6 text-purple-400 mr-2" />}
                    {category === 'backend' && <Server className="w-6 h-6 text-blue-400 mr-2" />}
                    {category === 'databases' && <Database className="w-6 h-6 text-green-400 mr-2" />}
                    {category === 'devops' && <Terminal className="w-6 h-6 text-orange-400 mr-2" />}
                    <h3 className="text-xl font-semibold capitalize">{category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.3)' }}
                        whileTap={{ scale: 0.95 }}
                        className="px-3 py-1 bg-white/10 rounded-full text-sm cursor-pointer transition-colors duration-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-4xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Professional Experience
            </motion.h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {experience.map((job, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-purple-400">{job.title}</h3>
                      <p className="text-xl text-gray-300">{job.company}</p>
                    </div>
                    <span className="text-gray-400 mt-2 md:mt-0">{job.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                    {job.description.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-4xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Featured Projects
            </motion.h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-purple-400">{project.title}</h3>
                    </div>
                    <span className="text-gray-400 mt-2 md:mt-0">{project.year}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                    {project.description.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-4xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Education & Certifications
            </motion.h2>

            {/* Education */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-purple-400 mb-6 text-center">Education</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
                  >
                    <div className="flex items-start mb-4">
                      <GraduationCap className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-bold mb-2">{edu.degree}</h4>
                        <p className="text-gray-300 text-sm mb-1">{edu.institution}</p>
                        <p className="text-gray-400 text-sm">{edu.period}</p>
                        <p className="text-gray-500 text-xs mt-1">{edu.location}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold text-purple-400 mb-6 text-center">Certifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-yellow-500/50 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300"
                  >
                    <div className="flex items-start mb-3">
                      <Award className="w-5 h-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                      <h4 className="text-base font-bold leading-tight">{cert.title}</h4>
                    </div>
                    <p className="text-gray-300 text-sm">{cert.issuer}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-4xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Let's Work Together
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I'm always interested in new opportunities and challenging projects.
              Feel free to reach out!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=omarstahi2002@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                aria-label="Send email to Omar Stahi"
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
                Email Me
              </a>

              <a
                href="https://github.com/stahiomar/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 border-2 border-purple-500 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500/20 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                aria-label="Visit Omar Stahi's GitHub profile"
              >
                <Github className="w-5 h-5" aria-hidden="true" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/omar-stahi/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 border-2 border-blue-500 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500/20 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                aria-label="Visit Omar Stahi's LinkedIn profile"
              >
                <Linkedin className="w-5 h-5" aria-hidden="true" />
                LinkedIn
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 Omar Stahi. All rights reserved.</p>
        </div>
      </footer>

      {/* Scroll to top button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 bg-purple-600 p-3 rounded-full shadow-lg hover:bg-purple-700 transition-colors duration-200 z-40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <ChevronDown className="w-6 h-6 rotate-180" aria-hidden="true" />
      </motion.button>
    </div>
  );
};

export default App;