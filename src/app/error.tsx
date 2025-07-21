'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-main-background/30 to-white font-inter-tight">
      {/* Enhanced background with hero pattern */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/hero-bg.svg')] bg-cover bg-center opacity-5" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-main-primary/8 rounded-full blur-3xl animate-float" />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-main-secondary/8 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-20 right-20 w-32 h-32 bg-main-accent/15 rounded-full blur-2xl animate-pulse" />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="w-full py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center">
              <Link href="/" className="inline-block">
                <Image
                  src="/daysync-logo.svg"
                  alt="DaySync"
                  width={200}
                  height={40}
                  className="h-10 w-auto mx-auto transition-transform hover:scale-105 duration-300"
                />
              </Link>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 flex items-center justify-center py-12">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center space-y-8">
            <div className="space-y-6">
              <div className="text-6xl mb-6">⚠️</div>
              <h1 className="text-4xl md:text-5xl font-bold text-main-primaryText">
                Something went wrong
              </h1>
              <p className="text-xl text-main-primaryText/70 leading-relaxed max-w-md mx-auto">
                An unexpected error occurred
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button 
                  onClick={reset}
                  className="glass-button-primary text-white font-medium py-3 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Try Again
                </button>
                
                <button 
                  onClick={() => window.location.href = '/'}
                  className="glass-button text-main-primaryText font-medium py-3 px-8 rounded-2xl transition-all duration-300"
                >
                  Go Home
                </button>
              </div>
              
              {process.env.NODE_ENV === 'development' && (
                <details className="mt-8 text-left max-w-lg mx-auto">
                  <summary className="text-main-primaryText/60 cursor-pointer hover:text-main-primaryText/80 transition-colors text-sm">
                    Error Details
                  </summary>
                  <pre className="mt-4 p-4 bg-main-primaryText/5 rounded-2xl text-sm text-main-primaryText/80 overflow-auto border border-main-primaryText/10">
                    {error.message}
                  </pre>
                </details>
              )}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-8 border-t border-main-primaryText/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-sm text-main-primaryText/50">
              Powered by DaySync
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}