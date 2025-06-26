'use client';

import { X, Phone } from 'lucide-react';
import { ServiceData } from '../service-card';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: ServiceData | null;
  onCall: () => void;
}

export function ServiceModal({ isOpen, onClose, service, onCall }: ServiceModalProps) {
  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-end justify-center animate-fade-in">
      <div className="bg-white/95 backdrop-blur-2xl border-t border-white/20 rounded-t-3xl p-6 w-full max-w-lg shadow-glass-lg animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-neutral-900">
            Book Service
          </h2>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-colors"
          >
            <X size={18} className="text-neutral-600" />
          </button>
        </div>
        
        {/* Service details */}
        <div className="bg-glass-primary/5 border border-glass-primary/10 rounded-2xl p-5 mb-6">
          <h3 className="text-base font-medium text-neutral-900 mb-3">
            {service.name}
          </h3>
          <div className="flex justify-between items-center">
            <span className="text-sm text-neutral-600">
              Duration: {service.duration}
            </span>
            <span className="text-lg font-semibold text-glass-primary">
              {service.price}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <button 
            onClick={onCall}
            className="w-full bg-glass-primary hover:bg-glass-secondary text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            <Phone size={18} />
            <span>Call to Book</span>
          </button>
          
          <p className="text-xs text-neutral-500 text-center mt-4">
            Online booking coming soon. Call us to schedule your appointment.
          </p>
        </div>
      </div>
    </div>
  );
}