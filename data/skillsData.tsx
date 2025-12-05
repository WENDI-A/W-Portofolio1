import { IconType } from 'react-icons';
import { FaReact, FaServer, FaTools, FaUsers } from 'react-icons/fa';

export interface Skill {
    name: string;
}

export interface SkillCategory {
    title: string;
    icon: IconType;
    bg: string;
    skills: Skill[];
}

export interface Certification {
    title: string;
    org: string;
    year: number;
}

export const skillsData: SkillCategory[] = [
    {
        title: 'Frontend Development',
        icon: FaReact,
        bg: 'bg-gradient-to-r from-indigo-500 to-purple-500',
        skills: [
            { name: 'React' },
            { name: 'Next.js' },
            { name: 'TypeScript' },
            { name: 'Tailwind CSS' },
            { name: 'JavaScript' },
            { name: 'HTML' },
            { name: 'CSS' },
            { name: 'Vite' },
            { name: 'Redux' },
            { name: 'Axios' },
            { name: 'Framer Motion' },
            { name: 'Three.js' },
            { name: 'Webpack' },
        ],
    },
    {
        title: 'Backend Development',
        icon: FaServer,
        bg: 'bg-gradient-to-r from-yellow-500 to-orange-500',
        skills: [
            { name: 'Node.js' },
            { name: 'Express.js' },
            { name: 'MySQL' },
            { name: 'REST APIs' },
            { name: 'MongoDB' },
            { name: 'Prisma' },
            { name: 'JWT' },
        ],
    },
    {
        title: 'Tools & Technologies',
        icon: FaTools,
        bg: 'bg-gradient-to-r from-red-500 to-pink-500',
        skills: [
            { name: 'Git' },
            { name: 'GitHub' },
            { name: 'Postman' },
            { name: 'Firebase' },
            { name: 'Supabase' },
            { name: 'Figma' },

        ],
    },
    {
        title: 'Soft Skills',
        icon: FaUsers,
        bg: 'bg-gradient-to-r from-green-400 to-emerald-500',
        skills: [
            { name: 'Problem Solving' },
            { name: 'Team Leadership' },
            { name: 'Communication' },
            { name: 'Project Management' },
        ],
    },
];

export const certifications: Certification[] = [
    { title: 'JavaScript Algorithms and Data Structures', org: 'freeCodeCamp', year: 2024 },
    { title: 'Programming Fundamentals', org: 'Udacity', year: 2024 },
];
