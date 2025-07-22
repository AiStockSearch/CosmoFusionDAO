import type React from "react";

export const SubscribeColumn = () =>
{
  return (
    <div className="flex flex-col gap-2 mb-6 md:w-1/2">
      <h4 className="font-tasa text-lg font-semibold" style={{ color: 'var(--color-text-gray-900)' }}>
        Subscribe to our newsletter
      </h4> 
      <div className="flex space-x-2 mb-2 rounded-xl relative" style={{ background: 'var(--color-bg-gray-100)' }}>
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded-xl focus:outline-none focus:border-transparent font-aspekta" style={{ background: 'var(--color-bg-gray-100)' }} />
        <button className="right-1 top-1 bottom-1 w-10 h-10 absolute rounded-xl transition-all duration-200" style={{ background: 'linear-gradient(90deg, var(--color-bg-blue-600), var(--color-bg-purple-600))', color: 'var(--color-text-white)' }}>
          →
        </button>
      </div>
      <p className="font-aspekta text-sm mb-0 leading-[0.8]" style={{ color: 'var(--color-text-gray-400)' }}>
        We care about your data.
      </p>
      <p className="font-aspekta text-sm mb-0 leading-[0.8]" style={{ color: 'var(--color-text-gray-400)' }}>
        Read our{" "}
        <a href="#" className="underline" style={{ color: 'var(--color-text-blue-400)' }}>
          privacy policy
        </a>
        .
      </p>
    </div>
  );
};
