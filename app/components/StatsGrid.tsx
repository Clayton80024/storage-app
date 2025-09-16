'use client';

import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';

interface StatsData {
  totalFiles: number;
  storageUsed: string;
  storageUsedBytes: number;
  sharedFiles: number;
  recentActivity: number;
  lastUploaded: string | null;
}

// Conditional hook wrapper for build compatibility
function useClerkUser() {
  try {
    return useUser();
  } catch (error) {
    return { user: null, isLoaded: true };
  }
}

export function StatsGrid() {
  const [stats, setStats] = useState<StatsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user, isLoaded } = useClerkUser();

  useEffect(() => {
    if (isLoaded && user) {
      fetchStats();
    } else if (isLoaded && !user) {
      setLoading(false);
    }
  }, [isLoaded, user]);

  const fetchStats = async () => {
    try {
      setError(null);
      const response = await fetch('/api/stats');

      if (response.status === 401) {
        setError('Please sign in to view stats');
        return;
      }

      if (!response.ok) {
        throw new Error('Failed to fetch stats');
      }

      const data = await response.json();
      setStats(data);
    } catch (error) {
      console.error('Error fetching stats:', error);
      setError('Failed to load stats');
    } finally {
      setLoading(false);
    }
  };

  if (!isLoaded || loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
            <div className="animate-pulse">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gray-200 rounded-xl"></div>
                </div>
                <div className="ml-5">
                  <div className="h-4 bg-gray-200 rounded w-20 mb-2"></div>
                  <div className="h-8 bg-gray-200 rounded w-16"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!user) {
    return null; // Don't show stats for unauthenticated users
  }

  if (error) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm text-center">
          <div className="text-red-500 mb-2">⚠️</div>
          <p className="text-sm text-gray-600">{error}</p>
          <button
            onClick={fetchStats}
            className="mt-2 text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
      {/* Total Files */}
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
            <p className="text-3xl font-bold text-black">{stats?.totalFiles || 0}</p>
          </div>
        </div>
      </div>

      {/* Storage Used */}
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
            <p className="text-3xl font-bold text-black">{stats?.storageUsed || '0 Bytes'}</p>
          </div>
        </div>
      </div>

      {/* Shared Files */}
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
            <p className="text-3xl font-bold text-black">{stats?.sharedFiles || 0}</p>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
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
            <p className="text-3xl font-bold text-black">{stats?.recentActivity || 0}</p>
            <p className="text-xs text-gray-500 mt-1">Last 7 days</p>
          </div>
        </div>
      </div>
    </div>
  );
}
