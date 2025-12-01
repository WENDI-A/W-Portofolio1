
"use client"; // Needed for React hooks and client-side animations

import React from 'react';
import IconBadge from '../components/IconBadge';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaMobileAlt, FaEthereum } from 'react-icons/fa';

const techIcons = [
  { icon: <FaReact />, color: 'text-blue-400', x: -80, y: -80 },
  { icon: <FaNodeJs />, color: 'text-green-500', x: 80, y: -80 },
  { icon: <FaMobileAlt />, color: 'text-pink-500', x: -80, y: 80 },
  { icon: <FaEthereum />, color: 'text-purple-500', x: 80, y: 80 },
];

const AnimatedAvatar = () => {
  return (
    <motion.div
      className="relative w-64 h-64 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center shadow-xl cursor-grab active:cursor-grabbing"
      drag
      dragConstraints={{ top: -100, bottom: 100, left: -100, right: 100 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-pink-400 to-indigo-500 flex items-center justify-center text-white text-4xl font-bold">
        😊
      </div>

      {techIcons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute text-3xl ${item.color}`}
          initial={{ x: item.x, y: item.y, opacity: 0 }}
          animate={{ x: item.x, y: item.y, opacity: 1 }}
          transition={{ delay: index * 0.3 }}
        >
          {item.icon}
        </motion.div>
      ))}
    </motion.div>
  );
};

const Home: React.FC = () => {
  const nameWords = ["Wendimagegn", "Abera"];

  return (
    <div className="bg-transparent text-gray-900 dark:text-white transition-colors duration-300">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col md:flex-row items-center justify-center text-left py-16 px-4" id="home">
        <div className="flex-1">
          <div className="bg-gradient-to-r from-purple-400 to-blue-500 text-white px-4 py-2 rounded-full mb-4">
            Available for new projects
          </div>

          <h1 className="text-6xl font-bold mb-4 text-gray-900 dark:text-white flex space-x-4">
            {nameWords.map((word, index) => (
              <motion.span
                key={index}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.5, type: "spring", stiffness: 120 }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <h2 className="text-3xl mb-6 text-gray-700 dark:text-gray-300">Software Engineer</h2>
          <p className="max-w-2xl mb-8 text-lg text-gray-600 dark:text-gray-400">
            Dedicated to creating scalable web and mobile applications, as well as resolving complex issues through clean and efficient code. Specialization includes React, Node.js, Flutter, and Solidity.
          </p>

          <div className="flex space-x-6">
            <a
              href="#projects"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 text-lg rounded-lg transition transform hover:scale-105 duration-300"
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
            </a>
            <a
              href="#resume"
              className="bg-gray-800 hover:bg-gray-600 text-white font-bold py-3 px-8 text-lg rounded-lg transition transform hover:scale-105 duration-300"
              onClick={(e) => {
                e.preventDefault();
                const section = document.getElementById('resume');
                if (section) {
                  const headerOffset = 80;
                  const elementPosition = section.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center mt-12 md:mt-0">
          <AnimatedAvatar />
        </div>
      </section>

      {/* You can continue porting "What I Do" and other sections here */}

    </div>
  );
};

      {/* What I Do Section */}
      <section className="bg-transparent py-16 px-6" id="services">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend Development */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-300 dark:border-gray-700 hover:shadow-2xl hover:scale-105 hover:bg-purple-50 dark:hover:bg-gray-700 transition duration-300 transform cursor-pointer">
              <div className="mb-4">
                <IconBadge size="lg" bgClass="bg-gradient-to-r from-purple-500 to-indigo-500"><i className="fas fa-laptop-code" /></IconBadge>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Frontend Development</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Building interactive and responsive web applications using <strong>React</strong>, <strong>Tailwind CSS</strong>, and modern UI frameworks to ensure smooth user experiences.
              </p>
            </div>

            {/* Backend Development */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-300 dark:border-gray-700 hover:shadow-2xl hover:scale-105 hover:bg-purple-50 dark:hover:bg-gray-700 transition duration-300 transform cursor-pointer">
              <div className="mb-4">
                <IconBadge size="lg" bgClass="bg-gradient-to-r from-green-400 to-emerald-500"><i className="fas fa-server" /></IconBadge>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Backend Development</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Creating robust server-side solutions with <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>MySQL</strong> for secure, scalable, and efficient web applications.
              </p>
            </div>

            {/* UI/UX Design */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-300 dark:border-gray-700 hover:shadow-2xl hover:scale-105 hover:bg-purple-50 dark:hover:bg-gray-700 transition duration-300 transform cursor-pointer">
              <div className="mb-4">
                <IconBadge size="lg" bgClass="bg-gradient-to-r from-blue-400 to-sky-500"><i className="fas fa-pencil-ruler" /></IconBadge>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">UI/UX Design</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Designing intuitive and visually appealing user interfaces using <strong>Figma</strong> focusing on usability, accessibility, and user-centered design principles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-transparent text-white py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">Ready to Start Your Project?</h2>
        <p className="max-w-2xl mx-auto mb-8 text-gray-200">
          Let's work together to bring your ideas to life. I'm here to help you create exceptional digital experiences that drive results.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="#contact"
            className="bg-white text-purple-700 font-bold py-4 px-8 rounded-xl text-lg flex items-center justify-center space-x-2 hover:bg-gray-200 transition transform hover:scale-105 duration-300"
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
            <IconBadge size="md" bgClass="bg-gradient-to-r from-indigo-500 to-purple-500"><i className="fas fa-envelope" /></IconBadge>
            <span>Get In Touch</span>
          </a>

          <a
            href="#skill"
            className="bg-transparent border border-white text-blue font-bold py-4 px-8 rounded-xl text-lg flex items-center justify-center hover:bg-white hover:text-blue-700 transition transform hover:scale-105 duration-300"
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
          </a>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
};

export default Home;
