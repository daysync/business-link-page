import Image from "next/image";
import Link from "next/link";

export function DownloadButtons() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <Link
        href="https://apps.apple.com/app/daysync-daily-planner/id6473828297"
        target="_blank"
        rel="noopener noreferrer"
        className="group transition-all duration-300 hover:-translate-y-1 hover:scale-105"
      >
        <div className="relative overflow-hidden rounded-xl">
          <Image
            src="/app-store.svg"
            alt="Download on the App Store"
            width={180}
            height={54}
            className="h-[54px] w-auto transition-all duration-300 group-hover:brightness-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-main-primary/10 to-main-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>
      
      <Link
        href="https://play.google.com/store/apps/details?id=io.daysync.business"
        target="_blank"
        rel="noopener noreferrer"
        className="group transition-all duration-300 hover:-translate-y-1 hover:scale-105"
      >
        <div className="relative overflow-hidden rounded-xl">
          <Image
            src="/play-store.svg"
            alt="Get it on Google Play"
            width={201}
            height={60}
            className="h-[60px] w-auto transition-all duration-300 group-hover:brightness-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-main-primary/10 to-main-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>
    </div>
  );
}