import { LocalStorageKeys } from 'constants/localstorage-keys.constants';
import { useCallback, useState } from 'react';

function getLocalStorage(key: LocalStorageKeys) {
  const value = localStorage.getItem(key);
  return typeof value === 'string' ? JSON.parse(value) : undefined;
}

function setLocalStorage(key: LocalStorageKeys, value: string) {
  localStorage.setItem(key, value);
}

function removeLocalStorage(key: LocalStorageKeys) {
  localStorage.removeItem(key);
}

export function useLocalStorageState<T>(
  key: LocalStorageKeys,
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
