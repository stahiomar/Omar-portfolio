import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  ArrowUpRight,
  ChevronUp
} from 'lucide-react';
import { motion } from 'framer-motion';
import './index.css';

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    frontend: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Bootstrap',
      'Angular'
    ],
    backend: [
      'Spring boot',
      'Python',
      'Django',
      'REST APIs',
      'GraphQL',
      'JWT'
    ],
    databases: [
      'MongoDB',
      'PostgreSQL',
      'MySQL',
      'MariaDB',
      'AmazonS3'
    ],
    devops: [
      'Docker',
      'Jenkins',
      'Git',
      'CI/CD',
      'Linux',
      'Kubernetes',
      'Helm',
      'Terraform',
      'Gitlab CI/CD'
    ]
  };

  const experience = [
    {
      title: 'Intern',
      company: 'Marketing Confort',
      period: '2025 (6 months)',
      description: [
        'Developed a company intranet based on a microservices architecture.',
        'Implemented business modules using Spring Boot and React/Next.js.',
        'Designed and maintained robust GitLab CI/CD pipelines to automate build, integration, deployment, and delivery processes.',
        'Developed the KeyStore module for secure management of technical keys and secrets (API keys, tokens, and credentials).',
        'Containerized applications with Docker and deployed them on Kubernetes.',
        'Collaborated with the project team on the functional and technical evolution of the platform.',
        'Developed a local conversational chatbot powered by an open-source LLM running offline with Ollama.'
      ],
      technologies: [
        'Spring Boot',
        'Spring JPA',
        'Spring Cloud',
        'Spring Security',
        'React',
        'Next.js',
        'PostgreSQL',
        'Amazon S3',
        'JWT',
        'OAuth',
        'Keycloak',
        'Git',
        'GitLab CI/CD',
        'Docker',
        'Kubernetes',
        'Nexus',
        'LLM',
        'Ollama'
      ]
    },
    {
      title: 'Intern',
      company: 'Devoteam Africa',
      period: '2024 (2 months)',
      description: [
        'Contributed to the design of an HRIS solution based on a microservices architecture.',
        'Developed the frontend with React and the backend with Spring Boot.',
        'Integrated APIs for user data management, leave management, and HR processes.',
        'Deployed the application on Kubernetes, using Docker for containerization and Docker Hub for image storage.'
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
        'Developed a web application for creating, generating, and validating Network Service Descriptors (NSD).',
        'Implemented business validation rules to ensure NSD compliance.',
        'Integrated a system to publish or apply the generated NSDs to the MANO (Management and Orchestration) platform.'
      ],
      technologies: ['Django', 'Bootstrap', 'HTML/CSS', 'JavaScript']
    }
  ];

  const projects = [
    {
      title: 'RepoMind – AI-Powered Developer Productivity Platform',
      year: '2026',
      description: [
        "Designed and developed RepoMind, an AI-driven platform acting as a 'second brain' for developers to improve productivity and knowledge sharing.",
        "Implemented AI daily digests that automatically summarize a developer’s daily development activity for standups, work logs, and progress tracking.",
        "Developed an 'Explain Repo' feature specifically designed to help new team members onboard faster by analyzing the repository and generating clear explanations of the project’s purpose, architecture, key design decisions, and setup instructions.",
        'Integrated Gemini Flash for fast and efficient repository analysis and natural language summarization.',
        'Built a scalable backend using Node.js, with PostgreSQL for persistent data storage and Redis for caching and performance optimization.',
        'Created a modern, responsive frontend using React and TypeScript.'
      ],
      technologies: [
        'React',
        'TypeScript',
        'Node.js',
        'PostgreSQL',
        'Redis',
        'Gemini Flash'
      ]
    },
    {
      title: 'Urban Navigation System with Integrated Tram Guide',
      year: '2025',
      description: [
        'Developed a comprehensive urban navigation system with real-time tram tracking and route planning for Salé-Rabat.',
        'Integrated the Salé-Rabat tramway network for seamless public transportation navigation.',
        'Implemented secure authentication and authorization using Keycloak.',
        'Built interactive maps using Mapbox API for route visualization and real-time tram locations.',
        'Developed responsive frontend with Thymeleaf templates and Spring Boot backend.'
      ],
      technologies: ['Spring Boot', 'Thymeleaf', 'Mapbox', 'Keycloak']
    },
    {
      title: 'Dev Helper Tools',
      year: '2025',
      description: [
        'Built a comprehensive suite of 11 essential developer utilities with a modern, premium dark theme interface.',
        'Implemented tools including JSON Formatter, Regex Tester, Color Palette Generator, Base64/URL Encoder, Hash Generator, and more.',
        'Created Mock Data Generator supporting 8 data types with multiple output formats (JSON, CSV, numbered list).',
        'Developed Diff Checker with visual line-by-line comparison and Markdown Previewer with live rendering.',
        'Designed with glassmorphism effects, smooth animations, and responsive layout for optimal user experience.'
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
        'Developed a web application that translates text between multiple Arabic dialects, including Moroccan, Egyptian, Levantine, Saudi, and more.',
        "Implemented AI-powered translation using Google's Gemini API for context-aware and accurate dialect conversions.",
        'Designed a modern, clean, and user-friendly interface to simplify typing and real-time translation interactions.',
        'Added secure API-key onboarding allowing users to enter and store their Gemini API key on first use.',
        'Enhanced cross-dialect communication by enabling smooth, natural, and instant translation between regional variations of Arabic.'
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
        'Designed and developed a microservices-based event management platform.',
        'Implemented service discovery with Eureka and centralized configuration with Spring Cloud Config.',
        'Built distributed tracing system using Zipkin for monitoring microservices.'
      ],
      technologies: [
        'Angular',
        'Spring Boot',
        'MySQL',
        'Eureka',
        'Spring Cloud Config',
        'Keycloak',
        'Zipkin'
      ]
    },
    {
      title: 'Parapharmacy E-commerce with AI Chatbot',
      year: '2024',
      description: [
        'Built a full-featured e-commerce platform for parapharmacy products.',
        'Integrated DialogFlow AI chatbot for customer support and product recommendations.',
        'Implemented product catalog, shopping cart, and order management system.',
        'Designed responsive UI using Bootstrap for optimal user experience.'
      ],
      technologies: [
        'Django',
        'HTML',
        'CSS',
        'JavaScript',
        'Bootstrap',
        'MySQL',
        'DialogFlow'
      ]
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
      title:
        'Building Scalable Java Microservices with Spring Boot and Spring Cloud',
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
      issuer:
        'The Hong Kong University of Science and Technology - Coursera',
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

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);

    const section = document.getElementById(id);

    if (section) {
      const navHeight = 72;
      const position =
        section.getBoundingClientRect().top +
        window.scrollY -
        navHeight;

      window.scrollTo({
        top: position,
        behavior: 'smooth'
      });
    }
  };

  const reveal = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <div className="site-shell">
      {/* Scroll Progress */}
      <motion.div
        className="scroll-progress"
        style={{
          width: `${scrollProgress}%`
        }}
      />

      {/* Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only"
      >
        Skip to main content
      </a>

      <div className="content-layer">

        {/* ================= NAV ================= */}

        <nav
          className="nav"
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="container nav-inner">

            <button
              className="logo bg-transparent border-0 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
            >
              <span className="logo-mark">O</span>
              <span>omar.dev</span>
              <span className="logo-dot" />
            </button>

            <div className="nav-links">
              {['about', 'experience', 'projects', 'contact'].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="nav-link bg-transparent border-0 cursor-pointer"
                  >
                    {item}
                  </button>
                )
              )}
            </div>

            <button
              className="menu-button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={
                mobileMenuOpen ? 'Close menu' : 'Open menu'
              }
            >
              {mobileMenuOpen ? (
                <X size={18} />
              ) : (
                <Menu size={18} />
              )}
            </button>

          </div>

          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="bg-[#08090b] border-b border-white/[.09]"
            >
              <div className="container flex flex-col py-5">
                {['about', 'experience', 'projects', 'contact'].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className="text-left py-3 bg-transparent border-0 text-[#8b919b] font-mono text-xs uppercase"
                    >
                      / {item}
                    </button>
                  )
                )}
              </div>
            </motion.div>
          )}
        </nav>

        <main id="main-content">

          {/* ================= HERO ================= */}

          <section className="hero">
            <div className="container hero-grid">

              <motion.div
                initial="hidden"
                animate="visible"
                variants={reveal}
              >
                <div className="hero-kicker">
                  <span className="status-dot" />
                  Available for opportunities
                </div>

                <h1 className="hero-title">
                  <span>Omar</span>
                  <span className="outline">Stahi</span>
                </h1>

                <p className="hero-description">
                  Full Stack Developer passionate about creating scalable,
                  user-friendly web applications
                </p>

                <div className="hero-actions">

                  <button
                    onClick={() => scrollToSection('contact')}
                    className="primary-button border-0 cursor-pointer"
                  >
                    Let's Connect
                    <ArrowUpRight size={15} className="ml-2" />
                  </button>

                  <button
                    onClick={() => scrollToSection('projects')}
                    className="secondary-button bg-transparent cursor-pointer"
                  >
                    Explore Projects
                  </button>

                </div>
              </motion.div>

              <motion.div
                className="hero-terminal"
                initial={{
                  opacity: 0,
                  x: 30
                }}
                animate={{
                  opacity: 1,
                  x: 0
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.25
                }}
              >
                <div className="terminal-header">
                  <span className="terminal-dot" />
                  <span className="terminal-dot" />
                  <span className="terminal-dot" />
                  <span className="terminal-name">
                    profile.sh
                  </span>
                </div>

                <div className="terminal-body">

                  <div className="terminal-line">
                    <span className="terminal-prompt">$</span>
                    <span>whoami</span>
                  </div>

                  <div className="terminal-line">
                    <span>&gt;</span>
                    <span className="terminal-value">
                      Omar Stahi
                    </span>
                  </div>

                  <br />

                  <div className="terminal-line">
                    <span className="terminal-prompt">$</span>
                    <span>cat role.txt</span>
                  </div>

                  <div className="terminal-line">
                    <span>&gt;</span>
                    <span className="terminal-highlight">
                      Full Stack Developer
                    </span>
                  </div>

                  <br />

                  <div className="terminal-line">
                    <span className="terminal-prompt">$</span>
                    <span>ls ./interests</span>
                  </div>

                  <div className="terminal-line">
                    <span>&gt;</span>
                    <span className="terminal-value">
                      scalable-systems
                    </span>
                  </div>

                  <div className="terminal-line">
                    <span>&gt;</span>
                    <span className="terminal-value">
                      cloud-native
                    </span>
                  </div>

                  <div className="terminal-line">
                    <span>&gt;</span>
                    <span className="terminal-value">
                      developer-tools
                    </span>
                  </div>

                </div>
              </motion.div>

            </div>
          </section>


          {/* ================= SKILLS ================= */}

          <section
            id="about"
            className="section"
          >
            <div className="container">

              <div className="section-label">
                <span className="section-number">01</span>
                Capabilities
              </div>

              <div className="skills-layout">

                <motion.div
                  className="section-intro"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={reveal}
                >
                  <h2>
                    Tools I use
                    <br />
                    to build.
                  </h2>

                  <p>
                    A practical stack spanning frontend,
                    backend, databases and DevOps.
                  </p>
                </motion.div>

                <div className="skill-matrix">

                  {Object.entries(skills).map(
                    ([category, techs], index) => (
                      <motion.div
                        key={category}
                        className="skill-row"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={reveal}
                        transition={{
                          delay: index * 0.08
                        }}
                      >

                        <div className="skill-category">
                          <span className="skill-index">
                            0{index + 1}
                          </span>
                          {category}
                        </div>

                        <div className="skill-list">
                          {techs.map((tech) => (
                            <span
                              key={tech}
                              className="skill-tag"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                      </motion.div>
                    )
                  )}

                </div>

              </div>

            </div>
          </section>


          {/* ================= EXPERIENCE ================= */}

          <section
            id="experience"
            className="section experience-section"
          >
            <div className="container">

              <div className="section-label">
                <span className="section-number">02</span>
                Experience
              </div>

              <div className="timeline">

                {experience.map((job, index) => (
                  <motion.article
                    key={index}
                    className="experience-item"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true,
                      amount: 0.15
                    }}
                    variants={reveal}
                  >

                    <span className="timeline-marker" />

                    <div className="experience-date">
                      {job.period}
                    </div>

                    <div className="experience-content">

                      <div className="experience-heading">

                        <div>
                          <h3 className="experience-title">
                            {job.title}
                          </h3>

                          <div className="experience-company">
                            {job.company}
                          </div>

                          <div className="experience-period-mobile">
                            {job.period}
                          </div>
                        </div>

                      </div>

                      <ul className="experience-description">
                        {job.description.map(
                          (line, i) => (
                            <li key={i}>
                              {line}
                            </li>
                          )
                        )}
                      </ul>

                      <div className="tech-list">
                        {job.technologies.map(
                          (tech) => (
                            <span
                              key={tech}
                              className="tech-tag"
                            >
                              {tech}
                            </span>
                          )
                        )}
                      </div>

                    </div>

                  </motion.article>
                ))}

              </div>

            </div>
          </section>


          {/* ================= PROJECTS ================= */}

          <section
            id="projects"
            className="section"
          >
            <div className="container">

              <div className="section-label">
                <span className="section-number">03</span>
                Selected work
              </div>

              <div className="projects-header">

                <h2>
                  Things I've
                  <br />
                  built.
                </h2>

                <span className="projects-count">
                  06 PROJECTS / 2024—2026
                </span>

              </div>

              <div className="project-grid">

                {projects.map((project, index) => (
                  <motion.article
                    key={index}
                    className={`project-card ${index === 0 ? 'large' : ''
                      }`}
                    initial={{
                      opacity: 0,
                      y: 35
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0
                    }}
                    viewport={{
                      once: true,
                      amount: 0.08
                    }}
                    transition={{
                      duration: 0.55,
                      delay: (index % 2) * 0.08
                    }}
                  >

                    <span className="project-number">
                      PROJECT_{String(index + 1).padStart(2, '0')}
                    </span>

                    <span className="project-year">
                      {project.year}
                    </span>

                    <h3 className="project-title">
                      {project.title}
                    </h3>

                    <ul className="project-description">
                      {project.description.map(
                        (line, i) => (
                          <li key={i}>
                            {line}
                          </li>
                        )
                      )}
                    </ul>

                    <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="
        inline-flex
        items-center
        whitespace-nowrap
        shrink-0
        px-3
        py-1.5
        rounded-md
        border border-white/10
        bg-white/[0.03]
        text-xs
        font-mono
        text-gray-400
        transition-all
        duration-200
        hover:border-purple-400/40
        hover:bg-purple-500/10
        hover:text-purple-300
      "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </motion.article>
                ))}

              </div>

            </div>
          </section>


          {/* ================= EDUCATION ================= */}

          <section
            className="section education-section"
          >
            <div className="container">

              <div className="section-label">
                <span className="section-number">04</span>
                Background
              </div>

              <div className="section-intro mb-12">
                <h2>
                  Education &
                  <br />
                  certifications.
                </h2>
              </div>

              <div className="edu-grid">

                {education.map((edu, index) => (
                  <motion.article
                    key={index}
                    className="edu-card"
                    initial={{
                      opacity: 0,
                      y: 25
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0
                    }}
                    viewport={{
                      once: true
                    }}
                    transition={{
                      delay: index * 0.1
                    }}
                  >

                    <span className="edu-number">
                      0{index + 1}
                    </span>

                    <h3 className="edu-degree">
                      {edu.degree}
                    </h3>

                    <div className="edu-institution">
                      {edu.institution}
                    </div>

                    <div className="edu-meta">
                      <span>{edu.period}</span>
                      <span>{edu.location}</span>
                    </div>

                  </motion.article>
                ))}

              </div>

              <div className="cert-title">
                Certifications
              </div>

              <div className="cert-grid">

                {certifications.map(
                  (cert, index) => (
                    <motion.article
                      key={index}
                      className="cert-card"
                      initial={{
                        opacity: 0,
                        y: 20
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0
                      }}
                      viewport={{
                        once: true
                      }}
                      transition={{
                        delay: index * 0.08
                      }}
                    >

                      <span className="cert-index">
                        CERT_{String(index + 1).padStart(2, '0')}
                      </span>

                      <h3 className="cert-name">
                        {cert.title}
                      </h3>

                      <div className="cert-issuer">
                        {cert.issuer}
                      </div>

                    </motion.article>
                  )
                )}

              </div>

            </div>
          </section>


          {/* ================= CONTACT ================= */}

          <section
            id="contact"
            className="contact-section"
          >
            <div className="container">

              <motion.div
                className="contact-content"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={reveal}
              >

                <div className="contact-eyebrow">
                  05 / Get in touch
                </div>

                <h2 className="contact-title">
                  Let's work
                  <br />
                  together.
                </h2>

                <p className="contact-description">
                  I'm always interested in new opportunities
                  and challenging projects. Feel free to reach out!
                </p>

                <div className="contact-links">

                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=omarstahi2002@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                    aria-label="Send email to Omar Stahi"
                  >
                    <Mail size={15} />
                    Email Me
                    <ArrowUpRight size={13} />
                  </a>

                  <a
                    href="https://github.com/stahiomar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                    aria-label="Visit Omar Stahi's GitHub profile"
                  >
                    <Github size={15} />
                    GitHub
                    <ArrowUpRight size={13} />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/omar-stahi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                    aria-label="Visit Omar Stahi's LinkedIn profile"
                  >
                    <Linkedin size={15} />
                    LinkedIn
                    <ArrowUpRight size={13} />
                  </a>

                </div>

              </motion.div>

            </div>
          </section>

        </main>


        {/* ================= FOOTER ================= */}

        <footer className="footer">

          <div className="container footer-inner">

            <span>
              © 2025 Omar Stahi. All rights reserved.
            </span>

            <span className="footer-status">
              ● SYSTEM ONLINE
            </span>

          </div>

        </footer>


        {/* ================= SCROLL TOP ================= */}

        <motion.button
          whileHover={{
            y: -4
          }}
          whileTap={{
            scale: .95
          }}
          className="scroll-top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            })
          }
          aria-label="Scroll to top"
        >
          <ChevronUp size={18} />
        </motion.button>

      </div>
    </div>
  );
};

export default App;