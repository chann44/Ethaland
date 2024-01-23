"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type AmountStoreContext = {
  amount: number | null;
  setAmount: Dispatch<SetStateAction<number | null>>;
};

const AmountStore = createContext<AmountStoreContext>({} as AmountStoreContext);

export function useAmount() {
  return useContext(AmountStore);
}

export function AmountStoreProvider({ children }: { children?: ReactNode }) {
  const [amount, setAmount] = useState<number | null>(1000);
  return (
    <AmountStore.Provider
      value={{
        amount,
        setAmount,
      }}
    >
      {children}
    </AmountStore.Provider>
  );
}
