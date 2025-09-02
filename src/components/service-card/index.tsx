'use client';

import { Clock, ChevronRight, Info, Star, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ServiceCardProps {
  id: string;
  name: string;
  duration: string;
  price: string;
  oldPrice?: string;
  colorClass: string;
  availableSlots?: number;
  description?: string;
  variablePrice?: boolean;
  onlineBooking?: boolean;
  priceType?: string;
  index?: number;
  onSelect: (service: ServiceData) => void;
}

export interface ServiceData {
  id: string;
  name: string;
  duration: string;
  price: string;
  colorClass: string;
  description?: string;
  variablePrice?: boolean;
  onlineBooking?: boolean;
  priceType?: string;
}

export function ServiceCard({ 
  id, 
  name, 
  duration, 
  price, 
  oldPrice, 
  colorClass, 
  availableSlots,
  description,
  variablePrice,
  onlineBooking,
  priceType,
  index = 0,
  onSelect 
}: ServiceCardProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 100); // Stagger by 100ms per card

    return () => clearTimeout(timer);
  }, [index]);

  const handleClick = () => {
    onSelect({ 
      id, 
      name, 
      duration, 
      price, 
      colorClass, 
      description, 
      variablePrice, 
      onlineBooking, 
      priceType 
    });
  };

  return (
    <button
      onClick={handleClick}
      className={`group w-full text-left transition-all duration-700 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="relative bg-white/70 backdrop-blur-xl border border-white/20 rounded-2xl p-4 sm:p-5 shadow-glass hover:shadow-glass-hover transition-all duration-500 hover:scale-[1.01] hover:bg-white/80">
        {/* Service type indicators */}
        <div className="absolute top-3 right-3 flex items-center gap-1">
          {onlineBooking && (
            <div className="w-2 h-2 bg-green-500 rounded-full" title="Online booking available" />
          )}
          {variablePrice && (
            <div className="w-2 h-2 bg-amber-500 rounded-full" title="Variable pricing" />
          )}
          {description && (
            <Info size={14} className="text-neutral-400" title="More info available" />
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 pr-8 sm:pr-0">
          {/* Service info */}
          <div className="flex-1 space-y-2">
            <div className="flex items-start justify-between sm:block">
              <div className="flex items-center gap-2 flex-1">
                <h3 className="text-base font-medium text-neutral-900 group-hover:text-glass-primary transition-colors pr-2 sm:pr-0">
                  {name}
                </h3>
                {onlineBooking && (
                  <span className="hidden sm:inline-flex items-center gap-1 px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full border border-green-200">
                    <Zap size={10} />
                    Book Online
                  </span>
                )}
              </div>
              
              {/* Price on mobile - top right */}
              <div className="text-right sm:hidden">
                <div className="text-lg font-semibold text-neutral-900">
                  {price}
                </div>
                {oldPrice && (
                  <div className="text-xs text-neutral-400 line-through">
                    {oldPrice}
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex items-center gap-1.5 text-sm text-neutral-600">
              <Clock size={14} className="text-neutral-400" />
              <span>{duration}</span>
              {variablePrice && (
                <span className="text-xs text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  Variable pricing
                </span>
              )}
            </div>

            {description && (
              <p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed">
                {description}
              </p>
            )}
          </div>
          
          {/* Price and action - desktop only */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="text-right">
              <div className="text-lg font-semibold text-neutral-900">
                {price}
              </div>
              {oldPrice && (
                <div className="text-xs text-neutral-400 line-through">
                  {oldPrice}
                </div>
              )}
            </div>
            
            <ChevronRight size={18} className="text-neutral-400 group-hover:text-glass-primary group-hover:translate-x-1 transition-all" />
          </div>
        </div>
      </div>
    </button>
  );
}