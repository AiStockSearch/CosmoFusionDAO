import React from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import './CardBuilder.css';
import { listArrayBuilder } from '../content/jobBuilder';
import { useLocale } from '../hooks/useLocale';

export const CardBuilder = () => {
  const [state, setState] = React.useState(5);
  const nodeRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const { t } = useLocale();

  return (
    <div className="flex flex-col gap-2 md:flex-col-reverse">
      <div className="mt-3 flex flex-row flex-wrap items-start justify-start">
        {listArrayBuilder.map((x, index) => (
          <div
            onClick={() => setState(index)}
            key={index}
            className="flex flex-row items-start justify-start "
          >
            <span
              className={[
                'jobs-header-desc leading-relaxed mb-0 mr-4 hover:scale-105 transition-all duration-300 cursor-pointer hover:text-cyan-700',
                state === index ? 'text-cyan-900 font-bold' : 'text-gray-400',
              ].join(' ')}
            >
              {x.select.en}
            </span>
          </div>
        ))}
      </div>
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={state}
          timeout={250}
          classNames="fade"
          nodeRef={{ current: nodeRefs.current[state] }}
        >
          <div
            ref={(el) => {
              nodeRefs.current[state] = el;
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
              {(() => {
                const img = listArrayBuilder[state].img;
                const jpg = typeof img === 'string' ? img : img?.jpg;
                const webp = typeof img === 'object' && img?.webp;
                return jpg ? (
                  <picture className="block h-[38rem] w-full md:w-[32rem]">
                    {webp && <source srcSet={webp} type="image/webp" />}
                    <source srcSet={jpg} type="image/jpeg" />
                    <img
                      src={jpg}
                      alt={t('gettingStarted.alt')}
                      className="block size-full bg-white object-cover"
                      loading="lazy"
                    />
                  </picture>
                ) : null;
              })()}
            </div>
            <div className="mx-4 flex flex-col py-4 pb-10">
              <span
                className="jobs-header leading-relaxed text-black"
                data-testid="cardbuilder-tab-title"
              >
                {listArrayBuilder[state].title.en}
              </span>
              <span className="jobs-header-desc mb-4 text-cyan-700">
                {listArrayBuilder[state].description.en}
              </span>
              <span
                className="jobs-title leading-relaxed"
                style={{ color: 'var(--color-text-gray-600)' }}
              >
                {listArrayBuilder[state].arrTitle.en}
              </span>
              {listArrayBuilder[state]?.arr?.map((x) => (
                <div key={x.en} className="flex flex-row items-start justify-start">
                  <span className="jobs-desc pr-2 leading-relaxed text-gray-500">*</span>
                  <span className="jobs-desc leading-relaxed text-gray-500">{x.en}</span>
                </div>
              ))}
              <span className="jobs-title leading-relaxed text-gray-600">
                {listArrayBuilder[state].rewardTitle.en}
              </span>
              {listArrayBuilder[state]?.reward?.map((x) => (
                <div key={x.en} className="flex flex-row items-start justify-start">
                  <span className="jobs-desc pr-2 leading-relaxed text-gray-500">*</span>
                  <span className="jobs-desc leading-relaxed text-gray-500">{x.en}</span>
                </div>
              ))}
              {listArrayBuilder?.[state]?.addonTitle && (
                <>
                  <span className="jobs-title leading-relaxed text-gray-600">
                    {listArrayBuilder[state].addonTitle.en}
                  </span>
                  {listArrayBuilder[state]?.addon &&
                    listArrayBuilder?.[state]?.addon?.map((x) => (
                      <div key={x.en} className="flex flex-row items-start justify-start">
                        <span className="jobs-desc pr-2 leading-relaxed text-gray-500">*</span>
                        <span className="jobs-desc leading-relaxed text-gray-500">{x.en}</span>
                      </div>
                    ))}
                </>
              )}
            </div>
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};
