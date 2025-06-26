'use client';

import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { useState } from 'react';

interface FloatingActionButtonProps {
  onCall: () => void;
  onMessage: () => void;
  onBook: () => void;
}

export function FloatingActionButton({ onCall, onMessage, onBook }: FloatingActionButtonProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* Secondary actions - glass style */}
        <div 
          className={`absolute bottom-16 right-0 space-y-3 transition-all duration-500 ${
            isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          {/* Call button */}
          <button
            onClick={onCall}
            className="flex items-center justify-center w-12 h-12 bg-white/80 backdrop-blur-xl border border-white/20 rounded-full shadow-glass hover:shadow-glass-hover hover:scale-105 transition-all duration-300"
          >
            <Phone size={18} className="text-neutral-700" />
          </button>

          {/* Message button */}
          <button
            onClick={onMessage}
            className="flex items-center justify-center w-12 h-12 bg-white/80 backdrop-blur-xl border border-white/20 rounded-full shadow-glass hover:shadow-glass-hover hover:scale-105 transition-all duration-300"
          >
            <MessageCircle size={18} className="text-neutral-700" />
          </button>
        </div>

        {/* Main action button */}
        <button
          onClick={() => {
            if (isExpanded) {
              onBook();
            }
            setIsExpanded(!isExpanded);
          }}
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setTimeout(() => setIsExpanded(false), 500)}
          className="relative w-14 h-14 bg-glass-primary hover:bg-glass-secondary text-white rounded-full shadow-glass hover:shadow-glass-hover transition-all duration-500 hover:scale-105 active:scale-95"
        >
          <div className="flex items-center justify-center">
            <Calendar size={22} className={`transition-transform duration-500 ${isExpanded ? 'rotate-45' : ''}`} />
          </div>
          
          {/* Subtle pulse effect */}
          <div className="absolute inset-0 rounded-full bg-glass-primary/20 scale-150 animate-glow" />
        </button>
      </div>
    </div>
  );
}