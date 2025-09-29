import React from 'react';
import { Code, Database, Server, Globe, Smartphone, Terminal, Github, Linkedin, Mail, ChevronDown, Award, Briefcase, GraduationCap, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import './index.css';

const App = () => {
  const skills = {
    frontend: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Angular'],
    backend: ['Spring boot', 'Python', 'Django', 'REST APIs', 'GraphQL', 'JWT'],
    databases: ['MongoDB', 'PostgreSQL', 'MySQL', 'MariaDB', 'AmazonS3'],
    devops: ['Docker', 'Jenkins,', 'Git', 'CI/CD', 'Linux']
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
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              DevPortfolio
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-block mb-6">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1 mx-auto">
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                  <Code className="w-16 h-16 text-purple-400" />
                </div>
              </div>
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
                className="bg-gradient-to-r from-purple-600 to-pink-600 px-10 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 text-lg"
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
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
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
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors duration-200"
                    >
                      {tech}
                    </span>
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
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
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
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
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
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-yellow-500/30 transition-all duration-300"
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
              className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>

            <a
              href="https://github.com/stahiomar/"
              className="flex items-center gap-3 border-2 border-purple-500 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500/20 transition-all duration-200"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/omar-stahi/"
              className="flex items-center gap-3 border-2 border-blue-500 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500/20 transition-all duration-200"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </motion.div>
        </div>
      </section>

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
        className="fixed bottom-8 right-8 bg-purple-600 p-3 rounded-full shadow-lg hover:bg-purple-700 transition-colors duration-200 z-40"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ChevronDown className="w-6 h-6 rotate-180" />
      </motion.button>
    </div>
  );
};

export default App;