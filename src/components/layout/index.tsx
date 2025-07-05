import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  showHeader?: boolean;
  showFooter?: boolean;
  variant?: 'default' | 'profile' | 'minimal';
}

export default function Layout({ 
  children, 
  className = '', 
  showHeader = true, 
  showFooter = true,
  variant = 'default' 
}: LayoutProps) {
  const containerClass = variant === 'profile' 
    ? 'max-w-4xl' 
    : variant === 'minimal' 
    ? 'max-w-2xl' 
    : 'max-w-6xl';

  return (
    <div className="min-h-screen bg-gradient-to-br from-main-primary via-main-secondary to-main-accent text-white">
      {/* Background blur elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-main-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-main-secondary rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-main-accent rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        {showHeader && (
          <header className="sticky top-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/20">
            <div className={`mx-auto px-4 py-4 ${containerClass}`}>
              {/* Header content will be passed as prop or rendered by specific components */}
            </div>
          </header>
        )}

        <main className={`mx-auto px-4 py-8 ${containerClass} ${className}`}>
          {children}
        </main>

        {showFooter && (
          <footer className="relative z-10 mt-auto">
            <div className="backdrop-blur-md bg-white/5 border-t border-white/10">
              <div className={`mx-auto px-4 py-8 ${containerClass}`}>
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-main-primary to-main-secondary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">D</span>
                    </div>
                    <span className="text-white/80 text-sm">DaySync</span>
                  </div>
                  
                  <div className="flex items-center space-x-6 text-sm text-white/60">
                    <span>© {new Date().getFullYear()} DaySync. All rights reserved.</span>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        )}
      </div>
    </div>
  );
}