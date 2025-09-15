'use client';

import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { ProtectedContent } from './components/ProtectedContent';
import { useUser } from '@clerk/nextjs';

export default function Home() {
  const { user } = useUser();

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
            fallback={
              <div className="max-w-4xl mx-auto">
                <div className="text-center py-16">
                  <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h1 className="text-3xl font-bold text-black mb-4">
                    Welcome to Storage App
                  </h1>
                  <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                    A secure, cloud-based storage solution with enterprise-grade authentication. 
                    Sign in to access your files and start managing your digital storage.
                  </p>
                  <div className="flex justify-center space-x-4">
                    <button className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                      Get Started
                    </button>
                    <button className="border border-black hover:bg-gray-100 text-black px-6 py-3 rounded-lg font-medium transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            }
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

              {/* Recent Files */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="px-8 py-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-black">Recent Files</h2>
                </div>
                <div className="divide-y divide-gray-200">
                  {[
                    { name: 'Project Proposal.pdf', size: '2.4 MB', modified: '2 hours ago', type: 'pdf' },
                    { name: 'Meeting Notes.docx', size: '156 KB', modified: '1 day ago', type: 'doc' },
                    { name: 'Design Mockups.fig', size: '8.7 MB', modified: '2 days ago', type: 'fig' },
                    { name: 'Budget Spreadsheet.xlsx', size: '89 KB', modified: '3 days ago', type: 'xls' },
                  ].map((file, index) => (
                    <div key={index} className="px-8 py-6 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                            <span className="text-sm font-semibold text-white">
                              {file.type.toUpperCase()}
                            </span>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-base font-medium text-black truncate">
                            {file.name}
                          </p>
                          <p className="text-sm text-gray-500 mt-1">
                            {file.size} • Modified {file.modified}
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          <button className="text-gray-400 hover:text-black p-2 rounded-lg hover:bg-gray-100 transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
        </div>
          </ProtectedContent>
      </main>
    </div>
    </>
  );
}
