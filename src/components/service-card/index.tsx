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
      <div className="relative bg-white/70 backdrop-blur-xl border border-white/20 rounded-2xl p-5 shadow-glass hover:shadow-glass-hover transition-all duration-500 hover:scale-[1.01] hover:bg-white/80">
        {/* Content */}
        <div className="flex items-center justify-between">
          {/* Service info */}
          <div className="flex-1 space-y-1">
            <h3 className="text-base font-medium text-neutral-900 group-hover:text-glass-primary transition-colors">
              {name}
            </h3>
            
            <div className="flex items-center gap-4 text-sm text-neutral-600">
              <div className="flex items-center gap-1.5">
                <Clock size={14} className="text-neutral-400" />
                <span>{duration}</span>
              </div>
              
              {availableSlots && availableSlots > 0 && (
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-glass-tertiary rounded-full" />
                  <span className="text-glass-tertiary font-medium">{availableSlots} slots</span>
                </div>
              )}
            </div>
          </div>
          
          {/* Price and action */}
          <div className="flex items-center gap-4">
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