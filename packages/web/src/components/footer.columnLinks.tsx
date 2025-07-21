import type React from "react";

export const FooterColumnLinks: React.FC<{
  links: { text: string; link: string; }[];
  title: string;
}> = ( { links, title } ) =>
{
  return (
    <div>
      <h4 className="font-tasa text-lg font-semibold mb-4 text-gray-900">
        {title}
      </h4>
      <ul className="space-y-3">
        {links.map( ( link, index ) => (
          <li>
            <a
              href={link.link}
              className="font-aspekta text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              {link.text}
            </a>
          </li>
        ) )}
      </ul>
    </div>
  );
};
