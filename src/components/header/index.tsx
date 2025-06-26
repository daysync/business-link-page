'use client';

import { MapPin, Phone } from 'lucide-react';

interface HeaderProps {
  name: string;
  title: string;
  location: string;
  phone: string;
  isOnline?: boolean;
  avatar?: string | null;
  address?: string;
  workingHours?: any;
}

export function Header({ 
  name, 
  title, 
  location, 
  phone, 
  isOnline = true,
  avatar,
  address,
  workingHours
}: HeaderProps) {
  
  // Check working status and get next available time
  const getWorkingStatus = () => {
    if (!workingHours) return { working: false, nextAvailable: null };
    
    const now = new Date();
    const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    
    const todayHours = workingHours[currentDay];
    
    // Check if currently working
    if (todayHours && !todayHours.closed && 
        currentMinutes >= todayHours.start && currentMinutes <= todayHours.end) {
      return { working: true, nextAvailable: null };
    }
    
    // Find next available time
    const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const dayDisplayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    const currentDayIndex = now.getDay();
    
    // Check if later today is available
    if (todayHours && !todayHours.closed && currentMinutes < todayHours.start) {
      const startHour = Math.floor(todayHours.start / 60);
      const startMin = todayHours.start % 60;
      const timeStr = formatTime(startHour, startMin);
      return { working: false, nextAvailable: `Today at ${timeStr}` };
    }
    
    // Check next 7 days
    for (let i = 1; i <= 7; i++) {
      const nextDayIndex = (currentDayIndex + i) % 7;
      const nextDayName = dayNames[nextDayIndex];
      const nextDayHours = workingHours[nextDayName];
      
      if (nextDayHours && !nextDayHours.closed) {
        const startHour = Math.floor(nextDayHours.start / 60);
        const startMin = nextDayHours.start % 60;
        const timeStr = formatTime(startHour, startMin);
        
        const dayLabel = i === 1 ? 'Tomorrow' : dayDisplayNames[nextDayIndex];
        return { working: false, nextAvailable: `${dayLabel} at ${timeStr}` };
      }
    }
    
    return { working: false, nextAvailable: 'Schedule not available' };
  };
  
  const formatTime = (hour: number, min: number) => {
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    const displayMin = min > 0 ? `:${min.toString().padStart(2, '0')}` : '';
    return `${displayHour}${displayMin} ${period}`;
  };
  
  const { working: currentlyWorking, nextAvailable } = getWorkingStatus();
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
  
  return (
    <div className="relative">
      {/* Liquid Glass Header */}
      <div className="relative bg-white/40 backdrop-blur-2xl border-b border-white/20">
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-glass-primary/10 via-transparent to-glass-secondary/10" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent" />
        </div>
        
        {/* Main content */}
        <div className="relative z-10 px-4 sm:px-6 pt-16 sm:pt-20 pb-12 sm:pb-16">
          {/* Profile section */}
          <div className="flex flex-col items-center space-y-5">
            {/* Avatar with glass effect */}
            <div className="relative">
              {/* Soft glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-glass-primary/20 to-glass-secondary/20 rounded-full blur-2xl opacity-60" />
              
              {/* Avatar container */}
              <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-glass">
                <div className="absolute inset-0 bg-white/30 backdrop-blur-xl" />
                {avatar ? (
                  <img 
                    src={avatar} 
                    alt={name}
                    className="relative w-full h-full object-cover"
                  />
                ) : (
                  <div className="relative w-full h-full flex items-center justify-center text-2xl font-medium text-neutral-700">
                    {initials}
                  </div>
                )}
              </div>
              
              {/* Online indicator - simplified */}
              {isOnline && (
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-glass-tertiary rounded-full border-2 border-white shadow-sm" />
              )}
            </div>
            
            {/* Name and title */}
            <div className="text-center space-y-3">
              <h1 className="text-2xl font-semibold text-neutral-900">
                {name}
              </h1>
              <div className="space-y-2">
                <p className="text-sm text-neutral-600 font-medium">
                  {title}
                </p>
                
                {/* Working status */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full transition-all duration-300">
                  <div className={`w-2 h-2 rounded-full ${
                    currentlyWorking 
                      ? 'bg-green-500 animate-pulse' 
                      : 'bg-main-primary'
                  }`} />
                  <span className={`text-xs font-medium ${
                    currentlyWorking 
                      ? 'text-green-600' 
                      : 'text-main-primaryText/60'
                  }`}>
                    {currentlyWorking ? 'Currently Working' : (nextAvailable || 'Schedule not available')}
                  </span>
                </div>
              </div>
            </div>
            
            {/* Contact info */}
            <div className="space-y-3 w-full max-w-sm">
              {/* Location */}
              {location && (
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-xl rounded-full shadow-glass-sm w-full justify-center">
                  <MapPin size={14} className="text-neutral-500" />
                  <span className="text-sm text-neutral-700">{location}</span>
                </div>
              )}
              
              {/* Phone */}
              {phone && (
                <a 
                  href={`tel:${phone}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-glass-primary/10 backdrop-blur-xl rounded-full shadow-glass-sm border border-glass-primary/20 hover:bg-glass-primary/20 transition-all duration-300 w-full justify-center group"
                >
                  <Phone size={14} className="text-glass-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-glass-primary font-medium">{phone}</span>
                </a>
              )}
              
              {/* Address */}
              {address && (
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-xl rounded-full shadow-glass-sm w-full justify-center">
                  <MapPin size={14} className="text-neutral-500" />
                  <span className="text-sm text-neutral-700 text-center">{address}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}