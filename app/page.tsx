'use client';

import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { useState } from 'react';
import { ProtectedContent } from './components/ProtectedContent';
import { FileUpload } from './components/FileUpload';
import { FileList } from './components/FileList';
import { StatsGrid } from './components/StatsGrid';
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
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

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
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex flex-col">
        {/* Header for unauthenticated users */}
        <header className="bg-white py-3 sm:py-4 flex-shrink-0">
          <div className="w-full px-4 sm:px-6 flex items-center justify-between max-w-6xl mx-auto">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-lg">S</span>
              </div>
              <span className="text-lg sm:text-xl font-bold text-black">Storage</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <SignInButton mode="modal">
                <button className="bg-green-500 hover:bg-green-600 text-white px-3 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-colors">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="border-2 border-green-500 hover:bg-green-500 hover:text-white text-green-600 px-3 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-colors">
                  Sign Up
                </button>
              </SignUpButton>
            </div>
          </div>
        </header>

        {/* Landing Page Content - Full Screen */}
        <main className="flex-1 flex items-center justify-center">
          <div className="w-full px-4 sm:px-6 py-8 sm:py-16">
            <div className="text-center max-w-6xl mx-auto">
              {/* Hero Section - Full Screen */}
              <div className="mb-8 sm:mb-16">
                <div className="w-20 h-20 sm:w-32 sm:h-32 bg-green-500 rounded-3xl sm:rounded-4xl flex items-center justify-center mx-auto mb-6 sm:mb-12 shadow-xl sm:shadow-2xl">
                  <svg className="w-10 h-10 sm:w-16 sm:h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                </div>
                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-black mb-6 sm:mb-8">
                  Do more with your business conversations
                  <span className="block text-gray-600 text-3xl sm:text-5xl lg:text-6xl font-normal mt-3 sm:mt-4">
                    Store • Organize • Access
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-xl sm:text-3xl text-gray-600 mb-10 sm:mb-16 leading-relaxed max-w-5xl mx-auto">
                Save and organize all your important business communications from WhatsApp Business, 
                Telegram, and other platforms. Never lose important messages, documents, or customer 
                information again with our secure cloud storage solution.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-16 sm:mb-24">
                <SignUpButton mode="modal">
                  <button className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-10 sm:px-12 py-5 sm:py-6 rounded-2xl sm:rounded-3xl font-bold text-xl sm:text-2xl transition-all duration-200 transform hover:scale-105 shadow-xl sm:shadow-2xl">
                    Get Started
                  </button>
                </SignUpButton>
                <SignInButton mode="modal">
                  <button className="w-full sm:w-auto border-2 border-green-500 hover:bg-green-500 hover:text-white text-green-600 px-10 sm:px-12 py-5 sm:py-6 rounded-2xl sm:rounded-3xl font-bold text-xl sm:text-2xl transition-all duration-200">
                    Sign In
                  </button>
                </SignInButton>
              </div>

                  {/* Product Differentiation Section */}
                  <div className="mb-12 sm:mb-20">
                    <h2 className="text-2xl sm:text-3xl font-bold text-black mb-8 sm:mb-12">
                      Business storage solutions for any company size
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto">
                      Our storage solutions support businesses from large to small, see which product best fits your needs.
                    </p>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
                      {/* Business Platform */}
                      <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2">
                        <div className="text-left">
                          <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">Business Platform</h3>
                          <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                            For medium to large businesses managing communications at scale through automated integrations
                          </p>
                          <ul className="space-y-3 mb-8">
                            <li className="flex items-center text-sm sm:text-base text-gray-700">
                              <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              WhatsApp Business integration
                            </li>
                            <li className="flex items-center text-sm sm:text-base text-gray-700">
                              <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              Telegram Bot API support
                            </li>
                            <li className="flex items-center text-sm sm:text-base text-gray-700">
                              <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              Advanced analytics & reporting
                            </li>
                            <li className="flex items-center text-sm sm:text-base text-gray-700">
                              <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              Team collaboration tools
                            </li>
                          </ul>
                          <SignUpButton mode="modal">
                            <button className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                              Get started
                            </button>
                          </SignUpButton>
                        </div>
                      </div>

                      {/* Personal App */}
                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2">
                        <div className="text-left">
                          <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">Personal Storage</h3>
                          <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                            For small businesses and individuals who personally manage their communications and files
                          </p>
                          <ul className="space-y-3 mb-8">
                            <li className="flex items-center text-sm sm:text-base text-gray-700">
                              <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              Manual message backup
                            </li>
                            <li className="flex items-center text-sm sm:text-base text-gray-700">
                              <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              File organization tools
                            </li>
                            <li className="flex items-center text-sm sm:text-base text-gray-700">
                              <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              Secure cloud storage
                            </li>
                            <li className="flex items-center text-sm sm:text-base text-gray-700">
                              <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                              Cross-device access
                            </li>
                          </ul>
                          <SignUpButton mode="modal">
                            <button className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                              Download app
                            </button>
                          </SignUpButton>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Why Choose Our Platform Section */}
                  <div className="mb-12 sm:mb-20">
                    <h2 className="text-2xl sm:text-3xl font-bold text-black mb-8 sm:mb-12">
                      Why choose our platform?
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12">
                      <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                          <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                          </svg>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">Meet customers where they already are</h3>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                          Our storage solutions give you the power to connect with customers through messaging platforms they already use daily.
                  </p>
                </div>

                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">Drive business outcomes</h3>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                          Use conversations to deliver personal experiences that accelerate the buyer journey and improve customer satisfaction.
                  </p>
                </div>

                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 md:col-span-2 lg:col-span-1">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">Build long-lasting customer relationships</h3>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                          Keep prospects and customers on the path to purchase and satisfied with your services with rich messaging experiences.
                  </p>
                </div>
              </div>
                  </div>

                  {/* Success Stories Section */}
                  <div className="mb-12 sm:mb-20">
                    <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 sm:mb-6">
                      Success Stories
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto">
                      From banking, e-commerce, and more, our platform helps businesses drive results by organizing their communications.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                      <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100 text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold text-black mb-2">E-commerce Store</h3>
                        <p className="text-sm text-gray-600 mb-4">
                          "Saved 2 hours daily by organizing WhatsApp Business conversations and customer orders in one place."
                        </p>
                        <div className="text-2xl font-bold text-green-600">+40% Efficiency</div>
                      </div>
                      
                      <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100 text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold text-black mb-2">Banking Service</h3>
                        <p className="text-sm text-gray-600 mb-4">
                          "Never lost customer information again. All Telegram conversations and documents are safely stored."
                        </p>
                        <div className="text-2xl font-bold text-blue-600">100% Secure</div>
                      </div>
                      
                      <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100 text-center">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold text-black mb-2">Consulting Firm</h3>
                        <p className="text-sm text-gray-600 mb-4">
                          "Team collaboration improved dramatically with organized client communications and shared documents."
                        </p>
                        <div className="text-2xl font-bold text-purple-600">+60% Team Sync</div>
                  </div>
                  </div>
                  </div>

                  {/* Final CTA Section */}
                  <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center text-white">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                      Take the next step
                    </h2>
                    <p className="text-lg sm:text-xl text-green-100 mb-8 sm:mb-10 max-w-2xl mx-auto">
                      Start transforming your customer experience by organizing all your business communications in one secure place.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                      <SignUpButton mode="modal">
                        <button className="w-full sm:w-auto bg-white hover:bg-gray-100 text-green-600 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 transform hover:scale-105">
                          Learn more
                        </button>
                      </SignUpButton>
                      <SignInButton mode="modal">
                        <button className="w-full sm:w-auto border-2 border-white hover:bg-white hover:text-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200">
                          Get Started
                        </button>
                      </SignInButton>
                    </div>
                  </div>
            </div>
          </div>
        </main>

        {/* Additional Sections - Below the fold */}
        <div className="bg-white">
          <div className="w-full px-4 sm:px-6 py-16 sm:py-24">
            <div className="text-center max-w-6xl mx-auto">
              {/* Product Differentiation Section */}
              <div className="mb-12 sm:mb-20">
                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-8 sm:mb-12">
                  Business storage solutions for any company size
                </h2>
                <p className="text-lg text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto">
                  Our storage solutions support businesses from large to small, see which product best fits your needs.
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
                  {/* Business Platform */}
                  <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2">
                    <div className="text-left">
                      <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">Business Platform</h3>
                      <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                        For medium to large businesses managing communications at scale through automated integrations
                      </p>
                      <ul className="space-y-3 mb-8">
                        <li className="flex items-center text-sm sm:text-base text-gray-700">
                          <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          WhatsApp Business integration
                        </li>
                        <li className="flex items-center text-sm sm:text-base text-gray-700">
                          <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Telegram Bot API support
                        </li>
                        <li className="flex items-center text-sm sm:text-base text-gray-700">
                          <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Advanced analytics & reporting
                        </li>
                        <li className="flex items-center text-sm sm:text-base text-gray-700">
                          <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Team collaboration tools
                        </li>
                      </ul>
                      <SignUpButton mode="modal">
                        <button className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                          Get started
                        </button>
                      </SignUpButton>
                    </div>
                  </div>

                  {/* Personal App */}
                  <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2">
                    <div className="text-left">
                      <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">Personal Storage</h3>
                      <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                        For small businesses and individuals who personally manage their communications and files
                      </p>
                      <ul className="space-y-3 mb-8">
                        <li className="flex items-center text-sm sm:text-base text-gray-700">
                          <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Manual message backup
                        </li>
                        <li className="flex items-center text-sm sm:text-base text-gray-700">
                          <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          File organization tools
                        </li>
                        <li className="flex items-center text-sm sm:text-base text-gray-700">
                          <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Secure cloud storage
                        </li>
                        <li className="flex items-center text-sm sm:text-base text-gray-700">
                          <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Cross-device access
                        </li>
                      </ul>
                      <SignUpButton mode="modal">
                        <button className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                          Download app
                        </button>
                      </SignUpButton>
                    </div>
                  </div>
                </div>
              </div>

              {/* Success Stories Section */}
              <div className="mb-12 sm:mb-20">
                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 sm:mb-6">
                  Success Stories
                </h2>
                <p className="text-lg text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto">
                  From banking, e-commerce, and more, our platform helps businesses drive results by organizing their communications.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                  <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-black mb-2">E-commerce Store</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      "Saved 2 hours daily by organizing WhatsApp Business conversations and customer orders in one place."
                    </p>
                    <div className="text-2xl font-bold text-green-600">+40% Efficiency</div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-black mb-2">Banking Service</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      "Never lost customer information again. All Telegram conversations and documents are safely stored."
                    </p>
                    <div className="text-2xl font-bold text-blue-600">100% Secure</div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100 text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-black mb-2">Consulting Firm</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      "Team collaboration improved dramatically with organized client communications and shared documents."
                    </p>
                    <div className="text-2xl font-bold text-purple-600">+60% Team Sync</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

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
}}
