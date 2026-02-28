import { useState } from 'react';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import './App.css';

// Import our custom components
import TopBar from './components/Layout/TopBar';
import ActivityBar from './components/Layout/ActivityBar';
import Sidebar from './components/Layout/Sidebar';
import EditorArea from './components/Layout/EditorArea';
import StatusBar from './components/Layout/StatusBar';

/**
 * Main App Component
 * 
 * Component Hierarchy Explained:
 * App (this component)
 * ├── BrowserRouter (enables routing)
 * │   ├── TopBar (title bar)
 * │   ├── ActivityBar (left icon bar)
 * │   ├── Sidebar (file explorer)
 * │   ├── EditorArea (main content with TabBar)
 * │   └── StatusBar (bottom bar)
 * 
 * State Management (Advanced):
 * - activeTab: which sidebar tab is selected (explorer, search, etc.)
 * - openTabs: array of currently open file tabs
 * - Managing multiple pieces of state and passing them to children
 * - This is called "lifting state up" - parent manages shared state
 */
function App() {
  // State for sidebar active tab
  const [activeTab, setActiveTab] = useState('explorer');
  
  // State for open file tabs - array of objects
  // Each tab has: { name: 'Home.jsx', path: '/home' }
  const [openTabs, setOpenTabs] = useState([
    { name: 'Home.jsx', path: '/home' } // Home is open by default
  ]);

  /**
   * Function to add a new tab when clicking a file
   * Concept: We check if tab already exists before adding
   */
  const handleOpenTab = (name, path) => {
    // Check if tab is already open
    const tabExists = openTabs.some(tab => tab.path === path);
    
    if (!tabExists) {
      // Add new tab to array using spread operator (...)
      setOpenTabs([...openTabs, { name, path }]);
    }
  };

  /**
   * Function to close a tab
   * Concept: We filter out the tab with matching path
   * Array.filter() creates a new array without the closed tab
   */
  const handleCloseTab = (path) => {
    setOpenTabs(openTabs.filter(tab => tab.path !== path));
  };

  return (
    <BrowserRouter>
      <div className="app-container">
        {/* Top title bar */}
        <TopBar />
        
        {/* Main content area */}
        <div className="main-content">
          {/* Activity bar (left icons) - we pass activeTab state to it */}
          <ActivityBar activeTab={activeTab} setActiveTab={setActiveTab} />
          
          {/* Sidebar (file explorer) - pass handleOpenTab so it can add tabs */}
          <Sidebar activeTab={activeTab} onOpenTab={handleOpenTab} />
          
          {/* Editor area (center content) - pass tab state and handlers */}
          <EditorArea openTabs={openTabs} onCloseTab={handleCloseTab} />
        </div>
        
        {/* Bottom status bar */}
        <StatusBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
