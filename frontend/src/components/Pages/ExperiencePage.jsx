import React from 'react';
import { motion } from 'framer-motion';
import { VscBriefcase, VscLocation, VscCalendar } from 'react-icons/vsc';

/**
 * ExperiencePage Component - Work experience timeline
 * 
 * Timeline Pattern:
 * - Vertical timeline showing career progression
 * - Each item has date, company, role, and achievements
 */

const ExperienceItem = ({ experience, index }) => {
  return (
    <motion.div
      className="flex gap-6 mb-8"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2 }}
    >
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        <div 
          className="w-4 h-4 rounded-full border-2"
          style={{ borderColor: 'var(--vscode-accent)', backgroundColor: 'var(--vscode-bg)' }}
        />
        {index !== experiences.length - 1 && ( // Don't show line for last item
          <div 
            className="w-[2px] flex-1 mt-2"
            style={{ backgroundColor: 'var(--vscode-border)' }}
          />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-semibold" style={{ color: 'var(--vscode-text-active)' }}>
            {experience.role}
          </h3>
          <span 
            className="text-sm px-3 py-1 rounded"
            style={{ 
              backgroundColor: 'var(--vscode-badge-bg)',
              color: 'var(--vscode-badge-text)'
            }}
          >
            {experience.type}
          </span>
        </div>

        <div className="flex items-center gap-4 mb-3 text-sm" style={{ color: 'var(--vscode-text-secondary)' }}>
          <div className="flex items-center gap-1">
            <VscBriefcase />
            <span>{experience.company}</span>
          </div>
          <div className="flex items-center gap-1">
            <VscLocation />
            <span>{experience.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <VscCalendar />
            <span>{experience.duration}</span>
          </div>
        </div>

        <p className="mb-3" style={{ color: 'var(--vscode-text)' }}>
          {experience.description}
        </p>

        {/* Achievements */}
        <ul className="list-none space-y-1">
          {experience.achievements.map((achievement, i) => (
            <li key={i} className="flex items-start gap-2" style={{ color: 'var(--vscode-text)' }}>
              <span style={{ color: 'var(--vscode-accent)' }}>▸</span>
              {achievement}
            </li>
          ))}
        </ul>

        {/* Technologies used */}
        <div className="flex flex-wrap gap-2 mt-3">
          {experience.technologies.map((tech, i) => (
            <span 
              key={i}
              className="text-xs px-2 py-1 rounded border"
              style={{ 
                borderColor: 'var(--vscode-accent)',
                color: 'var(--vscode-accent)'
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ExperiencePage = () => {
  const experiences = [
    {
      role: 'Associate Software Engineer Intern',
      company: 'Accenture',
      location: 'India',
      duration: 'May 2025 - Jul 2025',
      type: 'Internship',
      description: 'Designed and developed enterprise-level backend systems using NestJS and PostgreSQL, following microservices architecture and Agile methodologies.',
      achievements: [
        'Designed and developed a modular blogging backend using NestJS and PostgreSQL',
        'Implemented 15+ RESTful APIs with JWT authentication and rule-based access control',
        'Designed normalized relational schemas and optimized queries for improved performance',
        'Automated API documentation using Swagger, improving developer collaboration',
        'Worked in Agile sprint environment with peer code reviews and Git workflows'
      ],
      technologies: ['NestJS', 'PostgreSQL', 'JWT', 'Swagger', 'REST APIs', 'Git', 'Agile']
    }
  ];

  return (
    <div className="h-full overflow-y-auto p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <h1 className="text-4xl font-bold mb-2" style={{ color: 'var(--vscode-text-active)' }}>
          Work Experience
        </h1>
        <p className="text-lg" style={{ color: 'var(--vscode-text-secondary)' }}>
          My professional journey in software development
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="max-w-4xl">
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} experience={experience} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;
