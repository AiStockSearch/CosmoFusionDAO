import type React from 'react';

export const SocialButton: React.FC<{
  links: { text: string; link: string }[];
}> = ({ links }) => {
  return (
    <div className="flex flex-row gap-4">
      {(Array.isArray(links) ? links : []).map((x, idx) => (
        <a
          key={idx}
          href={x.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 font-space wrap w-full items-center 
          justify-center rounded-xl bg-gray-100 text-gray-900 transition-colors duration-200 
          hover:border-4 hover:border-cyan-700 hover:bg-gray-200 hover:font-bold hover:text-cyan-700 
          lg:h-20"
        >
          {x.text}
        </a>
      ))}
    </div>
  );
};
