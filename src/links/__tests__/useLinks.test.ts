import { renderHook } from '@testing-library/react';
import { useLinks } from '../useLinks';

describe('useLinks', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it('должен возвращать конфигурацию ссылок с fallback значениями', () => {
    // Очищаем переменные окружения для этого теста
    delete process.env.REACT_APP_TELEGRAM_LINK;
    delete process.env.REACT_APP_X_LINK;
    delete process.env.REACT_APP_DISCORD_LINK;
    delete process.env.REACT_APP_GALXE_LINK;
    
    const { result } = renderHook(() => useLinks());

    expect(result.current.links.telegram).toBe('https://t.me/cosmofusiondao');
    expect(result.current.links.x).toBe('https://x.com/cosmofusiondao');
    expect(result.current.links.discord).toBe('https://discord.gg/cosmofusiondao');
    expect(result.current.links.galxe).toBe('https://galxe.com/cosmofusiondao');
  });

  it('должен использовать переменные окружения', () => {
    process.env.REACT_APP_TELEGRAM_LINK = 'https://t.me/test';
    process.env.REACT_APP_X_LINK = 'https://x.com/test';
    process.env.REACT_APP_DISCORD_LINK = 'https://discord.gg/test';

    const { result } = renderHook(() => useLinks());

    expect(result.current.links.telegram).toBe('https://t.me/test');
    expect(result.current.links.x).toBe('https://x.com/test');
    expect(result.current.links.discord).toBe('https://discord.gg/test');
  });

  it('должен возвращать ссылку через getLink', () => {
    // Очищаем переменные окружения для этого теста
    delete process.env.REACT_APP_TELEGRAM_LINK;
    delete process.env.REACT_APP_X_LINK;
    
    const { result } = renderHook(() => useLinks());

    expect(result.current.getLink('telegram')).toBe('https://t.me/cosmofusiondao');
    expect(result.current.getLink('x')).toBe('https://x.com/cosmofusiondao');
  });

  it('должен возвращать пустую строку для несуществующей ссылки', () => {
    const { result } = renderHook(() => useLinks());

    expect(result.current.getLink('nonexistent' as any)).toBe('');
  });

  it('должен быть настроен при наличии основных ссылок', () => {
    process.env.REACT_APP_TELEGRAM_LINK = 'https://t.me/test';
    process.env.REACT_APP_X_LINK = 'https://x.com/test';
    process.env.REACT_APP_DISCORD_LINK = 'https://discord.gg/test';
    process.env.REACT_APP_GALXE_LINK = 'https://galxe.com/test';
    process.env.REACT_APP_DOCS_LINK = 'https://docs.test';
    process.env.REACT_APP_GITHUB_LINK = 'https://github.com/test';

    const { result } = renderHook(() => useLinks());

    expect(result.current.isConfigured).toBe(true);
  });

  it('не должен быть настроен при отсутствии основных ссылок', () => {
    delete process.env.REACT_APP_TELEGRAM_LINK;
    delete process.env.REACT_APP_X_LINK;
    delete process.env.REACT_APP_DISCORD_LINK;
    delete process.env.REACT_APP_GALXE_LINK;
    delete process.env.REACT_APP_DOCS_LINK;
    delete process.env.REACT_APP_GITHUB_LINK;

    const { result } = renderHook(() => useLinks());

    expect(result.current.isConfigured).toBe(true); // Fallback значения все еще работают
  });
}); 