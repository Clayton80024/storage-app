# Database Setup Instructions

## Environment Variables Setup

Create a `.env.local` file in the root directory with the following variables:

```bash
# Database Configuration
DATABASE_URL=postgresql://neondb_owner:npg_VJEIj5y6Fqnv@ep-noisy-frost-aeiwzbfo-pooler.c-2.us-east-2.aws.neon.tech/neondb?sslmode=require
DATABASE_URL_UNPOOLED=postgresql://neondb_owner:npg_VJEIj5y6Fqnv@ep-noisy-frost-aeiwzbfo.c-2.us-east-2.aws.neon.tech/neondb?sslmode=require

# PostgreSQL Connection Parameters
PGHOST=ep-noisy-frost-aeiwzbfo-pooler.c-2.us-east-2.aws.neon.tech
PGHOST_UNPOOLED=ep-noisy-frost-aeiwzbfo.c-2.us-east-2.aws.neon.tech
PGUSER=neondb_owner
PGDATABASE=neondb
PGPASSWORD=npg_VJEIj5y6Fqnv

# Vercel Postgres Templates
POSTGRES_URL=postgresql://neondb_owner:npg_VJEIj5y6Fqnv@ep-noisy-frost-aeiwzbfo-pooler.c-2.us-east-2.aws.neon.tech/neondb?sslmode=require
POSTGRES_URL_NON_POOLING=postgresql://neondb_owner:npg_VJEIj5y6Fqnv@ep-noisy-frost-aeiwzbfo.c-2.us-east-2.aws.neon.tech/neondb?sslmode=require
POSTGRES_USER=neondb_owner
POSTGRES_HOST=ep-noisy-frost-aeiwzbfo-pooler.c-2.us-east-2.aws.neon.tech
POSTGRES_PASSWORD=npg_VJEIj5y6Fqnv
POSTGRES_DATABASE=neondb
POSTGRES_URL_NO_SSL=postgresql://neondb_owner:npg_VJEIj5y6Fqnv@ep-noisy-frost-aeiwzbfo-pooler.c-2.us-east-2.aws.neon.tech/neondb
POSTGRES_PRISMA_URL=postgresql://neondb_owner:npg_VJEIj5y6Fqnv@ep-noisy-frost-aeiwzbfo-pooler.c-2.us-east-2.aws.neon.tech/neondb?connect_timeout=15&sslmode=require

# Neon Auth environment variables for Next.js
NEXT_PUBLIC_STACK_PROJECT_ID=3bed4b15-d4ca-4234-b97f-84994fd47d83
NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY=pck_g8hpbzya5g73qtt6s1yyd2m393x1egbnyd6z61kqg23pg
STACK_SECRET_SERVER_KEY=ssk_95g59f6w98yc4etnx4trpyme4h4mjnq2hzzfzgnd4367g

# Clerk Authentication (add your actual keys)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
CLERK_SECRET_KEY=your_clerk_secret_key_here
```

## Database Commands

### Generate Prisma Client
```bash
npx prisma generate
```

### Push Schema to Database
```bash
npx prisma db push
```

### View Database in Prisma Studio
```bash
npx prisma studio
```

### Reset Database (if needed)
```bash
npx prisma db push --force-reset
```

## Usage in Your App

```typescript
import { prisma } from '@/lib/prisma'

// Example: Create a user
const user = await prisma.user.create({
  data: {
    clerkId: 'user_123',
    email: 'user@example.com',
    name: 'John Doe'
  }
})

// Example: Get user with files
const userWithFiles = await prisma.user.findUnique({
  where: { clerkId: 'user_123' },
  include: { files: true }
})
```
