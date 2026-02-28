import React from 'react';
import { VscSourceControl, VscError, VscWarning, VscBell } from 'react-icons/vsc';

/**
 * StatusBar Component - Bottom status bar (like VS Code's blue bar)
 * 
 * This shows useful information like:
 * - Current branch (git)
 * - Errors/warnings count
 * - Language mode
 * - Line/column number (we'll add this later with context)
 */
const StatusBar = () => {
  return (
    <div 
      className="h-5.5 flex items-center justify-between px-3 text-[12px]"
      style={{ 
        backgroundColor: 'var(--vscode-statusbar-bg)',
        color: 'var(--vscode-text-active)'
      }}
    >
      {/* Left section */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 cursor-pointer hover:opacity-80">
          <VscSourceControl />
          <span>main</span>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 cursor-pointer hover:opacity-80">
            <VscError />
            <span>0</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:opacity-80">
            <VscWarning />
            <span>0</span>
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4">
        <span className="cursor-pointer hover:opacity-80">Ln 1, Col 1</span>
        <span className="cursor-pointer hover:opacity-80">UTF-8</span>
        <span className="cursor-pointer hover:opacity-80">JavaScript JSX</span>
        <VscBell className="cursor-pointer hover:opacity-80" />
      </div>
    </div>
  );
};

export default StatusBar;
