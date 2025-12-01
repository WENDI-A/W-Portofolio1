'use client';

import React from 'react';
import { motion as Motion } from "framer-motion";

const pageVariants = {
    initial: { opacity: 0, y: 20, scale: 0.995 },
    animate: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut",
            when: "beforeChildren",
            staggerChildren: 0.12,
        },
    },
    exit: { opacity: 0, y: -10, transition: { duration: 0.35 } },
};

interface PageWrapperProps {
    children: React.ReactNode;
    className?: string;
}

export default function PageWrapper({ children, className = "" }: PageWrapperProps) {
    return (
        <Motion.div
            className={`w-full ${className}`}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
        >
            {children}
        </Motion.div>
    );
}
