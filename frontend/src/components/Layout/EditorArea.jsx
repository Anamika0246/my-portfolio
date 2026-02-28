import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import TabBar from './TabBar';

// Import page components (we'll create these next)
import HomePage from '../Pages/HomePage';
import SkillsPage from '../Pages/SkillsPage';
import ExperiencePage from '../Pages/ExperiencePage';
import EducationPage from '../Pages/EducationPage';
import ContactPage from '../Pages/ContactPage';
import AboutPage from '../Pages/AboutPage';
import ProjectPage from '../Pages/ProjectPage';

/**
 * EditorArea Component - The main content area (center)
 * 
 * React Router Explained:
 * - <Routes>: Container for all route definitions
 * - <Route path="/home" element={<HomePage />}>: When URL is "/home", show HomePage
 * - <Navigate>: Redirects to a different route
 * 
 * Now includes TabBar for showing open files!
 */
const EditorArea = ({ openTabs, onCloseTab }) => {

  return (
    <div 
      className="flex-1 flex flex-col overflow-hidden"
      style={{ backgroundColor: 'var(--vscode-editor-bg)' }}
    >
      {/* Tab bar showing open files */}
      <TabBar openTabs={openTabs} onCloseTab={onCloseTab} />
      
      {/* Content area with routing */}
      <div className="flex-1 overflow-y-auto">
        <Routes>
        {/* Default route - redirect to home */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        
        {/* Main pages */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        
        {/* Project routes */}
        <Route path="/projects/frontend/project1" element={<ProjectPage category="Frontend" projectId="1" />} />
        <Route path="/projects/frontend/project2" element={<ProjectPage category="Frontend" projectId="2" />} />
        <Route path="/projects/backend/project1" element={<ProjectPage category="Backend" projectId="1" />} />
        <Route path="/projects/fullstack/project1" element={<ProjectPage category="Full Stack" projectId="1" />} />
        <Route path="/projects/ml/project1" element={<ProjectPage category="ML" projectId="1" />} />
        <Route path="/projects/android/project1" element={<ProjectPage category="Android" projectId="1" />} />
      </Routes>
      </div>
    </div>
  );
};

export default EditorArea;
