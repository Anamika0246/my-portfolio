import React from 'react';
import { motion } from 'framer-motion';
import { VscMarkdown } from 'react-icons/vsc';

/**
 * AboutPage Component - README.md style about page
 * 
 * Styled to look like a markdown file in VS Code
 */

const AboutPage = () => {
  return (
    <div className="h-full overflow-y-auto p-8">
      {/* Header with markdown icon */}
      <motion.div
        className="flex items-center gap-2 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <VscMarkdown className="text-3xl" style={{ color: '#519ABA' }} />
        <h1 className="text-3xl font-bold" style={{ color: 'var(--vscode-text-active)' }}>
          README.md
        </h1>
      </motion.div>

      {/* Markdown-style content */}
      <motion.div
        className="max-w-4xl markdown-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        style={{ color: 'var(--vscode-text)' }}
      >
        {/* About section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--vscode-accent)' }}>
            # About Me
          </h2>
          <p className="mb-4 leading-relaxed">
            Hello! I'm a passionate <strong style={{ color: 'var(--vscode-text-active)' }}>Computer Science (Data Science) student</strong> with 
            Honors in Cybersecurity at Maharana Pratap Engineering College. My journey in tech started with a 
            curiosity about algorithms and has evolved into building secure, scalable applications 
            that solve real-world problems.
          </p>
          <p className="mb-4 leading-relaxed">
            I specialize in full-stack development with a focus on backend technologies and AI/ML integration. 
            Interned at Accenture as an Associate Software Engineer, where I worked on enterprise-level 
            applications using NestJS and PostgreSQL. When I'm not coding, you can find me keeping it in the loop with what's hot off the press, contributing to technical communities, or exploring new technologies.
          </p>
        </div>

        {/* What I Do */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--vscode-accent)' }}>
            ## What I Do
          </h2>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <span style={{ color: 'var(--vscode-accent)' }}>🚀</span>
              <p><strong>Frontend Development:</strong> Creating responsive and interactive user interfaces using React.js, Tailwind CSS, and Framer Motion</p>
            </div>
            <div className="flex items-start gap-2">
              <span style={{ color: 'var(--vscode-accent)' }}>⚙️</span>
              <p><strong>Backend Development:</strong> Building scalable APIs and microservices with Node.js, Express.js, NestJS, and RESTful architecture</p>
            </div>
            <div className="flex items-start gap-2">
              <span style={{ color: 'var(--vscode-accent)' }}>🤖</span>
              <p><strong>AI/ML Integration:</strong> Implementing RAG-enabled chatbots and vector similarity search using LangChain, Pinecone, and Sentence Transformers</p>
            </div>
            <div className="flex items-start gap-2">
              <span style={{ color: 'var(--vscode-accent)' }}>🔒</span>
              <p><strong>Security & Best Practices:</strong> Implementing JWT authentication, role-based access control, and following secure coding practices</p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--vscode-accent)' }}>
            ## Tech Stack
          </h2>
          <div 
            className="bg-[#2a2d2e] p-4 rounded-lg border font-mono text-sm"
            style={{ borderColor: 'var(--vscode-border)' }}
          >
            <pre>
{`{
  "languages": ["C++", "Python", "JavaScript", "Java", "SQL"],
  "backend": ["Node.js", "Express.js", "NestJS"],
  "database": ["PostgreSQL", "MongoDB", "MySQL"],
  "frontend": ["React.js", "Tailwind CSS", "Framer Motion", "Redux"],
  "ai_ml": ["LangChain", "Pinecone", "Sentence Transformers"],
  "tools": ["Git", "GitHub", "Postman", "Swagger", "VS Code"],
  "concepts": ["DSA", "OOPS", "DBMS", "OS", "CN", "REST APIs", "JWT", "Agile"]
}`}
            </pre>
          </div>
        </div>

        {/* Philosophy */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--vscode-accent)' }}>
            ## My Philosophy
          </h2>
          <blockquote 
            className="border-l-4 pl-4 italic"
            style={{ 
              borderColor: 'var(--vscode-accent)',
              color: 'var(--vscode-text-secondary)'
            }}
          >
            "Write secure, scalable code that solves real problems. Great software combines robust architecture 
            with clean implementation—it's about creating solutions that are both technically sound and user-friendly."
          </blockquote>
        </div>

        {/* Current Focus */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--vscode-accent)' }}>
            ## Currently
          </h2>
          <ul className="list-none space-y-2">
            <li className="flex items-start gap-2">
              <span style={{ color: 'var(--vscode-accent)' }}>▸</span>
              <span>🔭 Working as Associate Software Engineer Intern at Accenture</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: 'var(--vscode-accent)' }}>▸</span>
              <span>🌱 Learning advanced backend architectures and AI/ML integration</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: 'var(--vscode-accent)' }}>▸</span>
              <span>👯 Managing Director at TECH-E-CLAN, organizing technical events</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: 'var(--vscode-accent)' }}>▸</span>
              <span>💬 Ask me about NestJS, PostgreSQL, or solving algorithmic problems</span>
            </li>
          </ul>
        </div>

        {/* Fun Facts */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--vscode-accent)' }}>
            ## Fun Facts
          </h2>
          <ul className="list-none space-y-2">
            <li className="flex items-start gap-2">
              <span>⚡</span>
              <span>Solved 250+ problems on LeetCode in C++</span>
            </li>
            <li className="flex items-start gap-2">
              <span>🏆</span>
              <span>National Semi-Finalist at Flipkart GRiD 7.0 (2025)</span>
            </li>
            <li className="flex items-start gap-2">
              <span>🥈</span>
              <span>2nd Place at Code Clash Hack 2.0 with "Apka Companion"</span>
            </li>
            <li className="flex items-start gap-2">
              <span>🌍</span>
              <span>Led 700+ participants in technical events as Managing Director of TECH-E-CLAN</span>
            </li>
          </ul>
        </div>

        {/* Footer */}
        <div 
          className="mt-12 pt-6 border-t text-center"
          style={{ 
            borderColor: 'var(--vscode-border)',
            color: 'var(--vscode-text-secondary)'
          }}
        >
          <p className="text-sm">
            Thanks for visiting! Feel free to reach out if you want to collaborate or just chat about tech. 🚀
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
