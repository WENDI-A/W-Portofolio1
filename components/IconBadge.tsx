'use client';

import React from 'react';

type Size = 'sm' | 'md' | 'lg' | 'xl';

interface IconBadgeProps {
    children: React.ReactNode;
    size?: Size;
    bgClass?: string;
    className?: string;
}

const sizeMap: Record<Size, string> = {
    sm: 'w-10 h-10 text-lg',
    md: 'w-12 h-12 text-2xl',
    lg: 'w-16 h-16 text-3xl',
    xl: 'w-20 h-20 text-4xl',
};

export default function IconBadge({ children, size = 'md', bgClass = 'bg-gradient-to-r from-indigo-500 to-purple-500', className = '' }: IconBadgeProps) {
    const sz = sizeMap[size] || sizeMap.md;

    return (
        <div className={`rounded-full flex items-center justify-center ${bgClass} text-white shadow-lg ${sz} ${className}`}>
            <span className="transform">{children}</span>
        </div>
    );
}
