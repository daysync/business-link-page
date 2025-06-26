interface StructuredDataProps {
  masterData: {
    name: string;
    title: string;
    location: string;
    phone: string;
    rating: number;
    reviewCount: number;
  };
  services: Array<{
    id: string;
    name: string;
    duration: string;
    price: string;
  }>;
  workingHours?: Array<{
    day: string;
    hours: string;
  }>;
  profileData?: {
    id: string;
    username: string;
    countryCode: string;
    portfolio: string[];
  } | null;
}

export function StructuredData({ masterData, services, workingHours, profileData }: StructuredDataProps) {
  const profileUrl = profileData ? `https://daysync.com/masters/${profileData.username}` : "https://daysync.com/masters/profile";
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": profileUrl,
    "name": `${masterData.name} - ${masterData.title}`,
    "description": `Professional service provider ${masterData.name} located in ${masterData.location}. View portfolio and book appointments directly.`,
    "url": profileUrl,
    "telephone": masterData.phone,
    "priceRange": "$$",
    "image": profileData?.portfolio || [
      "https://daysync.com/images/profile-default.jpg"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main Street",
      "addressLocality": "Downtown",
      "addressRegion": "CA",
      "postalCode": "90210",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 34.0522,
      "longitude": -118.2437
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": masterData.rating,
      "reviewCount": masterData.reviewCount,
      "bestRating": "5",
      "worstRating": "1"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday"],
        "opens": "09:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Thursday", "Friday"],
        "opens": "09:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "18:00"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Beauty Services",
      "itemListElement": services.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.name,
          "description": `Professional ${service.name.toLowerCase()} service by ${masterData.name}`,
          "serviceType": "Beauty Service"
        },
        "price": service.price.replace('$', '').replace('Free', '0'),
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }))
    },
    "employee": {
      "@type": "Person",
      "name": masterData.name,
      "jobTitle": masterData.title,
      "telephone": masterData.phone,
      "url": profileUrl,
      "worksFor": {
        "@type": "Organization",
        "name": "DaySync",
        "url": "https://daysync.com"
      }
    },
    "paymentAccepted": "Cash, Credit Card, Debit Card",
    "currenciesAccepted": "USD",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 34.0522,
        "longitude": -118.2437
      },
      "geoRadius": 15000
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 34.0522,
        "longitude": -118.2437
      },
      "geoRadius": 15000
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}