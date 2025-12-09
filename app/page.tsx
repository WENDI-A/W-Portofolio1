"use client";

import React from 'react';
import Header from '@/components/Header';
import AnimatedBackground from '@/components/AnimatedBackground';
import AnimatedAvatar from '@/components/AnimatedAvatar';
import IconBadge from '@/components/IconBadge';
import TextType from '@/components/TextType';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, staggerContainer, staggerItem, hoverScale, tapScale } from '@/lib/animationVariants';
import { FaLaptopCode, FaServer, FaPencilRuler, FaEnvelope } from 'react-icons/fa';

// Import the page components
import AboutPage from './about/page';
import SkillPage from './skill/page';
import ProjectsPage from './projects/page';
import ResumePage from './resume/page';
import ContactPage from './contact/page';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Header />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col md:flex-row items-center justify-center text-left py-16 px-4 md:px-20" id="home">
          <motion.div
            className="flex-1"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div
              className="bg-gradient-to-r from-purple-400 to-blue-500 text-white px-4 py-2 rounded-full mb-4 inline-block"
              variants={fadeInUp}
            >
              Available for new projects
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ whiteSpace: 'nowrap', overflow: 'visible' }}
            >
              <TextType
                text="WENDIMAGEGN ABERA"
                typingSpeed={80}
                initialDelay={500}
                loop={false}
                showCursor={true}
                cursorCharacter="|"
                cursorBlinkDuration={0.7}
                className="inline-block"
              />
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl mb-6 text-gray-700 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.5 }}
            >
              <TextType
                text={[
                  "Software Engineer",
                  "Full-Stack Developer",
                  "Computer Science Graduate",
                  "Tech Enthusiast"


                ]}
                typingSpeed={70}
                initialDelay={2500}
                pauseDuration={2000}
                deletingSpeed={40}
                loop={true}
                showCursor={true}
                cursorCharacter="|"
                cursorBlinkDuration={0.7}
                className="inline-block"
              />
            </motion.h2>

            <motion.p
              className="max-w-2xl mb-8 text-lg text-gray-600 dark:text-gray-400"
              variants={fadeInUp}
            >
              Passionate about architecting robust full-stack web solutions that scale seamlessly. I transform complex challenges into elegant code, leveraging cutting-edge technologies like React, Node.js, and modern frameworks to build exceptional digital experiences.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-6"
              variants={staggerContainer}
            >
              <motion.a
                href="#projects"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 text-lg rounded-lg transition transform duration-300"
                variants={staggerItem}
                whileHover={hoverScale}
                whileTap={tapScale}
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
              >
                View My Work
              </motion.a>
              <motion.a
                href="/WENDIMAGEGN-ABERA-FlowCV-Resume-20251106 (1)T.pdf"
                download
                className="bg-gray-800 hover:bg-gray-600 text-white font-bold py-3 px-8 text-lg rounded-lg transition transform duration-300"
                variants={staggerItem}
                whileHover={hoverScale}
                whileTap={tapScale}
              >
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center mt-12 md:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <AnimatedAvatar />
          </motion.div>
        </section>

        {/* What I Do Section */}
        <section className="bg-transparent py-16 px-6" id="services">
          <motion.div
            className="max-w-6xl mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-4xl font-bold mb-12 text-gray-900 dark:text-white"
              variants={fadeInUp}
            >
              What I Do
            </motion.h2>
            <motion.div
              className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
              variants={staggerContainer}
            >
              {/* Frontend Development */}
              <motion.div
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-300 dark:border-gray-700 hover:shadow-2xl transition duration-300 transform cursor-pointer"
                variants={staggerItem}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="mb-4">
                  <IconBadge size="lg" bgClass="bg-gradient-to-r from-purple-500 to-indigo-500">
                    <FaLaptopCode />
                  </IconBadge>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Frontend Development</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Building interactive and responsive web applications using <strong>React</strong>, <strong>Tailwind CSS</strong>, and modern UI frameworks to ensure smooth user experiences.
                </p>
              </motion.div>

              {/* Backend Development */}
              <motion.div
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-300 dark:border-gray-700 hover:shadow-2xl transition duration-300 transform cursor-pointer"
                variants={staggerItem}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="mb-4">
                  <IconBadge size="lg" bgClass="bg-gradient-to-r from-green-400 to-emerald-500">
                    <FaServer />
                  </IconBadge>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Backend Development</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Creating robust server-side solutions with <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>MySQL</strong> for secure, scalable, and efficient web applications.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about">
          <AboutPage />
        </section>

        {/* Skills Section */}
        <section id="skill">
          <SkillPage />
        </section>

        {/* Projects Section */}
        <section id="projects">
          <ProjectsPage />
        </section>

        {/* Resume Section */}
        <section id="resume">
          <ResumePage />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <ContactPage />
        </section>

        {/* Call-to-Action Section */}
        <section className="bg-transparent text-gray-900 dark:text-white py-16 px-6 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-4xl font-bold mb-4 text-gray-900 dark:text-white"
              variants={fadeInUp}
            >
              Ready to Start Your Project?
            </motion.h2>
            <motion.p
              className="max-w-2xl mx-auto mb-8 text-gray-600 dark:text-gray-200"
              variants={fadeInUp}
            >
              Let's work together to bring your ideas to life. I'm here to help you create exceptional digital experiences that drive results.
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-6"
              variants={staggerContainer}
            >
              <motion.a
                href="#contact"
                className="bg-white text-purple-700 font-bold py-4 px-8 rounded-xl text-lg flex items-center justify-center space-x-2 hover:bg-gray-200 transition transform duration-300"
                variants={staggerItem}
                whileHover={hoverScale}
                whileTap={tapScale}
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById('contact');
                  if (section) {
                    const headerOffset = 80;
                    const elementPosition = section.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
              >
                <IconBadge size="md" bgClass="bg-gradient-to-r from-indigo-500 to-purple-500">
                  <FaEnvelope />
                </IconBadge>
                <span>Get In Touch</span>
              </motion.a>

              <motion.a
                href="#skill"
                className="bg-transparent border border-gray-900 dark:border-white text-gray-900 dark:text-white font-bold py-4 px-8 rounded-xl text-lg flex items-center justify-center hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-blue-700 transition transform duration-300"
                variants={staggerItem}
                whileHover={hoverScale}
                whileTap={tapScale}
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
              >
                View My Skills
              </motion.a>
            </motion.div>
          </motion.div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
