import type React from 'react';

export const SocialButton: React.FC<{
  links: { text: string; link: string }[];
}> = ({ links }) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {links.map((link, index) => (
        <button
          key={index}
          className="flex h-12 items-center justify-center rounded-xl bg-gray-100 text-gray-900 transition-colors duration-200 hover:border-4 hover:border-cyan-700 hover:bg-gray-200 hover:font-bold hover:text-cyan-700 lg:h-20"
          onClick={() => window.open(link.link, '_blank')}
          aria-label={link.text}
        >
          <span className="font-space-mono text-sm font-semibold">{link.text}</span>
        </button>
      ))}
    </div>
  );
};
