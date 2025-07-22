import type React from "react";
import type { ProblemSectionProps } from "./problem.sections";

export const ProblemHelperSection: React.FC<ProblemSectionProps> = ( { problemPageEn } ) =>
{
  return (
    <div >
      {problemPageEn?.arr?.title && (
        <div className="flex flex-col bg-gray-200 p-2 rounded-[34px] shadow-xl -mx-6 w-[360px] shadow-xs">
          <div className="bg-white rounded-[30px] px-4 py-4 ">
            <span className="hero-list-title">{problemPageEn?.arr?.title}</span>
            {problemPageEn?.arr?.list.map( ( x, idx ) =>
            {
              return (
                <div
                  className="flex flex-row items-start justify-start"
                  key={idx}
                >
                  <span className="hero-list-bullet"> * </span>
                  <span className="hero-list-item">{x}</span>
                </div>
              );
            } )}
          </div>
        </div>
      )}
    </div>
  );
};
