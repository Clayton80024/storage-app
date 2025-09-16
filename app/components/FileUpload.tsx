'use client';

import { UploadButton } from "@uploadthing/react";
import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { ourFileRouter } from "@/lib/uploadthing";

type FileRouter = typeof ourFileRouter;

// Conditional hook wrapper for build compatibility
function useClerkUser() {
  try {
    return useUser();
  } catch (error) {
    return { user: null, isLoaded: true };
  }
}

export function FileUpload() {
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const { user, isLoaded } = useClerkUser();

  // Show sign-in prompt if user is not authenticated
  if (!isLoaded) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-48 mb-4"></div>
          <div className="h-32 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm text-center">
        <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Sign in to upload files</h3>
        <p className="text-gray-600">Please sign in to access the file upload feature.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-black mb-2">Upload Files</h2>
        <p className="text-gray-600">
          Upload your files securely to the cloud. Supported formats: Images, PDFs, Videos, Audio, and more.
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Signed in as: {user.emailAddresses[0]?.emailAddress || user.firstName || 'User'}
        </p>
      </div>
      
      <div className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
        isUploading 
          ? 'border-blue-400 bg-blue-50' 
          : 'border-gray-300 hover:border-gray-400'
      }`}>
        {isUploading && (
          <div className="mb-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black mx-auto"></div>
            <p className="text-sm text-gray-600 mt-2">Uploading files...</p>
          </div>
        )}
        <UploadButton<FileRouter, "fileUploader">
          endpoint="fileUploader"
          onClientUploadComplete={(res) => {
            setIsUploading(false);
            if (res) {
              const fileUrls = res.map(file => file.url);
              setUploadedFiles(prev => [...prev, ...fileUrls]);
              console.log("Files uploaded:", fileUrls);
              
              // Show success message
              const successDiv = document.createElement('div');
              successDiv.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50';
              successDiv.textContent = `${res.length} file(s) uploaded successfully!`;
              document.body.appendChild(successDiv);
              
              // Remove success message after 3 seconds
              setTimeout(() => {
                document.body.removeChild(successDiv);
              }, 3000);
              
              // Trigger a custom event to refresh file list
              window.dispatchEvent(new CustomEvent('filesUploaded'));
            }
          }}
          onUploadError={(error: Error) => {
            setIsUploading(false);
            console.error("Upload error:", error);
            
            // Show error message
            const errorDiv = document.createElement('div');
            errorDiv.className = 'fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg z-50';
            errorDiv.textContent = `Upload failed: ${error.message}`;
            document.body.appendChild(errorDiv);
            
            // Remove error message after 5 seconds
            setTimeout(() => {
              document.body.removeChild(errorDiv);
            }, 5000);
          }}
          onUploadBegin={(name) => {
            setIsUploading(true);
            console.log("Upload begin:", name);
          }}
        />
      </div>

      {uploadedFiles.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-medium text-black mb-4">Recently Uploaded Files</h3>
          <div className="space-y-2">
            {uploadedFiles.map((url, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700 truncate max-w-xs">
                    File {index + 1}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    View
                  </a>
                  <button
                    onClick={() => navigator.clipboard.writeText(url)}
                    className="text-gray-500 hover:text-gray-700 text-sm"
                    title="Copy URL"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}