'use client';

import { X, Phone, Calendar, Clock, Info } from 'lucide-react';
import { ServiceData } from '../service-card';
import { useEffect, useState, useRef } from 'react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: ServiceData | null;
  onCall: () => void;
}

export function ServiceModal({ isOpen, onClose, service, onCall }: ServiceModalProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [dragY, setDragY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isCallLoading, setIsCallLoading] = useState(false);
  const [isBookLoading, setIsBookLoading] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const startY = useRef(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isMobile) return;
    startY.current = e.touches[0].clientY;
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isMobile || !isDragging) return;
    
    const currentY = e.touches[0].clientY;
    const deltaY = currentY - startY.current;
    
    // Only allow downward dragging
    if (deltaY > 0) {
      setDragY(deltaY);
    }
  };

  const handleTouchEnd = () => {
    if (!isMobile || !isDragging) return;
    
    setIsDragging(false);
    
    // Close if dragged more than 100px down
    if (dragY > 100) {
      onClose();
    }
    
    setDragY(0);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleCall = async () => {
    setIsCallLoading(true);
    try {
      await onCall();
      // Simulate brief loading time for better UX
      setTimeout(() => {
        setIsCallLoading(false);
        onClose();
      }, 300);
    } catch (error) {
      setIsCallLoading(false);
    }
  };

  const handleBookOnline = async () => {
    setIsBookLoading(true);
    try {
      // This would open online booking system in the future
      await new Promise(resolve => setTimeout(resolve, 800));
      alert('Online booking system coming soon! Please call for now.');
    } finally {
      setIsBookLoading(false);
    }
  };

  if (!isOpen || !service) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9999] flex items-end sm:items-center justify-center animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div 
        ref={modalRef}
        className={`
          ${isMobile 
            ? 'bg-white/98 backdrop-blur-2xl border-t border-white/20 rounded-t-3xl w-full max-h-[85vh] overflow-y-auto' 
            : 'bg-white/95 backdrop-blur-2xl border border-white/20 rounded-2xl w-full max-w-lg'
          } 
          p-6 shadow-glass-lg animate-slide-up relative
        `}
        style={{
          transform: isMobile && isDragging ? `translateY(${dragY}px)` : undefined,
          transition: isDragging ? 'none' : 'transform 0.3s ease-out'
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Mobile drag indicator */}
        {isMobile && (
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
            <div className="w-12 h-1 bg-neutral-300 rounded-full" />
          </div>
        )}

        {/* Header */}
        <div className={`flex items-center justify-between ${isMobile ? 'mb-8 mt-4' : 'mb-6'}`}>
          <h2 className={`font-semibold text-neutral-900 ${isMobile ? 'text-xl' : 'text-lg'}`}>
            Book Service
          </h2>
          <button 
            onClick={onClose}
            className={`rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-colors ${isMobile ? 'w-10 h-10' : 'w-8 h-8'}`}
          >
            <X size={isMobile ? 20 : 18} className="text-neutral-600" />
          </button>
        </div>
        
        {/* Service details */}
        <div className={`bg-glass-primary/5 border border-glass-primary/10 rounded-2xl ${isMobile ? 'p-6 mb-8' : 'p-5 mb-6'}`}>
          <div className={`${isMobile ? 'flex flex-col gap-3 mb-4' : 'flex items-start justify-between mb-3'}`}>
            <h3 className={`font-medium text-neutral-900 ${isMobile ? 'text-lg' : 'text-base'} flex-1`}>
              {service.name}
            </h3>
            <div className={`flex items-center gap-2 ${isMobile ? 'flex-wrap' : ''}`}>
              {service.onlineBooking && (
                <span className={`inline-flex items-center gap-1 px-3 py-1.5 bg-green-50 text-green-700 rounded-full border border-green-200 ${isMobile ? 'text-sm' : 'text-xs'}`}>
                  <Calendar size={isMobile ? 12 : 10} />
                  Online Booking
                </span>
              )}
              {service.variablePrice && (
                <span className={`inline-flex items-center gap-1 px-3 py-1.5 bg-amber-50 text-amber-700 rounded-full border border-amber-200 ${isMobile ? 'text-sm' : 'text-xs'}`}>
                  <Info size={isMobile ? 12 : 10} />
                  Variable Price
                </span>
              )}
            </div>
          </div>

          {service.description && (
            <p className={`text-neutral-700 mb-4 leading-relaxed ${isMobile ? 'text-base' : 'text-sm'}`}>
              {service.description}
            </p>
          )}

          <div className={`${isMobile ? 'flex flex-col gap-3' : 'flex justify-between items-center'}`}>
            <div className={`flex items-center gap-2 text-neutral-600 ${isMobile ? 'text-base' : 'text-sm'}`}>
              <Clock size={isMobile ? 16 : 14} />
              <span>Duration: {service.duration}</span>
            </div>
            <span className={`font-semibold text-glass-primary ${isMobile ? 'text-xl' : 'text-lg'}`}>
              {service.price}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className={`${isMobile ? 'space-y-4' : 'space-y-3'}`}>
          {service.onlineBooking ? (
            <>
              <button 
                onClick={handleBookOnline}
                disabled={isBookLoading}
                className={`w-full bg-green-500 hover:bg-green-600 active:bg-green-700 disabled:bg-green-400 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 ${
                  isMobile 
                    ? 'py-5 px-6 text-lg active:scale-95' 
                    : 'py-4 px-6 hover:-translate-y-0.5'
                } ${isBookLoading ? 'cursor-wait' : ''}`}
              >
                {isBookLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Booking...</span>
                  </>
                ) : (
                  <>
                    <Calendar size={isMobile ? 20 : 18} />
                    <span>Book Online</span>
                  </>
                )}
              </button>
              
              <button 
                onClick={handleCall}
                disabled={isCallLoading}
                className={`w-full bg-white/80 backdrop-blur-xl border border-white/40 text-neutral-700 font-medium rounded-xl shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-3 ${
                  isMobile 
                    ? 'py-4 px-6 text-base active:scale-95' 
                    : 'py-3 px-6'
                } ${isCallLoading ? 'cursor-wait' : ''}`}
              >
                {isCallLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-neutral-400/30 border-t-neutral-700 rounded-full animate-spin" />
                    <span>Calling...</span>
                  </>
                ) : (
                  <>
                    <Phone size={isMobile ? 18 : 16} />
                    <span>Or Call to Book</span>
                  </>
                )}
              </button>
            </>
          ) : (
            <button 
              onClick={handleCall}
              disabled={isCallLoading}
              className={`w-full bg-glass-primary hover:bg-glass-secondary active:bg-glass-primary/90 disabled:bg-glass-primary/60 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 ${
                isMobile 
                  ? 'py-5 px-6 text-lg active:scale-95' 
                  : 'py-4 px-6 hover:-translate-y-0.5'
              } ${isCallLoading ? 'cursor-wait' : ''}`}
            >
              {isCallLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Calling...</span>
                </>
              ) : (
                <>
                  <Phone size={isMobile ? 20 : 18} />
                  <span>Call to Book</span>
                </>
              )}
            </button>
          )}
          
          <p className={`text-neutral-500 text-center ${isMobile ? 'text-sm mt-6 px-4' : 'text-xs mt-4'}`}>
            {service.onlineBooking 
              ? "Book online or call us directly to schedule your appointment." 
              : "Call us to schedule your appointment."}
          </p>
        </div>

        {/* Mobile safe area padding */}
        {isMobile && <div className="pb-safe-area-inset-bottom" />}
      </div>
    </div>
  );
}