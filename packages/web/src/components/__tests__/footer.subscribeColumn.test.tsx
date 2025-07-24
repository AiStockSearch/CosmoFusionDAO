import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { SubscribeColumn } from '../footer.subscribeColumn';

describe('SubscribeColumn', () => {
  it('рендерит input и кнопку с aria-label', () => {
    render(<SubscribeColumn />);
    expect(screen.getByLabelText('Email address')).toBeInTheDocument();
    expect(screen.getByLabelText('Subscribe')).toBeInTheDocument();
  });
  it('можно ввести email', () => {
    render(<SubscribeColumn />);
    const input = screen.getByLabelText('Email address');
    fireEvent.change(input, { target: { value: 'test@example.com' } });
    expect(input.value).toBe('test@example.com');
  });
}); 