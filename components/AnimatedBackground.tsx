'use client';

import React, { useEffect, useState, useRef, useMemo } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

export default function AnimatedBackground() {
    const [init, setInit] = useState(false);
    const [isDark, setIsDark] = useState(() => {
        if (typeof window === 'undefined') return true;
        return document.documentElement.classList.contains('dark');
    });
    const [activeSection, setActiveSection] = useState('home');

    const backgroundRef = useRef<HTMLDivElement>(null);

    // Initialize tsParticles
    useEffect(() => {
        initParticlesEngine(async (engine: Engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    useEffect(() => {
        // Watch for dark mode changes
        const observer = new MutationObserver(() => {
            setIsDark(document.documentElement.classList.contains('dark'));
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        // Only detect which section is in view
        const handleScroll = () => {
            const sections = ['home', 'about', 'skill', 'projects', 'resume', 'contact'];
            const scrollPosition = window.scrollY + 200;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i]);
                    break;
                }
            }

            if (backgroundRef.current) {
                backgroundRef.current.style.transform = `translateY(0px)`;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Change CSS variables based on current section theme
        const root = document.documentElement;

        const themes: Record<string, string[]> = {
            'home': ['#6366f1', '#8b5cf6', '#06b6d4'],
            'about': ['#8b5cf6', '#06b6d4', '#60a5fa'],
            'skill': ['#06b6d4', '#34d399', '#8b5cf6'],
            'projects': ['#f472b6', '#8b5cf6', '#06b6d4'],
            'resume': ['#6366f1', '#8b5cf6', '#a78bfa'],
            'contact': ['#34d399', '#06b6d4', '#60a5fa'],
        };

        const palette = themes[activeSection] || ['#6366f1', '#8b5cf6', '#06b6d4'];

        root.style.setProperty('--bg-accent-1', palette[0]);
        root.style.setProperty('--bg-accent-2', palette[1]);
        root.style.setProperty('--bg-accent-3', palette[2]);
        root.style.setProperty('--blob-opacity', '0.15');
        root.style.setProperty('--blur-strength', '60px');

        root.style.setProperty('--bg-transition', 'opacity 600ms ease');
        const t = setTimeout(() => root.style.removeProperty('--bg-transition'), 650);
        return () => clearTimeout(t);
    }, [activeSection, isDark]);

    // Particles configuration - beautiful interactive particles
    const particlesOptions = useMemo(() => ({
        background: {
            color: {
                value: "transparent",
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 100,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: isDark ? "#ffffff" : "#000000",
            },
            links: {
                color: isDark ? "#ffffff" : "#000000",
                distance: 150,
                enable: true,
                opacity: isDark ? 0.3 : 0.2,
                width: 1,
            },
            move: {
                direction: "none" as const,
                enable: true,
                outModes: {
                    default: "bounce" as const,
                },
                random: false,
                speed: 1,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                },
                value: 80,
            },
            opacity: {
                value: isDark ? 0.5 : 0.3,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 3 },
            },
        },
        detectRetina: true,
    }), [isDark]);

    return (
        <div
            ref={backgroundRef}
            aria-hidden
            className="animated-bg fixed inset-0 pointer-events-none -z-10"
            style={{ height: '100vh' }}
        >
            {/* tsParticles Background - Interactive particles with links */}
            {init && (
                <Particles
                    id="tsparticles"
                    options={particlesOptions}
                    className="absolute inset-0"
                />
            )}

            <div className="bg-layer absolute inset-0" />

            {/* Floating blurred blobs */}
            <div className="blob blob-1"
                style={{ opacity: 'var(--blob-opacity)', filter: 'blur(var(--blur-strength))' }}
            />
            <div className="blob blob-2"
                style={{ opacity: 'var(--blob-opacity)', filter: 'blur(var(--blur-strength))' }}
            />
            <div className="blob blob-3"
                style={{ opacity: 'var(--blob-opacity)', filter: 'blur(var(--blur-strength))' }}
            />

            {/* Subtle moving grid overlay */}
            <div className="grid-overlay absolute inset-0" />
        </div>
    );
}
