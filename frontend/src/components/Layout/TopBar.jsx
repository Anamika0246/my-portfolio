import React from 'react';
import { VscSearch, VscChevronLeft, VscChevronRight, VscChromeMaximize, VscChromeMinimize, VscChromeClose, VscLayoutMenubar } from 'react-icons/vsc';

/**
 * TopBar Component - Mimics VS Code's top title bar
 * 
 * This component shows:
 * - VS Code logo on the left
 * - Menu items (File, Edit, Selection, View, Go, Run, Terminal, Help)
 * - Navigation arrows and search bar in center
 * - Window controls on the right
 */
const TopBar = () => {
  return (
    <div className="h-[35px] flex items-center justify-between text-[13px]" 
         style={{ backgroundColor: 'var(--vscode-titlebar-bg)', color: 'var(--vscode-text)' }}>
      
      {/* Left section - Logo and Menu items */}
      <div className="flex items-center h-full gap-2">
        {/* VS Code Logo */}
        <div className="px-3 h-full flex items-center">
          <img src="/vscode-logo.png" alt="VS Code Logo" width="16" height="16" />
        </div>
        
        {/* Menu Items */}
        <button className="hover:bg-[#3e3e42] px-4 py-1 h-full transition-colors">
          File
        </button>
        <button className="hover:bg-[#3e3e42] px-4 py-1 h-full transition-colors">
          Edit
        </button>
        <button className="hover:bg-[#3e3e42] px-4 py-1 h-full transition-colors">
          Selection
        </button>
        <button className="hover:bg-[#3e3e42] px-4 py-1 h-full transition-colors">
          View
        </button>
        <button className="hover:bg-[#3e3e42] px-4 py-1 h-full transition-colors">
          Go
        </button>
        <button className="hover:bg-[#3e3e42] px-4 py-1 h-full transition-colors">
          Run
        </button>
        <button className="hover:bg-[#3e3e42] px-4 py-1 h-full transition-colors">
          Terminal
        </button>
        <button className="hover:bg-[#3e3e42] px-4 py-1 h-full transition-colors">
          Help
        </button>
      </div>

      {/* Center section - Navigation and Search */}
      <div className="flex items-center gap-4 flex-1 justify-center px-8">
        <button className="hover:bg-[#3e3e42] p-1.5 rounded transition-colors shrink-0">
          <VscChevronLeft className="text-[14px]" />
        </button>
        <button className="hover:bg-[#3e3e42] p-1.5 rounded transition-colors shrink-0">
          <VscChevronRight className="text-[14px]" />
        </button>
        
        {/* Search Bar - Expanded */}
        <div className="flex-1 max-w-150 relative ml-5">
          <input
            type="text"
            placeholder="MyPortfolio"
            className="w-full pl-8 pr-3 py-1.5 rounded-sm text-[13px] outline-none"
            style={{
              backgroundColor: 'var(--vscode-input-bg)',
              color: 'var(--vscode-text)',
              border: '1px solid var(--vscode-border)'
            }}
            readOnly
          />
          <VscSearch className="absolute left-1 top-1/2 -translate-y-1/2 text-[14px]" 
                     style={{ color: 'var(--vscode-text-secondary)' }} />
        </div>
      </div>

      {/* Right section - Window controls */}
      <div className="flex items-center h-full">
        <button className="hover:bg-[#3e3e42] w-[46px] h-full flex items-center justify-center transition-colors">
          <VscLayoutMenubar className="text-[13px]" />
        </button>
        <button className="hover:bg-[#3e3e42] w-[46px] h-full flex items-center justify-center transition-colors">
          <VscChromeMinimize className="text-[13px]" />
        </button>
        <button className="hover:bg-[#3e3e42] w-[46px] h-full flex items-center justify-center transition-colors">
          <VscChromeMaximize className="text-[13px]" />
        </button>
        <button className="hover:bg-[#e81123] hover:text-white w-[46px] h-full flex items-center justify-center transition-colors">
          <VscChromeClose className="text-[13px]" />
        </button>
      </div>
    </div>
  );
};

export default TopBar;
