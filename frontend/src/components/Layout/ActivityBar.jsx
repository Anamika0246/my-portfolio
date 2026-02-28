import React, { useState } from 'react';
import { VscFiles, VscSearch, VscSourceControl, VscDebugAlt, VscExtensions, VscAccount } from 'react-icons/vsc';

/**
 * ActivityBar Component - The leftmost vertical bar with icons
 * 
 * Hook Explanation - useState:
 * useState is a React Hook that lets us add state to functional components
 * Syntax: const [stateValue, setStateFunction] = useState(initialValue)
 * 
 * Example: const [activeTab, setActiveTab] = useState('explorer')
 * - activeTab: current value (starts as 'explorer')
 * - setActiveTab: function to update the value
 * - When state changes, React re-renders the component
 */
const ActivityBar = ({ activeTab, setActiveTab }) => {
  
  // Array of tab items - makes our code cleaner and easier to modify
  const tabs = [
    { id: 'explorer', icon: VscFiles, label: 'Explorer' },
    { id: 'search', icon: VscSearch, label: 'Search' },
    { id: 'source', icon: VscSourceControl, label: 'Source Control' },
    { id: 'debug', icon: VscDebugAlt, label: 'Debug' },
    { id: 'extensions', icon: VscExtensions, label: 'Extensions' },
  ];

  return (
    <div 
      className="w-[50px] flex flex-col items-center py-2 border-r"
      style={{ 
        backgroundColor: 'var(--vscode-activitybar-bg)', 
        borderColor: 'var(--vscode-border)' 
      }}
    >
      {/* Map through tabs array to create buttons */}
      {tabs.map((tab) => {
        const Icon = tab.icon; // Get the icon component
        const isActive = activeTab === tab.id;
        
        return (
          <button
            key={tab.id} // React needs unique 'key' for list items
            onClick={() => setActiveTab(tab.id)} // Update active tab on click
            className={`w-full h-[48px] flex items-center justify-center relative group
                       transition-colors duration-200`}
            style={{
              color: isActive ? 'var(--vscode-icon-active)' : 'var(--vscode-icon)',
              borderLeft: isActive ? '2px solid var(--vscode-accent)' : '2px solid transparent'
            }}
            title={tab.label} // Tooltip on hover
          >
            <Icon className="text-[24px]" />
            
            {/* Tooltip - shown on hover using group-hover */}
            <span className="absolute left-full ml-2 px-2 py-1 bg-[#454545] text-white text-xs rounded
                           opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {tab.label}
            </span>
          </button>
        );
      })}

      {/* Account button at bottom */}
      <div className="mt-auto">
        <button
          className="w-full h-[48px] flex items-center justify-center hover:bg-[#3e3e42] transition-colors"
          style={{ color: 'var(--vscode-icon)' }}
          title="Account"
        >
          <VscAccount className="text-[24px]" />
        </button>
      </div>
    </div>
  );
};

export default ActivityBar;
