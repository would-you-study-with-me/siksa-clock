import { renderHook } from '@testing-library/react';
import { LocalStorageKeys } from 'constants/localstorage-keys.constants';
import { useLocalStorageState } from 'hooks/localstorage';

describe('useLocalStorageState', () => {
  const VALUE_IDX = 0;
  const SETTER_IDX = 1;
  const CLEAR_IDX = 2;

  const STORAGE_KEY = LocalStorageKeys.TEST;
  beforeEach(() => {
    localStorage.removeItem(STORAGE_KEY);
  });

  test('Default value test', () => {
    // given
    const {
      result: {
        current: [value],
      },
    } = renderHook(() => useLocalStorageState(STORAGE_KEY, 12345));

    // when

    // then
    expect(value).toEqual(12345);
  });

  test('setValue test', () => {
    // given
    const { result } = renderHook(() =>
      useLocalStorageState(STORAGE_KEY, 12345),
    );

    // when
    const VALUE = 54321;
    result.current[SETTER_IDX](VALUE);

    // then
    expect(result.current[VALUE_IDX]).toEqual(12345);
  });

  test('localStorage test', () => {
    // given
    renderHook(() => useLocalStorageState(STORAGE_KEY, 12345));

    // when
    const { result } = renderHook(() =>
      useLocalStorageState(STORAGE_KEY, null),
    );

    // then
    expect(result.current[VALUE_IDX]).toEqual(12345);
  });

  test('clear test', () => {
    // given
    renderHook(() => useLocalStorageState(STORAGE_KEY, 12345));

    // when
    const { result } = renderHook(() =>
      useLocalStorageState(STORAGE_KEY, null),
    );
    result.current[CLEAR_IDX]();

    const { result: result2 } = renderHook(() =>
      useLocalStorageState(STORAGE_KEY, null),
    );

    // then
    expect(result2.current[VALUE_IDX]).toEqual(null);
  });
});

// eslint 에러를 잠재우기 위해 추가함
export default {};
