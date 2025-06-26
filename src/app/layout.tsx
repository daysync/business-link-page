import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'John Doe - Professional Service Provider | DaySync',
  description: 'Book your appointment with John Doe, a professional service provider. View portfolio, check availability, and book directly through WhatsApp or phone.',
  keywords: 'service provider, professional services, appointment booking, John Doe, DaySync',
  authors: [{ name: 'DaySync' }],
  creator: 'DaySync',
  publisher: 'DaySync',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://daysync.com'),
  alternates: {
    canonical: '/masters/john-doe',
  },
  openGraph: {
    title: 'John Doe - Professional Service Provider',
    description: 'Book your appointment with John Doe. View portfolio and book directly through our platform.',
    url: '/masters/john-doe',
    siteName: 'DaySync',
    images: [
      {
        url: '/og-john-doe.jpg',
        width: 1200,
        height: 630,
        alt: 'John Doe - Professional Service Provider',
      },
    ],
    locale: 'en_US',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'John Doe - Professional Service Provider',
    description: 'Book your appointment with John Doe. Professional service provider with portfolio.',
    images: ['/og-john-doe.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
