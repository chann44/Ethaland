import { StrategyBanner } from "@/components/strategy";
import { BackButton } from "./back-button";
import { CurrencyCluster } from "./currencyCluster";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { Icons } from "./icons";
import { Separator } from "./ui/seprator";
import { VaultCard } from "./vault-card";

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

export function Dashboard() {
  return (
    <section className="mx-auto w-full max-w-5xl">
      <div className="flex flex-col gap-y-7">
        <BackButton />
        <div className="flex items-center gap-5">
          <CurrencyCluster />
          <h1 className="text-4xl font-medium">Ethereum vault</h1>
        </div>
        <div className="flex w-full items-center gap-10">
          <div className="w-full max-w-sm py-10">
            <label htmlFor="amount">Amount</label>
            <div></div>
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
          <VaultCard />
        </div>
      </div>
      <StrategyBanner />
    </section>
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

function VaultMetricsData() {
  return (
    <div className="grid grid-cols-2 items-center gap-8">
      <VaultMetric>
        <VaultMetricLabel>
          {VaultMetricData.apy.label} <Icons.question />
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
