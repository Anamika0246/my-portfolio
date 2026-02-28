import React, { useState, useEffect } from 'react';
import { VscClose } from 'react-icons/vsc';

/**
 * MobileWarning Component - Shows popup on mobile devices
 * Suggests users to open on desktop for better experience
 */
const MobileWarning = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile (screen width < 768px)
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      // Only show warning on mobile if user hasn't dismissed it
      const dismissed = localStorage.getItem('mobileWarningDismissed');
      if (mobile && !dismissed) {
        setIsVisible(true);
      }
    };

    // Check on mount
    checkMobile();

    // Check on window resize
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    // Remember that user dismissed the warning
    localStorage.setItem('mobileWarningDismissed', 'true');
  };

  // Don't render if not mobile or not visible
  if (!isMobile || !isVisible) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 animate-slide-down">
      <div 
        className="mx-2 mt-2 px-4 py-3 rounded-md shadow-lg flex items-center justify-between gap-3"
        style={{
          backgroundColor: 'var(--vscode-accent)',
          color: 'white'
        }}
      >
        <div className="flex-1">
          <p className="text-sm font-medium">
            📱 Better on Desktop
          </p>
          <p className="text-xs opacity-90 mt-1">
            For the best experience, please open this portfolio on a desktop screen.
          </p>
        </div>
        
        <button
          onClick={handleDismiss}
          className="hover:bg-white/20 rounded p-1 transition-colors flex-shrink-0"
          aria-label="Dismiss"
        >
          <VscClose className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default MobileWarning;
