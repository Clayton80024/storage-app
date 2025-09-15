'use client';

import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { ProtectedContent } from './components/ProtectedContent';
import { FileUpload } from './components/FileUpload';
import { FileList } from './components/FileList';
import { useUser, SignInButton, SignUpButton } from '@clerk/nextjs';

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

  // Show full landing page for unauthenticated users
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

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Header for unauthenticated users */}
        <header className="bg-white py-3 sm:py-4">
          <div className="w-full px-4 sm:px-6 flex items-center justify-between max-w-6xl mx-auto">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-black rounded-lg sm:rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-lg">S</span>
              </div>
              <span className="text-lg sm:text-xl font-bold text-black">Storage</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <button className="bg-black hover:bg-gray-800 text-white px-3 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-colors">
                Sign In
              </button>
              <button className="border-2 border-black hover:bg-black hover:text-white text-black px-3 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-colors">
                Sign Up
              </button>
            </div>
          </div>
        </header>

        {/* Landing Page Content */}
        <main className="flex-1">
          <div className="w-full px-4 sm:px-6 py-8 sm:py-16">
            <div className="text-center max-w-6xl mx-auto">
              {/* Logo */}
              <div className="mb-8 sm:mb-16">
                <div className="w-16 h-16 sm:w-24 sm:h-24 bg-black rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-8 shadow-lg sm:shadow-xl">
                  <svg className="w-8 h-8 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z" />
                  </svg>
                </div>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-black mb-4 sm:mb-6">
                  Storage
                  <span className="block text-gray-600 text-2xl sm:text-4xl lg:text-5xl font-normal mt-2 sm:mt-3">
                    Secure • Fast • Reliable
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-lg sm:text-2xl text-gray-600 mb-8 sm:mb-16 leading-relaxed">
                The modern cloud storage solution you've been waiting for. 
                Store, organize, and share your files with enterprise-grade security 
                and lightning-fast performance.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12 sm:mb-20">
                <button className="w-full sm:w-auto bg-black hover:bg-gray-800 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-lg sm:text-xl transition-all duration-200 transform hover:scale-105 shadow-lg sm:shadow-xl">
                  Start Free Trial
                </button>
                <button className="w-full sm:w-auto border-2 border-black hover:bg-black hover:text-white text-black px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-lg sm:text-xl transition-all duration-200">
                  Sign In
                </button>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12 mb-12 sm:mb-20">
                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">Enterprise Security</h3>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    Bank-level encryption and multi-factor authentication to keep your files safe and secure.
                  </p>
                </div>

                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">Lightning Fast</h3>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    Upload and download files at blazing speeds with our global CDN network infrastructure.
                  </p>
                </div>

                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 md:col-span-2 lg:col-span-1">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">Easy Sharing</h3>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    Share files securely with anyone, anywhere. Set permissions and track access in real-time.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-12 shadow-xl border border-gray-100">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-12">
                  <div className="text-center">
                    <div className="text-3xl sm:text-5xl font-bold text-black mb-2 sm:mb-3">1M+</div>
                    <div className="text-sm sm:text-xl text-gray-600 font-medium">Files Stored</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl sm:text-5xl font-bold text-black mb-2 sm:mb-3">99.9%</div>
                    <div className="text-sm sm:text-xl text-gray-600 font-medium">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl sm:text-5xl font-bold text-black mb-2 sm:mb-3">50K+</div>
                    <div className="text-sm sm:text-xl text-gray-600 font-medium">Happy Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl sm:text-5xl font-bold text-black mb-2 sm:mb-3">24/7</div>
                    <div className="text-sm sm:text-xl text-gray-600 font-medium">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Authenticated user experience
  return (
    <>
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <Header />
        
        {/* Page Content */}
        <main className="flex-1 p-8 lg:ml-0 ml-0">
          <ProtectedContent
            fallback={null}
          >
            <div className="max-w-7xl mx-auto">
              {/* Welcome Section */}
              <div className="mb-10">
                <h1 className="text-3xl font-bold text-black mb-3">
                  Welcome back, {user?.firstName || 'User'}!
                </h1>
                <p className="text-lg text-gray-600">
                  Here's what's happening with your storage today.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
                <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-5">
                      <p className="text-sm font-medium text-gray-600 mb-1">Total Files</p>
                      <p className="text-3xl font-bold text-black">1,247</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-5">
                      <p className="text-sm font-medium text-gray-600 mb-1">Storage Used</p>
                      <p className="text-3xl font-bold text-black">2.1 GB</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-5">
                      <p className="text-sm font-medium text-gray-600 mb-1">Shared Files</p>
                      <p className="text-3xl font-bold text-black">23</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-5">
                      <p className="text-sm font-medium text-gray-600 mb-1">Recent Activity</p>
                      <p className="text-3xl font-bold text-black">12</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* File Upload Section */}
              <div className="mb-10">
                <FileUpload />
              </div>

              {/* Recent Files */}
              <FileList />
        </div>
          </ProtectedContent>
      </main>
    </div>
    </>
  );
}
