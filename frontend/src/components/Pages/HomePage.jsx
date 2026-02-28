import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { VscGithub, VscMail, VscTerminal } from 'react-icons/vsc';

/**
 * HomePage Component - Landing page with animated intro
 * 
 * New Hooks:
 * - useEffect: Runs side effects (like animations, fetching data)
 *   Syntax: useEffect(() => { ... }, [dependencies])
 *   - Empty array [] = runs once on mount
 *   - No array = runs on every render
 *   - [value] = runs when 'value' changes
 * 
 * Animation Concepts:
 * - Stagger: Animate children one after another
 * - Variants: Reusable animation states
 */
const HomePage = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Hi, I'm Anamika Tiwari";
  
  // Typewriter effect using useEffect
  useEffect(() => {
    let currentIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100); // Type one character every 100ms
    
    // Cleanup function - runs when component unmounts
    return () => clearInterval(typeInterval);
  }, []); // Empty array = run once on mount

  // Animation variants - reusable animation configs
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // Animate children 0.2s apart
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="h-full p-12 flex items-center justify-center">
      <motion.div
        className="max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Terminal-style header */}
        <motion.div 
          className="flex items-center gap-2 mb-8"
          variants={itemVariants}
        >
          <VscTerminal className="text-3xl" style={{ color: 'var(--vscode-accent)' }} />
          <span className="text-sm" style={{ color: 'var(--vscode-text-secondary)' }}>
            ~/portfolio/home.jsx
          </span>
        </motion.div>

        {/* Typewriter heading */}
        <motion.h1 
          className="text-6xl font-bold mb-6"
          style={{ color: 'var(--vscode-text-active)' }}
          variants={itemVariants}
        >
          {displayText}
          <span className="animate-pulse">|</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className="text-2xl mb-8"
          style={{ color: 'var(--vscode-text)' }}
          variants={itemVariants}
        >
          Computer Science (Data Science) Student specializing in <span style={{ color: 'var(--vscode-accent)' }}>Cybersecurity</span> and 
          building scalable full stack applications.
        </motion.p>

        {/* Code block style introduction */}
        <motion.div 
          className="bg-[#2a2d2e] p-6 rounded-lg mb-8 border"
          style={{ borderColor: 'var(--vscode-border)' }}
          variants={itemVariants}
        >
          <pre className="text-sm" style={{ color: 'var(--vscode-text)' }}>
            <code>
              <span style={{ color: '#C586C0' }}>const</span>{' '}
              <span style={{ color: '#4FC1FF' }}>developer</span> = {'{'}{'\n'}
              {'  '}name: <span style={{ color: '#CE9178' }}>"Anamika Tiwari"</span>,{'\n'}
              {'  '}role: <span style={{ color: '#CE9178' }}>"Associate Software Engineer Intern"</span>,{'\n'}
              {'  '}passion: [<span style={{ color: '#CE9178' }}>"MERN"</span>, <span style={{ color: '#CE9178' }}>"CPP"</span>, <span style={{ color: '#CE9178' }}>"AI/ML"</span>],{'\n'}
              {'  '}available: <span style={{ color: '#569CD6' }}>true</span>{'\n'}
              {'}'};
            </code>
          </pre>
        </motion.div>

        {/* Action buttons */}
        <motion.div 
          className="flex gap-4"
          variants={itemVariants}
        >
          <button 
            className="flex items-center gap-2 px-6 py-3 rounded hover:opacity-80 transition-opacity"
            style={{ backgroundColor: 'var(--vscode-accent)', color: 'white' }}
          >
            <VscGithub className="text-xl" />
            View Projects
          </button>
          
          <button 
            className="flex items-center gap-2 px-6 py-3 rounded border hover:bg-[#2a2d2e] transition-colors"
            style={{ borderColor: 'var(--vscode-accent)', color: 'var(--vscode-accent)' }}
          >
            <VscMail className="text-xl" />
            Contact Me
          </button>
        </motion.div>

        {/* Quick stats */}
        <motion.div 
          className="grid grid-cols-3 gap-6 mt-12"
          variants={itemVariants}
        >
          <div className="text-center">
            <div className="text-4xl font-bold mb-2" style={{ color: 'var(--vscode-accent)' }}>
              4+
            </div>
            <div className="text-sm" style={{ color: 'var(--vscode-text-secondary)' }}>
              Projects Completed
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold mb-2" style={{ color: 'var(--vscode-accent)' }}>
              250+
            </div>
            <div className="text-sm" style={{ color: 'var(--vscode-text-secondary)' }}>
              LeetCode Problems
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold mb-2" style={{ color: 'var(--vscode-accent)' }}>
              15+
            </div>
            <div className="text-sm" style={{ color: 'var(--vscode-text-secondary)' }}>
              Technologies
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomePage;
