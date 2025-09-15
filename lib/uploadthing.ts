import { createUploadthing, type FileRouter } from "uploadthing/next";
import { prisma } from "@/lib/prisma";

const f = createUploadthing();

export const ourFileRouter = {
  // File upload handler
  fileUploader: f({ image: { maxFileSize: "4MB", maxFileCount: 1 }, pdf: { maxFileSize: "16MB", maxFileCount: 1 }, video: { maxFileSize: "32MB", maxFileCount: 1 }, audio: { maxFileSize: "16MB", maxFileCount: 1 }, blob: { maxFileSize: "32MB", maxFileCount: 1 } })
    .middleware(async ({ req }) => {
      // This code runs on your server before upload
      // You can add authentication logic here if needed
      return { userId: "anonymous" };
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
            uploadthingId: null, // Will be updated when we get the actual UploadThing ID
            key: null, // Will be updated when we get the actual UploadThing key
            userId: metadata.userId, // You'll need to get the actual user ID from Clerk
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