import { CurrencyCluster } from "./currencyCluster";

const metricsData: MetricProps[] = [
  {
    label: "Supply",
    data: "Any stablecoin (USDC, USDT, DAI)",
  },
  {
    label: "Earn",
    data: "ETH",
  },
];

export function StrategyBanner() {
  return (
    <div className="banner flex flex-col gap-y-8 rounded-xl px-14 py-11">
      <h3 className="text-2xl font-medium">Strategy</h3>
      <p className="max-w-2xl">
        Investing in this vault will lock up your stable asset <br /> and use
        the yield to invest into (ETH).
      </p>
      <div className="flex flex-col items-center gap-10 py-2 sm:flex-row">
        <CurrencyCluster />
        <div className="flex flex-col gap-y-2">
          {metricsData.map((item, index) => (
            <Metric {...item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

type MetricProps = {
  label: string;
  data: number | string;
};

function Metric(props: MetricProps) {
  return (
    <div className="flex items-center gap-7 text-sm">
      <div className="min-w-[60px]">
        <p className="font-bold">{props.label}:</p>
      </div>
      <p>{props.data}</p>
    </div>
  );
}
