import type React from "react";

export const SubscribeColumn = () =>
{
  return (
    <div className="flex flex-col gap-2 mb-6 md:w-[22rem] pt-2">
      <span className="font-space-mono text-lg font-bold text-cyan-700 mb-4">
        Subscribe to our newsletter
      </span>
      <div className="flex space-x-2 mb-2 rounded-xl relative bg-gray-100">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded-xl focus:outline-none focus:border-transparent font-share-tech-mono" style={{ background: 'var(--color-bg-gray-100)' }} />
        <button className="right-1 top-1 bottom-1 w-10 h-10 absolute rounded-xl transition-all duration-200" style={{ background: 'linear-gradient(90deg, var(--color-bg-blue-600), var(--color-bg-purple-600))', color: 'var(--color-text-white)' }}>
          →
        </button>
      </div>
      <div className="flex flex-col gap-2 px-2">
        <p className="font-share-tech-mono text-sm mb-0 leading-[0.8] text-gray-500">
        We care about your data.
      </p>
        <p className="font-share-tech-mono text-sm mb-0 leading-[0.8] text-gray-500">
        Read our{" "}
          <a href="#" className="underline text-cyan-700">
          privacy policy
        </a>
        .
      </p>
    </div>
    </div>
  );
};
