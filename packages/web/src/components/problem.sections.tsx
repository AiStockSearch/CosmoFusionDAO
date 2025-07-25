import React from 'react';
import { ProblemAddonSection } from './comp.ProblemAddonSection';
import { ProblemHelperSection } from './comp.ProblemHelperSection';
import { ProblemImageSection } from './comp.ProblemImageSection';
import { ProblemMainSection } from './comp.ProblemMainSection';
import { useLocale } from '../hooks/useLocale';

export interface ProblemSectionProps {
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

const ProblemSection: React.FC = () => {
  const { problemSection } = useLocale();
  return (
    <section className="relative my-32">
      <div className="ml-4 mr-8 xl:ml-56 xl:mr-80 xl:max-w-[70rem]">
        <div className="flex flex-col items-start justify-start">
          <div className="flex flex-col-reverse items-start justify-start lg:flex-row">
            <ProblemImageSection problemPageEn={problemSection} />
            <ProblemMainSection problemPageEn={problemSection} />
          </div>
          <ProblemAddonSection problemPageEn={problemSection} />
        </div>
      </div>
      <div className="hidden xl:absolute xl:bottom-20 xl:right-16 xl:block">
        <ProblemHelperSection problemPageEn={problemSection} />
      </div>
    </section>
  );
};

export default ProblemSection;
