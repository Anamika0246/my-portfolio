import React from 'react';
import { motion } from 'framer-motion';
import { VscGithub, VscLinkExternal, VscCode, VscCalendar } from 'react-icons/vsc';

/**
 * ProjectPage Component - Reusable project detail page
 * 
 * Props:
 * - category: Frontend, Backend, Full Stack, ML, or Android
 * - projectId: Unique identifier for the project
 * 
 * This component demonstrates:
 * - Data lookup based on props
 * - Conditional rendering
 * - Component reusability
 */

const ProjectPage = ({ category, projectId }) => {
  // Project data - in a real app, this would come from an API or database
  const projectsData = {
    'Full Stack': {
      '1': {
        title: 'Hostel ERP - MERN Stack',
        description: 'Full-stack hostel management system with modules for allocation, attendance, and notices.',
        longDescription: 'Built a comprehensive hostel management system using the MERN stack featuring secure REST APIs with JWT-based role authorization, Redux state management for real-time UI updates, and optimized MongoDB schemas for scalable and efficient queries.',
        technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redux', 'JWT', 'REST APIs'],
        features: [
          'Hostel allocation and room management',
          'Attendance tracking system',
          'Notice board and announcements',
          'Secure JWT-based role authorization',
          'Redux state management for real-time updates',
          'Scalable MongoDB schema design',
          'Responsive UI with React.js'
        ],
        challenges: 'Managing complex state across multiple modules and ensuring real-time synchronization between different user roles (students, wardens, admins).',
        solution: 'Implemented Redux for centralized state management and used JWT-based role authorization to handle different permission levels efficiently.',
        githubUrl: 'https://github.com/Anamika0246',
        liveUrl: null,
        date: 'Nov 2024',
        status: 'Completed'
      },
      '2': {
        title: 'Srajinik Labs Website - React Platform',
        description: 'SEO optimized responsive platform developed using React and Tailwind CSS.',
        longDescription: 'Developed a professional, SEO-optimized responsive website for Srajinik Labs featuring smooth animations, modern UI/UX design, and deployed on Vercel with optimized build configuration for maximum performance.',
        technologies: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
        features: [
          'SEO optimized for better search rankings',
          'Fully responsive design across all devices',
          'Framer Motion animations for enhanced UX',
          'Modern and clean UI design',
          'Fast loading with optimized build',
          'Deployed on Vercel with CI/CD'
        ],
        challenges: 'Ensuring smooth animations while maintaining optimal performance and SEO scores.',
        solution: 'Used Framer Motion for declarative animations and implemented code splitting with lazy loading to maintain 90+ Lighthouse scores.',
        githubUrl: 'https://github.com/Anamika0246',
        liveUrl: null,
        date: 'Jan 2025',
        status: 'Completed'
      }
    },
    'ML': {
      '1': {
        title: 'MITRA - AI Medical Chatbot',
        description: 'RAG-enabled AI chatbot with Pinecone for contextual medical query resolution.',
        longDescription: 'Engineered an intelligent medical chatbot using Retrieval-Augmented Generation (RAG) architecture with Pinecone vector database for contextual query resolution. Implemented vector similarity search for low latency retrieval and optimized embedding indexing for improved response relevance.',
        technologies: ['Python', 'LangChain', 'Pinecone', 'Sentence Transformers', 'RAG', 'NLP'],
        features: [
          'RAG-enabled architecture for accurate responses',
          'Pinecone vector database for fast retrieval',
          'Vector similarity search for low latency',
          'Contextual medical query resolution',
          'Optimized embedding indexing',
          'Natural language understanding'
        ],
        challenges: 'Achieving low latency retrieval while maintaining high accuracy in medical query responses.',
        solution: 'Implemented vector similarity search with Pinecone and optimized embedding indexing to balance speed and relevance.',
        githubUrl: 'https://github.com/Anamika0246',
        liveUrl: null,
        date: 'Mar 2025',
        status: 'Completed'
      }
    }
  };

  // Get project data based on category and ID
  const project = projectsData[category]?.[projectId];

  if (!project) {
    return (
      <div className="h-full flex items-center justify-center p-8">
        <p style={{ color: 'var(--vscode-text-secondary)' }}>
          Project not found
        </p>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-4">
          <span 
            className="px-3 py-1 rounded text-sm font-semibold"
            style={{ 
              backgroundColor: 'var(--vscode-accent)',
              color: 'white'
            }}
          >
            {category}
          </span>
          <span 
            className="px-3 py-1 rounded text-sm"
            style={{ 
              backgroundColor: project.status === 'Completed' ? '#4CAF50' : '#FF9800',
              color: 'white'
            }}
          >
            {project.status}
          </span>
        </div>

        <h1 className="text-4xl font-bold mb-3" style={{ color: 'var(--vscode-text-active)' }}>
          {project.title}
        </h1>
        
        <p className="text-xl mb-4" style={{ color: 'var(--vscode-text)' }}>
          {project.description}
        </p>

        <div className="flex items-center gap-4 text-sm" style={{ color: 'var(--vscode-text-secondary)' }}>
          <div className="flex items-center gap-1">
            <VscCalendar />
            <span>{project.date}</span>
          </div>
        </div>
      </motion.div>

      <div className="max-w-5xl">
        {/* Project Links */}
        <motion.div
          className="flex gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded border hover:bg-[#2a2d2e] transition-colors"
            style={{ borderColor: 'var(--vscode-accent)', color: 'var(--vscode-accent)' }}
          >
            <VscGithub className="text-xl" />
            View Code
          </a>
          
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded hover:opacity-80 transition-opacity"
              style={{ backgroundColor: 'var(--vscode-accent)', color: 'white' }}
            >
              <VscLinkExternal className="text-xl" />
              Live Demo
            </a>
          )}
        </motion.div>

        {/* Long Description */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-3" style={{ color: 'var(--vscode-accent)' }}>
            Overview
          </h2>
          <p className="leading-relaxed" style={{ color: 'var(--vscode-text)' }}>
            {project.longDescription}
          </p>
        </motion.div>

        {/* Technologies */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-3" style={{ color: 'var(--vscode-accent)' }}>
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded border text-sm font-medium"
                style={{ 
                  borderColor: 'var(--vscode-accent)',
                  color: 'var(--vscode-accent)'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-3" style={{ color: 'var(--vscode-accent)' }}>
            Key Features
          </h2>
          <ul className="space-y-2">
            {project.features.map((feature, index) => (
              <li 
                key={index}
                className="flex items-start gap-2"
                style={{ color: 'var(--vscode-text)' }}
              >
                <span style={{ color: 'var(--vscode-accent)' }}>✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Challenges & Solutions */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div 
            className="p-6 rounded-lg border"
            style={{ 
              backgroundColor: 'var(--vscode-bg)',
              borderColor: 'var(--vscode-border)'
            }}
          >
            <h3 className="text-lg font-semibold mb-2" style={{ color: '#F48771' }}>
              Challenge
            </h3>
            <p style={{ color: 'var(--vscode-text)' }}>
              {project.challenges}
            </p>
          </div>

          <div 
            className="p-6 rounded-lg border"
            style={{ 
              backgroundColor: 'var(--vscode-bg)',
              borderColor: 'var(--vscode-border)'
            }}
          >
            <h3 className="text-lg font-semibold mb-2" style={{ color: '#4CAF50' }}>
              Solution
            </h3>
            <p style={{ color: 'var(--vscode-text)' }}>
              {project.solution}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectPage;
