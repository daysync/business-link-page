import { NextRequest, NextResponse } from "next/server";

interface AnalyticsData {
  username: string;
  event: "page_view" | "contact_click" | "service_view";
  metadata?: {
    referrer?: string;
    userAgent?: string;
    timestamp?: number;
    serviceId?: string;
    contactType?: "call" | "message";
  };
}

export async function POST(request: NextRequest) {
  try {
    const body: AnalyticsData = await request.json();
    const { username, event, metadata = {} } = body;

    // Validate required fields
    if (!username || !event) {
      return NextResponse.json(
        { error: "Username and event are required" },
        { status: 400 }
      );
    }

    // Get visitor information
    const visitorData = {
      ip:
        (request as any).ip ||
        request.headers.get("x-forwarded-for")?.split(",")[0] ||
        "unknown",
      userAgent:
        request.headers.get("user-agent") || metadata.userAgent || "unknown",
      referrer: request.headers.get("referer") || metadata.referrer || "direct",
      timestamp: metadata.timestamp || Date.now(),
    };

    // Create analytics payload
    const analyticsPayload = {
      username,
      event,
      visitor_ip: visitorData.ip,
      user_agent: visitorData.userAgent,
      referrer: visitorData.referrer,
      timestamp: new Date(visitorData.timestamp).toISOString(),
      metadata: {
        ...metadata,
        country: (request as any).geo?.country || "unknown",
        city: (request as any).geo?.city || "unknown",
      },
    };

    // Send to your backend/database
    const API_BASE_URL = "https://daysync-business-prod.onrender.com/v1";
    // process.env.DAYSYNC_API_BASE_URL ||

    if (API_BASE_URL) {
      try {
        // Analytics tracking can be public (no auth needed)
        const response = await fetch(`${API_BASE_URL}/public/analytics/track`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(analyticsPayload),
        });

        if (!response.ok) {
          console.error(
            "Failed to send analytics to backend:",
            response.status
          );
        }
      } catch (error) {
        console.error("Analytics backend error:", error);
        // Don't fail the request if analytics fails
      }
    } else {
      console.warn(
        "DAYSYNC_API_BASE_URL not configured - analytics data logged locally only"
      );
    }

    // For now, log the data (replace with actual API call)
    console.log("Analytics tracked:", analyticsPayload);

    return NextResponse.json({
      success: true,
      message: "Analytics tracked successfully",
    });
  } catch (error) {
    console.error("Analytics tracking error:", error);
    return NextResponse.json(
      { error: "Failed to track analytics" },
      { status: 500 }
    );
  }
}
