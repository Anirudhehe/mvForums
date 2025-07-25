# MVForums

MVForums is a Next.js application built for college clubs of MVIT to write blogs and keep students of their clubs informed and intrigued. Each club gets its own subdomain, making it easy to manage and share updates, articles, and announcements.

## Features

- Multi-tenant forums via subdomains
- Organization-based blog posts
- Authentication with Clerk
- Database access using Drizzle ORM

## Getting Started

### Prerequisites

- Node.js
- pnpm (or npm/yarn)
- Docker (optional, for development)

### Installation

```sh
pnpm install
```

### Development

Start the development server:

```sh
pnpm dev
```

### Environment Variables

Copy `.env.example` to `.env` and configure your Clerk and database credentials.

### Database

Configure your database in `drizzle.config.ts` and run migrations as needed.

### Deployment

See [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for details.

## Project Structure

- `app/` - Application pages and components
- `components/` - Reusable UI components
- `db/` - Database schema and access
- `lib/` - Utility libraries
- `public/` - Static assets
