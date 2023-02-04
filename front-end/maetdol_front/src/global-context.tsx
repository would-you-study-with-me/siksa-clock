import { createContext, useMemo, useState } from 'react';

type GlobalContext = {
  address: string;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
};

export const globalContext = createContext<GlobalContext>({
  address: '',
  setAddress: () => undefined,
});

export function GlobalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [address, setAddress] = useState('');

  const value = useMemo(
    () => ({
      address,
      setAddress,
    }),
    [address, setAddress],
  );

  return (
    <globalContext.Provider value={value}>{children}</globalContext.Provider>
  );
}
