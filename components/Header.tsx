'use client';

import { FiSun, FiMoon } from "react-icons/fi";

import React, { useState, useEffect } from "react";

const Header = () => {
    const [darkMode, setDarkMode] = useState(true);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);
    }, [darkMode]);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about", "skill", "projects", "resume", "contact"];
            const scrollPosition = window.scrollY + 100; // Offset for header height

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Check on mount

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            const headerOffset = 80;
            const elementPosition = section.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    const navLinkClasses = (sectionId: string) =>
        activeSection === sectionId
            ? "border-b-2 border-purple-500 pb-1 text-purple-500 font-semibold"
            : "hover:text-purple-400 transition-colors duration-200";

    return (
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md text-gray-900 dark:text-white shadow-md transition-colors duration-300">
            <div className="max-w-7xl mx-auto flex justify-between px-6 py-4 items-center">
                <a
                    href="#home"
                    onClick={(e) => handleNavClick(e, "home")}
                    className="text-2xl font-bold cursor-pointer hover:text-purple-400 transition-colors text-xl font-bold bg-gradient-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent"
                >
                    WENDIMAGEGN ABERA
                </a>

                <nav className="space-x-12 hidden md:flex">
                    <a
                        href="#home"
                        onClick={(e) => handleNavClick(e, "home")}
                        className={navLinkClasses("home")}
                    >
                        Home
                    </a>
                    <a
                        href="#about"
                        onClick={(e) => handleNavClick(e, "about")}
                        className={navLinkClasses("about")}
                    >
                        About
                    </a>
                    <a
                        href="#skill"
                        onClick={(e) => handleNavClick(e, "skill")}
                        className={navLinkClasses("skill")}
                    >
                        Skill
                    </a>
                    <a
                        href="#projects"
                        onClick={(e) => handleNavClick(e, "projects")}
                        className={navLinkClasses("projects")}
                    >
                        Projects
                    </a>
                    <a
                        href="#resume"
                        onClick={(e) => handleNavClick(e, "resume")}
                        className={navLinkClasses("resume")}
                    >
                        Resume
                    </a>
                    <a
                        href="#contact"
                        onClick={(e) => handleNavClick(e, "contact")}
                        className={navLinkClasses("contact")}
                    >
                        Contact
                    </a>
                </nav>

                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="ml-4 p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-800 dark:text-yellow-400 transition-all duration-300 shadow-sm"
                    aria-label="Toggle Theme"
                >
                    {darkMode ? <FiSun className="w-6 h-6" /> : <FiMoon className="w-6 h-6" />}
                </button>
            </div>
        </header>
    );
};

export default Header;
