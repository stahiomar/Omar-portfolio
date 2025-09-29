import React from 'react';
import { Code, Database, Server, Globe, Smartphone, Terminal, Github, Linkedin, Mail, ChevronDown, Award, Briefcase, GraduationCap, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import './index.css';

const App = () => {
  const skills = {
    frontend: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Angular'],
    backend: ['Node.js', 'Express', 'Python', 'Django', 'REST APIs', 'GraphQL', 'Socket.io', 'JWT'],
    databases: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase'],
    devops: ['Docker', 'AWS', 'Git', 'GitHub Actions', 'CI/CD', 'Linux', 'Nginx']
  };

  const experience = [
    {
      title: 'Stagiaire',
      company: 'Marketing Confort',
      period: '2025 (6 mois)',
      description: [
        "Participation à la conception et au développement d’un intranet d’entreprise basé sur une architecture microservices.",
        "Implémentation de module de gestion des absences et de gestion des secrets avec Next.js (frontend) et Spring Boot (backend).",
        "Implémentation du module KeyStore permettant la gestion sécurisée des clés et secrets techniques (API keys, tokens, identifiants).",
        "Développement de la page profil employé permettant à chaque collaborateur de consulter ses informations personnelles dans l’intranet.",
        "Développement d’une interface intranet pour consulter et modifier les configurations backend sans accéder au code source."
      ],
      technologies: ['Spring Boot', 'Next.js', 'PostgreSQL', 'Amazon S3', 'Gitlab CI/CD', 'Docker', 'Kubernetes', 'Keycloak', 'Nexus']
    },
    {
      title: 'Stagiaire',
      company: 'Devoteam Africa',
      period: '2024 (2 mois)',
      description: [
        "Participation à la conception d'une solution SIRH basée sur une architecture microservices.",
        "Développement du frontend avec React et du backend avec Spring Boot.",
        "Intégration des APIs pour la gestion des données utilisateurs, les congés et des processus RH.",
        "Déploiement de l'application sur Kubernetes, en utilisant Docker pour la containerisation et Docker Hub pour le stockage des images."
      ],
      technologies: ['Angular', 'Spring Boot', 'Spring Cloud', 'Spring JPA', 'MariaDB', 'Amazon S3', 'Kubernetes', 'Docker', 'Docker Hub']
    },
    {
      title: 'Stagiaire',
      company: 'Orange Business Maroc',
      period: '2023 (1 mois)',
      description: [
        "Développement d’une application web pour la création, la génération et la validation de Network Service Descriptors (NSD).",
        "Implémentation de règles de validation métier pour garantir la conformité des NSD.",
        "Intégration d’un système permettant de publier ou appliquer les NSD générés vers la plateforme MANO (Management and Orchestration)."
      ],
      technologies: ['Django', 'Bootstrap', 'HTML/CSS', 'JavaScript']
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Technology',
      year: '2019',
      gpa: '3.8/4.0'
    },
    {
      degree: 'Full Stack Web Development Certification',
      institution: 'Code Academy',
      year: '2018'
    }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured online shopping platform with payment integration, user authentication, and admin dashboard.',
      technologies: ['React', 'Node.js', 'Stripe', 'MongoDB'],
      live: '#',
      github: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features.',
      technologies: ['Next.js', 'Socket.io', 'PostgreSQL', 'Tailwind CSS'],
      live: '#',
      github: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with location-based forecasts, historical data visualization, and responsive design.',
      technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'CSS3'],
      live: '#',
      github: '#'
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
              >
                View My Work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-purple-500 px-8 py-3 rounded-lg font-semibold hover:bg-purple-500/20 transition-all duration-200"
              >
                Contact Me
              </motion.button>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <div className="flex items-center mb-4">
                  <GraduationCap className="w-6 h-6 text-green-400 mr-3" />
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                </div>
                <p className="text-gray-300 mb-2">{edu.institution}</p>
                <p className="text-gray-400">{edu.year}</p>
                {edu.gpa && <p className="text-sm text-gray-500 mt-2">GPA: {edu.gpa}</p>}
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-yellow-400 mr-3" />
                <h3 className="text-xl font-bold">AWS Certified Developer</h3>
              </div>
              <p className="text-gray-300 mb-2">Amazon Web Services</p>
              <p className="text-gray-400">2023</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-blue-400 mr-3" />
                <h3 className="text-xl font-bold">MongoDB Certified Developer</h3>
              </div>
              <p className="text-gray-300 mb-2">MongoDB Inc.</p>
              <p className="text-gray-400">2022</p>
            </motion.div>
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
              href="mailto:omarstahi2002@gmail.com"
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