import type React from "react";

export const SubscribeColumn = () =>
{
  return (
    <div className="flex flex-col gap-2 mb-6 md:w-1/2">
      <h4 className="font-tasa text-lg font-semibold text-gray-900">
        Subscribe to our newsletter
      </h4> 
      <div className="flex space-x-2 mb-2 bg-gray-100 rounded-xl relative">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-aspekta" />
        <button className="bg-gradient-to-r right-1 top-1 bottom-1 w-10 h-10 absolute from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl transition-all duration-200">
          →
        </button>
      </div>
      <p className="font-aspekta text-sm text-gray-400 mb-0 leading-[0.8]">
        We care about your data.
      </p>
      <p className="font-aspekta text-sm text-gray-400 mb-0 leading-[0.8]">
        Read our{" "}
        <a href="#" className="text-blue-400 underline">
          privacy policy
        </a>
        .
      </p>
    </div>
  );
};
