import React from 'react';
import { render, screen } from '@testing-library/react';
import { FooterColumnLinks } from '../footer.columnLinks';

describe('FooterColumnLinks', () => {
  const links = [
    { text: 'OpenSea', link: 'https://opensea.io' },
    { text: 'NFT', link: 'https://stargaze.zone' },
  ];
  it('рендерит все ссылки и aria-label', () => {
    render(<FooterColumnLinks links={links} title="Purchase & Get" />);
    links.forEach(l => {
      expect(screen.getByText(l.text)).toBeInTheDocument();
      expect(screen.getByLabelText(l.text)).toBeInTheDocument();
    });
  });
  it('snapshot', () => {
    const { asFragment } = render(<FooterColumnLinks links={links} title="Purchase & Get" />);
    expect(asFragment()).toMatchSnapshot();
  });
}); 