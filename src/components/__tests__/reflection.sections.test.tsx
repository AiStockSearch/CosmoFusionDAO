import React from 'react';
import { render, screen } from '@testing-library/react';
import Reflections from '../reflection.sections';

describe('Reflections', () => {
  const reflectionsPageEn = {
    title: 'Reflection Title',
    intro: 'Reflection desc',
    biases: [
      { title: 'Bias1', description: 'Desc1' },
      { title: 'Bias2', description: 'Desc2' },
    ],
    quote: 'Quote',
    image: 'test.jpg',
  };
  it('рендерит заголовок, описание, список', () => {
    render(<Reflections type="reflection" />);
    expect(screen.getByText(reflectionsPageEn.title)).toBeInTheDocument();
    expect(screen.getByText(reflectionsPageEn.intro)).toBeInTheDocument();
    expect(screen.getByText('Bias1')).toBeInTheDocument();
    expect(screen.getByText('Bias2')).toBeInTheDocument();
    expect(screen.getByText('Quote')).toBeInTheDocument();
  });
});
