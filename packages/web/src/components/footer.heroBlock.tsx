import type React from "react";

export const HeroBlock: React.FC<{
  title: string;
  description: string;
  buttonText: string;
  buttonText2: string;
  buttonLink: string;
  buttonLink2: string;
}> = ( {
  title,
  description,
  buttonText,
  buttonText2,
  buttonLink,
  buttonLink2,
} ) =>
  {
    return (
      <div className="lg:col-span-1 flex flex-col gap-2 lg:w-1/3 mb-4">
        <div className="flex items-center space-x-3 mb-4">
          <span className="font-aspekta font-black text-gray-600 mb-2 text-2xl">
            {title}
          </span>
        </div>
        <p className="font-aspekta font-black text-gray-600 mb-4 leading-[1.2] text-2xl">
          {description}
        </p>
        <div className="flex gap-4 mb-2">
          <button
            onClick={() => window.open( buttonLink, "_blank" )}
            className="px-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-aspekta font-medium px-2 py-2 transition-all duration-200"
          >
            {buttonText}
          </button>
          <button
            onClick={() => window.open( buttonLink2, "_blank" )}
            className="px-4 rounded-xl shadow-md text-gray-700 font-aspekta font-medium px-2 py-2 hover:bg-gray-50 transition-colors duration-200"
          >
            {buttonText2}
          </button>
        </div>
      </div>
    );
  };
