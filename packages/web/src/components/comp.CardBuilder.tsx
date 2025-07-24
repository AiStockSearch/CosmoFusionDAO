import React from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "./CardBuilder.css";
import { listArrayBuilder } from "../content/jobBuilder";

export const CardBuilder = () => {
  const [state, setState] = React.useState(5);
  const nodeRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  return (
    <>
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
            bg-[#F5F8FE] -mx-4 shadow-lg overflow-hidden border-l-0 border-r-0
            flex-col
            border-4 border-cyan-700
            md:border-l-4
            md:border-r-4
            md:rounded-[34px] md:mx-0
            lg:flex-row
            flex
            "
          >
            <div className="flex w-full md:w-[32rem] ">
            <img
              src={listArrayBuilder[state].img}
              alt="getting-started"
                className="object-cover bg-white h-[34rem] w-full xs:rounded-br-[30px]"
              />
            </div>
            <div className="flex flex-col mx-4 py-4 pb-10">
              <span className="jobs-header leading-relaxed text-black">
                {listArrayBuilder[state].title.en}
              </span>
              <span className="jobs-header-desc mb-4 text-cyan-700">
                {listArrayBuilder[state].description.en}
              </span>
              <span
                className="jobs-title leading-relaxed"
                style={{ color: "var(--color-text-gray-600)" }}
              >
                {listArrayBuilder[state].arrTitle.en}
              </span>
              {listArrayBuilder[state]?.arr?.map((x) => (
                <div
                  key={x.en}
                  className="flex flex-row items-start justify-start"
                >
                  <span className="jobs-desc leading-relaxed pr-2 text-gray-500">
                    *
                  </span>
                  <span className="jobs-desc leading-relaxed text-gray-500">
                    {x.en}
                  </span>
                </div>
              ))}
              <span className="jobs-title leading-relaxed text-gray-600">
                {listArrayBuilder[state].rewardTitle.en}
              </span>
              {listArrayBuilder[state]?.reward?.map((x) => (
                <div
                  key={x.en}
                  className="flex flex-row items-start justify-start"
                >
                  <span className="jobs-desc leading-relaxed pr-2 text-gray-500">
                    *
                  </span>
                  <span className="jobs-desc leading-relaxed text-gray-500">
                    {x.en}
                  </span>
                </div>
              ))}
              {listArrayBuilder?.[state]?.addonTitle && (
                <>
                  <span className="jobs-title leading-relaxed text-gray-600">
                    {listArrayBuilder[state].addonTitle.en}
                  </span>
                  {listArrayBuilder[state]?.addon &&
                    listArrayBuilder?.[state]?.addon?.map((x) => (
                      <div
                        key={x.en}
                        className="flex flex-row items-start justify-start"
                      >
                        <span className="jobs-desc leading-relaxed pr-2 text-gray-500">
                          *
                        </span>
                        <span className="jobs-desc leading-relaxed text-gray-500">
                          {x.en}
                        </span>
                      </div>
                    ))}
                </>
              )}
            </div>
          </div>
        </CSSTransition>
      </SwitchTransition>
      <div className="flex flex-row items-start justify-start mt-3">
        {listArrayBuilder.map((x, index) => (
          <div
            onClick={() => setState(index)}
            key={index}
            className="flex flex-row items-start justify-start "
          >
            <span
              className={[
                "jobs-header-desc leading-relaxed mb-0 mr-4 hover:scale-105 transition-all duration-300 cursor-pointer hover:text-cyan-700",
                state === index ? "text-cyan-900 font-bold" : "text-gray-400",
              ].join(" ")}
            >
              {x.select.en}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};
