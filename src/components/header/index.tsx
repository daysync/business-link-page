import React from 'react';
import Image from 'next/image';
import { trackContactClick } from '@/lib/analytics';

interface HeaderProps {
  name: string;
  title: string;
  location: string;
  phone: string;
  address: string;
  workingHours?: any;
  isOnline?: boolean;
  avatar?: string;
  username?: string; // Add username for analytics tracking
}

export default function Header({
  name,
  title,
  location,
  phone,
  address,
  isOnline = false,
  avatar,
  username
}: HeaderProps) {
  
  const handleContactClick = async (contactType: 'call' | 'message') => {
    if (username) {
      await trackContactClick(username, contactType, {
        profileName: name,
        phone: phone,
      });
    }
  };

  const handleAddressClick = () => {
    if (!address && !location) return;
    
    const addressQuery = encodeURIComponent(address || location);
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    
    // Detect iOS device
    if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      // Open Apple Maps on iOS
      window.open(`maps://maps.apple.com/?q=${addressQuery}`, '_blank');
    } else {
      // Open Google Maps on other devices
      window.open(`https://maps.google.com/maps?q=${addressQuery}`, '_blank');
    }
  };
  return (
    <div className="relative bg-white/40 backdrop-blur-2xl border-b border-white/20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-glass-primary/10 via-transparent to-glass-secondary/10" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent" />
      </div>

      <div className="relative z-10 px-4 sm:px-6 pt-16 sm:pt-20 pb-12 sm:pb-16">
        <div className="flex flex-col items-center space-y-5">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-glass-primary/20 to-glass-secondary/20 rounded-full blur-2xl opacity-60" />
            <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-glass">
              <div className="absolute inset-0 bg-white/30 backdrop-blur-xl" />
              {avatar ? (
                <Image
                  src={avatar}
                  alt={name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="relative w-full h-full flex items-center justify-center text-4xl">
                  👤
                </div>
              )}
            </div>
            {isOnline && (
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-2 border-white rounded-full shadow-lg" />
            )}
          </div>

          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold text-neutral-900">{name}</h1>
            <p className="text-sm text-neutral-600">{title}</p>
            {phone && (
              <div className="flex items-center justify-center space-x-1 text-xs text-neutral-500">
                <span>📞</span>
                <span>{phone}</span>
              </div>
            )}
            {location && (
              <button 
                onClick={handleAddressClick}
                className="flex items-center justify-center space-x-1 text-xs text-neutral-500 hover:text-neutral-700 transition-colors duration-200 cursor-pointer group max-w-full px-2"
              >
                <span className="group-hover:scale-110 transition-transform duration-200 flex-shrink-0">📍</span>
                <span className="underline decoration-dotted underline-offset-2 hover:decoration-solid truncate text-center leading-relaxed">{location}</span>
              </button>
            )}
          </div>

          <div className="flex flex-col space-y-3 w-full max-w-xs">
            <button
              onClick={async () => {
                await handleContactClick('call');
                window.location.href = `tel:${phone}`;
              }}
              className="w-full bg-gradient-to-r from-glass-primary to-glass-secondary text-white font-medium py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              📞 Call
            </button>
            <button
              onClick={async () => {
                await handleContactClick('message');
                window.location.href = `sms:${phone}`;
              }}
              className="w-full bg-white/80 backdrop-blur-xl border border-white/40 text-neutral-700 font-medium py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              💬 Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}