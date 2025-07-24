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
      <div className="lg:col-span-1 flex flex-col 3xl:w-1/3 mb-4">
        <div className="flex items-center space-x-3 mb-4">
          <span className="font-space-mono font-bold text-cyan-700 text-2xl">
            {title}
          </span>
        </div>
        <p className="font-share-tech-mono font-normal text-gray-600 text-md">
          {description}
        </p>
        <div className="flex gap-4 my-4">
          <button
            onClick={() => window.open( buttonLink, "_blank" )}
            className="font-share-tech-mono font-medium  hover:font-bold px-4 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-400 hover:from-cyan-500 hover:to-purple-500  text-white hover:text-black px-2 py-2 transition-all duration-200"
          >
            {buttonText}
          </button>
          <button
            onClick={() => window.open( buttonLink2, "_blank" )}
            className="font-share-tech-mono font-medium  hover:font-bold px-4 rounded-xl shadow-md text-gray-700  px-2 py-2 hover:bg-gray-50 transition-colors duration-200"
          >
            {buttonText2}
          </button>
        </div>
      </div>
    );
  };
