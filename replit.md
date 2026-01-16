# Lumière Beach Resort - Hotel Website

## Overview

A luxury beach resort website for "Lumière" located in Kabalana, Ahangama, Sri Lanka. This is a full-stack web application featuring a React frontend with a sophisticated, Shangri-La inspired design aesthetic. The site showcases hotel rooms, dining options, rooftop amenities, experiences/events, a boutique, and contact functionality. It includes a booking system, inquiry forms, an AI chatbot for guest assistance, and a simple admin portal for managing submissions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS v4 with CSS variables for theming
- **UI Components**: shadcn/ui component library (New York style)
- **Animations**: Framer Motion for smooth transitions
- **Fonts**: Cormorant Garamond (serif headings) + Montserrat (sans body text)
- **Design Theme**: Light, airy, sophisticated luxury hotel aesthetic with muted gold accents

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript (ES Modules)
- **API Design**: RESTful endpoints under `/api/` prefix
- **Build Tool**: esbuild for server bundling, Vite for client

### Data Storage
- **Database**: PostgreSQL via Drizzle ORM
- **Schema Location**: `shared/schema.ts` - shared between client and server
- **Validation**: Zod schemas generated from Drizzle schemas via drizzle-zod
- **Tables**: 
  - `users` - basic authentication (username/password)
  - `inquiries` - contact form submissions
  - `bookings` - room reservation requests

### Key Design Patterns
- **Monorepo Structure**: Client (`client/`), server (`server/`), and shared code (`shared/`)
- **Path Aliases**: `@/` for client source, `@shared/` for shared modules
- **Type Safety**: Full TypeScript with strict mode, shared types between frontend and backend
- **Storage Abstraction**: `IStorage` interface in `server/storage.ts` allows swapping implementations

### API Endpoints
- `POST /api/inquiries` - Submit contact form
- `GET /api/inquiries` - Retrieve all inquiries (admin)
- `POST /api/bookings` - Submit booking request
- `GET /api/bookings` - Retrieve all bookings (admin)

### Pages
- Home, Rooms (Villas & Suites), Dining, Rooftop, Events/Experiences, Boutique, Contact, Admin

## External Dependencies

### Database
- PostgreSQL (connection via `DATABASE_URL` environment variable)
- Drizzle ORM for type-safe database operations
- `drizzle-kit` for schema migrations (`npm run db:push`)

### UI/UX Libraries
- Radix UI primitives (extensive use for accessible components)
- Lucide React for icons
- Embla Carousel for image carousels
- Vaul for drawer components
- cmdk for command palette

### Build & Development
- Vite for frontend development and bundling
- esbuild for server bundling (production)
- Custom Vite plugins for Replit integration (dev banner, cartographer, meta images)

### Third-Party Services (Placeholder)
- WhatsApp integration button (configured with placeholder number)
- AI Chatbot (currently mock responses, ready for real AI integration)