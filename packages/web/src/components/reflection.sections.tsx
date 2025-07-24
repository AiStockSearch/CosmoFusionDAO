import React from 'react';
import { ReflectionsAddonSection } from './comp.ProblemAddonSection';
import { ReflectionsHelperSection } from './comp.ProblemHelperSection';
import { ReflectionsImageSection } from './comp.ProblemImageSection';
import { ReflectionsMainSection } from './comp.ProblemMainSection';
import { useLocale } from '../hooks/useLocale';

export interface ReflectionsProps {
  reflectionsPageEn: {
    title: string;
    intro: string;
    biases: {
      title: string;
      description: string;
    }[];
    quote: string;
    image: string | { jpg: string; webp?: string };
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

const Reflections: React.FC<ReflectionsProps> = ({ reflectionsPageEn }) => {
  return (
    <>
      <section className="relative my-32">
        <div className="ml-4 mr-8 xl:ml-56 xl:mr-80 xl:max-w-[70rem]">
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-col items-start justify-start lg:flex-row">
              <ReflectionsMainSection reflectionsPageEn={reflectionsPageEn as any} />
              <ReflectionsImageSection reflectionsPageEn={reflectionsPageEn as any} />
            </div>
            <ReflectionsAddonSection reflectionsPageEn={reflectionsPageEn as any} />
          </div>
        </div>
        <div className="hidden xl:absolute xl:bottom-20 xl:right-16 xl:block">
          <ReflectionsHelperSection reflectionsPageEn={reflectionsPageEn as any} />
        </div>
      </section>
    </>
  );
};

export default Reflections;

export const LocalReflectionsImageSection: React.FC<ReflectionsProps> = ({ reflectionsPageEn }) => {
  const { t } = useLocale();
  const img = reflectionsPageEn.image;
  const jpg = typeof img === 'string' ? img : img?.jpg;
  return (
    <div className="xs:-mx-16 relative -ml-4 -mr-9 h-96 overflow-hidden md:mx-0 md:rounded-[34px] lg:h-[32rem] lg:min-w-[22rem] xl:-mr-52">
      {jpg && (
        <img
          src={jpg}
          alt={t('reflection.alt')}
          className="flex h-96 w-screen object-cover shadow-sm lg:h-[32rem]"
        />
      )}
    </div>
  );
};
