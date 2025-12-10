"use client";

import React from 'react';
import IconBadge from '../../components/IconBadge';
import { skillsData, certifications } from '../../data/skillsData';
import { motion } from 'framer-motion';
import {
  scrollReveal,
  staggerContainer,
  staggerItem,
  hoverScale
} from '../../lib/animationVariants';


// Icon Imports (add missing ones)
import {
  FaCertificate, FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaNode, FaPhp, FaCode,
  FaWordpress, FaShopify, FaFigma, FaServer, FaTools, FaBullseye, FaUserFriends,
  FaChartLine, FaCloud, FaDocker, FaGithub, FaGitAlt
} from 'react-icons/fa';

import {
  SiTailwindcss, SiJquery, SiNextdotjs, SiMysql, SiWix, SiSquarespace,
  SiVite, SiRedux, SiAxios, SiFramer, SiThreedotjs, SiWebpack,
  SiBabel, SiMongodb, SiPostgresql, SiPrisma, SiJsonwebtokens, SiRedis,
  SiNginx, SiPostman, SiFirebase, SiSupabase, SiKubernetes, SiLinux
} from 'react-icons/si';

const skillIcons = {
  // --- Frontend ---
  'HTML': () => <FaHtml5 className="w-6 h-6 text-orange-500" />,
  'CSS': () => <FaCss3Alt className="w-6 h-6 text-blue-500" />,
  'JavaScript': () => <FaJs className="w-6 h-6 text-yellow-400" />,
  'TypeScript': () => <FaJs className="w-6 h-6 text-blue-600" />,
  'React': () => <FaReact className="w-6 h-6 text-blue-400" />,
  'React.js': () => <FaReact className="w-6 h-6 text-blue-400" />,
  'Next.js': () => <SiNextdotjs className="w-6 h-6 text-black dark:text-white" />,
  'Tailwind': () => <SiTailwindcss className="w-6 h-6 text-sky-400" />,
  'Tailwind CSS': () => <SiTailwindcss className="w-6 h-6 text-sky-400" />,
  'Bootstrap': () => <FaBootstrap className="w-6 h-6 text-purple-500" />,
  'JQuery': () => <SiJquery className="w-6 h-6 text-blue-500" />,

  // New Frontend Tools
  'Vite': () => <SiVite className="w-6 h-6 text-purple-500" />,
  'Redux': () => <SiRedux className="w-6 h-6 text-purple-700" />,
  // 'Zustand': () => <FaWaveSquare  className="w-6 h-6 text-orange-400" />,
  'Axios': () => <SiAxios className="w-6 h-6 text-blue-300" />,
  'Framer Motion': () => <SiFramer className="w-6 h-6 text-pink-500" />,
  'Three.js': () => <SiThreedotjs className="w-6 h-6 text-gray-100" />,
  'Webpack': () => <SiWebpack className="w-6 h-6 text-blue-500" />,


  // --- Backend ---
  'Node.js': () => <FaNode className="w-6 h-6 text-green-500" />,
  'Express.js': () => <FaNode className="w-6 h-6 text-gray-300" />,
  'PHP': () => <FaPhp className="w-6 h-6 text-indigo-500" />,
  'MySQL': () => <SiMysql className="w-6 h-6 text-blue-600" />,
  'REST APIs': () => <FaServer className="w-6 h-6 text-gray-500" />,

  // New Backend Tools
  'MongoDB': () => <SiMongodb className="w-6 h-6 text-green-500" />,
  'Prisma': () => <SiPrisma className="w-6 h-6 text-blue-400" />,
  'JWT': () => <SiJsonwebtokens className="w-6 h-6 text-green-600" />,
  'Redis': () => <SiRedis className="w-6 h-6 text-red-500" />,
  'Nginx': () => <SiNginx className="w-6 h-6 text-green-500" />,
  'Docker': () => <FaDocker className="w-6 h-6 text-blue-400" />,
  'Kubernetes': () => <SiKubernetes className="w-6 h-6 text-blue-500" />,

  // --- Tools / DevOps ---
  'Git': () => <FaGitAlt className="w-6 h-6 text-orange-600" />,
  'GitHub': () => <FaGithub className="w-6 h-6 text-gray-100" />,
  'Postman': () => <SiPostman className="w-6 h-6 text-orange-500" />,
  'Firebase': () => <SiFirebase className="w-6 h-6 text-yellow-500" />,
  'Supabase': () => <SiSupabase className="w-6 h-6 text-green-400" />,
  'Linux': () => <SiLinux className="w-6 h-6 text-yellow-400" />,
  'Terminal': () => <FaTools className="w-6 h-6 text-gray-400" />,


  // --- CMS / No-Code ---
  'WordPress': () => <FaWordpress className="w-6 h-6 text-blue-400" />,
  'Shopify': () => <FaShopify className="w-6 h-6 text-green-500" />,
  'Wix': () => <SiWix className="w-6 h-6 text-gray-500" />,
  'Squarespace': () => <SiSquarespace className="w-6 h-6 text-gray-500" />,

  // --- Design / Soft Skills ---
  'Figma': () => <FaFigma className="w-6 h-6 text-pink-500" />,
  'Problem Solving': () => <FaBullseye className="w-6 h-6 text-cyan-400" />,
  'Team Leadership': () => <FaUserFriends className="w-6 h-6 text-cyan-400" />,
  'Communication': () => <FaUserFriends className="w-6 h-6 text-cyan-400" />,
  'Project Management': () => <FaChartLine className="w-6 h-6 text-cyan-400" />,
};


const DefaultIcon = () => <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded bg-gray-600" />;

// Reusable badge wrapper
function TechIconBadge({ icon: IconComponent, name }: { icon: React.ComponentType<{ className?: string }>, name: string }) {
  if (!IconComponent || !name) return null;
  
  return (
    <div className="flex flex-col items-center justify-center gap-1 sm:gap-2 min-w-[60px] sm:min-w-[70px]">
      <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center
                      bg-gradient-to-br from-gray-100 to-gray-300 dark:from-[#1e293b] dark:to-[#0f172a]
                      border border-gray-300 dark:border-gray-700 shadow-md hover:scale-110 transition-transform duration-200">
        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
      </div>
      <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium text-center leading-tight">{name}</span>
    </div>
  );
}

const certIcons = {
  'JavaScript Algorithms and Data Structures': {
    icon: FaJs,
    bg: 'bg-gradient-to-r from-yellow-400 to-yellow-600',
  },
  'Programming Fundamentals': {
    icon: FaCode,
    bg: 'bg-gradient-to-r from-blue-400 to-green-500',
  },
};


const Skill = () => {
  return (
    <div className="bg-transparent text-gray-900 dark:text-gray-100 font-sans px-4 sm:px-6 py-8 sm:py-12 transition-colors duration-300">
      {/* Header */}
      <motion.header
        className="text-center mb-12"
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0.3 }}
        variants={scrollReveal}
      >
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-4">Skills & Expertise</h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg">
          A comprehensive overview of my technical skills and professional competencies � interactive, animated and easy to scan.
        </p>
      </motion.header>

      {/* Skills by Category */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto mb-8 sm:mb-12"
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0.1, margin: "-50px" }}
        variants={staggerContainer}
      >
        {skillsData && skillsData.length > 0 ? skillsData.map((category, index) => {
          const CategoryIcon = category?.icon || FaReact;
          return (
            <motion.div
              key={`skill-category-${index}`}
              className="group bg-gray-100 dark:bg-[#161b22] p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col transform transition duration-500 hover:shadow-2xl hover:border-indigo-500 w-full min-h-[300px]"
              aria-label={category.title}
              variants={staggerItem}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Category Header */}
              <div className="flex flex-col items-center text-center mb-4 sm:mb-6">
                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                  <IconBadge size="lg" bgClass={category.bg}>
                    <CategoryIcon />
                  </IconBadge>
                </div>
                <h3 className="font-extrabold text-lg sm:text-xl lg:text-2xl mt-3 sm:mt-4">{category.title}</h3>
              </div>

              {/* Icon Grid */}
              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center flex-1">
                {category.skills && category.skills.length > 0 ? category.skills.map((skill, i) => {
                  const IconComponent = skillIcons[skill.name as keyof typeof skillIcons] || DefaultIcon;
                  return (
                    <TechIconBadge key={`skill-${index}-${i}`} icon={IconComponent} name={skill.name} />
                  );
                }) : (
                  <div className="text-gray-500 text-sm">No skills available</div>
                )}
              </div>
            </motion.div>
          );
        }) : (
          <div className="col-span-full text-center text-gray-500">
            <p>Loading skills...</p>
          </div>
        )}
      </motion.div>

      {/* Certifications & Training */}
      <section className="max-w-6xl mx-auto mt-8 sm:mt-12 mb-12 sm:mb-16">
        <motion.h2
          className="text-xl sm:text-2xl lg:text-3xl font-extrabold mb-4 sm:mb-6 text-center text-gray-900 dark:text-white"
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.3 }}
          variants={scrollReveal}
        >
          Certifications & Training
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.3 }}
          variants={staggerContainer}
        >
          {certifications.map((cert, index) => {
            const { icon: CertIcon, bg } = certIcons[cert.title as keyof typeof certIcons] || {
              icon: FaCertificate,
              bg: 'bg-gradient-to-r from-red-500 to-pink-500',
            };

            // Map certificate titles to PDF links
            const certLinks: { [key: string]: string } = {
              'JavaScript Algorithms and Data Structures': '/freeCodeCamp.pdf',
              'Programming Fundamentals': '/udacity.pdf',
            };

            const pdfLink = certLinks[cert.title] || '#';

            return (
              <motion.a
                key={index}
                href={pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 dark:bg-gray-800 p-6 sm:p-8 lg:p-10 rounded-2xl shadow-lg border border-gray-300 dark:border-gray-700 text-center flex flex-col items-center transform transition duration-500 hover:shadow-2xl hover:border-indigo-500 cursor-pointer group"
                variants={staggerItem}
                whileHover={hoverScale}
              >
                <IconBadge size="xl" bgClass={bg} className="mb-4">
                  <CertIcon />
                </IconBadge>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 text-gray-900 dark:text-white">{cert.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base lg:text-lg">{cert.org}</p>
                <p className="text-gray-700 dark:text-gray-500 mt-2 font-semibold text-sm sm:text-base">{cert.year}</p>

                <div className="mt-4 inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold group-hover:gap-3 transition-all text-sm sm:text-base">
                  View Certificate <span aria-hidden>→</span>
                </div>
              </motion.a>
            );
          })}

        </motion.div>
      </section>
    </div>
  );
};

export default Skill;
