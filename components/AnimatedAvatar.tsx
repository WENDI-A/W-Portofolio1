'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AnimatedAvatar = () => {
    return (
        <motion.div
            className="relative w-96 h-96 flex items-center justify-center cursor-grab active:cursor-grabbing"
            animate={{ y: [-20, 20, -20] }}
            transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            drag
            dragConstraints={{ top: -100, bottom: 100, left: -100, right: 100 }}
            whileHover={{ scale: 1.05 }}
        >
            {/* Avatar Face */}
            <div className="w-full h-full rounded-full overflow-hidden shadow-2xl">
                <Image
                    src="/profile-photo.png"
                    alt="Wendimagegn Abera - Software Engineer"
                    width={356}
                    height={356}
                    className="object-cover w-full h-full"
                    priority
                />
            </div>
        </motion.div>
    );
};

export default AnimatedAvatar;
