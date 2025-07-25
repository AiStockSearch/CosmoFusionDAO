import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroSection from '../hero.section';
import { SectionAnchorProvider } from '../SectionAnchorContext';

describe('HeroSection', () => {
  const heroPageEn = {
    title: 'Hero Title',
    subtitle: 'Subtitle',
    description: 'Description',
    cta: 'CTA',
    visual: { type: 'image' },
    idea: { title: 'Idea', description: 'Idea desc' },
    hypotize: { title: 'Hypothesis', description: 'Hypothesis desc' },
    arr: { title: 'List', list: ['A', 'B'] },
  };
  it('рендерит заголовок, описание, список', () => {
    render(
      <SectionAnchorProvider>
        <HeroSection heroPageEn={heroPageEn} />
      </SectionAnchorProvider>,
    );
    expect(screen.getByText(heroPageEn.idea.title)).toBeInTheDocument();
    expect(screen.getByText(heroPageEn.idea.description)).toBeInTheDocument();
    expect(screen.getByText(heroPageEn.hypotize.title)).toBeInTheDocument();
    expect(screen.getByText(heroPageEn.hypotize.description)).toBeInTheDocument();
    expect(screen.getAllByText('A').length).toBeGreaterThan(0);
    expect(screen.getAllByText('B').length).toBeGreaterThan(0);
  });
});
