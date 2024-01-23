"use client";

import { Switch } from "@/components/ui/switch";
import { Icons } from "./icons";
import { Separator } from "./ui/seprator";
import { HTMLAttributes, useState } from "react";
import { TimePeriod, calculateReturns, cn } from "@/lib/utils";
import { HelpTooltip } from "./help-tooltip";
import { useCoin } from "@/store/coin-store";
import { useAmount } from "@/store/ammount-store";

const VaultCardData = {
  deposit: {
    title: "Deposit fee",
    vender: {
      percentage: "0%",
      name: "ETHALend",
    },
    gas: {
      label: "gas",
      value: "~8.4 DAI",
    },
  },
  withdraw: {
    title: "Withdraw fee",
    vender: {
      percentage: "1%",
      name: "ETHALend",
    },
    gas: {
      label: "gas",
      value: "~8.4 DAI",
    },
  },
};

export function VaultCard() {
  const [activeTab, setActiveTab] = useState("daily");
  const { currentSelectedValue } = useCoin();
  const { amount } = useAmount();
  const returns = calculateReturns(
    Number(amount),
    activeTab === "daily" ? TimePeriod.Daily : TimePeriod.Yearly,
  );

  return (
    <div className="card flex w-full flex-col rounded-2xl px-10 py-8">
      <div className="flex flex-col gap-y-4">
        <div className="flex items-center justify-between py-5">
          <h3 className="text-lg">Projected returns</h3>
          <Tabs>
            <TabItem
              onChange={() => setActiveTab("daily")}
              isActive={activeTab === "daily"}
              value="daily"
            >
              Daily
            </TabItem>
            <TabItem
              onChange={() => setActiveTab("yearly")}
              isActive={activeTab === "yearly"}
              value="yearly"
            >
              Yearly
            </TabItem>
          </Tabs>
        </div>
        <div className="flex flex-col gap-y-4">
          <div className="text-4xl text-[#D2D6EF]">
            <div className="flex items-center gap-4">
              <currentSelectedValue.Icon className="h-8 w-8" />
              <p>
                +{returns.returns.toFixed(3) ?? 0.0215}{" "}
                {currentSelectedValue.label}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <p>
                per {activeTab == "daily" ? "day" : "year"}{" "}
                <span className="text-[#D2D6EF4D]">est.</span>{" "}
              </p>
              <HelpTooltip className="h-6 w-6">
                Estimate of potential daily and yearly gains in cryptocurrency
              </HelpTooltip>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[#D2D6EF4D]">($512.11)</p>
            <p className="flex items-center gap-2">
              <Icons.chart />
              <a href="#" className="text-xs underline underline-offset-1">
                Past returns performance
              </a>
            </p>
          </div>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col gap-y-5">
          <div className="grid grid-cols-2 gap-5">
            <FeesMetricCard>
              <FeesMetricTitle>{VaultCardData.deposit.title}</FeesMetricTitle>
              <FeesMetricCardContent>
                <FeesMetric
                  label={VaultCardData.deposit.vender.name}
                  value={VaultCardData.deposit.vender.percentage}
                />
                <div className="flex h-full items-center">
                  <Icons.plus />
                </div>
                <FeesMetric
                  label={VaultCardData.deposit.gas.label}
                  value={VaultCardData.deposit.gas.value}
                />
              </FeesMetricCardContent>
            </FeesMetricCard>
            <FeesMetricCard>
              <FeesMetricTitle>{VaultCardData.deposit.title}</FeesMetricTitle>
              <FeesMetricCardContent>
                <FeesMetric
                  label={VaultCardData.deposit.vender.name}
                  value={VaultCardData.deposit.vender.percentage}
                />
                <div className="flex h-full items-center">
                  <Icons.plus />
                </div>
                <FeesMetric
                  label={VaultCardData.deposit.gas.label}
                  value={VaultCardData.deposit.gas.value}
                />
              </FeesMetricCardContent>
            </FeesMetricCard>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-sm text-[#23BE4F]">
              You save ~$213.24 on gas fees
            </p>
            <HelpTooltip>Save ~$213.24 on gas fees.</HelpTooltip>
          </div>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col gap-y-12">
          <div className="flex items-center space-x-5">
            <label htmlFor="airplane-mode" className="text-xl">
              Gas token
            </label>
            <Switch className="border-none" id="airplane-mode" />
            <HelpTooltip className="h-5 w-5 text-lg">
              Fuel transactions with GAS token
            </HelpTooltip>
          </div>
          <button className="cta-btn h-16 w-full rounded-xl text-xl">
            Invest {amount} {currentSelectedValue.label}
          </button>
        </div>
      </div>
    </div>
  );
}

function FeesMetricCard({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex flex-col gap-3", className)} {...props}>
      {children}
    </div>
  );
}

function FeesMetricCardContent({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex items-end gap-5", className)}>{children}</div>
  );
}

function FeesMetricTitle(props: HTMLAttributes<HTMLHeadElement>) {
  return <h3 className="text-xs font-medium">{props.children}</h3>;
}

type FeesMetricProps = {
  label: string;
  value: string;
};

function FeesMetric(props: FeesMetricProps) {
  return (
    <div className="text-sm">
      <p className="mb-2 font-bold">{props.value}</p>
      <h4 className="text-[#D2D6EF4D]">{props.label}</h4>
    </div>
  );
}

function Tabs({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="flex w-max items-center rounded-xl bg-banner text-[#D2D6EF]">
      {children}
    </div>
  );
}

type TabItemProps = HTMLAttributes<HTMLDivElement> & {
  isActive: boolean;
  onChange: () => void;
  value: string;
};

function TabItem({ children, className, onChange, ...props }: TabItemProps) {
  return (
    <div
      role="tab"
      onClick={() => onChange()}
      className={cn(
        "cursor-pointer rounded-xl px-4 py-2.5 text-sm",
        className,
        props.isActive && "tab-active font-medium",
      )}
    >
      {children}
    </div>
  );
}
