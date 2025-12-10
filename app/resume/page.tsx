"use client";

import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { skillsData } from '../../data/skillsData';
import IconBadge from '../../components/IconBadge';

function ContactItem({ title, value, icon, href, onClick, gradient }: { title: string, value: string, icon: React.ReactNode, href?: string, onClick?: () => void, gradient: string }) {
  return (
    <Motion.a
      href={href}
      onClick={onClick}
      target={href && href.startsWith("http") ? "_blank" : undefined}
      rel={href && href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={`${title}: ${value}`}
      className="group w-full flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-gray-100 dark:bg-[#161b22] border border-gray-200 dark:border-gray-700 transition"
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.995 }}
    >
      <div
        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex-shrink-0 flex items-center justify-center transition-colors duration-200 group-hover:shadow-2xl shadow-lg ${gradient}`}
      >
        {icon}
      </div>
      <div>
        <div className="text-xs text-gray-400 uppercase tracking-wide">{title}</div>
        <div className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white transition-colors group-hover:text-indigo-500 dark:group-hover:text-indigo-300">{value}</div>
      </div>
    </Motion.a>
  );
}

export default function ResumePage() {
  const tabs = ["Education", "Skills", "Projects"];
  const [active, setActive] = useState("Education");

  const containerVariants = {
    initial: { opacity: 0, y: 10 },
    enter: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
    exit: { opacity: 0, y: -8, transition: { duration: 0.25 } },
  };

  const featuredProjects = [
    {
      id: 1,
      title: "Family Reuniting System",
      subtitle: "Full Stack Web Application",
      desc: "A comprehensive platform designed to help families reconnect and stay connected. Features include family tree management, event planning, and real-time communication tools.",
      tags: ["React", "Node.js", "MySQL", "Tailwind"],
      href: "#",
      color: "from-purple-500 to-indigo-500",
    },
    {
      id: 2,
      title: "Pro Fitness",
      subtitle: "Web Application",
      desc: "A modern fitness tracking application that helps users monitor their workouts, track progress, and achieve their fitness goals with personalized workout plans.",
      tags: ["React", "Node.js", "MySQL", "Tailwind"],
      href: "#",
      color: "from-pink-500 to-violet-500",
    },
    {
      id: 3,
      title: "Ethio Travel",
      subtitle: "Booking System",
      desc: "A travel booking and management system showcasing Ethiopia's beautiful destinations. Features tour packages, hotel bookings, and travel itinerary planning.",
      tags: ["React", "Node.js", "MySQL", "Tailwind"],
      href: "#",
      color: "from-green-400 to-emerald-500",
    },
    {
      id: 4,
      title: "Home",
      subtitle: "Real Estate Platform",
      desc: "A real estate management platform for property listings, virtual tours, and seamless communication between buyers and sellers.",
      tags: ["Python", "Docker", "Git", "Linux"],
      href: "#",
      color: "from-orange-400 to-red-400",
    },
    {
      id: 5,
      title: "Portfolio",
      subtitle: "Personal Website",
      desc: "A personal portfolio website showcasing my skills, projects, and professional experience with modern design and smooth animations.",
      tags: ["React", "Next.js", "TypeScript", "Tailwind"],
      href: "#",
      color: "from-blue-400 to-cyan-400",
    },
  ];

  return (
    <div className="bg-transparent text-gray-900 dark:text-white px-4 sm:px-6 lg:px-20 xl:px-32 py-4 transition-colors duration-300 mt-0">
      {/* Header */}
      <div className="text-center mb-16">
        <Motion.div whileHover={{ scale: 1.08, rotate: 6 }} whileTap={{ scale: 0.98, rotate: 0 }} className="w-20 h-20 mx-auto transform transition cursor-pointer" aria-hidden>
          <IconBadge size="xl" bgClass="bg-gradient-to-r from-indigo-500 to-purple-500">📄</IconBadge>
        </Motion.div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold mt-4 sm:mt-6">Resume</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-3 sm:mt-4 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg">
          Download my complete resume or explore my professional journey below.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 lg:mt-10">
          <Motion.a
            href="/WENDIMAGEGN-ABERA-FlowCV-Resume-20251106 (1)T.pdf"
            download
            whileHover={{ scale: 1.03 }}
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition text-sm sm:text-base font-bold text-white text-center"
          >
            Get PDF Resume
          </Motion.a>

          <Motion.a
            href="/WENDIMAGEGN-ABERA-FlowCV-Resume-20251106 (1)T.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-gray-200 dark:bg-[#21262d] hover:bg-gray-300 dark:hover:bg-[#30363d] transition text-sm sm:text-base font-bold text-gray-900 dark:text-white text-center"
          >
            View Online
          </Motion.a>
        </div>
      </div>

      {/* Contact summary card */}
      <div className="mx-auto max-w-6xl bg-gray-100 dark:bg-[#161b22] border border-gray-200 dark:border-gray-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 mb-10 sm:mb-14 shadow-lg transition-colors duration-300">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          <ContactItem
            title="Location"
            value="Addis Ababa, Ethiopia"
            href="https://www.google.com/maps/search/Addis+Ababa"
            gradient="bg-gradient-to-r from-purple-500 to-blue-500"
            icon={
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            }
          />

          <ContactItem
            title="Phone"
            value="(+251) 979-062-454"
            href="tel:+251934826430"
            gradient="bg-green-500"
            icon={
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92V21a1 1 0 0 1-1.11 1 19.86 19.86 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.07 9.74 19.86 19.86 0 0 1 0 1.11 1 1 0 0 1 1 0h4.09a1 1 0 0 1 1 .76c.12.77.33 1.53.61 2.27a1 1 0 0 1-.23 1.02L5.7 6.7a16 16 0 0 0 8.6 8.6l1.65-1.65a1 1 0 0 1 1.02-.23c.74.28 1.5.49 2.27.61a1 1 0 0 1 .76 1V21z" />
              </svg>
            }
          />

          <ContactItem
            title="Email"
            value="wendiabera660@gmail.com"
            href="mailto:naol.selemon.scitech@gmail.com"
            gradient="bg-gradient-to-r from-purple-500 to-pink-500"
            icon={
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            }
          />
        </div>

        {/* Status - always below the three items, aligned with Location */}
        <div className="mt-4 sm:mt-6 sm:col-span-2 lg:col-span-1 flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-gray-100 dark:bg-[#161b22] border border-gray-200 dark:border-gray-700 transition">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex-shrink-0 flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-500 shadow-lg">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </div>
          <div>
            <div className="text-xs text-gray-400 uppercase tracking-wide">Status</div>
            <div className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white">Available Now</div>
          </div>
        </div>
      </div>

      {/* Tabs (centered) */}
      <div className="flex gap-3 sm:gap-4 lg:gap-6 overflow-x-auto mb-10 sm:mb-14 justify-center px-4 sm:px-0">
        {tabs.map((t) => {
          const isActive = t === active;
          return (
            <Motion.button
              key={t}
              onClick={() => setActive(t)}
              whileHover={{ scale: 1.03 }}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm sm:text-base whitespace-nowrap font-bold focus:outline-none transition ${isActive ? "bg-indigo-600 text-white" : "bg-gray-200 dark:bg-[#21262d] hover:bg-gray-300 dark:hover:bg-[#30363d] text-gray-700 dark:text-gray-300"
                }`}
              aria-pressed={isActive}
            >
              {t}
            </Motion.button>
          );
        })}
      </div>

      {/* Animated content area */}
      <div className="max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          {active === "Education" && (
            <Motion.section key="education" id="education" variants={containerVariants} initial="initial" animate="enter" exit="exit" className="mb-16">
              <div className="flex items-center gap-3 mb-4">
                <Motion.div whileHover={{ scale: 1.05 }} className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-indigo-700 text-white font-bold">
                  2
                </Motion.div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">🎓 Education</h2>
              </div>

              <p className="text-center text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg">Academic background and achievements</p>

              <Motion.div whileHover={{ y: -6 }} className="bg-gray-100 dark:bg-[#161b22] border border-gray-200 dark:border-gray-700 rounded-2xl p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10 transition">
                <div className="flex flex-col sm:flex-row items-start justify-between gap-4 sm:gap-6">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">Bachelor of Science Degree in Computer Science</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base lg:text-lg">Hawassa University Institute of Technology</p>
                    <p className="text-gray-600 dark:text-gray-500 text-xs sm:text-sm mt-2">2021 - 2025</p>

                    <div className="mt-4 flex items-center gap-4">

                      <span className="text-gray-400 text-sm">

                      </span>
                    </div>
                  </div>

                  <div className="flex-shrink-0 text-left sm:text-right">
                    <div className="text-xs sm:text-sm text-gray-400 mb-2">Badge</div>
                    <div className="px-3 sm:px-4 py-1 sm:py-2 bg-indigo-700 text-white rounded-full text-xs sm:text-sm font-semibold">Distinction</div>
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <h4 className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-semibold mb-3">Relevant Coursework</h4>
                    <ul className="space-y-2 sm:space-y-3 text-gray-400">
                      {[
                        "Data Structures",
                        "Algorithms",
                        "Software Engineering",
                        "Database Systems",
                        "Web Development",
                        "Machine Learning",
                      ].map((course) => (
                        <li key={course} className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base lg:text-lg">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                          <Motion.button whileHover={{ scale: 1.02 }} onClick={() => setActive("Skills")} className="text-gray-600 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 text-left">
                            {course}
                          </Motion.button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-start">
                    <div className="text-xs sm:text-sm text-gray-400">
                      <div className="mb-3 text-sm sm:text-base lg:text-lg">Highlights</div>
                      <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base lg:text-lg">
                        <li className="text-gray-700 dark:text-gray-300">Graduated with honors</li>
                        <li className="text-gray-700 dark:text-gray-300">Capstone: Scalable web application</li>
                        <li className="text-gray-700 dark:text-gray-300">Relevant tools: React, Node.js, MySQL</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Motion.div>
            </Motion.section>
          )}

          {active === "Skills" && (
            <Motion.div key="skills" variants={containerVariants} initial="initial" animate="enter" exit="exit" className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <Motion.div whileHover={{ scale: 1.05 }} className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-indigo-700 text-white font-bold">
                  3
                </Motion.div>
                <h2 className="text-3xl font-bold">🛠️ Skills</h2>
              </div>

              <Motion.div whileHover={{ y: -6, boxShadow: "0 18px 40px rgba(0,0,0,0.6)" }} className="bg-gray-100 dark:bg-[#161b22] rounded-2xl p-10 transition border border-gray-200 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-400 mb-6">Technical skills and proficiencies</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {skillsData.map((cat, idx) => {
                    const Icon = cat.icon;
                    return (
                      <div key={idx} className="bg-white dark:bg-[#0f1720] border border-gray-200 dark:border-gray-800 rounded-2xl p-4 flex items-center gap-4 shadow-sm">
                        <IconBadge size="md" bgClass={cat.bg}>
                          <Icon />
                        </IconBadge>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900 dark:text-white">{cat.title}</div>
                          <div className="flex gap-2 mt-2 flex-wrap">
                            {cat.skills.slice(0, 3).map((s) => (
                              <span key={s.name} className="text-xs px-3 py-1 bg-gray-100 dark:bg-[#0b1220] rounded-full text-gray-700 dark:text-green-300 font-medium">{s.name}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="text-center">
                  <a
                    href="#skill"
                    onClick={(e) => {
                      e.preventDefault();
                      const section = document.getElementById('skill');
                      if (section) {
                        const headerOffset = 80;
                        const elementPosition = section.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                      }
                    }}
                    className="px-6 py-2 rounded-full bg-indigo-600 text-white font-bold"
                  >
                    View Full Skills
                  </a>
                </div>
              </Motion.div>
            </Motion.div>
          )}

          {active === "Projects" && (
            <Motion.div key="projects" variants={containerVariants} initial="initial" animate="enter" exit="exit" className="mb-20">
              <div className="flex items-center justify-center mb-6">
                <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
                  <svg className="w-7 h-7 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 12h18M3 6h18M3 18h18" />
                  </svg>
                  Featured Projects
                </h2>
              </div>

              <p className="text-center text-gray-400 mb-8">A selection of my best work and achievements</p>

              <div className="grid gap-8 md:grid-cols-2 mb-8">
                {featuredProjects.map((p) => (
                  <Motion.div
                    key={p.id}
                    whileHover={{ y: -6, boxShadow: "0 18px 40px rgba(0,0,0,0.6)" }}
                    className="bg-white dark:bg-[#0f1720] border border-gray-200 dark:border-gray-800 rounded-2xl p-8 relative overflow-hidden transition shadow-lg"
                    style={{ borderRadius: "12px" }}
                  >
                    <div className={`absolute -right-10 -top-10 w-48 h-48 rounded-full opacity-10`} style={{ background: `linear-gradient(90deg,rgba(99,102,241,0.12),rgba(139,92,246,0.12))` }} />
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-sm text-indigo-500 dark:text-indigo-300 font-semibold">{p.subtitle}</div>
                        <h3 className="text-xl md:text-2xl font-bold mt-2 text-gray-900 dark:text-white">{p.title}</h3>
                      </div>
                      <div>
                        <IconBadge size="md" bgClass="bg-gradient-to-r from-indigo-500 to-teal-400">
                          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M12 5v14M5 12h14" />
                          </svg>
                        </IconBadge>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-6">{p.desc}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.tags.map((tag) => (
                        <span key={tag} className="text-xs px-3 py-1 bg-gray-100 dark:bg-[#0b1220] rounded-full text-gray-700 dark:text-green-300 font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a href={p.href} className="inline-flex items-center gap-2 text-indigo-400 font-semibold">
                      View Project <span aria-hidden>→</span>
                    </a>
                  </Motion.div>
                ))}
              </div>

              <div className="flex justify-center">
                <Motion.a
                  whileHover={{ scale: 1.03 }}
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.getElementById('projects');
                    if (section) {
                      const headerOffset = 80;
                      const elementPosition = section.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                    }
                  }}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-500 text-white font-bold"
                >
                  View All Projects
                </Motion.a>
              </div>
            </Motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}