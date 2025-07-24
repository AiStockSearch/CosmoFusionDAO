import React from "react";

export const FooterColumnLinks: React.FC<{
  links: { text: string; link: string; }[];
  title: string;
}> = ( { links, title } ) =>
{
  return (
    <div className="flex flex-col gap-2 mr-2 ml-2 pt-2">
      <span className="font-space-mono text-cyan-700 text-lg font-bold mb-4">
        {title}
      </span>
      <ul className="space-y-3 ">
        {links.map( ( link, index ) => (
          <li key={index} className="flex items-center gap-2">

            <a
              href={link.link}
              className="font-share-tech-mono text-gray-600 border-transparent border-b-2 hover:border-cyan-600 hover:text-cyan-600 hover:font-bold transition-colors duration-200"
              {...( !link.link.startsWith( '#' ) ? { target: '_blank', rel: 'noopener noreferrer' } : {} )}
              aria-label={link.text}
            >
              {link.text}
            </a>
          </li>
        ) )}
      </ul>
    </div>
  );
};
