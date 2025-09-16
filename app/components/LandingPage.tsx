'use client';

import { SignInButton, SignUpButton } from '@clerk/nextjs';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex flex-col">
      {/* Header */}
      <header className="bg-white py-4 flex-shrink-0 shadow-sm">
        <div className="w-full px-6 flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold text-black">Storage</span>
          </div>
          <div className="flex items-center space-x-3">
            <SignInButton mode="modal">
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold text-base transition-colors">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="border-2 border-green-500 hover:bg-green-500 hover:text-white text-green-600 px-6 py-3 rounded-xl font-semibold text-base transition-colors">
                Sign Up
              </button>
            </SignUpButton>
          </div>
        </div>
      </header>

      {/* Hero Section - Full Screen */}
      <main className="flex-1 flex items-center justify-center">
        <div className="w-full px-6 py-16">
          <div className="text-center max-w-6xl mx-auto">
            {/* Hero Icon */}
            <div className="mb-12">
              <div className="w-32 h-32 bg-green-500 rounded-4xl flex items-center justify-center mx-auto shadow-2xl">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-6xl lg:text-8xl font-bold text-black mb-8 leading-tight">
              Do more with your business conversations
            </h1>

            {/* Sub-headline */}
            <div className="text-4xl lg:text-6xl text-gray-600 font-normal mb-12">
              Store • Organize • Access
            </div>

            {/* Description */}
            <p className="text-2xl lg:text-3xl text-gray-600 mb-16 leading-relaxed max-w-5xl mx-auto">
              Save and organize all your important business communications from WhatsApp Business, 
              Telegram, and other platforms. Never lose important messages, documents, or customer 
              information again with our secure cloud storage solution.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8">
              <SignUpButton mode="modal">
                <button className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-12 py-6 rounded-3xl font-bold text-2xl transition-all duration-200 transform hover:scale-105 shadow-2xl">
                  Get Started
                </button>
              </SignUpButton>
              <SignInButton mode="modal">
                <button className="w-full sm:w-auto border-2 border-green-500 hover:bg-green-500 hover:text-white text-green-600 px-12 py-6 rounded-3xl font-bold text-2xl transition-all duration-200">
                  Sign In
                </button>
              </SignInButton>
            </div>
          </div>
        </div>
      </main>

      {/* Additional Sections - Below the fold */}
      <div className="bg-white">
        <div className="w-full px-6 py-24">
          <div className="text-center max-w-6xl mx-auto">
            {/* Product Differentiation Section */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold text-black mb-12">
                Business storage solutions for any company size
              </h2>
              <p className="text-xl text-gray-600 mb-16 max-w-4xl mx-auto">
                Our storage solutions support businesses from large to small, see which product best fits your needs.
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Business Platform */}
                <div className="bg-gray-50 rounded-3xl p-10 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-black mb-6">Business Platform</h3>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      For medium to large businesses managing communications at scale through automated integrations
                    </p>
                    <ul className="space-y-4 mb-10">
                      <li className="flex items-center text-base text-gray-700">
                        <svg className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        WhatsApp Business integration
                      </li>
                      <li className="flex items-center text-base text-gray-700">
                        <svg className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Telegram Bot API support
                      </li>
                      <li className="flex items-center text-base text-gray-700">
                        <svg className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Advanced analytics & reporting
                      </li>
                      <li className="flex items-center text-base text-gray-700">
                        <svg className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Team collaboration tools
                      </li>
                    </ul>
                    <SignUpButton mode="modal">
                      <button className="w-full bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-colors">
                        Get started
                      </button>
                    </SignUpButton>
                  </div>
                </div>

                {/* Personal App */}
                <div className="bg-gray-50 rounded-3xl p-10 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-black mb-6">Personal Storage</h3>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      For small businesses and individuals who personally manage their communications and files
                    </p>
                    <ul className="space-y-4 mb-10">
                      <li className="flex items-center text-base text-gray-700">
                        <svg className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Manual message backup
                      </li>
                      <li className="flex items-center text-base text-gray-700">
                        <svg className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        File organization tools
                      </li>
                      <li className="flex items-center text-base text-gray-700">
                        <svg className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Secure cloud storage
                      </li>
                      <li className="flex items-center text-base text-gray-700">
                        <svg className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Cross-device access
                      </li>
                    </ul>
                    <SignUpButton mode="modal">
                      <button className="w-full bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-colors">
                        Download app
                      </button>
                    </SignUpButton>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Stories Section */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold text-black mb-6">
                Success Stories
              </h2>
              <p className="text-xl text-gray-600 mb-16 max-w-4xl mx-auto">
                From banking, e-commerce, and more, our platform helps businesses drive results by organizing their communications.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-50 rounded-3xl p-8 shadow-lg border border-gray-100 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">E-commerce Store</h3>
                  <p className="text-base text-gray-600 mb-6">
                    "Saved 2 hours daily by organizing WhatsApp Business conversations and customer orders in one place."
                  </p>
                  <div className="text-3xl font-bold text-green-600">+40% Efficiency</div>
                </div>
                
                <div className="bg-gray-50 rounded-3xl p-8 shadow-lg border border-gray-100 text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">Banking Service</h3>
                  <p className="text-base text-gray-600 mb-6">
                    "Never lost customer information again. All Telegram conversations and documents are safely stored."
                  </p>
                  <div className="text-3xl font-bold text-blue-600">100% Secure</div>
                </div>
                
                <div className="bg-gray-50 rounded-3xl p-8 shadow-lg border border-gray-100 text-center">
                  <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">Consulting Firm</h3>
                  <p className="text-base text-gray-600 mb-6">
                    "Team collaboration improved dramatically with organized client communications and shared documents."
                  </p>
                  <div className="text-3xl font-bold text-purple-600">+60% Team Sync</div>
                </div>
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-16 text-center text-white">
              <h2 className="text-4xl font-bold mb-8">
                Take the next step
              </h2>
              <p className="text-2xl text-green-100 mb-12 max-w-3xl mx-auto">
                Start transforming your customer experience by organizing all your business communications in one secure place.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8">
                <SignUpButton mode="modal">
                  <button className="w-full sm:w-auto bg-white hover:bg-gray-100 text-green-600 px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-200 transform hover:scale-105">
                    Learn more
                  </button>
                </SignUpButton>
                <SignInButton mode="modal">
                  <button className="w-full sm:w-auto border-2 border-white hover:bg-white hover:text-green-600 text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-200">
                    Get Started
                  </button>
                </SignInButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
