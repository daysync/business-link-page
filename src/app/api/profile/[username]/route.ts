import { NextRequest, NextResponse } from "next/server";

// Updated to match your actual API response structure
interface Address {
  id: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  countryCode: string;
  postalCode?: string;
  profileId: string;
  state?: string;
}

interface MasterProfile {
  id: string;
  username: string;
  name: string;
  avatar?: string;
  countryCode?: string;
  description?: string;
  phoneCode?: string;
  phoneNumber?: string;
  portfolio?: string[];
  socials?: any;
  workingHours?: any;
  services?: any[];
  serviceCategories?: any[];
  address?: Address;
  createdAt?: string;
  updatedAt?: string;
  // Legacy fields for backward compatibility
  title?: string;
  location?: string;
  phone?: string;
  type?: string;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ username: string }> }
) {
  try {
    const { username } = await params;

    console.log(username);

    if (!username) {
      return NextResponse.json(
        { error: "Username is required" },
        { status: 400 }
      );
    }

    // Get API configuration from environment variables
    const API_BASE_URL = process.env.DAYSYNC_API_BASE_URL;

    console.log(API_BASE_URL, " - API_BASE_URL");
    if (!API_BASE_URL) {
      console.error("DAYSYNC_API_BASE_URL environment variable is not set");
      return NextResponse.json(
        { error: "API configuration error" },
        { status: 500 }
      );
    }

    console.log(`${API_BASE_URL}/public/${username}`);

    // Public profile endpoints don't require authentication
    const response = await fetch(`${API_BASE_URL}/public/${username}`, {
      headers: {
        "Content-Type": "application/json",
      },
      // Add caching
      // next: { revalidate: 300 }, // Cache for 5 minutes
    });

    if (!response.ok) {
      if (response.status === 404) {
        return NextResponse.json(
          { error: "Profile not found" },
          { status: 404 }
        );
      }

      throw new Error(`API responded with status: ${response.status}`);
    }

    const apiResponse = await response.json();

    console.log(JSON.stringify(apiResponse));

    // Handle wrapped API response structure
    let profileData: MasterProfile;
    if (apiResponse.success && apiResponse.data) {
      profileData = apiResponse.data;
    } else {
      profileData = apiResponse; // Fallback for direct data structure
    }

    // Validate and sanitize response data
    if (!profileData.username || !profileData.name) {
      throw new Error("Invalid profile data received");
    }

    // Transform data to match frontend expectations
    const transformedData = {
      ...profileData,
      // Map API fields to expected frontend fields
      phone: profileData.phoneNumber
        ? `+${profileData.phoneCode}${profileData.phoneNumber}`
        : profileData.phone,
      title: profileData.title || "Beauty Professional", // Default title
      location: profileData.address
        ? `${profileData.address.city}, ${profileData.address.countryCode}`
        : `${profileData.countryCode || ""}`, // Use city, country or just country as fallback
      address: profileData.address
        ? `${profileData.address.addressLine1}${
            profileData.address.addressLine2
              ? ", " + profileData.address.addressLine2
              : ""
          }, ${profileData.address.city}`
        : `${profileData.countryCode || ""}`, // Format full address or use country as fallback
    };

    return NextResponse.json(transformedData);
  } catch (error) {
    console.error("Profile fetch error:", error);

    // Return appropriate error response
    if (error instanceof Error) {
      if (
        error.message.includes("404") ||
        error.message.includes("not found")
      ) {
        return NextResponse.json(
          { error: "Profile not found" },
          { status: 404 }
        );
      }
    }

    return NextResponse.json(
      { error: "Failed to fetch profile" },
      { status: 500 }
    );
  }
}

// Note: Profile updates are not implemented in this project.
// This project focuses only on viewing profiles and tracking analytics.
// Profile management should be handled by separate admin applications.
