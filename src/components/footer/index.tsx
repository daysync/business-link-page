import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <div className="bg-white/60 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-glass">
      <div className="text-center space-y-4">
        {/* Logo */}
        <div className="flex items-center justify-center">
          <Image
            src="/daysync-logo.svg"
            alt="DaySync"
            width={120}
            height={24}
            className="h-6 w-auto"
          />
        </div>
        
        {/* Simple message with link */}
        <p className="text-sm text-neutral-600 leading-relaxed">
          Profile created with{" "}
          <Link 
            href="https://daysync.io" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-glass-primary font-semibold hover:text-glass-secondary transition-colors underline-offset-2 hover:underline"
          >
            DaySync
          </Link>
        </p>
      </div>
    </div>
  );
}