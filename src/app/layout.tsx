import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DaySync - Professional Service Provider Platform",
  description:
    "Connect with professional service providers. View portfolios, check availability, and book appointments directly through DaySync.",
  keywords:
    "service provider, professional services, appointment booking, daysync, portfolio",
  authors: [{ name: "DaySync" }],
  creator: "DaySync",
  publisher: "DaySync",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://daysync.pro"),
  openGraph: {
    title: "DaySync - Professional Service Provider Platform",
    description:
      "Connect with professional service providers. View portfolios and book appointments directly.",
    siteName: "DaySync",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DaySync - Professional Service Provider Platform",
    description:
      "Connect with professional service providers. View portfolios and book appointments directly.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#6366f1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
