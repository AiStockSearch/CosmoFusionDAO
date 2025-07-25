import React from 'react';

export const FooterColumnLinks: React.FC<{
  links: { text: string; link: string }[];
  title: string;
}> = ({ links, title }) => {
  return (
    <div className="mx-2 flex flex-col gap-2 pt-2 sm:w-[11rem]">
      <span className="font-space-mono mb-4 text-lg font-bold text-cyan-700">{title}</span>
      <ul className="space-y-3 ">
        {links.map((link, index) => {
          // Если это email, показываем текст и делаем клик по нему открывающим Hangout
          if (link.text === 'Email') {
            // Ищем ссылку на Hangout среди links
            const hangout = links.find(l => l.text === 'Google Hangout');
            return (
              <li key={index} className="flex items-center gap-2">
                <span className="font-share-tech-mono text-gray-600 select-all">
                  {link.link.replace('mailto:', '')}
                </span>
                {hangout && (
                  <a
                    href={hangout.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 px-2 py-1 rounded text-xs bg-cyan-50 text-cyan-700 border border-cyan-200 hover:bg-cyan-100 transition"
                  >
                    Hangout
                  </a>
                )}
              </li>
            );
          }
          // Не показываем отдельную ссылку на Hangout, если она уже есть рядом с email
          if (link.text === 'Google Hangout') return null;
          return (
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
          );
        })}
      </ul>
    </div>
  );
};
