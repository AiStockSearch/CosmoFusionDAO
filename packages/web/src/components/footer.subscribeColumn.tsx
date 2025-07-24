import type React from 'react';

export const SubscribeColumn = () => {
  return (
    <div className="mb-6 flex flex-col gap-2 pt-2 md:w-[22rem]">
      <span className="font-space-mono mb-4 text-lg font-bold text-cyan-700">
        Subscribe to our newsletter
      </span>
      <div className="relative mb-2 flex space-x-2 rounded-xl bg-gray-100">
        <input
          type="email"
          placeholder="Enter your email"
          className="font-share-tech-mono flex-1 rounded-xl px-4 py-3 focus:border-transparent focus:outline-none"
          style={{ background: 'var(--color-bg-gray-100)' }}
          aria-label="Email address"
        />
        <button
          className="absolute inset-y-1 right-1 size-10 rounded-xl transition-all duration-200"
          style={{
            background:
              'linear-gradient(90deg, var(--color-bg-blue-600), var(--color-bg-purple-600))',
            color: 'var(--color-text-white)',
          }}
          aria-label="Subscribe"
        >
          →
        </button>
      </div>
      <div className="flex flex-col gap-2 px-2">
        <p className="font-share-tech-mono mb-0 text-sm leading-[0.8] text-gray-500">
          We care about your data.
        </p>
        <p className="font-share-tech-mono mb-0 text-sm leading-[0.8] text-gray-500">
          Read our{' '}
          <button type="button" className="text-cyan-700 underline">
            privacy policy
          </button>
          .
        </p>
      </div>
    </div>
  );
};
