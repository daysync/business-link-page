'use client';

import { useState, useEffect } from 'react';

interface StickyNavProps {
  sections: Array<{
    id: string;
    label: string;
    icon?: string;
  }>;
}

export function StickyNav({ sections }: StickyNavProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || '');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for header

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 120; // Account for sticky nav height
      const elementPosition = element.offsetTop - headerOffset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-white/20 shadow-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <nav className="flex space-x-1 py-3 overflow-x-auto scrollbar-hide">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                activeSection === section.id
                  ? 'bg-glass-primary text-white shadow-lg'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/50'
              }`}
            >
              {section.icon && <span>{section.icon}</span>}
              <span>{section.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}