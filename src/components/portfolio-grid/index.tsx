'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';

interface PortfolioGridProps {
  images?: string[];
  onImageClick?: (index: number) => void;
}

export function PortfolioGrid({ images = [], onImageClick }: PortfolioGridProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const modalRef = useRef<HTMLDivElement>(null);

  const portfolioItems = Array.from({ length: 6 }, (_, i) => images[i] || null);

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => new Set([...prev, index]));
  };

  const handleImageClick = (index: number) => {
    if (portfolioItems[index]) {
      setSelectedImage(index);
      onImageClick?.(index);
    }
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const goToPrevious = useCallback(() => {
    if (selectedImage !== null && selectedImage > 0 && portfolioItems[selectedImage - 1]) {
      setSelectedImage(selectedImage - 1);
    }
  }, [selectedImage, portfolioItems]);

  const goToNext = useCallback(() => {
    if (selectedImage !== null && selectedImage < portfolioItems.length - 1 && portfolioItems[selectedImage + 1]) {
      setSelectedImage(selectedImage + 1);
    }
  }, [selectedImage, portfolioItems]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, goToPrevious, goToNext]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <>
      {/* Minimal Portfolio Grid */}
      <div className="grid grid-cols-3 gap-3">
        {portfolioItems.map((image, index) => (
          <button
            key={index}
            onClick={() => handleImageClick(index)}
            className="relative aspect-square rounded-2xl overflow-hidden bg-white/70 backdrop-blur-xl border border-white/20 shadow-glass hover:shadow-glass-hover transition-all duration-500 hover:scale-[1.02] group"
            style={{ 
              animationDelay: `${index * 100}ms`,
              opacity: image ? (loadedImages.has(index) ? 1 : 0) : 1,
              transition: 'all 0.6s ease-out'
            }}
          >
            {image ? (
              <>
                {/* Loading skeleton */}
                <div className={`absolute inset-0 bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 bg-[length:200%_100%] animate-shimmer ${
                  loadedImages.has(index) ? 'opacity-0' : 'opacity-100'
                } transition-opacity duration-500`} />
                
                {/* Actual image */}
                <Image 
                  src={image} 
                  alt={`Portfolio ${index + 1}`}
                  fill
                  className={`object-cover transition-all duration-700 ${
                    loadedImages.has(index) 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-105'
                  } group-hover:scale-110`}
                  onLoad={() => handleImageLoad(index)}
                  priority={index < 3} // Load first 3 images with priority
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-neutral-300 transition-all duration-300 group-hover:text-neutral-400">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Minimal Modal */}
      {selectedImage !== null && portfolioItems[selectedImage] && (
        <div 
          ref={modalRef}
          className="fixed inset-0 bg-black/80 backdrop-blur-xl z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === modalRef.current) {
              closeModal();
            }
          }}
        >
          {/* Close button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors"
          >
            <X size={20} />
          </button>

          {/* Navigation */}
          <div className="relative max-w-4xl max-h-[90vh] w-full flex items-center justify-center">
            {selectedImage > 0 && portfolioItems[selectedImage - 1] && (
              <button
                onClick={goToPrevious}
                className="absolute left-4 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
            )}

            {selectedImage < portfolioItems.length - 1 && portfolioItems[selectedImage + 1] && (
              <button
                onClick={goToNext}
                className="absolute right-4 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            )}

            {/* Image */}
            <Image
              src={portfolioItems[selectedImage]!}
              alt={`Portfolio ${selectedImage + 1}`}
              width={800}
              height={600}
              className="max-w-full max-h-full object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </>
  );
}