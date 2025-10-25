import { useState, useEffect } from 'react';
import { storageService } from '../services/storageService';

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [value, setValue] = useState<T>(() => {
    const storedValue = storageService.get<T>(key);
    return storedValue ?? initialValue;
  });

  useEffect(() => {
    storageService.set(key, value);
  }, [key, value]);

  return [value, setValue] as const;
};

