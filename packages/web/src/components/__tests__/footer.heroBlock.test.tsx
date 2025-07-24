import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { HeroBlock } from '../footer.heroBlock';

describe('HeroBlock', () => {
  const props = {
    title: 'CosmoFusion DAO',
    description: 'desc',
    buttonText: 'Work with us',
    buttonText2: 'Contact us',
    buttonLink: 'https://t.me/',
    buttonLink2: 'https://t.me/',
  };
  it('рендерит заголовок, описание и кнопки', () => {
    render(<HeroBlock {...props} />);
    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.description)).toBeInTheDocument();
    expect(screen.getByLabelText(props.buttonText)).toBeInTheDocument();
    expect(screen.getByLabelText(props.buttonText2)).toBeInTheDocument();
  });
  it('клик вызывает window.open', () => {
    window.open = jest.fn();
    render(<HeroBlock {...props} />);
    fireEvent.click(screen.getByLabelText(props.buttonText));
    expect(window.open).toHaveBeenCalledWith(props.buttonLink, '_blank');
  });
});
