import React from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { eventCenter } from '../analytics/eventCenter';
import { useLocale } from '../hooks/useLocale';
import './CardBuilder.css';
import { SectionWithViewEvent } from './SectionWithViewEvent';

export const CardBuilder = () =>
{
  const { cardBuilder } = useLocale();
  // Инициализация state: 0, чтобы не было выхода за пределы массива
  const [ state, setState ] = React.useState( 0 );
  const nodeRefs = React.useRef<( HTMLDivElement | null )[]>( [] );

  // cardBuilder — это массив, а не объект с полем listArrayBuilder
  const safeState =
    typeof state === 'number' &&
      cardBuilder &&
      state >= 0 &&
      state < cardBuilder.length
      ? state
      : 0;

  return (
    <SectionWithViewEvent eventName="view_card_builder">
      <div className="flex flex-col gap-2 md:flex-col-reverse">
        <div className="mt-3 flex flex-row flex-wrap items-start justify-start">
          {cardBuilder?.map( ( x: any, index: number ) => (
            <div
              onClick={() =>
              {
                eventCenter.logEvent( { category: 'click', name: 'card_builder_select', value: { index } } );
                setState( index );
              }}
              onKeyDown={( e ) =>
              {
                if ( e.key === 'Enter' || e.key === ' ' )
                {
                  eventCenter.logEvent( { category: 'click', name: 'card_builder_select', value: { index } } );
                  setState( index );
                }
              }}
              role="button"
              tabIndex={0}
              key={index}
              className="flex flex-row items-start justify-start cursor-pointer"
            >
              <span
                className={[
                  'jobs-header-desc leading-relaxed mb-0 mr-4 hover:scale-105 transition-all duration-300 cursor-pointer hover:text-cyan-700',
                  state === index ? 'text-cyan-900 font-bold' : 'text-gray-400',
                ].join( ' ' )}
              >
                {x.select}
              </span>
            </div>
          ) )}
        </div>
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={safeState}
            timeout={250}
            classNames="fade"
            nodeRef={{ current: nodeRefs.current[ safeState ] }}
          >
            <div
              ref={( el ) =>
              {
                nodeRefs.current[ safeState ] = el;
              }}
              className="
            -mx-4 flex flex-col overflow-hidden border-4 border-x-0
            border-cyan-700
            bg-[#F5F8FE] shadow-lg
            md:mx-0
            md:rounded-[34px]
            md:border-x-4 lg:flex-row
            "
            >
              <div className="flex w-full md:w-[32rem]">
                {( () =>
                {
                  // Безопасно обращаемся к элементу массива
                  const img = cardBuilder[ safeState ]?.img;
                  const jpg = typeof img === 'string' ? img : img?.jpg;
                  const webp = typeof img === 'object' && img?.webp;
                  return jpg ? (
                    <picture className="block h-[38rem] w-full md:w-[32rem]">
                      {webp && <source srcSet={webp} type="image/webp" />}
                      <source srcSet={jpg} type="image/jpeg" />
                      <img
                        src={jpg}
                        alt={cardBuilder.t ? cardBuilder.t( 'gettingStarted.alt' ) : ''}
                        className="block size-full bg-white object-cover"
                        loading="lazy"
                      />
                    </picture>
                  ) : null;
                } )()}
              </div>
              <div className="mx-4 flex flex-col py-4 pb-10">
                <span
                  className="jobs-header leading-relaxed text-black"
                  data-testid="cardbuilder-tab-title"
                >
                  {cardBuilder[ safeState ]?.title}
                </span>
                <span className="jobs-header-desc mb-4 text-cyan-700">
                  {cardBuilder[ safeState ]?.description}
                </span>
                <span
                  className="jobs-title leading-relaxed"
                  style={{ color: 'var(--color-text-gray-600)' }}
                >
                  {cardBuilder[ safeState ]?.responsibilitiesTitle}
                </span>
                {/* responsibilities */}
                {Array.isArray( cardBuilder[ safeState ]?.responsibilities ) &&
                  cardBuilder[ safeState ].responsibilities.map( ( x: string, index: number ) =>
                    x ? (
                      <div key={index} className="flex flex-row items-start justify-start">
                        <span className="jobs-desc pr-2 leading-relaxed text-gray-500">*</span>
                        <span className="jobs-desc leading-relaxed text-gray-500">
                          {x}
                        </span>
                      </div>
                    ) : null
                  )}
                {/* reward */}
                <span className="jobs-title leading-relaxed text-gray-600">
                  {cardBuilder[ safeState ]?.rewardTitle}
                </span>
                {Array.isArray( cardBuilder[ safeState ]?.rewards ) &&
                  cardBuilder[ safeState ].rewards.map( ( x: string, index: number ) =>
                    x ? (
                      <div key={index} className="flex flex-row items-start justify-start">
                        <span className="jobs-desc pr-2 leading-relaxed text-gray-500">*</span>
                        <span className="jobs-desc leading-relaxed text-gray-500">
                          {x}
                        </span>
                      </div>
                    ) : null
                  )}
                {/* addon */}
                {cardBuilder[ safeState ]?.addonTitle && (
                  <>
                    <span className="jobs-title leading-relaxed text-gray-600">
                      {cardBuilder[ safeState ]?.addonTitle}
                    </span>
                    {Array.isArray( cardBuilder[ safeState ]?.addons ) &&
                      cardBuilder[ safeState ].addons.map( ( x: string, index: number ) =>
                        x ? (
                          <div
                            key={index}
                            className="flex flex-row items-start justify-start"
                          >
                            <span className="jobs-desc pr-2 leading-relaxed text-gray-500">*</span>
                            <span className="jobs-desc leading-relaxed text-gray-500">
                              {x}
                            </span>
                          </div>
                        ) : null
                      )}
                  </>
                )}
              </div>
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </SectionWithViewEvent>
  );
};
