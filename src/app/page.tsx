"use client";

import { DownloadButtons } from "@/components";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-main-background/30 to-white font-inter-tight overflow-hidden">
      {/* Enhanced background with hero pattern */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/hero-bg.svg')] bg-cover bg-center opacity-5" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-main-primary/8 rounded-full blur-3xl animate-float" />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-main-secondary/8 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-20 right-20 w-32 h-32 bg-main-accent/15 rounded-full blur-2xl animate-pulse" />
        <div
          className="absolute bottom-20 left-20 w-24 h-24 bg-main-primary/20 rounded-full blur-xl animate-bounce"
          style={{ animationDuration: "3s" }}
        />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header with logo */}
        <header className="w-full py-8">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center">
              <Image
                src="/daysync-logo.svg"
                alt="DaySync"
                width={200}
                height={40}
                className="h-10 w-auto mx-auto transition-transform hover:scale-105 duration-300"
              />
            </div>
          </div>
        </header>

        {/* Main content - centered and spacious */}
        <main className="flex-1 flex items-center justify-center py-12">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
            {/* Hero section with better spacing */}
            <div className="text-center space-y-8 mb-16">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-main-primaryText leading-tight tracking-tight">
                  Discover
                  <span className="block text-transparent bg-gradient-to-r from-main-primary to-main-secondary bg-clip-text">
                    Beauty Experts
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-main-primaryText/70 leading-relaxed max-w-2xl mx-auto">
                  Find and connect with talented beauty professionals in your
                  area
                </p>
              </div>
            </div>

            {/* How it works section */}
            <div className="space-y-8 mb-16">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-main-primaryText mb-4">
                  How to find a professional
                </h2>
                <p className="text-lg text-main-primaryText/60">
                  Simply add their username to our URL
                </p>
              </div>

              <div className="bg-white/95 backdrop-blur-xl border border-main-primary/20 rounded-3xl p-8 shadow-2xl max-w-3xl mx-auto relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-main-primary to-main-secondary" />
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center space-x-2 text-sm text-main-primaryText/50 font-medium">
                    <span>💡</span>
                    <span>Example URL</span>
                  </div>
                  <code className="block text-main-primary font-mono text-2xl md:text-3xl font-bold">
                    daysync.pro/
                    <span className="text-main-secondary animate-pulse">
                      sarah-beauty
                    </span>
                  </code>
                  <p className="text-sm text-main-primaryText/50 mt-2">
                    Replace with any professional&apos;s username
                  </p>
                </div>
              </div>
            </div>

            {/* Professional CTA section */}
            <div className="space-y-12">
              <div className="bg-gradient-to-br from-main-primary/5 to-main-accent/5 rounded-3xl p-12 border border-main-primary/10">
                <div className="text-center space-y-8">
                  <div className="space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-main-primary/10 rounded-full mb-4">
                      <Image
                        src="/icon.svg"
                        alt="DaySync Icon"
                        width={32}
                        height={32}
                        className="w-16 h-16"
                      />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-main-primaryText">
                      Beauty Professional?
                    </h2>
                    <p className="text-lg text-main-primaryText/70 max-w-2xl mx-auto leading-relaxed">
                      Join thousands of beauty experts using DaySync to manage
                      their business and connect with clients
                    </p>
                  </div>

                  {/* Download section with better styling */}
                  <div className="space-y-6">
                    <p className="text-main-primaryText/60 font-medium">
                      Download the app to get started
                    </p>
                    <DownloadButtons />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Simple footer */}
        <footer className="py-8 border-t border-main-primaryText/5">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <p className="text-sm text-main-primaryText/50">
              Powered by{" "}
              <span className="font-semibold text-main-primary hover:text-main-accent transition-colors">
                DaySync
              </span>{" "}
              - Professional beauty management platform
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
