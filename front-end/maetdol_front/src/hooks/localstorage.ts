import { useCallback, useState } from 'react';

export const LOCAL_STORAGE_KEYS: { [key: string]: string } = {} as const;
export type LocalstorageKeys =
  typeof LOCAL_STORAGE_KEYS[keyof typeof LOCAL_STORAGE_KEYS];

function getLocalStorage(key: LocalstorageKeys) {
  return JSON.parse(localStorage.getItem(key) ?? '');
}

function setLocalStorage(key: LocalstorageKeys, value: string) {
  localStorage.setItem(key, value);
}

function removeLocalStorage(key: LocalstorageKeys) {
  localStorage.removeItem(key);
}

export function useLocalStorageState<T>(
  key: LocalstorageKeys,
  defaultValue: T,
  stringifier: (val: T) => string = v => JSON.stringify(v),
): [T, (val: T) => void, () => void] {
  const [value, setValue] = useState<T>(getLocalStorage(key) ?? defaultValue);

  const setValueAndStorage = useCallback(
    (v: T | ((prev: T) => T)) => {
      setValue(prev => {
        const newValue = v instanceof Function ? v(prev) : v;
        setLocalStorage(key, stringifier(newValue));

        return newValue;
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [key],
  );

  const clear = useCallback(() => removeLocalStorage(key), [key]);

  return [value, setValueAndStorage, clear];
}
