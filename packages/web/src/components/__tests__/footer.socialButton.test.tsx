import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { SocialButton } from '../footer.socialButton';

describe('SocialButton', () => {
  const links = [
    { text: 'Telegram', link: 'https://t.me/' },
    { text: 'Discord', link: 'https://discord.gg/' },
  ];
  it('рендерит все кнопки и aria-label', () => {
    render(<SocialButton links={links} />);
    links.forEach((l) => {
      expect(screen.getByLabelText(l.text)).toBeInTheDocument();
    });
  });
  it('клик вызывает window.open', () => {
    window.open = jest.fn();
    render(<SocialButton links={links} />);
    fireEvent.click(screen.getByLabelText('Telegram'));
    expect(window.open).toHaveBeenCalledWith('https://t.me/', '_blank');
  });
});
