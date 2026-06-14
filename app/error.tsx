'use client'

import { useEffect } from 'react';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container py-12">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-8">
          <div className="text-6xl mb-4">⚠️</div>
          <h2 className="text-3xl font-bold text-red-600 mb-4">
            Oops! Something went wrong
          </h2>
          <p className="text-gray-600 mb-6">
            We encountered an unexpected error. Don't worry, we're working on it!
          </p>
          {error.message && (
            <div className="card bg-red-50 border border-red-200 mb-6">
              <p className="text-sm text-red-800 font-mono break-all">
                {error.message}
              </p>
            </div>
          )}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => location.href = '/'}
            className="btn btn-primary"
          >
            🔄 Try again
          </button>
          <button
            onClick={() => location.href = '/'}
            className="btn btn-secondary"
          >
            🏠 Go home
          </button>
        </div>
      </div>
    </div>
  );
}
