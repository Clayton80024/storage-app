'use client';

import { useUser } from '@clerk/nextjs';

interface ProtectedContentProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function ProtectedContent({ children, fallback }: ProtectedContentProps) {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!isSignedIn) {
    return fallback || (
      <div className="text-center py-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Please sign in to access this content
        </h2>
        <p className="text-gray-500">
          You need to be authenticated to view this page.
        </p>
      </div>
    );
  }

  return <>{children}</>;
}
