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
      <div className="flex items-center h-full">
        {/* VS Code Logo */}
        <div className="px-3 h-full flex items-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5725 1.0039L4.47754 7.1289L1.85254 5.2539L0.97754 5.7539L4.47754 8.8789L11.5725 2.0039V1.0039Z" fill="#007ACC"/>
            <path d="M11.5725 5.3789L4.47754 11.5039L1.85254 9.6289L0.97754 10.1289L4.47754 13.2539L11.5725 6.3789V5.3789Z" fill="#007ACC"/>
            <path d="M15.0725 1.12894L11.5725 0.00390625V15.0039L15.0725 13.8789V1.12894Z" fill="#007ACC"/>
          </svg>
        </div>
        
        {/* Menu Items */}
        <button className="hover:bg-[#3e3e42] px-3 h-full transition-colors">
          File
        </button>
        <button className="hover:bg-[#3e3e42] px-3 h-full transition-colors">
          Edit
        </button>
        <button className="hover:bg-[#3e3e42] px-3 h-full transition-colors">
          Selection
        </button>
        <button className="hover:bg-[#3e3e42] px-3 h-full transition-colors">
          View
        </button>
        <button className="hover:bg-[#3e3e42] px-3 h-full transition-colors">
          Go
        </button>
        <button className="hover:bg-[#3e3e42] px-3 h-full transition-colors">
          Run
        </button>
        <button className="hover:bg-[#3e3e42] px-3 h-full transition-colors">
          Terminal
        </button>
        <button className="hover:bg-[#3e3e42] px-3 h-full transition-colors">
          Help
        </button>
      </div>

      {/* Center section - Navigation and Search */}
      <div className="flex items-center gap-1 flex-1 justify-center max-w-[600px] px-4">
        <button className="hover:bg-[#3e3e42] p-1.5 rounded transition-colors">
          <VscChevronLeft className="text-[14px]" />
        </button>
        <button className="hover:bg-[#3e3e42] p-1.5 rounded transition-colors">
          <VscChevronRight className="text-[14px]" />
        </button>
        
        {/* Search Bar */}
        <div className="flex-1 max-w-[500px] relative ml-2">
          <input
            type="text"
            placeholder="MyPortfolio"
            className="w-full pl-7 pr-3 py-1 rounded-sm text-[13px] outline-none"
            style={{
              backgroundColor: 'var(--vscode-input-bg)',
              color: 'var(--vscode-text)',
              border: '1px solid var(--vscode-border)'
            }}
            readOnly
          />
          <VscSearch className="absolute left-2 top-1/2 -translate-y-1/2 text-[13px]" 
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
