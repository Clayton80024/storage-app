import { prisma } from '../lib/prisma'

async function testDatabaseConnection() {
  try {
    console.log('Testing database connection...')
    
    // Test basic connection
    await prisma.$connect()
    console.log('✅ Database connection successful!')
    
    // Test a simple query
    const result = await prisma.$queryRaw`SELECT 1 as test`
    console.log('✅ Database query test successful:', result)
    
    // Test creating a user (optional - uncomment if you want to test)
    // const testUser = await prisma.user.create({
    //   data: {
    //     clerkId: 'test_user_123',
    //     email: 'test@example.com',
    //     name: 'Test User'
    //   }
    // })
    // console.log('✅ User creation test successful:', testUser)
    
  } catch (error) {
    console.error('❌ Database connection failed:', error)
  } finally {
    await prisma.$disconnect()
  }
}

testDatabaseConnection()
