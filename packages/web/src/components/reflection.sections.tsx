import React from "react";

interface ReflectionsProps
{
  reflectionsPageEn: {
    title: string;
    intro: string;
    biases: {
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

const Reflections: React.FC<ReflectionsProps> = ( { reflectionsPageEn } ) =>
{
  return (
    <>
      <section className="w-screen grid grid-cols-[0.5fr_0.5fr_1fr_0.1fr_150px_150px_0.1fr]  grid-rows-[600px_1fr] my-16">
        <div className="col-start-3 col-end-6 row-span-1 overflow-hidden mt-10 rounded-[34px] overflow-hidden mb-10">
          <img
            src={reflectionsPageEn.image}
            alt="astronaut alone"
            className="flex w-screen h-[700px] object-cover shadow-sm"
          />
        </div>
        <div className="col-start-2 col-end-3 row-start-1 row-end-1">
          <div className="flex flex-col items-start mt-10 bg-white w-[550px] pr-12 gap-4">
            <span className="text-[2.6rem] text-left mb-4 font-bold font-share-tech-mono">
              {reflectionsPageEn.title}
            </span>
            <span className="text-left text-[0.9rem] leading-relaxed font-space-mono text-gray-600">
              {reflectionsPageEn.intro}
            </span>
            {reflectionsPageEn.process && (
              <div className="flex flex-col items-start justify-start border-2 border-cyan-700 rounded-md p-2 px-4">
                <span className="hero-title text-[0.9rem] text-gray-900 mb-2">
                  {reflectionsPageEn.process.title}
                </span>
                <ul className="list-disc list-inside">
                  {reflectionsPageEn.process.steps.map( ( step, idx ) => (
                    <li key={idx} className="text-[0.8rem] font-share-tech-mono text-cyan-700 leading-relaxed mb-2 hover:text-gray-500 cursor-pointer hover:font-bold">
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
            <span className="hero-title text-cyan-900 leading-relaxed">
              {reflectionsPageEn.quote}
            </span>
          </div>
          {reflectionsPageEn.biases.map( ( x, idx ) =>
          {
            return (
              <div
                className="flex flex-col items-start justify-start"
                key={idx}
              >
                <span className="hero-title text-2xl text-gray-900 mb-2">
                  {x.title}
                </span>
                <span className="hero-desc leading-relaxed mb-4">
                  {x.description}
                </span>
              </div>
            );
          } )}
        </div>
      </section>
      {reflectionsPageEn?.arr?.title && <div className="flex flex-col bg-gray-200 p-2 rounded-[34px] shadow-xl -mx-6 w-[360px] absolute bottom-14 right-20 shadow-xs">
        <div className="bg-white rounded-[30px] px-4 py-4 " >
          <span className="hero-list-title">
            {reflectionsPageEn?.arr?.title}
          </span>
          {reflectionsPageEn?.arr?.list.map( ( x, idx ) =>
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
    </>
  );
};

export default Reflections;
