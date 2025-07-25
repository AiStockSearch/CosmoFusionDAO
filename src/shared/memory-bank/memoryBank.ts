// Memory bank для Cursor: хранит технический контекст разработки
// Не для пользовательских данных!

export type MemoryKey = string;
export type MemoryValue = unknown;

class MemoryBank {
  private store: Record<MemoryKey, MemoryValue> = {};

  get<T = MemoryValue>(key: MemoryKey): T | undefined {
    return this.store[key] as T;
  }

  set(key: MemoryKey, value: MemoryValue): void {
    this.store[key] = value;
  }

  remove(key: MemoryKey): void {
    delete this.store[key];
  }

  clear(): void {
    this.store = {};
  }

  getAll(): Record<MemoryKey, MemoryValue> {
    return { ...this.store };
  }
}

export const memoryBank = new MemoryBank();
