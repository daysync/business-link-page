'use client';

import { Clock, ChevronRight } from 'lucide-react';

interface ServiceCardProps {
  id: string;
  name: string;
  duration: string;
  price: string;
  oldPrice?: string;
  colorClass: string;
  availableSlots?: number;
  onSelect: (service: ServiceData) => void;
}

export interface ServiceData {
  id: string;
  name: string;
  duration: string;
  price: string;
  colorClass: string;
}

export function ServiceCard({ 
  id, 
  name, 
  duration, 
  price, 
  oldPrice, 
  colorClass, 
  availableSlots,
  onSelect 
}: ServiceCardProps) {
  const handleClick = () => {
    onSelect({ id, name, duration, price, colorClass });
  };

  return (
    <button
      onClick={handleClick}
      className="group w-full text-left"
    >
      <div className="relative bg-white/70 backdrop-blur-xl border border-white/20 rounded-2xl p-4 sm:p-5 shadow-glass hover:shadow-glass-hover transition-all duration-500 hover:scale-[1.01] hover:bg-white/80">
        {/* Content */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
          {/* Service info */}
          <div className="flex-1 space-y-2">
            <div className="flex items-start justify-between sm:block">
              <h3 className="text-base font-medium text-neutral-900 group-hover:text-glass-primary transition-colors flex-1 pr-2 sm:pr-0">
                {name}
              </h3>
              
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
            </div>
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