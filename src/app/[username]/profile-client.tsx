"use client";

import { ApiError, getProfile, MasterProfile } from "@/api";
import {
  Footer,
  Header,
  PageSkeleton,
  PortfolioGrid,
  ServiceCard,
  ServiceData,
  ServiceModal,
  StructuredData,
  WorkingHours,
} from "@/components";
import { trackProfileView, trackContactClick, trackServiceView } from "@/lib/analytics";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ProfileClientProps {
  username: string;
}

export default function ProfileClient({ username }: ProfileClientProps) {
  const [selectedService, setSelectedService] = useState<ServiceData | null>(
    null
  );
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [profileData, setProfileData] = useState<MasterProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch profile data
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile(username);
        setProfileData(data);
        
        // Track profile view after successful data load
        trackProfileView(username, {
          profileType: 'beauty_master',
          hasPortfolio: data.portfolio && data.portfolio.length > 0,
          servicesCount: data.services?.length || 0,
        });
      } catch (err) {
        if (err instanceof ApiError) {
          setError(`Failed to load profile: ${err.message}`);
        } else {
          setError("Failed to fetch profile data");
        }
        console.error("Error fetching profile:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [username]);

  // Transform API data to component format with placeholders
  const getMasterData = () => {
    if (!profileData) return null;

    return {
      name: profileData.name || "Professional",
      title: profileData.description || "Service Provider",
      location: profileData.address || profileData.countryCode || "Location",
      phone: `+${profileData.phoneCode || ""} ${
        profileData.phoneNumber || "Contact for details"
      }`.trim(),
      address: profileData.address || "",
      fullAddress: `${profileData.address || ''} ${profileData.countryCode || ''}`.trim() || 'Location',
      portfolio: profileData.portfolio || [],
      rating: 0,
      reviewCount: 0,
    };
  };

  // Transform working hours from API format (minutes) to display format
  const getFormattedWorkingHours = () => {
    if (!profileData?.workingHours) return [];

    const dayNames = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];
    const dayDisplayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return dayNames.map((day, index) => {
      const dayData = profileData.workingHours[day];

      if (!dayData || dayData.closed) {
        return {
          day: dayDisplayNames[index],
          hours: "Closed",
        };
      }

      // Convert minutes to time format
      const startHour = Math.floor(dayData.start / 60);
      const startMin = dayData.start % 60;
      const endHour = Math.floor(dayData.end / 60);
      const endMin = dayData.end % 60;

      const formatTime = (hour: number, min: number) => {
        const period = hour >= 12 ? "PM" : "AM";
        const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
        const displayMin = min.toString().padStart(2, "0");
        return `${displayHour}:${displayMin} ${period}`;
      };

      return {
        day: dayDisplayNames[index],
        hours: `${formatTime(startHour, startMin)} - ${formatTime(
          endHour,
          endMin
        )}`,
      };
    });
  };

  const masterData = getMasterData();
  const formattedWorkingHours = getFormattedWorkingHours();

  // Show loading state
  if (loading) {
    return <PageSkeleton />;
  }

  // Show error state
  if (error || !masterData) {
    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="theme-color" content="#016A70" />
        </Head>

        <div className="min-h-screen font-inter">
          {/* Background decoration */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-glass-primary/10 rounded-full blur-3xl animate-float" />
            <div
              className="absolute -bottom-40 -left-40 w-96 h-96 bg-glass-secondary/10 rounded-full blur-3xl animate-float"
              style={{ animationDelay: "2s" }}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-glass-primary/5 to-glass-secondary/5 rounded-full blur-3xl" />
          </div>

          <div className="max-w-4xl mx-auto min-h-screen relative bg-gradient-to-b from-white/40 via-white/30 to-white/40 backdrop-blur-sm shadow-2xl">
            {/* Header with same styling */}
            <div className="relative bg-white/40 backdrop-blur-2xl border-b border-white/20">
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-glass-primary/10 via-transparent to-glass-secondary/10" />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent" />
              </div>

              <div className="relative z-10 px-4 sm:px-6 pt-6 pb-12 sm:pb-16">
                <div className="mb-8">
                  <nav className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Link
                        href="/"
                        className="flex items-center space-x-2 text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
                      >
                        <span className="text-sm font-medium">
                          ← Back to Home
                        </span>
                      </Link>

                      <div className="flex items-center space-x-2">
                        <span className="text-neutral-400">/</span>
                        <span className="text-neutral-900 font-medium">
                          @{username}
                        </span>
                      </div>
                    </div>
                  </nav>
                </div>
                <div className="flex flex-col items-center space-y-5">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-glass-primary/20 to-glass-secondary/20 rounded-full blur-2xl opacity-60" />
                    <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-glass">
                      <div className="absolute inset-0 bg-white/30 backdrop-blur-xl" />
                      <div className="relative w-full h-full flex items-center justify-center text-4xl">
                        🌟
                      </div>
                    </div>
                  </div>

                  <div className="text-center space-y-2">
                    <h1 className="text-2xl font-bold text-neutral-900">
                      Profile Not Found
                    </h1>
                    <p className="text-sm text-neutral-600">@{username}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="px-4 sm:px-6 py-6 sm:py-12 space-y-8 sm:space-y-16 relative z-10">
              <section className="space-y-4 sm:space-y-8">
                <div className="bg-white/60 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8 shadow-glass text-center">
                  <div className="text-6xl mb-6">🚀</div>
                  <h2 className="text-xl font-semibold text-neutral-900 mb-4">
                    Great Things Are Coming!
                  </h2>
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    This profile is not available yet, but we&apos;re working on
                    something amazing! Check back soon or explore other profiles
                    on our platform.
                  </p>
                  <div className="space-y-3">
                    <button
                      onClick={() => (window.location.href = "/")}
                      className="w-full bg-gradient-to-r from-glass-primary to-glass-secondary text-white font-medium py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      Explore Other Profiles
                    </button>
                    <button
                      onClick={() => window.location.reload()}
                      className="w-full bg-white/80 backdrop-blur-xl border border-white/40 text-neutral-700 font-medium py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Try Again
                    </button>
                  </div>
                </div>
              </section>

              {/* Footer */}
              <section className="pb-8">
                <Footer />
              </section>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Group services by categories
  const getGroupedServices = () => {
    if (!profileData?.services || profileData.services.length === 0) {
      return [];
    }

    const categories = profileData.serviceCategories || [];
    const services = profileData.services;

    // Group services by category
    const grouped = categories
      .map((category) => {
        const categoryServices = services
          .filter((service) => service.categoryId === category.id)
          .map((service) => ({
            id: service.id,
            name: service.name,
            duration: `${service.duration} min`,
            price: service.variablePrice ? "Price varies" : `$${service.price}`,
            colorClass: "color-blue", // You can map theme colors to colorClass here
            availableSlots: service.onlineBooking ? 5 : 0, // Mock available slots
            description: service.description,
            onlineBooking: service.onlineBooking,
          }));

        return {
          category,
          services: categoryServices,
        };
      })
      .filter((group) => group.services.length > 0);

    return grouped;
  };

  const groupedServices = getGroupedServices();

  const handleServiceSelect = (service: ServiceData) => {
    // Track service click
    if (typeof window !== "undefined" && (window as any).trackServiceClick) {
      (window as any).trackServiceClick(service.name, service.price);
    }
    setSelectedService(service);
    setIsServiceModalOpen(true);
  };

  const handleCall = () => {
    // Track call click
    if (typeof window !== "undefined" && (window as any).trackCall) {
      (window as any).trackCall();
    }
    if (typeof window !== "undefined" && (window as any).trackContact) {
      (window as any).trackContact("phone");
    }
    window.location.href = `tel:${masterData.phone}`;
  };

  const handleMessage = () => {
    // Track message click
    if (typeof window !== "undefined" && (window as any).trackContact) {
      (window as any).trackContact("message");
    }
    // For now, redirect to call - can be updated to SMS or chat later
    window.location.href = `sms:${masterData.phone}`;
  };

  const handleBookService = () => {
    // Track booking click
    if (typeof window !== "undefined" && (window as any).trackBooking) {
      (window as any).trackBooking();
    }
    // Show first service modal as default booking action
    const firstService = groupedServices[0]?.services[0];
    if (firstService) {
      handleServiceSelect({
        id: firstService.id,
        name: firstService.name,
        duration: firstService.duration,
        price: firstService.price,
        colorClass: firstService.colorClass,
      });
    }
  };

  const handlePortfolioImageClick = (index: number) => {
    console.log("Portfolio image clicked:", index);
  };


  return (
    <>
      <Head>
        <link rel="canonical" href={`https://daysync.pro/${username}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#016A70" />
      </Head>

      <StructuredData
        masterData={masterData}
        services={groupedServices.flatMap((group) => group.services)}
        workingHours={formattedWorkingHours}
        profileData={profileData}
      />

      <div className="min-h-screen font-inter">
        {/* Background decoration */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-glass-primary/10 rounded-full blur-3xl animate-float" />
          <div
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-glass-secondary/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-glass-primary/5 to-glass-secondary/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto min-h-screen relative bg-gradient-to-b from-white/40 via-white/30 to-white/40 backdrop-blur-sm shadow-2xl">
          {/* Header */}
          <Header
            name={masterData.name}
            title={masterData.title}
            location={masterData.fullAddress}
            phone={masterData.phone}
            address={masterData.address}
            workingHours={profileData?.workingHours}
            isOnline={false}
            avatar={profileData?.avatar || ""}
            username={username}
          />

          {/* Content */}
          <div className="px-4 sm:px-6 py-6 sm:py-12 space-y-8 sm:space-y-16 relative z-10">
            {/* Services Section */}
            <section id="services" className="space-y-4 sm:space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-neutral-900 mb-2">
                  Services
                </h2>
                <p className="text-sm text-neutral-600">
                  Select a service to book your appointment
                </p>
              </div>

              <div className="space-y-6">
                {groupedServices.length > 0 ? (
                  groupedServices.map((group) => (
                    <div key={group.category.id} className="space-y-3">
                      {/* Category Header */}
                      <div className="flex items-center space-x-3">
                        <div
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: group.category.theme }}
                        />
                        <h3 className="text-lg font-medium text-neutral-900">
                          {group.category.name}
                        </h3>
                      </div>

                      {/* Services in this category */}
                      <div className="space-y-3 ml-7">
                        {group.services.map((service: any) => (
                          <ServiceCard
                            key={service.id}
                            id={service.id}
                            name={service.name}
                            duration={service.duration}
                            price={service.price}
                            oldPrice={service.oldPrice}
                            colorClass={service.colorClass}
                            availableSlots={service.availableSlots || 0}
                            onSelect={handleServiceSelect}
                          />
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="bg-white/60 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8 shadow-glass text-center">
                    <div className="text-4xl mb-4">🚀</div>
                    <h3 className="text-base font-medium text-neutral-900 mb-2">
                      No Services Available
                    </h3>
                    <p className="text-sm text-neutral-600">
                      Services are currently unavailable.
                    </p>
                  </div>
                )}
              </div>
            </section>

            {/* Portfolio Section */}
            <section id="portfolio" className="space-y-4 sm:space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-neutral-900 mb-2">
                  Portfolio
                </h2>
                <p className="text-sm text-neutral-600">
                  Browse our recent work
                </p>
              </div>
              {profileData?.portfolio && profileData.portfolio.length > 0 ? (
                <PortfolioGrid
                  images={profileData.portfolio}
                  onImageClick={handlePortfolioImageClick}
                />
              ) : (
                <div className="bg-white/60 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8 shadow-glass text-center">
                  <div className="text-4xl mb-4">🎨</div>
                  <h3 className="text-base font-medium text-neutral-900 mb-2">
                    Portfolio Not Available
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Portfolio gallery is currently empty.
                  </p>
                </div>
              )}
            </section>

            {/* Working Hours Section */}
            <section id="hours" className="space-y-4 sm:space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-neutral-900 mb-2">
                  Working Hours
                </h2>
                <p className="text-sm text-neutral-600">
                  Our availability throughout the week
                </p>
              </div>
              {formattedWorkingHours.length > 0 ? (
                <WorkingHours hours={formattedWorkingHours} />
              ) : (
                <div className="bg-white/60 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-glass text-center">
                  <div className="text-4xl mb-4">⏰</div>
                  <h3 className="text-base font-medium text-neutral-900 mb-2">
                    Hours Available on Request
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Contact us to schedule your appointment at a convenient
                    time.
                  </p>
                </div>
              )}
            </section>

            {/* Footer */}
            <section className="pb-8">
              <Footer />
            </section>
          </div>

          {/* Service Selection Modal */}
          <ServiceModal
            isOpen={isServiceModalOpen}
            onClose={() => setIsServiceModalOpen(false)}
            service={selectedService}
            onCall={handleCall}
          />
        </div>
      </div>
    </>
  );
}
