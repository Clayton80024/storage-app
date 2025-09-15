'use client';

import { SignInButton, SignUpButton, UserButton, useUser } from '@clerk/nextjs';

export function AuthButtons() {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <div className="flex items-center space-x-4">
        <div className="animate-pulse bg-gray-200 h-8 w-20 rounded"></div>
        <div className="animate-pulse bg-gray-200 h-8 w-20 rounded"></div>
      </div>
    );
  }

  if (isSignedIn) {
    return (
      <div className="flex items-center space-x-4">
        <UserButton afterSignOutUrl="/" />
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-4">
      <SignInButton mode="modal">
        <button className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition-colors">
          Sign In
        </button>
      </SignInButton>
      <SignUpButton mode="modal">
        <button className="border border-black hover:bg-gray-100 text-black px-4 py-2 rounded-lg transition-colors">
          Sign Up
        </button>
      </SignUpButton>
    </div>
  );
}
