'use client';

import { X, Phone, Calendar, Clock, Info } from 'lucide-react';
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
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9999] flex items-end justify-center animate-fade-in">
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
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-base font-medium text-neutral-900 flex-1">
              {service.name}
            </h3>
            <div className="flex items-center gap-2">
              {service.onlineBooking && (
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full border border-green-200">
                  <Calendar size={10} />
                  Online Booking
                </span>
              )}
              {service.variablePrice && (
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-amber-50 text-amber-700 text-xs rounded-full border border-amber-200">
                  <Info size={10} />
                  Variable Price
                </span>
              )}
            </div>
          </div>

          {service.description && (
            <p className="text-sm text-neutral-700 mb-4 leading-relaxed">
              {service.description}
            </p>
          )}

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1 text-sm text-neutral-600">
              <Clock size={14} />
              <span>Duration: {service.duration}</span>
            </div>
            <span className="text-lg font-semibold text-glass-primary">
              {service.price}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          {service.onlineBooking ? (
            <>
              <button 
                onClick={() => {
                  // This would open online booking system in the future
                  alert('Online booking system coming soon! Please call for now.');
                }}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <Calendar size={18} />
                <span>Book Online</span>
              </button>
              
              <button 
                onClick={onCall}
                className="w-full bg-white/80 backdrop-blur-xl border border-white/40 text-neutral-700 font-medium py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone size={16} />
                <span>Or Call to Book</span>
              </button>
            </>
          ) : (
            <button 
              onClick={onCall}
              className="w-full bg-glass-primary hover:bg-glass-secondary text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              <span>Call to Book</span>
            </button>
          )}
          
          <p className="text-xs text-neutral-500 text-center mt-4">
            {service.onlineBooking 
              ? "Book online or call us directly to schedule your appointment." 
              : "Call us to schedule your appointment."}
          </p>
        </div>
      </div>
    </div>
  );
}