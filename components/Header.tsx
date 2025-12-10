'use client';

import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

import React, { useState, useEffect } from "react";

const Header = () => {
    const [darkMode, setDarkMode] = useState(true);
    const [activeSection, setActiveSection] = useState("home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = () => {
            if (isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isMobileMenuOpen]);

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
            <div className="max-w-7xl mx-auto flex justify-between px-4 sm:px-6 py-4 items-center">
                <a
                    href="#home"
                    onClick={(e) => handleNavClick(e, "home")}
                    className="text-lg sm:text-xl md:text-2xl font-bold cursor-pointer hover:text-purple-400 transition-colors bg-gradient-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent"
                >
                    <span className="hidden sm:inline">WENDIMAGEGN ABERA</span>
                    <span className="sm:hidden">WENDI</span>
                </a>

                {/* Desktop Navigation */}
                <nav className="space-x-8 lg:space-x-12 hidden md:flex">
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
                        Skills
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

                {/* Mobile menu button and theme toggle */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-800 dark:text-yellow-400 transition-all duration-300 shadow-sm"
                        aria-label="Toggle Theme"
                    >
                        {darkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
                    </button>
                    
                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300 shadow-sm"
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-700">
                    <nav className="px-4 py-4 space-y-3">
                        {[
                            { href: "#home", label: "Home", id: "home" },
                            { href: "#about", label: "About", id: "about" },
                            { href: "#skill", label: "Skills", id: "skill" },
                            { href: "#projects", label: "Projects", id: "projects" },
                            { href: "#resume", label: "Resume", id: "resume" },
                            { href: "#contact", label: "Contact", id: "contact" }
                        ].map((item) => (
                            <a
                                key={item.id}
                                href={item.href}
                                onClick={(e) => {
                                    handleNavClick(e, item.id);
                                    setIsMobileMenuOpen(false);
                                }}
                                className={`block py-3 px-4 rounded-lg transition-colors duration-200 ${
                                    activeSection === item.id
                                        ? "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 font-semibold"
                                        : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                                }`}
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
