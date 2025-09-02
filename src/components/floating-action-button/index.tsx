'use client';

import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';

interface FloatingActionButtonProps {
  onCall: () => void;
  onMessage: () => void;
  onBook: () => void;
}

export function FloatingActionButton({ onCall, onMessage, onBook }: FloatingActionButtonProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show FAB after scrolling down a bit (past header)
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-collapse on mobile when not hovered
  useEffect(() => {
    if (isExpanded && window.innerWidth < 768) {
      const timer = setTimeout(() => setIsExpanded(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isExpanded]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      <div className="relative">
        {/* Secondary actions - glass style */}
        <div 
          className={`absolute bottom-16 right-0 space-y-3 transition-all duration-500 ${
            isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          {/* Call button with tooltip */}
          <div className="relative group">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onCall();
                setIsExpanded(false);
              }}
              className="flex items-center justify-center w-12 h-12 bg-white/90 backdrop-blur-xl border border-white/30 rounded-full shadow-glass hover:shadow-glass-hover hover:scale-110 transition-all duration-300 active:scale-95"
            >
              <Phone size={18} className="text-neutral-700" />
            </button>
            {/* Tooltip */}
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-neutral-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Call now
            </div>
          </div>

          {/* Message button with tooltip */}
          <div className="relative group">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onMessage();
                setIsExpanded(false);
              }}
              className="flex items-center justify-center w-12 h-12 bg-white/90 backdrop-blur-xl border border-white/30 rounded-full shadow-glass hover:shadow-glass-hover hover:scale-110 transition-all duration-300 active:scale-95"
            >
              <MessageCircle size={18} className="text-neutral-700" />
            </button>
            {/* Tooltip */}
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-neutral-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Send message
            </div>
          </div>
        </div>

        {/* Main action button */}
        <div className="relative group">
          <button
            onClick={() => {
              if (isExpanded) {
                onBook();
                setIsExpanded(false);
              } else {
                setIsExpanded(true);
              }
            }}
            onMouseEnter={() => window.innerWidth >= 768 && setIsExpanded(true)}
            onMouseLeave={() => window.innerWidth >= 768 && setTimeout(() => setIsExpanded(false), 500)}
            className="relative w-14 h-14 bg-glass-primary hover:bg-glass-secondary text-white rounded-full shadow-glass hover:shadow-glass-hover transition-all duration-500 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-glass-primary focus:ring-offset-2"
            aria-label={isExpanded ? "Book service" : "Quick actions"}
          >
            <div className="flex items-center justify-center">
              <Calendar size={22} className={`transition-transform duration-500 ${isExpanded ? 'rotate-45' : ''}`} />
            </div>
            
            {/* Subtle pulse effect */}
            <div className="absolute inset-0 rounded-full bg-glass-primary/20 scale-150 animate-glow" />
          </button>
          
          {/* Main button tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-neutral-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {isExpanded ? 'Book service' : 'Quick actions'}
          </div>
        </div>
      </div>
    </div>
  );
}