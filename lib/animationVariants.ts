/**
 * Advanced Framer Motion Animation Variants
 * Provides sophisticated animation patterns with custom easing curves
 */

import { Variants, Transition } from "framer-motion";

// Custom easing curves for ultra-smooth animations
const customEasing = {
    // Smooth ease out with slight overshoot
    smooth: [0.43, 0.13, 0.23, 0.96],
    // Anticipate and overshoot
    bounce: [0.68, -0.55, 0.265, 1.55],
    // Gentle ease in out
    gentle: [0.645, 0.045, 0.355, 1],
    // Snappy response
    snappy: [0.25, 0.46, 0.45, 0.94],
};

// Advanced fade and slide from bottom with custom easing
export const fadeInUp: Variants = {
    initial: { opacity: 0, y: 30, filter: "blur(4px)" },
    animate: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.8,
            ease: customEasing.smooth
        }
    },
    exit: {
        opacity: 0,
        y: -20,
        filter: "blur(4px)",
        transition: { duration: 0.4 }
    }
};

// Advanced fade from left with rotation
export const fadeInLeft: Variants = {
    initial: { opacity: 0, x: -60, rotateY: -15 },
    animate: {
        opacity: 1,
        x: 0,
        rotateY: 0,
        transition: {
            duration: 0.8,
            ease: customEasing.gentle
        }
    },
    exit: {
        opacity: 0,
        x: -30,
        transition: { duration: 0.4 }
    }
};

// Advanced fade from right with rotation
export const fadeInRight: Variants = {
    initial: { opacity: 0, x: 60, rotateY: 15 },
    animate: {
        opacity: 1,
        x: 0,
        rotateY: 0,
        transition: {
            duration: 0.8,
            ease: customEasing.gentle
        }
    },
    exit: {
        opacity: 0,
        x: 30,
        transition: { duration: 0.4 }
    }
};

// Smooth scale with blur
export const scaleIn: Variants = {
    initial: { scale: 0.85, opacity: 0, filter: "blur(10px)" },
    animate: {
        scale: 1,
        opacity: 1,
        filter: "blur(0px)",
        transition: {
            duration: 0.7,
            ease: customEasing.bounce
        }
    },
    exit: {
        scale: 0.9,
        opacity: 0,
        filter: "blur(8px)",
        transition: { duration: 0.3 }
    }
};

// Enhanced pop with multi-stage animation
export const popIn: Variants = {
    initial: { scale: 0.7, opacity: 0, rotate: -5 },
    animate: {
        scale: 1,
        opacity: 1,
        rotate: 0,
        transition: {
            type: "spring",
            stiffness: 500,
            damping: 25,
            mass: 0.8
        }
    },
    exit: {
        scale: 0.8,
        opacity: 0,
        rotate: 5,
        transition: { duration: 0.3 }
    }
};

// Sophisticated stagger with wave effect
export const staggerContainer: Variants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
            staggerDirection: 1
        }
    },
    exit: {
        opacity: 0,
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
};

// Ultra-fast stagger for snappy grids
export const staggerContainerFast: Variants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1
        }
    }
};

// Advanced stagger item with multiple properties
export const staggerItem: Variants = {
    initial: {
        opacity: 0,
        y: 30,
        scale: 0.95,
        filter: "blur(4px)"
    },
    animate: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {
            duration: 0.6,
            ease: customEasing.smooth
        }
    },
    exit: {
        opacity: 0,
        y: -20,
        scale: 0.95,
        filter: "blur(4px)",
        transition: { duration: 0.3 }
    }
};

// Smooth scroll reveal with perspective
export const scrollReveal: Variants = {
    initial: {
        opacity: 0,
        y: 60,
        scale: 0.95,
        filter: "blur(6px)"
    },
    animate: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {
            duration: 0.8,
            ease: customEasing.smooth,
            staggerChildren: 0.1
        }
    },
    exit: {
        opacity: 0,
        y: -30,
        transition: { duration: 0.4 }
    }
};

// Scroll reveal from left with depth
export const scrollRevealLeft: Variants = {
    initial: {
        opacity: 0,
        x: -60,
        rotateY: -10,
        filter: "blur(4px)"
    },
    animate: {
        opacity: 1,
        x: 0,
        rotateY: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.9,
            ease: customEasing.gentle
        }
    },
    exit: {
        opacity: 0,
        x: -30,
        transition: { duration: 0.4 }
    }
};

// Scroll reveal from right with depth
export const scrollRevealRight: Variants = {
    initial: {
        opacity: 0,
        x: 60,
        rotateY: 10,
        filter: "blur(4px)"
    },
    animate: {
        opacity: 1,
        x: 0,
        rotateY: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.9,
            ease: customEasing.gentle
        }
    },
    exit: {
        opacity: 0,
        x: 30,
        transition: { duration: 0.4 }
    }
};

// Advanced hover with multiple properties
export const hoverScale = {
    scale: 1.05,
    y: -2,
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
    transition: {
        type: "spring",
        stiffness: 400,
        damping: 15
    }
};

// Smooth float with rotation
export const hoverFloat = {
    y: -12,
    rotate: 1,
    scale: 1.02,
    transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
    }
};

// Gentle tap with haptic feel
export const tapScale = {
    scale: 0.96,
    transition: {
        duration: 0.1,
        ease: customEasing.snappy
    }
};

// Premium card hover with glow effect
export const cardHover = {
    y: -15,
    scale: 1.03,
    rotateX: 2,
    boxShadow: "0 25px 70px rgba(0, 0, 0, 0.2)",
    transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
    }
};

// Slide up reveal for page transitions
export const slideUp: Variants = {
    initial: { y: "100%", opacity: 0 },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.7,
            ease: customEasing.smooth
        }
    },
    exit: {
        y: "-100%",
        opacity: 0,
        transition: {
            duration: 0.5,
            ease: customEasing.snappy
        }
    }
};

// Fade through for smooth page transitions
export const fadeThrough: Variants = {
    initial: { opacity: 0, scale: 0.98, filter: "blur(10px)" },
    animate: {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        transition: {
            duration: 0.6,
            ease: customEasing.smooth
        }
    },
    exit: {
        opacity: 0,
        scale: 1.02,
        filter: "blur(10px)",
        transition: {
            duration: 0.4,
            ease: customEasing.snappy
        }
    }
};

// Smooth layout animations
export const layoutTransition: Transition = {
    type: "spring",
    stiffness: 350,
    damping: 30
};
