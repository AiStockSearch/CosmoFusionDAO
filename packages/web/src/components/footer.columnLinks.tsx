import type React from "react";

export const FooterColumnLinks: React.FC<{
  links: { text: string; link: string; }[];
  title: string;
}> = ( { links, title } ) =>
{
  return (
    <div>
      <h4 className="hero-title text-lg font-semibold mb-4">
        {title}
      </h4>
      <ul className="space-y-3">
        {links.map( ( link, index ) => (
          <li>
            <a
              href={link.link}
              className="hero-desc text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              {link.text}
            </a>
          </li>
        ) )}
      </ul>
    </div>
  );
};
