# DaySync Business Link Page

A Next.js application for displaying professional service provider profiles with clean, Linktree-style design and analytics tracking.

## Project Scope

This project is focused on two main functions:
1. **Profile Viewing** - Display beautiful, responsive profile pages for beauty masters and service providers
2. **Analytics Tracking** - Track profile views and user interactions for business insights

**What this project does:**
- ✅ Display professional profiles at `daysync.pro/username`
- ✅ Track page views, contact clicks, and user interactions
- ✅ Responsive, mobile-first design with glass morphism effects
- ✅ SEO optimized with structured data

**What this project does NOT do:**
- ❌ Profile management/editing (use separate admin dashboard)
- ❌ Display private analytics data (use separate admin tools)
- ❌ User authentication (all endpoints are public)

## Environment Setup

Copy `.env.example` to `.env.local` and configure:

### Required Variables

```bash
# Your main DaySync API server URL
DAYSYNC_API_BASE_URL=https://api.daysync.pro

# Default username for development/testing
NEXT_PUBLIC_MASTER_USERNAME=john-doe
```

### Optional Variables

```bash
# Disable analytics tracking if needed
ENABLE_ANALYTICS=false
```

## API Endpoints

This project provides these public endpoints:

- `GET /api/profile/[username]` - Fetch public profile data
- `POST /api/analytics/track` - Track user interactions

Both endpoints require no authentication and work with your backend's public APIs.

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to see the landing page.
Visit [http://localhost:3000/your-username](http://localhost:3000/your-username) to see a profile page.

## Backend API Requirements

Your backend should provide these public endpoints:

```bash
# Profile data (no auth required)
GET /public/profiles/{username}

# Analytics tracking (no auth required)  
POST /public/analytics/track
```

## Deployment

Deploy to Vercel, Netlify, or any Next.js hosting platform. Make sure to set your environment variables in the hosting platform's settings.

## Architecture

- **Frontend**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom glass morphism design
- **Analytics**: Client-side tracking with server-side forwarding
- **Caching**: Built-in Next.js caching (5-minute profile cache)
- **No Database**: All data comes from your existing DaySync API
