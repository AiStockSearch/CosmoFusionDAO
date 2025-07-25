import { memoryBank } from '../memoryBank';

describe('memoryBank', () => {
  afterEach(() => {
    memoryBank.clear();
  });

  it('set и get работают корректно', () => {
    memoryBank.set('key', 123);
    expect(memoryBank.get('key')).toBe(123);
  });

  it('remove удаляет ключ', () => {
    memoryBank.set('key', 'value');
    memoryBank.remove('key');
    expect(memoryBank.get('key')).toBeUndefined();
  });

  it('clear очищает все значения', () => {
    memoryBank.set('a', 1);
    memoryBank.set('b', 2);
    memoryBank.clear();
    expect(memoryBank.get('a')).toBeUndefined();
    expect(memoryBank.get('b')).toBeUndefined();
  });

  it('getAll возвращает все значения', () => {
    memoryBank.set('x', 10);
    memoryBank.set('y', 20);
    expect(memoryBank.getAll()).toEqual({ x: 10, y: 20 });
  });
});
