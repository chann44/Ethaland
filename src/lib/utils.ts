import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export enum TimePeriod {
  Daily = "daily",
  Yearly = "yearly",
}

export function calculateReturns(
  value: number,
  period: TimePeriod,
): { returns: number; percentage: number } {
  let yearlyReturn = 0.216; // Replace with your actual yearly return value

  if (period === TimePeriod.Daily) {
    let dailyReturn = yearlyReturn / 365;
    let returns = value * dailyReturn;
    let percentage = dailyReturn * 100;
    return { returns, percentage };
  } else if (period === TimePeriod.Yearly) {
    let returns = value * yearlyReturn;
    let percentage = yearlyReturn * 100;
    return { returns, percentage };
  } else {
    throw new Error("Invalid time period");
  }
}
