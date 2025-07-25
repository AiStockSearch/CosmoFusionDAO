import type React from "react";
import { eventCenter } from '../analytics/eventCenter';

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
    <div className="3xl:w-1/3 mb-4 flex flex-col lg:col-span-1">
      <div className="mb-4 flex items-center space-x-3">
        <span className="font-space-mono text-[1.9rem] font-bold text-cyan-700">
          {title}
        </span>
      </div>
      <p className="font-share-tech-mono text-md text-[0.9rem] text-gray-600">
        {description}
      </p>
      <div className="my-4 flex gap-4">
        <button
          onClick={() =>
          {
            eventCenter.logEvent( { category: 'click', name: 'footer_hero_primary', value: { url: buttonLink } } );
            window.open( buttonLink, '_blank' );
          }}
          className="font-share-tech-mono rounded-xl bg-cyan-900 p-2 px-4 border-2 border-cyan-900 font-medium text-white shadow-md transition-all duration-200 hover:bg-white hover:font-bold hover:text-cyan-900 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          aria-label={buttonText}
        >
          {buttonText}
        </button>
        <button
          onClick={() =>
          {
            eventCenter.logEvent( { category: 'click', name: 'footer_hero_secondary', value: { url: buttonLink2 } } );
            window.open( buttonLink2, '_blank' );
          }}
          className="font-share-tech-mono rounded-xl bg-white p-2 px-4 border-2 hover:border-cyan-900 font-medium text-gray-700 shadow-md transition-colors duration-200 hover:bg-gray-50 hover:font-bold hover:text-cyan-900 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          aria-label={buttonText2}
        >
          {buttonText2}
        </button>
      </div>
    </div>
  );
};
