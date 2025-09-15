import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    // Get the authenticated user from Clerk
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized - Please sign in to view files' },
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

    // Get files for this specific user
    const files = await prisma.file.findMany({
      where: {
        userId: user.id
      },
      orderBy: {
        uploadedAt: 'desc',
      },
      take: 50, // Limit to 50 most recent files
    });

    return NextResponse.json(files);
  } catch (error) {
    console.error('Error fetching files:', error);
    return NextResponse.json(
      { error: 'Failed to fetch files' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    // Get the authenticated user from Clerk
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized - Please sign in to delete files' },
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

    // Get file ID from request body
    const { fileId } = await request.json();

    if (!fileId) {
      return NextResponse.json(
        { error: 'File ID is required' },
        { status: 400 }
      );
    }

    // Find the file and verify ownership
    const file = await prisma.file.findFirst({
      where: {
        id: fileId,
        userId: user.id
      }
    });

    if (!file) {
      return NextResponse.json(
        { error: 'File not found or access denied' },
        { status: 404 }
      );
    }

    // Delete the file from database
    await prisma.file.delete({
      where: {
        id: fileId
      }
    });

    return NextResponse.json({ 
      message: 'File deleted successfully',
      fileId: fileId 
    });

  } catch (error) {
    console.error('Error deleting file:', error);
    return NextResponse.json(
      { error: 'Failed to delete file' },
      { status: 500 }
    );
  }
}