"use client";

import { HTMLAttributes, ReactNode, useState } from "react";
import { Icon, Icons } from "../icons";
import { cn } from "@/lib/utils";
import { Coin, useCoin, values } from "@/store/coin-store";

export function CurrencySelect() {
  const [open, setOpen] = useState(false);
  const { currentSelectedValue, setCurrentSelectedValue } = useCoin();
  return (
    <div className="relative flex w-max flex-col gap-y-2">
      <SelectTrigger onClick={() => setOpen(!open)}>
        {currentSelectedValue && (
          <currentSelectedValue.Icon className="h-7 w-7" />
        )}
      </SelectTrigger>
      <div
        className={cn("absolute top-[68px] hidden", open && "flex flex-col")}
      >
        {values.map((coin, index) => (
          <SelectItem
            key={index}
            value={coin.value}
            onChange={() => {
              setCurrentSelectedValue(coin);
              setOpen(false);
            }}
            currentSelectedValue={currentSelectedValue}
          >
            <coin.Icon className="h-7 w-7" />
            {coin.label}
          </SelectItem>
        ))}
      </div>
    </div>
  );
}

export function SelectTrigger({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "select flex h-16 w-24 items-center justify-center gap-4",
        className,
      )}
      {...props}
    >
      {children}
      <Icons.down />
    </button>
  );
}

type SelectItemProps = {
  currentSelectedValue?: Coin;
  onChange: (value: string) => void;
  children: ReactNode;
  value: string;
};

export function SelectItem(props: SelectItemProps) {
  return (
    <div
      role="button"
      onClick={() => props.onChange(props.value)}
      className={cn("flex gap-3 bg-banner px-4 py-2")}
    >
      {props.children}
    </div>
  );
}
