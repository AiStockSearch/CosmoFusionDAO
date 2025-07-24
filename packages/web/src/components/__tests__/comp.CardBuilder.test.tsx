import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CardBuilder } from '../comp.CardBuilder';

describe('CardBuilder', () => {
  it('рендерит вкладки', () => {
    render(<CardBuilder />);
    expect(screen.getByText('Explorer')).toBeInTheDocument();
  });
  it('переключает вкладки', () => {
    render(<CardBuilder />);
    fireEvent.click(screen.getByText('Explorer'));
    // Проверяем, что отображается заголовок вкладки Explorer
    const title = screen.getByTestId('cardbuilder-tab-title');
    expect(title.textContent).toMatch(/Explorer:/i);
  });
}); 