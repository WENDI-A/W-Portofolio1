
"use client"; // Required for client interactivity

import React from "react";
import IconBadge from '../../components/IconBadge';
import Atropos from 'atropos/react';
import 'atropos/css';
import { motion } from 'framer-motion';
import {
  scrollReveal,
  staggerContainer,
  staggerItem,
  cardHover,
  hoverScale,
  tapScale
} from '../../lib/animationVariants';
import {
  SiReact, SiNodedotjs, SiMysql, SiJavascript, SiTypescript, SiTailwindcss,
  SiCss3, SiFigma, SiPython, SiLinux, SiDocker, SiGit, SiNextdotjs
} from "react-icons/si";

// Reusable badge wrapper for tech icons
function TechIconBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-12 h-12 rounded-xl flex items-center justify-center
                    bg-gradient-to-br from-gray-100 to-gray-300 dark:from-[#1e293b] dark:to-[#0f172a]
                    border border-gray-300 dark:border-gray-700 shadow-lg hover:scale-110 transition">
      {children}
    </div>
  );
}

export default function ProjectsPage() {
  const featuredProjects = [
    {
      title: "Family Reuniting System",
      description: "A comprehensive platform designed to help families reconnect and stay connected. Features include family tree management, event planning, and real-time communication tools.",
      techStack: ["React", "Node.js", "MySQL", "Tailwind", "Figma"],
      liveDemo: "https://wendi-portfolio.netlify.app/",
      codeRepo: "https://github.com/WENDI-A/family-reunite"
    },
    {
      title: "Pro Fitness",
      description: "A modern fitness tracking application that helps users monitor their workouts, track progress, and achieve their fitness goals with personalized workout plans.",
      techStack: ["React", "Node.js", "MySQL", "Tailwind", "Figma"],
      liveDemo: "https://fitness-blush-iota.vercel.app/",
      codeRepo: "https://github.com/WENDI-A/pro-fitness",
      image: "gym.png"
    },
    {
      title: "Ethio Travel",
      description: "A travel booking and management system showcasing Ethiopia's beautiful destinations. Features tour packages, hotel bookings, and travel itinerary planning.",
      techStack: ["React", "Node.js", "MySQL", "Tailwind", "Figma"],
      liveDemo: "https://ethio-travel-agent.vercel.app/",
      codeRepo: "https://github.com/WENDI-A/ethio-travel",
      image: "ethiotravel.png"
    },

   {
  title: "Room Booking System",
  description: "A modern web application that allows users to easily browse, book, and manage rooms. Built with a responsive design, it streamlines room reservations while providing a smooth and intuitive user experience.",
  techStack: ["React", "Node.js", "MySQL", "Tailwind CSS", "Figma"],
  liveDemo: "https://room-booking-system-swart.vercel.app/",
  codeRepo: "https://github.com/WENDI-A/room-booking-system",
  image: "room.png"
}
  ];

  const otherProjects = [
    {
      title: "Home",
      description: "A real estate management platform for property listings, virtual tours, and seamless communication between buyers and sellers.",
      techStack: ["Python", "Docker", "Git", "Linux"],
      liveDemo: "https://home-project.vercel.app/",
      codeRepo: "https://github.com/WENDI-A/home-project"
    },
    {
      title: "Portfolio",
      description: "A personal portfolio website showcasing my skills, projects, and professional experience with modern design and smooth animations.",
      techStack: ["React", "Next.js", "TypeScript", "Tailwind", "Git"],
      liveDemo: "https://wendi-portfolio.netlify.app/",
     codeRepo: "https://github.com/WENDI-A/portfolio1",
      image: "WP.png"
    }
  ];

  const techIcons: Record<string, React.ReactNode> = {
    React: <SiReact className="w-6 h-6 text-blue-500" />,
    "Next.js": <SiNextdotjs className="w-6 h-6 text-black dark:text-white" />,
    "Node.js": <SiNodedotjs className="w-6 h-6 text-green-500" />,
    MySQL: <SiMysql className="w-6 h-6 text-blue-600" />,
    JavaScript: <SiJavascript className="w-6 h-6 text-yellow-400" />,
    TypeScript: <SiTypescript className="w-6 h-6 text-blue-600" />,
    Tailwind: <SiTailwindcss className="w-6 h-6 text-sky-400" />,
    CSS: <SiCss3 className="w-6 h-6 text-blue-500" />,
    Figma: <SiFigma className="w-6 h-6 text-pink-500" />,
    Python: <SiPython className="w-6 h-6 text-yellow-500" />,
    Linux: <SiLinux className="w-6 h-6 text-black" />,
    Docker: <SiDocker className="w-6 h-6 text-blue-400" />,
    Git: <SiGit className="w-6 h-6 text-red-500" />,
  };

  return (
    <div className="bg-transparent text-gray-900 dark:text-white px-4 sm:px-6 lg:px-20 py-4 transition-colors duration-300">
      {/* Header */}
      <motion.div
        className="text-center mb-16"
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0.3 }}
        variants={scrollReveal}
      >
        <div className="w-16 h-16 mx-auto transform transition hover:scale-105 duration-300 cursor-pointer">
          <IconBadge size="xl" bgClass="bg-gradient-to-r from-indigo-500 to-purple-500">&lt;/&gt;</IconBadge>
        </div>
        <h1 className="text-4xl font-bold mt-6 text-gray-900 dark:text-white">My Projects</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
          A selection of my best work and achievements
        </p>
      </motion.div>

      {/* Featured Projects */}
      <motion.h2
        className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 flex items-center gap-2 text-gray-900 dark:text-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0.3 }}
        variants={scrollReveal}
      >
        Featured Projects
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16 lg:mb-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0.3 }}
        variants={staggerContainer}
      >
        {featuredProjects.map((project, i) => (
          <motion.div
            key={i}
            variants={staggerItem}
          >
            {/* <Atropos
              className="w-full rounded-xl"
              activeOffset={15}
              shadow={false}
              rotateXMax={8}
              rotateYMax={8}
            > */}
              <motion.div
                className="bg-gray-100 dark:bg-[#161b22] border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden
                            hover:shadow-2xl transform transition duration-300 cursor-pointer"
              >
                <div className="h-40 sm:h-48 bg-gray-200 dark:bg-[#0d1117] hover:scale-105 transition-transform duration-300" 
                     style={{ 
                       backgroundImage: project.image ? `url(/${project.image})` : 'none',
                       backgroundSize: '100% 100%',
                       backgroundRepeat: 'no-repeat'
                     }}></div>
                <div className="p-4 sm:p-6 lg:p-7 hover:bg-gray-50 dark:hover:bg-[#0f1720] transition duration-300">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mt-2 font-medium">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3 mt-3">
                  {project.techStack.map((tech, t) => (
                    <TechIconBadge key={t}>{techIcons[tech]}</TechIconBadge>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-4">
                  {project.codeRepo && (
                    <motion.a
                      href={project.codeRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm bg-gray-200 dark:bg-[#21262d] px-3 sm:px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-[#30363d] hover:shadow-md transition font-bold text-gray-900 dark:text-white text-center"
                      whileHover={hoverScale}
                      whileTap={tapScale}
                    >
                      View Code
                    </motion.a>
                  )}
                  {project.liveDemo && (
                    <motion.a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm bg-gray-200 dark:bg-[#21262d] px-3 sm:px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-[#30363d] hover:shadow-md transition font-bold text-gray-900 dark:text-white text-center"
                      whileHover={hoverScale}
                      whileTap={tapScale}
                    >
                      Live Demo
                    </motion.a>
                  )}
                </div>
                </div>
              </motion.div>
            {/* </Atropos> */}
          </motion.div>
        ))}
      </motion.div>

      {/* Other Projects */}
      <motion.h2
        className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 flex items-center gap-2 text-gray-900 dark:text-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0.3 }}
        variants={scrollReveal}
      >
        Other Projects
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16 lg:mb-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0.3 }}
        variants={staggerContainer}
      >
        {otherProjects.map((project, i) => (
          <motion.div
            key={i}
            variants={staggerItem}
          >
            {/* <Atropos
              className="w-full rounded-xl"
              activeOffset={15}
              shadow={false}
              rotateXMax={8}
              rotateYMax={8}
            > */}
              <motion.div
                className="bg-gray-100 dark:bg-[#161b22] border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden
                            hover:shadow-2xl transform transition duration-300 cursor-pointer"
              >
                <div className="h-32 sm:h-40 bg-gray-200 dark:bg-[#0d1117] hover:scale-105 transition-transform duration-300" 
                     style={{ 
                       backgroundImage: project.image ? `url(/${project.image})` : 'none',
                       backgroundSize: '100% 100%',
                       backgroundRepeat: 'no-repeat'
                     }}></div>
                <div className="p-4 sm:p-6 lg:p-7 hover:bg-gray-50 dark:hover:bg-[#0f1720] transition duration-300">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mt-2 font-medium">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3 mt-3">
                  {project.techStack.map((tech, t) => (
                    <TechIconBadge key={t}>{techIcons[tech]}</TechIconBadge>
                  ))}
                </div>
                 <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-4">
                  {project.codeRepo && (
                    <motion.a
                      href={project.codeRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm bg-gray-200 dark:bg-[#21262d] px-3 sm:px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-[#30363d] hover:shadow-md transition font-bold text-gray-900 dark:text-white text-center"
                      whileHover={hoverScale}
                      whileTap={tapScale}
                    >
                      View Code
                    </motion.a>
                  )}
                  {project.liveDemo && (
                    <motion.a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm bg-gray-200 dark:bg-[#21262d] px-3 sm:px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-[#30363d] hover:shadow-md transition font-bold text-gray-900 dark:text-white text-center"
                      whileHover={hoverScale}
                      whileTap={tapScale}
                    >
                      Live Demo
                    </motion.a>
                  )}
                </div>

                </div>
              </motion.div>
            {/* </Atropos> */}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
