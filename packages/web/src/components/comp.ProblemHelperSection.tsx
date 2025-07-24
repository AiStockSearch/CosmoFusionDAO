import type React from 'react';
import type { ProblemSectionProps } from './problem.sections';
import type { ReflectionsProps } from './reflection.sections';

export const ProblemHelperSection: React.FC<ProblemSectionProps> = ({ problemPageEn }) => {
  return (
    <div>
      {problemPageEn?.arr?.title && (
        <div className="shadow-xs -mx-6 flex w-[360px] flex-col rounded-[34px] bg-gray-200 p-2 shadow-xl">
          <div className="rounded-[30px] bg-white p-4 ">
            <span className="hero-list-title">{problemPageEn?.arr?.title}</span>
            {problemPageEn?.arr?.list.map((x, idx) => {
              return (
                <div className="flex flex-row items-start justify-start" key={idx}>
                  <span className="hero-list-bullet"> * </span>
                  <span className="hero-list-item">{x}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export const ReflectionsHelperSection: React.FC<ReflectionsProps> = ({ reflectionsPageEn }) => {
  return (
    <div>
      {reflectionsPageEn?.arr?.title && (
        <div className="shadow-xs -mx-6 flex w-[360px] flex-col rounded-[34px] bg-gray-200 p-2 shadow-xl">
          <div className="rounded-[30px] bg-white p-4 ">
            <span className="hero-list-title">{reflectionsPageEn?.arr?.title}</span>
            {reflectionsPageEn?.arr?.list.map((x, idx) => {
              return (
                <div className="flex flex-row items-start justify-start" key={idx}>
                  <span className="hero-list-bullet"> * </span>
                  <span className="hero-list-item">{x}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
