import { Switch } from "@/components/ui/switch";
import { Icons } from "./icons";
import { Separator } from "./ui/seprator";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

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
  return (
    <div className="flex w-full flex-col rounded-2xl border px-10 py-9">
      <div>
        <h3>Projected returns</h3>
        {/* tabs */}
        <div className="flex flex-col gap-y-5 py-5">
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
            <Icons.question className="w-max shrink-0" />
          </div>
        </div>
        <Separator />
        <div className="flex flex-col gap-y-12">
          <div className="flex items-center space-x-5">
            <label htmlFor="airplane-mode" className="text-xl">
              Gas token
            </label>
            <Switch className="border-none" id="airplane-mode" />
            <Icons.question className="h-5 w-5 text-lg" />
          </div>
          <button className="cta-btn h-16 w-full rounded-xl text-xl">
            Invest 1000 DAI
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
