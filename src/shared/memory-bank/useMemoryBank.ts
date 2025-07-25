import { useCallback } from 'react';
import { memoryBank, MemoryKey, MemoryValue } from './memoryBank';

// Хук для Cursor: доступ к memory bank
export function useMemoryBank() {
  const get = useCallback(<T = MemoryValue>(key: MemoryKey): T | undefined => {
    return memoryBank.get<T>(key);
  }, []);

  const set = useCallback((key: MemoryKey, value: MemoryValue) => {
    memoryBank.set(key, value);
  }, []);

  const remove = useCallback((key: MemoryKey) => {
    memoryBank.remove(key);
  }, []);

  const clear = useCallback(() => {
    memoryBank.clear();
  }, []);

  const getAll = useCallback(() => {
    return memoryBank.getAll();
  }, []);

  return { get, set, remove, clear, getAll };
}
