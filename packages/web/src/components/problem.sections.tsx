import React from "react";

interface ProblemSectionProps
{
  problemPageEn: {
    title: string;
    intro: string;
    problems: {
      title: string;
      description: string;
    }[];
    quote: string;
    image: string;
    process?: {
      title: string;
      steps: string[];
    };
    arr?: {
      title: string;
      list: string[];
    };
  };
}

const ProblemSection: React.FC<ProblemSectionProps> = ( { problemPageEn } ) =>
{
  return (
    <div className="relative">
      <section className="w-screen grid grid-cols-[0.5fr_1fr_0.5fr_0.1fr_300px_0.1fr]  grid-rows-[600px_1fr] my-16">
        <div className="col-start-1 col-end-3 row-span-1 overflow-hidden mt-10 rounded-r-[34px] overflow-hidden mb-10">
          <img
            src={problemPageEn.image}
            alt="astronaut alone"
            className="flex w-screen h-[34rem] object-cover shadow-sm"
          />
        </div>
        <div className="col-start-3 col-end-4 row-start-1 row-end-1">
          <div className="flex flex-col items-start mt-10 bg-white w-[550px] pl-12 gap-4">
            <span className="problem-title text-[2.6rem] text-left mb-4 font-bold font-share-tech-mono" style={{ color: 'var(--color-text-gray-900)' }}>
              {problemPageEn.title}
            </span>
            <p className="problem-desc text-left text-[0.9rem] leading-relaxed font-space-mono" style={{ color: 'var(--color-text-gray-600)' }}>
              {problemPageEn.intro}
            </p>
           
            {problemPageEn.process && (
              <div className="flex flex-col items-start justify-start border-2 rounded-md p-2 px-4" style={{ borderColor: 'var(--color-border-cyan-700)' }}>
                <span className="hero-title text-[0.9rem] mb-2" style={{ color: 'var(--color-text-gray-900)' }}>
                  {problemPageEn.process.title}
                </span>
                <ul className="list-disc list-inside">
                  {problemPageEn.process.steps.map( ( step, idx ) => (
                    <li key={idx} className="text-[0.8rem] font-share-tech-mono leading-relaxed mb-2 hover:font-bold" style={{ color: 'var(--color-text-cyan-700)' }}>
                      {step}
                    </li>
                  ) )}
                </ul>
              </div>
            )}
           
          </div>
        </div>
        <div className="col-start-2 col-end-4 row-start-2 row-end-2">
          <div className="my-4">
            <span className="hero-title text-[1.2rem] leading-relaxed" style={{ color: 'var(--color-text-cyan-900)' }}>
              {problemPageEn.quote}
            </span>
          </div>
          {problemPageEn.problems.map( ( x, idx ) =>
          {
            return (
              <div
                className="flex flex-col items-start justify-start"
                key={idx}
              >
                <span className="hero-title text-[1.2rem] mb-2" style={{ color: 'var(--color-text-gray-900)' }}>
                  {x.title}
                </span>
                <span className="hero-desc text-[0.9rem] leading-relaxed mb-4" style={{ color: 'var(--color-text-gray-600)' }}>
                  {x.description}
                </span>
              </div>
            );
          } )}
        </div>
      </section>
      {problemPageEn?.arr?.title && <div className="flex flex-col bg-gray-200 p-2 rounded-[34px] shadow-xl -mx-6 w-[360px] absolute bottom-14 right-20 shadow-xs">
        <div className="bg-white rounded-[30px] px-4 py-4 " >
          <span className="hero-list-title">
            {problemPageEn?.arr?.title}
          </span>
          {problemPageEn?.arr?.list.map( ( x, idx ) =>
          {
            return (
              <div className="flex flex-row items-start justify-start" key={idx}>
                <span className="hero-list-bullet"> * </span>
                <span className="hero-list-item">{x}</span>
              </div>
            );
          } )}
        </div>
      </div>}
    </div>
  );
};

export default ProblemSection;
