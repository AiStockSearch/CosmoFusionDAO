import React from 'react';

export const FooterColumnLinks: React.FC<{
  links: { text: string; link: string }[];
  title: string;
}> = ({ links, title }) => {
  return (
    <div className="mx-2 flex flex-col gap-2 pt-2 sm:w-[11rem]">
      <span className="font-space-mono mb-4 text-lg font-bold text-cyan-700">{title}</span>
      <ul className="space-y-3 ">
        {links.map((link, index) => (
          <li key={index} className="flex items-center gap-2">
            <a
              href={link.link}
              className="font-share-tech-mono border-b-2 border-transparent text-gray-600 transition-colors duration-200 hover:border-cyan-600 hover:font-bold hover:text-cyan-600"
              {...(!link.link.startsWith('#')
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              aria-label={link.text}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
