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
    'Frontend': {
      '1': {
        title: 'Srajnik Lab Website - React Platform',
        description: 'SEO-optimized responsive platform using React and Tailwind CSS.',
        longDescription: 'Developed SEO-optimized responsive platform using React and Tailwind CSS. Integrated Framer Motion animations to enhance UX and deployed on Vercel with optimized build configuration.',
        technologies: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Vercel', 'SEO'],
        features: [
          'Developed SEO-optimized responsive platform using React and Tailwind CSS',
          'Integrated Framer Motion animations to enhance UX',
          'Deployed on Vercel with optimized build configuration',
          'Fully responsive design across all devices',
          'Modern and clean UI design',
          'Fast loading with optimized build'
        ],
        challenges: 'Ensuring smooth animations while maintaining optimal performance and SEO scores.',
        solution: 'Used Framer Motion for declarative animations and implemented code splitting with lazy loading to maintain 90+ Lighthouse scores.',
        githubUrl: 'https://github.com/Anamika0246',
        liveUrl: null,
        date: 'Jan 2025',
        status: 'Completed'
      },
      '2': {
        title: 'Aquarius RO - Water Delivery Service',
        description: 'Frontend website for a local RO water can delivery venture.',
        longDescription: 'Developed a professional frontend website for Aquarius, a local venture providing RO water can delivery services. Built with modern web technologies featuring responsive design, user-friendly interface, and optimized performance for seamless customer experience.',
        technologies: ['React.js', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
        features: [
          'Clean and modern UI design',
          'Fully responsive across all devices',
          'Service information and pricing display',
          'Contact and ordering interface',
          'Fast loading and optimized performance',
          'Deployed and accessible online'
        ],
        challenges: 'Creating an intuitive interface for local customers while maintaining professional aesthetics.',
        solution: 'Designed a simple yet elegant UI focusing on clear service information and easy navigation.',
        githubUrl: 'https://github.com/Anamika0246',
        liveUrl: 'https://drinkaquarius.in/',
        date: 'Dec 2024',
        status: 'Completed'
      }
    },
    'Backend': {
      '1': {
        title: 'BlogNest - NestJS Blogging Platform',
        description: 'Microservices-based blogging platform built using NestJS framework.',
        longDescription: 'Built a blogging platform using NestJS framework following microservices architecture. Individual services for Users, Posts, and Comments, each handling its own database, routing, and business logic. Implemented JWT authentication, role-based access control, and automated API documentation using Swagger.',
        technologies: ['NestJS', 'PostgreSQL', 'TypeScript', 'JWT', 'Swagger', 'Microservices'],
        features: [
          'Microservices architecture with separate User, Post, and Comment services',
          'User registration and authentication with JWT',
          'Blog post creation and retrieval by post or by user',
          'Comment system for posts',
          'Automated API documentation with Swagger',
          'Role-based access control',
          'Clean architecture principles'
        ],
        challenges: 'Implementing microservices communication and maintaining data consistency across services.',
        solution: 'Designed clear service boundaries with well-defined APIs and implemented proper error handling and validation.',
        githubUrl: 'https://github.com/Anamika0246',
        liveUrl: null,
        date: 'Jun 2025',
        status: 'Completed'
      }
    },
    'Full Stack': {
      '1': {
        title: 'Hostel ERP - MERN Stack',
        description: 'Full-stack hostel management system with modules for allocation, attendance, and notices.',
        longDescription: 'Built full-stack hostel management system with modules for allocation, attendance, and notices. Developed secure REST APIs with JWT-based role authorization, integrated Redux state management enabling real-time UI updates, and structured MongoDB schema for scalable and efficient queries.',
        technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redux', 'JWT', 'REST APIs'],
        features: [
          'Built full-stack hostel management system with modules for allocation, attendance, and notices',
          'Developed secure REST APIs with JWT-based role authorization',
          'Integrated Redux state management enabling real-time UI updates',
          'Structured MongoDB schema for scalable and efficient queries',
          'Responsive UI with React.js',
          'Role-based access control for different user types'
        ],
        challenges: 'Managing complex state across multiple modules and ensuring real-time synchronization between different user roles (students, wardens, admins).',
        solution: 'Implemented Redux for centralized state management and used JWT-based role authorization to handle different permission levels efficiently.',
        githubUrl: 'https://github.com/Anamika0246',
        liveUrl: null,
        date: 'Nov 2024',
        status: 'Completed'
      },
      '2': {
        title: 'Books Bhandar - Book Management System',
        description: 'Web application for managing book collections with CRUD operations.',
        longDescription: 'Books Bhandar is a web application for managing book collections. Features options to add, view, edit, and delete books with a clean, responsive interface. The app offers table and card view layouts for convenience, showcasing modern web development with an intuitive UI.',
        technologies: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
        features: [
          'Complete CRUD operations for book management',
          'Dual view modes: table and card layout',
          'Clean and responsive interface',
          'RESTful API backend',
          'MongoDB database integration',
          'Modern and intuitive UI design'
        ],
        challenges: 'Implementing efficient CRUD operations with seamless UI transitions between different view modes.',
        solution: 'Built RESTful APIs with Express and used React state management for smooth view transitions.',
        githubUrl: 'https://github.com/Anamika0246',
        liveUrl: null,
        date: 'Oct 2024',
        status: 'Completed'
      },
      '3': {
        title: 'LetsDiscuss - Real-time Chat Application',
        description: 'Modern real-time chat application with Socket.IO and MERN stack.',
        longDescription: 'A modern real-time chat application built with the MERN stack and Socket.IO. Features user authentication with JWT, instant messaging, persistent chat history, and modern UI with Tailwind CSS and DaisyUI. Plans to expand into voice discussion communities using WebRTC.',
        technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.IO', 'JWT', 'Tailwind CSS', 'DaisyUI'],
        features: [
          'User authentication with JWT tokens',
          'Real-time messaging using Socket.IO',
          'Persistent chat conversations with MongoDB',
          'Modern UI with Tailwind CSS and DaisyUI',
          'User profiles and contact lists',
          'Message history tracking',
          'Responsive design'
        ],
        challenges: 'Implementing real-time bidirectional communication with proper state synchronization.',
        solution: 'Utilized Socket.IO for WebSocket connections and designed proper event handlers for real-time message delivery.',
        githubUrl: 'https://github.com/Anamika0246/Lets-Discuss',
        liveUrl: null,
        date: 'Dec 2024',
        status: 'Completed'
      }
    },
    'ML': {
      '1': {
        title: 'MITRA - AI Medical Chatbot',
        description: 'RAG pipeline using LangChain and Pinecone for contextual medical query resolution.',
        longDescription: 'Built RAG pipeline using LangChain and Pinecone for contextual medical query resolution. Implemented vector similarity search for low-latency retrieval and optimized embedding indexing for improved response relevance.',
        technologies: ['Python', 'LangChain', 'Pinecone', 'RAG', 'Vector Search', 'NLP', 'Embeddings'],
        features: [
          'Built RAG pipeline using LangChain and Pinecone for contextual medical query resolution',
          'Implemented vector similarity search for low-latency retrieval',
          'Optimized embedding indexing for improved response relevance',
          'Contextual medical information retrieval',
          'Natural language understanding',
          'Fast and accurate query responses'
        ],
        challenges: 'Achieving low latency retrieval while maintaining high accuracy in medical query responses.',
        solution: 'Implemented vector similarity search with Pinecone and optimized embedding indexing to balance speed and relevance.',
        githubUrl: 'https://github.com/Anamika0246',
        liveUrl: null,
        date: 'Mar 2025',
        status: 'Completed'
      },
      '2': {
        title: 'EaseQL - Text-to-SQL NLP System',
        description: 'NLP system for generating SQL queries from natural language using LLM.',
        longDescription: 'Built a lightweight Text-to-SQL system that converts natural language queries into executable SQL using an LLM. The system accepts user questions, generates schema-aware SQL queries, validates them to allow only safe SELECT operations, and executes them against a relational database, returning both the query and results in real time. Implemented secure query filtering to prevent destructive commands and designed structured prompt engineering for accurate SQL generation.',
        technologies: ['FastAPI', 'Python', 'SQLite', 'Groq API', 'JavaScript', 'HTML', 'NLP'],
        features: [
          'Schema-aware Text-to-SQL pipeline using FastAPI and LLM',
          'Natural language to SQL query conversion',
          'Secure query validation (SELECT-only enforcement)',
          'Real-time database query execution',
          'Structured prompt engineering for accurate generation',
          'Prevention of destructive SQL commands',
          'Web-based interface for easy interaction'
        ],
        challenges: 'Ensuring secure SQL generation while maintaining accuracy and preventing SQL injection or destructive commands.',
        solution: 'Implemented query validation layer that filters all queries to allow only SELECT operations and designed schema-aware prompts.',
        githubUrl: 'https://github.com/Anamika0246',
        liveUrl: null,
        date: 'Feb 2025',
        status: 'Completed'
      }
    },
    'Android': {
      '1': {
        title: 'Friendly - Social Media Platform',
        description: 'Social media app built with React Native, Express, Node.js, MongoDB, and WebSockets.',
        longDescription: 'Friendly is a comprehensive social media platform built using React Native Expo for cross-platform mobile development. Features include user profiles, posts, snaps, real-time chat with WebSockets, friend profile suggestions, and media uploads using Cloudinary. Built with Express and Node.js backend connected to MongoDB database.',
        technologies: ['React Native', 'Expo', 'Express.js', 'Node.js', 'MongoDB', 'Cloudinary', 'WebSockets'],
        features: [
          'User authentication and profile management',
          'Post creation and feed',
          'Snaps/Stories feature',
          'Real-time chat using WebSockets',
          'Friend profile suggestions',
          'Media uploads with Cloudinary integration',
          'Cross-platform mobile app with React Native Expo'
        ],
        challenges: 'Implementing real-time features and media uploads in a mobile environment while maintaining performance.',
        solution: 'Used WebSockets for real-time communication and Cloudinary for optimized media handling and delivery.',
        githubUrl: 'https://github.com/Anamika0246',
        liveUrl: null,
        date: 'Jan 2025',
        status: 'Completed'
      }
    },
    'C++': {
      '1': {
        title: 'E-Commerce Online Store - STL Implementation',
        description: 'E-Commerce platform built using C++ and implementing STL concepts.',
        longDescription: 'E-Commerce online store built using C++ and implementing Standard Template Library (STL) concepts to perform different tasks. Features admin and customer menus with functionality for user registration, login, product management, order placement, and order history viewing. Demonstrates object-oriented programming with Product and Order classes.',
        technologies: ['C++', 'STL', 'OOP', 'Data Structures'],
        features: [
          'Admin menu for product management',
          'Customer menu for shopping',
          'User registration and login system',
          'Product viewing and browsing',
          'Order placement functionality',
          'Order history tracking',
          'STL containers for data management',
          'Object-oriented design with Product and Order classes'
        ],
        challenges: 'Managing complex data structures and user sessions in C++ without a database.',
        solution: 'Leveraged STL containers (vectors, maps) for efficient data storage and retrieval with proper memory management.',
        githubUrl: 'https://github.com/Anamika0246',
        liveUrl: null,
        date: 'Sep 2024',
        status: 'Completed'      },
      '2': {
        title: 'EaseQL - Text-to-SQL NLP System',
        description: 'NLP system for generating SQL queries from natural language using LLM.',
        longDescription: 'Built a lightweight Text-to-SQL system that converts natural language queries into executable SQL using an LLM. The system accepts user questions, generates schema-aware SQL queries, validates them to allow only safe SELECT operations, and executes them against a relational database, returning both the query and results in real time. Implemented secure query filtering to prevent destructive commands and designed structured prompt engineering for accurate SQL generation.',
        technologies: ['FastAPI', 'Python', 'SQLite', 'Groq API', 'JavaScript', 'HTML', 'NLP'],
        features: [
          'Schema-aware Text-to-SQL pipeline using FastAPI and LLM',
          'Natural language to SQL query conversion',
          'Secure query validation (SELECT-only enforcement)',
          'Real-time database query execution',
          'Structured prompt engineering for accurate generation',
          'Prevention of destructive SQL commands',
          'Web-based interface for easy interaction'
        ],
        challenges: 'Ensuring secure SQL generation while maintaining accuracy and preventing SQL injection or destructive commands.',
        solution: 'Implemented query validation layer that filters all queries to allow only SELECT operations and designed schema-aware prompts.',
        githubUrl: 'https://github.com/Anamika0246',
        liveUrl: null,
        date: 'Feb 2025',
        status: 'Completed'
      }
    },
    'Android': {
      '1': {
        title: 'Friendly - Social Media Platform',
        description: 'Social media app built with React Native, Express, Node.js, MongoDB, and WebSockets.',
        longDescription: 'Friendly is a comprehensive social media platform built using React Native Expo for cross-platform mobile development. Features include user profiles, posts, snaps, real-time chat with WebSockets, friend profile suggestions, and media uploads using Cloudinary. Built with Express and Node.js backend connected to MongoDB database.',
        technologies: ['React Native', 'Expo', 'Express.js', 'Node.js', 'MongoDB', 'Cloudinary', 'WebSockets'],
        features: [
          'User authentication and profile management',
          'Post creation and feed',
          'Snaps/Stories feature',
          'Real-time chat using WebSockets',
          'Friend profile suggestions',
          'Media uploads with Cloudinary integration',
          'Cross-platform mobile app with React Native Expo'
        ],
        challenges: 'Implementing real-time features and media uploads in a mobile environment while maintaining performance.',
        solution: 'Used WebSockets for real-time communication and Cloudinary for optimized media handling and delivery.',
        githubUrl: 'https://github.com/Anamika0246',
        liveUrl: null,
        date: 'Jan 2025',
        status: 'Completed'
      }
    },
    'C++': {
      '1': {
        title: 'E-Commerce Online Store - STL Implementation',
        description: 'E-Commerce platform built using C++ and implementing STL concepts.',
        longDescription: 'E-Commerce online store built using C++ and implementing Standard Template Library (STL) concepts to perform different tasks. Features admin and customer menus with functionality for user registration, login, product management, order placement, and order history viewing. Demonstrates object-oriented programming with Product and Order classes.',
        technologies: ['C++', 'STL', 'OOP', 'Data Structures'],
        features: [
          'Admin menu for product management',
          'Customer menu for shopping',
          'User registration and login system',
          'Product viewing and browsing',
          'Order placement functionality',
          'Order history tracking',
          'STL containers for data management',
          'Object-oriented design with Product and Order classes'
        ],
        challenges: 'Managing complex data structures and user sessions in C++ without a database.',
        solution: 'Leveraged STL containers (vectors, maps) for efficient data storage and retrieval with proper memory management.',
        githubUrl: 'https://github.com/Anamika0246',
        liveUrl: null,
        date: 'Sep 2024',
        status: 'Completed'      }
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
