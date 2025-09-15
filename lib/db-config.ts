// Database configuration for Neon PostgreSQL
// This file shows the environment variables needed for your Neon database

export const dbConfig = {
  // Primary database URL (recommended for most uses)
  databaseUrl: process.env.DATABASE_URL,
  
  // Unpooled connection (for specific use cases)
  databaseUrlUnpooled: process.env.DATABASE_URL_UNPOOLED,
  
  // Individual connection parameters
  host: process.env.PGHOST,
  hostUnpooled: process.env.PGHOST_UNPOOLED,
  user: process.env.PGUSER,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  
  // Vercel Postgres template variables
  postgresUrl: process.env.POSTGRES_URL,
  postgresUrlNonPooling: process.env.POSTGRES_URL_NON_POOLING,
  postgresUser: process.env.POSTGRES_USER,
  postgresHost: process.env.POSTGRES_HOST,
  postgresPassword: process.env.POSTGRES_PASSWORD,
  postgresDatabase: process.env.POSTGRES_DATABASE,
  postgresUrlNoSsl: process.env.POSTGRES_URL_NO_SSL,
  postgresPrismaUrl: process.env.POSTGRES_PRISMA_URL,
  
  // Neon Auth variables
  stackProjectId: process.env.NEXT_PUBLIC_STACK_PROJECT_ID,
  stackPublishableKey: process.env.NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY,
  stackSecretKey: process.env.STACK_SECRET_SERVER_KEY,
}

// Validate required environment variables
export function validateDbConfig() {
  const requiredVars = ['DATABASE_URL']
  const missing = requiredVars.filter(varName => !process.env[varName])
  
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`)
  }
  
  return true
}
