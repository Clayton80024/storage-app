import { createUploadthing, type FileRouter } from "uploadthing/next";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

const f = createUploadthing();

export const ourFileRouter = {
  // File upload handler
  fileUploader: f({ image: { maxFileSize: "4MB", maxFileCount: 1 }, pdf: { maxFileSize: "16MB", maxFileCount: 1 }, video: { maxFileSize: "32MB", maxFileCount: 1 }, audio: { maxFileSize: "16MB", maxFileCount: 1 }, blob: { maxFileSize: "32MB", maxFileCount: 1 } })
    .middleware(async ({ req }) => {
      // Get the authenticated user from Clerk
      const { userId } = await auth();
      
      if (!userId) {
        throw new Error("Unauthorized - Please sign in to upload files");
      }

      // Get or create user in database
      let user = await prisma.user.findUnique({
        where: { clerkId: userId }
      });

      if (!user) {
        // Create user if they don't exist
        user = await prisma.user.create({
          data: {
            clerkId: userId,
            email: "", // Will be updated when we get more user info
            name: "User"
          }
        });
      }

      return { userId: user.id, clerkId: userId };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code runs after the file upload is complete
      console.log("Upload complete for userId:", metadata.userId);
      console.log("File URL:", file.url);
      
      // Save file information to database
      try {
        await prisma.file.create({
          data: {
            name: file.name,
            size: file.size,
            type: file.type || 'unknown',
            url: file.url,
            userId: metadata.userId, // This is now the actual database user ID
          },
        });
        console.log("File saved to database successfully");
      } catch (error) {
        console.error("Error saving file to database:", error);
      }
      
      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;