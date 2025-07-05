'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowLeftIcon, HomeIcon } from '@heroicons/react/24/outline';

interface NavigationProps {
  showBackButton?: boolean;
  customBackUrl?: string;
  title?: string;
  rightContent?: React.ReactNode;
}

export default function Navigation({ 
  showBackButton = false, 
  customBackUrl, 
  title,
  rightContent 
}: NavigationProps) {
  const pathname = usePathname();
  
  const getBackUrl = () => {
    if (customBackUrl) return customBackUrl;
    if (pathname.startsWith('/')) return '/';
    return '/';
  };

  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        {showBackButton ? (
          <Link 
            href={getBackUrl()}
            className="flex items-center space-x-2 text-main-primaryText/70 hover:text-main-primaryText transition-colors duration-200"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            <span className="text-sm font-medium">Back</span>
          </Link>
        ) : (
          <Link 
            href="/"
            className="flex items-center space-x-2 text-main-primaryText/70 hover:text-main-primaryText transition-colors duration-200"
          >
            <HomeIcon className="w-5 h-5" />
            <span className="text-sm font-medium">Home</span>
          </Link>
        )}
        
        {title && (
          <div className="flex items-center space-x-2">
            <span className="text-main-primaryText/40">/</span>
            <span className="text-main-primaryText/90 font-medium">{title}</span>
          </div>
        )}
      </div>

      <div className="flex items-center space-x-4">
        {rightContent}
      </div>
    </nav>
  );
}