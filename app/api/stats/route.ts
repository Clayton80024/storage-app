import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    // Get the authenticated user from Clerk
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized - Please sign in to view stats' },
        { status: 401 }
      );
    }

    // Find the user in our database, or create if they don't exist
    let user = await prisma.user.findUnique({
      where: { clerkId: userId }
    });

    if (!user) {
      // Create user if they don't exist
      user = await prisma.user.create({
        data: {
          clerkId: userId,
          email: "", // We'll update this when we get more user info
          name: "User"
        }
      });
    }

    // Get all files for this user
    const files = await prisma.file.findMany({
      where: {
        userId: user.id
      },
      orderBy: {
        uploadedAt: 'desc',
      }
    });

    // Calculate statistics
    const totalFiles = files.length;
    const totalStorageUsed = files.reduce((sum, file) => sum + file.size, 0);
    
    // Format storage size
    const formatBytes = (bytes: number) => {
      if (bytes === 0) return '0 Bytes';
      const k = 1024;
      const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    // Get recent activity (files uploaded in last 7 days)
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    
    const recentActivity = files.filter(file => 
      new Date(file.uploadedAt) >= sevenDaysAgo
    ).length;

    // For now, shared files is 0 (we'll implement sharing later)
    const sharedFiles = 0;

    const stats = {
      totalFiles,
      storageUsed: formatBytes(totalStorageUsed),
      storageUsedBytes: totalStorageUsed,
      sharedFiles,
      recentActivity,
      lastUploaded: files.length > 0 ? files[0].uploadedAt : null
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error('Error fetching stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch stats' },
      { status: 500 }
    );
  }
}
