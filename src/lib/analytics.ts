// Analytics utility functions for tracking user interactions

interface TrackEventParams {
  username: string;
  event: 'page_view' | 'contact_click' | 'service_view';
  metadata?: {
    referrer?: string;
    serviceId?: string;
    contactType?: 'call' | 'message';
    [key: string]: any;
  };
}

// Analytics library focused on tracking events only
// Stats retrieval is handled by separate admin applications

/**
 * Track user events and send to analytics API
 */
export async function trackEvent({ username, event, metadata = {} }: TrackEventParams): Promise<boolean> {
  try {
    const response = await fetch('/api/analytics/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        event,
        metadata: {
          ...metadata,
          timestamp: Date.now(),
          userAgent: navigator.userAgent,
          referrer: document.referrer,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`Analytics tracking failed: ${response.status}`);
    }

    return true;
  } catch (error) {
    console.error('Failed to track event:', error);
    return false;
  }
}

/**
 * Track profile page view
 */
export function trackProfileView(username: string, metadata?: Record<string, any>) {
  return trackEvent({
    username,
    event: 'page_view',
    metadata,
  });
}

/**
 * Track contact button clicks
 */
export function trackContactClick(username: string, contactType: 'call' | 'message', metadata?: Record<string, any>) {
  return trackEvent({
    username,
    event: 'contact_click',
    metadata: {
      ...metadata,
      contactType,
    },
  });
}

/**
 * Track service/portfolio item views
 */
export function trackServiceView(username: string, serviceId: string, metadata?: Record<string, any>) {
  return trackEvent({
    username,
    event: 'service_view',
    metadata: {
      ...metadata,
      serviceId,
    },
  });
}

/**
 * Note: Stats retrieval functions removed from this library.
 * This project focuses only on profile viewing and analytics tracking.
 * 
 * For accessing analytics data, use a separate admin dashboard
 * that connects directly to your backend analytics APIs.
 */

/**
 * Debounced tracking to avoid excessive API calls
 */
const trackingQueue = new Map<string, NodeJS.Timeout>();

export function trackEventDebounced(params: TrackEventParams, delay: number = 1000) {
  const key = `${params.username}-${params.event}`;
  
  // Clear existing timeout
  if (trackingQueue.has(key)) {
    clearTimeout(trackingQueue.get(key)!);
  }
  
  // Set new timeout
  const timeoutId = setTimeout(() => {
    trackEvent(params);
    trackingQueue.delete(key);
  }, delay);
  
  trackingQueue.set(key, timeoutId);
}