import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import LandingPage from '../LandingPage';
import { HelmetProvider } from 'react-helmet-async';

describe('LandingPage', () => {
  it('smoke test: рендерится без ошибок', () => {
    render(<HelmetProvider><LandingPage /></HelmetProvider>);
    const matches = screen.getAllByText(/CosmoFusion DAO/i);
    expect(matches.length).toBeGreaterThan(0);
  });
  it('присутствует Helmet', async () => {
    render(<HelmetProvider><LandingPage /></HelmetProvider>);
    await waitFor(() => expect(document.title).toMatch(/CosmoFusion DAO/i));
  });
}); 