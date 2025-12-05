
"use client"; // Required for client-side interactivity

import React from "react";
import { FaUserFriends, FaGraduationCap, FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";
import { FaPlane, FaMoneyBillWave, FaCode, FaChalkboardTeacher, FaLaptopCode, FaUsers, FaUserCheck, FaDumbbell } from "react-icons/fa";
import IconBadge from '../../components/IconBadge';
import { motion } from 'framer-motion';
import {
  scrollReveal,
  scrollRevealLeft,
  scrollRevealRight,
  staggerContainer,
  staggerItem,
  scaleIn
} from '../../lib/animationVariants';

const About = () => {
  return (
    <div className="bg-transparent text-gray-900 dark:text-white font-sans transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.header
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.3 }}
          variants={scrollReveal}
        >
          <div className="flex justify-center mb-4">
            <IconBadge size="xl" bgClass="bg-gradient-to-r from-purple-600 to-indigo-600">
              <FaUserFriends />
            </IconBadge>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2 ">About Me</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Innovative software engineer driven by the pursuit of transformative
            solutions that create meaningful impact.
          </p>
        </motion.header>

        {/* My Story + Background */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 group/bento">
          {/* My Story - Takes up 8 columns */}
          <motion.div
            className="lg:col-span-8 bg-white dark:bg-[#0f1720] border border-gray-200 dark:border-gray-800 p-8 rounded-3xl shadow-xl h-fit transition-all duration-500 group-hover/bento:opacity-40 group-hover/bento:scale-[0.98] hover:!opacity-100 hover:!scale-100"
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.3 }}
            variants={scrollRevealLeft}
          >
            <div className="flex items-center gap-3 mb-6">
              <IconBadge size="lg" bgClass="bg-blue-500/10 text-blue-500">
                <FaUserFriends className="text-blue-500" />
              </IconBadge>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">My Story</h2>
            </div>

            <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <div className="p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors duration-300 cursor-default">
                <p>
                  With 2+ years of hands-on experience in full-stack web development, I've mastered the art of building scalable, high-performance applications. My expertise spans modern frontend frameworks like React and backend technologies including Node.js and Express.js. I'm passionate about crafting clean, maintainable code and creating exceptional user experiences that drive real business value.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Background - Takes up 4 columns */}
          <motion.div
            className="lg:col-span-4 bg-white dark:bg-[#0f1720] border border-gray-200 dark:border-gray-800 p-8 rounded-3xl shadow-xl flex flex-col gap-8 transition-all duration-500 group-hover/bento:opacity-40 group-hover/bento:scale-[0.98] hover:!opacity-100 hover:!scale-100"
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.3 }}
            variants={scrollRevealRight}
          >
            <div className="flex items-center gap-3 mb-2">
              <IconBadge size="lg" bgClass="bg-purple-500/10 text-purple-500">
                <FaBriefcase className="text-purple-500" />
              </IconBadge>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Background</h2>
            </div>

            <div className="flex flex-col gap-8">
              {/* Education */}
              <div className="p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors duration-300 cursor-default group">
                <div className="flex items-center gap-3 mb-2">
                  <FaGraduationCap className="text-blue-500 text-xl group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-blue-500 font-semibold text-lg">Education</span>
                </div>
                <h3 className="text-gray-900 dark:text-white font-medium text-lg leading-tight mb-1">
                  Bachelor of Science Degree in Computer Science
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Hawassa University Institute of Technology, 2025
                </p>
              </div>

              {/* Current Role */}
              <div className="p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors duration-300 cursor-default group">
                <div className="flex items-center gap-3 mb-2">
                  <FaBriefcase className="text-blue-500 text-xl group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-blue-500 font-semibold text-lg">Current Role</span>
                </div>
                <h3 className="text-gray-900 dark:text-white font-medium text-lg leading-tight mb-1">
                  Software Engineer
                </h3>

              </div>

              {/* Location */}
              <div className="p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors duration-300 cursor-default group">
                <div className="flex items-center gap-3 mb-2">
                  <FaMapMarkerAlt className="text-blue-500 text-xl group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-blue-500 font-semibold text-lg">Location</span>
                </div>
                <h3 className="text-gray-900 dark:text-white font-medium text-lg leading-tight mb-1">
                  Addis Ababa, Ethiopia
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Available for Remote Work
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-6">My Journey</h2>
          <div className="relative">
            {/* Vertical line in the center */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-purple-500 via-indigo-600 to-transparent opacity-60" />

            {/* Journey items data and rendering */}
            {(() => {
              const journey = [
                {
                  year: '2024 - Present',
                  title: 'Frontend Developer',
                  org: 'Freelance / Portfolio Projects',
                  desc: 'Specialized in modern UI/UX, React.js, Tailwind CSS, responsive design, and component-based development.'
                },
                {
                  year: '2025',
                  title: 'Computer Science Degree',
                  org: 'Hawassa University Institute of Technology',
                  desc: 'Graduated with Distinction (CGPA: 3.51/4.0)'
                },
                {
                  year: '2024 - 2025',
                  title: 'Backend Developer',
                  org: 'Freelance / Personal Projects',
                  desc: 'Built robust APIs using Node.js, Express.js, MySQL, JWT auth, image uploads, and scalable backend architecture.'
                },
                {
                  year: '2025 - Present',
                  title: 'Full-Stack Developer',
                  org: 'Independent & Client Projects',
                  desc: 'Developed end-to-end MERN stack and full systems including AI integration, authentication, admin dashboards, and real-world apps.'
                }
              ];


              return (
                <div className="space-y-20">
                  {journey.map((item, idx) => {
                    const isLeft = idx % 2 === 0;
                    return (
                      <motion.div
                        key={idx}
                        className="relative w-full"
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={isLeft ? scrollRevealLeft : scrollRevealRight}
                      >
                        <div className={`flex w-full ${isLeft ? 'justify-start' : 'justify-end'}`}>
                          <div className={`${isLeft ? 'pr-8 text-right' : 'pl-8 text-left'} w-1/2`}>
                            <div className={`relative inline-block w-full bg-gray-100 dark:bg-[#0f1720] border border-gray-300 dark:border-gray-800 rounded-2xl pt-12 p-6 shadow-lg transition transform hover:-translate-y-1 hover:shadow-2xl`}>
                              {/* colored edge */}
                              <div className={`${isLeft ? 'absolute left-0 top-0 h-full rounded-l-2xl' : 'absolute right-0 top-0 h-full rounded-r-2xl'}`} style={{ width: '6px', background: 'linear-gradient(180deg,#60a5fa,#8b5cf6)' }} />
                              {/* large year */}
                              <div className={`${isLeft ? 'absolute top-4 left-4' : 'absolute top-4 right-4'}`}>
                                <div className="text-2xl md:text-3xl font-extrabold text-blue-400 leading-none">{item.year.split(' ')[0]}</div>
                              </div>

                              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1">{item.title}</h3>
                              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{item.org}</p>
                              <p className="text-gray-700 dark:text-gray-300 text-sm">{item.desc}</p>
                            </div>
                          </div>
                        </div>

                        {/* center dot (aligned to middle of the card) */}
                        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-purple-400 rounded-full border-2 border-gray-900" />
                      </motion.div>
                    );
                  })}
                </div>
              );
            })()}
          </div>
        </section>


        {/* Core Values */}
        <motion.section
          className="mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.3, margin: "-100px" }}
          variants={staggerContainer}
        >
          <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-6 text-center mt-4">Core Values</h2>
          <motion.div className="grid md:grid-cols-3 gap-6">

            {/* Quality Code */}
            <motion.div
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col items-center text-center"
              variants={staggerItem}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="mb-4"><IconBadge size="lg" bgClass="bg-gradient-to-r from-purple-500 to-indigo-500"><FaLaptopCode /></IconBadge></div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Quality Code</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Crafting pristine, sustainable, and thoroughly documented code that endures through evolution and drives tangible business outcomes.
              </p>
            </motion.div>

            {/* Collaboration */}
            <motion.div
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col items-center text-center"
              variants={staggerItem}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="mb-4"><IconBadge size="lg" bgClass="bg-gradient-to-r from-green-400 to-emerald-500"><FaUsers /></IconBadge></div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Collaboration</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Partnering seamlessly with cross-functional teams to achieve outstanding outcomes through transparent communication and unified goals.
              </p>
            </motion.div>

            {/* User Focus */}
            <motion.div
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col items-center text-center"
              variants={staggerItem}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="mb-4"><IconBadge size="lg" bgClass="bg-gradient-to-r from-blue-400 to-sky-500"><FaUserCheck /></IconBadge></div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">User Focus</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Engineering solutions that champion exceptional user experiences while tackling authentic challenges through instinctive, human-centered design.
              </p>
            </motion.div>

          </motion.div>
        </motion.section>




        {/* Personal Interests */}
        <motion.section
          className="mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.3, margin: "-100px" }}
          variants={staggerContainer}
        >
          <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-6 text-center mt-4">Personal Interests</h2>
          <motion.div className="grid md:grid-cols-4 gap-6 text-gray-700 dark:text-gray-300">

            {/* Travel */}
            <motion.div
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col items-center text-center"
              variants={staggerItem}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="mb-4"><IconBadge size="lg" bgClass="bg-gradient-to-r from-purple-500 to-indigo-500"><FaPlane /></IconBadge></div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Travel</h3>
              <p>Exploring new cultures and technological innovation.</p>
            </motion.div>

            {/* Finance */}
            <motion.div
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col items-center text-center"
              variants={staggerItem}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="mb-4"><IconBadge size="lg" bgClass="bg-gradient-to-r from-green-400 to-emerald-500"><FaDumbbell /></IconBadge></div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Fitness</h3>
              <p>Maintaining a healthy lifestyle through exercise and wellness.</p>
            </motion.div>

            {/* Open Source */}
            <motion.div
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col items-center text-center"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="mb-4"><IconBadge size="lg" bgClass="bg-gradient-to-r from-blue-400 to-sky-500"><FaCode /></IconBadge></div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Open Source</h3>
              <p>Contributing to the developer community.</p>
            </motion.div>

            {/* Mentoring */}
            <motion.div
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col items-center text-center"
              variants={staggerItem}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="mb-4"><IconBadge size="lg" bgClass="bg-gradient-to-r from-yellow-400 to-amber-400"><FaChalkboardTeacher /></IconBadge></div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Mentoring</h3>
              <p>Sharing knowledge and developing new skills.</p>
            </motion.div>

          </motion.div>
        </motion.section>


      </div>

    </div>

  );
};

export default About;
