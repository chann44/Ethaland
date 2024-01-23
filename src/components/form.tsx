"use client";

import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

import { Separator } from "./ui/seprator";
import { Icons } from "@/components/icons";

import { CurrencySelect } from "@/components/ui/select";
import { HelpTooltip } from "@/components/help-tooltip";

import { useAmount } from "@/store/ammount-store";

const VaultMetricData = {
  apy: {
    label: "Current APY",
    value: "55.3%",
    tooltip: true,
  },
  value: {
    label: "Value locked",
    value: "$24.1M",
    tooltip: true,
  },
  Volatility: {
    label: "Volatility",
    value: "Low",
    tooltip: false,
  },
};

const benefits = [
  "Use your low-volatility assets (stable coins) to get exposure to high-volatility assets",
  "Yield earned on your stable assets is continuously swapped for a volatile asset and distributed back to you",
];

export function Form() {
  const { amount, setAmount } = useAmount();
  return (
    <div className="w-full max-w-sm py-10">
      <div className="flex flex-col gap-y-4">
        <label htmlFor="amount">Amount</label>
        <div className="flex w-full gap-2.5">
          <CurrencySelect />
          <div className="flex gap-2.5 overflow-hidden">
            <input
              onChange={(e) => {
                setAmount(Number(e.target.value));
              }}
              value={amount?.toString()}
              type="text"
              className="input shrink rounded-xl px-4 text-2xl text-foreground  focus:border-none focus:outline-none md:w-[250px]"
            />
            <Icons.rightArrow className="hidden w-max shrink-0 self-center md:block" />
          </div>
        </div>
      </div>
      <Separator className="mb-9 mt-14 " />
      <VaultMetricsData />
      <div className="mt-14 flex flex-col gap-y-4">
        <h3 className="text-lg font-medium">Benefits</h3>
        <div className="flex flex-col gap-y-5">
          {benefits.map((item, index) => (
            <BenefitItem key={index}>{item}</BenefitItem>
          ))}
        </div>
      </div>
    </div>
  );
}

function VaultMetricsData() {
  return (
    <div className="grid grid-cols-2 items-center gap-8">
      <VaultMetric>
        <VaultMetricLabel>
          {VaultMetricData.apy.label}{" "}
          <HelpTooltip className="h-5 w-5">
            APY: Annual Percentage Yield, a measure of potential earnings on
            your crypto investments.
          </HelpTooltip>
        </VaultMetricLabel>
        <VaultMetricValue className="text-[#23BE4F]">
          {VaultMetricData.apy.value}
        </VaultMetricValue>
      </VaultMetric>
      <VaultMetric>
        <VaultMetricLabel>{VaultMetricData.value.label}</VaultMetricLabel>
        <VaultMetricValue>{VaultMetricData.value.value}</VaultMetricValue>
      </VaultMetric>
      <VaultMetric>
        <VaultMetricLabel>{VaultMetricData.Volatility.label}</VaultMetricLabel>
        <VaultMetricValue>{VaultMetricData.Volatility.value}</VaultMetricValue>
      </VaultMetric>
    </div>
  );
}

type VaultMetric = HTMLAttributes<HTMLDivElement>;

function VaultMetric(props: VaultMetric) {
  return <div className="flex flex-col gap-y-1.5">{props.children}</div>;
}

type VaultMetricLabel = HTMLAttributes<HTMLHeadingElement>;

function VaultMetricLabel({
  className,
  children,
  ...props
}: ValueMetricValueProps) {
  return (
    <h5
      className={cn("flex items-center gap-2 font-bold", className)}
      {...props}
    >
      {children}
    </h5>
  );
}

type ValueMetricValueProps = HTMLAttributes<HTMLParagraphElement>;

function VaultMetricValue({
  className,
  children,
  ...props
}: ValueMetricValueProps) {
  return (
    <p className={cn("text-lg", className)} {...props}>
      {children}
    </p>
  );
}
function BenefitItem({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex items-start gap-3", className)} {...props}>
      <Icons.check className="mt-2 w-max shrink-0" />
      {children}
    </div>
  );
}
