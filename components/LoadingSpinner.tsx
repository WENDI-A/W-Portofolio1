'use client';

import React from 'react';

type Size = 'sm' | 'md' | 'lg' | 'xl';

interface LoadingSpinnerProps {
    size?: Size;
    text?: string;
}

export default function LoadingSpinner({ size = 'md', text = 'Loading...' }: LoadingSpinnerProps) {
    const sizeClasses: Record<Size, string> = {
        sm: 'w-6 h-6',
        md: 'w-12 h-12',
        lg: 'w-16 h-16',
        xl: 'w-20 h-20',
    };

    return (
        <div className="flex flex-col items-center justify-center p-8">
            <div
                className={`${sizeClasses[size]} border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin`}
                role="status"
                aria-label="Loading"
            />
            {text && <p className="mt-4 text-gray-400 text-sm">{text}</p>}
        </div>
    );
}
