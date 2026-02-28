import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  VscCode, VscDatabase, VscServer, VscGithub, 
  VscTools, VscBrowser, VscTerminal 
} from 'react-icons/vsc';

/**
 * SkillsPage Component - Showcase skills with progress bars
 * 
 * Component Composition:
 * - Breaking down UI into smaller components (SkillCard, ProgressBar)
 * - Makes code reusable and easier to maintain
 * 
 * Array.map() for rendering lists:
 * - We define skill data in arrays
 * - Use .map() to render each skill dynamically
 */

// Reusable SkillCard component
const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      className="bg-[#2a2d2e] p-4 rounded-lg border hover:border-[#007ACC] transition-colors"
      style={{ borderColor: 'var(--vscode-border)' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="text-2xl" style={{ color: skill.color }}>
          {skill.icon}
        </div>
        <h3 className="text-lg font-semibold" style={{ color: 'var(--vscode-text-active)' }}>
          {skill.name}
        </h3>
      </div>
      
      {/* Progress bar */}
      <div className="mb-2">
        <div className="flex justify-between text-sm mb-1" style={{ color: 'var(--vscode-text-secondary)' }}>
          <span>Proficiency</span>
          <span>{skill.level}%</span>
        </div>
        <div className="h-2 bg-[#1e1e1e] rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: skill.color }}
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
          />
        </div>
      </div>
      
      {/* Skill tags */}
      <div className="flex flex-wrap gap-2 mt-3">
        {skill.tags.map((tag, i) => (
          <span 
            key={i}
            className="text-xs px-2 py-1 rounded"
            style={{ 
              backgroundColor: 'var(--vscode-badge-bg)',
              color: 'var(--vscode-badge-text)'
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const SkillsPage = () => {
  // Skills data organized by category
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <VscCode />,
      skills: [
        {
          name: 'C++',
          level: 90,
          color: '#00599C',
          icon: <VscCode />,
          tags: ['DSA', 'LeetCode', 'Competitive Programming']
        },
        {
          name: 'Python',
          level: 85,
          color: '#3776AB',
          icon: <VscCode />,
          tags: ['Django', 'Flask', 'AI/ML']
        },
        {
          name: 'JavaScript',
          level: 88,
          color: '#F7DF1E',
          icon: <VscCode />,
          tags: ['ES6+', 'Async/Await', 'Node.js']
        },
        {
          name: 'Java',
          level: 75,
          color: '#007396',
          icon: <VscCode />,
          tags: ['OOP', 'Spring']
        },
        {
          name: 'SQL',
          level: 85,
          color: '#CC2927',
          icon: <VscDatabase />,
          tags: ['PostgreSQL', 'MySQL', 'Queries']
        }
      ]
    },
    {
      title: 'Backend Development',
      icon: <VscServer />,
      skills: [
        {
          name: 'Node.js',
          level: 88,
          color: '#68A063',
          icon: <VscTerminal />,
          tags: ['Express.js', 'REST API', 'Microservices']
        },
        {
          name: 'NestJS',
          level: 85,
          color: '#E0234E',
          icon: <VscServer />,
          tags: ['TypeScript', 'Modular', 'Swagger']
        },
        {
          name: 'Express.js',
          level: 87,
          color: '#000000',
          icon: <VscServer />,
          tags: ['Middleware', 'REST', 'JWT']
        }
      ]
    },
    {
      title: 'Databases',
      icon: <VscDatabase />,
      skills: [
        {
          name: 'PostgreSQL',
          level: 85,
          color: '#336791',
          icon: <VscDatabase />,
          tags: ['Relational', 'ACID', 'Optimization']
        },
        {
          name: 'MongoDB',
          level: 82,
          color: '#47A248',
          icon: <VscDatabase />,
          tags: ['NoSQL', 'Schema Design', 'Aggregation']
        },
        {
          name: 'MySQL',
          level: 80,
          color: '#4479A1',
          icon: <VscDatabase />,
          tags: ['Indexing', 'Joins', 'Normalization']
        }
      ]
    },
    {
      title: 'Frontend Development',
      icon: <VscBrowser />,
      skills: [
        {
          name: 'React.js',
          level: 88,
          color: '#61DAFB',
          icon: <VscCode />,
          tags: ['Hooks', 'Redux', 'Components']
        },
        {
          name: 'Tailwind CSS',
          level: 85,
          color: '#06B6D4',
          icon: <VscBrowser />,
          tags: ['Responsive', 'Utility-First', 'Design']
        }
      ]
    },
    {
      title: 'AI/ML',
      icon: <VscTerminal />,
      skills: [
        {
          name: 'LangChain',
          level: 75,
          color: '#00A67E',
          icon: <VscCode />,
          tags: ['RAG', 'Chatbots', 'LLM']
        },
        {
          name: 'Pinecone',
          level: 72,
          color: '#000000',
          icon: <VscDatabase />,
          tags: ['Vector DB', 'Similarity Search', 'Embeddings']
        },
        {
          name: 'Sentence Transformers',
          level: 70,
          color: '#FF6F00',
          icon: <VscCode />,
          tags: ['NLP', 'Embeddings', 'Semantic Search']
        }
      ]
    },
    {
      title: 'Tools & Others',
      icon: <VscTools />,
      skills: [
        {
          name: 'Git & GitHub',
          level: 90,
          color: '#F05032',
          icon: <VscGithub />,
          tags: ['Version Control', 'Collaboration', 'Workflows']
        },
        {
          name: 'Postman',
          level: 85,
          color: '#FF6C37',
          icon: <VscTools />,
          tags: ['API Testing', 'Documentation']
        },
        {
          name: 'Swagger',
          level: 82,
          color: '#85EA2D',
          icon: <VscTools />,
          tags: ['API Docs', 'OpenAPI', 'Testing']
        },
        {
          name: 'VS Code',
          level: 92,
          color: '#007ACC',
          icon: <VscTools />,
          tags: ['Extensions', 'Debugging', 'Productivity']
        }
      ]
    }
  ];

  return (
    <div className="h-full overflow-y-auto p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold mb-2" style={{ color: 'var(--vscode-text-active)' }}>
          Skills & Technologies
        </h1>
        <p className="text-lg" style={{ color: 'var(--vscode-text-secondary)' }}>
          A comprehensive overview of my technical expertise
        </p>
      </motion.div>

      {/* Skill categories */}
      {skillCategories.map((category, categoryIndex) => (
        <motion.div
          key={categoryIndex}
          className="mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: categoryIndex * 0.2 }}
        >
          {/* Category header */}
          <div className="flex items-center gap-2 mb-4">
            <div className="text-2xl" style={{ color: 'var(--vscode-accent)' }}>
              {category.icon}
            </div>
            <h2 className="text-2xl font-semibold" style={{ color: 'var(--vscode-accent)' }}>
              {category.title}
            </h2>
          </div>

          {/* Skill cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {category.skills.map((skill, skillIndex) => (
              <SkillCard 
                key={skillIndex} 
                skill={skill} 
                index={categoryIndex * 3 + skillIndex}
              />
            ))}
          </div>
        </motion.div>
      ))}

      {/* Additional info */}
      <motion.div
        className="mt-12 p-6 bg-[#2a2d2e] rounded-lg border"
        style={{ borderColor: 'var(--vscode-border)' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--vscode-text-active)' }}>
          Core Concepts & Achievements
        </h3>
        <p style={{ color: 'var(--vscode-text)' }}>
          Strong foundation in:
          <span style={{ color: 'var(--vscode-accent)' }}> Data Structures & Algorithms (250+ LeetCode), OOPS, DBMS, OS, Computer Networks, REST APIs, Microservices, JWT Authentication, and Agile Methodologies</span>
        </p>
      </motion.div>
    </div>
  );
};

export default SkillsPage;
