import React, { useState } from 'react';
import { VscChevronRight, VscChevronDown, VscFolder, VscFolderOpened, VscFile } from 'react-icons/vsc';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

/**
 * FileTreeItem Component - Represents a single file or folder
 * 
 * Recursion Explained:
 * This component calls itself for nested folders - like a folder within a folder!
 * This is called recursion and it's perfect for tree structures.
 */
const FileTreeItem = ({ item, level = 0, onOpenTab, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const navigate = useNavigate();

  // Check if item has children (is a folder)
  const hasChildren = item.children && item.children.length > 0;

  const handleClick = () => {
    if (hasChildren) {
      setIsOpen(!isOpen); // Toggle folder open/closed
    } else {
      // It's a file - open it in a tab and navigate
      onOpenTab(item.name, item.path);
      navigate(item.path);
    }
  };

  return (
    <div>
      {/* Item button */}
      <div
        onClick={handleClick}
        className="flex items-center gap-1 px-2 py-[2px] cursor-pointer hover:bg-[#2a2d2e] transition-colors text-[13px]"
        style={{ paddingLeft: `${level * 12 + 8}px` }} // Indent based on nesting level
      >
        {/* Chevron icon for folders */}
        {hasChildren && (
          <span className="w-4 h-4 flex items-center justify-center">
            {isOpen ? <VscChevronDown /> : <VscChevronRight />}
          </span>
        )}
        
        {/* Folder/File icon */}
        <span className="w-4 h-4 flex items-center justify-center" style={{ color: item.color || 'var(--vscode-icon)' }}>
          {hasChildren ? (
            isOpen ? <VscFolderOpened /> : <VscFolder />
          ) : (
            item.icon || <VscFile />
          )}
        </span>

        {/* Item name */}
        <span style={{ color: 'var(--vscode-text)' }}>{item.name}</span>
      </div>

      {/* Children (nested items) with animation */}
      <AnimatePresence>
        {hasChildren && isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            {item.children.map((child, index) => (
              <FileTreeItem 
                key={index} 
                item={child} 
                level={level + 1} // Increase indent level
                onOpenTab={onOpenTab} // Pass down the onOpenTab function
                defaultOpen={false} // Children are closed by default
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/**
 * Sidebar Component - Main sidebar with file explorer
 * 
 * Props Explained:
 * - activeTab: which tab is currently active (explorer, search, etc.)
 * - onOpenTab: function to add a tab when file is clicked
 */
const Sidebar = ({ activeTab, onOpenTab }) => {
  
  // Portfolio structure - our file tree data
  const explorerData = [
    {
      name: 'PORTFOLIO',
      children: [
        { 
          name: 'Home.jsx', 
          path: '/home',
          icon: <VscFile />,
          color: '#61DAFB'
        },
        {
          name: 'Projects',
          children: [
            {
              name: 'Frontend',
              children: [
                { name: 'SrajnikLab.jsx', path: '/projects/frontend/1', icon: <VscFile />, color: '#61DAFB' },
                { name: 'AquariusRO.jsx', path: '/projects/frontend/2', icon: <VscFile />, color: '#61DAFB' },
              ]
            },
            {
              name: 'Backend',
              children: [
                { name: 'BlogNest.js', path: '/projects/backend/1', icon: <VscFile />, color: '#F7DF1E' },
              ]
            },
            {
              name: 'FullStack',
              children: [
                { name: 'HostelERP.jsx', path: '/projects/fullstack/1', icon: <VscFile />, color: '#61DAFB' },
                { name: 'BooksBhandar.jsx', path: '/projects/fullstack/2', icon: <VscFile />, color: '#61DAFB' },
                { name: 'LetsDiscuss.jsx', path: '/projects/fullstack/3', icon: <VscFile />, color: '#61DAFB' },
              ]
            },
            {
              name: 'ML',
              children: [
                { name: 'MITRA.py', path: '/projects/ml/1', icon: <VscFile />, color: '#3776AB' },
                { name: 'EaseQL.py', path: '/projects/ml/2', icon: <VscFile />, color: '#3776AB' },
              ]
            },
            {
              name: 'Android',
              children: [
                { name: 'Friendly.jsx', path: '/projects/android/1', icon: <VscFile />, color: '#A97BFF' },
              ]
            },
            {
              name: 'C++',
              children: [
                { name: 'ECommerce.cpp', path: '/projects/cpp/1', icon: <VscFile />, color: '#00599C' },
              ]
            },
          ]
        },
        { name: 'Skills.jsx', path: '/skills', icon: <VscFile />, color: '#61DAFB' },
        { name: 'Experience.jsx', path: '/experience', icon: <VscFile />, color: '#61DAFB' },
        { name: 'Education.jsx', path: '/education', icon: <VscFile />, color: '#61DAFB' },
        { name: 'Contact.jsx', path: '/contact', icon: <VscFile />, color: '#61DAFB' },
        { name: 'README.md', path: '/about', icon: <VscFile />, color: '#519ABA' },
      ]
    }
  ];

  // Only show sidebar when explorer tab is active
  if (activeTab !== 'explorer') {
    return null;
  }

  return (
    <div 
      className="w-[250px] h-full flex flex-col border-r overflow-y-auto"
      style={{ 
        backgroundColor: 'var(--vscode-sidebar-bg)',
        borderColor: 'var(--vscode-border)'
      }}
    >
      {/* Sidebar header */}
      <div className="px-4 py-2 text-[11px] font-semibold uppercase tracking-wide" 
           style={{ color: 'var(--vscode-text-secondary)' }}>
        Explorer
      </div>

      {/* File tree */}
      <div className="flex-1">
        {explorerData.map((item, index) => (
          <FileTreeItem key={index} item={item} onOpenTab={onOpenTab} defaultOpen={true} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
