import React from 'react';
import type { ProblemSectionProps as OrigProblemSectionProps } from './problem.sections';
import { useLocale } from '../hooks/useLocale';

// Поддержка image: string | {jpg: string, webp?: string}
type ImgType = string | { jpg: string; webp?: string };
interface ProblemSectionPropsFixed extends Omit<OrigProblemSectionProps, 'problemPageEn'> {
  problemPageEn: Omit<OrigProblemSectionProps['problemPageEn'], 'image'> & { image: ImgType };
}

export const ProblemImageSection: React.FC<ProblemSectionPropsFixed> = ({ problemPageEn }) => {
  const { t } = useLocale();
  const img: ImgType = problemPageEn.image;
  const jpg = typeof img === 'string' ? img : img?.jpg;
  return (
    <div className="xs:-mx-16 relative -ml-4 -mr-9 h-96 overflow-hidden md:mx-0 md:rounded-[34px] lg:h-[32rem] lg:min-w-[22rem] xl:-ml-52">
      {jpg && (
        <img
          src={jpg}
          alt={t('problem.alt')}
          className="flex h-96 w-screen object-cover shadow-sm lg:h-[32rem]"
          loading="lazy"
        />
      )}
    </div>
  );
};

export interface ReflectionsImageSectionProps {
  reflectionsPageEn: {
    image?: string | { jpg: string; webp?: string };
  };
}

export const ReflectionsImageSection: React.FC<ReflectionsImageSectionProps> = ({
  reflectionsPageEn,
}) => {
  const { t } = useLocale();
  const img: ImgType | undefined = reflectionsPageEn.image;
  const jpg = typeof img === 'string' ? img : img?.jpg;
  return (
    <div className="xs:-mx-16 relative -ml-4 -mr-9 h-96 overflow-hidden md:mx-0 md:rounded-[34px] lg:h-[32rem] lg:min-w-[22rem] xl:-mr-52">
      {jpg && (
        <img
          src={jpg}
          alt={t('reflection.alt')}
          className="flex h-96 w-screen object-cover shadow-sm lg:h-[32rem]"
          loading="lazy"
        />
      )}
    </div>
  );
};

export const SolutionImageSection: React.FC<ProblemSectionPropsFixed> = ({ problemPageEn }) => {
  const { t } = useLocale();
  const img: ImgType = problemPageEn.image;
  const jpg = typeof img === 'string' ? img : img?.jpg;
  return (
    <div className="xs:-mx-16 relative -ml-4 -mr-9 h-96 overflow-hidden md:mx-0 md:rounded-[34px] lg:h-[32rem] lg:min-w-[22rem] xl:-ml-52">
      {jpg && (
        <img
          src={jpg}
          alt={t('solution.alt')}
          className="flex h-96 w-screen object-cover shadow-sm lg:h-[32rem]"
          loading="lazy"
        />
      )}
    </div>
  );
};

export const EvolutionImageSection: React.FC<ProblemSectionPropsFixed> = ({ problemPageEn }) => {
  const { t } = useLocale();
  const img: ImgType = problemPageEn.image;
  const jpg = typeof img === 'string' ? img : img?.jpg;
  return (
    <div className="xs:-mx-16 relative -ml-4 -mr-9 h-96 overflow-hidden md:mx-0 md:rounded-[34px] lg:h-[32rem] lg:min-w-[22rem] xl:-ml-52">
      {jpg && (
        <img
          src={jpg}
          alt={t('evolution.alt')}
          className="flex h-96 w-screen object-cover shadow-sm lg:h-[32rem]"
          loading="lazy"
        />
      )}
    </div>
  );
};

export const GovernanceImageSection: React.FC<ProblemSectionPropsFixed> = ({ problemPageEn }) => {
  const { t } = useLocale();
  const img: ImgType = problemPageEn.image;
  const jpg = typeof img === 'string' ? img : img?.jpg;
  return (
    <div className="xs:-mx-16 relative -ml-4 -mr-9 h-96 overflow-hidden md:mx-0 md:rounded-[34px] lg:h-[32rem] lg:min-w-[22rem] xl:-ml-52">
      {jpg && (
        <img
          src={jpg}
          alt={t('governance.alt')}
          className="flex h-96 w-screen object-cover shadow-sm lg:h-[32rem]"
          loading="lazy"
        />
      )}
    </div>
  );
};
