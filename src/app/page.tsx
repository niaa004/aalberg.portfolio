'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, ChevronDown, Code2, Smartphone, Server, Database, Cloud, Users } from 'lucide-react';

const projects = [
  {
    id: 'leanbox',
    name: 'LeanBox',
    category: 'Featured Project',
    description: 'A behavioral and health app using continuous glucose monitoring (CGM) as biofeedback. Helps users reduce weight, improve metabolic health, staying within eating windows and glucose ranges for metabolic stability.',
    tech: ['CGM Data', 'Biofeedback', 'Health Tech', 'Behavioral Science'],
    link: 'https://leanbox.no',
    featured: true,
    color: 'from-emerald-500/20 to-teal-500/20',
    images: [
      '/album/aicoach-onboarding-pt1.png',
      '/album/blodsukkergraf-onboarding-pt2.png',
      '/album/leanscore-onboarding-pt3.png',
      '/album/spisevindu-onboarding-pt4.png',
      '/album/dashboard-pt5.png',
      '/album/blodsukker-pt6.png',
      '/album/sosial-pt7.png',
      '/album/settings-pt8.png',
    ],
  },
  {
    id: 'dugnadhub',
    name: 'DugnadHub',
    category: 'Cross-Platform App',
    description: 'Final exam project for TDS200 (Cross-platform development). Community volunteering platform built with modern cross-platform architecture.',
    tech: ['TypeScript', 'Cross-Platform'],
    link: 'https://github.com/niaa004/TDS200-H25-DugnadHub',
    grade: 'A',
  },
  {
    id: 'ios-exam',
    name: 'iOS App Project',
    category: 'Mobile Development',
    description: 'Final exam project for PG5602 (iOS Programming). Native iOS application showcasing mobile development principles and best practices.',
    tech: ['Swift', 'iOS'],
    link: 'https://github.com/niaa004/iOS-exam-h25',
    grade: 'A',
  },
  {
    id: 'python-exam',
    name: 'Python Programming Exam',
    category: 'Backend Development',
    description: 'Final exam project for PGR107 (Python Programming). Comprehensive Python application demonstrating programming fundamentals and advanced concepts.',
    tech: ['Python'],
    link: 'https://github.com/niaa004/python-programming-exam',
    grade: 'A',
  },
  {
    id: 'c-exam',
    name: 'C Programming - Linux',
    category: 'Systems Programming',
    description: 'Final exam project for PG3401 (C Programming). Low-level systems programming in Linux environment with focus on performance and efficiency.',
    tech: ['C', 'Linux'],
    link: 'https://github.com/niaa004/c-programming-linux-exam',
    grade: 'A',
  },
  {
    id: 'staffing',
    name: 'Consultant Staffing API',
    category: 'Microservices',
    description: 'Two FastAPI microservices (Consultant API + Tool API) running via Docker Compose. Production-ready backend architecture.',
    tech: ['Python', 'FastAPI', 'Docker', 'Microservices'],
    link: 'https://github.com/niaa004/mcp-case-consultant-staffing',
  },
];

const education = [
  {
    title: 'Bachelor in Fullstack Developer',
    institution: 'Kristiania University of Applied Sciences',
    status: 'Graduating Spring 2026',
    details: [
      'CTO at Leanbox AS (Sep 2025 - Present)',
      'Student Assistant (Aug 2025 - Present)',
    ],
  },
  {
    title: 'Student Assistant - Teaching',
    institution: 'Kristiania University of Applied Sciences',
    status: 'Part-time',
    details: [
      '2025: Databases, Technology Implementation, Web Development',
      '2026: Programming C (Linux), Ethics & Social Responsibility, Digital Strategy & Business Development',
    ],
  },
];

export default function Page() {
  const [activeImageIndex, setActiveImageIndex] = React.useState(0);
  const [isImageExpanded, setIsImageExpanded] = React.useState(false);
  const [expandedProjectId, setExpandedProjectId] = React.useState<string | null>(null);

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 text-gray-900 dark:text-white transition-colors">
      {/* HERO SECTION */}
      <header className="relative overflow-hidden bg-white dark:bg-slate-950 border-b border-gray-100 dark:border-slate-900">
        {/* Gradient backdrop */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 dark:bg-blue-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/20 dark:bg-purple-900/20 rounded-full blur-3xl" />

        <div className="relative px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-32 lg:pt-28 lg:pb-36">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left - Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="inline-block mb-7">
                  <span className="px-4 py-2 rounded-full text-sm font-medium border border-blue-200/80 dark:border-blue-500/30 bg-white/80 dark:bg-slate-900/80 text-blue-700 dark:text-blue-300 backdrop-blur-sm">
                    Full-Stack Developer & CTO
                  </span>
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-7 text-gray-900 dark:text-white">
                  Nicolai
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                    Aalberg
                  </span>
                </h1>

                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-7 max-w-2xl leading-relaxed">
                  With a deep commitment to user-centered design and operational excellence, I'm building innovative health technology that genuinely improves lives. I'm currently the <strong>CTO at Leanbox AS</strong>, where I architect fullstack solutions for behavioral health and metabolic wellness through CGM biofeedback systems.
                </p>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl leading-relaxed">
                  Pursuing my bachelor's in IT (graduating Spring 2026), I combine technical expertise in frontend, mobile, and backend development with a passion for solving real-world problems. To me, coding isn't just about making things work, it's about understanding user needs, thinking strategically, and building solutions that create genuine impact.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12 sm:mb-14">
                  <a
                    href="#projects"
                    className="inline-flex h-12 items-center justify-center gap-2 px-7 rounded-full text-sm sm:text-base font-semibold bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-gray-50 text-white dark:text-slate-900 transition-all duration-200"
                  >
                    View My Work <ArrowRight size={18} />
                  </a>
                  <a
                    href="mailto:nicolaiaalberg@icloud.com"
                    className="inline-flex h-12 items-center justify-center px-7 rounded-full text-sm sm:text-base font-semibold border border-gray-300 dark:border-slate-700 text-gray-900 dark:text-white hover:border-gray-400 dark:hover:border-slate-600 transition-all duration-200"
                  >
                    Get in Touch
                  </a>
                </div>
              </motion.div>

              {/* Right - Profile Picture */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="block mt-6 sm:mt-8 lg:mt-0"
              >
                <div className="relative w-full aspect-square max-w-[220px] sm:max-w-xs lg:max-w-md mx-auto">
                  {/* Outer shadow layer */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30 dark:from-blue-600/40 dark:to-purple-600/40 rounded-2xl blur-3xl" />
                  {/* Inner gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10 rounded-2xl blur-2xl" />
                  {/* Image with shadow */}
                  <img
                    src="/album/profile-picture.png"
                    alt="Nicolai Aalberg"
                    className="relative w-full h-full object-cover rounded-2xl shadow-2xl border border-gray-200 dark:border-slate-700"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ChevronDown className="text-gray-400 dark:text-gray-600" />
          </motion.div>
        </motion.div>
      </header>

      {/* PROJECTS SECTION */}
      <section id="projects" className="relative px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 sm:mb-20"
          >
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Featured Projects</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-2 mb-6 text-gray-900 dark:text-white">
              Work I'm Proud Of
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
              A curated selection of projects, exam work, and innovations built across different platforms and technologies.
            </p>
          </motion.div>

          {/* Projects Grid */}
          {/* Featured LeanBox Project */}
          <div className="mb-12 sm:mb-16">
            {projects
              .filter((p) => p.id === 'leanbox')
              .map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  {project.images && project.images.length > 0 ? (
                    <div
                      onClick={() => setExpandedProjectId(project.id)}
                      className="group flex flex-col h-full p-7 rounded-2xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 hover:border-gray-300 dark:hover:border-slate-600 hover:shadow-lg hover:shadow-slate-900/5 dark:hover:shadow-black/10 transition-all duration-200 cursor-pointer relative overflow-hidden"
                    >
                      {/* Image for LeanBox */}
                      <div className="relative h-96 -mx-7 -mt-7 mb-5 overflow-hidden rounded-t-2xl bg-gray-100 dark:bg-slate-800 flex items-center justify-center">
                        {project.images && (
                          <>
                            <motion.img
                              key={`${project.id}-${activeImageIndex}`}
                              src={project.images[activeImageIndex]}
                              alt={`${project.name} screenshot`}
                              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.3 }}
                            />
                            {/* Image Navigation - Compact */}
                            <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-1 p-2 bg-gradient-to-t from-black/50 to-transparent">
                              {project.images.map((_, imgIdx) => (
                                <button
                                  key={imgIdx}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveImageIndex(imgIdx);
                                  }}
                                  className={`h-1.5 rounded-full transition-all ${
                                    imgIdx === activeImageIndex
                                      ? 'bg-white w-4'
                                      : 'bg-white/40 w-1.5 hover:bg-white/60'
                                  }`}
                                  aria-label={`Go to image ${imgIdx + 1}`}
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </div>

                      <div>
                        <div className="flex items-start justify-between mb-3">
                          <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            {project.category}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {project.name}
                        </h3>

                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 rounded text-xs font-medium bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold transition-all duration-200 mt-auto">
                        View Gallery <ExternalLink size={16} />
                      </div>
                    </div>
                  ) : null}
                </motion.div>
              ))}
          </div>

          {/* Other Projects Grid */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Other Projects & Exam Work</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects
                .filter((p) => p.id !== 'leanbox')
                .map((project, idx) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex flex-col h-full p-7 rounded-2xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 hover:border-gray-300 dark:hover:border-slate-600 hover:shadow-lg hover:shadow-slate-900/5 dark:hover:shadow-black/10 transition-all duration-200"
                    >
                      <div>
                        <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          {project.category}
                        </span>

                        <h3 className="text-xl font-bold mb-2 mt-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {project.name}
                        </h3>

                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 rounded text-xs font-medium bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold transition-all duration-200 mt-auto">
                        View <ExternalLink size={16} />
                      </div>
                    </a>
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 border-y border-gray-100 dark:border-slate-900 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-16"
          >
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Technical Expertise</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-2 mb-6 text-gray-900 dark:text-white">
              Full-Stack Capabilities
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
              From mobile apps to cloud architecture, I bring comprehensive technical expertise combined with product thinking and leadership experience.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Mobile Development',
                skills: ['React Native', 'Swift (iOS)', 'Kotlin (Android)', 'Navigation Patterns', 'Architecture'],
                icon: Smartphone,
              },
              {
                title: 'Web Development',
                skills: ['React', 'Next.js', 'TypeScript', 'HTML5/CSS3', 'Responsive UI'],
                icon: Code2,
              },
              {
                title: 'Backend & APIs',
                skills: ['REST/JSON APIs', 'Authentication', 'C# & .NET', 'Node.js', 'Webhooks'],
                icon: Server,
              },
              {
                title: 'Databases & Data',
                skills: ['SQL', 'SQLite/MySQL', 'Data Modeling', 'Async Handling', 'State Management'],
                icon: Database,
              },
              {
                title: 'DevOps & Cloud',
                skills: ['Docker', 'CI/CD (GitHub Actions)', 'Azure', 'Git/GitHub', 'Infrastructure as Code'],
                icon: Cloud,
              },
              {
                title: 'Leadership & Process',
                skills: ['Technical Leadership', 'Code Review', 'Engineering Hygiene', 'Documentation', 'Mentoring'],
                icon: Users,
              },
            ].map((skillGroup, idx) => {
              const IconComponent = skillGroup.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:border-gray-300 dark:hover:border-slate-600 hover:shadow-md hover:shadow-slate-900/5 dark:hover:shadow-black/10 transition-all duration-200"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30">
                      <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{skillGroup.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* UNIQUE VALUE PROPOSITION SECTION */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Why Work With Me
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Product Thinking',
                description: 'My background in entrepreneurship and e-commerce gives me a customer-first mindset. I think in terms of user value, conversion, and data-informed decisions, not just writing code.',
                gradient: 'from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20',
              },
              {
                title: 'Leadership & Mentorship',
                description: 'As a regional manager and CTO, I\'ve led teams and mentored developers. I understand how to communicate clearly, set standards, and help others grow.',
                gradient: 'from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20',
              },
              {
                title: 'Full-Stack Ownership',
                description: 'From React Native to .NET backends, Docker deployments to database design. I can own entire features end-to-end and make informed architectural trade-offs.',
                gradient: 'from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20',
              },
              {
                title: 'Operational Excellence',
                description: 'I care about code quality, engineering hygiene, and sustainable processes. Clear documentation, code reviews, and automated checks aren\'t afterthoughts, they\'re built-in.',
                gradient: 'from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/20',
              },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-8 rounded-xl bg-gradient-to-br ${value.gradient} dark:bg-gradient-to-br border border-gray-200/50 dark:border-slate-700 hover:border-gray-300/80 dark:hover:border-slate-600 hover:shadow-md hover:shadow-slate-900/5 dark:hover:shadow-black/10 transition-all duration-200`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{value.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPANDED IMAGE MODAL */}
      {expandedProjectId && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setExpandedProjectId(null)}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto"
          >
            {projects.find((p) => p.id === expandedProjectId)?.images && (
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {projects.find((p) => p.id === expandedProjectId)?.name}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      {projects.find((p) => p.id === expandedProjectId)?.description}
                    </p>
                  </div>
                  <button
                    onClick={() => setExpandedProjectId(null)}
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition"
                    aria-label="Close"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-6">
                  {projects
                    .find((p) => p.id === expandedProjectId)
                    ?.images?.map((image, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="space-y-3"
                      >
                        <div className="relative rounded-lg overflow-hidden bg-gray-100 dark:bg-slate-800 flex items-center justify-center max-w-2xl mx-auto py-8">
                          <img
                            src={image}
                            alt={`${projects.find((p) => p.id === expandedProjectId)?.name} screenshot ${idx + 1}`}
                            className="w-full h-auto object-contain max-h-96"
                          />
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Screen {idx + 1} of{' '}
                          {projects.find((p) => p.id === expandedProjectId)?.images?.length}
                        </p>
                      </motion.div>
                    ))}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}

      {/* EDUCATION SECTION */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 border-y border-gray-100 dark:border-slate-800 bg-gray-50 dark:bg-slate-900">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-16"
          >
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">Background</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-2 text-gray-900 dark:text-white">Education & Experience</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {education.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg dark:hover:shadow-blue-600/10 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mt-1">{item.institution}</p>
                  </div>
                  <span className="px-4 py-2 rounded-full text-sm font-semibold bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 whitespace-nowrap">
                    {item.status}
                  </span>
                </div>

                <div className="space-y-3 mt-6">
                  {item.details.map((detail, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 flex-shrink-0" />
                      <p className="text-gray-600 dark:text-gray-400">{detail}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-10 sm:p-14 border border-slate-700/60 text-center text-white"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-lg text-slate-200 mb-10 max-w-2xl mx-auto">
              Interested in collaborating on health tech, fullstack development, or innovative projects? I'd love to hear from you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:cto@leanbox.no"
                className="inline-flex h-12 items-center justify-center gap-2 px-7 rounded-full text-sm sm:text-base font-semibold bg-white text-slate-900 hover:bg-slate-50 transition-all duration-200"
              >
                <Mail size={20} /> cto@leanbox.no
              </a>
              <a
                href="mailto:nicolaiaalberg@icloud.com"
                className="inline-flex h-12 items-center justify-center gap-2 px-7 rounded-full text-sm sm:text-base font-semibold border border-slate-300/70 text-white hover:bg-white/5 transition-all duration-200"
              >
                <Mail size={20} /> nicolaiaalberg@icloud.com
              </a>
              <a
                href="https://github.com/niaa004"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 px-7 rounded-full text-sm sm:text-base font-semibold border border-slate-300/70 text-white hover:bg-white/5 transition-all duration-200"
              >
                <Github size={20} /> GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 dark:border-slate-800 bg-gray-50 dark:bg-slate-900 px-4 sm:px-6 lg:px-8 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">Nicolai Aalberg</h3>
              <p className="text-gray-600 dark:text-gray-400">Full-stack developer & CTO building innovative health tech solutions.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="https://github.com/niaa004" target="_blank" rel="noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/nicolai-aalberg-93106a179/" target="_blank" rel="noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:cto@leanbox.no" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
                    cto@leanbox.no
                  </a>
                </li>
                <li>
                  <a href="mailto:nicolaiaalberg@icloud.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition">
                    nicolaiaalberg@icloud.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-300 dark:border-slate-700 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">© 2025 Nicolai Aalberg. All rights reserved.</p>
            <p className="text-gray-500 dark:text-gray-500 text-sm mt-4 sm:mt-0">Designed & built with React, Next.js & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </main>
  );
}