'use client';

import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { useState } from 'react';
import { ProtectedContent } from './components/ProtectedContent';
import { FileUpload } from './components/FileUpload';
import { FileList } from './components/FileList';
import { StatsGrid } from './components/StatsGrid';
import { useUser } from '@clerk/nextjs';

// Conditional hook wrapper for build compatibility
function useClerkUser() {
  try {
    return useUser();
  } catch (error) {
    // Return default values when Clerk is not available
    return { user: null, isLoaded: true };
  }
}

export default function Home() {
  const { user, isLoaded } = useClerkUser();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Show loading state while Clerk is initializing
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-pulse">
          <div className="w-20 h-20 bg-gray-200 rounded-2xl mx-auto mb-6"></div>
          <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-64 mx-auto"></div>
        </div>
      </div>
    );
  }

  // Show sign-in prompt for unauthenticated users
  if (!user) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Welcome to StorageHub
          </h1>
          <p className="text-gray-600 mb-6">
            Please sign in to access your files and storage.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="/sign-in" className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
              Sign In
            </a>
            <a href="/sign-up" className="border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-2 rounded-lg font-semibold transition-colors">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Authenticated user experience
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar 
        isMobileOpen={isMobileSidebarOpen}
        onMobileClose={() => setIsMobileSidebarOpen(false)}
      />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header onMobileMenuToggle={() => setIsMobileSidebarOpen(true)} />
        
        {/* Page Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <ProtectedContent
            fallback={null}
          >
            <div className="max-w-7xl mx-auto">
              {/* Welcome Section */}
              <div className="mb-8 lg:mb-10">
                <h1 className="text-2xl sm:text-3xl font-bold text-black mb-3">
                  Welcome back, {user?.firstName || 'User'}!
                </h1>
                <p className="text-base sm:text-lg text-gray-600">
                  Here's what's happening with your storage today.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="mb-8 lg:mb-10">
                <StatsGrid />
                </div>

              {/* File Upload Section */}
              <div className="mb-8 lg:mb-10">
                <FileUpload />
              </div>

              {/* Recent Files */}
              <FileList />
            </div>
          </ProtectedContent>
        </main>
      </div>
      </div>
    );
}
