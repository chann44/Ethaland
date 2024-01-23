"use client";

import { Icons } from "@/components/icons";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

export type Coin = {
  label: string;
  value: string;
  Icon: any;
};

export const values: Coin[] = [
  {
    label: "DAI",
    value: "dai",
    Icon: Icons.Dcoin,
  },
  {
    label: "ETH",
    value: "eth",
    Icon: Icons.Eth,
  },
  {
    label: "USDT",
    value: "usdt",
    Icon: Icons.Ticon,
  },
];

type CoinStoreContext = {
  currentSelectedValue: Coin;
  setCurrentSelectedValue: Dispatch<SetStateAction<Coin>>;
};

const CoinStore = createContext<CoinStoreContext>({} as CoinStoreContext);

export function useCoin() {
  return useContext(CoinStore);
}

export function CoinStoreProvider({ children }: { children?: ReactNode }) {
  const [currentSelectedValue, setCurrentSelectedValue] = useState<Coin>(
    values[0]!,
  );
  return (
    <CoinStore.Provider
      value={{
        currentSelectedValue,
        setCurrentSelectedValue,
      }}
    >
      {children}
    </CoinStore.Provider>
  );
}
