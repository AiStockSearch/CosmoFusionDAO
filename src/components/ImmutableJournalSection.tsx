import React from 'react';
import { useLocale } from '../hooks/useLocale';

export const ImmutableJournalSection: React.FC = () => {
  const { journalEntries, t, journalSection } = useLocale();
  const heading = t( journalSection.heading );

  const render = React.useCallback(
    (
      entry: {
        date: string;
        title: string;
        subtitle: string;
        text: string;
        url?: string;
        platform?: string;
      },
      idx: number,
    ) => (
      <div
        key={idx}
        className={`flex-shrink-0 min-w-[18rem] max-w-[18rem] bg-[#f5f8fe] rounded-[32px] shadow-lg p-1 h-[20rem] relative mb-3 border-[0.14rem] border-cyan-900 ${ entry.url ? 'cursor-pointer hover:shadow-xl transition-shadow duration-300' : ''
          }`}
        onClick={() =>
        {
          if ( entry.url )
          {
            window.open( entry.url, '_blank', 'noopener,noreferrer' );
          }
        }}
        onKeyDown={( e ) =>
        {
          if ( entry.url && ( e.key === 'Enter' || e.key === ' ' ) )
          {
            e.preventDefault();
            window.open( entry.url, '_blank', 'noopener,noreferrer' );
          }
        }}
        role={entry.url ? 'button' : undefined}
        tabIndex={entry.url ? 0 : undefined}
      >
        <div className="px-3 pt-3 h-[5rem]">
          <div className="text-[0.72rem] font-bold text-gray-400 mb-1">{entry.date}</div>
          <div
            className="text-[0.8rem] font-space-mono font-bold leading-relaxed text-black"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxHeight: '6.9rem',
            }}
          >
            {entry.title}
          </div>
        </div>
        <div className="flex flex-col items-start justify-between bg-white rounded-[27px] p-4 py-4 h-[14.25rem] border-[0.015rem] border-cyan-700">
          <span className="font-space-mono text-[1.3rem] font-bold leading-relaxed text-cyan-900">
            {entry.subtitle}
          </span>
          <span
            className="text-[0.78rem] font-share-tech-mono leading-relaxed text-gray-500 w-2/3"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 6,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxHeight: '13.9rem',
            }}
          >
            {entry.text}
          </span>
          {entry.url && entry.platform && (
            <div className="mt-2 flex items-center">
              <span className="text-xs text-cyan-600 font-medium">
                <span className="mr-1">
                  {entry.platform === 'Substack' ? '📧' : entry.platform === 'Medium' ? '📝' : '🔗'}
                </span>
                {entry.platform}
              </span>
            </div>
          )}
        </div>
      </div>
    ),
    [],
  );

  return (
    <section className="mx-4 xl:ml-56">
      <div className="mt-32 xl:mr-80 xl:max-w-[70rem] mb-8">
        <span className="font-share-tech-mono mb-16 text-left text-[1.9rem] font-bold wrap">
          {heading}
        </span>
      </div>
      <div className="overflow-x-auto ">
        <div className="flex flex-row gap-6 min-w-[700px]">{journalEntries.map(render)}</div>
      </div>
    </section>
  );
};
