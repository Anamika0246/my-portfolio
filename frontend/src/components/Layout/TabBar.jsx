import React from 'react';
import { VscClose, VscFile } from 'react-icons/vsc';
import { useNavigate, useLocation } from 'react-router-dom';

/**
 * TabBar Component - Shows open file tabs (like VS Code)
 * 
 * Props Explained:
 * - openTabs: array of currently open tabs/files
 * - activeTab: which tab is currently selected
 * - onCloseTab: function to close a tab
 * - onTabClick: function when clicking a tab
 * 
 * Key Concepts:
 * - useLocation: Hook to get current URL path
 * - Event handling: onClick, onMouseDown for tab interactions
 */
const TabBar = ({ openTabs, onCloseTab }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleTabClick = (path) => {
    navigate(path);
  };

  const handleCloseTab = (e, path) => {
    e.stopPropagation(); // Prevent tab click when closing
    onCloseTab(path);
  };

  // Get file icon color based on extension
  const getIconColor = (name) => {
    if (name.endsWith('.jsx')) return '#61DAFB';
    if (name.endsWith('.js')) return '#F7DF1E';
    if (name.endsWith('.py')) return '#3776AB';
    if (name.endsWith('.kt')) return '#A97BFF';
    if (name.endsWith('.md')) return '#519ABA';
    return 'var(--vscode-icon)';
  };

  return (
    <div 
      className="h-[35px] flex items-center overflow-x-auto border-b"
      style={{ 
        backgroundColor: 'var(--vscode-bg)',
        borderColor: 'var(--vscode-border)'
      }}
    >
      {openTabs.map((tab) => {
        const isActive = location.pathname === tab.path;
        
        return (
          <div
            key={tab.path}
            onClick={() => handleTabClick(tab.path)}
            className="h-full flex items-center gap-2 px-3 cursor-pointer min-w-[120px] border-r group relative"
            style={{
              backgroundColor: isActive ? 'var(--vscode-editor-bg)' : 'var(--vscode-bg)',
              borderColor: 'var(--vscode-border)',
              borderTop: isActive ? '1px solid var(--vscode-accent)' : '1px solid transparent',
              color: isActive ? 'var(--vscode-text-active)' : 'var(--vscode-text)'
            }}
          >
            {/* File icon */}
            <VscFile style={{ color: getIconColor(tab.name) }} />
            
            {/* File name */}
            <span className="text-[13px] flex-1 truncate">{tab.name}</span>
            
            {/* Close button - shows on hover */}
            <button
              onClick={(e) => handleCloseTab(e, tab.path)}
              className="opacity-0 group-hover:opacity-100 hover:bg-[#3e3e42] rounded p-[2px] transition-opacity"
            >
              <VscClose className="text-[14px]" />
            </button>
            
            {/* Active tab indicator (bottom border) */}
            {isActive && (
              <div 
                className="absolute bottom-0 left-0 right-0 h-[1px]"
                style={{ backgroundColor: 'var(--vscode-accent)' }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TabBar;
