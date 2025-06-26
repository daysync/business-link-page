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
import Head from "next/head";
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
      location: profileData.countryCode || "Location",
      phone: `+${profileData.phoneCode || ""} ${
        profileData.phoneNumber || "Contact for details"
      }`.trim(),
      address: profileData.address || "",
      portfolio: profileData.portfolio || [],
      rating: 0,
      reviewCount: 0,
    };
  };

  // Transform working hours from API format (minutes) to display format
  const getFormattedWorkingHours = () => {
    if (!profileData?.workingHours) return [];

    const dayNames = [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
    ];
    const dayDisplayNames = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    return dayNames.map((day, index) => {
      const dayData = profileData.workingHours[day];

      if (dayData.closed) {
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
      <div className="min-h-screen bg-daysync-background font-inter flex items-center justify-center">
        <div className="max-w-lg mx-auto bg-white min-h-screen relative flex items-center justify-center">
          <div className="text-center px-6">
            <div className="text-6xl mb-4">😞</div>
            <h2 className="text-xl font-semibold text-daysync-primary-text mb-2">
              Profile Not Found
            </h2>
            <p className="text-daysync-secondary-text mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-daysync-primary text-white px-6 py-2 rounded-lg hover:bg-daysync-secondary transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Get services from API or show placeholder
  const getServices = () => {
    if (profileData?.services && profileData.services.length > 0) {
      return profileData.services;
    }

    // Placeholder services when none available
    return [
      {
        id: "service-1",
        name: "Service Available",
        duration: "Contact for details",
        price: "Contact for pricing",
        colorClass: "color-blue",
        availableSlots: 0,
      },
    ];
  };

  const services = getServices();

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
    if (services.length > 0) {
      handleServiceSelect({
        id: services[0].id,
        name: services[0].name,
        duration: services[0].duration,
        price: services[0].price,
        colorClass: services[0].colorClass,
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
        services={services}
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

        <div className="max-w-lg mx-auto min-h-screen relative bg-gradient-to-b from-white/40 via-white/30 to-white/40 backdrop-blur-sm shadow-2xl">
          {/* Header */}
          <Header
            name={masterData.name}
            title={masterData.title}
            location={masterData.location}
            phone={masterData.phone}
            address={masterData.address}
            workingHours={profileData?.workingHours}
            isOnline={true}
            avatar={profileData?.avatar}
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

              <div className="space-y-3">
                {services.length > 0 ? (
                  services.map((service: any) => (
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
                  ))
                ) : (
                  <div className="bg-white/60 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8 shadow-glass text-center">
                    <div className="text-4xl mb-4">🚀</div>
                    <h3 className="text-base font-medium text-neutral-900 mb-2">
                      No Services Available
                    </h3>
                    <p className="text-sm text-neutral-600">
                      Services are currently unavailable. Please contact us directly for assistance.
                    </p>
                  </div>
                )}
              </div>
            </section>

            {/* Portfolio Section */}
            <section className="space-y-4 sm:space-y-8">
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
                    Portfolio gallery is currently empty. Contact us to see examples of our work.
                  </p>
                </div>
              )}
            </section>

            {/* Working Hours Section */}
            <section className="space-y-4 sm:space-y-8">
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